import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./Layout/Layout"
import Search from "./pages/Search"
import Home from "./pages/Home"
import Playlist from "./pages/Playlist"

export let artists = [
  {
    id: 1,
    name: "Alice Johnson",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 2,
    name: "Bob Smith",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 3,
    name: "Charlie Brown",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 4,
    name: "Diana Prince",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 5,
    name: "Eve Adams",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 6,
    name: "Frank Castle",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 7,
    name: "Grace Lee",
    image: "/images/user.jpg",
    type: "artist",
  },
  {
    id: 8,
    name: "Hank Pym",
    image: "/images/user.jpg",
    type: "artist",
  },
];

export let content_albums = [
  {
    id: 1,
    image: "/images/picture.jpg",
    title: "Grace's Album",
    name: "Grace Lee",
  },
  {
    id: 2,
    image: "/images/picture.jpg",
    title: "Diana's Album",
    name: "Diana Prince",
  },
  {
    id: 3,
    image: "/images/picture.jpg",
    title: "Bob's Album",
    name: "Bob Smith",
  },
  {
    id: 4,
    image: "/images/picture.jpg",
    title: "Hank's Album",
    name: "Hank Pym",
  },
]

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/playlist/:id" element={<Playlist />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  )
}

export default App