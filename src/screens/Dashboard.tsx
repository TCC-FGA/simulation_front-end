import React, { memo } from 'react';

import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';

import { useAuth } from '../hooks/useAuth';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  const { user, signOut } = useAuth();

  return (
    <Background>
      <Logo />
      <Header>Parabéns você está no E-aluguel</Header>
      <Paragraph>
        {user
          ? `Bem-vindo, ${user.name}! Seu incrível aplicativo de aluguel de imóveis está aqui.`
          : 'Seu incrível aplicativo de aluguel de imóveis está aqui.'}
      </Paragraph>
      <Button mode="outlined" onPress={signOut}>
        Sair
      </Button>
    </Background>
  );
};

export default memo(Dashboard);
