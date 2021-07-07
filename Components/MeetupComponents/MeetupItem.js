import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 240,
  },
});

export default function MeetupItem({index,id,imagelink,heading}) {
  const classes = useStyles();
  let router=useRouter()
let navfunction=()=>{
console.log(router)
router.push('/'+id)
}
  return (
      <div className="col-xs-10 col-sm-10 col-md-6 col-lg-4 col-xl-3 mb-3">
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={imagelink+id}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {heading}
          </Typography>
        </CardContent>
<CardContent>
        <button onClick={navfunction} className="btn btn-outline-primary">More</button>
</CardContent>
    </Card></div>
  );
}
