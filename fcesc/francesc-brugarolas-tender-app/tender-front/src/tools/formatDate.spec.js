import { formatDate } from './formatDate';

describe('FORMAT DATE utils test set', () => {

  it('should return 1st when it is the first day of the month and date format is long', ()=>{
    const testResult = formatDate('2020-08-01T13:59:56.572Z');
    expect(testResult).toMatch(/.*1st.*/);
  });

  it('should return 2nd when it is the second day of the month and date format is long', ()=>{
    const testResult = formatDate('2020-08-02T13:59:56.572Z');
    expect(testResult).toMatch(/.*2nd.*/);
  });

  it('should return 3rd when it is the third day of the month and date format is long', ()=>{
    const testResult = formatDate('2020-08-03T13:59:56.572Z');
    expect(testResult).toMatch(/.*3rd.*/);
  });

  it('should return 11th when it is the eleventh day of the month and date format is long', ()=>{
    const testResult = formatDate('2020-08-11T13:59:56.572Z');
    expect(testResult).toMatch(/.*11th.*/);
  });

  it('should return 12th when it is the twelveth day of the month and date format is long', ()=>{
    const testResult = formatDate('2020-08-12T13:59:56.572Z');
    expect(testResult).toMatch(/.*12th.*/);
  });

  it('should return 13th when it is the thirteenth day of the month and date format is long', ()=>{
    const testResult = formatDate('2020-08-13T13:59:56.572Z');
    expect(testResult).toMatch(/.*13th.*/);
  });

  it('should return 21st when it is the twentyfirst day of the month and date format is long', ()=>{
    const testResult = formatDate('2020-08-21T13:59:56.572Z');
    expect(testResult).toMatch(/.*21st.*/);
  });

  it('should return 22nd when it is the twentysecond day of the month and date format is long', ()=>{
    const testResult = formatDate('2020-08-22T13:59:56.572Z');
    expect(testResult).toMatch(/.*22nd.*/);
  });

  it('should return 23rd when it is the twentythird day of the month and date format is long', ()=>{
    const testResult = formatDate('2020-08-23T13:59:56.572Z');
    expect(testResult).toMatch(/.*23rd.*/);
  });

  it('should return 31st when it is the twentyfirst day of the month and date format is long', ()=>{
    const testResult = formatDate('2020-08-31T13:59:56.572Z');
    expect(testResult).toMatch(/.*31st.*/);
  });

  it('should return th when for any day of the month except 1, 2, 3, 21, 22, 23 and 31 and date format is long', ()=>{
    const testResult = formatDate('2020-08-15T13:59:56.572Z');
    expect(testResult).toMatch(/.*15th.*/);
  });

  it('should return Monday if weeday is 1', ()=>{
    const testResult = formatDate('2020-09-21T13:59:56.572Z');
    expect(testResult).toMatch(/.*Monday.*/);
  });

  it('should return Tuesday if weeday is 2', ()=>{
    const testResult = formatDate('2020-09-22T13:59:56.572Z');
    expect(testResult).toMatch(/.*Tuesday.*/);
  });

  it('should return Wednesday if weeday is 3', ()=>{
    const testResult = formatDate('2020-09-23T13:59:56.572Z');
    expect(testResult).toMatch(/.*Wednesday.*/);
  });

  it('should return Thursday if weeday is 4', ()=>{
    const testResult = formatDate('2020-09-24T13:59:56.572Z');
    expect(testResult).toMatch(/.*Thursday.*/);
  });

  it('should return Friday if weeday is 5', ()=>{
    const testResult = formatDate('2020-09-25T13:59:56.572Z');
    expect(testResult).toMatch(/.*Friday.*/);
  });

  it('should return Saturday if weeday is 6', ()=>{
    const testResult = formatDate('2020-09-26T13:59:56.572Z');
    expect(testResult).toMatch(/.*Saturday.*/);
  });

  it('should return Sunday if weeday is 0', ()=>{
    const testResult = formatDate('2020-09-27T13:59:56.572Z');
    expect(testResult).toMatch(/.*Sunday.*/);
  });

  it('should return January if month is 0 (January being 0)', ()=>{
    const testResult = formatDate('2020-01-01T13:59:56.572Z');
    expect(testResult).toMatch(/.*January.*/);
  });

  it('should return February if month is 1 (January being 0)', ()=>{
    const testResult = formatDate('2020-02-01T13:59:56.572Z');
    expect(testResult).toMatch(/.*February.*/);
  });

  it('should return March if month is 2 (January being 0)', ()=>{
    const testResult = formatDate('2020-03-01T13:59:56.572Z');
    expect(testResult).toMatch(/.*March.*/);
  });

  it('should return April if month is 3 (January being 0)', ()=>{
    const testResult = formatDate('2020-04-01T13:59:56.572Z');
    expect(testResult).toMatch(/.*April.*/);
  });
  
  it('should return May if month is 4 (January being 0)', ()=>{
    const testResult = formatDate('2020-05-01T13:59:56.572Z');
    expect(testResult).toMatch(/.*May.*/);
  });

  it('should return June if month is 05 (January being 0)', ()=>{
    const testResult = formatDate('2020-06-01T13:59:56.572Z');
    expect(testResult).toMatch(/.*June.*/);
  });

  it('should return July if month is 06 (January being 0)', ()=>{
    const testResult = formatDate('2020-07-01T13:59:56.572Z');
    expect(testResult).toMatch(/.*July.*/);
  });

  it('should return August if month is 07 (January being 0)', ()=>{
    const testResult = formatDate('2020-08-01T13:59:56.572Z');
    expect(testResult).toMatch(/.*August.*/);
  });

  it('should return September if month is 08 (January being 0)', ()=>{
    const testResult = formatDate('2020-09-01T13:59:56.572Z');
    expect(testResult).toMatch(/.*September.*/);
  });

  it('should return October if month is 09 (January being 0)', ()=>{
    const testResult = formatDate('2020-10-01T13:59:56.572Z');
    expect(testResult).toMatch(/.*October.*/);
  });

  it('should return November if month is 10 (January being 0)', ()=>{
    const testResult = formatDate('2020-11-01T13:59:56.572Z');
    expect(testResult).toMatch(/.*November.*/);
  });

  it('should return December if month is 11 (January being 0)', ()=>{
    const testResult = formatDate('2020-12-01T13:59:56.572Z');
    expect(testResult).toMatch(/.*December.*/);
  });

  it('should provide a tyme if time = true', ()=>{
    const testResult = formatDate('2020-09-01T13:59:56.572Z', { time: true, date: 'short' });
    expect(testResult).toMatch(/^\d\d:\d\dh.*/);
  });

  it('should provide a tyme if time = true', ()=>{
    const testResult = formatDate('2020-09-01T13:59:56.572Z', { time: true, date: 'long' });
    expect(testResult).toMatch(/^\d\d:\d\dh.*/);
  });

  it('should not provide a tyme if time = false', ()=>{
    const testResult = formatDate('2020-09-01T13:59:56.572Z', { time: false, date: 'short' });
    expect(testResult).not.toMatch(/^\d\d:\d\dh.*/);
  });

  it('should not provide a tyme if time = false', ()=>{
    const testResult = formatDate('2020-09-01T13:59:56.572Z', { time: false, date: 'long' });
    expect(testResult).not.toMatch(/^\d\d:\d\dh.*/);
  });

  it('should provide only time if date = false', ()=>{
    const testResult = formatDate('2020-09-01T13:59:56.572Z', { time: true, date: false });
    expect(testResult).toMatch(/^\d\d:\d\dh.*/);
    expect(testResult.length).toBe(6);
  });

  it('should add 0 before minutes or hours if they are less than 10', ()=>{
    const testResult = formatDate('2020-09-01T08:08:56.572Z', { time: true, date: 'short' });
    expect(testResult).toMatch(/^\d\d:\d\dh.*/);
  });
})