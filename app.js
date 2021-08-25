const linkedIn = document.querySelector(".link");

const toIcon = '<a href="https://www.linkedin.com/in/engrkenjitanaka/"><img src="globals/LinkedIn.png" alt="LinkedIn icon"></a>';

$( "div.contact" )
  .mouseenter(function() {
    $( this ).find( "h2" ).html(toIcon);
  })
  .mouseleave(function() {
    $( this ).find( "h2" ).text( "Get in touch with me" );
  });
