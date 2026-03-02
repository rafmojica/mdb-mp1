import { Button, Text } from "@react-navigation/elements";
import { View } from "react-native";

const StartScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 32,
          marginBottom: 32,
        }}
      >
        Welcome to MDB Newbie Imposter Game!
      </Text>
      <Button title="Game" onPress={() => navigation.navigate("Game")}>Start</Button>
    </View>
  );
};

export default StartScreen;
