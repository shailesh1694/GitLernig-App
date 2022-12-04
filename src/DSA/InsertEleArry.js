import React,{useState} from 'react'

function InsertEleArry() {
  const [position, setPosition] = useState("");
  const [element, setElement] = useState("")
  const [data] = useState([10,15,20,11,9,8,17])
  const [obj] = useState({
    name:'shailesh',age:21
  })

    
  // let data = [10,15,20,11,9,8,17];
  // let ele=22;
  // let position=2;
  // for(let i=data.length-1;i>=0; i--){
  //     // console.log(data)
  //     if(i>=position){
  //         // console.log(data[i])
  //         data[i+1]=data[i];
  //         // console.log(data)
  //         if(i===position){
  //           data[i]=ele;
  //         }
  //       }
  //     }
  //     console.log(data) Arry Add Element Method with for loop mind it !

  //Arry User input of position and Element than Add to arry


  function submitHandler (){
    // let data = [10,15,20,11,9,8,17];
  //   console.log(data)
    
  // for(let i=data.length-1;i>=0; i--){
  //     if(i>=position){
  //         // console.log(data[i])
  //         data[i+1]=data[i];
  //         // console.log(data)
  //         if(i=== Number(position)){
  //           data[i]=Number(element);
  //         } 
  //       }
  //     }
  //     // console.log(data)
  //       setElement("");
  //       setPosition("")

  data.splice(Number(position),0,Number(element));
  setPosition("");
  setElement("");
  obj.name="vishal";
  obj.age=29;
        
  }

  console.log(data)
  console.log(obj)
  return (
    <>
      <h4>InsertEleArry</h4><br />
      <input placeholder='Position' value={position} onChange={(e) => { setPosition(e.target.value) }}></input> 
      <input placeholder='Element' value={element} onChange={(e) => { setElement(e.target.value) }}></input>
      <button onClick={submitHandler}>Submit</button>
      <ul>
        {data.map((ele,inde)=>{return <li key={inde}>{ele}</li>})}
      </ul>
    </>
  )
}

export default InsertEleArry