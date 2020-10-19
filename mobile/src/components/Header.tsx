import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

import { Container, HeaderTitle } from './styles';

function Header({ title, showCancel = true }: HeaderProps) {
  const navigation = useNavigation();

  function HandleGoBackHome() {
    navigation.navigate('OrphanageMap');
  }

  return (
    <Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      <HeaderTitle>{title}</HeaderTitle>
      {showCancel ? (
        <BorderlessButton onPress={HandleGoBackHome}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </Container>
  );
}

export default Header;
