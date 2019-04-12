import React , { Component } from 'react'
import { withStyles } from '@material-ui/core';
import ThirdsTable from './ThirdsTable'


const styles = theme => ({

    root:{
        width:'100%',
        marginBottom:'40px'
        // border:'1px solid red'
    },
    container:{
        width:'80%',
        // border:'1px dotted orange',
        margin:'auto'
    },
    tableItem:{
        height:'auto',
        transform:'translate(0) scale(1)',
        transition:'.9'

        // border:'1px red dotted'
    },
    tableTitle:{
        margin:'20px 0'
    },


    rootTEST: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  imageTEST: {
    position: 'relative',
    height: 225,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisibleTEST': {
      zIndex: 1,
      '& $imageBackdropTEST': {
        opacity: 0.25,
      },
      '& $imageMarkedTEST': {
        opacity: 0,
      },
      '& $imageTitleTEST': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisibleTEST: {},
  imageButtonTEST: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrcTEST: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdropTEST: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitleTEST: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarkedTEST: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }
});



class ThirdsTableContainer extends Component {

  state={
    data:{
      solutions:[
        {
          url:'images/eHopper.jpg',
          title:'Test'
        },
        {
          url:'images/eHopper.jpg',
          title:'Test'
        },
        {
          url:'images/eHopper.jpg',
          title:'Test'
        },
        {
          url:'images/eHopper.jpg',
          title:'Test'
        },
        {
          url:'images/eHopper.jpg',
          title:'Test'
        },
        {
          url:'images/eHopper.jpg',
          title:'Test'
        },
      ]
    } 
  }

  render(){
    return(
      <div>
        <ThirdsTable data={this.state.data} styles={this.props}></ThirdsTable>
      </div>
    )
    
  }
}



export default withStyles(styles)(ThirdsTableContainer)