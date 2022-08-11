import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';

import Home from './components/home';
import Sidebar from './components/sidebar';

const boxStyle = {
  height: '100vh',
  width: '100vw',
  bgcolor: 'primary.extraLight',
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={boxStyle}>
          <Container maxWidth="xl" sx={{ py: 2 }}>
            <Grid columnSpacing={4} container>
              <Grid item md={3}>
                <Sidebar />
              </Grid>
              <Grid item md={9}>
                <Home />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
