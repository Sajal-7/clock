function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Combine hours, minutes, and seconds
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Update the clock
    document.getElementById('time').textContent = timeString;
}

// Initial call to display the time immediately on load
updateTime();

// Update the clock every second
setInterval(updateTime, 1000);
