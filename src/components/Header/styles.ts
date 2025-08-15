import theme from "../../theme/";
import { CaretLeftIcon } from "phosphor-react-native";
import { css } from "styled-components/native";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    width: 100%;
    height:70px;
    flex-direction: row;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.DARK_BLUE};
    padding-top:10px;
`;

export const ScreenName = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.MEDIUM};
        color: ${theme.COLORS.WHITE};
    `}
    font-size: 24px;
    margin: auto;
`;

export const BackButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.55
})`
    position: absolute;
    margin-left: 20px;
`;

export const BackIcon = styled(CaretLeftIcon).attrs({
    size: 30,
    color: theme.COLORS.WHITE
})``;