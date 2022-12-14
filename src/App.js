import React from 'react'


const App=()=>{
  const[data,setData]=React.useState({
    name:'',
    email:''
  })
  const{name,email}=data
  const nithis=(e)=>{
    setData(e.target.value)
    console.log(e.target.value)
    // console.log(data)
  }
  // console.log(e.target.value)
  return(
    <div>
      name :<input id='name' type='text'  value={data.name} onChange={nithis}/> <br/>
      email:<input type='text' name='email' value={data.email} onChange={nithis}/>
      </div>
  )
}

export default App;