$(document).ready(function(){
  // we load the json file in the html and parse it here
  // to avoid cross origin requests in chrome
  var json_data = JSON.parse(data)
  var user_data = json_data[0]
  // populate the html with the data we got from the json
  $('#name').text(user_data.name)
  $('#description').text(user_data.description)
  $('#views').text(user_data.views)
  $('#comments').text(user_data.comments)
  $('#likes').text(user_data.likes)
  // debugger;

  $('#profile-data .likes-span').click(function(){
    $(this).toggleClass('active')
    var current_likes = parseInt($(this).text())
    // check if the like button has been clicked
    // to determine whether to add or remove a like
    if($(this).hasClass('active')){
      current_likes += 1
    }
    else{
      current_likes -= 1
    }
    // we only want to change the text in the p tag,
    // not the entire span
    $(this).children('p').text(current_likes)
    // debugger;
  })
})