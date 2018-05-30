import React from 'react';


export default class ViewBar extends React.Component {

    render() {

        let renderData = [];
        if (this.props.data.collection) {
            for (let i in this.props.data.collection.items) {
                //debugger;
                let singleData = this.props.data.collection.items[i];


                if (!singleData.links[0].href.includes('jpg')) continue;
                renderData.push(
                    <div
                        className={'image'}
                        style={{borderRadius: 50, backgroundImage: 'url(' + singleData.links[0].href + ')'}}
                        onClick={(e) => this.props.actClickImage(i)}
                        key={i}
                    >

                    </div>
                )


            }
        }


        return (
            <div className={'viewBar'}>
                {this.props.data && renderData}
            </div>
        );
    }
}