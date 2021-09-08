import React from "react";
import styled from "styled-components/native";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Menuitem = props => (
<Container>
    <IconView>
        <Ionicons name= {props.icon} size= {24} color = "blue" />
    </IconView>
    <Content>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
    </Content>

</Container>
)

export default Menuitem

const Container = styled.View`
flex-direction: row;
margin: 15px 0;

`;
const IconView = styled.View`
width: 32px;
height: 32px;
justify-content: center;
align-items: center;

`;

const Content = styled.View`
padding-left:20px;
`;

const Title = styled.Text`
color: orchid;
font-size: 24px;
font-weight: 600;
`;

const Text = styled.Text`
color: orchid;
font-weight: 600;
opacity: 0.6;
margin-top: 5px;
`;
