import React from "react";

export default class ListItem extends React.Component {
    render() {
        console.log("props: " + this.props.value)
        return (
            <li onClick={() => this.props.myFn && this.props.myFn(this.props.value)} className="list-group-item">
                <div>
                    <p>{this.props.value}</p>
                </div>

            </li>

        )
    }
}