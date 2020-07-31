import React from 'react';
import heroData from '../heroData';
import '../styles.css';
import { Prompt } from 'react-router-dom'


class HeroDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroName: '',/* heroData[0].name */
            heroId: null,
            isDirty: false
        };
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(myEvent) {
        this.setState({
            [myEvent.target.name]: myEvent.target.value,
            isDirty: true
        });
    }

    getHeroById(urlId) {
        return heroData.find((hero) => hero.id === urlId);
    }

    componentDidMount() {
        const hero = this.getHeroById(+this.props.match.params.heroId);
        this.setState({
            heroName: hero.name,
            heroId: hero.id
        })
    }

    /*     let heroId = heroData.find() =>
     */

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
                    <Prompt when={this.state.isDirty}
                        message="Are you sure you want to navigate away?"
                    />
                </label>
            </form>

        )
    }
}

export default HeroDetail;