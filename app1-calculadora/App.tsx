import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Display from './components/Display';
import Tecla from './components/Tecla';
import { useState } from 'react';

export default function App() {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');

  const addParaExpressao = (exp: string) => {
    setExpressao((prev) => prev + exp);
  };

  const limparExpressao = () => {
    setExpressao('');
    setResultado('');
  };

  const deletarUltimo = () => {
    setExpressao((prev) => prev.slice(0, -1));
    setResultado('');
  };

  const calcularResultado = () => {
    try {
      const valor = eval(expressao);
      setResultado(String(valor));
    } catch (error) {
      setResultado('Erro');
    }
  };

  return (
    <View style={styles.container}>
      <Display text={expressao} />
      <Display text={resultado} />

      <View style={styles.GrupoTeclas}>
        <Tecla label="AC" onPress={limparExpressao} />
      <Tecla label="(" onPress={() => addParaExpressao('(')} />
      <Tecla label=")" onPress={() => addParaExpressao(')')} />
      <Tecla label="/" onPress={() => addParaExpressao('/')} />
      </View>

      <View style={styles.GrupoTeclas}>
        <Tecla label="7" onPress={() => addParaExpressao('7')} />
        <Tecla label="8" onPress={() => addParaExpressao('8')} />
        <Tecla label="9" onPress={() => addParaExpressao('9')} />
        <Tecla label="*" onPress={() => addParaExpressao('*')} />
      </View>

      <View style={styles.GrupoTeclas}>
        <Tecla label="4" onPress={() => addParaExpressao('4')} />
        <Tecla label="5" onPress={() => addParaExpressao('5')} />
        <Tecla label="6" onPress={() => addParaExpressao('6')} />
        <Tecla label="-" onPress={() => addParaExpressao('-')} />
      </View>

      <View style={styles.GrupoTeclas}>
        <Tecla label="1" onPress={() => addParaExpressao('1')} />
        <Tecla label="2" onPress={() => addParaExpressao('2')} />
        <Tecla label="3" onPress={() => addParaExpressao('3')} />
        <Tecla label="+" onPress={() => addParaExpressao('+')} />
      </View>


      <View style={styles.GrupoTeclas}>
        <Tecla label="0" onPress={() => addParaExpressao('0')} />
        <Tecla label="." onPress={() => addParaExpressao('.')} />
        <Tecla label="<=" onPress={() => addParaExpressao('<=')} />
        <Tecla label="=" onPress={calcularResultado} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  GrupoTeclas: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});