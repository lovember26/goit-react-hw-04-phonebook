import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Wrapper, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  createContact = data => {
    this.state.contacts.some(el => el.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [
            { name: data.name, number: data.number, id: nanoid() },
            ...prevState.contacts,
          ],
        }));
  };
  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  onClick = id => {
    const newArr = this.state.contacts;
    const indexOfDelEl = newArr.findIndex(el => el.id === id);
    newArr.splice(indexOfDelEl, 1);
    this.setState({ contacts: newArr });
  };
  render() {
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm
          createContact={this.createContact}
          contacts={this.state.contacts}
        />
        <Title>Contacts</Title>
        <Filter handleFilter={this.handleFilter} value={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onClick={this.onClick}
        />
      </Wrapper>
    );
  }
}
