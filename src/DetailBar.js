import React from 'react';

export default class DetailBar extends React.Component {


    render() {

        return (

            <div className={'detailBar'}>
                {this.props.imageData &&
                <div>
                    <h1 style={{fontSize: 40, fontFamily: 'Droid Sans'}}>{this.props.imageData.data[0].title}</h1>

                    <div className={'detailImage'}>

                        <img src={this.props.imageData.links[0].href} alt=""/>

                        <div className={'details'}>
                            <h2>Center: {this.props.imageData.data[0].center}</h2>
                            <h2>Date Created: {this.props.imageData.data[0].date_created}</h2>
                            <h2 style={{wordWrap: 'wrap'}}>Description: {this.props.imageData.data[0].description}</h2>
                            <h2>Nasa ID: {this.props.imageData.data[0].nasa_id}</h2>
                        </div>

                    </div>
                </div>
                }
            </div>
        );
    }
}