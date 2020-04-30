let view = e => {
  e = e || '/home';
  import(`discgolf/views/${e}.js`)
  .then(e=>{
    document.title = e.t;
    document.getElementsByTagName('main')[0].innerHTML = e.c;
    if( e.f ) e.f();
  }).catch(e=>{
    alert('Sorry, this page does not exist.');
  });
  document.body.scrollIntoView();
};
window.onhashchange=()=>view(location.hash.slice(1));
view(location.hash.slice(1));