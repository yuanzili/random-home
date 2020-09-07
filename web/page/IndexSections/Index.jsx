import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import DemoNavbar from "../components/Navbars/DemoNavbar.js";
import CardsFooter from "../components/Footers/CardsFooter.js";

// index page sections
import Hero from "./Hero.js";
import Buttons from "./Buttons.js";
import Inputs from "./Inputs.js";
import CustomControls from "./CustomControls.js";
import Menus from "./Menus.js";
import Navbars from "./Navbars.js";
import Tabs from "./Tabs.js";
import Progress from "./Progress.js";
import Pagination from "./Pagination.js";
import Pills from "./Pills.js";
import Labels from "./Labels.js";
import Alerts from "./Alerts.js";
import Typography from "./Typography.js";
import Modals from "./Modals.js";
import Datepicker from "./Datepicker.js";
import TooltipPopover from "./TooltipPopover.js";
import Carousel from "./Carousel.js";
import Icons from "./Icons.js";
import Login from "./Login.js";
import Download from "./Download.js";

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
        <main ref="main">
          <Hero />
          <Buttons />
          <Inputs />
          <section className="section">
            <Container>
              <CustomControls />
              <Menus />
            </Container>{" "}
          </section>{" "}
          <Navbars />
          <section className="section section-components">
            <Container>
              <Tabs />
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row>{" "}
              <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row>{" "}
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover />
            </Container>{" "}
          </section>{" "}
          <Carousel />
          <Icons />
          <Login />
          <Download />
        </main>{" "}
        <CardsFooter />
      </>
    );
  }
}
export default Index;
