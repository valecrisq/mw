import React from 'react';
import Searchbar from "./Searchbar";
import ViewBar from "./ViewBar";
import DetailBar from "./DetailBar";
import {List, ListItem} from 'material-ui/List';


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

    actClickImage(imageId) {
        if (this.state.data.collection) {
            this.setState({
                selectedImage: this.state.data.collection.items[imageId]
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

                    <List style={{maxHeight: 10}}>
                        <ViewBar
                            data={this.state.data}
                            actClickImage={(imageId) => this.actClickImage(imageId)}
                        />
                    </List>

                    <DetailBar
                        imageData={this.state.selectedImage}
                    />
                </div>

            </div>
        );
    }
}