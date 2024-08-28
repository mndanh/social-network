const router = require('express').Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('User route');
});

module.exports = router;