document.addEventListener('DOMContentLoaded', function () {
  const video1 = document.getElementById('video1');
  const video2 = document.getElementById('video2');

  var playButton1 = document.getElementById('playButton_1');
  var pauseButton1 = document.getElementById('pauseButton_1');
  var stopButton1 = document.getElementById('stopButton_1');
  var muteButton1 = document.getElementById('muteButton_1');
  var volumeSlider1 = document.getElementById('volumeSlider_1');

  var playButton2 = document.getElementById('playButton_2');
  var pauseButton2 = document.getElementById('pauseButton_2');
  var stopButton2 = document.getElementById('stopButton_2');
  var muteButton2 = document.getElementById('muteButton_2');
  var volumeSlider2 = document.getElementById('volumeSlider_2');

 
  playButton1.addEventListener('click', function () {
    video1.play();
  });

  pauseButton1.addEventListener('click', function () {
    video1.pause();
  });

  stopButton1.addEventListener('click', function () {
    video1.pause();
    video1.currentTime = 0;
  });

  muteButton1.addEventListener('click', function () {
    video1.muted = !video1.muted;
  });

  volumeSlider1.addEventListener('input', function () {
    video1.volume = volumeSlider1.value;
  });

  playButton2.addEventListener('click', function () {
    video2.play();
  });

  pauseButton2.addEventListener('click', function () {
    video2.pause();
  });

  stopButton2.addEventListener('click', function () {
    video2.pause();
    video2.currentTime = 0;
  });

  muteButton2.addEventListener('click', function () {
    video2.muted = !video2.muted;
  });

  volumeSlider2.addEventListener('input', function () {
    video2.volume = volumeSlider2.value;
  });
});
