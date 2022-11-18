import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContextProviders from './contexts/MyContextProviders'
import Menu from './components/Menu'

import PostCook from './02-forum/pages/Post_cook'
import ForumHome from './02-forum/pages/ForumHome'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="forumHome" element={<ForumHome />} />
        <Route path="Post_cook" element={<PostCook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
