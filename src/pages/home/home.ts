import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { NetworkInterface } from '@ionic-native/network-interface';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    Network
  ]
})
export class HomePage {

  constructor(public navCtrl: NavController, public network: Network, public networkInterface: NetworkInterface) {

    this.networkInterface != null ? console.log("Network Interface not null") : console.log("Network Interface null");

    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });

    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
    });

  }

  showNetworkInfo(){
    console.log(this.networkInterface.getIPAddress());
    console.log(this.networkInterface.getWiFiIPAddress()); //endereço ip da rede wifi
    console.log(this.networkInterface.getCarrierIPAddress()); //endereço ip da operadora
  }

}
