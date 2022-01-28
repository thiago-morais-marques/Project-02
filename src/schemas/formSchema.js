import * as yup from 'yup';

const formSchema = yup.object().shape({
  poloAtivo: yup.string().required('Required field'),
  poloPassivo: yup.string().required('Required field'),
  poloCliente: yup.string().oneOf(['Ativo', 'Passivo']).required('Required Field'),
  processo: yup.string().required('Required Field'),
  pedido: yup.string().required('Required Field'),
  vara: yup.string().required('Required Field'),
  juiz: yup.string(),
  sentencaProferida: yup.boolean(),
  julgamentoMerito: yup.boolean(),
  procedenciaPrimeiraInstancia: yup.boolean(),
  desembargadorRelator: yup.string(),
  recursoSegundaInstancia: yup.boolean(),
  julgamentoSegundaInstancia: yup.boolean(),
  procedenciaSegundaInstancia: yup.boolean(),
  ministroStjRelator: yup.string(),
  recursoStj: yup.boolean(),
  julgamentoStj: yup.boolean(),
  procedenciaStj: yup.boolean(),
  ministroStfRelator: yup.string(),
  recursoStf: yup.boolean(),
  julgamentoStf: yup.boolean(),
  procedenciaStf: yup.boolean(),
  transitoEmJulgado: yup.boolean(),
  dataDistribuicao: yup.date().nullable(),
  dataUltimoAndamento: yup.date().nullable(),
  dataTransitoEmJulgado: yup.date().nullable(),
});

export default formSchema;
