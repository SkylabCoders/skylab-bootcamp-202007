
const debug = require('debug')('app');
const logics = require('../logic/answersScore');

function projectsController(Project) {

  const post = (req, res) => {
    const newProject = req.body;

    Project.create(newProject, (error, project) => {
      if (error) {
        res.send(404);
      } else {
        res.json(project);
        res.status(200);
      }
    });

  }

  const get = (req, res) => {
    const { userId } = req.query;
    const query = { userId };

    Project.find(query, (error, projects) => {
      if (error) {
        res.send(error);
      }

      res.status(200);
      res.json(projects);

    });
  }

  const deleter = async (req, res) => {
    const { projectName } = req.query;
    const query = { projectName };

    await Project.find(query, (error, project) => {
      if (error) {
        res.send(error);
      } else {
        const deleteQuery = {
          projectName: project[0].projectName
        }
        Project.deleteOne(deleteQuery, (err, response) => {
          if (err) {
            return res.send(err);
          } else {
            res.status(204);
            return res.json(response)
          }
        })
      }

    });

  }
  const put = (req, res) => {
    const newObject = {}
    Object.entries(req.body.answers).forEach((prop) => {
      const keys = prop[0];
      const value = prop[1];
      newObject[keys] = value
    })

    const answers = newObject;
    const projectId = req.body.projectId;

    Project.updateOne({ _id: projectId }, { $set: { answers } }, (error, response) => {
      if (error) {
        res.send(error);
      } else {
        res.status(200);
        return res.json(answers)
      }
    });
  }

  const getScores = (req, res) => {

    const projectId = req.params.projectId;

    Project.findOne({ _id: projectId }, (error, project) => {
      if (error) {
        res.send(error);
      }
      logics.calc(project.answers);
      const answers = project.answers;

      Project.updateOne({ _id: projectId }, { $set: { answers } }, (err, response) => {
        if (err) {
          res.send(err);
        } else {
          res.status(200);
          return res.json(answers);
        }
      });

    });
  }

  return { post, get, deleter, put, getScores };
}

module.exports = projectsController;

