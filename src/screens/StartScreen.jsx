import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MDB Newbie Imposter Game!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 32,
    textAlign: "center",
    fontWeight: 600,
  },
  button: {
    marginTop: 24,
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default StartScreen;
