import React from "react";
import { View, Text, Button } from "react-native";
import { auth } from "../../constants/firebaseConfig";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    router.replace("/login");
  };

  return (
    <View>
      <Text>Profile</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
