import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import search from './icons/search.svg';

export default class ToolbarExamplesSimple extends React.Component {

    searchResult(e) {
        console.dir(e.key);
        if (e.key === 'Enter') {
            fetch("https://images-api.nasa.gov/search?q=" + this.refs.inputUser.input.value)
                .then(responsejson => {
                    (e) => this.props.actSearch(responsejson)
                })
        }
    }

    render() {
        return (
            <Toolbar className={'toolbar'}>
                <img src={search} alt="" />
                <TextField
                    hintText="What are you looking for?"
                    onKeyPress={(e) => this.searchResult(e)} ref={'inputUser'}
                />
            </Toolbar>
        );
    }
}