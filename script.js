const storyButton = document.getElementById("storyButton");
const storyContent = document.getElementById("storyContent");

storyButton.addEventListener("click", function () {
    storyContent.hidden = !storyContent.hidden;

    storyButton.textContent = storyContent.hidden
        ? "Our Story"
        : "Close Story ❤️";
});

const memoriesButton = document.getElementById("memoriesButton");
const memoriesContent = document.getElementById("memoriesContent");

memoriesButton.addEventListener("click", function () {
    memoriesContent.hidden = !memoriesContent.hidden;

    memoriesButton.textContent = memoriesContent.hidden
        ? "Our Memories"
        : "Close Memories ❤️";
});

const messageButton = document.getElementById("messageButton");
const messageContent = document.getElementById("messageContent");

messageButton.addEventListener("click", function () {
    messageContent.hidden = !messageContent.hidden;

    messageButton.textContent = messageContent.hidden
        ? "My Message"
        : "Close Message ❤️";
});

    const loginForm = document.getElementById("loginForm");
    const passwordInput = document.getElementById("passwordInput");
    const loginScreen = document.getElementById("loginScreen");
    const loginError = document.getElementById("loginError");

    const loveSong = document.getElementById("loveSong");
    const musicButton = document.getElementById("musicButton");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (passwordInput.value === "Love") {
        loginError.hidden = true;
        musicButton.hidden = false;

        loginScreen.classList.add("leaving");

        setTimeout(function () {
            loginScreen.style.display = "none";
        }, 1200);

        loveSong.currentTime = 0;

        loveSong.play().then(function () {
            musicButton.textContent = "⏸ إيقاف الأغنية";
        }).catch(function () {
            musicButton.textContent = "🎵 تشغيل أغنيتنا ❤️";
        });

    } else {
        loginError.hidden = false;
        passwordInput.value = "";
        passwordInput.focus();
    }
});

musicButton.addEventListener("click", function () {
    if (loveSong.paused) {
        loveSong.play().then(function () {
            musicButton.textContent = "⏸ إيقاف الأغنية";
        }).catch(function () {
            musicButton.textContent = "🎵 تشغيل أغنيتنا ❤️";
        });
    } else {
        loveSong.pause();
        musicButton.textContent = "🎵 تشغيل أغنيتنا ❤️";
    }
});