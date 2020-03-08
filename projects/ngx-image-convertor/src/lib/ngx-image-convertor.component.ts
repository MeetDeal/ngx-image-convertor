import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cmpts-NgxImageConvertor',
    templateUrl: './ngx-image-convertor.html',
    styles: []
})
export class NgxImageConvertorComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

   //  /*
   // * Convert an image
   // * to a base64 url
   // */
   //  private convertImgUrlToBase64(url, callback): any {
   //      const canvas = document.createElement('CANVAS') as HTMLCanvasElement;
   //      const ctx = canvas.getContext('2d');
   //      const img = new Image();
   //      img.crossOrigin = 'Anonymous';
   //      img.onload = () => {
   //          canvas.height = img.height;
   //          canvas.width = img.width;
   //          ctx.drawImage(img, 0, 0);
   //          callback(canvas.toDataURL());
   //      };
   //      img.src = 'https://cors-anywhere.herokuapp.com/' + url;
   //  }


}
