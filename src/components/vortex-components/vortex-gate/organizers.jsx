import * as React from 'react';
export class VortexWeb3Loaded extends React.Component {
    render() {
        return this.props.children;
    }
}
export class VortexWeb3LoadError extends React.Component {
    render() {
        return this.props.children;
    }
}
export class VortexWeb3NetworkError extends React.Component {
    render() {
        return this.props.children;
    }
}