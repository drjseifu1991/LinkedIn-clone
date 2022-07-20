import React from 'react'
import './SidebarRecent.css'

function SidebarHash({topic}) {
  return (
    <div className='sidebar_recentItem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
  )
}

export default SidebarHash
