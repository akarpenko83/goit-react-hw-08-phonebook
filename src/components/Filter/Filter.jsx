import { Container, Paper, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(
    state => state.filter.value,
  );
  const handleChangeFilter = evt => {
    dispatch(updateFilter(evt.target.value));
  };
  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
      }}
    >
      <Paper
        sx={{
          padding: '10px',
          width: '100%',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgb(127, 212, 158)',
        }}
      >
        <TextField
          fullWidth
          variant="filled"
          value={filterValue}
          onChange={handleChangeFilter}
          id="filterName"
          label="Find contact by name"
          type="text"
          name="name"
          autoComplete="on"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Paper>
    </Container>
  );
}
