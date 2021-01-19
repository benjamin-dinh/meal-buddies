// import firebase from "firebase/app";
// import "firebase/database";

var database = firebase.database();
var storage = firebase.storage();
var submitButton = document.getElementById("submitButton");
var storagePath = storage.ref('/images');

submitButton.addEventListener('click',(e) => { 
  var submitButton = document.getElementById("submitButton");
  submitButton.value = "Uploading...";
  var organization= document.getElementById("organization").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var website = document.getElementById("website").value;
  var days = document.getElementById("days").value;
  var open = document.getElementById("open").value;
  var close = document.getElementById("close").value;
  var image = document.getElementById("image").files[0];
  if (image!=null){
    var imageData = {
      contentType:image.type
    };
  }
  var comments = document.getElementById("comments").value;
  console.log(comments);
  e.preventDefault();
  const task = storagePath.child(organization).put(image,imageData);
  task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      console.log(url);
      alert("Submission Successful");
      database.ref('/userdata/'+organization).set({
        address: address,
        city: city,
        state: state,
        email: email,
        phone: phone,
        website: website,
        days: days,
        open: open,
        close: close,
        image: url,
        comments: comments
      });
      document.getElementById("organization").value = "";
      document.getElementById("address").value = "";
      document.getElementById("city").value = "";
      document.getElementById("state").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("website").value = "";
      document.getElementById("days").value = "";
      document.getElementById("open").value = "";
      document.getElementById("close").value = "";
      document.getElementById("image").style.color = "transparent";
      document.getElementById("comments").value = "";
      document.getElementById("submitButton").value = "Submit";
    });
});


var ref = database.ref('/userdata/')
ref.on("value", function(snapshot) {
  snapshot.forEach(function(organization) {
    // gets organization name
    console.log(organization.key);
    organization.forEach(function(data){
      // gets all info about organization
      console.log(data.key +": " + data.val());
    });
  });
})

// // hard coded in value, need to change
// var dataLength = 5;
// var ref = database.ref('/userdata/')
// for (let i = 0; i < dataLength; i++) {
//   // idk if i'm calling the organization right
//   // var organization = firebase.auth().currentUser;
//   ref
//     .ref("/userdata/" + organization)
//     .once("value")
//     .then(snapshot => {
//       var addressInfo = snapshot.val() && snapshot.val().address;
//       var cityInfo = snapshot.val() && snapshot.val().city;
//       var stateInfo = snapshot.val() && snapshot.val().state;
//       var emailInfo = snapshot.val() && snapshot.val().email;
//       var phoneInfo = snapshot.val() && snapshot.val().phone;
//       var websiteInfo = snapshot.val() && snapshot.val().website;
//       var daysInfo = snapshot.val() && snapshot.val().days;
//       var openInfo = snapshot.val() && snapshot.val().open;
//       var closeInfo = snapshot.val() && snapshot.val().close;
//       var imageInfo = snapshot.val() && snapshot.val().image;

//       console.log(cityInfo)  
    
//       var name = document.getElementById("name").value;
//       var days = document.getElementById("days").value;
//       var image = document.getElementById("image").files[0];
    
//       organization.innerHTML = organization;
//       days.innerHTML = daysInfo;
//     });
// }