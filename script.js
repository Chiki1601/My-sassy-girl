window.onload = hide_on_min_window_width;
const inputs=document.querySelectorAll('.adjust input');

function adjust()
{
  const suffixe= this.dataset.sizing || '';
document.documentElement.style.setProperty("--"+this.name, this.value + suffixe);
}

inputs.forEach(input => input.addEventListener('change',adjust) );


function set_random_color_to_box_randomly_on_click(box){
    var opacite=0.7;
    var color = '#'; // hexadecimal starting symbol
    var letters = '0123456789ABCDEF'.split(''); //hexadecimal color letters
 //For loop that will create random hexadecimal value.
    for (var i = 0; i < 6; i++) {
     color += letters[Math.round(Math.random() * 15)];
    }
   console.log(color);
  box.style.backgroundColor=color;
  box.style.opacity=opacite;
}



function hide_on_min_window_width(){
     $(".alert_div").addClass("hide");     
  var elements = document.querySelectorAll(".full-container");
       if (window.matchMedia('(max-width: 1200px)').matches)         { 
          console.log("yyyyyyyy");     
              elements.forEach(function(elem){
               elem.classList.add('hide');
                 $(".alert_div").removeClass("hide");
             });
              
       }
      
    
}
window.addEventListener('resize', function(){
  $(".alert_div").addClass("hide");
  var elements = document.querySelectorAll(".full-container");
       if (window.matchMedia('(max-width: 1200px)').matches){       
           
              elements.forEach(function(elem){
               elem.classList.add('hide');
                 $(".alert_div").removeClass("hide");
             });
              
       }
  else{
              elements.forEach(function(elem){
               elem.classList.remove('hide');
                 $(".alert_div").addClass("hide");
             });
      }
});