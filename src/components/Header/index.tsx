import { NavigationProp, useNavigation } from "@react-navigation/native";
import { BottomAppParamList} from "../../Routes/botton-app.routes";
import { HeaderContainer, BackButton, BackIcon, ScreenName } from "./styles";

type HeaderNavigationProps = NavigationProp<BottomAppParamList>;

type Props = {
    title: string;
    height?: number,
    backgroundColor?: string,
    backButton?: boolean;
    showFilters?: boolean;
    filter?: 'all'| 'clear' | 'pending';
    onFilterChange?: (value: 'all' | 'clear' | 'pending') => void; 
}

export function Header({
    title,
    height = 70, 
    backgroundColor = "#fff",
    showFilters = false,
    filter,
    onFilterChange,
    backButton = false


}: Props){
    const navigation = useNavigation<HeaderNavigationProps>();


    function handleGoBack() {

        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    }
    
    return(
        <HeaderContainer>
        {
            backButton && navigation.canGoBack() && (

                <BackButton onPress={handleGoBack}>
                <BackIcon/>
            </BackButton>
    )
        }

        <ScreenName>{title}</ScreenName>
    </HeaderContainer>
);
} 