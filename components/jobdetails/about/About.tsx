import React from "react"
import { Platform, View, useWindowDimensions } from "react-native"
import RenderHtml from "react-native-render-html"

import { SIZES } from "../../../constants"
import styles from "../tabs/tabs.style"

const About = ({ data }) => {
  const { width } = useWindowDimensions()
  const androidStyle = Platform.select({
    android: { padding: SIZES.small },
  })

  return (
    <View style={styles.card}>
      <View style={androidStyle}>
        <RenderHtml source={{ html: data }} contentWidth={width} />
      </View>
    </View>
  )
}

export default About
