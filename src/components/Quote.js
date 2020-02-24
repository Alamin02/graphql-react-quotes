import React, { Component } from "react";
import "./Quote.scss";

export default class Quote extends Component {
    render() {
        return (
            <div>
                <blockquote>
                    {this.props.description}
                </blockquote>
            </div>
        )
    }
}