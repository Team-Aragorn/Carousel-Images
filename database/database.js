/* eslint-disable no-plusplus */
const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/imagesData', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Connected to Database'); });


const ImageData = mongoose.model('ImageData', new Schema({
  gameTitle: String,
  newPrice: Number,
  preOwnedPrice: Number,
  digitalPrice: Number,
  mainImage: String,
  images: [String],
}), 'imagedatas');


const getGameForTopCarousel = (callback) => {
  ImageData.countDocuments().exec((err, count) => {
    if (err) {
      console.log('Error Getting Carousel Images (count)', err);
    } else {
      const random = Math.floor(Math.random() * count);

      ImageData.findOne().skip(random).exec((error, result) => {
        if (error) {
          console.log('Error Getting Carousel Images (findOne)', error);
        } else {
          callback(null, result);
        }
      });
    }
  });
};

module.exports.getGameForTopCarousel = getGameForTopCarousel;
