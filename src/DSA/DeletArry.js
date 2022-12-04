import React from 'react'

function DeletArry() {

        let data=[1,2,3,4,5,6,7];
        let position= 0;
        for(let i=position;i<data.length;i++){
            console.log(data[i])
            data[i]=data[i+1];
        }
        
        console.log(data);
        data.length=data.length-1;
        console.log(data);
//now implement is that input position value from user Dynamicaalll other method to delet used splice
data.splice(0,1)
console.log(data);
  return (
    <>
    <h4>DeletArry</h4>
    </>
  )
}

export default DeletArry