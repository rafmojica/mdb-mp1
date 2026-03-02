import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const GameScreen = ({ navigation }) => {
  const [selectedMemberId, setSelectedMemberId] = useState();
  const [wordSet, setWordSet] = useState([]);
  const [imposterIndex, setImposterIndex] = useState();

  // randomly select indexes
  // Math.random(Math.floor(index))

  useEffect(() => {

  }, [])
  
  return (
    <View>
      <Text>Game Screen</Text>
    </View>
  );
};

export default GameScreen;
