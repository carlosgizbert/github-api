import React, { Fragment } from 'react';
import axios from 'axios';


export default class Profile extends React.Component {
  state = {
    user: {
        name: 'Nome do Usuário',
        login: 'Login',
        company: 'Company'
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/carlosgizbert`)
      .then(res => {
        const user = res.data;
        this.setState({ user });
      })
  }

  render() {
    return (
      <React.Fragment>
        <img src={this.state.user.avatar_url} class="dev-img" alt="developer image"/>
        <div class="details">
            <div class="dev-name"><b>{this.state.user.name}</b></div>
            <div className="dev-username">@{this.state.user.login}</div>
            <div className="dev-bio">{this.state.user.company}</div>
            <div className="dev-socials">
                <div className='twitter'>
                <i data-feather="twitter"></i>{this.state.user.twitter_username}
                </div>
            </div>
        </div>
        { console.log(this.state.user) }
      </React.Fragment>
    )
  }
}