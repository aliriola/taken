var play = document.querySelector('#play'),
 	pause = document.querySelector('#pause'),
 	video = document.querySelector('video'),
 	progress = document.querySelector('#progress'),
 	volume = document.querySelector('#volume');


//console.log(play);
 //console.log(pause);
 //console.log(video);
//console.log(progress);
//console.log(volume);

 play.addEventListener('click', function(){
 	video.play();
 });

  pause.addEventListener('click', function(){
 	video.pause();
 });

   video.addEventListener('timeupdate', function(){
 	progress.value = video.currentTime / video.duration;
 });

     volume.addEventListener('change', function(e){
 	video.volume = e.currentTarget.value / 100;
 });
