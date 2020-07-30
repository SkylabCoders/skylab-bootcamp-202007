import React from 'react';

class HeroQuery extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            queryProp: undefined,
            queryValue: undefined,
            onFieldChange: this.onFieldChange.bind(this),
            heroName: undefined
        }
    }

    onFieldChange(event){
        //console.log('updated input:', event.target.name, event.target.value);
        this.setState({[event.target.name]: event.target.value});
    }

    getQueryResult(){
        let result = (
            <div className="query__container">
                <p>Query</p>
                <p>input: {this.state.queryValue}</p>
                <input className="query__input" name="input__heroName" placeholder="Default Query Text" value={this.state.heroName} onChange={this.onFieldChange}>Search by name:</input>
            </div>
        );
        return result;
    }

    render(){
        return this.getQueryResult();
    }
}

export default HeroQuery;