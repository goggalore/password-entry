
// It's possible to check if the password meets all requirements with a crazy regex like
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
// but IMO, this is very hard to understand.
// The decrease in legibility is not worth the vastly insignificant performance
// optimization

// TODO: Implement minimum length checker function

export function checkContainsUpperCase(s: string): boolean {
  const re = /[A-Z]/
  return re.test(s)
}

export function checkContainsLowerCase(s: string): boolean {
  const re = /[a-z]/
  return re.test(s)
}

export function checkContainsNumber(s: string): boolean {
  const re = /[0-9]/
  return re.test(s)
}

export function checkContainsSpecial(s: string): boolean {
  const re = /[!@#$%^&*()_\-+={[}\]|:;"'<,>]/
  return re.test(s)
}