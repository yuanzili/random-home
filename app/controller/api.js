const Controller = require('egg').Controller

class PageController extends Controller {
  async index() {
    const {
      ctx
    } = this
    try {
      // Page为webpack打包的chunkName，项目默认的entry为Page
      ctx.type = 'text/json'
      ctx.status = 200
      ctx.body = await ctx.service.api.index()
    } catch (error) {
      ctx.logger.error(error)
    }
  }
  async getRandomData() {
    const {
      ctx
    } = this;
    const {
      params
    } = ctx.request;
    const result = await ctx.service.api.getRandomData(params);
    ctx.type = 'text/json'
    ctx.status = 200
    ctx.body = result;
  }
}

module.exports = PageController