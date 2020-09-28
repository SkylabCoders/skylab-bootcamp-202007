import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import './Login.scss';



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
  const [email, setEmail] = useState({ text: '' });
  const [pass, setPass] = useState({ text: '' });


  function sendInputs(event, emailParam, passParam) {
    event.preventDefault();
    if (emailParam.text === '' || passParam.text === '') {
      return false;
    } else {
      history.push('/');

    }

    console.log(emailParam, passParam);
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
          <h2>Accede a tu cuenta</h2>
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
          <div>
            <Button variant="contained" color="primary"
              onClick={(event) => sendInputs(event, email, pass)}
            >
              Acceder
          </Button>
          </div><br />
          <Divider variant="middle" />
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p className="login-p">Accede con:</p>
            <img className="login-img" src="https://bookassist.org/wp-content/uploads/elementor/thumbs/google_3_520-oc7dqerwmsbfad0t1gveosa6x2uck2bd7y6l2r7txs.jpg" alt="google" />
          </div><br />
          <Divider variant="middle" /><br />
          <Button variant="contained" color="primary"
            href="/user-register"
          >
            Registrarse
      </Button>
        </Container>
      </div>
    </form>
  );
})