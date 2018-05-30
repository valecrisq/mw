import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import search from '../icon/search.svg';
import './SearchBar.css';

export default class Searchbar extends React.Component {

    searchResult(e) {
        if (e.which === 13) {
            fetch("https://images-api.nasa.gov/search?q=" + this.refs.inputUser.input.value)
                .then(response => response.json())
                .then(responsejson => {
                        this.props.actSearch(responsejson)
                    }
                )
        }
    }

    render() {
        return (
            <Toolbar className={'searchbar'}>
                <img src={search} alt=""/>
                <TextField
                    hintText="What are you looking for?"
                    onKeyPress={(e) => this.searchResult(e)} ref={'inputUser'}
                />
            </Toolbar>
        );
    }
}