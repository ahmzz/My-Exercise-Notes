import React from 'react'
import './BaseFilter.css'

const BaseFilter = ({current,onUpdate}) => {
  return (
    <nav className='filter-nav'>

    <button className={current=='all'?'active':''} onClick={()=>onUpdate('all')}>View All</button>
    <button className={current=='completed'?'active':''} onClick={()=>onUpdate('completed')}>Completed</button>
    <button className={current=='pending'?'active':''} onClick={()=>onUpdate('pending')}>Pending</button>

    </nav>
  )
}

export default BaseFilter