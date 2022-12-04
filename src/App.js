import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import CardItem from './Components/Restorant/CardItem';
import Menu from './Components/Restorant/Menu';
import Navbar from './Components/Restorant/Navbar';
import Stopwatch from './Components/Stopwatch';
import Todo from './Components/Todo';
import AddTwoArry from './DSA/AddTwoArry';
import Arrarymergewithsort from './DSA/Arrarymergewithsort';
import ArrayTraversingandAccessing from './DSA/ArrayTraversingandAccessing';
import DeletArry from './DSA/DeletArry';
import InsertEleArry from './DSA/InsertEleArry';
import SearchArry from './DSA/SeatrchArry';



const allcatagory= [...new Set(Menu.map((ele)=>{return ele.catagory})),"all"] ;



function App() {
  const [apidata, setApidata] = useState(Menu)
  const [allcat, setallcat] = useState(allcatagory)

  const filter =(catogary)=>{
    console.log(catogary)
    if(catogary==="all"){setApidata(Menu);return}
    const selectcatogary = Menu.filter((ele)=>{return ele.catagory===catogary})

      setApidata(selectcatogary);
    
  }

  return (<>
    <Stopwatch />
    {/* <Form /> */}
    
      {/* <Navbar filter={filter} allcat={allcat} />
    <CardItem data={apidata} /> */}
   
  </>
  )
}

export default App;
