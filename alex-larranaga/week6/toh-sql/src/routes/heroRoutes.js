const express = require("express");
const sql = require("mssql");
const debug = require("debug")("heroRoutes");

const heroRoutes = express.Router();

function router(nav) {
  heroRoutes.route("/").get((req, res) => {
    (async function query() {
      try {
        const request = new sql.Request();

        const { recordset } = await request.query("SELECT * FROM skylabers");
        debug(recordset);
        res.render("heroes", {
          nav,
          title: "My Heros",
          heroes: recordset,
        });
      } catch (error) {
        debug(error.stack);
      }
    })();
  });
  heroRoutes
    .route("/:heroId")
    .all((req, res, next) => {
      const id = +req.params.heroId;
      (async function query() {
        try {
          const request = new sql.Request();
          const { recordset } = await request
            .input("id", sql.Int, id)
            .query(`select * from skylabers where id= @id`);
          [res.hero] = recordset;
          next();
        } catch (error) {
          debug(error.stack);
        }
      })();
    })
    .post() /* update */
    .get((req, res) => {
      res.render("detail", {
        nav,
        hero: res.hero,
      });
    })
    .delete()
    .put(); /* create */

  heroRoutes.route("/");

  return heroRoutes;
}

module.exports = router;
