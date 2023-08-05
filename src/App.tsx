import { Route, Routes } from 'react-router-dom'
import Index from './page/index/Index'
import Room from './page/room/Room'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      {/* <Route element> */}
      <Route path='/call' element={<Room />} />
      {/* <Route path="/call" element={<RoomCall />} /> */}
      {/* <Route path="/called" element={<Offer />} /> */}
      {/* </Route> */}
    </Routes>
  )
}

export default App
