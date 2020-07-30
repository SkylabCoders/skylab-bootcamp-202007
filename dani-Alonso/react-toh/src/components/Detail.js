import React from 'react';
class HeroDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroName: '',
            heroId: 14
        };
        this.onFieldChange = this.onFieldChange.bind(this)
    }
    onFieldChange(event) {
        this.setState({
            heroName: event.target.value
        });
    }
    render() {
        return (
            <form>
                <p>id: {this.state.heroId}</p>
                <label htmlFor="heroName">
                    name:
					<input
                        name="heroName"
                        placeholder="Hero name"
                        value={this.state.heroName}
                        onChange={this.onFieldChange}
                    />
                </label>
            </form>
        );
    }
}
export default HeroDetail;