import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {
  const [credentials, setcredentials] = useState({

    password: '',
    email: ''
  });

  let navigate = useNavigate();

  const handleSubmit = async (e , res) => {
    e.preventDefault();
    const response = await fetch('https://foodie-mernapp.onrender.com/api/loginuser',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        email: credentials.email,
        password: credentials.password
      }),
    });

    const json = await response.json()
    // console.log(json);

    if (!json.success) {
      alert('Enter Valid Credentials');
    }
    if (json.success) {
      localStorage.setItem("userEmail" , credentials.email);
      localStorage.setItem("authToken" , json.authToken);
      // console.log(localStorage.getItem("authToken"));
      alert('Welcome');
      navigate("/");
    }
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <div>
        <Navbar />
      </div>
      <br/>
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              name='email'
              value={credentials.email}
              onChange={onChange}
            />
            <div id='emailHelp' className='form-text'>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              name='password'
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
          <Link to='/SignUp' className='m-3 btn btn-danger'>
            I am a new member
          </Link>
        </form>
      </div>
    </div>
    </div>
  )
}
