import React from 'react';

//carousel
import { CarouselProvider, Slider, Slide,Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
//mui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

 
const SliderTemplate = (props) => {

  const {classes} = props.styles;

  return (
    <Grid>
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={130}
        totalSlides={2}
        interval={3000}
        isPlaying={true}
      >        
        <Slider style={{height:'100%'}}>

          <Slide>
            <div className={classes.container}>
              <Image
                tag='img' 
                className={classes.image} 
                index={2}  
                src='images/web3.jpg'
              />
              
              <Grid className={classes.contentCont}>
                <Typography variant='h3' color='secondary'>Restaurants</Typography>
                <Typography color='secondary'>lorem ipusm test the paragraph when tthank lorem</Typography>
              </Grid>

            </div>
          </Slide>

          <Slide>
            <div className={classes.container}>
                <Image
                  tag='img' 
                  className={classes.image} 
                  index={2}  
                  src='images/web2.jpg'
                />
              <div className={classes.contentCont}>
                <Typography  variant='h3' color='secondary'>Retail</Typography>
                <Typography color='secondary'>lorem ipusm test the paragraph when tthank lore</Typography>
              </div>
            </div>
          </Slide>

        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </Grid>
  );
};

export default SliderTemplate