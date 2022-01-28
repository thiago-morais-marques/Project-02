export const dataDis = (dataDistribuicao) => {
  const date = new Date(dataDistribuicao).toLocaleDateString('pt-BR');
  if (dataDistribuicao !== null) {
    return date;
  }
  return '';
};
export const dataAnd = (dataUltimoAndamento) => {
  const date = new Date(dataUltimoAndamento).toLocaleDateString('pt-BR');
  if (dataUltimoAndamento !== null) {
    return date;
  }
  return '';
};
export const dataTran = (dataTransitoEmJulgado) => {
  const date = new Date(dataTransitoEmJulgado).toLocaleDateString('pt-BR');
  if (dataTransitoEmJulgado !== null) {
    return date;
  }
  return '';
};
