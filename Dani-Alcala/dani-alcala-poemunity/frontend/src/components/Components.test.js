import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()})
import Ranking from "./Ranking";
import List from "./List";
import MyPoems from "./MyPoems";
import MyFavouritePoems from "./MyFavouritePoems";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import Detail from "./Detail";
import Header from "./Header";

describe('Ranking component', () => {
    const onCountChange = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Ranking onCountChange = {onCountChange}/>)
    })

    it('renders', () => {
        expect(wrapper).not.toBeNull();
    })
})

describe('MyPoems component', () => {
    const onCountChange = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<MyPoems onCountChange = {onCountChange}/>)
    })

    it('renders', () => {
        expect(wrapper).not.toBeNull();
    })
})

describe('MyFavouritePoems component', () => {
    const onCountChange = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<MyFavouritePoems onCountChange = {onCountChange}/>)
    })

    it('renders', () => {
        expect(wrapper).not.toBeNull();
    })
})

describe('Login component', () => {
    const onCountChange = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Login onCountChange = {onCountChange}/>)
    })

    it('renders', () => {
        expect(wrapper).not.toBeNull();
    })
})

describe('Logout component', () => {
    const onCountChange = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Logout onCountChange = {onCountChange}/>)
    })

    it('renders', () => {
        expect(wrapper).not.toBeNull();
    })
})

describe('Profile component', () => {
    const onCountChange = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Profile onCountChange = {onCountChange}/>)
    })

    it('renders', () => {
        expect(wrapper).not.toBeNull();
    })
})

describe('Header component', () => {
    const onCountChange = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Header onCountChange = {onCountChange}/>)
    })

    it('renders', () => {
        expect(wrapper).not.toBeNull();
    })
})