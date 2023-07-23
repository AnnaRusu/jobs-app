import { ImageBackground, Text, TextInput, View } from "react-native"
import { setUser } from "../../utils/user"
import { useRouter } from "expo-router"
import { images } from "../../constants"
import styles from "./user.style"

const User = () => {
  const router = useRouter()

  const handleSubmitEditing = (event: any) => {
    setUser(event.nativeEvent.text)
    router.push("/home")
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        blurRadius={2}
        source={images.background}
        resizeMode="stretch"
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.message}>Welcome</Text>
            <TextInput
              style={styles.input}
              placeholder="What's your name?"
              onSubmitEditing={handleSubmitEditing}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default User
