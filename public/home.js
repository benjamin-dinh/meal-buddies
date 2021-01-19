var database = firebase.database();
var ref = database.ref('/userdata/')
var post = document.getElementById("posts_wrapper");

function closeOverlay() {
    document.getElementById("overlay").className = "hidden";
}

ref.on("value", function(snapshot) {
    snapshot.forEach(function(organization) {
        // gets organization name
        console.log(organization.key);
        var div = document.createElement('div');
        div.classList.add("a_post");
        div.id = organization.key;
        var img = document.createElement('img');
        img.id = organization.key;
        var innerdiv = document.createElement('div');
        var h1 = document.createElement('h1');
        h1.innerHTML = organization.key;
        var h2 = document.createElement('h2');
        innerdiv.appendChild(h1);
        innerdiv.appendChild(h2);
        div.appendChild(img);
        div.appendChild(innerdiv)
        post.appendChild(div)
        img.src = organization.child("image").val();
        h2.innerHTML = organization.child("days").val();
        h2.innerHTML += "<br>";
        if (organization.child("close").val()!=""){
            h2.innerHTML += organization.child("open").val();
        }
        if (organization.child("open").val()!="" && organization.child("close").val()!=""){
            h2.innerHTML += " - ";
            h2.innerHTML += organization.child("close").val();
        }
    });
    var posts = document.getElementsByClassName("a_post");
    for (var i=0; i<posts.length; i++){
        posts[i].addEventListener('click', (e) => {
            organizationText = e.target.id;
            organization = snapshot.child(organizationText);
            var name = document.getElementById("businessname");
            name.innerHTML = organizationText;
            var city = document.getElementById("city");
            city.innerHTML = organization.child("city").val()+", ";
            city.innerHTML += organization.child("state").val();
            var location = document.getElementById("address");
            var temp = document.createElement("div");
            var iconlocation = document.createElement('i');
            iconlocation.classList.add("fas");
            iconlocation.classList.add("fa-map-marker-alt");
            temp.append(iconlocation);
            location.innerHTML = temp.innerHTML;
            location.innerHTML += organization.child("address").val();
            var time = document.getElementById("hours");
            var temp = document.createElement("div");
            var icontime = document.createElement('i');
            icontime.classList.add("fas");
            icontime.classList.add("fa-calendar");
            temp.append(icontime);
            time.innerHTML = temp.innerHTML;
            if (organization.child("close").val()!=""){
                time.innerHTML += organization.child("open").val();
            }
            if (organization.child("open").val()!="" && organization.child("close").val()!=""){
                time.innerHTML += " - ";
                time.innerHTML += organization.child("close").val();
            }
            var phone = document.getElementById("phone");
            var temp = document.createElement("div");
            var iconphone = document.createElement('i');
            iconphone.classList.add("fas");
            iconphone.classList.add("fa-phone");
            temp.append(iconphone);
            phone.innerHTML = temp.innerHTML;
            phone.innerHTML +=organization.child("phone").val();
            var image = document.getElementById("imageFill");
            image.src = organization.child("image").val();
            var website = document.getElementById("website");
            website.href=organization.child("website").val();
            document.getElementById("overlay").className = "visible";
            // var overlay = document.getElementById("overlay_container");
            // var temp = document.createElement('div');
            // var overlaydiv = document.createElement('div');
            // overlaydiv.id = ("post_text");
            // var name = document.createElement('h1');
            // name.innerHTML = organizationText;
            // var location = document.createElement('h3');
            // location.innerHTML = organization.child("city").val()+", ";
            // location.innerHTML += organization.child("state").val();
            // var timeparagraph = document.createElement('p');
            // var icontime = document.createElement('i');
            // icontime.classList.add("fas");
            // icontime.classList.add("fa-calendar");
            // timeparagraph.appendChild(icontime);
            // if (organization.child("close").val()!=""){
            //     timeparagraph.innerHTML += organization.child("open").val();
            // }
            // if (organization.child("open").val()!="" && organization.child("close").val()!=""){
            //     timeparagraph.innerHTML += " - ";
            //     timeparagraph.innerHTML += organization.child("close").val();
            // }
            // var addressparagraph = document.createElement('p');
            // var iconaddress = document.createElement('i');
            // iconaddress.classList.add("fas");
            // iconaddress.classList.add("fa-map-marker-alt");
            // addressparagraph.appendChild(iconaddress);
            // addressparagraph.innerHTML += organization.child("address").val();
            // var phoneparagraph = document.createElement('p');
            // var iconphone = document.createElement('i');
            // iconphone.classList.add("fas");
            // iconphone.classList.add("fa-phone");
            // phoneparagraph.appendChild(iconphone);
            // phoneparagraph.innerHTML += organization.child("phone").val();
            // if (organization.child("website").val()!="") {
            //     var website = document.createElement('button');
            //     var button = document.createElement('a');
            //     button.innerHTML = "Visit Website";
            //     button.style.textDecoration = "none";
            //     button.style.color = "white";
            //     button.href=organization.child("website").val();
            //     website.appendChild(button);
            // }
            // overlaydiv.appendChild(location);
            // overlaydiv.appendChild(timeparagraph);
            // overlaydiv.appendChild(addressparagraph);
            // overlaydiv.appendChild(phoneparagraph);
            // if (organization.child("website").val()!="") {
            //     overlaydiv.appendChild(website);
            // }
            // var imagediv = document.createElement('div');
            // imagediv.id="post_img";
            // // var x = document.createElement('h1');
            // // x.innerHTML = "&times;"
            // // x.id = "x";
            // // x.onclick = closeOverlay();
            // var image = document.createElement('img');
            // image.src = organization.child("image").val();
            // // imagediv.appendChild(x);
            // imagediv.appendChild(image);
            // temp.appendChild(overlaydiv);
            // temp.appendChild(imagediv);
            // overlay.innerHTML = temp.innerHTML;
            // document.getElementById("overlay").className = "visible";
        });
    }
   
});



  
function closeOverlay() {
    document.getElementById("overlay").className = "hidden";
  }
  
  
