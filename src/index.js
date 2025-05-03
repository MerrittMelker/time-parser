const parser = require('./timeParser');

function parseTime(input) {
  return parser.parse(input);
}

module.exports = { parseTime };
