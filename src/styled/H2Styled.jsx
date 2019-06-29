import React from 'react';
import styled from 'styled-components';

//Nos va a llegar una prop y luego la vamos a 
//pushearlo formateado a la vista

const StyledH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: .8px;
    margin: 1em 0 0 0;
    color: #3d18c2fc;
`;

//#C2185B   
const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>;

export default H2Styled;
