import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contato from '../../components/Contato'
import { LinkCadastrarContato, Titulo } from './styles'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <>
      <div>
        <Titulo>Lista de Contatos</Titulo>
        <LinkCadastrarContato to="/novo">
          + Adicionar um Novo Contato
        </LinkCadastrarContato>
      </div>
      <ul>
        {itens.map((contato) => (
          <li key={contato.id}>
            <Contato
              id={contato.id}
              nome={contato.nome}
              email={contato.email}
              telefone={contato.telefone}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListaContatos
