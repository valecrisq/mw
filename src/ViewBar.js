import React from 'react';

export default class ViewBar extends React.Component {

    render() {

        console.log(this.props.data);

        let renderData = [];
        for (let i in this.props.data) {
            let singleData = this.props.data[i]
            renderData.push(
                <img src={singleData.links[0].href} alt={singleData.data[0].title}/>
            )
        }

        return (
            <div>
                {this.props.data && renderData}
            </div>
        );
    }
}