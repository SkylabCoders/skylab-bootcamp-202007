const express = require("express");
const sql = require("mssql");
const debug = require("debug")("heroRoutes");

const heroRoutes = express.Router();
const request = new sql.Request();

function router(nav) {
  heroRoutes
    .route("/")
    .get((req, res) => {
      (async function query() {
        try {
          const { recordset } = await request.query("SELECT * FROM skylabers");

          res.render("heroes", {
            nav,
            title: "My Heros",
            heroes: recordset,
          });
        } catch (error) {
          debug(error.stack);
        }
      })();
    })
    .post((req, resp) => {
      (async function query() {
        try {
          debug("eoeoeoeoe");
          const insertQuery =
            "INSERT INTO skylabers VALUES(99, 'BOMBASTO', 'Robinet', 30, 1, 'La Plata', 'Argentina', '1990-04-28', 'Luxemburgo', 'male');";
          await request.query(insertQuery);

          // eslint-disable-next-line no-console
          console.log(resp.body);
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
    .get((req, res) => {
      res.render("detail", {
        nav,
        hero: res.hero,
      });
    })
    .delete()
    .put(); /* create */
  heroRoutes
    .route("/dashboard")
    .all((req, res, next) => {
      const id = +req.params.heroId;
      (async function query() {
        try {
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
    .get((req, res) => {
      res.render("dashboard", {
        nav,
        hero: res.hero,
      });
    })
    .delete()
    .put(); /* create */

  return heroRoutes;
}

module.exports = router;
