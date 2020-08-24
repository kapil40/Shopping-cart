import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import MicromaxImage from '../../../assets/Micromax.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: 'center'
  },
  media: {
    height: 140,
  },
  cart: {
      margin: 'auto',
      display: 'block'
  }
});

const micromax = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={MicromaxImage}
          title="MICROMAX"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            MICROMAX
          </Typography>
          <Typography variant="subtitle1" color="inherit" component="p">
            PRICE: ₹ 10000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <IconButton 
            className={classes.cart} 
            color="primary" 
            aria-label="add to shopping cart"
            onClick={props.itemsAdded}>
            <AddShoppingCartIcon />
        </IconButton>
        <IconButton 
            className={classes.cart} 
            color="primary" 
            aria-label="remove from shopping cart"
            onClick={props.itemsRemoved}
            disabled={props.disabled['micromax']}>
            <RemoveShoppingCartIcon />
        </IconButton>
        
      </CardActions>
    </Card>
  );
}

export default micromax;