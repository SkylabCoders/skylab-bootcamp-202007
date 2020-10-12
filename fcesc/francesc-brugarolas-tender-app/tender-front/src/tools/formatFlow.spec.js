import formatFlow from './formatFlow';

describe('FORMAT FLOW utils test set', () => {

  it('should return always a YY.MM.DD format for event.time', ()=>{
    const mockEvent = {"name":"created","est_time":"","time":"2020-10-12T13:59:56.572Z","status":"success"};
    
    const testResult = formatFlow(mockEvent);
    expect(testResult.time).toMatch(/^\d\d.\d\d.\d\d$/);
  });

  it('should return always a YY.MM.DD format for event.est_time', ()=>{
    const mockEvent = {"name":"created","est_time":"2020-10-12T13:59:56.572Z","time":"","status":"success"};
    
    const testResult = formatFlow(mockEvent);
    expect(testResult.est_time).toMatch(/^\d\d.\d\d.\d\d$/);
  });

  it('should return an empty string for event.est_time if it is not provided', ()=>{
    const mockEvent = {"name":"created","est_time":"","time":"2020-08-02T13:59:56.572Z","status":"success"};
    
    const testResult = formatFlow(mockEvent);
    expect(testResult.est_time).toEqual('');
  });

  it('should return an empty string for event.time if it is not provided', ()=>{
    const mockEvent = {"name":"created","est_time":"2020-08-02T13:59:56.572Z","time":"","status":"success"};
    
    const testResult = formatFlow(mockEvent);
    expect(testResult.time).toEqual('');
  });

  it('should add a 0 before the day in YY.MM.DD format if day < 10', ()=>{
    const mockEvent = {"name":"created","est_time":"2020-08-02T13:59:56.572Z","time":"","status":"success"};
    
    const testResult = formatFlow(mockEvent);
    expect(testResult.est_time).toMatch(/^\d\d.\d\d.0\d$/);
  });

  it('should add a 0 before the month in YY.MM.DD format if month < 10', ()=>{
    const mockEvent = {"name":"created","est_time":"2020-08-02T13:59:56.572Z","time":"","status":"success"};
    
    const testResult = formatFlow(mockEvent);
    expect(testResult.est_time).toMatch(/^\d\d.0\d.\d\d$/);
  });
});



