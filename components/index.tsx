import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn"

// home screen
import NearbyJobs from "./home/nearby/NearbyJobs"
import PopularJobs from "./home/popular/PopularJobs"
import Welcome from "./home/welcome/Welcome"

// job details screen
import { default as JobAbout } from "./jobdetails/about/About"
import Company from "./jobdetails/company/Company"
import { default as JobFooter } from "./jobdetails/footer/Footer.tsx"
import Specifics from "./jobdetails/specifics/Specifics"
import { default as JobTabs } from "./jobdetails/tabs/Tabs"

// common
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard"

export {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  NearbyJobCard,
  NearbyJobs,
  PopularJobs,
  ScreenHeaderBtn,
  Specifics,
  Welcome,
}
