import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const getData = (e) => {
    e.preventDefault();
    const data = {name, email, password};
    setRegData(data);
    alert('Data submitted: ' + JSON.stringify(data));
  }
  return (
    <div className='register'>
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" onChange={(e) => setName(e.target.value)} class="form-label">Name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">Enter your name here</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" onClick={getData} class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Register