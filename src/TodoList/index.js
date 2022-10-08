import React from 'react';
import './TodoList.css'


function TodoList(props){
    return(
        <section>
            {props.children}
        </section>
    );
};

export {TodoList};
