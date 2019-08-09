import React, { Component } from 'react';
import SliderTemplate from './sliderTemplate';

//mui
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  image: {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  contentCont: {
    position: 'absolute',
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#f1f1f1',
    width: '90%',
    padding: '20px'
  },
  container: {
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#f1f1f1'
  }
})

class SliderContainer extends Component {

  render() {
    return (
      <SliderTemplate styles={this.props} />
    );
  };
};

export default withStyles(styles)(SliderContainer)

