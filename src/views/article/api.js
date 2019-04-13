import {ysServer} from '@/tools/servers';

export class ysArticleApi {

  // 获取所有文章
  static getAllArticle(data = {}) {
    return ysServer.connection('GET', '/Article/A01', data)
  }

  // 获取文章详情
  static getArticleDetails(data = {}) {
    return ysServer.connection('POST', '/Article/A08', data)
  }

  // 获取文章评论
  static getArticleComments(data = {}) {
    return ysServer.connection('POST', '/Comment/A02', data)
  }

  //添加评论
  static addComment(data = {}) {
    return ysServer.connection('POST', '/Comment/A03', data)
  }

  // 获取某分类的全部文章
  static getArticleTypeArticles(data = {}) {
    return ysServer.connection('POST', '/Article/A05', data)
  }

}
