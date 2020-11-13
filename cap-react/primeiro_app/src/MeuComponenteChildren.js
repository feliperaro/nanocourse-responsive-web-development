import React, { Component } from 'react';
import MeuComponenteEventos from './MeuComponenteEventos';

class MeuComponenteChildren extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h2>{this.props.titulo}</h2>
            {this.props.children}
        </div>
    }
}

export default MeuComponenteChildren;