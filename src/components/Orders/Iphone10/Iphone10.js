import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Iphone10Image from '../../../assets/iphone-10.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"

  },
  details: {
    display: "flex",
    flexDirection: "row"
  },
  
  cover: {
    width: 187,
    height: 200
  },
  t1: {
    display: "inline-block",
    marginLeft: 20   
  },
  t2: {
    display: "inline-block",   
    marginLeft: 80
  },
  t3: {
    display: "inline-block",
    marginLeft: 110  
  },
  t4: {
    marginTop: 26,
    marginLeft: 220
  },
  t5: {
    marginLeft: 365,
    marginTop: -27
    }
}));

const MediaControlCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={Iphone10Image}
        title="Iphone10"
      />
      <div className={classes.details}>
        <CardContent>
          <Typography component="h5" variant="h5" className={classes.t1}>
            Iphone10
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" className={classes.t2}>
            Quantity
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" className={classes.t3}>
            Price
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" className={classes.t4}>
            {<strong>{props.quantity}</strong>}
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" className={classes.t5}>
            {<strong>{props.price * props.quantity}</strong>}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default MediaControlCard;