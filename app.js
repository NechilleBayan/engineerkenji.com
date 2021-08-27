const linkedIn = document.querySelector(".link");

const toIcon = '<a href="https://www.linkedin.com/in/engrkenjitanaka/"><img src="globals/transparentLI.png" alt="LinkedIn icon"></a>';


$( "div.contact" )
  .mouseenter(function() {
    // $( this ).delay(3000).fadeIn();
    $( this ).find( "div.hover-area" ).html(toIcon);
  })
  .mouseleave(function() {
    // $( this ).delay(3000).fadeIn();
    $( this ).find( "div.hover-area" ).html( "<h2 id='link'>Get in touch with me :)</h2>" );
  });
