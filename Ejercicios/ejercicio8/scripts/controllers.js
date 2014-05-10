(function(){
	'use strict';

	angular.module('controllers',[])
		.controller('IndexCtrl', function($scope, $http){		
           
           var oneDay = 86400,
            date = new Date(),
            unixtimeMs = date.getTime(),
            unixtime = parseInt(unixtimeMs / 1000),
            searchString = "search/.json?q=%28and+%28or+site%3A%27youtube.com%27+site%3A%27vimeo.com%27+site%3A%27youtu.be%27%29+timestamp%3A"+(unixtime - 5*oneDay)+"..%29&restrict_sr=on&sort=top&syntax=cloudsearch",
            domains = [
                '5min.com', 'abcnews.go.com', 'animal.discovery.com', 'animoto.com', 'atom.com',
                'bambuser.com', 'bigthink.com', 'blip.tv', 'break.com',
                'cbsnews.com', 'cnbc.com', 'cnn.com', 'colbertnation.com', 'collegehumor.com',
                'comedycentral.com', 'crackle.com', 'dailymotion.com', 'dsc.discovery.com', 'discovery.com',
                'dotsub.com', 'edition.cnn.com', 'escapistmagazine.com', 'espn.go.com',
                'fancast.com', 'flickr.com', 'fora.tv', 'foxsports.com',
                'funnyordie.com', 'gametrailers.com', 'godtube.com', 'howcast.com', 'hulu.com',
                'justin.tv', 'kinomap.com', 'koldcast.tv', 'liveleak.com', 'livestream.com',
                'mediamatters.org', 'metacafe.com', 'money.cnn.com',
                'movies.yahoo.com', 'msnbc.com', 'nfb.ca', 'nzonscreen.com',
                'overstream.net', 'photobucket.com', 'qik.com', 'redux.com',
                'revision3.com', 'revver.com', 'schooltube.com',
                'screencast.com', 'screenr.com', 'sendables.jibjab.com',
                'spike.com', 'teachertube.com', 'techcrunch.tv', 'ted.com',
                'thedailyshow.com', 'theonion.com', 'traileraddict.com', 'trailerspy.com',
                'trutv.com', 'twitvid.com', 'ustream.com', 'viddler.com', 'video.google.com',
                'video.nationalgeographic.com', 'video.pbs.org', 'video.yahoo.com', 'vids.myspace.com', 'vimeo.com',
                'wordpress.tv', 'worldstarhiphop.com', 'xtranormal.com',
                'youtube.com', 'youtu.be', 'zapiks.com'
            ],
            uri = 'http://www.reddit.com/r/funny/' + searchString + '&limit=100';

            var isVideo = function(videoDomain){
                return (domains.indexOf(videoDomain) !== -1);
            };

            var getVideoData = function(videoObject){
                return {
                    title: videoObject.data.title,
                    thumbnail: videoObject.data.media.oembed.thumbnail_url !== undefined ? videoObject.data.media.oembed.thumbnail_url : 'img/noimage.png'
                };
            }

            $http.get(uri)
                .success(function(response){
                    for(var entry in response.data.children){
                        if(isVideo(response.data.children[entry].data.domain) 
                            && response.data.children[entry].data.score > 1
                            && response.data.children[entry].data.media.oembed){

                            $scope.controllerVideo = getVideoData(response.data.children[entry]);
                            break;
                        }
                    }
                });
		});
})();