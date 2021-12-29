import React, {Fragment} from 'react'
import DevDetails from './template/DevDetails'
import RepositoriesCard from './template/RepositoriesCard'

const profile = props =>
<React.Fragment>
<div class="profile">
<DevDetails/>
<RepositoriesCard/>
</div>
</React.Fragment>

export default profile

