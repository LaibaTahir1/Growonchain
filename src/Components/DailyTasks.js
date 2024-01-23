import React from 'react'
import Sliders from './Sliders'
import SwiprTask from './SwiprTask'


function DailyTasks() {
  return (
    <div className='max-w-[1240px] mt-28 mx-auto w-full text-white'>
       <h1 className='text-3xl font-semibold'>Daily Tasks</h1>
      <SwiprTask />
    </div>
  )
}

export default DailyTasks
