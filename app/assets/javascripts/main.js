$(document).ready(function() {

  // var model = new RedditList();
  // var view = new RedditView();
  // var controller = new RedditController(model,view);

  $.ajax({
    url: 'https://api.reddit.com',
  }).done(function(response) {
    posts = response.data.children
    for (var i = 0; i < posts.length; i++) {
      postData = posts[i].data
      $('ul').append('<li><a href="#" data-api-href="https://api.reddit.com/user/'+postData.author+'/submitted">'+postData.author+'</a></li>')
    }
  })

  $('ul').on('click', 'li > a', function(event) {
    event.preventDefault();
    link = $(this).attr('data-api-href')
    $.get(link)
    .done(function(response){
      users_posts = response.data.children
      for (var i = 0; i < users_posts.length; i++) {
        debugger
      };
    })
  })

})


// MODEL
// var RedditPost = function(response_object) {
//   this.
// };
