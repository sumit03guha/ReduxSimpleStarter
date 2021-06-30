import React from 'react';

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {term : ""};
    };
    
    render() {
        return (
        <div className='search-bar'>
            <input 
            onChange={event => this.onInputChange(event.target.value)}/>
        </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;