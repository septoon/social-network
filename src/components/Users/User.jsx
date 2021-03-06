import React from 'react'
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'

const User = (props) => {
    return(
        <div>
            {props.users.map(u => <div key={u.id} className={classes.user_item}>
                <div className={classes.left} >
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={ u.photos.small !== null ? u.photos.small : userPhoto} alt='avatar' className={classes.avatar}/>
                        </NavLink>
                    </div>
                    <div>
                     {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }} >Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                        }} >Follow</button>}
                    </div>
                </div>
                <div className={classes.right} >
                    <div className={classes.name} >
                        <NavLink to={'/profile/' + u.id}>
                            <div className={classes.fullName} >{u.name}</div>
                        </NavLink>
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

export default User
