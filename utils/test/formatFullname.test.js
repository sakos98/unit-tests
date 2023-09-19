const expect = require('chai').expect;
const formatFullname = require('../formatFullname');

describe('formatFullname', () => {
  it('should return an error if fullName is not provided', () => {
    const result = formatFullname();
    expect(result).to.equal('Error');
  });

  it('should return an error if fullName is not a string', () => {
    const result = formatFullname(123);
    expect(result).to.equal('Error');
  });

  it('should return an error if fullName format is invalid', () => {
    const result = formatFullname('John Doe Test');
    expect(result).to.equal('Error');
  });

  it('should return an error if fullName contains only one word', () => {
    const result = formatFullname('John');
    expect(result).to.equal('Error');
  });

  it('should return an error if fullName contains non-alphabet characters', () => {
    const result = formatFullname('John123 Doe');
    expect(result).to.equal('Error');
  });

  it('should format fullName correctly', () => {
    const result = formatFullname('jOhN dOe');
    expect(result).to.equal('John Doe');
  });
});
