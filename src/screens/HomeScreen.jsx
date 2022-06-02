import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Settings");
  };
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}
