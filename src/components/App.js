import { useEffect, useState } from 'react';
import '../estilos/App.css';
import axios from 'axios';
import Home from './Home/Home.jsx'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { API } from '../Services/Api';
import Ingresos from './Ingresos/Ingresos';
import Login from './Login/Login';
import Activos from './AbuelosActivos/Activos';
import Pasivos from './Pasivos/Pasivos';
import Detail from './Detail/Detail';
import Edit from './Edit/Edit';

function App() {
  const [listaAbuelos, setListaAbuelos] = useState ([]);
 
  const url = "http://localhost:3000/abuelo";
  useEffect(() => {
  
   axios.get(url).then(
     (resp) => {
       setListaAbuelos(resp.data);
       console.log(resp.data);
       
     },
     (error) => {
       console.log(error);
     }
   );


 }, []);


const [user, setUser] = useState(null);
const [loginError, setLoginError] = useState('');
const navigate = useNavigate();

const loginUser = (formData) => {
  API.post("/user/login", formData)
    .then((res) => {
      
      console.log(res);
      if (res.status === 200) {
       
        setUser(res.data.user);
        setLoginError('');
        navigate('/');
      } else {
       
        setLoginError(res.data.message);
      }
    })
    .catch((error) => {
      console.log(error);
      setLoginError("Ocurrió un error en el inicio de sesión. Por favor, inténtalo nuevamente.");
    });
};

return(

<div>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/ingresos" element={<Ingresos/>}/>
<Route path="/activos" element={<Activos abuelos={listaAbuelos}/>}/>
<Route path="/activos/:id" element={<Detail abuelos={listaAbuelos}/>}/>
<Route path="/pasivos" element={<Pasivos abuelos={listaAbuelos}/>}/>
<Route path="/pasivos/:id" element={<Detail abuelos={listaAbuelos}/>}/>
<Route path="/editAbuelo/:id" element={<Edit/>}/>
<Route path="/login" element={<Login/>}/>
</Routes>
</div>)
}

export default App;
