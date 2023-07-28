import igniteLogo from '../../assets/logo-ignite.svg'
import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={igniteLogo} alt="" />

        <button>Nova transação</button>
      </HeaderContent>
    </HeaderContainer>
  )
}
