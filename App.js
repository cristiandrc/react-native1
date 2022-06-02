import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigaton/NavigationStack";
import NavigationTab from "./src/navigaton/NavigationTab";
import NavigationDrawer from "./src/navigaton/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
