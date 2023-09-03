import { Box, Grid } from '@mui/material'
import './home.css'
import { NumberDisplayer } from '../../components/NumberDisplayer'

export const Home = (props) => {
  return (
    <Box>
      <Grid container flexDirection={'row'} alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
        <Grid item xs>
          <NumberDisplayer title={'Balance'} value={'1300'} type={'balance'} />
        </Grid>
        <Grid item xs>
          <NumberDisplayer title={'Savings'} value={'1300'} type={'savings'} />
        </Grid>
        <Grid item xs>
          <NumberDisplayer title={'Weekly Spent'} value={'1300'} type={'expense'} />
        </Grid>
        <Grid item xs>
          <NumberDisplayer title={'Weekly Budget'} value={'1300'} type={'budget'} />
        </Grid>
        <Grid item xs>
          <NumberDisplayer title={'Monthly Budget'} value={'1300'} type={'budget'} />
        </Grid>
      </Grid>
    </Box>
  )
}
