import {TouchableHighlight, Text, StyleSheet} from 'react-native';

interface TeclaProps {
  label: string;
  onPress: () => void;
}
export default function Tecla({ label, onPress }: TeclaProps) {
    return (
        <TouchableHighlight style={styles.tecla} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    tecla: {
        backgroundColor: '#d0d0d0',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
    },
});