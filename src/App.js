import './App.css';
import { useState } from 'react';
import AddContact from './Components/AddContact';
import List from './Components/List';

const initialState = [
  {
    name: 'Ufuk Tas',
    phone: '555',
  }, {
    name: 'Irem Tas',
    phone: '554',
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
