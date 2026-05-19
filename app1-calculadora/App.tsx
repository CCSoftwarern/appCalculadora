import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight  } from 'react-native';
import Display from './components/Display';
import Tecla from './components/Tecla';
import { useState } from 'react';

export default function App() {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');

  const addParaExpressao = (exp: string) => {
    setExpressao(exp);
  };
  const limparExpressao = () => {
    setExpressao('');
    setResultado('');
  };
  const deletarUltimo = () => {
    setExpressao(expressao.slice(0, -1));
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <Display text={expressao}></Display>
      <Display text={resultado}></Display>
      <View style={styles.GrupoTeclas}>
        <Tecla label="C" onPress={limparExpressao}></Tecla>
        <Tecla label="DEL" onPress={deletarUltimo}></Tecla>
        <Tecla label="=" onPress={() => setResultado(eval(expressao))}></Tecla>
    <Tecla label='+' onPress={() => addParaExpressao("+")}></Tecla>
      </View>
      <View style={styles.GrupoTeclas}>
        <Tecla label="4" onPress={() => addParaExpressao("4")}></Tecla>
          <Tecla label="5" onPress={() => addParaExpressao("5")}></Tecla>
          <Tecla label="6" onPress={() => addParaExpressao("6")}></Tecla>
          <Tecla label="-" onPress={() => addParaExpressao("-")}></Tecla>
      </View>
      <View style={styles.GrupoTeclas}>
          <Tecla label="7" onPress={() => addParaExpressao("7")}></Tecla>
          <Tecla label="8" onPress={() => addParaExpressao("8")}></Tecla>
          <Tecla label="9" onPress={() => addParaExpressao("9")}></Tecla>
          <Tecla label="/" onPress={() => addParaExpressao("/")}></Tecla>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  GrupoTeclas:{
    flexDirection: 'row',

  }
});
