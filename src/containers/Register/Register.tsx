import { FormEvent, useState } from 'react'
import './Register.css'

function App() {
    const [] = useState(0)

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.');
    }

  return (

    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            required
          />
        </label>
        <br />
        {/* <label>
          Email:
          <input
            type="email"
            name="email"
            required
          />
        </label> */}
         <br />
        <label>
          First Name:
          <input
            type="First Name"
            name="First Name"
            required
          />
        </label>
        <br />
        <br />
        <label>
          Last Name:
          <input
            type="Last Name"
            name="Last Name"
            required
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default App