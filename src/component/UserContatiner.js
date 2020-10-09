import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContatiner({userData,fetchUsers}) {//from props we are tacking only fetcUsers
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <div>
            <h1>loading...</h1>
        </div>
    ):userData.error ? (<h1>{userData.error}</h1>) : (
        <div>
            <h1>
                UserList
            </h1>
            <div>
                {
                    userData && userData.users && userData.users.map(user=><p>{user.name} {user.username}</p>)
                }
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
return{
     userData:state.users
}
}
const mapDispatchToProps=(dispatch)=>{
return{
    fetchUsers:()=>dispatch(fetchUsers())
} 
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContatiner)
