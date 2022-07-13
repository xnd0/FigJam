let url;
const post = async (event) => {
  event.preventDefault();
  // console.log(url);
    // const response = await fetch('/api/users/logout', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    // });
  
    // if (response.ok) {
    //   document.location.replace('/');
    // } else {
    //   alert(response.statusText);
    // }

  };
  var myWidget = cloudinary.createUploadWidget({
  cloudName: 'deubd4mph', 
  uploadPreset: 'paup0jwu'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
      url = result.info.url;
      const image = document.createElement("img");
      image.setAttribute("src", url);
      const songPhoto = document.querySelector(".song-photo");
      songPhoto.append(image);
    }
  }
)

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);
  document.querySelector('.song-form').addEventListener('submit', post);
   