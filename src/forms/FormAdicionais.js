import React, { Component } from 'react';

class FormAdicionais extends Component{
    constructor(props){
        super(props);
        this.state = {
            precoTotal: 0.00, precoIdVisual: 0, precoBgAnimado: 0, precoCriaConteudo:0, precoCriaPerfil:0,
            precoPoliticaPriv: 0, precoCriaDomain: 0, precoIntegraDb: 0, precoIntegracaoHotjar: 0,
            precoHospServidor:0, precoSuporte:0, precoAnalytics:0, precoNumIntegra:0, precoIntegraPluga:0,
            precoPagExtra:0, precoHoraExtra:0}
        this.handleHoraExtraInput = this.handleHoraExtraInput.bind(this) 
        this.handlePagExtraInput = this.handlePagExtraInput.bind(this)
        this.handleIdVisualInput = this.handleIdVisualInput.bind(this)
        this.handleBgAnimadoInput = this.handleBgAnimadoInput.bind(this)
        this.handleCriaConteudokInput = this.handleCriaConteudokInput.bind(this)
        this.handleCriaPerfilInput = this.handleCriaPerfilInput.bind(this)
        this.handlePoliticaPrivInput = this.handlePoliticaPrivInput.bind(this)
        this.handleCriaDomainInput = this.handleCriaDomainInput.bind(this)
        this.handleIntegraDbInput = this.handleIntegraDbInput.bind(this)
        this.handleIntegraHotjar = this.handleIntegraHotjar.bind(this)
        this.handleIntegraPluga = this.handleIntegraPluga.bind(this)
        this.handleNumIntegra = this.handleNumIntegra.bind(this)
        this.handleIntegraGoogleAnalytics = this.handleIntegraGoogleAnalytics.bind(this)
        this.handleSuporte = this.handleSuporte.bind(this)
        this.handleHospedagemServidor = this.handleHospedagemServidor.bind(this)
        this.showPrecoTotal = this.showPrecoTotal.bind(this)
    }
    
    handlePagExtraInput({target}){
        if (target.value == '1-5'){
            this.setState({
                precoPagExtra: 60
            })
        }
        else if (target.value == '6-10'){
            this.setState({
                precoPagExtra: 120
            })
        }
        else if (target.value == '11-15'){
            this.setState({
                precoPagExtra: 180
            })
        }
    }
    
    handleHoraExtraInput({target}){
        if (target.value == '1-5'){
            this.setState({
                precoHoraExtra: 60
            })
        }
        else if (target.value == '6-10'){
            this.setState({
                precoHoraExtra: 120
            })
        }
        else if (target.value == '11-15'){
            this.setState({
                precoHoraExtra: 180
            })
        }
    }

    async handleIdVisualInput(e){
        // Target é o próprio elemento que está ocorrendo o evento então:
            // const { target } = e
        // Queremos capturar o valor de name (name ali embaixo)
            // const { name } = target
        // E então, temos que capturar nosso valor
        // const value = target.type === 'checkbox' ? target.checked : target.value
           
        // Agora value recebe o valor de checked (true/false, certo?)
        if (e.target.checked == true){
            await this.setState({
                precoIdVisual: 50
            }) 
            console.log(this.state.precoIdVisual)  
        }
        else{
            await this.setState({
                precoIdVisual: 0
            })
            console.log(this.state.precoIdVisual)
        }
    }

    async handleBgAnimadoInput(e){
        if (e.target.checked == true){
            await this.setState({
                precoBgAnimado: 70
            })   
        }
        else{
            await this.setState({
                precoBgAnimado: 0
            })
        }
        console.log(this.state.precoBgAnimado)
    }
    
    async handleCriaConteudokInput(e){
        if (e.target.checked == true){
            await this.setState({
                precoCriaConteudo: 50
            })   
        }
        else{
            await this.setState({
                precoCriaConteudo: 0
            })
        }
        console.log(this.state.precoCriaConteudo)
    }

    handleCriaPerfilInput(e){
        if (e.target.checked == true){
            this.setState({
                precoCriaPerfil: 100
            })   
        }
        else{
            this.setState({
                precoCriaPerfil: 0
            })
        }
        console.log(this.state.precoCriaPerfil)
    }

    handlePoliticaPrivInput(e){
        if (e.target.checked == true){
            this.setState({
                precoPoliticaPriv: 100
            })   
        }
        else{
            this.setState({
                precoPoliticaPriv: 0
            })
        }
        console.log(this.state.precoPoliticaPriv)
    }

    async handleCriaDomainInput(e){
        if (e.target.checked == true){
            await this.setState({
                precoCriaDomain: 70
            })   
        }
        else{
            await this.setState({
                precoCriaDomain: 0
            })
        }
        console.log(this.state.precoCriaDomain)
    }

