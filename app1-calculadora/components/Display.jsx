import { Text, StyleSheet, View } from "react-native";

export default function Display({ text }) {
  return (
    <View style={styles.display}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    width: '90%',
    height: 100
  },
  text: {
    fontSize: 28,
    textAlign: 'right',
    fontStyle: 'italic',

  },
});
