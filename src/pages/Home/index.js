import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Home() {
  const [filmes, setfilmes] = useState([]);

  useEffect(()=>{
    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes')
      setfilmes(response.data);
    }

    loadFilmes();

  }, [])

  return (
    <div className="app">
      <h2>Você está na Home</h2>
    </div>
  );
}