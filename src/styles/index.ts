import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style:none;
    font-family: "Kanit", sans-serif;

  }
`
export const Container = styled.div`
  max-width: 840px;
  width: 100%;
  margin: 0 auto;
`

export default EstiloGlobal
