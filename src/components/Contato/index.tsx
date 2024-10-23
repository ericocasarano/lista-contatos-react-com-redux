import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ContatoClass from '../../models/Contato'
import { useEffect } from 'react'

import {
  BlocoContato,
  BotaoCancelarRemover,
  BotaoEditar,
  BotaoSalvar,
  EmailETelefoneContato,
  NomeContato
} from './styles'
import { editar, remover } from '../../store/reducers/contatos'

type Props = ContatoClass

const Contato = ({ nome, telefone, email, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditandoContato, setEstaEditandoContato] = useState(false)
  const [nomeEditando, setNomeEditando] = useState(nome)
  const [emailEditando, setEmailEditando] = useState(email)
  const [telEditando, setTelEditando] = useState(telefone)

  useEffect(() => {
    setNomeEditando(nome)
    setEmailEditando(email)
    setTelEditando(telefone)
  }, [nome, email, telefone])

  function cancelaEdicaoContato() {
    setEstaEditandoContato(false)
    setNomeEditando(nome)
    setEmailEditando(email)
    setTelEditando(telefone)
  }

  return (
    <BlocoContato>
      <NomeContato
        disabled={!estaEditandoContato}
        onChange={(evento) => setNomeEditando(evento.target.value)}
        type="text"
        value={nomeEditando}
      />
      <EmailETelefoneContato
        disabled={!estaEditandoContato}
        onChange={(evento) => setEmailEditando(evento.target.value)}
        type="email"
        value={emailEditando}
      />
      <EmailETelefoneContato
        disabled={!estaEditandoContato}
        onChange={(evento) => setTelEditando(evento.target.value)}
        type="tel"
        value={telEditando}
      />
      <div>
        {estaEditandoContato ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome: nomeEditando,
                    telefone: telEditando,
                    email: emailEditando
                  })
                )
                setEstaEditandoContato(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelarRemover onClick={cancelaEdicaoContato}>
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <BotaoEditar onClick={() => setEstaEditandoContato(true)}>
              Editar
            </BotaoEditar>
            <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoCancelarRemover>
          </>
        )}
      </div>
    </BlocoContato>
  )
}

export default Contato
