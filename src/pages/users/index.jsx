import React, { useEffect, useState } from 'react'

export default function Users() {

  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users)
      })
  }, [])
  if (!users) return <div>Loading...</div>
  return (
    <div>All USers</div>
  )
}
