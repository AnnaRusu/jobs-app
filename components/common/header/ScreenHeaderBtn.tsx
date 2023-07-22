import { Image, ImageSourcePropType, TouchableOpacity } from "react-native"
import styles from "./screenheader.style"

interface ScreenHeaderBtnProps {
  icon: ImageSourcePropType
  dimension: string
  onPress?: () => void
}

const ScreenHeaderBtn = ({
  icon,
  dimension,
  onPress,
}: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Image
        source={icon}
        resizeMode="cover"
        style={[styles.btnImg, { width: dimension, height: dimension }]}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
