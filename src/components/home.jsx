import { Box } from '@mui/material';
import bg from '../assets/bg.svg';
const Home = (props) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundImage: `url('${bg}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
      }}
    ></Box>
  );
};

export default Home;
