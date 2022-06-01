import { View, Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";

export default function Saludar({ firstName, lastName }) {
  return (
    <View>
      <Text>
        Hi {firstName} {lastName}
      </Text>
    </View>
  );
}

//Props por defecto
// Saludar.defaultProps = {
//   firstName: "pepe",
//   lastName: "hola",
// };

//Props Type

Saludar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
};
