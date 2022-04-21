import { render } from "@testing-library/react";
import { Component } from "react";


class Animal extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <img src={this.props.src} alt="" />
                <p>{this.props.color}</p>
            </div>
        )
    }
}
export default Animal;