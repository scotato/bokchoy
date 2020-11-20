import * as React from "react"
import {
  chakra,
  ImageProps,
} from "@chakra-ui/react"
import logo from "./logo192.png"

export const Logo = (props: ImageProps) => {
  return <chakra.img src={logo} {...props} />
}
