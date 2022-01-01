import React, {Component} from 'react'
import DevDetails from './template/DevDetails'
import RepositoriesCard from './template/RepositoriesCard'
import './Profile.css'
import axios from 'axios'
import { useParams } from "react-router-dom";

const initialState = {
  user: {},
  repos: []
}


const BASE_URL = 'https://api.github.com/users/'
const USERNAME = 'carlosgizbert'



export default class Profile extends Component {

state = { ...initialState }


componentDidMount() {
      // get users
      axios.get(BASE_URL+USERNAME)
      .then(res => {
        const user = res.data;
        this.setState({ user });
      })

      // get repositories
      axios.get(BASE_URL+USERNAME+'/repos')
      .then(res => {
        const repos = res.data;
        this.setState({ repos });
      })
  }

reposRender(){
  return this.state.repos.map(repos => {
    return (
      <div className="repos-card" key={repos.id}>
      <div className="repos-name"><b>{repos.name}</b></div>
          <div className="repos-description">{repos.description ? repos.description : `-`}</div>
          <div className="repos-detail">
              <div className="repos-detail-star">{repos.stargazers_count} stars</div>
              <div className="repos-detail-update">{repos.updated_at.substring(0, 10)}</div>
          </div>
      </div>
    )
  })
}

render(){
        return(
        <div className="profile">
            <DevDetails { ...this.state.user }/>
            <div className="repos">
            {this.reposRender()}
            </div> 
        </div>
        )
    }
}
