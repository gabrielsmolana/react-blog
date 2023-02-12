import { Spin } from 'antd'
import { useEffect, useState } from 'react'

const PostsList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  // useEffect(() => console.log({ posts }), [posts])
  // useEffect(() => console.log({ loading }), [loading])

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
    <div>
      {loading ? (
        <Spin />
      ) : (
        <div>
          {posts.map(({ id, title }) => (
            <div key={id}>{title}</div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostsList
