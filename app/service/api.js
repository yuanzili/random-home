'use strict'

const {
  Service
} = require('egg')

class ApiService extends Service {
  index() {
    return {
      news: [{
          id: '1',
          title: 'Racket v7.3 Release Notes'
        },
        {
          id: '2',
          title: 'Free Dropbox Accounts Now Only Sync to Three Devices'
        },
        {
          id: '3',
          title: 'Voynich Manuscript Decoded by Bristol Academic'
        },
        {
          id: '4',
          title: 'Burger King to Deliver Whoppers to LA Drivers Stuck in Traffic'
        },
        {
          id: '5',
          title: 'How much do YouTube celebrities charge to advertise your product? '
        }
      ]
    }
  }

  /**
   * 随机数据
   * @param {*} params 
   */
  async getRandomData(params) {
    const {
      ctx
    } = this;
    let resp;
    if (params.type === 'buyerShow') {
      resp = await ctx.curl('https://api.66mz8.com/api/rand.tbimg.php?format=jpg', {
        dataType: "Buffer"
      });
    } else if (params.type === 'sellerShow') {
      resp = await ctx.curl('https://api.66mz8.com/api/rand.tbimg.php?format=png', {
        dataType: "Buffer"
      });
    } else if (params.type === 'avatar') {
      resp = await ctx.curl('https://api.66mz8.com/api/rand.portrait.php?type=%E7%94%B7&format=jpg', {
        dataType: "Buffer"
      });
    }
    return resp;
  }
}

module.exports = ApiService