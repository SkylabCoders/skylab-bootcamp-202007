import React from 'react';
import './HeroDetail.css';
import heroListArray from '../hero.mock'

class HeroDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.findId();
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    findId() {
        let id = +this.props.match.params.heroId
        return heroListArray.find((e) => e.id === id);
    }
    render() {
        return (
            <form>
                <h2>{this.state.name} details!</h2>
                <p>id: {this.state.id}</p>
                <label htmlFor='heroName'>
                    name:
                    <input
                        name='heroName'
                        placeholder='Hero name'
                        value={this.state.name}
                        onChange={this.onFieldChange}
                    />
                </label>
            </form>
        );
    }
}

export default HeroDetail;