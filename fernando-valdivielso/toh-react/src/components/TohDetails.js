import React from 'react';

class TohDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroName: 'Bombasto',
            heroId: 14,
        };
        this.onFieldChange = this.onFieldChange.bind(this); // cuando se diapara el evento, hacemos un bind de la definicion de funcion del evento con la instancia del componente creado
    }

    onFieldChange(event) {
        console.log(event.target.name, event.target.value);
        this.setState({
            heroName: event.target.value
        });
    }

    render() {
        return (
            <form>
                <p>id: {this.state.heroId}</p>
                <label htmlFor='heroName'>
                    name:
                <input
                        name='heroName'
                        placeholder='Hero Name'
                        value={this.state.heroName}
                        onChange={this.onFieldChange} />
                </label>
            </form> // onFieldChamge es una funcion que creamos (onChange es envento sintetico)
        )
    }
}

export default TohDetails