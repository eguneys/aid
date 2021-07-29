import * as chest from '../';
import RemoteSocket from './remotesocket';
import WebSocketPubSub from './websocketpubsub';
import LightUserApi from '../user/lightuserapi';

export class Env {

  webClient: WebSocketPubSub
  remoteSocket: RemoteSocket
  
  constructor(readonly securityApi: chest.security.SecurityApi,
              readonly lightUserApi: chest.user.LightUserApi) {

    this.webClient = new WebSocketPubSub(securityApi,
                                         lightUserApi);
    
    this.remoteSocket = new RemoteSocket(
      this.webClient
    );
  }

}
