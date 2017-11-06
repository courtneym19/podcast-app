(function() {
  function Post($firebaseArray) {
    var ref = firebase.database().ref().child("posts");
    var posts = $firebaseArray(ref);

    return {
      all: posts
    }
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
