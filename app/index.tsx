import User from "../components/user/User";
import { Stack } from "expo-router";

const App = () => (
  <>
    <Stack.Screen options={{ headerShown: false }} />
    <User />
  </>
);

export default App;
