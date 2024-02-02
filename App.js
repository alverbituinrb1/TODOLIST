import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import { getFirestore } from "@react-native-firebase/firestore";
import AddTodoScreen from "./screens/AddToDoScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";





const firebaseConfig = {
  // Your config object here
};

const Stack = createStackNavigator();

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., 3 seconds) to show the splash screen
    const splashTimer = setTimeout(() => {
      // Hide the splash screen
      setSplashVisible(false);
    }, 3000); // Adjust the delay as needed

    // Clear the timer when the component is unmounted
    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isSplashVisible ? "Splash" : "Login"}>
        {isSplashVisible && (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Sign In",
            headerShown: !isSplashVisible, // Hide the header while splash screen is visible
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          leftButton={null}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Create Account"
          component={SignupScreen}
          options={{
            title: "Signup",
            headerShown: !isSplashVisible, // Hide the header while splash screen is visible
          }}
        />
        <Stack.Screen
          name="Add List"
          component={AddTodoScreen}
          options={{
            title: "Add List",
            headerShown: !isSplashVisible, // Hide the header while splash screen is visible
          }}
        />
        <Stack.Screen
          name="Forgot Password"
          component={ForgotPasswordScreen}
          options={{
            title: "Forgot Password",
            headerShown: !isSplashVisible, // Hide the header while splash screen is visible
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
