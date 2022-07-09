SELECT songs.song_name AS song,
FROM
---not sure what to put in line 2 and 4--
LEFT JOIN
ON artists.song_name=song.id
ORDER BY songs.song_name;