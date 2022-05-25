import styled from "styled-components";

export const Container = styled.div`
    background-image: URL(${(props) => props.backgroundImg});
    min-height: 100vh;
    overflow: hidden;
    background-size: cover;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-bottom: 15px;
`;