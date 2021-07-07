import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  media: {
    height: 540,
  },
});

export default function  MeetupDetail({imgl,title,subtitle,address}) {
  const classes = useStyles();

  return (        <div className="row justify-content-center">
<div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 mx-auto"><div className="row justify-content-center">
      <div className="col-xs-10 col-sm-10 col-md-8 col-lg-8 col-xl-8">
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={imgl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h1">
            {title}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="h1">
            {subtitle}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h4">
            {address}
          </Typography>
        </CardContent>

    </Card></div></div></div></div>
  );
}
