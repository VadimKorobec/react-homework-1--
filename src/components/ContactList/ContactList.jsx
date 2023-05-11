import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li>
            <ContactItem />
          </li>
        ))}
      </ul>
    </>
  );
};
