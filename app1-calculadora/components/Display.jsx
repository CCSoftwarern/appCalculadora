import { Text, StyleSheet, View } from "react-native";

interface DisplayProps {
  text: string;
}

export default function Display({ text }: DisplayProps) {
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
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});
