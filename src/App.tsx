import { useState } from 'react';
import * as C from './App.styles';
import { item } from './types/Item';
import {ListItem} from './components/ListItem';
import {AddArea} from './components/AddArea';

const App = ()=>{
  const [list, setList] = useState<item[]>([
    { id: 1, name:' ir no dentista', done: false},
    { id: 2, name:' ir no mercado', done: true}
  ]);
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  const handleAddTask = (taskName: string) => {
    let newList =[...list];
    newList.push({
      id: list.length + 1,
      name:taskName,
      done: false,
    })
    setList(newList);
  }

  const handleRemoveTask = (taskId: number) => {
    let newList=[];
    let tempList = [...list];

    for(let i=0;i<tempList.length;i++){
      if(tempList[i].id !== taskId){
        newList.push(tempList[i]);
      }
    }
    for(let i=0;i<newList.length;i++){
      newList[i].id=i;
    }

    console.log(newList);
    setList(newList);

  }


  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index)=>(
          <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange}
            onTrash={handleRemoveTask}
          />
        ))}

      </C.Area>
    </C.Container>
);
}
export default App;