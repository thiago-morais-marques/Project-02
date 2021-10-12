import React from "react";

import './Processos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

import { GoLaw } from 'react-icons/go';
import { MdModeEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IconContext } from "react-icons";

import ProcessosDetalhes from "./ProcessosDetalhes";
import CadastrarProcesso from "./CadastrarProcesso";

const Processos = (props) => {

    return (

      <div>    

        <h1 className='page-title'>Processos</h1>

        <div className='add-new-suit'>
            <CadastrarProcesso />
        </div>

        <Accordion className='accordion'defaultActiveKey="0">
          {props.processos.map((processo) => {
            return (
            
            <Accordion.Item eventKey={processo._id} key={processo._id}>
              
              <Accordion.Header>
                <IconContext.Provider value={{ color: "#063970", size:"1.3em" }}>
                  <div>
                    <GoLaw />&nbsp;
                    <span className='proc-number'> Proc. n.&nbsp;</span> 
                    {processo.processo} - {processo.poloAtivo} x {processo.poloPassivo}
                  </div>
                  <div className={'edit-delete-icons'}>
                    <MdModeEdit />&nbsp;
                    <RiDeleteBinLine />
                  </div>
                </IconContext.Provider>
                </Accordion.Header>

                <Accordion.Body >
                  <br/>
                  <ProcessosDetalhes detalhes={processo} />
                </Accordion.Body>

              </Accordion.Item>
          )})};
        
        </Accordion>
      </div> 
      
    );
}



export default Processos;