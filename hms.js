 WebFontConfig = {
    google: { families: [  'Material+Icons','Roboto+Slab:300,400,700', 'Libre+Franklin:100,300,400,400i,500,600,700,800' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 
