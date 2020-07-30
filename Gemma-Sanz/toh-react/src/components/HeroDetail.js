import React from 'react';
import heroData from '../heroData';
import '../styles.css';

class HeroDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroName: "Bombasto"/* heroData[0].name */,
            heroId: 14
        };
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(myEvent) {
        this.setState({
            [myEvent.target.name]: myEvent.target.value
        });
    }

    render() {
        return (
            <form className="containerComponent">
                <h2><span>{this.state.heroName}</span> details!</h2>
                <p>
                    id:<span>{this.state.heroId}</span>
                </p>
                <label htmlFor="heroName">
                    name:
                <input
                        name="heroName"
                        placeholder="Hero name"
                        value={this.state.heroName}
                        onChange={this.onFieldChange} />
                </label>
            </form>
        )
    }
}

export default HeroDetail;