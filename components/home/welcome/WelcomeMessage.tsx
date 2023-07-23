import { Text, View } from "react-native"
import { useState, useEffect } from "react"
import { getUser } from "../../../utils/user"
import styles from "./welcome.style"

const WelcomeMessage = () => {
  const [name, setName] = useState("")

  useEffect(() => {
    getUser().then((username) => setName(username))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Welcome {name}</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>
    </View>
  )
}

export default WelcomeMessage
