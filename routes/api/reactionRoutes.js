const router = require('express').Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Reaction route');
});

module.exports = router;