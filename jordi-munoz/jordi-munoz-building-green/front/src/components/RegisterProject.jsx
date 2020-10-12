import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { registerNewProject, loadProjects } from '../actions/projectActions';
import ProjectsList from './ProjectsList';
import projectStore from '../stores/projectStore';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default withAuthenticationRequired(withRouter(function ({ history }) {
  const classes = useStyles();
  const [name, setName] = useState({ text: '' });
  const [loc, setLoc] = useState({ text: '' });
  const [square, setSquare] = useState({ text: '' });
  const [projects, setProjects] = useState([]);

  let user = JSON.parse(sessionStorage.user);

  function sendInputs(event, nameParam, locParam, squareParam) {
    event.preventDefault();
    if (nameParam.text === '' || locParam.text === '' || squareParam.text === '') {
      return false;
    } else {
      let dataProject = { projectName: nameParam.text, location: locParam.text, square: squareParam.text, userId: user.data.userId };
      registerNewProject(dataProject);
      history.push('/form');
    }
  }

  useEffect(() => {
    projectStore.addChangeListener(onChange);
    if (projects.length === 0) {

      loadProjects(user.data.userId);
    }

    return () => projectStore.removeChangeListener(onChange);
  }, [projects.length, user.data.userId]);

  function onChange() {
    setProjects(projectStore.getProjects());

  }


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{
        marginTop: "80px",
        marginBottom: "60px",
        marginLeft: "30px",
        marginRight: "30px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"

      }}>

        <div>
          <ProjectsList projects={projects} />
        </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        }}>
          <Container maxWidth="xs">
            <h2>Registro de Proyecto</h2>
            <TextField
              value={name.text}
              onChange={event => setName({ text: event.target.value })}
              error={name.text === ""}
              id="outlined-nombre"
              label="Nombre"
              variant="outlined"
            />
            <TextField
              value={loc.text}
              onChange={event => setLoc({ text: event.target.value })}
              error={loc.text === ""}
              id="outlined-ubicacion"
              label="Ubicación"
              variant="outlined"
            />
            <TextField
              value={square.text}
              onChange={event => setSquare({ text: event.target.value })}
              error={square.text === ""}
              id="outlined-number"
              label="m2"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <div>
              <br />
              <Button variant="contained" color="primary"
                onClick={(event) => sendInputs(event, name, loc, square)}
              >
                Registrar
              </Button>
            </div>

          </Container>
        </div>

      </div>
    </form>
  );
}), {
  onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});

