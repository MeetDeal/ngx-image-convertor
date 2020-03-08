# NgxImageConvertor

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## JavaScript VS Image, and why NgxImageConvertor

This library exists because the management of images, `<canvas>`, `<svg>` and base64 is not optimal with javascript or angular.
<br>
With this library **Angular** you can manage your `<img>` tags, image conversion to base64, canvas conversion to base64, svg tag conversion to base64
> **Note:** This library is in development, it is not yet finished

## How to use

Add import **`NgxImageConvertorService`** to top your ``component.ts``:
```angular2
    import {NgxImageConvertorService} from "ngx-image-convertor";
```

Inject **`NgxImageConvertorService`** to the constructor of your ``component.ts``:
```angular2
    constructor(private imageConvertorService: NgxImageConvertorService) {}
```

## Method List 

##### ConvertSvgByIdToBase64

````
    this.imageConvertorService.convertSvgByIdToBase64( id_of_your_SVG_tag: string, width_of_base64_ouput: number, height_of_base64_ouput: number, output_format: string,
         (base64) => {
              console.log(base64);
         }
    );
````
