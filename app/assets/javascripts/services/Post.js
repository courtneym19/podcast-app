(function() {
  function Post($firebaseArray) {
    var posts = {};

    var ref = firebase.database().ref().child("posts");
    var posts = $firebaseArray(ref);
    Post.all = posts;

    Post.wordLimit = function(body){
      var limit = null;
      if (body.length <= 275){
        limit = body.length;
      }
      else{
        for (var i = 276; i < 300; i++){
          if (/ $/.test(body[i])){
            limit = i;
          }
        }
      }

      return limit;
    }

    return Post;
  }

  angular
    .module('podcastApp')
    .factory('Post', ['$firebaseArray', Post]);
})();

  // { title: '', number: '', date: '', author: '',
  //   description: '',
  //   imgUrl: '', imgAlt: '',
  //   content: ''
  // },

  // var posts = [
  //   { title: 'Pilot Episode', number: '1', date: '7/1/79', author: 'Courtney Miller',
  //     snippet: 'In our pilot interview, Levar Burton of Reading Rainbow and Star Trek fame reads to us from childhood classics',
  //     imgUrl: 'http://i65.tinypic.com/34gr1wi.jpg', imgAlt: 'LeVar',
  //     content: '',
  //     postUrl: ''
  //   },
  // ];
