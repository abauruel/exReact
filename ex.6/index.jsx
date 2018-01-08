import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Bauruel'>
        <Member name='Alex' />
        
        
     </Family>
    , document.getElementById('app'))