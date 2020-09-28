const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/projectsRouteController');

describe('testing project controllers', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should create new project and send an error, POST', () => {
    const Project = {
      create: () => { }
    }
    const req = {
      body: {}
    }
    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const createFake = sinon.fake.yields('error', null);
    sinon.replace(Project, 'create', createFake);

    const spySend = sinon.spy(res, 'send');

    controller(Project).post(req, res);

    expect(spySend.calledWith(404)).to.be.true;

  });

  it('should create new project and NOT send an error, POST', () => {
    const Project = {
      create: () => { }
    }
    const req = {
      body: {}
    }
    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const createFake = sinon.fake.yields('', 'project');
    sinon.replace(Project, 'create', createFake);

    const spyJson = sinon.spy(res, 'json');
    controller(Project).post(req, res);

    expect(spyJson.calledWith('error')).to.be.false;

  });

  it('should get project and send an error, GET', () => {
    const Project = {
      find: () => { }
    }
    const req = {
      query: {}
    }
    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const findFake = sinon.fake.yields('error', null);
    sinon.replace(Project, 'find', findFake);

    const spySend = sinon.spy(res, 'send');

    controller(Project).get(req, res);

    expect(spySend.calledWith('error')).to.be.true;

  });

  it('should get project and send an error, GET', () => {
    const Project = {
      find: () => { }
    }
    const req = {
      query: {}
    }
    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const findFake = sinon.fake.yields('', 'project');
    sinon.replace(Project, 'find', findFake);

    const spySend = sinon.spy(res, 'send');

    controller(Project).get(req, res);

    expect(spySend.calledWith('error')).to.be.false;

  });

  it('should find project and send an error, DELETER', () => {
    const Project = {
      find: () => { },
      deleteOne: () => { }
    }
    const req = {
      query: {}
    }
    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const findFake = sinon.fake.yields('error', null);
    sinon.replace(Project, 'find', findFake);

    const spySend = sinon.spy(res, 'send');

    controller(Project).deleter(req, res);

    expect(spySend.calledWith('error')).to.be.true;

  });

  it('should find project and NOT send an error, DELETER', () => {
    const Project = {
      find: () => { },
      deleteOne: () => { }
    }
    const req = {
      query: {}
    }
    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const findFake = sinon.fake.yields('', 'project');
    sinon.replace(Project, 'find', findFake);

    const spySend = sinon.spy(res, 'send');

    controller(Project).deleter(req, res);

    expect(spySend.calledWith('error')).to.be.false;

  });

  it('should delete project and send an error, DELETER', () => {
    const Project = {
      find: () => { },
      deleteOne: () => { }
    }
    const req = {
      query: {}
    }
    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const findFake = sinon.fake.yields('', 'project');
    sinon.replace(Project, 'find', findFake);

    const deleteFake = sinon.fake.yields('error', null);
    sinon.replace(Project, 'deleteOne', deleteFake);

    const spySend = sinon.spy(res, 'send');

    controller(Project).deleter(req, res);

    expect(spySend.calledWith('error')).to.be.true;

  });

  it('should delete project and NOT send an error, DELETER', () => {
    const Project = {
      find: () => { },
      deleteOne: () => { }
    }
    const req = {
      query: {}
    }
    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const findFake = sinon.fake.yields('', 'project');
    sinon.replace(Project, 'find', findFake);

    const deleteFake = sinon.fake.yields('', 'project');
    sinon.replace(Project, 'deleteOne', deleteFake);

    const spySend = sinon.spy(res, 'send');

    controller(Project).deleter(req, res);

    expect(spySend.calledWith('error')).to.be.false;

  });

  it('should set answers and send an error, PUT', () => {
    const Project = {
      updateOne: () => { }
    }
    const req = {
      body: {
        answers: {}
      }
    }
    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const updateFake = sinon.fake.yields('error', null);
    sinon.replace(Project, 'updateOne', updateFake);

    const spySend = sinon.spy(res, 'send');

    controller(Project).put(req, res);

    expect(spySend.calledWith('error')).to.be.true;

  });

  it('should set answers and NOT send an error, PUT', () => {
    const Project = {
      updateOne: () => { }
    }
    const req = {
      body: {
        answers: {}
      }
    }
    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const updateFake = sinon.fake.yields('', 'project');
    sinon.replace(Project, 'updateOne', updateFake);

    const spySend = sinon.spy(res, 'send');

    controller(Project).put(req, res);

    expect(spySend.calledWith('error')).to.be.false;

  });

  it('should get scores and send an error, GETSCORES', () => {
    const Project = {
      findOne: () => { },
      updateOne: () => { }
    }
    const req = {
      params: {}
    }
    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }
    const project = {
      answers: {}
    }

    const findFake = sinon.fake.yields('error', 'project');
    sinon.replace(Project, 'findOne', findFake);

    const spySend = sinon.spy(res, 'send');

    controller(Project).getScores(req, res);

    expect(spySend.calledWith('error')).to.be.true;

  });

})