import { StyleSheet } from "react-native"

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants"

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  card: {
    gap: SIZES.small,
    padding: 10,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.small,
    shadowColor: COLORS.gray,
    overflow: "hidden",
  },
  header: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.secondary,
  },
  tag: {
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.primary,
    ...SHADOWS.small,
    shadowColor: COLORS.gray,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.xSmall,
  },
  btn: {
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: "#F3F4F8",
    borderRadius: SIZES.medium,
    marginLeft: 2,
    margin: 10,
    ...SHADOWS.small,
    shadowColor: COLORS.gray2,
  },
  btnText: {
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
  },
  flex: {
    flex: 1,
  },
})

export default styles
