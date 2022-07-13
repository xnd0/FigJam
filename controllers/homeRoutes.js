// ------------------------- //
// ----- homeRoutes.js ----- //
// ------------------------- //


const router = require('express').Router()
// const Song = require('../models/song.js');
const Song = require('../models/Song');


// GET all songs 
router.get('/', async (req, res) => {
    const songData = await Song.findAll()
    console.log(songData);

    // Serialize data so the template can read it
    const songs = songData.map((song) => song.get({ plain: true }));

    res.render('home', { songs });
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


// View song list
router.get('/songlist', async (req, res) => {
    const songData = await Song.findAll()
        console.log(songData);

    // Serialize data so the template can read it
    const songs = songData.map((song) => song.get({ plain: true }));

        res.render('songlist', {songs});
        // res.json(songs);
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;
