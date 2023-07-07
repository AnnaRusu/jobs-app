import { StyleSheet } from "react-native"

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants"

const styles = StyleSheet.create({
  container: {
    width: 250,
    padding: SIZES.xLarge,
    marginVertical: SIZES.small,
    marginHorizontal: SIZES.small / 6,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.gray,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: "#e1d9d1",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.medium,
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
  },
  publisher: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
})

export default styles
