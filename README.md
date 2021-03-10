# HOTPIZZA

![Hotpizza above the fold section](https://github.com/petruborta/developer-portfolio/blob/master/assets/images/hotpizza-720w.jpg?raw=true)

Business lunch single-page website.

## Table of contents

* [Demo](#demo)
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## Demo

Here is a working live demo: <https://pizzeriahotpizza.com/>

## Technologies

* Development
  * [HTML](https://www.w3schools.com/html/)
  * [JavaScript](https://www.w3schools.com/js/)
  * [SASS](https://sass-lang.com/)
  * [Google Maps API JavaScript](https://developers.google.com/maps/documentation/javascript/overview)
* Production / Hosting
  * [AWS S3](https://aws.amazon.com/s3/)
  * [AWS Route 53](https://aws.amazon.com/route53/)
  * [AWS CloudFront](https://aws.amazon.com/cloudfront/)
  * [ACM (Amazon Certificate Manager)](https://aws.amazon.com/certificate-manager/)

## Setup

* Close this repository to your local machine

  `$ git clone <this_repo_url>`

* In `index.html`, at line 538, replace the value of `key` parameter with your Google Maps API JavaScript key

```javascript
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly" async></script>
```

* In VS Code install _Live Sass Compiler_ extension to compile `.scss` files to `.css`
* In VS Code install _Live Server_ extension to view the project

## Status

Project is: _no longer continue_ because for this project I focused only on front-end.

## Inspiration

Front-end design inspired by [Art District Kitchen](https://artsdistrictkitchen.com/)

## Contact

Created by [@petruborta](https://petruborta.com/) - feel free to contact me!
