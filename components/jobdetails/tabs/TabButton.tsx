import { Text, TouchableOpacity } from "react-native"
import { COLORS } from "../../../constants"
import styles from "./tabs.style"

const TabButton = ({ name, activeTab, onHandleSearchType }) => (
  <TouchableOpacity
    style={[
      styles.btn,
      activeTab === name
        ? { backgroundColor: COLORS.primary }
        : { backgroundColor: "#FFF" },
    ]}
    onPress={onHandleSearchType}
  >
    <Text
      style={[
        styles.btnText,
        activeTab === name ? { color: "#FFF" } : { color: COLORS.primary },
      ]}
    >
      {name}
    </Text>
  </TouchableOpacity>
)

export default TabButton
