import React from 'react';
import { Box, Image} from 'gestalt';
import 'gestalt/dist/gestalt.css';

const SmallImage = (props) => (
  <Box
    padding={2}
    width={280}
    height={280}
    >
    <Image
      alt={props.alt}
      fit="cover"
      src={props.src}
      naturalHeight={1}
      naturalWidth={1}
      color="#000"
       />
  </Box>
)

export default SmallImage;
