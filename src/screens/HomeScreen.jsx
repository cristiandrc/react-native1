import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Settings");
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>

      <Button title="Ir a settings" onPress={goToPage} />
    </View>
  );
}
