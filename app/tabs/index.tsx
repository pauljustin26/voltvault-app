import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { ThemedText } from "../../components/ThemedText";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        VoltVault Power Bank
      </ThemedText>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Rent Power Bank" 
          onPress={() => {
            // TODO: Implement rent functionality
          }} 
        />
        <Button 
          title="Return Power Bank" 
          onPress={() => {
            // TODO: Implement return functionality
          }} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
});
