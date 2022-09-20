import { Box } from '@chakra-ui/react';
import React from 'react'
import Slider from "react-slick";
import {ImHtmlFive} from 'react-icons/im'
import {RiCss3Fill} from 'react-icons/ri'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
export default function Skills() {
  return (
    <div>
      <Box>
  <Slider {...settings}>

<Box><ImHtmlFive size={70}/></Box>
<Box><RiCss3Fill size={70}/></Box>
<Box><RiCss3Fill size={70}/></Box>
<Box><RiCss3Fill size={70}/></Box>
<Box><RiCss3Fill size={70}/></Box>
<Box><RiCss3Fill size={70}/></Box>
<Box><RiCss3Fill size={70}/></Box>
<Box><RiCss3Fill size={70}/></Box>

        </Slider>

        </Box>

    </div>
  )
}
