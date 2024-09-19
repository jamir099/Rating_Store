const Store = require('../models/Store');

exports.addStore = async (req, res) => {
  const { name, email, address } = req.body;
  try {
    const store = new Store({ name, email, address });
    await store.save();
    res.json(store);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.rateStore = async (req, res) => {
  const { rating } = req.body;
  try {
    const store = await Store.findById(req.params.id);
    if (!store) return res.status(404).json({ msg: 'Store not found' });

    const existingRating = store.ratings.find(r => r.userId.toString() === req.user.id);
    if (existingRating) {
      existingRating.rating = rating; // Update rating
    } else {
      store.ratings.push({ userId: req.user.id, rating }); // Add new rating
    }
    await store.save();
    res.json(store);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
