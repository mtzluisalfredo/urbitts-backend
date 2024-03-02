// import createError from 'http-errors';
import db from '@/database';
// import redisClient from '@/libs/redis';

/**
 * POST /tweets
 * Create tweet request
 */
const createParking = async (req, res, next) => {
  // {name: "parking 1", location: {lat: "12", lng:"233"}, capacity: 10}
  try {
    const { id: userId } = req.user;
    const realUser = await db.models.user.findByPk(userId);
    const { location, name, capacity } = req.body;

    // Create tweet
    const parkingData = {
      userId: realUser.id,
      name,
      capacity,
      location,
    };

    // TODO
    const tweet = await db.models.parking
      .create(parkingData); // { fields: ['name', 'location', 'capacity', 'userId'] }

    // Save this tweet to redis
    // if (redisClient.connected) {
    //   redisClient.set(`Tweet:${tweet.id}`, JSON.stringify(tweet));
    // }
    return res.status(201).json(tweet);
  } catch (err) {
    console.log('🧑🏽‍💻 ~ createParking ~ err:', err);
    return next(err);
  }
};

export default createParking;
