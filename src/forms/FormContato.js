import React, { Component } from 'react';

class FormContato extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '', nomeCompleto: '', email: '', contato: '',
            siteCategoria: '', siteEndereco: '', descricao: ''
        }
        this.handleNomeInput = this.handleNomeInput.bind(this)
        this.handleEmailInput = this.handleEmailInput.bind(this)
        this.handleContatoInput = this.handleContatoInput.bind(this)


        this.handleInput = this.handleInput.bind(this)
    }

    handleNomeInput(e){
        this.setState({
            value: e.target.value
        })
        console.log(this.state.value)
    }

    handleEmailInput(e){
        this.setState({
            value: e.target.value
        })
        console.log(this.state.value)
    }
    handleContatoInput(e){
        this.setState({
            value: e.target.value
        })
        console.log(this.state.value)
    }

    // TESTE - Para lidar com múltiplos campos de um form
    handleInput(e){
        const { target } = e;
        const { name } = target;
        const value  = target;
        this.setState({
            // [name] - está sendo passado como string, e está ligando automáticamente à variável value
            // lembrando que [name] está se relacionando com nome-completo/email/contato
            [name]: value
        })
    }

    render(){

        return(
            <div>

                <div>
                <label className='dados-pessoais'>Dados Pessoais</label>
                <img></img>
                </div>

                <form  onSubmit={'completar'}>
                    <label>Nome Completo</label>
                    <input type='text' className='nome-completo' placeholder='Digite seu nome' name='nomeCompleto' id='nomeCompleto' onChange={this.handleInput}/><br/><br/>
                    <label>E-mail</label>
                    <input type='text' className='email' placeholder='Digite seu e-mail' name='email' id='email'onChange={this.handleInput}/><br/><br/>
                    <label>Telefone</label>
                    <input type="number" className='contato' placeholder='Digite seu telefone de contato' name='contato' id='contato' onChange={this.handleInput}/><br/><br/>
                    <label>Categoria do site</label>
                    <input type='text' className='siteCategoria'placeholder='Digite a categoria do seu serviço' name='siteCategoria' id='siteCategoria' onChange={this.handleInput}/><br/><br/>
                    <label>Site(se houver)</label>
                    <input type='text' className='siteEndereco' placeholder='Digite o endereço do seu site, se houver' name='siteEndereco' id='siteEndereco' onChange={this.handleInput}/><br/><br/>
                    <label>Escreva um pouco sobre como quer seu site</label>
                    <input type='text' className='descricao' placeholder='Escreva um pouco sobre como você enxerga seu site, nós queremos trazer a sua visão para a tela' name='descricao' id='descricao' onChange={this.handleInput}/><br/><br/>
                </form>
                <input type='submit' value='Enviar'/>

            </div>

        )
    }
}

export default FormContato;