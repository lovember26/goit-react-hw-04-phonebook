import PropTypes from 'prop-types';
import { Form, Input } from 'components/ContactForm/ContactForm.styled';
export default function Filter({ handleFilter, value }) {
  return (
    <Form>
      <label htmlFor="filter">Find contacts by name</label>
      <Input
        type="text"
        name="filter"
        id="filter"
        onChange={handleFilter}
        value={value}
      />
    </Form>
  );
}
Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
