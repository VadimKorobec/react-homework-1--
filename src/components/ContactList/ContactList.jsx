import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <List key={contact.id}>
            <ContactItem contact={contact} onDelete={onDelete} />
          </List>
        ))}
      </ul>
    </>
  );
};
