import {
  capitalizeFirstCharacter,
  checkContainsLowerCase,
  checkContainsNumber,
  checkContainsSpecial,
  checkContainsUpperCase,
  conjoinSentences
} from './string-utils.ts'

export interface ValidationResult {
  success: boolean
  errorMessage?: string
}
export function validatePassword(password: string, passwordConfirmation: string): ValidationResult {
  const passwordMinLength = 6
  const errorMessages = []

  if (password !== passwordConfirmation) {
    errorMessages.push('password and confirmation do not match')
  }

  if (password.length < passwordMinLength) {
    errorMessages.push(`password must be ${passwordMinLength} characters long`)
  }

  if (!checkContainsUpperCase(password)) {
    errorMessages.push('password must contain an uppercase character')
  }

  if(!checkContainsLowerCase(password)) {
    errorMessages.push('password must contain a lowercase character')
  }

  if(!checkContainsNumber(password)) {
    errorMessages.push('password must contain a number')
  }

  if(!checkContainsSpecial(password)) {
    errorMessages.push('password must contain a special character')
  }

  if (errorMessages.length !== 0) {
    const errorMessage = capitalizeFirstCharacter(conjoinSentences(errorMessages))
    return {
      success: false,
      errorMessage
    }
  }

  return { success: true }
}

