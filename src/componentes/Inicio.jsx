import React from 'react'
import { Fade } from 'react-awesome-reveal';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

const Inicio = () => {
  return (
    <Fade>
      <main style ={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <ImageSlider slides={SliderData} />
      </main>
    </Fade>
  )
}

export default Inicio
