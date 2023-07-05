import React from "react"
import { Image, ImageSourcePropType, TouchableOpacity } from "react-native"
import styles from "./screenheader.style"

const ScreenHeaderBtn = ({
  icon,
  dimension,
}: {
  icon: ImageSourcePropType
  dimension: string
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={icon}
        resizeMode="cover"
        style={[styles.btnImg, { width: dimension, height: dimension }]}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
