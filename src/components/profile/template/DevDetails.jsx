import React from "react";
import './DevDetails.css'

const devDetails = props => 
<div className="devDetails">
    <img src={props.avatar_url} className="dev-img" alt="developer image"/>
    <div className="details">
        <div className="dev-name"><b>{props.name}</b></div>
        <div className="dev-username">@{props.login}</div>
        <div className="dev-bio">{props.company}</div>
        <div className="dev-socials">
            <div className='twitter'>
            <i data-feather="twitter"></i>{props.twitter_username}
            </div>
        </div>
    </div>
</div>

export default devDetails