import { View, Text } from "react-native";
import React from "react";

export default function Saludar({ firstName, lastName }) {
  return (
    <View>
      <Text>
        Saludar {firstName} {lastName}
      </Text>
    </View>
  );
}

//Props por defecto
Saludar.defaultProps = {
  firstName: "pepe",
  lastName: "hola",
};
