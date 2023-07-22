import { Link } from "expo-router"
import { isEmpty } from "lodash"
import { Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { COLORS, SIZES } from "../../../constants"
import styles from "../tabs/tabs.style"

const MoreInfo = ({ data }) => {
  const viewStyle = {
    flex: 1,
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: SIZES.small,
  }

  return (
    <View style={[styles.card, { padding: 18 }]}>
      <View style={viewStyle}>
        <Text style={styles.header}>Link:</Text>
        <Text numberOfLines={1}>
          {data.url ? (
            <Link href={data.url} style={{ color: COLORS.tertiary }}>
              {data.url}
            </Link>
          ) : null}
        </Text>
      </View>

      <View style={viewStyle}>
        <Text style={styles.header}>Post Date:</Text>
        <Text style={{ color: COLORS.secondary }} numberOfLines={1}>
          {data.postDate}
        </Text>
      </View>

      {!isEmpty(data.tags) && (
        <View style={viewStyle}>
          <View>
            <Text style={styles.header}>Tags:</Text>
          </View>

          {data.tags.map((tag, index) => (
            <TouchableOpacity key={index}>
              <Text style={styles.tag} numberOfLines={1}>
                {tag.text.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View style={viewStyle}>
        <Text style={styles.header}>Type:</Text>
        <TouchableOpacity>
          <Text style={styles.tag} numberOfLines={1}>
            {data.type.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MoreInfo
