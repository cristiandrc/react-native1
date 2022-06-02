import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Button } from "react-native";

export default function SettingScreen({ navigation }) {
  const goToPage = (pageName) => navigation.navigate(pageName);

  return (
    <SafeAreaView>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Button title="Ir al Home" onPress={() => goToPage("Home")} />
    </SafeAreaView>
  );
}
