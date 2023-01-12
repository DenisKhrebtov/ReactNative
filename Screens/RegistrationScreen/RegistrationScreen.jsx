import { useState } from "react";

import { useDispatch } from "react-redux";

import * as ImagePicker from "expo-image-picker";

import { authSignUpUser } from "../../assets/redux/auth/authOperations";

import { AntDesign } from "@expo/vector-icons";

import {
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";

import { styles } from "./RegistrationScreen.styled";

const initialState = {
  login: "",
  email: "",
  password: "",
  avatar: "",
};

export function RegistationScreen({ navigation }) {
  const [info, setInfo] = useState(initialState);
  const [showPassword, setShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const dispatch = useDispatch();

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    setIsFocused(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    if (!info.login || !info.email || !info.password) return;

    dispatch(authSignUpUser(info));

    setInfo(initialState);
  };

  const handleFocus = () => {
    setIsShowKeyboard(true);
    setIsFocused(true);
  };

  const addAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const photo = result.assets[0].uri;

      setInfo((prevState) => ({
        ...prevState,
        avatar: photo,
      }));
    }
  };

  const deleteAvatar = () => {
    setInfo((prevState) => ({
      ...prevState,
      avatar: "",
    }));
  };

  const onShowPassword = () => setShowPassword(!showPassword);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/img/PhotoBG.jpg")}
          style={styles.bgImage}
        >
          <View
            style={{
              ...styles.wrapper,
              ...Platform.select({
                ios: { paddingBottom: isShowKeyboard ? 375 : 78 },
                android: {
                  paddingBottom: isShowKeyboard ? 32 : 78,
                },
              }),
            }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View
                style={{
                  position: "absolute",
                  top: -150,
                  left: "35%",
                }}
              >
                {info.avatar ? (
                  <>
                    <Image
                      source={{ uri: info.avatar }}
                      style={styles.avatar}
                    />
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={deleteAvatar}
                    >
                      <AntDesign name="close" size={13} color="#E8E8E8" />
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    {/* <Image
                      source={require("../../assets/images/layout.png")}
                      style={styles.avatar}
                    /> */}
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={addAvatar}
                    >
                      <AntDesign
                        name="close"
                        size={13}
                        color="#FF6C00"
                        style={{ transform: [{ rotate: "45deg" }] }}
                      />
                    </TouchableOpacity>
                  </>
                )}
              </View>

              <Text style={{ ...styles.title }}>Registration</Text>

              <View style={{ marginBottom: isShowKeyboard ? 0 : 43 }}>
                <View style={styles.inputWrapp}>
                  <TextInput
                    placeholder="Login"
                    style={{
                      ...styles.input,
                      borderColor: isFocused ? "#FF6C00" : "#BDBDBD",
                    }}
                    value={info.login}
                    onFocus={handleFocus}
                    onChangeText={(value) =>
                      setInfo((prevState) => ({ ...prevState, login: value }))
                    }
                  />
                </View>
                <View style={styles.inputWrapp}>
                  <TextInput
                    placeholder="Email address"
                    style={{
                      ...styles.input,
                      borderColor: isFocused ? "#FF6C00" : "#BDBDBD",
                    }}
                    value={info.email}
                    onFocus={handleFocus}
                    onChangeText={(value) =>
                      setInfo((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View>
                  <TextInput
                    placeholder="Password"
                    secureTextEntry={showPassword}
                    value={info.password}
                    style={{
                      ...styles.input,
                      position: "relative",
                      borderColor: isFocused ? "#FF6C00" : "#BDBDBD",
                    }}
                    onFocus={handleFocus}
                    onChangeText={(value) =>
                      setInfo((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={onShowPassword}
                    style={styles.buttonShow}
                  >
                    <Text style={styles.buttonShowText}>
                      {showPassword ? "Show" : "Hide"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {!isShowKeyboard && (
                <>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={onSubmit}
                  >
                    <Text style={styles.buttonText}>Sing Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      navigation.navigate("Login");
                    }}
                  >
                    <Text style={styles.linkText}>
                      Do you already have an account? <Text>Sing In</Text>
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
