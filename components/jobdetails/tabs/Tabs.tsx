import { useState } from "react"
import { FlatList, View } from "react-native"
import { SIZES } from "../../../constants"
import {TabButton, TabContent} from "../../../components"
import styles from "./tabs.style"

const tabs = ["About", "More Info"]

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(tabs[0])

  const Item = ({ item }) => (
    <TabButton
      name={item}
      activeTab={activeTab}
      onHandleSearchType={() => setActiveTab(item)}
    />
  )

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={tabs}
          renderItem={Item}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        />
      </View>
      <TabContent activeTab={activeTab} data={data} />
    </>
  )
}

export default Tabs
