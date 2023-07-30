import { View } from "react-native"
import Search from "./Search"
import WelcomeMessage from "./WelcomeMessage"
import JobTypeFilter from "./JobTypeFilter"

const Welcome = ({ setQuery, filter, setFilter }) => {
  return (
    <View>
      <WelcomeMessage />
      <Search setQuery={setQuery} />
      <JobTypeFilter filter={filter} setFilter={setFilter} />
    </View>
  )
}

export default Welcome
