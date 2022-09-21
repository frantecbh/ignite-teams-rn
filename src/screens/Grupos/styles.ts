import theme from "src/theme";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.RED_DARK}
  
  

`

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
`