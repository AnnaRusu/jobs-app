import { Dimensions, StyleSheet } from "react-native"
import { COLORS, FONT, SIZES } from "../../constants"

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifySelf: "center",
    gap: 15,
    borderRadius: SIZES.medium,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.white,
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  message: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    color: COLORS.secondary,
    borderRightWidth: 1,
    borderRightColor: COLORS.gray2,
    paddingRight: 15,
  },
  input: {
    padding: 5,
    paddingBottom: 0,
    borderBottomWidth: 1,
    fontSize: SIZES.medium,
    borderBottomColor: COLORS.gray2,
    textAlign: "center",
  },
  image: {
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  button: {
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.xSmall,
    marginTop: SIZES.small,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  buttonText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: "#fff",
  },
})

export default styles
