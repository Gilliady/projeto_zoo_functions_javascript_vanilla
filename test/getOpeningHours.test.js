const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('called without params', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('called with a string that not represents a number throws a Error', () => {
    expect(() => { getOpeningHours('Saturday', 'Nine:30-PM'); }).toThrow('The hour should represent a number');
    expect(() => { getOpeningHours('Saturday', '9:AndAHalf-PM'); }).toThrow('The minutes should represent a number');
  });
  it('Throws a error if recive param that is not a valid day', () => {
    expect(() => { getOpeningHours('moonday', '10:30-AM'); }).toThrow('The day must be valid. Example: Monday');
  });
  it('Validate the abreviation throws a Error if abreviation is different than PM / AM', () => {
    expect(() => { getOpeningHours('Wednesday', '10:30-LM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('throws a error if the hours isnt between "0" and "12"', () => {
    expect(() => { getOpeningHours(getOpeningHours('Wednesday', '13:30-PM')); }).toThrow('The hour must be between 0 and 12');
  });
  it('throws a error if the minutes isnt beteen "0" and "59"', () => {
    expect(() => { getOpeningHours('Wednesday', '3:60-PM'); }).toThrow('The minutes must be between 0 and 59');
  });
  it('the function returns the correct open and closed days and hours', () => {
    const zooClosed = 'The zoo is closed';
    expect(getOpeningHours('Monday', '10:30-AM')).toEqual(zooClosed);
    expect(getOpeningHours('tuesday', '00:30-PM')).toEqual('The zoo is open');
    expect(getOpeningHours('tuesday', '11:59-PM')).toEqual(zooClosed);
    expect(getOpeningHours('tuesday', '12:00-PM')).toEqual('The zoo is open');
    expect(getOpeningHours('tuesday', '12:00-AM')).toEqual(zooClosed);
  });
});
