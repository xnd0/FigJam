const router = require('express').Router()
const Song = require('../models/song.js');



//GET all songs (not sure about my syntax here, please make corrections if needed)
router.get('/', async (req, res) => {
    const songData = await Song.findAll()
        console.log(songData);

    // Serialize data so the template can read it
    const songs = songData.map((song) => song.get({ plain: true }));

        res.render('post', {songs});
});

// //GET a single song
// router.get('/:id', (req, res) => {
//     Song.findByPk(req.params.id).then((songData) =>{
//         res.json(songData)
//     });
// });

module.exports = router;
    