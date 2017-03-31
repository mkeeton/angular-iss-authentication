import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Parameter } from '../Classes/parameter';
declare var easyXDM: any;

@Injectable()
export class EasyXDMService {

    public socket: any;
    public remote: any;
    public frameSocket: any;
    private data: Observable<string[]>;
    private remoteData: Observable<string[]>;
    private remoteFrame: Observable<string[]>;

    public Msg(serverURL: string, msg: string, namespace: string): Observable<string[]> {
        if (namespace === '') {
            namespace = 'Defaultns';
        }
        this.data = new Observable((observer) => {
            this.socket = new easyXDM.Socket({
                onMessage: (message, origin) => {
                    observer.next(message);
                    observer.complete();
                },
                remote: serverURL,
            });

            this.socket.postMessage(msg);
        },
        );
        return this.data;
    }

    public Rpc(serverURL: string, procName: string, params: Parameter[], namespace: string): Observable<string[]> {
        if (namespace === '') {
            namespace = 'Defaultns';
        }
        this.remoteData = new Observable((observer) => {
            this.remote = new easyXDM.Rpc({
                remote: serverURL,
            }, { remote: { postMessage: {} } });

            switch (procName) {
                case 'postMessage':
                    this.remote.postMessage(params, (result) => {
                        observer.next(result);
                        observer.complete();
                    });
                default:
            }

        },
        );
        return this.remoteData;
    }

    public IFrame(  serverURL: string,
                    frameContainer: string,
                    frameWidth: string,
                    frameHeight: string,
                    namespace: string): Observable<string[]> {
        if (namespace === '') {
            namespace = 'Defaultns';
        }
        this.remoteFrame = new Observable((observer) => {
            this.frameSocket = new easyXDM.Socket({
                container: document.getElementById(frameContainer),
                onMessage: (message, origin) => {
                    observer.next(message);
                    observer.complete();
                },
                remote: serverURL,
            });
            if (frameWidth !== '') {
                document.getElementById(frameContainer).getElementsByTagName('iframe')[0].style.width = frameWidth;
            }
            if (frameHeight !== '') {
                document.getElementById(frameContainer).getElementsByTagName('iframe')[0].style.height = frameHeight;
            }
        },
        );
        return this.remoteFrame;
    }

}