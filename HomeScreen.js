import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import Course from "../components/Course";
import Menu from "../components/Menu";
import Logo from "../components/Logo";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Menu />
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <TitleBar>
              <Avatar source={require("../assets/favicon.png")} />
              <Title>Welcome back,</Title>
              <Name>Angel</Name>

              
              <Ionicons
                name="ios-notifications"
                size={28}
                color="#4775f2"
                style={{ position: "absolute", right: 20, top: 5 }}
              />
            </TitleBar>

            <ScrollView
              style={{ flexDirection: "row", padding: 20, paddingLeft: 12 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >

              {logos.map((logo, index) => (
                <Logo
                key={index}
                image={logo.image}
                text={logo.text}

                />

              ))

              }

            </ScrollView>
            <Subtitle>Select Broker</Subtitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  image={card.image}
                  caption={card.caption}
                  logo={card.logo}
                  subtitle={card.subtitle}
                />
              ))}
            </ScrollView>
            <Subtitle>Popular courses</Subtitle>
            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                name={course.name}
                caption={course.caption}
                avatar={course.avatar}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
// Agregar los colores del background

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
// Agregar los colores de las letras y el tamano necesario

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
// Agregar los colores de las letras y el tamano necesario

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    image: require("../assets/icon.png"),
    text: "Frame"
  },
  {
    image: require("../assets/icon.png"),
    text: "Frame-2"
  },
  {
    image: require("../assets/icon.png"),
    text: "Frame-3"
  },
  {
    image: require("../assets/icon.png"),
    text: "Frame-4"
  },
  {
    image: require("../assets/icon.png"),
    text: "Frame-5"
  },
  {
    image: require("../assets/icon.png"),
    text: "Frame-6"
  }
];

const cards = [
  {
    title: "styled component",
    image: require("../assets/favicon.png"),
    caption: "Welcome to Ridian",
    logo: require("../assets/favicon.png"),
    subtitle: "Hello"
  },
  {
    title: "styled compon",
    image: require("../assets/favicon.png"),
    caption: "Welcoo Ridian",
    logo: require("../assets/favicon.png"),
    subtitle: "Hello"
  },
  {
    title: "styled component",
    image: require("../assets/favicon.png"),
    caption: "Welcome to Ridian",
    logo: require("../assets/favicon.png"),
    subtitle: "Hello"
  },
  {
    title: "styled component",
    image: require("../assets/favicon.png"),
    caption: "Welcome to Ridian",
    logo: require("../assets/favicon.png"),
    subtitle: "Hello"
  }
];

const courses = [
  {
    title: "Course",
    subtitle: "Course Title",
    name: "Angel",
    caption: "Course Title",
    image: require("../assets/favicon.png"),
    logo: require("../assets/favicon.png"),
    avatar: require("../assets/favicon.png")
  },
  {
    title: "Course-2",
    subtitle: "Course Title",
    name: "Course Title",
    caption: "Course Title",
    image: require("../assets/icon.png"),
    logo: require("../assets/icon.png"),
    avatar: require("../assets/icon.png")
  },
  {
    title: "Course-3",
    subtitle: "Course Title",
    name: "Course Title",
    caption: "Course Title",
    image: require("../assets/icon.png"),
    logo: require("../assets/icon.png"),
    avatar: require("../assets/icon.png")
  },
  {
    title: "Course",
    subtitle: "Course Title",
    name: "Course Title",
    caption: "Course Title",
    image: require("../assets/icon.png"),
    logo: require("../assets/icon.png"),
    avatar: require("../assets/icon.png")
  }
];
