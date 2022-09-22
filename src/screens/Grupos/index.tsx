

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import { Container,  } from './styles';

export function Grupos() {

  function handleTurma(){
    console.log("clicou")
  }

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com sua turma'/>
      <GroupCard title='Galera do Ignite' onPress={handleTurma}/>
    </Container>



  );
}


