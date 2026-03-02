import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import wordSets from "../data/wordSets";

const GameScreen = ({ navigation }) => {
  const [selectedMemberId, setSelectedMemberId] = useState();
  const [wordSet, setWordSet] = useState({});
  const [imposterIndex, setImposterIndex] = useState();

  // randomly select indexes
  // Math.floor(Math.random() * range);

  const wordSetLength = wordSets.length();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * wordSetLength); // get random index on mount
    setWordSet(wordSets[randomIndex]); // get word set and store it
    setSelectedMemberId(0); // reset selected member id
  }, [])

  return (
    <View>
      <Text>Game Screen</Text>
    </View>
  );
};

export default GameScreen;
