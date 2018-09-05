import React, { Component } from 'react';
import { Box, Heading, Text} from 'gestalt';
import 'gestalt/dist/gestalt.css';
import images from '../images/images';
import SmallImage from './smallImage';
import LongImage from './longImage';

class App extends Component {
  render() {
    return (
      <Box
         column={12}
         color="lightGray"
         display="flex"
         justifyContent="center"
         padding={2}
          >
        <Box
           maxWidth={960}
           column={12}
           color="white"
           shape="roundedTop"
            >
            <Box
               color="blue"
               shape="roundedTop"
               >
               <Text align="center">
                 <Heading size="lg" color="white">
                   Look at cute animals!
                 </Heading>
               </Text>
            </Box>
            <Box
               display="flex"
               direction="column" mdDirection="row"
                >
              <Box
                 column={12}
                 mdColumn={8}
                 display="flex"
                 direction="row"
                 wrap={true}
                 justifyContent="around"
                 >
                <SmallImage
                  alt={"cat"}
                  src={images.cat}
                 />
                <SmallImage
                  alt={"brownDog"}
                  src={images.brownDog}
                 />
                <SmallImage
                  alt={"lonelyDog"}
                  src={images.lonelyDog}
                 />
                <SmallImage
                  alt={"duck"}
                  src={images.duck}
                 />
                <SmallImage
                  alt={"threeCat"}
                  src={images.threeCat}
                 />
                <SmallImage
                  alt={"smallDog"}
                  src={images.smallDog}
                 />
              </Box>
              <Box
               column={12}
               mdColumn={4}
               display="flex"
               direction="row"
               justifyContent="around"
               >
                <LongImage
                  alt={"redPanda"}
                  src={images.redPanda}
                 />
              </Box>
            </Box>
        </Box>
      </Box>
    );
  }
}

export default App;
