const router = require('express').Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Friend route');
});

module.exports = router;