import React from 'react'
import NavBar from '../../../components/NavBar'
import Left from '../left/left'
import Timetable from '../right/Timetable'

class Layout extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Left />
        <Timetable />
        <main>{this.props.children}</main>
      </>
    )
  }
}
export default Layout
