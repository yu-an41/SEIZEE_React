import React from 'react'
import { useTimeTable } from './useTimeTable'

function TimeTable(props) {
  const { timeTable } = useTimeTable()

  return (
    <div>
      <div class="col">
        我的時間表
        <br />
        {timeTable.map((v, i) => {
          return (
            <div key={`${i + v.time}`}>
              {v.time} / {v.sid} / {v.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TimeTable
