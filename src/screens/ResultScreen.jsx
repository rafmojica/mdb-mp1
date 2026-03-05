import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { members } from "../data/members.ts";

const ResultScreen = ({ navigation, route }) => {
  const { selectedMemberId, wordSet, result } = route.params;
  const imposterMember = members[wordSet.imposterIndex];
  const oddWord = wordSet.words[wordSet.imposterIndex];

  return (
    <View style={styles.container}>
      {result ? (
        <Text style={[styles.verdict, styles.correct]}>Correct!</Text>
      ) : (
        <Text style={[styles.verdict, styles.incorrect]}>Incorrect!</Text>
      )}
      <Text style={styles.info}>Real Imposter: {imposterMember?.name}</Text>
      <Text style={styles.info}>Odd word out: {oddWord}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.homeButton]}
        onPress={() => navigation.navigate("Start")}
      >
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  verdict: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 8,
  },
  correct: {
    color: "green",
  },
  incorrect: {
    color: "red",
  },
  info: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 4,
  },
  button: {
    marginTop: 24,
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  homeButton: {
    backgroundColor: "#757575",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResultScreen;
