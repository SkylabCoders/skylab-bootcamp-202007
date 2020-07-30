import React from 'react';

class Details extends React.Component {

    constructor(props) {
        super(props)
        this.changeName = this.changeName.bind(this);
        this.state = {
            heroName: '',
            heroId: ''
        };

    }
    changeName(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <>
                <form>

                    <p>id: {this.state.heroId}</p>
                    <label htmlFor="heroId">
                        <input
                            type="text"
                            placeholder='hero id'
                            name='heroId'
                            value={this.state.heroId}
                            onChange={this.changeName}
                        />
                    </label>
                    <label htmlFor="heroName">
                        <p>name: {this.state.heroName}</p>
                        <input
                            type="text"
                            placeholder='hero name'
                            name='heroName'
                            value={this.state.heroName}
                            onChange={this.changeName}
                        />
                    </label>

                </form>
                <button onClick={this.props.renderDashBoard}> Back </button>
            </>)
    }


}


export default Details;