function closeOverlay() {
  document.getElementById("overlay").className = "hidden";
}


var posts = document.getElementsByClassName("a_post");

for (var i=0; i<posts.length; i++){
  posts[i].addEventListener('click', () => {
      document.getElementById("overlay").className = "visible";})
}
