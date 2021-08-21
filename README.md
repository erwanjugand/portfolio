# portfolio-front

> My personal portfolio

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```


## Encoding images

### Webp

Install : https://www.tecmint.com/convert-images-to-webp-format-in-linux/

Quality 90 for x1  
Quality 85 for x2  
Quality 80 for x3  

``` bash
cwebp -q 95 -resize 100 100 image.jpg -o image.webp --preset photo
```
