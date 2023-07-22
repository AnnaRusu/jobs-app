import { JobInterface } from "interfaces"
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { checkImageURL } from "../../../../utils"
import { useRouter } from "expo-router"
import styles from "./nearbyjobcard.style"

const NearbyJobCard = ({ job }: { job: JobInterface }) => {
  const router = useRouter()

  const genericLogo =
    "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"

  const handleNavigate = (job: JobInterface) => {
    router.push(`/job-details/${job?.slug}`)
  }

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
