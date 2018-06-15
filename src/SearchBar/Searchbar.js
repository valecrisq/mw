import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import search from '../icon/search.svg';
import nasalogo from '../icon/nasalogo.png';
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
                <img className={'nasaLogo'} src={nasalogo} alt=""/>
                <img className={'searchImage'} src={search} alt=""/>

                <TextField
                    className={'textField-searchBar'}
                    hintText="What are you looking for?"
                    hintStyle={{color: 'white'}}
                    inputStyle={{color: 'white'}}
                    underlineShow={false}
                    onKeyPress={(e) => this.searchResult(e)} ref={'inputUser'}
                />
            </Toolbar>
        );
    }
}