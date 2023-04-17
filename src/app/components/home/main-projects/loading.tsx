'use client'

import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

const loadingPortfolio = () => (
  <Box sx={{
    width: '100%',
    height: '98vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <CircularProgress style={{ color: 'white' }} />
  </Box>
)

export default loadingPortfolio
