import React, { useState, useEffect } from 'react'

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from 'reactstrap'

function Wallpaper(props) {
  const [picUrl, setPicUrl] = useState('/api/getRandomData?type=avatar')
  const changePic = (type) => {
    const randomDate = new Date().getTime()
    const apiUrl = `/api/getRandomData?type=${type}&t=${randomDate}`
    setPicUrl(apiUrl)
    console.log(picUrl)
  }

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
                onClick={() => changePic('sellerShow')}
                size='lg'
              >
                <span className='btn-inner--icon mr-1'>
                  <i className='ni ni-album-2' />
                </span>
                <span className='btn-inner--text'>随机一张卖家秀</span>
              </Button>
              <Button
                className='btn-white btn-icon mb-3  mg-bt'
                color='default'
                onClick={() => changePic('buyerShow')}
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
                onClick={() => changePic('avatar')}
                size='lg'
              >
                <span className='btn-inner--icon mr-1'>
                  <i className='ni ni-album-2' />
                </span>
                <span className='btn-inner--text'>随机一张头像</span>
              </Button>
            </Col>
            <Col className='mb-lg-auto' lg='7'>
              <div className='rounded shadow-lg overflow-hidden transform-perspective-right'>
                <img
                  // src={'/api/getRandomData?type=buyerShow'}
                  src={picUrl}
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

export default Wallpaper
