      window.onload = function () {
        document
          .querySelector(".video-background")
          .classList.add("opacity-100");
      };

      const player = document.getElementById("youtube-player");
      const audio = document.getElementById("audio");
      const playButton = document.getElementById("playButton");
      const pauseButton = document.getElementById("pauseButton");
      const volumeSlider = document.getElementById("volume");

      playButton.addEventListener("click", () => {
        audio.play();
        playButton.classList.add("hidden");
        pauseButton.classList.remove("hidden");
      });

      pauseButton.addEventListener("click", () => {
        audio.pause();
        pauseButton.classList.add("hidden");
        playButton.classList.remove("hidden");
      });

      volumeSlider.addEventListener("input", (e) => {
        audio.volume = e.target.value;
      });

      function updateDateTime() {
        const now = new Date();
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "America/Los_Angeles",
        };

        document.getElementById("currentDate").textContent =
          now.toLocaleDateString("en-US", options);

        const timeOptions = {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/Los_Angeles",
        };
        document.getElementById("currentTime").textContent =
          now.toLocaleTimeString("en-US", timeOptions);
      }
      updateDateTime();
      setInterval(updateDateTime, 10000);
