import React, { Component } from 'react';

class MeuComponenteEventos extends Component {
    constructor(props){
        super(props);
        this.clicou = this.clicou.bind(this);
    }
    
    clicou(){
        if(this.props.funcao != undefined)
            this.props.funcao();
    }
    render(){
        return <input type="button" value={this.props.texto} onClick={this.clicou} />
    }
}
export default MeuComponenteEventos;