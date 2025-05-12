
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let [user,setuser]=useState({
    name:"",
    address:"",
    email:"",
    mobile:""
  })
  const [errors, setErrors] = useState({})

let{name,address,email,mobile}=user;

  function updatefield(e){
    let value=e.target.value;
    let key =e.target.name
    setuser({...user,[key]:value})
    setErrors({ ...errors, [e.target.name]: '' })
  }

  function handlesubmit(e){
    e.preventDefault()
    const newErrors = {};

    if (!/^[A-Za-z]+$/.test(formData.name)) {
      newErrors.name = 'Name should contain only letters';
    }

    if (!/^[A-Za-z0-9\s]+$/.test(formData.address)) {
      newErrors.address = 'Address should not contain special characters';
    }

    if (!/^.+@.+\.com$/.test(formData.email)) {
      newErrors.email = 'Email should contain @ and .com';
    }

    if (!/^\d{1,10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number should not be more than 10 characters';
    }

    setErrors(newErrors);

  }


  

  

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
       <label>Name</label><br/>
       <input type="text" placeholder="enter your name" onChange={updatefield} name="name"/>
       {errors.name && <div className="errorMessage">{errors.name}</div>}
       </div>
       <div>
       <label>address</label><br/>
       <input type="text"  placeholder="enter your address" onChange={updatefield} name="address"/>
       {errors.address && <div className="errorMessage">{errors.address}</div>}
       </div>
       <div>
       <label>email</label><br/>
       <input type="email" placeholder="enter your email" onChange={updatefield} name="email"/>
       {errors.email && <div className="errorMessage">{errors.email}</div>}
       </div>
       <div>
       <label>mobile</label><br/>
       <input type="number" placeholder="enter mobile number" onChange={updatefield} name="mobile"/>
       {errors.mobile && <div className="errorMessage">{errors.mobile}</div>}
       </div>
       <button>submit</button>

       </form>

       

    </div>
  )
}

export default App
