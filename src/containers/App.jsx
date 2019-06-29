import React from 'react'
import { createGlobalStyle } from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #f5f5f5;
    }
`;

const App = () => {
    //Traemos la informacion con el hook
    const data = useGetData(); //Ejecutando primero
    console.log(data);

    //if data.length no tiene nada, mostrar cargando..caso contrario
    //si hacer el return de toda nuestra estructura
    return data.length === 0 ? <h1>Cargando...</h1> : (
        <Main>
            <GlobalStyle />
            <Sidebar>
                <About 
                    avatar={'https://media.licdn.com/dms/image/C4E03AQG63YOVtF5K2w/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=IVjjQWvHzlah26WKJxbyvigfCkO5sie98MTB6n6f-H0'}
                    name={data.name}
                    profession={data.profession}
                    bio={data.bio}
                    address={data.address}
                    social={data.social}
                />
            </Sidebar>
            
            <Info>
                <Education 
                    data={data.education}
                />
                <Experience 
                    data={data.experience}
                />
                <Certificates 
                    data={data.certificate}
                />
                <Skills 
                    data={data.skills}
                />
            </Info>
        </Main>
    );
}

export default App;