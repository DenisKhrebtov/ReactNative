import { Text, View, Image } from "react-native";

import { styles } from "./PostsScreen.styled";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View>
          <Image
            source={require("../../../assets/img/avatar.png")}
            style={styles.avatar}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>Denis Dmitrovich</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};
