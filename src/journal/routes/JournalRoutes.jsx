import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"


export const JournalRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<JournalPage/>} />
      
      <Route exact path="/*" element={<Navigate to="/"/>} />
    </Routes>
  )
}
