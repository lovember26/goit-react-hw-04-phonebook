import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Wrapper, Title } from './App.styled';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    contacts.length > 0 &&
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = data => {
    contacts.some(el => el.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevState => [
          ...prevState,
          { name: data.name, number: data.number, id: nanoid() },
        ]);
  };
  const handleFilter = ({ target }) => {
    setFilter(target.value);
  };
  const onClick = id => {
    const newArr = [...contacts];

    const indexOfDelEl = newArr.findIndex(el => el.id === id);
    newArr.splice(indexOfDelEl, 1);

    setContacts(newArr);
    if (newArr.length === 0) {
      localStorage.removeItem('contacts');
    }
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm createContact={createContact} />
      <Title>Contacts</Title>
      <Filter handleFilter={handleFilter} value={filter} />
      <ContactList contacts={contacts} filter={filter} onClick={onClick} />
    </Wrapper>
  );
};
