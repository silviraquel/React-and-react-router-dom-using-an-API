import {useEffect, useState} from 'react';
import './filme-info.css';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function Filme(){
    const { id }= useParams();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if(response.data.length === 0){
                //tentou  acessar com um ID que não existe, então navega ele para a Home
                navigate('/');
                return;
            }

         //   console.log(response.data);
            setFilme(response.data);
            setLoading(false);
        }

        loadFilmes();

    },[navigate,id]);

    if(loading){
        return(
        <div className='filme-info'>
           <h1>Carregando seu filme...</h1>
        </div>
        )       
    }

    return (
        <div className='filme-info'>
        <h1>{filme.nome}</h1>
        <img src={filme.foto} alt={filme.nome} />

        <h3>Sinopse</h3>
        {filme.sinopse}

        <div className='botoes'>
            <button onClick={()=>{}}>Salvar</button>
            <button>
                <a className='linkYou' target='_blank' href={`http://youtube.com/results?search_query=${filme.nome} Trailer`}>
                    Trailer
                </a>
            </button>
        </div>

     </div>
    )        
}
