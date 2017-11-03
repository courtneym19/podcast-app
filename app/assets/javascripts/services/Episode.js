angular
  .module('podcastApp')
  .factory('Episode', function(){
    var Episode = {};

    var episodes = [
      { title: 'Another Title', number: '3', date: '8/15/17', description: 'Description #3', imgUrl: "https://preview.ibb.co/n61Me5/4aa0fed47e216c10752bc3aa15c44b6e.jpg", imgAlt: 'alt 3', postUrl: '', audioUrl: '/assets/sounds/ep1'},
      { title: 'Some Other Title', number: '2', date: '8/8/17', description: 'Best episode ever', imgUrl: "https://preview.ibb.co/n61Me5/4aa0fed47e216c10752bc3aa15c44b6e.jpg", imgAlt: 'alt 2', postUrl: '', audioUrl: '/assets/sounds/ep2'},
      { title: 'Pilot Episode', number: '1', date: '7/1/79', description: 'Interview with LeVar Burton', imgUrl: "http://i65.tinypic.com/219uipx.jpg", imgAlt: 'LeVar', postUrl: '', audioUrl: 'https://archive.org/download/soulspectrumpodcast_gmail_Ep1/ep1'}
    ];

    Episode.getEpisodes = function(){
      return episodes;
    }

    return Episode;
  });


// { title: '', number: '', date: '', description: '', imgUrl: '', imgAlt: '', postUrl: '', audioUrl: ''},
