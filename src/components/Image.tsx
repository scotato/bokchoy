import * as React from 'react'
import {
  Grid,
  GridProps,
  Image as ChakraImage,
  ImageProps,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaLayerGroup } from 'react-icons/fa'
import { ImageObject } from 'schema-dts'

export const Image = (props: ImageProps) => {
  const fallbackColor = useColorModeValue('gray.300', 'gray.700')
  const fallbackIconColor = useColorModeValue('gray.100', 'gray.600')
  const src =
    typeof props.src === 'object' ? (props.src as ImageObject)?.url : props.src

  return (
    <ChakraImage
      objectPosition="center"
      objectFit="cover"
      alt="thumbnail"
      fallback={
        <Grid
          width={props.width}
          height={props.height}
          boxSize={props.boxSize}
          borderRadius={props.borderRadius}
          bg={fallbackColor}
          color={fallbackIconColor}
          placeItems="center"
          alignContent="center"
          templateColumns="1fr"
          templateRows="1fr"
          {...(props as GridProps)}
        >
          <Icon as={FaLayerGroup} width="50%" height="50%" />
        </Grid>
      }
      {...props}
      src={src as string}
    />
  )
}
