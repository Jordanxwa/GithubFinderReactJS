import { useEffect, useContext } from 'react'
import UserItem from '../users/UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
  // Bring in the Context
const {users, loading, fetchUsers} = useContext(GithubContext)

// Fetch Users when page loads
useEffect(() => {
fetchUsers()
}, [])

// Check if req is loading
if(!loading) {
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {/* Map through user login and get login */}
      {users.map((user)=>(
        <UserItem key={user.id} user={user} />
    ))}</div>
  )
} else {
  return (<Spinner />)
      }
}

export default UserResults