import { createTheme } from '@mui/material/styles'
import { PALLETE_LIGHT } from './pallete'

export const theme = createTheme({
  palette: {
    primary: {
      main: PALLETE_LIGHT.PRIMARY
    },
    secondary: {
      main: PALLETE_LIGHT.SECONDARY
    }
  }
})
