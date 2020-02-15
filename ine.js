function getgalery(){
    let url = 'http://localhost:8080';
    let iterator = fetch(url);
    iterator
      .then(response => response.json())
      .then(post => document.getElementById("demo").innerHTML=(post.res));
}
