import React from "react";
import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const MemberCard = ({ image, name, word, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selected]}
      onPress={onPress}
    >
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.word}>{word}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 4,
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "#8bd5c6",
  },
  selected: {
    borderColor: "#007AFF",
    backgroundColor: "#e0eeff",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
  },
  word: {
    fontSize: 11,
    color: "#555",
    marginTop: 2,
  },
});

export default MemberCard;
