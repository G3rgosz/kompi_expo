
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Componenta from './components/componenta';
import Componentb from './components/componentb';
import Componentc from './components/componentc';

export default function App() {
  const [selected, setSelected] = useState();

  function setTab(tab){
    setSelected(tab);
  }
  function selectTab(){
    switch(selected){
      case 'A': return <Componenta/>
      case 'B': return <Componentb/>
      case 'C': return <Componentc/>
    }
  }

  return (
    <View style={styles.container}>
      
      <Text>Főoldal</Text>

      <View style={styles.component}>
        {selectTab()}
      </View>
      <View style={styles.buttons} >
        <Button title='A' onPress={ () => setTab('A')}/>
        <Button title='B' onPress={ () => setTab('B')}/>
        <Button title='C' onPress={ () => setTab('C')}/>
      </View>

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
  buttons: {
    flexDirection: 'row'
  },
  component: {
    flex: 1,
  }
});
