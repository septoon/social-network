import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.jpg'

const Users = (props) => {
    if(props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    return(
        <div className={classes.users_wrapper} >
            {props.users.map(u => <div key={u.id} className={classes.user_item}>
                <div className={classes.left} >
                    <div>
                        <img src={ u.photos.small !== null ? u.photos.small : userPhoto} alt='avatar' className={classes.avatar}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}} >Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}} >Follow</button>}
                    </div>
                </div>
                <div className={classes.right} >
                    <div className={classes.name} >
                        <div className={classes.fullName} >{u.name}</div>
                        <div className={classes.status} >{u.status} </div>
                    </div>
                    <div className={classes.location} >
                        <div className={classes.country} >{'u.location.country'}</div>
                        <div className={classes.city} >{'u.location.city'}</div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Users
