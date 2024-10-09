import React from 'react';

class HelloName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: props.name || "Ben"};
    }

    render() {
        return <h1>Hello, {this.state.name}!</h1>;
    }
}

export default HelloName;