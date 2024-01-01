import { describe, expect, it } from '@jest/globals'
import {
  capitalizeFirstCharacter,
  checkContainsLowerCase,
  checkContainsNumber,
  checkContainsSpecial,
  checkContainsUpperCase, conjoinSentences
} from '../string-utils'

describe('string-utils.ts', () => {
  describe('checkContainsUpperCase', () => {
    it('Returns false when string is empty', () => {
      const s = ''
      const containsUpper = checkContainsUpperCase(s)

      expect(containsUpper).toBe(false)
    })

    it('Returns false when string does not contain any uppercase characters', () => {
      const s = 'no upper but numbers 492 !!$'
      const containsUpper = checkContainsUpperCase(s)

      expect(containsUpper).toBe(false)
    })

    it('Returns true when string is a single uppercase character', () => {
      const s = 'T'
      const containsUpper = checkContainsUpperCase(s)

      expect(containsUpper).toBe(true)
    })

    it('Returns true when string contains one uppercase character', () => {
      const s = 'one upperCase character'
      const containsUpper = checkContainsUpperCase(s)

      expect(containsUpper).toBe(true)
    })

    it('Returns true when string contains multiple uppercase characters', () => {
      const s = 'Many UpperCase Characters'
      const containsUpper = checkContainsUpperCase(s)

      expect(containsUpper).toBe(true)
    })
  })

  describe('checkContainsLowerCase', () => {
    it('Returns false when string is empty', () => {
      const s = ''
      const containsLower = checkContainsLowerCase(s)

      expect(containsLower).toBe(false)
    })

    it('Returns false when string contains no lowercase characters', () => {
      const s = 'ONLY UPPER CASE WITH NUMBERS 1100 !%#'
      const containsLower = checkContainsLowerCase(s)

      expect(containsLower).toBe(false)
    })

    it('Returns true when string is a single lowercase character', () => {
      const s = 't'
      const containsLower = checkContainsLowerCase(s)

      expect(containsLower).toBe(true)
    })

    it('Returns true when string contains one lowercase character', () => {
      const s = 'I HAVE A LOWERcASE CHAR'
      const containsLower = checkContainsLowerCase(s)

      expect(containsLower).toBe(true)
    })

    it('Returns true when a string contains many lowercase characters', () => {
      const s = 'Hey there cowboy'
      const containsLower = checkContainsLowerCase(s)

      expect(containsLower).toBe(true)
    })
  })

  describe('checkContainsNumber', () => {
    it('Does not return true when string is empty', () => {
      const s = ''
      const containsNumber = checkContainsNumber(s)

      expect(containsNumber).toBe(false)
    })

    it('Does not return true when string contains no numbers', () => {
      const s = 'I ain\'t got no numbers'
      const containsNumber = checkContainsNumber(s)

      expect(containsNumber).toBe(false)
    })

    it('Returns true when string is a single number', () => {
      const s = '4'
      const containsNumber = checkContainsNumber(s)

      expect(containsNumber).toBe(true)
    })

    it('Returns true when string contains one number', () => {
      const s = 'You\'re my #1'
      const containsNumber = checkContainsNumber(s)

      expect(containsNumber).toBe(true)
    })

    it('Returns true when string contains multiple numbers', () => {
      const s = 'Ever heard of l33t speak?'
      const containsNumber = checkContainsNumber(s)

      expect(containsNumber).toBe(true)
    })
  })

  describe('checkContainsSpecial', () => {
    const sampleSpecials = [ '!', '<', '}' ]

    it('Returns false if string is empty', () => {
      const s = ''
      const containsSpecial = checkContainsSpecial(s)

      expect(containsSpecial).toBe(false)
    })

    it('Returns false if string does not contain special character', () => {
      const s = 'No special character'
      const containsSpecial = checkContainsSpecial(s)

      expect(containsSpecial).toBe(false)
    })

    // You could make the following tests more rigorous by defining an array:
    // [ '!', '@', ... ]
    // that contains ALL the special characters desired then have the tests
    // perform multiple checks with iteration.
    //
    // I would consider this for a production-level app, but I'm not too pressed about it for a demo app.
    it('Returns true if string is a single special character', () => {
      const containsSpecialsMany = sampleSpecials.map(checkContainsSpecial)

      containsSpecialsMany.forEach(containsSpecials => {
        expect(containsSpecials).toBe(true)
      })
    })

    it('Returns true if string has special characters', () => {
      const specialStrings = sampleSpecials.map(specialCharacter =>
        `special ${specialCharacter} character`
      )
      const containSpecialsMany = specialStrings.map(checkContainsSpecial)

      containSpecialsMany.map(containSpecials => {
        expect(containSpecials).toBe(true)
      })
    })

    it('Returns true if a string has many special characters', () => {
      const specialString = 'You are 100% a star :)'
      const containsSpecials = checkContainsSpecial(specialString)

      expect(containsSpecials).toBe(true)
    })
  })

  describe('capitalizeFirstCharacter', () => {
    it('Capitalizes the first character in a sentence', () => {
      const sentence = 'never eat soggy waffles'
      const expectedSentence = 'Never eat soggy waffles'

      expect(capitalizeFirstCharacter(sentence)).toBe(expectedSentence)
    })
  })

  describe('conjoinSentences', () => {
    it('Returns a sentence unmodified if list contains only a single entry', () => {
      const sentences = [ 'You can\'t change me, this is who I am!' ]
      const expectedSentence = sentences[0]

      expect(conjoinSentences(sentences)).toBe(expectedSentence)
    })

    it('Conjoins a list of sentences into a single conjoined string', () => {
      const sentences = [ 'I like apples', 'oranges', 'pears' ]
      const expectedSentence = 'I like apples, oranges, and pears'

      expect(conjoinSentences(sentences)).toBe(expectedSentence)
    })
  })
})