import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

//import './App.css';

/* const defaultTodos = [
  { text: 'Cortar fresas', completed: true},
  { text: 'Tomar un curso de react', completed: false},
  { text: 'Llorando mucho', completed: false}
]; */


function App() {

  /* React.useEffect( () => {

  }); */

  return (
      <TodoProvider>
        <AppUI />
      </TodoProvider>
  );
}

export default App;
