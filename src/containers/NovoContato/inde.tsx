import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container } from '../../styles'
import { Titulo } from '../ListaContatos/styles'
import { cadastrar } from '../../store/reducers/contatos'

import {
  BotaoSalvarNovoContato,
  Campo,
  Form,
  LinkVoltarPaginaInicial
} from './styles'

const NovoContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(cadastrar({ nome, email, telefone }))
    navigate('/')
  }

  return (
    <Container>
      <Titulo>Novo Contato</Titulo>
      <LinkVoltarPaginaInicial to={'/'}>
        Voltar para Lista de Contatos
      </LinkVoltarPaginaInicial>
      <Form onSubmit={cadastrarContato}>
        <label>Nome Completo</label>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        ></Campo>
        <label>E-mail</label>
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        ></Campo>
        <label>Telefone</label>
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        ></Campo>
        <BotaoSalvarNovoContato type="submit">Cadastrar</BotaoSalvarNovoContato>
      </Form>
    </Container>
  )
}

export default NovoContato
