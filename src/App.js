import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyContextProviders from './contexts/MyContextProviders'
import Menu from './components/Menu'

import ForumHome from './02-forum/pages/ForumHome'
import PostCook from './02-forum/pages/Post_cook'
import PostShare from './02-forum/pages/Post_share'
import PostStore from './02-forum/pages/Post_store'
import PostOfficial from './02-forum/pages/Post_official'
import InnerCook from './02-forum/pages/Inner_cook'
import InnerShare from './02-forum/pages/Inner_share'
import InnerStore from './02-forum/pages/Inner_store'
import InnerOfficial from './02-forum/pages/Inner_official'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/forum" element={<ForumHome />} />
          <Route path="/forum/cook" element={<PostCook />} />
          <Route path="/forum/share" element={<PostShare />} />
          <Route path="/forum/store" element={<PostStore />} />
          <Route path="/forum/official" element={<PostOfficial />} />
          <Route path="/forum/cook/inner" element={<InnerCook />} />
          <Route path="/forum/share/inner" element={<InnerShare />} />
          <Route path="/forum/store/inner" element={<InnerStore />} />
          <Route path="/forum/official/inner" element={<InnerOfficial />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
