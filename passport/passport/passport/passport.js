const photoInput = document.getElementById("photoInput");
const preview = document.getElementById("preview");

photoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const image = document.createElement("img");

    image.src = URL.createObjectURL(file);

    preview.innerHTML = "";
    preview.appendChild(image);

});
