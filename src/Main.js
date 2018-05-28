import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: []
        }

    }

    componentDidMount() {
        fetch("https://images-api.nasa.gov/search?description={description}")
            .then(response => response.json())
            .then(responsejson => {
                this.setState({
                    description: responsejson
                })
            })
    }

    render() {

        if (this.state.description.length < 1) return false;

        console.log(this.state.description);


        return (
            <div>
                Ciao
            </div>
        );
    }
}