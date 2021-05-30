import * as chest from '../';
import RemoteSocket from './remotesocket';
import WebSocketPubSub from './websocketpubsub';

export class Env {

  webClient: WebSocketPubSub
  remoteSocket: RemoteSocket
  
  constructor(readonly securityApi: chest.security.SecurityApi) {

    this.webClient = new WebSocketPubSub(securityApi);
    
    this.remoteSocket = new RemoteSocket(
      this.webClient
    );
  }

}
