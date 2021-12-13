import './App.css';
import { useState } from 'react';
import AddContact from './Components/AddContact';
import List from './Components/List';

const initialState = [
  {
    name: 'Person1',
    phone: '555',
  }, {
    name: 'Person2',
    phone: '554',
  }, {
    name: 'Person3',
    phone: '556',
  }
]
function App() {
  const [contacts, setContacts] = useState(initialState);

  return (
    <div className="App">
      <AddContact contacts={contacts} setContacts={setContacts} />
      <List contacts={contacts} />
    </div>
  );
}

export default App;
