import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  return (

    <div>
      <Typography 
      varient='h1'
      color='primary'
      align='center'
      gutterBottom
      >
      <b>WSO2</b>
      </Typography>

      <Button
        variant="outlined"
        size="large" 
        color="secondary" 
        disableElevation
        className={classes.margin}
        endIcon={<Icon>send</Icon>}
      >
        Make New Job Advertisement
      </Button>
    </div>
  )
}
