import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { wordSets } from "../data/wordSets.ts";
import { members } from "../data/members.ts";
import MemberCard from "../components/MemberCard.jsx";
import FinishButton from "../components/FinishButton.jsx";

const GameScreen = ({ navigation }) => {
  const [selectedMemberId, setSelectedMemberId] = useState();
  const [wordSet, setWordSet] = useState({});
  const [imposterIndex, setImposterIndex] = useState();

  // randomly select indexes
  // Math.floor(Math.random() * range);

  const wordSetLength = wordSets.length;

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * wordSetLength); // get random index on mount
    setWordSet(wordSets[randomIndex]); // get word set and store it
    setSelectedMemberId(0); // reset selected member id
    setImposterIndex(wordSets[randomIndex].imposterIndex); // grabbing the imposter index
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={members}
        numColumns={3}
        keyExtractor={(member) => member.id.toString()}
        style={{ maxWidth: 420 }}
        renderItem={({ item, index }) => (
          <MemberCard
            image={item.image}
            name={item.name}
            word={wordSet.words?.[index]} // sometimes undefined, so ?.[index]
            isSelected={selectedMemberId === item.id}
            onPress={() => setSelectedMemberId(item.id)}
          />
        )}
      />
      <FinishButton
        selectedMemberId={selectedMemberId}
        imposterIndex={imposterIndex}
        wordSet={wordSet}
        navigation={navigation}
      />
    </View>
  );
};

export default GameScreen;
