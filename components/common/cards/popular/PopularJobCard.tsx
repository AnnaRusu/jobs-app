import { useState } from "react"
import { useRouter } from "expo-router"
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { COLORS } from "../../../../constants"
import { checkImageURL } from "../../../../utils"
import { JobInterface } from "interfaces"
import styles from "./popularjobcard.style"

const PopularJobCard = ({ job }: { job: JobInterface }) => {
  const router = useRouter()
  const [selectedJob, setSelectedJob] = useState("")

  const containerStyle = [
    styles.container,
    selectedJob === job.id
      ? { backgroundColor: COLORS.primary }
      : { backgroundColor: "#FFF" },
  ]
  const logoContainerStyle = [
    styles.logoContainer,
    selectedJob === job.id
      ? { backgroundColor: "#FFF" }
      : { backgroundColor: COLORS.white },
  ]
  const jobTitleStyle = [
    styles.jobName,
    selectedJob === job.id
      ? { color: COLORS.white }
      : { color: COLORS.primary },
  ]
  const publisherStyle = [
    styles.publisher,
    selectedJob === job.id
      ? { color: COLORS.white }
      : { color: COLORS.primary },
  ]

  const genericLogo =
    "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"

  const handleCardPress = (job: JobInterface) => {
    router.push(`/job-details/${job?.id}`)
    setSelectedJob(job?.id)
  }
  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={(event: GestureResponderEvent) => handleCardPress(job)}
    >
      <TouchableOpacity style={logoContainerStyle}>
        <Image
          source={{
            uri: checkImageURL(job.logo) ? job.logo : genericLogo,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {job.employer}
      </Text>

      <Text style={jobTitleStyle} numberOfLines={1}>
        {job.title}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={publisherStyle}>{job.publisher}</Text>
        <Text style={styles.location}>{job.country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard
