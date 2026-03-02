import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { wordSets } from "../data/wordSets.ts";
import { members } from "../data/members.ts";
import MemberCard from '../components/MemberCard.jsx'

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
  }, [])

  return (
    <View>
      <FlatList
        data={members}
        numColumns={3}
        keyExtractor={(member) => member.id.toString()}
        renderItem={({ item, index }) => (
          <MemberCard
            image={item.image}
            name={item.name}
            word={wordSet.words?.[index]}
            isSelected={selectedMemberId === item.id}
            onPress={() => setSelectedMemberId(item.id)}
          />
        )}
      />
    </View>
  );
};

export default GameScreen;
