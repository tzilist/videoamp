import { MongoClient } from 'mongodb';

const mongoURL = 'mongodb://localhost:27017/videoamp';

/**
* Function that inserts ads found into mongodb
* @param {object} req - Express request object
* @param {object} res - Express response object
* @param {function} next - Express next middleware function
**/

function insertAds(req, res, next) {
  const ads = req.body;
  // connect to database
  MongoClient.connect(mongoURL, (connectErr, db) => {
    if (connectErr) throw connectErr;
    // insert information into database
    db.collection('ads').insertOne(ads, (dbErr) => {
      if (dbErr) throw dbErr;
      db.close();
    });
  });
  next();
}

export default insertAds;
