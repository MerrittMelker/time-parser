const { parseTime } = require('../src/index');

const validInputs = [
  { input: '4pm', expected: 16 * 60 },
  { input: '7:38pm', expected: 19 * 60 + 38 },
  { input: '3:16am', expected: 3 * 60 + 16 },
];

const invalidInputs = [
  '23:42',  // not supported in 12-hour + am/pm logic
  '3:16',   // missing am/pm
  '25:00',
  '12:60',
  '13am',
  '3:16xm',
  'pm'
];

describe('Time Parser with Semantics', () => {
  test.each(validInputs)('parses "$input" correctly', ({ input, expected }) => {
    expect(parseTime(input)).toBe(expected);
  });

  test.each(invalidInputs)('throws on invalid input "%s"', (input) => {
    expect(() => parseTime(input)).toThrow();
  });
});