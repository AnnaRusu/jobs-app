import { Text, View, Image } from "react-native"
import { icons } from "../../../constants"
import { checkImageURL } from "../../../utils"
import styles from "./company.style"

const Company = ({
  logo,
  title,
  company,
  location,
}: {
  logo: string
  title: string
  company: string
  location: string
}) => {
  const genericLogo =
    "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{ uri: checkImageURL(logo) ? logo : genericLogo }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{title}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{company}</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company
