## **angular-package-library**
[^1]: https://www.markdownguide.org/cheat-sheet/




```
 <div class="terminal" [ngSwitch]="selection.value">
      <pre *ngSwitchDefault>ng generate component xyz</pre>
      <pre *ngSwitchCase="'material'">ng add @angular/material</pre>
      <pre *ngSwitchCase="'pwa'">ng add @angular/pwa</pre>
      <pre *ngSwitchCase="'dependency'">ng add _____</pre>
      <pre *ngSwitchCase="'test'">ng test</pre>
      <pre *ngSwitchCase="'build'">ng build</pre>
  </div>
 ```

- [x] Write the press release
- [x] Update the website
- [x] Contact the media


~~The world is flat.~~

That is so funny! :joy:

H~2~O

:zap: 

## **Tạo mới Dự án Không phải Application**
> :point_right: `ng new my-workspace --no-create-application` 
## **Tạo mới Library**
> :point_right: `cd my-workspace`
> :point_right: `ng generate library my-lib`

## **Building**
> :point_right: ng build my-lib

## ** Đăng nhập vào npm **
>:point_right: [Link video hướng dẫn chi tiết. Tham khảo tại đây.](https://www.youtube.com/watch?v=ffhakPS36x0)
1. Tạo tài khoản npm
2. Tạo Organization
3. Đăng nhập npm trên terminal `npm login`
- :shipit: Nhập tài khoản 
- :key: Nhập Password
- :envelope: Nhập email

## ** Setup **

```
"name": "@developer-ben/component-library",
  "version": "1.0.2",
  "description": "Surport component Angular 14",
  "author": {
    "name": "lmtri1908",
    "email": "lmtri1908@gmail.com",
    "url": "https://www.npmjs.com/~lmtri1908"
  },
  "repository": {
    "type": "Git",
    "url": "https://github.com/letriit97/ng-library/tree/main/devben-library"
  },
  "keywords": [
    "component-library",
    "@developer-ben",
    "@developer-ben/component-library",
    "component library"
  ],
```


## ** Public lên NPM **
1. :open_file_folder: trỏ vào thư mục publish `cd dist/ my-lib`
2. :pencil2: sử dụng lệnh `npm publish` hoặc `npm publish --access=public`


