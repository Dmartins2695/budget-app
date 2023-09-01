import { AccountMenu } from './AccountMenu'
import { Grid } from '@mui/material'
import { PALLETE } from '../constants/pallete'

export const Navbar = (props) => {
  const { signOut, user } = props
  return (
    <Grid container justifyContent={'flex-end'} alignContent={'center'} sx={{ background: PALLETE.NAVBAR, padding: '5px' }}>
      <Grid items>
        <AccountMenu signOut={signOut} user={user} />
      </Grid>
    </Grid>
  )
}
