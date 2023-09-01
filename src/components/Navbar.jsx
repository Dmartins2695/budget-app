import { AccountMenu } from './AccountMenu'
import { Button, Grid } from '@mui/material'
import { PALLETE_LIGHT } from '../constants/pallete'
import { useNavigate } from 'react-router-dom'

export const Navbar = (props) => {
  const { signOut, user } = props
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/home')
  }

  return (
    <Grid
      container
      justifyContent={'flex-end'}
      alignContent={'center'}
      alignItems={'center'}
      sx={{ background: PALLETE_LIGHT.NAVBAR, padding: '5px', minHeight: '40px' }}
    >
      <Grid item>
        <Button onClick={handleOnClick}> Home </Button>
      </Grid>
      <Grid item>
        <AccountMenu signOut={signOut} user={user} />
      </Grid>
    </Grid>
  )
}
