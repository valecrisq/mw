import React from 'react';
import Searchbar from "./Searchbar";
import ViewBar from "./ViewBar";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    actSearch(data) {
        this.setState({
            data: data
        })
    }

    render() {


        return (
            <div className={"main"}>

                <Searchbar
                    actSearch={this.actSearch}
                />

                <div className={"mainBody"}>
                    <ViewBar
                        data={this.state.data}
                    />
                </div>

            </div>
        );
    }
}