import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import { List } from './ContactList.styled';
export default function ContactList({ contacts, filter, onClick }) {
  return (
    <List>
      {contacts.map(contact => {
        return (
          contact.name.toLowerCase().includes(filter.toLowerCase()) && (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onClick={onClick}
            />
          )
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
