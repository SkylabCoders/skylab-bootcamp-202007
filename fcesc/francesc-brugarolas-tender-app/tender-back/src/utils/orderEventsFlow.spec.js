const sinon = require('sinon');
const orderEventsFlow = require('./orderEventsFlow');
const chai = require('chai');
const chaiMatch = require('chai-match');
chai.use(chaiMatch);
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);
const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');

describe('UTILS - test set modules', ()=>{

  describe('orderEventsFlow', ()=>{

    it('Util orderEventsFlow should return an array of ordered dates, length of the array should equal number of events', ()=>{
      const testData = [
        [
          {
            name: 'created',
            est_time: '',
            time: '2020-08-07T13:59:56.572Z',
            status: 'success'
          },
          {
            name: 'launched',
            est_time: '2020-08-24T13:59:56.572Z',
            time: '2020-09-01T13:59:56.572Z',
            status: 'warning'
          },
          {
            name: 'submission deadline',
            est_time: '2020-09-28T13:59:56.572Z',
            time: '',
            status: 'default'
          }
        ],
        [
          {
            name: 'created',
            est_time: '',
            time: '2020-08-08T13:59:56.572Z',
            status: 'success'
          },
          {
            name: 'launched',
            est_time: '2020-08-15T13:59:56.572Z',
            time: '',
            status: 'danger'
          }
        ]
      ]

      const testResult = orderEventsFlow(testData);

      expect(testResult.constructor === Array).to.be.true;
      expect(testResult.length).to.equal(5);
      
      let orderedDates = [];
      for(let i = 0; i<testResult.length; i++){
        let stringTime = (testResult[i].time) ? testResult[i].time : testResult[i].est_time;
        let dateTime = new Date(stringTime);
        orderedDates.push(dateTime);
      }

      for(let i = 0; i<orderedDates.length - 1; i++){
        expect(orderedDates[i]<orderedDates[i+1]).to.be.true;
      }
    });

  });

});