
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Content = () => {
  return (
    <div>
      <Header/>

      <section>
        <Outlet/>
      </section>

      <Footer/>
    </div>
  )
}

export default Content
