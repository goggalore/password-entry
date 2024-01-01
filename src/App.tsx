import reactLogo from './assets/react.svg'
import './App.css'
import PasswordValidator from './components/password-validator.tsx'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="spin logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Password Validator</h1>
      <PasswordValidator />
      <footer>
        <span>By June Crane | </span>
        <span>
          <a href="https://github.com/goggalore" target="_blank" rel="noreferrer">
          Github
          </a>
        </span>
      </footer>
    </>
  )
}

export default App
