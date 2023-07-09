import { Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <>
      <Typography
        sx={{
          paddingTop: '100px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '80px',
          textShadow: '1px 1px',
          color: 'darkblue',
        }}
        component="h1"
      >
        Keep your contacts safe
      </Typography>
    </>
  );
};
