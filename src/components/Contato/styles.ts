import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const BlocoContato = styled.div`
  padding: 16px;
  margin-bottom: 18px;
  border-radius: 16px;
`
export const NomeContato = styled.input`
  font-size: 22px;
  font-weight: bold;
  display: block;
  width: 100%;
  resize: none;
  border: none;
`
export const EmailETelefoneContato = styled(NomeContato)`
  font-size: 12px;
  font-weight: normal;
`
export const BotaoSalvar = styled.button`
  font-weight: bold;
  font-size: 10px;
  color: #fff;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.verde};
  border-radius: 4px;
  margin-right: 8px;
  margin-top: 12px;
`
export const BotaoEditar = styled(BotaoSalvar)`
  background-color: ${variaveis.azul};
`
export const BotaoCancelarRemover = styled(BotaoSalvar)`
  background-color: ${variaveis.vermelho};
`
