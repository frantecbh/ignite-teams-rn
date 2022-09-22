import { BackButton, BackIcon, Container, Logo } from "./styles";



import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean
}


export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {/* <CaretLeft color="#fff" size={32} /> */}

      {
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }


      <Logo source={logoImg} />
    </Container>
  );
}