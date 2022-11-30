import { useEffect, useState } from 'react'
import './Demo.css'
import { useTimeTable } from './useTimeTable'

function Demo(props) {
  const { handleAddTimeTable } = useTimeTable()

  const randId = () => {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(2, 10)
  }

  const extendItems = (items, emptyFirst = true) => {
    const newItems = []

    for (let i = 0; i < items.length; i++) {
      if (emptyFirst) newItems.push({ sid: randId(), name: '' })

      newItems.push({ ...items[i] })

      if (!emptyFirst) newItems.push({ sid: randId(), name: '' })
    }

    return newItems
  }

  const [cat1, setCat1] = useState([
    { sid: 1, name: 'a', time: '12' },
    { sid: 3, name: 'b', time: '14' },
  ])

  const [cat2, setCat2] = useState([
    { sid: 2, name: 'c', time: '13' },
    { sid: 4, name: 'd', time: '15' },
  ])

  const [cat3, setCat3] = useState([
    { sid: 3, name: 'e', time: '12' },
    { sid: 5, name: 'f', time: '14' },
  ])

  const [cat4, setCat4] = useState([
    { sid: 6, name: 'g', time: '13' },
    { sid: 10, name: 'h', time: '15' },
  ])

  const [cat5, setCat5] = useState([
    { sid: 7, name: 'i', time: '12' },
    { sid: 13, name: 'j', time: '14' },
  ])

  // const [timeTable, setTimeTable] = useState([
  //   { time: '12', sid: 0, name: '' },
  //   { time: '13', sid: 0, name: '' },
  //   { time: '14', sid: 0, name: '' },
  //   { time: '15', sid: 0, name: '' },
  // ])

  // const handleAddTimeTable = (item) => {
  //   // const newTimeTable = timeTable.map((v) => {
  //   //   return { ...v }
  //   // })

  //   const foundIndex = timeTable.findIndex((v, i) => {
  //     return v.time === item.time
  //   })

  //   console.log(foundIndex)

  //   const newTimeTable = timeTable.map((v, i) => {
  //     if (i === foundIndex) return { ...v, sid: item.sid, name: item.name }
  //     return { ...v }
  //   })

  //   console.log(timeTable)

  //   setTimeTable(newTimeTable)
  // }

  useEffect(() => {
    setCat1(extendItems(cat1, false))
    setCat2(extendItems(cat2))
    setCat3(extendItems(cat3, false))
    setCat4(extendItems(cat4))
    setCat5(extendItems(cat5, false))
  }, [])

  const displayItems = (items) => {
    return items.map((v, i) => {
      if (v.name === '') {
        return (
          <div key={v.sid} className="empty-block">
            {v.name}
          </div>
        )
      }
      return (
        <div
          className="normal-block"
          key={v.sid}
          onClick={() => {
            //console.log(items, i)
            handleAddTimeTable(v)
          }}
        >
          time: {v.time}
          <br /> name: {v.name}
          <br /> sid:{v.sid}
        </div>
      )
    })
  }

  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col">{displayItems(cat1)}</div>
          <div class="col">{displayItems(cat2)}</div>
          <div class="col">{displayItems(cat3)}</div>
          <div class="col">{displayItems(cat4)}</div>
          <div class="col">{displayItems(cat5)}</div>
          {/* <div class="col">
            我的時間表
            <br />
            {timeTable.map((v, i) => {
              return (
                <div key={`${i + v.time}`}>
                  {v.time} / {v.sid} / {v.name}
                </div>
              )
            })}
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Demo
