import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdModeEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import EditarProcesso from '../EditarProcesso/EditarProcesso';
import DeleteModal from '../DeleteModal/DeleteModal';
import { dataDis, dataAnd, dataTran } from '../../../../../util/dates';
import './ProcessosDetalhes.css';

const ProcessosDetalhes = ({ detalhes, setLoading }) => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const handleOpenEditDialog = () => setOpenEditDialog(true);
  const handleCloseEditDialog = () => setOpenEditDialog(false);
  const handleOpenDeleteDialog = () => setOpenDeleteDialog(true);
  const handleCloseDeleteDialog = () => setOpenDeleteDialog(false);
  return (
    <div>
      <div className="details-buttons">
        <button
          type="button"
          className="edit-button"
          onClick={handleOpenEditDialog}
        >
          Editar
          <MdModeEdit />
        </button>
        <EditarProcesso
          id={detalhes._id}
          handleClose={handleCloseEditDialog}
          show={openEditDialog}
          setLoading={setLoading}
        />
        <button
          type="button"
          className="delete-button"
          onClick={handleOpenDeleteDialog}
        >
          Deletar
          <RiDeleteBinLine />
        </button>
        <DeleteModal
          id={detalhes._id}
          handleClose={handleCloseDeleteDialog}
          open={openDeleteDialog}
          setLoading={setLoading}
        />
      </div>
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <td>
                <span className="details-keys">
                  Pólo do Cliente:&nbsp;
                </span>
                {detalhes.poloCliente}
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Pedido:&nbsp;
                </span>
                {detalhes.pedido}
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Vara:&nbsp;
                </span>
                {detalhes.vara}
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Data de Distribuição:&nbsp;
                </span>
                {dataDis(detalhes.dataDistribuicao) === 'Invalid Date'
                  ? detalhes.dataDistribuicao
                  : dataDis(detalhes.dataDistribuicao)}
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Data do Último Andamento:&nbsp;
                </span>
                {dataAnd(detalhes.dataUltimoAndamento) === 'Invalid Date'
                  ? detalhes.dataUltimoAndamento
                  : dataAnd(detalhes.dataUltimoAndamento)}
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Trânsito em Julgado:&nbsp;
                </span>
                {detalhes.transitoEmJulgado === true ? 'Sim' : 'Não'}
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Data do Trânsito em Julgado:&nbsp;
                </span>
                {dataTran(detalhes.dataTransitoEmJulgado) === 'Invalid Date'
                  ? detalhes.dataTransitoEmJulgado
                  : dataTran(detalhes.dataTransitoEmJulgado)}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <span className="details-keys">
                  Juiz:&nbsp;
                </span>
                {detalhes.juiz}
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Setença Proferida:&nbsp;
                </span>
                {detalhes.sentença === true ? 'Sim' : 'Não' }
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Julgamento do Mérito:&nbsp;
                </span>
                {detalhes.julgamentoMerito === true ? 'Sim' : 'Não' }
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Procedência em 1ª Instãncia:&nbsp;
                </span>
                {detalhes.procedenciaPrimeiraInstancia === true ? 'Sim' : 'Não' }
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Recurso para 2ª Instância:&nbsp;
                </span>
                {detalhes.recursoSegundaInstancia === true ? 'Sim' : 'Não' }
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Desembargador Relator:&nbsp;
                </span>
                {detalhes.desembargadorRelator === null ? 'Sem Relator' : detalhes.desembargadorRelator}
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Julgamento em 2ª Instância:&nbsp;
                </span>
                {detalhes.julgamentoSegundaInstancia === true ? 'Sim' : 'Não' }
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Procedência em 2ª Instância:&nbsp;
                </span>
                {detalhes.procedenciaSegundaInstancia === true ? 'Sim' : 'Não' }
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <span className="details-keys">
                  Recurso para o STJ:&nbsp;
                </span>
                {detalhes.recursoStj === true ? 'Sim' : 'Não' }
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Ministro STJ Relator:&nbsp;
                </span>
                {detalhes.ministroStjRelator === null ? 'Sem Relator' : detalhes.ministroStjRelator}
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Julgamento no STJ:&nbsp;
                </span>
                {detalhes.julgamentoStj === true ? 'Sim' : 'Não' }
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Procedência no STJ:&nbsp;
                </span>
                {detalhes.procedenciaStj === true ? 'Sim' : 'Não' }
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Recurso para o STF:&nbsp;
                </span>
                {detalhes.recursoStf === true ? 'Sim' : 'Não' }
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Ministro STF Relator:&nbsp;
                </span>
                {detalhes.ministroStfRelator === null ? 'Sem Relator' : detalhes.ministroStfRelator}
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Julgamento no STF:&nbsp;
                </span>
                {detalhes.julgamentoStf === true ? 'Sim' : 'Não' }
              </td>
            </tr>
            <tr>
              <td>
                <span className="details-keys">
                  Procedência no STF:&nbsp;
                </span>
                {detalhes.procedenciaStj === true ? 'Sim' : 'Não' }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

ProcessosDetalhes.propTypes = {
  detalhes: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default ProcessosDetalhes;
