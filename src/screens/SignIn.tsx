import { useState } from 'react';

import { VStack, Heading, Icon, useTheme, View } from 'native-base';

import Logo from '../assets/logo_primary.svg';
import { Envelope, Key } from 'phosphor-react-native';

import Input from '../components/Input';
import { Button } from '../components/Button';

export function SignIn() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = useTheme();
  return (
    <VStack flex={1} alignItems="center" bg={'gray.600'} px={8} pt={24}>
      <Heading textAlign="center" mt={6} mb={20}>
        <Logo />
      </Heading>
      <View h={32} justifyContent="space-between">
        <Input
          placeholder="E-mail"
          InputLeftElement={
            <Icon ml={4} as={<Envelope color={colors.gray[300]} />} />
          }
        />
        <Input
          placeholder="Password"
          secureTextEntry
          InputLeftElement={
            <Icon ml={4} as={<Key color={colors.gray[300]} />} />
          }
        />
      </View>
      <Button title="Sign In" w="98%" mt={8} />
    </VStack>
  );
}
