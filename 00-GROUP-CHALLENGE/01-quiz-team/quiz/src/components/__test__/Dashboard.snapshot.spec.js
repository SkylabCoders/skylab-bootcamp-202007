import renderer from 'react-test-renderer'
import Dashboard from '../../components/Dashboard'
import React from 'react'

describe('Dashboard snapshot', ()=>{
    const  props = {
        match: {
            params: {
                heroId: 14
            }
        }
    };
    const treeDashboard = renderer.create(
        <Dashboard />
    );

    it('should match', ()=>{
        expect(treeDashboard).toMatchSnapshot();
    })
})
