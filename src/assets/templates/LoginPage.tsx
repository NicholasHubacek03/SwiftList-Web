import './App.css'

function App() {

  return (
    <>
    <form>
      <h1>SwiftList</h1>
      <div className="card">
      
      <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="username"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
        />
      </div>
      <button>Login</button>
      <div>
        <button>don't have an account? Sign up!</button>
      </div>
      </form>
    </>
  )
}

export default App
