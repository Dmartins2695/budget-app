import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'
import SavingsIcon from '@mui/icons-material/Savings'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import { PALLETE_LIGHT } from '../constants/pallete'

export const NumberDisplayer = (props) => {
  const { title, value, type } = props

  const getIcon = () => {
    switch (type) {
      case 'balance':
        return <AccountBalanceIcon sx={{ color: PALLETE_LIGHT.DEFAULT, margin: '5px' }} />
      case 'savings':
        return <SavingsIcon sx={{ color: PALLETE_LIGHT.DEFAULT, margin: '5px' }} />
      case 'budget':
        return <CreditCardIcon sx={{ color: PALLETE_LIGHT.DEFAULT, margin: '5px' }} />
      case 'expense':
        return <ShoppingCartCheckoutIcon sx={{ color: PALLETE_LIGHT.DEFAULT, margin: '5px' }} />
      default:
        return <AccountBalanceWalletIcon sx={{ color: PALLETE_LIGHT.DEFAULT, margin: '5px' }} />
    }
  }

  return (
    <Paper elevation={1} sx={{ margin: '1rem', padding: '0.5rem', width: '12rem', height: '7rem' }}>
      <Grid item>
        <Stack spacing={1}>
          <Box textAlign={'start'}>
            <Grid container flexDirection={'row'} justifyContent={'flex-start'} alignContent={'center'} alignItems={'center'}>
              <Grid item>{getIcon(type)}</Grid>
              <Grid>
                <Typography color={PALLETE_LIGHT.DEEP_ORANGE} sx={{ fontWeight: 700 }}>
                  {title}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box textAlign={'end'}>
            <Grid container flexDirection={'row'} justifyContent={'flex-end'} alignItems={'flex-end'} alignContent={'center'}>
              <Grid item>
                <Typography color={PALLETE_LIGHT.DEFAULT} sx={{ fontSize: 24 }}>
                  {value ? value : '0'}
                </Typography>
              </Grid>
              <Grid item>
                <EuroSymbolIcon sx={{ marginTop: '3px', width: 24, height: 24, color: PALLETE_LIGHT.DEFAULT }} />
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    </Paper>
  )
}
