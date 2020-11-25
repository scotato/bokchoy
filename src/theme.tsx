import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        // color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode('gray.100', 'gray.900')(props),
      },
    }),
  },
})
