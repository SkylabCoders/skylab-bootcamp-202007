import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default withRouter(function ({ history }) {
  const classes = useStyles();
  const [name, setName] = useState({ text: '' });
  const [email, setEmail] = useState({ text: '' });
  const [pass, setPass] = useState({ text: '' });
  const [pass2, setPass2] = useState({ text: '' });


  function sendInputs(event, nameParams, emailParams, passParams) {
    event.preventDefault();
    if (nameParams.text === '' || emailParams.text === '' || passParams.text === '' || pass2.text !== passParams.text) {
      return false;
    } else {
      history.push('/login');

    }

    console.log(nameParams, emailParams, passParams);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{
        marginTop: "80px",
        marginBottom: "60px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
      }}>
        <Container maxWidth="xs">
          <h2>Crea tu cuenta</h2>
          <TextField
            value={name.text}
            onChange={event => setName({ text: event.target.value })}
            error={name.text === ""}
            id="outlined-name"
            label="Nombre"
            variant="outlined"
          />
          <TextField
            value={email.text}
            onChange={event => setEmail({ text: event.target.value })}
            error={email.text === ""}
            id="outlined-email"
            label="e-mail"
            variant="outlined"
          />
          <TextField
            value={pass.text}
            onChange={event => setPass({ text: event.target.value })}
            error={pass.text === ""}
            id="outlined-ubicacion"
            label="Password"
            type="password"
            variant="outlined"
          />
          <TextField
            value={pass2.text}
            onChange={event => setPass2({ text: event.target.value })}
            error={pass2.text !== pass.text}
            id="outlined-ubicacion"
            label="Confirme el Password"
            type="password"
            variant="outlined"
          />
          <div>
            <Button variant="contained" color="primary"
              onClick={(event) => sendInputs(event, name, email, pass)}
            >
              Enviar
          </Button>
          </div>
        </Container>
      </div>
    </form>
  );
})