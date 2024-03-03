import db from '@/database';

const createParking = async (req, res, next) => {
  try {
    const { id: ownerId } = req.user;
    const realUser = await db.models.user.findByPk(ownerId);

    // Create parking
    const parkingData = {
      ownerId: realUser.id,
      ...req.body,
    };
    console.log('🧑🏽‍💻 ~ createParking ~ parkingData:', parkingData);

    // TODO
    const tweet = await db.models.parking
      .create(parkingData);

    return res.status(201).json(tweet);
  } catch (err) {
    return next(err);
  }
};

export default createParking;
