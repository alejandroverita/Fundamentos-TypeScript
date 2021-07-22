"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("Title: " + picture.title + " \n                  Date: " + picture.date + " \n                  Orientation: " + picture.orientation);
}
var myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Test Titleeee',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test'//Error
});
function generatePicture(config) {
    var pic = {
        title: 'Default',
        date: '2020-03',
    };
    if (config.title) {
        //Si nos llega el parametro titulo, lo vamos a usr para la generaciond e nuetro objeto
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log('Picture', picture);
picture = generatePicture({ title: 'Travel Pic' });
console.log('Picture', picture);
var user;
user = {
    id: 10,
    username: 'Alejandro',
    isPro: true,
};
console.log('User', user);
user.username = 'Paparazzi';
// user.id = 9; //Error!
console.log('User', user);
