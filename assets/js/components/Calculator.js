import React, { Component } from 'react'

class Calculator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            valueFinal: '',
            valueFirstNumber: '',
            valueComp: ''
        }
    }

    clickHandler(event) {
        this.setState({
            valueFinal: this.state.valueFinal + event.target.value

        })
    }

    clickCompute(event) {

        this.setState({
            valueFirstNumber: this.state.valueFinal,
            valueFinal: '',
            valueComp: event.target.value
        })

    }

    clickTotal(event) {
        if (this.state.valueComp == '/') {
            this.setState({
                valueFinal: parseInt(this.state.valueFirstNumber) / parseInt(this.state.valueFinal)
            })
        }
        if (this.state.valueComp == '*') {
            this.setState({
                valueFinal: parseInt(this.state.valueFirstNumber) * parseInt(this.state.valueFinal)
            })
        }
        if (this.state.valueComp == '-') {
            this.setState({
                valueFinal: parseInt(this.state.valueFirstNumber) - parseInt(this.state.valueFinal)
            })
        }
        if (this.state.valueComp == '+') {
            this.setState({
                valueFinal: parseInt(this.state.valueFirstNumber) + parseInt(this.state.valueFinal)
            })
        }

    }


    clickClear(event) {
        this.setState({ valueFinal: '' })
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <td>
                            <input type="text" value={this.state.valueFinal} />
                        </td>

                        <tr>
                            <button value='1' onClick={(event) => this.clickHandler(event)}>1</button>
                            <button value="2" onClick={(event) => this.clickHandler(event)}>2</button>
                            <button value="3" onClick={(event) => this.clickHandler(event)}>3</button>
                            <button value="/" onClick={(event) => this.clickCompute(event)}>/</button>
                        </tr>

                        <tr>
                            <button value="4" onClick={(event) => this.clickHandler(event)}>4</button>
                            <button value="5" onClick={(event) => this.clickHandler(event)}>5</button>
                            <button value="6" onClick={(event) => this.clickHandler(event)}>6</button>
                            <button value="*" onClick={(event) => this.clickCompute(event)}>*</button>
                        </tr>

                        <tr>
                            <button value="7" onClick={(event) => this.clickHandler(event)}>7</button>
                            <button value="8" onClick={(event) => this.clickHandler(event)}>8</button>
                            <button value="9" onClick={(event) => this.clickHandler(event)}>9</button>
                            <button value="-" onClick={(event) => this.clickCompute(event)}>-</button>
                        </tr>
                        <tr>
                            <button value="C" onClick={(event) => this.clickClear(event)}>C</button>
                            <button value="0" onClick={(event) => this.clickHandler(event)}>0</button>
                            <button value="=" onClick={(event) => this.clickTotal(event)}>=</button>
                            <button value="+" onClick={(event) => this.clickCompute(event)}>+</button>

                        </tr>

                    </tbody >
                </table >
            </div>

        )
    }
}

export default Calculator