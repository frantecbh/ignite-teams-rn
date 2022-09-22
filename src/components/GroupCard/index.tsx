import { TouchableProps } from "react-native-svg";
import { Container, Icon, Title } from "./styles";

interface Props extends TouchableProps{
  title: string
}

export function GroupCard({title, ...rest}: Props) {
  return (
    <Container {...rest}>
        <Icon />
        <Title>
          {title}
        </Title>
    </Container>
  );
}