import {ysServer} from '@/tools/servers';

export class ysArticleTypeApi {

  static getAllArticleType(data = {}) {
    return ysServer.connection('GET', '/ArticleType/A01', data)
  }

}
