import React from 'react'

// reactstrap components
import { Container, Row } from 'reactstrap'

// core components
import DemoNavbar from '../components/Navbars/DemoNavbar.jsx'
import CardsFooter from '../components/Footers/CardsFooter.jsx'

// index page sections
import Hero from './Hero.jsx'
import Buttons from './Buttons.jsx'
import Inputs from './Inputs.jsx'
import CustomControls from './CustomControls.jsx'
import Menus from './Menus.jsx'
import Navbars from './Navbars.jsx'
import Tabs from './Tabs.jsx'
import Progress from './Progress.jsx'
import Pagination from './Pagination.jsx'
import Pills from './Pills.jsx'
import Labels from './Labels.jsx'
import Alerts from './Alerts.jsx'
import Typography from './Typography.jsx'
import Modals from './Modals.jsx'
import Datepicker from './Datepicker.jsx'
import TooltipPopover from './TooltipPopover.jsx'
import Carousel from './Carousel.jsx'
import Icons from './Icons.jsx'
import Login from './Login.jsx'
import Download from './Download.jsx'

class Index extends React.Component {
  // componentDidMount() {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.main.scrollTop = 0;
  // }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref='main'>
          <Hero />
          <Buttons />
          <Inputs />
          <section className='section'>
            <Container>
              <CustomControls />
              <Menus />
            </Container>{' '}
          </section>{' '}
          <Navbars />
          <section className='section section-components'>
            <Container>
              <Tabs />
              <Row className='row-grid justify-content-between align-items-center mt-lg'>
                <Progress />
                <Pagination />
              </Row>{' '}
              <Row className='row-grid justify-content-between'>
                <Pills />
                <Labels />
              </Row>{' '}
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover />
            </Container>{' '}
          </section>{' '}
          <Carousel />
          <Icons />
          <Login />
          <Download />
        </main>{' '}
        <CardsFooter />
      </>
    )
  }
}
export default Index
