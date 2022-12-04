import React from 'react'

function AddTwoArry() {

    // let srry= [1,2,3,4,5];
    // let obj={...srry};
    // console.log(obj)
    let data=[1,2,3,4,0];
    let data1=[5,6,7,8,9];
    let data3=[];
    for(let i=0;i<data.length;i++){data3[i]=data[i]; }
     for(let i=0;i<data1.length;i++){data3[data.length+i]=data1[i] }
             console.log(data3)   
  return (
    <>
    <h4>AddTwoArry</h4>
    </>
  )
}

export default AddTwoArry