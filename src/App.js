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
  // const handleChange = (e, name, value, key) => {
  //   setData((prevState) => ({
  //       ...prevState,
  //       [name]: value
  //   }))
  // console.log(e.target.value)
  return(
    <div>
      name :<input id='name' type='text'  value={data.name} onChange={nithis}/> <br/>
      {/* email:<input type='text' name='email' value={data.email} onChange ={(e,value)=>handleChange(event,"email",value,"email")}/> */}
      email :<input id='name' type='text'  value={data.email} onChange={nithis}/> <br/>
      </div>
  )
}

export default App;
