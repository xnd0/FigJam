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

    res.render('post', { songs });
    // res.json(songs);
});



module.exports = router;
