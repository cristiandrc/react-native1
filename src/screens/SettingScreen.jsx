import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";

export default function SettingScreen({ navigation }) {
  const goToPage = (pageName) => navigation.navigate(pageName);

  return (
    <View>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Button title="Ir al Home" onPress={() => goToPage("Home")} />
    </View>
  );
}
