window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();
      let hour = today.getHours();
      let minute = today.getMinutes();
      let second = today.getSeconds();
      let ampm = "AM";
      if (hour >= 12) {
        if (hour > 12) hour -= 12;
        ampm = "PM";
      } else if (hour == 0) {
        hour = 12;
        ampm = "AM";
      }
      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      let currentTime = hour + ":" + minute + ":" + second + ampm;
      document.getElementById("date-time").innerHTML = currentTime;
      setTimeout(clock, 1000);
    }
  });