import {  useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function ApagarProcesso() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .delete(`https://ironrest.herokuapp.com/processos/${id}`)
      .then(() => history.push("/"))
      .catch((err) => console.error(err));
  }, [history, id]);

  return (<div>Apagando...</div>)

}

export default ApagarProcesso;
