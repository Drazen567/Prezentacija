
    function toggleMusic(civilizacija) {
      const audio = document.getElementById(`audio-${civilizacija}`);
      const playIcon = document.getElementById(`play-icon-${civilizacija}`);
      if (audio.paused) {
        audio.play();
        playIcon.textContent = "⏸";
      } else {
        audio.pause();
        playIcon.textContent = "▶";
      }
    }


    ['egipat', 'grcka', 'indija'].forEach(civilizacija => {
      const audio = document.getElementById(`audio-${civilizacija}`);
      const progress = document.getElementById(`progress-${civilizacija}`);
      const currentTimeDisplay = document.getElementById(`current-time-${civilizacija}`);
      const durationDisplay = document.getElementById(`duration-${civilizacija}`);

      audio.addEventListener("timeupdate", () => {
        const progressValue = (audio.currentTime / audio.duration) * 100;
        progress.value = progressValue || 0;
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        durationDisplay.textContent = formatTime(audio.duration);
      });

      progress.addEventListener("input", (e) => {
        const seekTime = (e.target.value / 100) * audio.duration;
        audio.currentTime = seekTime;
      });

      audio.addEventListener("loadedmetadata", () => {
        durationDisplay.textContent = formatTime(audio.duration);
      });
    });


    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
    }
