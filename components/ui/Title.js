import { StyleSheet, Text, Platform } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderColor: Colors.accent500,
    borderWidth: Platform.select({ ios: 1, android: 0 }),
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
