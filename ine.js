function getgalery(){
    let url = 'http://localhost:8080';
    let iterator = fetch(url);
    iterator
      .then(response => response.json())
      .then(post => {
        for(i = 0 ; i<post.res.length; i++){
          document.getElementById("demo").innerHTML+=('<img class="col-md-6" src="./image/'+post.res[i]+'">')
        }
        });
}
function show(){
  document.getElementsByClassName("contact_list")[0].style.display = "block"
}
