import {ysServer} from '@/tools/servers';

export class ysArticleApi {

  static getAllArticle(data = {}) {
    return ysServer.connection('GET', '/Article/A01', data)
  }
}
