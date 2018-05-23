import React, { Component } from 'react';

//let's define a CLASS COMPONENT
class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {term: ''};
    }
    
    render() {
        return (
            <div className="search-bar">
                <input 
                    value={ this.state.term } 
                    onChange={ e => this.onInputChange(e.target.value) } 
                    type="text" name=""
                />
            </div>
            ); 
    }
    
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;