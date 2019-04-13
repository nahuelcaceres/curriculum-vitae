import React from 'react';
import styled from 'styled-components';

//Nos va a llegar una prop y luego la vamos a 
//pushearlo formateado a la vista

const StyledH3 = styled.h3`
    color: #212121;
    font-weight: 400;
    margin: .5em 0;
`;

//Como voy a rendear un elemento dentro, se pasa children
const H3Styled = ({ children }) => <StyledH3>{children}</StyledH3>;

export default H3Styled;