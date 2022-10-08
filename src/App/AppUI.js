import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import {Modal} from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal
   } = React.useContext(TodoContext);
  
    return(
        <React.Fragment>
        <TodoCounter/>
      <TodoSearch/>
          <TodoList>
          {error && <p>Esperate, Hubo un error 404</p>}
          {loading && <p>Estamos cargando, calmaos</p>}
          {(!loading && !searchedTodos.length) && <p>Crea una Tarea</p>}
  
        {searchedTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        </TodoList>
        
        {!!openModal && (
          <Modal>
          <TodoForm /> 
        </Modal>
        )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      </React.Fragment>
    );
}

export {AppUI};