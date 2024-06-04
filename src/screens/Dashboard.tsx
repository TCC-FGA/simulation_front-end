import React, { memo } from 'react';

import Button from '../components/Button';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <>
    <Logo />
    <Header>Parabéns você está no E-aluguel</Header>
    <Paragraph>Seu incrível aplicativo de aluguel de imóveis está aqui.</Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </>
);

export default memo(Dashboard);
