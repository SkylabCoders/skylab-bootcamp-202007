const sinon = require('sinon');
const printTimeLog = require('./printTimeLog');
const chai = require('chai');
const chaiMatch = require('chai-match');
chai.use(chaiMatch);
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);
const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');

describe('UTILS - test set modules', ()=>{

  describe('printTimeLog', ()=>{

    it('Util printTimeLog should return a time stamp string (only hh:mm:ss:msc', ()=>{
      const expectedRegExp = new RegExp(/^\d{1,2}:\d{1,2}:\d{1,2}:\d{1,3}$/);

      const testResult = printTimeLog();

      expect(testResult).to.match(expectedRegExp);
    });

  });

});