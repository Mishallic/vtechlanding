import React, { Component } from 'react';
import Products from './products';

//mui
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({

  root: {
    marginBottom: '20px',
    width: '100%',
    // border:'1px solid red'
  },
  container: {
    width: '80%',
    // border:'1px dotted orange',
    margin: 'auto'
  },
  tableItem: {
    height: 'auto',

    // border:'1px red dotted'
  },
  tableTitle: {
    margin: '20px 0'
  },


  rootTEST: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 225,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.25,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
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
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
})

class ProductsContainer extends Component {

  state = {
    data: {
      products: [
        {
          url: 'images/vtek/table1-ds.png',
          label: 'Resto Prime POS '
        },
        {
          url: 'images/vtek/table2-ds.png',
          label: 'Label Printer LK-B31'
        },
        {
          url: 'images/vtek/table3-ds.jpg',
          label: 'Wind 015T Scale'
        },
        {
          url: 'images/vtek/table4-ds.png',
          label: 'delpos Stylish POS'
        },
        {
          url: 'images/vtek/table5.jpg',
          label: 'Shop Prime POS'
        },
        {
          url: 'images/vtek/table6-ds.jpg',
          label: 'DataLogic QD2131 Imager Scanner'
        }
      ]
    }
  };

  render() {
    return (
      <Products data={this.state.data} styles={this.props} />
    );
  };
};

export default withStyles(styles)(ProductsContainer);