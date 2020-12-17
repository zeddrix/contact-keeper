import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '0918-306-4956',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '0923-306-4956',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '0938-353-2938',
        type: 'professional'
      },
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = contact => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact })
  };

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  };

  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact })
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  };

  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
  };

  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text })
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState;