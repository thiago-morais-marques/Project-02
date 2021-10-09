import React from "react";

import './Processos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

import { GoLaw } from 'react-icons/go';
import { MdAddCircle, MdModeEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri'
import { IconContext } from "react-icons";


const Processos = (props) => {
    return (
      <div>    
        <h1 className='page-title'>Processos</h1>
        <div className='add-new-suit'>
          <IconContext.Provider value={{ color: "#063970", size:"1.1em", className: 'react-icons' }}>
            <p> Cadastrar novo processo&nbsp;</p>
            <MdAddCircle />  
          </IconContext.Provider>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
          )})};
        
        </Accordion>
      </div> 
      
      
    );
}



export default Processos;