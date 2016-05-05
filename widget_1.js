$(document).ready(function() {
  $('.nav-option').click(function(){
    $(this).addClass('selected')
    // remove selected if a different option is chosen
    $(this).siblings().removeClass('selected')
    // debugger;
  })
})

