import { Component, OnInit } from '@angular/core';
import {NetworkInterface} from '@ionic-native/network-interface/ngx';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  model: any = {};

  constructor(  private networkInterface: NetworkInterface,
                private camera: Camera) {

                  this.networkInterface.getWiFiIPAddress()
                      .then(address => {
                        this.model.ip = address.ip;
                      })
                      .catch(error => console.error(`Unable to get IP: ${error}`));
              
                  this.networkInterface.getCarrierIPAddress()
                      .then(address => {
                        if (!this.model.ip) {
                          this.model.ip = address.ip;
                        }
                      })
                      .catch(error => console.error(`Unable to get IP: ${error}`));
                }

  ngOnInit() {
  }

}
