import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Wrapper, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    try {
      const storageData = JSON.parse(localStorage.getItem('contacts'));

      if (storageData) {
        this.setState({ contacts: storageData });
      }
    } catch (error) {
      console.log(error);
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
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
