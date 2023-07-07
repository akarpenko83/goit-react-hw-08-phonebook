import PropTypes from 'prop-types';
import { DeleteButton } from './Contact.styled';

import { Loading, Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts/contactOperations';
import { contactsSelectors } from 'redux/contacts/contactSlice';

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
    <>
      {name}: {number}
      <DeleteButton
        onClick={() => deleteContact(contactId)}
        type="button"
        disabled={loading}
      >
        Delete
      </DeleteButton>
    </>
  );
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.any.isRequired,
  contactId: PropTypes.string.isRequired,
};
