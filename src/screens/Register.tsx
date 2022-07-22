import { VStack } from 'native-base';

import { Header } from '../components/Header';
import Input from '../components/Input';
import { Button } from '../components/Button';

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="New Request" />
      <Input placeholder="Patrimony Number" mt={4} multiline />
      <Input
        placeholder="Problem Description"
        flex={1}
        my={5}
        multiline
        textAlignVertical="top"
      />
      <Button title="Request" />
    </VStack>
  );
}
