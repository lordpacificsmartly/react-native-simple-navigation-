import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";

interface UserInfoInterface {
    navigation: any
    userName: string, 
    email: string,
    password: string,
    phone: string
  }

function UserInputsScreen(props: UserInfoInterface) {

  // set useState for the different user data
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhone, setUserPhone] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden = {false} backgroundColor = "#f0f8ff" translucent = {true} />
      <Text
        style={{
          fontSize: 25,
          marginBottom: 10,
          fontWeight: "bold",
          color: "mediumseagreen",
        }}
      >
        User Details
      </Text>
      <TextInput
        value={userName}
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUserName(text)}
      />
      <TextInput
        value={userEmail}
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => setUserEmail(text)}
      />
      <TextInput
        value={userPassword}
        style={styles.input}
        placeholder="Password"
        keyboardType="phone-pad"
        onChangeText={(text) => setUserPassword(text)}
      />
      <TextInput
        value={userPhone}
        style={styles.input}
        placeholder="Phone"
        keyboardType="numeric"
        onChangeText={(text) => setUserPhone(text)}
      />
      <Pressable
        onPress={() => {
          props.navigation.navigate("UserDetailsScreen", {
            userName,
            userEmail,
            userPassword,
            userPhone,
          })
          setUserName("")
          setUserEmail("")
          setUserPassword("")
          setUserPhone("");
        }}
      >
        <Text style={styles.button}>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    margin: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    paddingTop: 100,
  },
  button: {
    color: "white",
    backgroundColor: "mediumseagreen",
    padding: 14,
    margin: 10,
    width: 300,
    borderRadius: 20,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
export default UserInputsScreen;

{
  /* <Button
title="Submit"
onPress={() =>
  props.navigation.navigate("UserDetailsScreen", {
    userName,
    userEmail,
    userPassword,
    userPhone,
  })
}
/> */
}
