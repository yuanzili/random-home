import React from 'react'

// core components
import DemoNavbar from '../components/Navbars/DemoNavbar.jsx'
import CardsFooter from '../components/Footers/CardsFooter.jsx'
import Introduce from './components/Introduce'
import Wallpaper from './components/wallpaper'
import request from '@/utils/request'
function Random(props) {
  return (
    <>
      <DemoNavbar />
      <main>
        <Introduce />
        <Wallpaper {...props} />
      </main>
      <CardsFooter />
    </>
  )
}
// Random.getInitialProps = async (ctx) => {
//   let propsData = {}
//   if (__isBrowser__) {
//     const result = await Promise.all([
//       request({
//         url: '/api/getRandomData',
//         params: {
//           type: 'buyerShow',
//         },
//         responseType: 'blob',
//       }),
//       request({
//         url: '/api/getRandomData',
//         params: {
//           type: 'avatar',
//         },
//         //responseType: 'Blob',
//       }),
//     ])
//     propsData = { buyerShowBuffer: result[0].data, avatarBuffer: result[1].data }
//     console.log('propsData', typeof result[0])
//   } else {
//     const result = await Promise.all([
//       ctx.service.api.getRandomData({ type: 'buyerShow' }),
//       ctx.service.api.getRandomData({ type: 'avatar' }),
//     ])
//     propsData = { buyerShowBuffer: result[0], avatarBuffer: result[1] }
//   }

//   return propsData
// }
export default Random
