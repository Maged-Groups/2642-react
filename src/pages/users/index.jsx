const res = await fetch('https://dummyjson.com/users')

const data = await res.json();

const { users } = data

// console.log(users)


export default function Users() {
  return (
    <div>All USers</div>
  )
}
