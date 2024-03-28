import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import PropTypes from "prop-types";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

// компонент ContactList рисует список контактов

// фильтрация коллекции
const isVisibleContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = isVisibleContacts(contacts, filter);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

// Описание типов пропсов компонента ContactList

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactList;
