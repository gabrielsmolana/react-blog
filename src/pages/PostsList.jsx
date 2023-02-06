import { Spin } from 'antd'
import { useEffect, useState } from 'react'

const PostsList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => console.log({ posts }), [posts])
  useEffect(() => console.log({ loading }), [loading])

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      {loading ? <Spin /> : <h1>Elo</h1>}
      {/* {!loading && <h1>Elo</h1>} */}
    </>
  )
}

export default PostsList
