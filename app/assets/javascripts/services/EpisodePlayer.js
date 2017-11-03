angular
  .module('podcastApp')
  .factory('EpisodePlayer', function(Episode, $rootScope){
     var EpisodePlayer = {};

     var currentBuzzObject = null;

     var episodes = Episode.getEpisodes();

     EpisodePlayer.currentEpisode = null;


     var setEpisode = function(episode) {
        if (currentBuzzObject) {
            stopEpisode();
        }
        currentBuzzObject = new buzz.sound(episode.audioUrl, {
            formats: ['mp3'],
            preload: true,
            crossOrigin: true
        });

        currentBuzzObject.bind('timeupdate', function() {
             $rootScope.$apply(function() {
                 EpisodePlayer.currentTime = currentBuzzObject.getTime();
             });
         });

         EpisodePlayer.currentEpisode = episode;
     };

      var playEpisode = function(episode) {
          currentBuzzObject.play();
          episode.playing = true;

          if(currentBuzzObject) {
             var currentEpisodeIndex = getEpisodeIndex(EpisodePlayer.currentEpisode);
             currentBuzzObject.bind('ended', function() {
                 currentEpisodeIndex++;
                 if (currentEpisodeIndex < episodes.length) {
                     var episode = episodes[currentEpisodeIndex];
                     setEpisode(episode);
                     playEpisode(episode);
                 }
                 else {
                   stopEpisode();
                 }
             })
          }

      };

       var stopEpisode = function() {
           currentBuzzObject.stop();
           EpisodePlayer.currentEpisode.playing = null;
       };

        var getEpisodeIndex = function(episode) {
           return episodes.indexOf(episode);
        };

       EpisodePlayer.play = function(episode) {
            episode = episode || EpisodePlayer.currentEpisode;
            console.log(episode.audioUrl);
            if (EpisodePlayer.currentEpisode !== episode) {
                setEpisode(episode);
                playEpisode(episode);
            }

            else if (EpisodePlayer.currentEpisode === episode) {
                if (currentBuzzObject.isPaused()) {
                    playEpisode(episode);
                }
            }

         };

          EpisodePlayer.pause = function(episode) {
              episode = episode || EpisodePlayer.currentEpisode;
             currentBuzzObject.pause();
             episode.playing = false;
          };





          EpisodePlayer.currentTime = null;

          EpisodePlayer.volume = 80;



          EpisodePlayer.previous = function() {
               var currentEpisodeIndex = getEpisodeIndex(EpisodePlayer.currentEpisode);
               currentEpisodeIndex--;

               if (currentEpisodeIndex < 0) {
                   stopEpisode();
               }
               else {
                   var episode = episodes[currentEpisodeIndex];
                   setEpisode(episode);
                   playEpisode(episode);
               }
          };

          EpisodePlayer.next = function() {
              var currentEpisodeIndex = getEpisodeIndex(EpisodePlayer.currentEpisode);
              currentEpisodeIndex++;

              if (currentEpisodeIndex >= episodes.length) {
                  stopEpisode();
              }
              else {
                  var episode = episodes[currentEpisodeIndex];
                  setEpisode(episode);
                  playEpisode(episode);
              }
          };

          EpisodePlayer.setCurrentTime = function(time) {
              if (currentBuzzObject) {
                  currentBuzzObject.setTime(time);
              }
          };

          EpisodePlayer.setVolume = function(volume) {
              if (currentBuzzObject) {
                  currentBuzzObject.setVolume(volume);
                  EpisodePlayer.volume = volume;

              }
          };

          EpisodePlayer.muteVolume = function() {
              if (currentBuzzObject) {
                  currentBuzzObject.toggleMute();
                  var muteButton = document.getElementsByClassName('mute');
                  muteButton[0].classList.toggle('mute-active');
              }

          };


     return EpisodePlayer;
   });
