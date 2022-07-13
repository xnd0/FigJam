





const post = async () => {

  //make these good
  const song_name = document.querySelector('#song_name').value.trim();
  const artist_name = document.querySelector('#artist_name').value.trim();
  const comment_text = document.querySelector('#comment_text').value.trim();

  const response = await fetch(`/api/songs`, {
    method: 'POST',
    body: JSON.stringify({ song_name, artist_name, url, comment_text }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/songs');
  } else {
    alert('Failed to create project');
  }
  };
  
  document.querySelector('#post').addEventListener('click', logout);
  