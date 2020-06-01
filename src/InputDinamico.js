import React, {Component} from 'react';

class InputDinamico extends Component{
    constructor(props){
        super(props);
        
        this.state = { name: '', desc:'', age:''}
        this.handleInput = this. handleInput.bind(this)
    }

    // Lembre-se: {target} = event 
    // é igual a  target = event.target
    // Isto é, destructuring é acessar propriedades!!!
    handleInput(e) {
        const {target} = e
        const {name} = target // Como é destructuring esse name é de lá dos inputs
        const value = target.type === 'checkbox' ? this.checked : this.value

        return this.setState({
            // Modo de acessar a variável
            [name]: value
        })
    }

    render(){

        console.log(this.state)
        return(
            <div>
                <input type='text' name='name' id='name' onChange={this.handleInput}></input>
                <input type='text' name='desc' id='desc' onChange={this.handleInput}></input>
                <input type='number' name='age' id='age' onChange={this.handleInput}></input>
                <p></p>
            </div>
        )
    }
}

export default InputDinamico;