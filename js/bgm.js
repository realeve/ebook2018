var audioInit = function() {
  $('#autoplay').attr('src', './bgm/audio.m4a');
  var audio = document.getElementById('autoplay');
  var controller = document.getElementById('musicBtn');
  var controllerHint = document.getElementById('musicBtnTxt');
  audio.volume = 0.8;

  function pause() {
    controllerHint.style.display = '';
    if (audio.paused) {
      audio.play();
      controller.className = 'music-btn on';
      controllerHint.innerHTML = '开始';
    } else {
      audio.pause();
      controller.className = 'music-btn';
      controllerHint.innerHTML = '关闭';
    }

    setTimeout(function() {
      controllerHint.style.display = 'none';
    }, 1000);

  }
  $('#musicBtn').click(function() {
    pause();
  })
}();
