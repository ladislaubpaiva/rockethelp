import {
  Heading,
  HStack,
  IconButton,
  StyledProps,
  useTheme,
} from 'native-base';

import { useNavigation } from '@react-navigation/native';

import { CaretLeft } from 'phosphor-react-native';

type Props = StyledProps & {
  title: string;
};

export function Header({ title, ...props }: Props) {
  const { colors } = useTheme();

  const navigation = useNavigation();

  function handleNewOrder() {
    navigation.goBack();
  }

  return (
    <HStack
      w="full"
      justifyContent="center"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={12}
    >
      <IconButton
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
        onPress={handleNewOrder}
      />
      <Heading
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        flex={1}
        ml={-6}
      >
        {title}
      </Heading>
    </HStack>
  );
}
