import { Link } from "expo-router";
import { Text, View } from "react-native";
import SignIn from "../../sign-in";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-gray-700 text-3xl font-bold">Welcome to UrbanKeys</Text>
      <Link href=".././sign-in">SignIn</Link>
      <Link href="./Explore">Explore</Link>
      <Link href="./Profile">Profile</Link>
      <Link href="./properties/1">Property</Link>
    </View>
  );
}
