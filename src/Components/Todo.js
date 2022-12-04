import React, { useState,useEffect } from 'react'


function local (){
    let list= localStorage.getItem("todo")
    if(list){
        return JSON.parse(list)
    } else{
        return [];
    }
}

function Todo() {
    const [add, setadd] = useState('');
    const [addItme, setaddItme] = useState(local())
    const [toggle, settoggle] = useState(true)
    const [id, setid] = useState(null)

    // AddHandler 
    const addHandler =()=>{
        if(!add){

        } else{
        let obj = {id:new Date().getTime().toString(),name:add}
           setaddItme([...addItme,obj])
           setadd("")}
    }
//final update value
const updateddItem =()=>{
    
if(add && !toggle){
  setaddItme( addItme.map((curEle)=>{ if(curEle.id===id){return{...curEle,name:add}}return curEle})) 
  setadd('')
  settoggle(true)
}
}

//DeleteHandler
const deleteHandler =(id)=>{
// console.log(id);
const newadd=addItme.filter((curEle)=>{ return curEle.id !==id})
setaddItme(newadd);
// console.log(addItme)
}

//updatehandler
 const updateHandler=(id)=>{
   let fnd= addItme.find((curren)=>{return curren.id ===id})
    setadd(fnd.name)
    settoggle(false)
    setid(id)
 }

useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(addItme))
},[addItme])

  





    return (
        <>
            <div className='App' >
                <input type="text" placeholder='Input To-Do' value={add} onChange={(event)=>{setadd(event.target.value)}}></input>
                {toggle?<button onClick={addHandler}>AddTODO</button>:<button onClick={updateddItem}>Update</button>}
                <br />
                <hr/>
                <br/>
                {
                    addItme.map((curElem,index)=>{return <div key={curElem.id}><h1>{curElem.name} </h1><button onClick={()=>{deleteHandler(curElem.id)}}>Delete</button> <button onClick={()=>{updateHandler(curElem.id)}}>Update</button> </div>})
                }



            </div>
        </>
    )
}

export default Todo