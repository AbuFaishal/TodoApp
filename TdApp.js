import './TdApp.css';
import React from 'react';
import TodoApp from './components/TodoApp'
import {useSelector,useDispatch} from 'react-redux'//it is use to call reducers provided by provider globally
import {addList,removeList,editList,checkComplete} from './Actions';


function App() {
  const todo=useSelector(state=>state.todo.list);
  const dispatch=useDispatch();
  return (
    <>
      <TodoApp
        data={todo}
        addList={addList}
        removeList={removeList}
        dispatch={dispatch}
        editList={editList}
        checkComplete={checkComplete}
      />
    </>
  );
}

export default App;
