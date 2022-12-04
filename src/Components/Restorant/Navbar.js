import React from 'react'

function Navbar(props) {
const{allcat,filter}=props;

  return (
    <>
    <nav className="navbar navbar-dark bg-dark justify-content-center">
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        {allcat.map((ele,index)=>{return(<button key={index}  type="button" className="btn btn-warning" onClick={()=>filter(ele)}>{ele}</button>);})}
      </div>

    </nav>
    </>
  )
}

export default Navbar