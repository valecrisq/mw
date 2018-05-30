import React from 'react';
import './ViewBar.css';

export default class ViewBar extends React.Component {

    render() {
        if (!this.props.data.collection) return false;


        const renderData = this.props.data.collection.items
            .filter((item) => item.links[0].href.includes('jpg'))
            .map((item, index) => {
                return (<div
                        className={'image'}
                        style={{backgroundImage: 'url(' + item.links[0].href + ')'}}
                        onClick={(e) => this.props.actClickImage(item)}
                        key={index}
                    >
                    </div>
                )
            });


        return (
            <div className={'viewBar'}>
                {this.props.data && renderData}
            </div>
        );
    }
}