    async handleIntegraDbInput(e){
        if (e.target.checked == true){
            await this.setState({
                precoIntegraDb: 70
            })   
        }
        else{
            await this.setState({
                precoIntegraDb: 0
            })
        }
        console.log(this.state.precoIntegraDb)
    }

    handleOption({target}){
        console.log(target.value)
        if (target.value == '0 meses'){
            this.setState({
                precoIntegracaoHotjar: 0
            })
        }
        else if (target.value == '6 meses'){
            this.setState({
                precoIntegracaoHotjar: 60
            })
        }
        else if (target.value == '12 meses'){
            this.setState({
                precoIntegracaoHotjar: 120
            })
        }
        else if (target.value == '18 meses'){
            this.setState({
                precoIntegracaoHotjar: 180
            })
        }
        else if (target.value == '24 meses'){
            this.setState({
                precoIntegracaoHotjar: 240
            })
        }
        // console.log(this.state.precoIntegracaoHotjar)
    }

    handleIntegraHotjar({target}){
        console.log(target.value)
        if (target.value == '6 meses'){
            this.setState({
                precoIntegracaoHotjar: 60
            })
        }
        else if (target.value == '12 meses'){
            this.setState({
                precoIntegracaoHotjar: 120
            })
        }
        else if (target.value == '18 meses'){
            this.setState({
                precoIntegracaoHotjar: 180
            })
        }
        else if (target.value == '24 meses'){
            this.setState({
                precoIntegracaoHotjar: 240
            })
        }
    }
    
        handleIntegraPluga({target}){
            console.log(target.value)
            if (target.value == '6 meses'){
                this.setState({
                    precoIntegraPluga: 60
                })
            }
            else if (target.value == '12 meses'){
                this.setState({
                    precoIntegraPluga: 120
                })
            }
            else if (target.value == '18 meses'){
                this.setState({
                    precoIntegraPluga: 180
                })
            }
            else if (target.value == '24 meses'){
                this.setState({
                    precoIntegraPluga: 240
                })
            }
        }
        
        handleNumIntegra({target}){
            console.log(target.value)
            if (target.value == '1'){
                this.setState({
                    precoNumIntegra: 60
                })
            }
            else if (target.value == '2'){
                this.setState({
                    precoNumIntegra: 120
                })
            }
            else if (target.value == '3'){
                this.setState({
                    precoNumIntegra: 180
                })
            }
            else if (target.value == '4'){
                this.setState({
                    precoNumIntegra: 240
                })
            }
        }
        
        handleIntegraGoogleAnalytics({target}){
            console.log(target.value)
            if (target.value == '6 meses'){
                this.setState({
                    precoAnalytics: 60
                })
            }
            else if (target.value == '12 meses'){
                this.setState({
                    precoAnalytics: 120
                })
            }
            else if (target.value == '18 meses'){
                this.setState({
                    precoAnalytics: 180
                })
            }
            else if (target.value == '24 meses'){
                this.setState({
                    precoAnalytics: 240
                })
            }
        }
        
        handleSuporte({target}){
            console.log(target.value)
            if (target.value == '6 meses'){
                this.setState({
                    precoSuporte: 60
                })
            }
            else if (target.value == '12 meses'){
                this.setState({
                    precoSuporte: 120
                })
            }
            else if (target.value == '18 meses'){
                this.setState({
                    precoSuporte: 180
                })
            }
            else if (target.value == '24 meses'){
                this.setState({
                    precoSuporte: 240
                })
            }
        }

        handleHospedagemServidor({target}){
            console.log(target.value)
            if (target.value == '6 meses'){
                this.setState({
                    precoHospServidor: 60
                })
            }
            else if (target.value == '12 meses'){
                this.setState({
                    precoHospServidor: 120
                })
            }
            else if (target.value == '18 meses'){
                this.setState({
                    precoHospServidor: 180
                })
            }
            else if (target.value == '24 meses'){
                this.setState({
                    precoHospServidor: 240
                })
            }
        }
    
    showPrecoTotal(){
        this.setState({
            precoTotal: this.state.precoIdVisual + this.state.precoBgAnimado + this.state.precoCriaConteudo +
                        this.state.precoCriaPerfil + this.state.precoPoliticaPriv + this.state.precoIntegraDb + 
                        this.state.precoCriaDomain + this.state.precoIntegracaoHotjar + this.state.precoHospServidor +
                        this.state.precoSuporte + this.state.precoAnalytics + this.state.precoNumIntegra + 
                        this.state.precoIntegraPluga + this.state.precoPagExtra + this.state.precoHoraExtra
        })
        console.log(this.state.precoTotal)
    }
    // componentWillUpdate()
    
