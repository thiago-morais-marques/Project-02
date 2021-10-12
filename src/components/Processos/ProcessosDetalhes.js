import React from "react";
import './ProcessosDetalhes.css';

const ProcessosDetalhes = (props) => {
    return (
        <div className='row'>
            <div className='column'>

                <span className='details-keys'>
                    Pólo do Cliente:&nbsp;
                </span>
                    {props.detalhes.poloCliente}
                    <br/>
                <span className='details-keys'>
                    Pedido:&nbsp;
                </span>
                    {props.detalhes.pedido}
                    <br/>
                <span className='details-keys'>
                    Vara:&nbsp;
                </span>
                    {props.detalhes.vara}
                    <br/>
                <span className='details-keys'>
                    Data de Distribuição:&nbsp;
                </span>
                    {props.detalhes.dataDistribuicao}
                    <br/>
                <span className='details-keys'>
                    Data do Último Andamento:&nbsp;
                </span>
                    {props.detalhes.dataUltimoAndamento}
                    <br/>
                <span className='details-keys'>
                    Trânsito em Julgado:&nbsp;
                </span>
                    {props.detalhes.transitoEmJulgado === true ? 'Sim' : 'Não'}
                    <br/>
                <span className='details-keys'>
                    Data do Trânsito em Julgado:&nbsp;
                </span>
                    {props.detalhes.dataTransitoEmJulgado === null ? "Processo Ativo" : props.detalhes.dataTransitoEmJulgado}
                    <br/>
                    <br/>

                <span className='details-keys'>
                    Juiz:&nbsp;
                </span>
                    {props.detalhes.juiz}
                    <br/>
                <span className='details-keys'>
                    Setença Proferida:&nbsp;
                </span>
                    {props.detalhes.sentença === true ? 'Sim' : 'Não' }
                    <br/>
                <span className='details-keys'>
                    Julgamento do Mérito:&nbsp;
                </span>
                    {props.detalhes.julgamentoMerito === true ? 'Sim' : 'Não' }
                    <br/>
                <span className='details-keys'>
                    Procedência em 1ª Instãncia:&nbsp;
                </span>
                    {props.detalhes.procedenciaPrimeiraInstancia === true ? 'Sim' : 'Não' }
                    <br/>

            </div>

            <div className='column'>
                
                <span className='details-keys'>
                    Recurso para 2ª Instância:&nbsp;
                </span>
                    {props.detalhes.recursoSegundaInstancia === true ? 'Sim' : 'Não' }
                    <br/>
                <span className='details-keys'>
                    Desembargador Relator:&nbsp;
                </span>
                    {props.detalhes.desembargadorRelator === null ? 'Sem Relator' : props.detalhes.desembargadorRelator}
                    <br/>
                <span className='details-keys'>
                    Julgamento em 2ª Instância:&nbsp;
                </span>
                    {props.detalhes.julgamentoSegundaInstancia === true ? 'Sim' : 'Não' }
                    <br/>
                <span className='details-keys'>
                    Procedência em 2ª Instância:&nbsp;
                </span>
                    {props.detalhes.procedenciaSegundaInstancia === true ? 'Sim' : 'Não' }
                    <br/>
                    <br/>

                <span className='details-keys'>
                    Recurso para o STJ:&nbsp;
                </span>
                    {props.detalhes.recursoStj === true ? 'Sim' : 'Não' }
                    <br/>
                <span className='details-keys'>
                    Ministro STJ Relator:&nbsp;
                </span>
                    {props.detalhes.ministroStjRelator === null ? 'Sem Relator' : props.detalhes.ministroStjRelator}
                    <br/>
                <span className='details-keys'>
                    Julgamento no STJ:&nbsp;
                </span>
                    {props.detalhes.julgamentoStj === true ? 'Sim' : 'Não' }
                    <br/>
                <span className='details-keys'>
                    Procedência no STJ:&nbsp;
                </span>
                    {props.detalhes.procedenciaStj === true ? 'Sim' : 'Não' }
                    <br/>
                    <br/>

                <span className='details-keys'>
                    Recurso para o STF:&nbsp;
                </span>
                    {props.detalhes.recursoStf === true ? 'Sim' : 'Não' }
                    <br/>
                <span className='details-keys'>
                    Ministro STF Relator:&nbsp;
                </span>
                    {props.detalhes.ministroStfRelator === null ? 'Sem Relator' : props.detalhes.ministroStfRelator}
                    <br/>
                <span className='details-keys'>
                    Julgamento no STF:&nbsp;
                </span>
                    {props.detalhes.julgamentoStf === true ? 'Sim' : 'Não' }
                    <br/>
                <span className='details-keys'>
                    Procedência eno STF:&nbsp;
                </span>
                    {props.detalhes.procedenciaStj === true ? 'Sim' : 'Não' }
                    <br/>
                    <br/>
                
            </div>
        </div>
    );
}

export default ProcessosDetalhes;