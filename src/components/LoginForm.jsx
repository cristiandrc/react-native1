import React from "react";
import { TextInput, Button, Text, View } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="name" />
      <Button title="Enviar" onPress={() => console.log("envirar")} />
    </View>
  );
}
