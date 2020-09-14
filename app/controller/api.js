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
      query
    } = ctx;
    const result = await ctx.service.api.getRandomData(query);
    ctx.set("Content-Disposition", result.res.headers["content-disposition"]);
    // ctx.set("Content-Type", result.res.headers["content-type"]);
    ctx.body = result.data;
    ctx.status = result.status;
  }
}

module.exports = PageController