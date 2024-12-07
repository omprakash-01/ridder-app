import { Stack } from "expo-router";

export default function AuthRoot() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="register"/>
      <Stack.Screen name="forgetpassword"/>
      <Stack.Screen name="newpassword"/>
      <Stack.Screen name="otpverification"/>
      <Stack.Screen name="passwordchanged"/>

    </Stack>
  );
}
