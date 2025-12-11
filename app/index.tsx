import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text
      style={{ color: "white", 
        fontSize: 24, 
        fontWeight: "bold",
        }}
      >Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
