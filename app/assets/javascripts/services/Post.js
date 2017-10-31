var app = angular.module('podcastApp');

app.factory('Post', ['Episode', function(Episode){
  var Post = {};

  var posts = [
    { title: 'Pilot Episode', number: '1', date: '7/1/79', author: 'Courtney Miller',
      snippet: 'In our pilot interview, Levar Burton of Reading Rainbow and Star Trek fame reads to us from childhood classics',
      imgUrl: 'http://i65.tinypic.com/34gr1wi.jpg', imgAlt: 'LeVar',
      content: '',
      postUrl: ''
    },
  ];




  Post.getPosts = function(){
    return posts;
  }

  return Post;
}]);

// { title: '', number: '', date: '', author: '',
//   description: '',
//   imgUrl: '', imgAlt: '',
//   content: ''
// },
