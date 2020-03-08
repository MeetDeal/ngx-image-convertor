import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NgxImageConvertorService {

    constructor() { }

    /*
    * Convert an image url to base64
    */
    public convertImgUrlToBase64(url: string, callback: any): any {
        const canvas = document.createElement('CANVAS') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0);
            callback(canvas.toDataURL());
        };
        img.src = 'https://cors-anywhere.herokuapp.com/' + url;
    }

    /*
     * Get canvas by className and convert to base64, choose output image format (png, jpeg, jpg)
    */
    public convertCanvasByClassNameToBase64(classOfCanvas: string, outputFormat: string = 'png'): string {
        const canvas = document.getElementsByClassName(classOfCanvas) as HTMLCollectionOf<HTMLCanvasElement>;
        return canvas[0].toDataURL('image/' + outputFormat);
    }

    /*
     * Get SVG by ID and convert to base64, choose output image format (png, jpeg, jpg)
    */
    public convertSvgByIdToBase64(idSvg: string, width: number, height: number, outputFormat: string = 'png', callback) {

        const svgData = 'data:image/svg+xml;base64,' +
            btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(document.getElementById(idSvg)))));

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = width;
        canvas.height = height;

        const image = new Image();

        image.onload = () => {
            context.clearRect(0, 0, width, height);
            context.drawImage(image, 0, 0, width, height);
            const data = canvas.toDataURL('image/' + outputFormat);
            callback(data);
        };
        image.src = svgData;
    }

}
