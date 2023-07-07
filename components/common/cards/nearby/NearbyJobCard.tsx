import { JobInterface } from "interfaces"
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { checkImageURL } from "../../../../utils"
import styles from "./nearbyjobcard.style"

const NearbyJobCard = ({
  job,
  handleNavigate,
}: {
  job: JobInterface
  handleNavigate: (job: JobInterface) => void
}) => {
  const genericLogo =
    "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={(event: GestureResponderEvent) => handleNavigate(job)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.logo) ? job.logo : genericLogo,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.title}
        </Text>
        <Text style={styles.jobType}>{job.type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard
