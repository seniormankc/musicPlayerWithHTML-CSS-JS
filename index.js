let card=document.querySelector('.card')
let prev=document.querySelector('.back')
let pause=document.querySelector('.pause')
let play=document.querySelector('.play')
let next=document.querySelector('.forword')
let audio=document.querySelector('audio')
let progress=document.querySelector('.progress')
let progressbar=document.querySelector('.progressbar')
let titlesong=document.querySelector('h4')
let imagess=document.querySelector('img')
let rotationdiv=document.querySelector('.card div')
//songs title put in an array
const songs=['Brown_Joel_Ft_Davido_Ft_BoyPee Ogechi','Egoakokwa','Eziwanne','Rema_Ft_Shallipopi_-_BENIN_BOYS']

//picture title put in an array
const pictures=['images/ogechi.webp','images/Egoakokwa.jpg','images/Eziwanne.jpg','images/Rema_Ft_Shallipopi_-_BENIN_BOYS.webp']

//a counter that would be increamented or decremented along the code
let counter=0

//an event listener that would occur when the forword button in the html isclicked
next.addEventListener('click',change)

//the function that would occur if the next/forword button is clicked

function change(){
  rotationdiv.className='image'
  counter++//counter has been increamented
  //if counter is greater than the array it should be equal to zero
  if(counter>pictures.length-1){
       counter=0
  }
  //the songtitle, image picture and audio src should get their value from the array of songs and picture
  imagess.src=pictures[counter]
  titlesong.innerHTML=songs[counter]
  audio.src=`audio/${songs[counter]}.mp3`

  //.play is a function in javascript that allows the audio tag to play a song
  audio.play()
}

//a function when the play button is being clicked
play.addEventListener('click',function(){
       rotationdiv.className='image'
       pause.style.display='block'
       play.style.display='none'
       audio.play()
       
})

//a function when the pause button is being clicked
pause.addEventListener('click',function(){
       if(rotationdiv.classList.contains('image')){
              rotationdiv.classList.remove('image')
       }
       play.style.display='block'
       pause.style.display='none'
       //.pause() is a function that pauses the audio tagin the html
       audio.pause()
       
})

//a function when the prev or back button is being clicked almost like the next button but it decreament the counter
prev.addEventListener('click',function(){
       rotationdiv.className='image'
       counter--
       if(counter<0){
              counter=pictures.length-1
       }
       imagess.src=pictures[counter]
       titlesong.innerHTML=songs[counter]
       audio.src=`audio/${songs[counter]}.mp3`
       audio.play()
})

//this is an eventListener that occurs when the audio has ended so so we call up the change function we created so it can be able to change the songs
audio.addEventListener('ended',change)

//this a function that would the progress bar moving
audio.addEventListener('timeupdate',function(e){
      const{duration, currentTime}=e.target
      console.log(duration)
      console.log(currentTime)
      let progressmoving=(currentTime/duration)*100
      
      progress.style.width=`${progressmoving}%`
})

//this is a function that allows us to click on anywhere of our progress bar to get the song duration at that moment
progressbar.addEventListener('click',function(e){
   let widths=this.clientWidth
   let getxasix=e.offsetX
   let duration=audio.duration

   audio.currentTime=(getxasix/widths)*duration
})



