// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

// import * as React from 'react'

// 🐨 add a submit event handler here (`handleSubmit`).
// 💰 Make sure to accept the `event` as an argument and call
// `event.preventDefault()` to prevent the default behavior of form submit
// events (which refreshes the page).
// 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//
// 🐨 get the value from the username input (using whichever method
// you prefer from the options mentioned in the instructions)
// 💰 For example: event.target.elements[0].value
// 🐨 Call `onSubmitUsername` with the value of the input

// 🐨 add the onSubmit handler to the <form> below

// 🐨 make sure to associate the label to the input.
// to do so, set the value of 'htmlFor' prop of the label to the id of input
/* 
function UsernameForm1({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const [empty, setEmpty] = React.useState(true)
  const inputEl = React.useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(inputEl.current.value)
  }

  function handleChange(event) {
    const value = event.target.value
    if (value === value.toLowerCase()) setError(null)
    else setError('InError letter case')

    if (inputEl.current.value === '') setEmpty(true)
    else setEmpty(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Username:</label>
        <input ref={inputEl} id="text" type="text" onChange={handleChange} />
        {error && (
          <p role="alert" style={{color: 'red'}}>
            {error}
          </p>
        )}
        {!error && !empty && (
          <p role="alert" style={{color: 'blue'}}>
            Good to go!
          </p>
        )}
      </div>
      <button type="submit" disabled={error || empty}>
        Submit
      </button>
    </form>
  )
}
 */
/* 
function UsernameForm1({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  const [empty, setEmpty] = React.useState(true)

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const { value } = event.target
    setUsername(value.toLowerCase())
    if (username === '') setEmpty(true)
    else setEmpty(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Username:</label>
        <input
          value={username}
          id="text"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={empty}> Submit </button>
      {!empty && ( <p role="alert" style={{color: 'blue'}}>Good to go!</p> )}
    </form>
  )
}
 */

/*

function Counter() {
  const [counter, setCounter] = React.useState(0)
  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}

function UsernameForm2({onSubmitUsername}) {
  const [username, setUsername] = React.useState({ firstName: '', lastName:'' })
  const [empty, setEmpty] = React.useState(true)
  const { firstName, lastName } = {...username}

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(`${firstName} ${lastName}`)
  }

  function handleChange(event) {
    const { value, name } = event.target
    setUsername({ ...username, [name]: value.toLowerCase() })
  }

  React.useEffect(() => {
    if(username){
      if (Object.values(username).some(name => name.length === 0)) setEmpty(true)
      else setEmpty(false)
    } 
  }, [username])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Username:</label>
        <input
          value={firstName}
          name="firstName"
          type="text"
          onChange={handleChange}
        />                                                                                
        <input
          value={lastName}
          name="lastName"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={empty}>Submit</button>
      {!empty && (
        <p role="alert" style={{color: 'blue'}}>
          Good to go!
        </p>
      )}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return (
    <>
      <UsernameForm2 onSubmitUsername={onSubmitUsername} />
      <Counter />
    </>
  )
}

export default App

*/
// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const userNameInputRef = React.useRef('')
  const [error, setError] = React.useState(null)
  const [value, setValue] = React.useState('')

  function handleChange(event) {
    const {target: { value: eventValue }} = event
    const isValid = eventValue === eventValue.toLowerCase()
    setValue(eventValue)
    setError(isValid ? null : 'Username must be lower case')
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(userNameInputRef.current.value)
  }

  function Alert({error}) {
    return (
      error && (
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
      )
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          ref={userNameInputRef}
          id="userNameInput"
          type="text"
          value={value}
          onChange={handleChange}
        />
      </div>
      <button
        disabled={error || value === '' ? true : false}
        type="submit"
      >
        Submit
      </button>
      <Alert error={error} />
    </form>
  )
}

function UsernameFormNoError({onSubmitUsername}) {
  const [userName, setUsername] = React.useState('')

  function handleChange({target: { value: eventValue }}) {
    setUsername(eventValue.toLowerCase())
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(userName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Name:</label>
        <input
          id="userNameInput"
          type="text"
          value={userName}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={!Boolean(userName)} >
        Send It
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <>
    <UsernameForm onSubmitUsername={onSubmitUsername} />
    <hr />
    <UsernameFormNoError onSubmitUsername={onSubmitUsername} />
  </>
}

export default App
