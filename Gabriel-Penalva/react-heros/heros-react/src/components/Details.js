import React from 'react';

import { NavLink, Prompt } from 'react-router-dom';

class Details extends React.Component {

    constructor(props) {
        super(props)
        this.heroList = props.heroList;

        this.changeName = this.changeName.bind(this);
        this.state = {
            heroName: this.setName(),
            heroId: props.match.params.heroId,
            formIsDirty: false
        };
    }

    changeName(event) {
        this.setState({
            [event.target.name]: event.target.value,
            formIsDirty: true
        })
    }
    setName() {
        let hero = (this.heroList.find((heros) => +heros.id === +this.props.match.params.heroId))
        if (hero)
            return hero.name;
        return 'no_data';
    }

    render() {

        return (
            <div className="hero">
                <h2>{this.state.heroName} Details</h2>
                <div><span>id: </span>{this.state.heroId}</div>
                <div>
                    <label htmlFor="heroName">
                        name:
                        <input
                            type="text"
                            placeholder='hero name'
                            name='heroName'
                            value={this.state.heroName}
                            onChange={this.changeName}
                        />
                    </label>
                    <Prompt when={this.state.formIsDirty} message='Are yoy sure?' />
                </div>
                <nav>
                    <NavLink activeClassName="my-active-class" to="/">
                        Back
				</NavLink>
                </nav>

            </div>
        )
    }
}

export default Details;