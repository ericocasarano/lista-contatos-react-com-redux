import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Titulo = styled.h1`
  display: block;
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: bold;
  font-weight: bold;
  text-align: center;
`
export const LinkCadastrarContato = styled(Link)`
  background-color: #0a0a0a;
  padding: 10px 10px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
  text-align: center;
`
