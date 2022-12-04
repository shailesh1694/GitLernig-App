import React,{useState} from 'react'

function ArrayTraversingandAccessing() {
  const [arr, setArr] = useState(0);
  const [find, setfind] = useState(0)

  let data=[9,10,11,12,7,20,15];
  function findvalue (){
    if(arr<data.length && typeof parseInt(arr)==="number" && arr>=0){
      setfind(data[arr]);
      setArr("")
    }else{
      alert(`Enter Number ${0} to ${data.length-1}` )
    }

  }

  return (
    <>
    <h4>ArrayTraversingandAccessing</h4>
    <input value={arr} onChange={(e)=>{setArr(e.target.value)}}></input>
    <button onClick={findvalue}>find</button>
    {/* {
      data.map((ele,index)=>{return(<ul key={index}><li>{ele}</li></ul>);})
    } */}
    <br />
    <h4>{find}</h4>
    </>
  )
}

export default ArrayTraversingandAccessing