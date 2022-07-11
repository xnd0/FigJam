const router = require('express').Router()
const Song = require('../../models/song.js');

//GET all songs (not sure about my syntax here, please make corrections if needed)
router.get('/', (req, res) => {
    Song.findAll().then((songData) => {
        res.json(bookData);
    })
});

//GET a single song
router.get('/:id', (req, res) => {
    Song.findByPk(req.params.id).then((songData) =>{
        res.json(bookData)
    });
});

module.exports = router;
    