import React,{useState} from 'react'

function Form()  {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [datashow, setDatashow] = useState({username:'',email:'',password:''})
    const submitHandler=()=>{
            setDatashow({...datashow,username,email,password})


    }

  return (
    <>
    <input type="text" placeholder='username' value={username} onChange={(event)=>{setUsername(event.target.value)}}></input>
    <input type= "text"placeholder='Email' value={email} onChange={(event)=>{setEmail(event.target.value)}}></input>
    <input type="password" placeholder='password' value={password} onChange={(event)=>{setPassword(event.target.value)}}></input>
    <button onClick={submitHandler}>Submit</button>
    <div>
        <h4>Datashow</h4>
        <ul>
            <li>{datashow.username}</li>
            <li>{datashow.email}</li>
            <li>{datashow.password}</li>

        </ul>
        
    </div>

    </>
  );
}

export default Form;