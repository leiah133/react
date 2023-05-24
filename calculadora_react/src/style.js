import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    height:100vh;
    background-color: #808080;
    display: flex;
    align-items: center;
    justify-content: center; 
    `
    export const Content = styled.div`
    background-color: #01579b;
    width:20rem;
    min-height:400px;
    border-radius:15px;

    `
    export const Row = styled.div`
    display: flex;
    margin:8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap:7px
    `
    export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap:10px;
    `