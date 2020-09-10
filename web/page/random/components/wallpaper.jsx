import React from 'react'

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from 'reactstrap'

const items = [
  {
    src: require('assets/img/theme/img-1-1200x1000.jpg'),
    altText: '',
    caption: '',
    header: '',
  },
  {
    src: require('assets/img/theme/img-2-1200x1000.jpg'),
    altText: '',
    caption: '',
    header: '',
  },
]

export default function Wallpaper() {
  return (
    <>
      <section className='section section-shaped'>
        {/* <div className='shape shape-style-1 shape-default'>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div> */}
        <Container className='py-md'>
          <Row className='justify-content-between align-items-center'>
            <Col className='mb-5 mb-lg-0' lg='3'>
              <h2 className='font-weight-light'>随机一张图片</h2>
              <Button
                className='btn-white btn-icon mb-3 mg-bt'
                color='default'
                href='https://zh-hans.reactjs.org/'
                size='lg'
              >
                <span className='btn-inner--icon mr-1'>
                  <i className='ni ni-album-2' />
                </span>
                <span className='btn-inner--text'>随机一张壁纸</span>
              </Button>
              <Button
                className='btn-white btn-icon mb-3  mg-bt'
                color='default'
                href='https://zh-hans.reactjs.org/'
                size='lg'
              >
                <span className='btn-inner--icon mr-1'>
                  <i className='ni ni-album-2' />
                </span>
                <span className='btn-inner--text'>随机一张买家秀</span>
              </Button>
              <Button
                className='btn-white btn-icon mb-3 mg-bt'
                color='default'
                href='https://zh-hans.reactjs.org/'
                size='lg'
              >
                <span className='btn-inner--icon mr-1'>
                  <i className='fa fa-cloud-download' />
                </span>
                <span className='btn-inner--text'>下载图片</span>
              </Button>
            </Col>
            <Col className='mb-lg-auto' lg='7'>
              <div className='rounded shadow-lg overflow-hidden transform-perspective-right'>
                <img
                  src={require('assets/img/theme/img-2-1200x1000.jpg')}
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className='separator separator-bottom separator-skew'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon className='fill-white' points='2560 0 2560 100 0 100' />
          </svg>
        </div>
      </section>
    </>
  )
}
