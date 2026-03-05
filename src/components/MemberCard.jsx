import React from "react";
import { Text, Image, TouchableOpacity, StyleSheet, View } from "react-native";

const MemberCard = ({ image, name, word, isSelected, onPress }) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={[styles.card, isSelected && styles.selected]}
        onPress={onPress}
      >
        <Image source={image} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.word}>{word}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 6,
  },
  card: {
    width: 120,
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "#a7b6cc",
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
