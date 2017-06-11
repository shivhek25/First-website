/*alert('Welcome to my page!');
var name=document.getElementsByClassName('Main Name');
alert(name);*/
main()
{
  var $name= $('.main');
  alert($name);
  $('.main').hide();
  $('.main').fadeIn(1000);
  $('.values').hide();
  $('.headings').on('click',function{
    //$('.values').show();
    //$(this).next().toggle();
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Seen');
  });

}
$(document).ready(main);
