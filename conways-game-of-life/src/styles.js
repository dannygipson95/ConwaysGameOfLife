import styled from 'styled-components'

export const SideBySide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    margin: 0 5%;
`
export const GameBox = styled.div`
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    height: 300px;
    width: 300px;
`

export const CellBox = styled.div`
    background: gainsboro;
    height: 0;
    padding: 4px;
    border: 1px solid black;
    margin: 0;
`

export const Title = styled.header`
    font-family: Georgia, 'Times New Roman', Times, serif;
    width: 90%;
    margin: 0 5%;
`