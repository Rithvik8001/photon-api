const apiKey = "GndZHPVDSGw9nGOVtheNU4rgqNLkkRZsJ5e7X75IvEH7T3nZF48VP7CR";
const inputForm = document.querySelector(`.search-input`);
const gallery = document.querySelector(`.gallery`);
const submitBtn = document.querySelector(`.submit-btn`);

// funtions

const curatedPhtos = async () => {
  // authorizing the pexels api
  const dataFetch = await fetch("https://api.pexels.com/v1/curated", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: apiKey,
    },
  });
  // pase the json file to object so we can work with it
  const data = await dataFetch.json();
  data.photos.forEach((photo) => {
    console.log(photo);
    const galleryImages = document.createElement(`div`);
    galleryImages.classList.add(`gallery-img`);
    galleryImages.innerHTML = `<img src = ${photo.src.large}> </img> 
    <p src=${photo.photographer}></p>`;
    gallery.appendChild(galleryImages);
  });
};

curatedPhtos();
