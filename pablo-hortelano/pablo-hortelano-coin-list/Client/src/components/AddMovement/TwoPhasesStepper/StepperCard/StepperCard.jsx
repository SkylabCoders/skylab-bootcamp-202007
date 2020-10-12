import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function StepperCard(props) {
  const classes = useStyles();

  console.log("Mira este", props);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Confirm the info below:
        </Typography>
        <Typography variant="body2" component="p">
          Date: {props.selectedDate}
          <br />
          Coin: {props.name}
          <br />
          Quantity: {props.quantityValues}
          <br />
          Price: {props.priceValues}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
