import styled from "styled-components"

export const Layout = styled.div`
    padding: 1rem;
    width: 100%;
    maw-width: 800px;
`
export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction:${props => props.column ? "column" : "row"};
    ${props => props.margin ? `margin: ${props.margin};` : ''}
`

export const LogoContainer = styled.div`
    max-width: 400px;
`

export const Logo = styled.img`
    width: 100%;
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 330px;
    maw-width: 100%;

    margin: auto;
`

export const DonationForm = styled.form`
    width: 100px;

    margin: 20px;

    display: flex;
    align-items: center;
`