import { Input as NBInput, IInputProps } from 'native-base';

const Input = ({ ...rest }: IInputProps) => {
  return (
    <NBInput
      width="98%"
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{ borderWidth: 1, borderColor: 'green.700', bg: 'gray.700' }}
      {...rest}
    />
  );
};

export default Input;
