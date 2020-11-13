import React, { Component } from 'react';

class MeuComponente extends Component {
    constructor(props) {
        super(props);
    }

    criaLink(nome, url) {
        return <a href={url}>{nome}</a>
    }

    render() {
        let f = <a href="http://www.fiap.com.br">fiap</a>
        return <div>
            <div>O link da {f}</div>
            <div>Outro link da {f}</div>

            <div>{this.criaLink("Facebook", "https://www.facebook.com/")}</div>
            <div>{this.criaLink("Google", "https://www.google.com/")}</div>
        </div>
    }
}

export default MeuComponente;