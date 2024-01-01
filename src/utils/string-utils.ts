
/* It's possible to check if the password meets all requirements with a crazy regex like
 * /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
 * but IMO, this is very hard to understand.
 *
 * The decrease in legibility is not worth the insignificant performance
 * optimization (<1ms).
 *
 * Not to mention, figuring out what went wrong is much easier to understand when the
 * string is tested with separate, concise functions.
 */

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

export function capitalizeFirstCharacter(s: string): string {
  return s[0].toUpperCase() + s.slice(1)
}

/**
 * Accepts an array of strings (words or sentences) and produces
 * a conjoined sentence according to English grammar rules
 *
 * Ex.
 *
 * conjoinSentences([ 'oranges', 'apples', 'pears' ])
 *
 * Returns 'oranges, apples, and pears'
 */
export function conjoinSentences(sentences: string[]): string {
  return sentences.reduce((conjoinedSentence, sentence, index) => {
    if (index !== 0 && index !== sentences.length - 1) {
      return conjoinedSentence + ', ' + sentence
    }

    if (index === sentences.length - 1 && sentences.length !== 1) {
      return conjoinedSentence + ', and ' + sentence
    }

    return sentence
  }, '')
}