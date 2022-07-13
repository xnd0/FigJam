// ------------------------- //
// ----- homeRoutes.js ----- //
// ------------------------- //


const router = require('express').Router()
// const Song = require('../models/song.js');
// const Song = require('../models/Song');
const { Song , Comment } = require('../models');

// GET all songs 
router.get('/', async (req, res) => {
    const songData = await Song.findAll({
        include : [{ model: Comment }]
    })
    console.log(songData);

    // Serialize data so the template can read it

    const songs = songData.map((song) => song.get({ plain: true }));
    console.log("-----------------------------");
    console.log(songs);
    console.log(songs[0].comments);
    res.render('home', { songs , logged_in: req.session.logged_in });
    // res.json(songs);
});


router.get('/add-song', async (req, res) => {
    const songData = await Song.findAll()
        console.log(songData);

    // Serialize data so the template can read it
    const songs = songData.map((song) => song.get({ plain: true }));

        res.render('all', { songs , logged_in: req.session.logged_in });
        // res.json(songs);
});


// View song list
router.get('/songlist', async (req, res) => {
    const songData = await Song.findAll()
        console.log(songData);

    // Serialize data so the template can read it
    const songs = songData.map((song) => song.get({ plain: true }));

        res.render('songlist', { songs, logged_in: req.session.logged_in });
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
