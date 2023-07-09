import PropTypes from 'prop-types';

import { Loading, Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts/contactOperations';
import { contactsSelectors } from 'redux/contacts/contactSlice';
import {
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material';

export default function Contact({
  name,
  number,
  contactId,
}) {
  const dispatch = useDispatch();
  const loading = useSelector(
    contactsSelectors.selectIsLoading,
  );
  const deleteContact = async contactId => {
    try {
      Loading.hourglass();
      console.log(contactId);
      await dispatch(
        contactsOperations.removeContact(contactId),
      );
      Notify.success(
        `Successfully deleted from contact list`,
      );
    } catch (error) {
      Notify.failure(error.message);
    } finally {
      Loading.remove();
    }
  };
  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Paper
        sx={{
          padding: '10px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontStyle: 'italic',
          }}
        >
          {number}
        </Typography>
        <Button
          size="small"
          variant="contained"
          onClick={() => deleteContact(contactId)}
          type="button"
          disabled={loading}
        >
          Delete
        </Button>
      </Paper>
    </Container>
  );
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.any.isRequired,
  contactId: PropTypes.string.isRequired,
};
