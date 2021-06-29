import './Contador.css'
import React, { Component } from 'react'

export default class Contador extends Component {

    // Opção 1 para setar state
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         passo: props.passo,
    //         valor: 0,
    //     }
    // }

    //opção 2
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0,
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: +novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <div>
                    <label for="passoInput">Passo:</label>
                    <input id="passoInput" type="number"
                        value={this.state.passo}
                        onChange={e => this.setPasso(e.target.value)}>
                    </input>
                </div>
                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }

}

