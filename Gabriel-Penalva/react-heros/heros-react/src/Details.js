import React from 'react';

import { NavLink } from 'react-router-dom';

class Details extends React.Component {

    constructor(props) {
        super(props)
        this.heroList = props.heroList;

        this.changeName = this.changeName.bind(this);
        this.state = {
            heroName: this.setName(),
            heroId: props.match.params.heroId
        };
    }

    changeName(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    setName() {
        let hero = (this.heroList.find((heros) => +heros.id === +this.props.match.params.heroId))
        if (hero)
            return hero.name
        return 'no_data'
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