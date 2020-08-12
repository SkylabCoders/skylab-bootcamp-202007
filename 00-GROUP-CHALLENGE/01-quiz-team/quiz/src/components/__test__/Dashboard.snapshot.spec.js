import renderer from 'react-test-renderer'
import Dashboard from '../../components/Dashboard'
import React from 'react'

describe('Dashboard snapshot', ()=>{
    const treeDashboard = renderer.create(
        <Dashboard />
    );

    it('should match', ()=>{
        expect(treeDashboard).toMatchSnapshot();
    })
})
