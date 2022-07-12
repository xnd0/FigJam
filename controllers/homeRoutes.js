const router = require('express').Router()
const Song = require('../models/song.js');



//GET all songs (not sure about my syntax here, please make corrections if needed)
router.get('/', async (req, res) => {
    const songData = await Song.findAll()
        console.log(songData);

    // Serialize data so the template can read it
    const songs = songData.map((song) => song.get({ plain: true }));

        res.render('post', {songs});
        // res.json(songs);
});

router.get('/add-song', async (req, res) => {
    const songData = await Song.findAll()
        console.log(songData);

    // Serialize data so the template can read it
    const songs = songData.map((song) => song.get({ plain: true }));

        res.render('all', {songs});
        // res.json(songs);
});
// //GET a single song
// router.get('/:id', (req, res) => {
//     Song.findByPk(req.params.id).then((songData) =>{
//         res.json(songData)
//     });
// });

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

module.exports = router;
    