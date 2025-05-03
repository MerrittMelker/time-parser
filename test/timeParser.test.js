const { parseTime } = require('../src/index');

const validInputs = [
  '4pm',
  '7:38pm',
  '23:42',
  '3:16',
  '3:16am'
];

const invalidInputs = [
  '25:00',
  '12:60',
  '13am',
  '3:16xm',
  'pm'
];

describe('Time Parser', () => {
  test.each(validInputs)('accepts valid time "%s"', (input) => {
    expect(() => parseTime(input)).not.toThrow();
  });

  test.each(invalidInputs)('rejects invalid time "%s"', (input) => {
    expect(() => parseTime(input)).toThrow();
  });
});
