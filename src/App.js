import Input from './components/input'
import './App.css';
import Table from './components/table'
import { useState } from 'react';
import Total from './components/total';


function App() {
  const [groceries, setgroceries] = useState([
    {
      id:1,
      item : "Bread",
      units: 12,
      unitPrice : 10
    },
    {
      id:2,
      item : "Milk",
      units: 5,
      unitPrice : 30
    }
  ])
  const onAdd = (item,units,unitPrice)=>{
      const id = Math.floor(Math.random() * 1000000); //on less value check for data
      const data = {
        id,item,units,unitPrice
      }
      setgroceries([...groceries,data])
  }

  const deleteItem = (id)=>{
    
      const data  = groceries.filter(x=>x.id!==Number(id))
      setgroceries(data)
  }

  const editItem = (id,data)=>{
    
    
    const g = groceries
    const index = g.findIndex(g=>g.id===id)
    g[index] = {id,...data}
    setgroceries(g)
    console.log(groceries);
    

  }

  return (
    <div className="App">
      <h2> Grocery List</h2>
      <Input onadd={(a,b,c)=>onAdd(a,b,c)}/>
      <Table groceries={groceries} onDelete={(id)=>deleteItem(id)} onEdit={(id,data)=>editItem(id,data)}/>
      <Total groceries = {groceries}/>
    </div>
  );
}

export default App;