import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  code: any;
  constructor(private barcodeScanner: BarcodeScanner) { }
  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code= barcodeData.text;
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }
  ngOnInit() {
  }

}
