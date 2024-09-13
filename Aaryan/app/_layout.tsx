import { Stack } from "expo-router";
import { Provider } from "react-native-paper";
import {theme} from "../theme/CreateTheme"
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {

  return (
    <SafeAreaProvider>

    <Provider theme={theme}>
      <View style={{flex:1,backgroundColor:"red"}}>

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      </Stack>
      </View>
    </Provider>
    </SafeAreaProvider>
  );
}
