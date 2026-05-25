import { TouchableHighlight, Text, StyleSheet } from 'react-native';

interface TeclaProps {
  label: string;
  onPress: () => void;
}

export default function Tecla({ label, onPress }: TeclaProps) {
// aqui defino teclas para um estilo diferente
  const teclasOperacao = ['/', '*', '-', '+'];
  const isOperacao = teclasOperacao.includes(label);
  const isIgual = label === '=';

  return (
    
    <TouchableHighlight
      style={[
        styles.tecla,
        isOperacao && styles.teclaOperacao,
        isIgual && styles.teclaIgual
      ]}
      onPress={onPress}
      underlayColor="#bdbdbd"
    >
      <Text
        style={[
          styles.text,
          (isOperacao || isIgual) && styles.textOperacao
        ]}
      >
        {label}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  tecla: {
    backgroundColor: '#d0d0d0',
    margin: 5,
    width: 80,
    height: 80,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  teclaOperacao: {
    backgroundColor: '#ffb366',
  },

  teclaIgual: {
    backgroundColor: '#ff6600',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },

  textOperacao: {
    color: '#fff',
  },
});