    // handleSubmit(e){
    //     alert(`Checkboxes foram enviadas: ${this.state.checked}`)
    //     e.preventDefault()
    //     console.log(this.state.checked)
    // }

    render(){

        return(
            <div>
                <div>
                    <h3>Quer dar um <span>UP</span> no seu plano?</h3>
                    <p>Clique nas funcionalidades que precisa</p>
                    <p>Obs: Seu pacote muda de acordo com os itens ecolhidos</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div name='divBasico'>
                        <label>Básico</label><br/>
                            <label for="paginasExtras">Páginas Extras</label>
                            <select className="" onClick={this.handlePagExtraInput} id="paginasExtras" name='paginasExtras'>
                            <option>0</option>
                            <option>1-5</option>
                            <option>6-10</option>
                            <option>11-15</option>
                            </select><br/>
                            <label for="horaExtras">Horas Extras de Consultoria</label>
                            <select className="" onClick={this.handleHoraExtraInput} id="horaExtras" name='horaExtras'>
                            <option>0</option>
                            <option>1-5</option>
                            <option>6-10</option>
                            <option>11-15</option>
                            </select><br/>
                    </div><br/>
                    <div name='divDesign'>
                        <label>Design</label><br/>
                            Identidade Visual<input type='checkbox' name='identidadeVisual' onClick={this.handleIdVisualInput}/><br/><br/>
                            Background animado<input type='checkbox' name='backgroundAnimado' onClick={this.handleBgAnimadoInput}/><br/><br/>
                            Criação e revisão de conteúdo<input type='checkbox' name='criacaoRevisaoConteudo' onClick={this.handleCriaConteudokInput}/><br/><br/>
                            Criação perfil (Instagram e Facebook)<input type='checkbox' name='criacaoPerfil' onClick={this.handleCriaPerfilInput}/><br/><br/>
                    </div>
                    <div name='divDominio'>
                        <label>Domínio</label>
                            Suporte na criação do domínio<input type='checkbox' name='suporteDominio' onClick={this.handleCriaDomainInput}/><br/><br/>
                            Integração com banco de dados<input type='checkbox' name='integraDb' onClick={this.handleIntegraDbInput}/><br/><br/>
                    </div><br/>
                    <div name='divIntegracao'>
                        <label>Integrações</label><br/>
                            <label for="integracaoHotjar">Integração Hotjar</label>
                            <select className="" onChange={this.handleIntegraHotjar} state={this.state.precoIntegracaoHotjar} id="integracaoHotjar" name='integracao-hotjar'>
                            <option>0 meses</option>
                            <option>6 meses</option>
                            <option>12 meses</option>
                            <option>18 meses</option>
                            <option>24 meses</option>
                            </select><br/>
                            
                            <label for="hospedagemServidor">Hospedagem Servidor</label>
                            <select className="" onChange={this.handleHospedagemServidor} id="hospedagemServidor" name='hospedagemServidor'>
                            <option>0 meses</option>
                            <option>6 meses</option>
                            <option>12 meses</option>
                            <option>18 meses</option>
                            <option>24 meses</option>
                            </select><br/>
                            
                            <label for="suporteTecnico">Suporte Técnico Contínuo</label>
                            <select className="" onChange={this.handleSuporte} id="suporteTecnico" name='suporteTecnico'>
                            <option selected>0 meses</option>
                            <option>6 meses</option>
                            <option>12 meses</option>
                            <option>18 meses</option>
                            <option>24 meses</option>
                            </select><br/>
                            
                            <label for="googleAnalytics">Integração Google Analytics</label>
                            <select className="" onChange={this.handleIntegraGoogleAnalytics} id="googleAnalytics" name='googleAnalytics'>
                            <option>0 meses</option>
                            <option>6 meses</option>
                            <option>12 meses</option>
                            <option>18 meses</option>
                            <option>24 meses</option>
                            </select><br/>
                            
                            <label for="numIntegraPluga">Nº de Integrações Pluga</label>
                            <select className="" onChange={this.handleNumIntegra} id="numIntegraPluga" name='numIntegraPluga'>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            </select><br/>

                            <label for="integraPluga">Integração Pluga</label>
                            <select className="" onChange={this.handleIntegraPluga} id="integraPluga" name='integraPluga'>
                            <option>0 meses</option>
                            <option>6 meses</option>
                            <option>12 meses</option>
                            <option>18 meses</option>
                            <option>24 meses</option>
                            </select><br/> 
                    </div>
                    <input type='button' value='Calcular' onClick={this.showPrecoTotal}/>
                    <input type='submit' value='Continuar'/>
                </form>
                <p>{`Valor: R$${this.state.precoTotal}`}</p>
            </div>
        )
    }
}

export default FormAdicionais;