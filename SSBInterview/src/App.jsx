

import Spinner from "./components/Spinner"
import TodayMission from "./Page/Home/TodayMission"
import StudyTopic from "./Page/Home/StudyTopic"
import Landing from "./Page/Home/Landing"
import Login from "./Page/Home/Login"
import StartUp from "./Page/Home/StartUp"
import Ssb from "./Page/SSB/Ssb"
import { Route,Routes,BrowserRouter } from "react-router-dom"
import Dashboard from "./Page/Home/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"
function App() {
  return (
    <>
    <BrowserRouter>  
  <Routes>

 <Route element={<PublicRoute />}>
  <Route path="/" element={<Landing />} />
  <Route path="/login" element={<Login />} />
</Route>

 <Route path="/spinner" element={<Spinner />} />
    <Route path="/ssb" element={<Ssb />} />
<Route element={<ProtectedRoute />}>
     <Route path="/todaymission" element={<TodayMission />} />
   <Route path="/study/:missionId" element={<StudyTopic />} />
       <Route path="/startup" element={<StartUp />} />
       <Route path="/dashboard" element={<Dashboard />} />
</Route>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
