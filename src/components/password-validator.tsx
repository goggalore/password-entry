import { ReactElement, useState } from 'react'
import { validatePassword, ValidationResult } from '../utils/password-utils.ts'
import InlineError from './inline-error.tsx'

export default function PasswordValidator(): ReactElement {
  const [ password, setPassword ] = useState('')
  const [ confirmationPassword, setConfirmationPassword ] = useState('')

  const [{ success, errorMessage }, setValidationResult ] = useState<ValidationResult>({
    success: false,
  })

  function validate() {
    const validation = validatePassword(password, confirmationPassword)
    setValidationResult(validation)
  }

  return <>
    <div>
      <input
        type="password"
        placeholder="New Password"
        onChange={(event) => {
          setPassword(event.target.value)
        }}
      />
    </div>
    <div>
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(event) => {
          setConfirmationPassword(event.target.value)
        }}
      />
    </div>
    <button onClick={validate}>Validate</button>
    { errorMessage  && <InlineError errorMessage={errorMessage} />}
    { success && <>
      <h2>Success!</h2>
      <p>Your password is valid</p>
    </>}
  </>
}