import {ysServer} from '@/tools/servers';

export class ysUserApi {

  static getUser(data = {}) {
    return ysServer.connection('POST', '/User/A06', data)
  }
}
