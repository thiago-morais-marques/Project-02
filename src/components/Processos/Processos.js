import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import './Processos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Accordion } from 'react-bootstrap';
import { GoLaw } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IconContext } from "react-icons";

import ProcessosDetalhes from "./ProcessosDetalhes";
import CadastrarProcesso from "./CadastrarProcesso";
import EditarProcesso from "./EditarProcesso"
import DeleteModal from './DeleteModal';
import ApagarProcesso from './ApagarProcesso';


const Processos = () => {

  const [suits, setSuits] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  const id = suits._id

  function handleModalOpen() {
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  useEffect(() => {
    axios.get('https://ironrest.herokuapp.com/processos')
    .then((response) => {
      console.log(response.data);
      setSuits([...response.data]);
    })
    .catch((err) => {
      console.error(err)
    })
  }, []);
  
    return (

      <div>    

        <h1 className='page-title'>Processos</h1>

        <CadastrarProcesso />  

        <Accordion className='accordion'defaultActiveKey="0">
          {suits.map((processo) => {
            return (
            
            <Accordion.Item eventKey={processo._id} key={processo._id}>
              
              <Accordion.Header>
                <IconContext.Provider value={{ color: "#063970", size:"1.3em" }}>
                  <div>
                    <GoLaw />&nbsp;
                    <span className='proc-number'> Proc. n.&nbsp;</span> 
                    {processo.processo} - {processo.poloAtivo} x {processo.poloPassivo}
                  </div>
                  <div className='edit-delete-icons'>
                    <EditarProcesso id={processo._id}/>
                    <button className="text-only-button" >
                        <RiDeleteBinLine 
                          onClick={(event) => {
                          event.preventDefault();
                          handleModalOpen();
                        }}
                        />
                    </button>
                    <DeleteModal
                      show={showModal}
                      handleClose={handleModalClose}
                      handleAction={() => <ApagarProcesso/>}
                    />
         
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