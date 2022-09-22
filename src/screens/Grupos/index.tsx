import { useState } from 'react';
import { FlatList } from 'react-native';

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';


import { Container,  } from './styles';

export function Grupos() {

  const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Amigos'])
 

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com sua turma'/>

    <FlatList 
    data={groups}
    keyExtractor={item => item}
    renderItem={({item}) => (
        <GroupCard title={item} />
    )}
    
    />
      
    </Container>



  );
}


