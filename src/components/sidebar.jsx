import { Box, Button, Grid, InputBase, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

const CustomInput = styled(InputBase)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.dark,
  fontWeight: 600,
  textAlign: 'center',
  padding: theme.spacing(1.5, 4),
  borderRadius: 5,
  display: 'block',
  '&:focus': {
    display: 'none',
  },
  '&:not(:last-child)': {
    marginBottom: theme.spacing(2),
  },
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.dark,
  padding: theme.spacing(2, 4),
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.dark,
  },
}));

const Sidebar = (props) => {
  return (
    <Box
      sx={{
        background: '#F6BD60',
        p: 4,
        borderRadius: 5,
      }}
    >
      <Stack spacing={4}>
        <Typography variant="h4" align="center" color="primary.dark">
          स्टुडेंट{' '}
          <Typography variant="inherit" fontWeight="700" display="inline">
            CRUD
          </Typography>
        </Typography>
        <Box>
          <CustomInput placeholder="enter your fullname" />
          <CustomInput placeholder="enter your e-mail address" />
          <CustomInput placeholder="enter your phone number" />
          <CustomInput placeholder="enter your state" />
          <CustomInput placeholder="enter your city" />
          <CustomInput placeholder="enter your pincode" />
          <CustomInput placeholder="enter your class" />
        </Box>
        <PrimaryButton startIcon={<AddCircleTwoToneIcon />}>
          create new student
        </PrimaryButton>
      </Stack>
    </Box>
  );
};

export default Sidebar;
