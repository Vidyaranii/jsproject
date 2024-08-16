
let now_playing = document.querySelector(".now-playing");
let song_art = document.querySelector(".song-art");
let song_name = document.querySelector(".song-name");
let song_artist = document.querySelector(".song");

let playpause_btn = document.querySelector(".playpause");
let next_btn = document.querySelector(".next");
let prev_btn = document.querySelector(".prev");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let repeat=document.getElementsByClassName("repeat")
// let shuffle=document.getElementById("class")

let rep=document.getElementsByClassName("vidya")
// let se=document.querySelectorAll(".search")
let vid=document.querySelectorAll("option")






let song_index = 0;
let isPlaying = false;
let updateTimer;


let curr_song = document.createElement('audio');


let song_list = [
{
	name: "DJ TILLU2",
	artist: "Broke For Free",
	image: "dj2.jpeg",
	path: "[iSongs.info] 04 - Tillu Square Title Song.mp3"
},
{
	name: "HANU MAN",
	artist: "Tours",
	image: "ha.jpeg",
	path: "[iSongs.info] 06 - Poolamme Pilla.mp3"
},
{
	name: "Kalki",
	artist: "Chad Crouch",
	image: "kalki.jpeg",
	path: "Theme of Kalki.mp3",
},{
    name: "MAD",
	artist: "Chad Crouch",
	image: "mad.jpeg",
	path: "Nuvvu Navvukuntu.mp3",

},
{
    name: " TILLU2",
	artist: "Chad Crouch",
	image: "dj2.jpeg",
	path: "[iSongs.info] 03 - Oh My Lilly.mp3",
},
{
    name: " SALAAR",
	artist: "prabhas",
	image: "saalar.jpeg",
	path: "[iSongs.info] 07 - Vinaraa.mp3",
},
{
    name: "HI NANA",
	artist: "Nani",
	image: "hinana2.jpeg",
	path: "Chedhu Nijam.mp3",
},
{
    name: " PUSHPA-2",
	artist: "Chad Crouch",
	image: "p2.jpeg",
	path: "[iSongs.info] 01 - Pushpa Pushpaa.mp3",
},{
    name: " HI NANA",
	artist: "Nani",
	image: "hinana.jpeg",
	path: "Odiyamma.mp3",
}


];

function loadTrack(song_index) {
   
    clearInterval(updateTimer);
    resetValues();
    
   
    curr_song.src = song_list[song_index].path;
    curr_song.load();
    
   
    song_art.style.backgroundImage = 
        "url(" + song_list[song_index].image + ")";
   song_name.textContent = song_list[song_index].name;
   song_artist.textContent = song_list[song_index].artist;
   
    
   
    updateTimer = setInterval(seekUpdate, 1000);
    
   
    curr_song.addEventListener("ended", nextTrack);
    
    
    }
   
   
    function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
    }
    function playpauseTrack() {
       
        if (!isPlaying) playTrack();
        else pauseTrack();
        }
        
        function playTrack() {
       
        curr_song.play();
        isPlaying = true;
        
        
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
        }
        
        function pauseTrack() {
       
        curr_song.pause();
        isPlaying = false;
        
       
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
        }
        
        function nextTrack() {
       
        if (song_index < song_list.length - 1)
            song_index += 1;
        else song_index = 0;
        
        
        loadTrack(song_index);
        playTrack();
        }
        
        function prevTrack() {
      
        if (song_index > 0)
            song_index -= 1;
        else song_index = song_list.length - 1;
        
        
        loadTrack(song_index);
        playTrack();
        }
       
        function seekTo() {
           
            seekto = curr_song.duration * (seek_slider.value / 100);
            
           
            curr_song.currentTime = seekto;
            }
            
            function setVolume() {
           
            curr_song.volume = volume_slider.value / 100;
            }
            
            function seekUpdate() {
            let seekPosition = 0;
            
            if (!isNaN(curr_song.duration)) {
                seekPosition = curr_song.currentTime * (100 / curr_song.duration);
                seek_slider.value = seekPosition;
            
                
                let currentMinutes = Math.floor(curr_song.currentTime / 60);
                let currentSeconds = Math.floor(curr_song.currentTime - currentMinutes * 60);
                let durationMinutes = Math.floor(curr_song.duration / 60);
                let durationSeconds = Math.floor(curr_song.duration - durationMinutes * 60);
            
                
                if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
                if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
                if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
                if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
            
               
                curr_time.textContent = currentMinutes + ":" + currentSeconds;
                total_duration.textContent = durationMinutes + ":" + durationSeconds;
            }
           
           
            }
            function repeata(){
                curr_song.currentTime=0
            }
            function shufflee(){
                var randIndex=Math.floor(Math.random()*song_list.length)*1
                loadTrack(randIndex)
              playTrack()
            }
           
           
                
loadTrack(song_index);


