import React,{useState} from 'react'

function SearchArry() {
// const [search, setsearch] = useState('')
// let data= [12,10,9,7,5,22,56,10,10];
// let index = undefined;
// let item=Number(search);

// for(let i=0;i<data.length; i++){
//   // console.log(data[i]);
//   if(data[i]===item){
//     // console.log(i);
//     index=i;
//     break;
//   }
//   }

// console.log(data[index])
 
const searchHandler =()=>{
  for(let i=0;i<data.length; i++){
    // console.log(data[i]);
    if(data[i]===Number(search)){
      console.log(i);
      index=i;

      
    }
    }
    console.log(data[index])
    setsearch("")
    // console.log(typeof Number(search) );
}

  return (
    <>
    <h4>SearchInArry</h4>
    <input value={search} onChange={(e)=>{setsearch(e.target.value)}}></input>
    <button onClick={searchHandler} >SEarch</button>

    </>
  )
}

export default SearchArry;