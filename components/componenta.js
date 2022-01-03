
import { StyleSheet, Text, View } from 'react-native';

export default function Componenta() {
  return (
    <View style={styles.container}>
      <Text>A komponens</Text>
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
});
