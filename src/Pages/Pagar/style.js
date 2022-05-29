import styled from "styled-components";

export const Container = styled.div`
    background-image: URL(${(props) => props.backgroundImg});
    min-height: 100vh;
    overflow: hidden;
    background-size: cover;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-bottom: 15px;
`;

export const Grid = styled.div`
    background-image: URL(${(props) => props.backgroundImg});
    overflow: scroll;
    min-height: 100vh;
    background-size: cover;
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas: 
        'TB TB'
        'CS CS'
    ;
    height: 100vh;
`;