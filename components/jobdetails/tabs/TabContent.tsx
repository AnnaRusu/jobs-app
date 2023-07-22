import {About, MoreInfo} from "../../../components"

const TabContent = ({ activeTab, data }) => {
  const moreInfoData = {
    tags: data?.tags ?? "N/A",
    postDate: data?.postDate ?? "N/A",
    url: data?.url ?? "N/A",
    type: data?.type ?? "N/A",
  }

  if (activeTab === "About") {
    return <About data={data?.originalPosting ?? "N/A"} />
  }
  if (activeTab === "More Info") {
    return <MoreInfo data={moreInfoData} />
  }
  return null
}

export default TabContent
