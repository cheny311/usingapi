const baseUrl = "https://web-crawl-id.onrender.com/";

const makeRequest = async function (selectedOption) {
  try {
    const response = await fetch(`${baseUrl}${selectedOption}`);
    const json = await response.json();
    //call the function
    displayJsonOnScreen(json);
  } catch (error) {
    console.error(error);
  }
};

// create dropdown bar and the options that this will contain
const dropdown = document.createElement("select");
dropdown.id = "dropdown";

//options are
const options = [
  "Light Pillar",
  "Aurora",
  "Nacreous",
  "Blue Lava",
  "Lenticular",
  "Catatumbo",
];

// Populate the dropdown with options
options.forEach((option, index) => {
  const optionElement = document.createElement("option");
  optionElement.value = `pName/:${options[index]}`;
  optionElement.textContent = option;
  dropdown.appendChild(optionElement);
});

const dropdownContainer = document.getElementById("dropdown-container");
dropdownContainer.appendChild(dropdown);

document.body.appendChild(dropdown);

dropdown.addEventListener("change", function () {
  const selectedOption = dropdown.value;
  makeRequest(selectedOption);
});

makeRequest(dropdown.value);

const displayJsonOnScreen = (json) => {
  // displaying information from the api onto section h2 in html according to what user pick in the dropdown
  const h2Element = document.getElementById("api-data");

  // Convert the JSON to a string and set it as the h2 text
  h2Element.textContent = JSON.stringify(json);
};
