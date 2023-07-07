import { FilterContainer } from './Filter.styled';
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
    <FilterContainer>
      Find contact by name
      <input
        value={filterValue}
        onChange={handleChangeFilter}
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </FilterContainer>
  );
}
