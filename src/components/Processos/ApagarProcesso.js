import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function ApagarProcesso(props) {
  const  id = props._id;
  const history = useHistory();

  useEffect(() => {
    axios
      .delete(`https://ironrest.herokuapp.com/processos/${id}`)
      .then(() => history.push("/"))
      .catch((err) => console.error(err));
  }, [history, id]);

  return <div>Deleting...</div>;
}

export default ApagarProcesso;
