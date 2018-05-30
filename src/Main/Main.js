import React from 'react';
import Searchbar from "../SearchBar/Searchbar";
import ViewBar from "../ViewBar/ViewBar";
import DetailBar from "../Details/DetailBar";
import './Main.css';

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
        });
    }

    actClickImage(item) {
        if (this.state.data.collection) {
            this.setState({
                selectedImage: item
            })
        }
    }

    render() {
        return (
            <div className={"main"}>

                <Searchbar
                    actSearch={(data) => this.actSearch(data)}
                />

                <div className={"mainBody"}>

                    <div className={'scrollViewBar'}>
                        <ViewBar
                            data={this.state.data}
                            actClickImage={(imageId) => this.actClickImage(imageId)}
                        />
                    </div>

                    <DetailBar
                        imageData={this.state.selectedImage}
                    />
                </div>

            </div>
        );
    }
}