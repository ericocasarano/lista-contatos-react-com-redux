import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

export const Form = styled.form`
  width: 100%;
  font-size: 14px;
`
export const Campo = styled.input`
  border-radius: 8px;
  background-color: #fff;
  border-color: #666666;
  padding: 16px 12px;
  width: 100%;
  margin-bottom: 22px;
`
export const BotaoSalvarNovoContato = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.verde};
  border-radius: 8px;
  margin-right: 8px;
  width: 100%;
`
export const LinkVoltarPaginaInicial = styled(Link)`
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
