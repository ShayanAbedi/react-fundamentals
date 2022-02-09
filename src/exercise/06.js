// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.elements.userNameInput.value)
  }

  const handleChange = newUserName => {
    if (newUserName === newUserName.toLowerCase()) {
      setError()
    } else {
      setError('Error: Username must be lower case')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          type="text"
          id="userNameInput"
          onChange={e => handleChange(e.target.value)}
        />
      </div>
      <p role="alert" style={{color: 'red'}}>
        {error}
      </p>

      <br />
      <button type="submit" disabled={error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
