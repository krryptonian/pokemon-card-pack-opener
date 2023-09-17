import { Fragment } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <Fragment>
      {/* <Navbar /> */}
      <main className='container'>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
