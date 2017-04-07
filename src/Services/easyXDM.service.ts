import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Parameter } from '../Classes/parameter';
import { XDMInstance } from '../Classes/xdmInstance';
declare var easyXDM: any;

@Injectable()
export class EasyXDMService {

    public socket: any;
    public remote: any;
    public frameSocket: any;
    private data: Observable<string[]>;
    private remoteData: Observable<string[]>;
    private remoteFrame: Observable<string[]>;

	private instances: Array<XDMInstance> = new Array<XDMInstance>();

    public Msg(serverURL: string, msg: string, namespace: string): Observable<string[]> {
        this.data = new Observable((observer) => {
			let xdmInstance: any = this.getEasyXDM(namespace);
            this.socket = new xdmInstance.Socket({
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
        this.remoteData = new Observable((observer) => {
			let xdmInstance: any = this.getEasyXDM(namespace);
            this.remote = new xdmInstance.Rpc({
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
        this.remoteFrame = new Observable((observer) => {
				let xdmInstance: any = this.getEasyXDM(namespace);
				this.frameSocket = new xdmInstance.Socket({
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

	private getEasyXDM(namespace: string): any {
		let found: boolean = false;
		for (let i of this.instances) {
			if (i.Namespace === namespace) {
				found = true;
				return i.easyXDM;
			}
		}
        if (found === false) {
            if (namespace === '') {
                let newInstance: any = easyXDM;
                this.instances.push(new XDMInstance(namespace, newInstance));
                return newInstance;
            } else {
                let newInstance: XDMInstance = new XDMInstance(namespace, easyXDM.noConflict('easyXDM_' + namespace));
                this.instances.push(newInstance);
				window['easyXDM_' + namespace] = newInstance;
                return newInstance.easyXDM;
            }
        }
	}

}