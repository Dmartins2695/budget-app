import { Box, Grid } from '@mui/material'
import './home.css'
import { Navbar } from '../components/Navbar'

export const Home = (props) => {
  const { signOut, user } = props
  return (
    <Box>
      <Navbar signOut={signOut} user={user} />
      <Grid></Grid>
    </Box>
  )
}
