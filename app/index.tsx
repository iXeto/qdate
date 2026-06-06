import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QDate</Text>
      <Pressable accessibilityRole="button" onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Placeholder Button</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    backgroundColor: '#fff7f8',
    padding: 24,
  },
  title: {
    color: '#201316',
    fontSize: 28,
    fontWeight: '700',
  },
  button: {
    minWidth: 220,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#e84164',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
