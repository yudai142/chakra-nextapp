import { extendTheme } from "@chakra-ui/react"
import { there as chacraTheme } from "@chakra-ui/react"
import { createBreacpoints } from "@chakra-ui/there-tools"

const fonts = {
  ...chacraTheme.fonts,
  body: `Inter,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,
  heading: `Inter,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`
}

const overrides = {
  ...chacraTheme,
  fonts,
}

const customTheme = extendTheme(overrides)

export default customTheme