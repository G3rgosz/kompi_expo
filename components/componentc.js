
import { StyleSheet, Text, View } from 'react-native';

export default function Componentc() {
  return (
    <View style={styles.container}>
      <Text>C komponens</Text>
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
