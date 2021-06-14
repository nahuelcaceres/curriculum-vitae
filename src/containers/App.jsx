import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
// import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData'
import jsPDF from 'jspdf'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #f5f5f5;
    }
`;

const ButtonGeneratePDF = styled.button`
    color: #212121;
    border: none;
    text-decoration: none;
    font-size: 2.2em;
`;

const App = () => {
    //Traemos la informacion con el hook
    const data = useGetData(); //Ejecutando primero
    //console.log(data);

    const generatePDF = () => {

        const pdfDoc = new jsPDF("l", "pt", [1080, 1080]);
        pdfDoc.lineHeightProportion = 2;
        // doc.viewerPreferences({ 'FitWindow': true }, true);

        document.querySelector("#btExportPDF").remove();
        document.querySelector(".About-social").remove();

        const html = document.querySelector("#app > div > div");
        
        pdfDoc.html(html, {
            callback: function (pdf) {
                pdf.save("Nahuel_Caceres.pdf");

                window.location.reload();
            },
            margin: [25,25,25,25]
        })

    }

    //if data.length no tiene nada, mostrar cargando..caso contrario
    //si hacer el return de toda nuestra estructura
    return data.length === 0 ? <h1>Cargando...</h1> : (
        <Main id="main">
            <GlobalStyle />
            <Sidebar>
                <ThemeProvider theme={{ color: "#0e76a8" }}>
                    <ButtonGeneratePDF id="btExportPDF" className="fa fa-file-pdf-o" onClick={() => generatePDF()} />
                </ThemeProvider>

                <About
                    avatar={data.avatar}
                    name={data.name}
                    profession={data.profession}
                    bio={data.bio}
                    address={data.address}
                    social={data.social}
                />
            </Sidebar>

            <Info>
                <Experience
                    data={data.experience}
                />
                {/* <Education 
                    data={data.education}
                /> */}
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