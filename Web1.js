alert('Welcome to my page!');
/*var name=document.getElementsByClassName('Main Name');
alert(name);*/
function main()
{
  /*var $name= $('.main');
  alert($name);*/
  $('.main').hide();
  $('.main').fadeIn(1000);
  $('.values').hide();
  $('.headings').on('click',function(){
    //$('.values').show();
    $(this).next().toggle();
    $(this).toggleClass('active');
    //$(this).next().slideToggle(1000);
    $(this).text('Seen');
  });

}
$(document).ready(main);
