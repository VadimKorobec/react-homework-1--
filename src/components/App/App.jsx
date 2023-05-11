import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Component } from 'react';
import initialContacts from '../data/contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
  };

  addContact = (name, number) => {
    console.log(name, number);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number }],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contact</h2>
        <Filter />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
