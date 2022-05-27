import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),URL(${(props) => props.backgroundImg});
    border-radius: 10px;
    height: 120px;
    margin-top: 20px;
    justify-content: space-between;
    padding: 20px;
    cursor: pointer;

    h1{
        color: white;
        display: flex;
        margin-left: 20px;
        align-items: center;
    }
`;