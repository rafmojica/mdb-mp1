import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FinishButton = ({
  selectedMemberId,
  imposterIndex,
  wordSet,
  navigation,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        selectedMemberId &&
        navigation.navigate("Result", {
          selectedMemberId,
          imposterIndex,
          wordSet,
          result: selectedMemberId === imposterIndex + 1,
        })
      }
    >
      <Text style={styles.buttonText}>Finish Game</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FinishButton;
