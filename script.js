/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const postcard = document.getElementById("postcard");
  const statesEl = document.getElementById("states");
  const postcardImage = document.getElementById("postcard-image");
  statesEl.addEventListener("change", function () {
    const selectedState = statesEl.value;
    console.log(`State changed to: ${selectedState}`);
    if (selectedState) {
      document.getElementById("greeting").textContent = `Hello from ${selectedState}!`;
      document.getElementById("state-heading").innerHTML = `Welcome to ${selectedState}`;
      postcard.style.backgroundImage = `url('images/${selectedState.toLowerCase()}.jpg')`;
      const stateAbbr = selectedState;
      const imagePath = `images/${stateAbbr.toLowerCase()}.jpg`;
      postcardImage.setAttribute("src", imagePath);
      postcardImage.setAttribute("alt", `Postcard from ${stateAbbr}`);
    }
  });
});
