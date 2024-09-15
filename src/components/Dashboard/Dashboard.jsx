import React from 'react'
import LineChart from '../Charts/Linechart'



export default function Dashboard({data}) {
  return (
    <>
        <div>
            <LineChart data = {data}/>

           
        </div>
    </>
    
  )
}
