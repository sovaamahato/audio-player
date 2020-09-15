const music = document.querySelector('audio');
const play = document.getElementById('play');

const img = document.querySelector("img");

const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');


let isPlaying = false;

// for play function
const playMusic= function(){
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', "fa-pause");
    img.classList.add('anime');
};

// for pause function
const pauseMusic= function(){
    isPlaying = false;
    music.pause();
    play.classList.replace( "fa-pause",'fa-play');
    img.classList.remove('anime');
};

play.addEventListener('click', function(){
    // if (isPlaying){
    //     pauseMusic();
    // } else {
    //     playMusic();
    // }
    isPlaying ? pauseMusic(): playMusic();
});

// for music data

const songs=[
    {
        name:"sova1",
        title:"Mahi ve",
        artist:"neha kakkar",
    },
    {
        name:"sova2",
        title:"Chal Ghar ",
        artist:"Arijit singh",
    },
    {
        name:"sova3",
        title:"Udayo hawa le",
        artist:"Unknown",
        
    },
    {
        name:"sova4",
        title:"Naino ne  ",
        artist:"Unknown",
        
    },
    {
        name:"sova6",
        title:"dilbar",
        artist:"Neha kakkar,Dhwani bhanusali",
        
    },
]
const loadSong = function(songs){
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/"+songs.name+".mp3";
    img.src="images/"+songs.name+".jpg";

}

songIndex = 0;

// loadSong(songs[4]);
const nextSong = function(){
    songIndex=(songIndex + 1)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const previousSong = function(){
    songIndex=(songIndex - 1+songs.length)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}


next.addEventListener('click', nextSong);
prev.addEventListener('click', previousSong);






