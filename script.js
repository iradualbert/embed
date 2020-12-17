document.addEventListener("DOMContentLoaded", () => {

    // get elements
    const form = document.getElementById("you-form");
    const urlInput = document.getElementById("you-url");
    const iframe = document.getElementById("you-iframe");

    // events
    form.onsubmit = event => {
        event.preventDefault();
        const url = urlInput.value;
        if (url) {
            const videoSrc = url.replace("watch?v=", "embed/").split("&")[0];
            iframe.src = videoSrc;
        } else {
            alert("Enter Video Url")
        }
    };
    

});
