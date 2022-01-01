import React from 'react'
import './RepositoriesCard.css'


const card = props => 
<div className="repos">
    <div className="repos-card">
    <div className="repos-name"><b>{props.name}</b></div>
        <div className="repos-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat</div>
        <div className="repos-detail">
            <div className="repos-detail-star">100 stars</div>
            <div className="repos-detail-update">Updated 30 days ago</div>
        </div>
    </div>
</div>  

export default card