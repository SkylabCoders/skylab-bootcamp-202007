import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import questionType from '../questionType';
import InputNumber from './InputNumber';
import InputBoolean from './InputBoolean';
import InputPercent from './InputPercent';

import { loadQuestions, saveAnswers } from '../actions/projectActions';
import projectStore from '../stores/projectStore';
import { withAuthenticationRequired } from '@auth0/auth0-react';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));


function Form({ step, stepChange }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [categories, setCategories] = useState([]);
  const [answers] = useState([]);
  const [finish, setFinish] = useState(false);


  let project = JSON.parse(sessionStorage.project);

  function checkFinish() {

    if (activeStep === categories[step].credits.length - 2 && step === categories.length - 1) {
      setFinish(true);
    } else {
      setFinish(false);
    }
  }

  const handleNext = () => {
    checkFinish()
    if (activeStep === categories[step].credits.length - 1) {
      stepChange(step + 1);
      setActiveStep(0);

    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === categories[step].credits.length - 1) {
      setActiveStep(activeStep - 1);
      checkFinish()
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  }

  useEffect(() => {
    projectStore.addChangeListener(onChange);
    if (categories.length === 0) {
      loadQuestions();
    }

    return () => projectStore.removeChangeListener(onChange);
  }, [categories.length]);

  function onChange() {
    setCategories(projectStore.getCategories());
  }

  function updateAnswers(questionId, value) {
    console.log(questionId, value);
    answers[questionId] = { input: value, score: 0 }
    saveAnswers({ answers, projectId: project.data._id });
  }


  function getStepContent(question) {
    switch (question.responseType) {
      case questionType.NUMBER:
        return (
          <InputNumber
            maxValue={question.maxValue}
            questionId={question.id}
            onChange={(value) => updateAnswers(question.id, value)}
          />
        );

      case questionType.BOOLEAN:
        return (
          <InputBoolean
            onChange={(value) => updateAnswers(question.id, value)}
          />
        );
      case questionType.PERCENT:
        return (
          <InputPercent
            onChange={(value) => updateAnswers(question.id, value)}
          />
        );
      default:
        return 'Unknown step';
    }
  }


  return (
    categories.length && <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
        {
          <>
            <h2>{categories[step].name}</h2>
            <Stepper activeStep={activeStep} orientation="vertical">
              {categories[step].credits.map((credit, index) => (
                <Step key={credit.name}>
                  <StepLabel>{credit.name}</StepLabel>
                  <StepContent>
                    {credit.questions.map(question => <div key={question.id}>
                      <div>
                        <span>{question.text}</span>
                        <div style={{
                          marginTop: "20px",
                          marginBottom: "20px"
                        }}>{getStepContent(question)}</div>
                      </div>
                    </div>)}
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Atrás
                        </Button>
                        {finish && (
                          <Button
                            variant="contained"
                            color="warning"
                            href="/results"
                            className={classes.button}
                            style={{ backgroundColor: "orange" }}
                          >
                            Finalizar Formulario
                          </Button>
                        )}
                        {!finish && (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            {activeStep === categories[step].credits.length - 1 ? 'Siguiente categoría' : 'Siguiente crédito'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </StepContent>
                </Step>
              )) || <div>loading...</div>}
            </Stepper>
          </>
        }
      </Container>
    </div>
  ) || <div>Loading...</div>;
}
export default withAuthenticationRequired(Form, {
  onRedirecting: () => (<div>Loading...</div>)
});
