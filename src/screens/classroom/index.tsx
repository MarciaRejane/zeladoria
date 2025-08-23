import React from "react";
import { Container} from "./styles";
import { Header } from "../../components/Header";
import theme from "@theme/index";

export  function Classroom() {
    return(
        <Container>
            <Header 
             title="Classroom"
             backButton={true} 
             />
            
        </Container>
    );
}