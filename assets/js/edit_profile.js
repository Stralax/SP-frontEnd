const xhttp = new XMLHttpRequest();
const select = document.getElementById("countries");
const flag = document.getElementById("flag");
const flag1 = document.getElementById("flag1");

let countries;

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    countries = JSON.parse(xhttp.responseText);
    assignValues();
    handleCountryChange();
  }
};
xhttp.open("GET", "https://restcountries.com/v3.1/all", true);
xhttp.send();

function assignValues() {
  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.cca2;
    option.textContent = country.name.common;
    select.appendChild(option);
  });
}

function handleCountryChange() {
  const countryData = countries.find(
    country => select.value === country.cca2
  );
  if (countryData) {
    flag.style.backgroundImage = `url(${countryData.flags.svg})`;
    flag.style.backgroundSize = 'contain';
    flag.style.backgroundRepeat = 'no-repeat';
  }
}

select.addEventListener("change", handleCountryChange);   // prati promena vo dropdown

function toggleFlag() {         // da pokazva zname ko ke e izbrana zemja, ili nisto ko ke nema izbrano
  const selectElement = document.getElementById('countries');
  const flagElement = document.getElementById('flag');
  if (selectElement.value === 'N/A') {
      flagElement.style.display = 'none';
  } else {
      flagElement.style.display = 'inline-block';
  }
}

document.addEventListener("DOMContentLoaded", toggleFlag);

// Za vnosni polinja:
var profile = document.querySelector("form");

profile.addEventListener("submit", (dogodek) => {

  const fullName = profile.elements.firstName.value + " " + profile.elements.lastName.value;
  document.getElementById("name-surname").textContent = fullName;
  const userName = profile.elements.username.value;
  document.getElementById("user-name").textContent = userName;

  const countryData = countries.find(
    country => profile.elements.country.value === country.cca2
  );
  if (countryData) {
    flag1.style.backgroundImage = `url(${countryData.flags.svg})`;
    flag1.style.backgroundSize = 'contain';
    flag1.style.backgroundRepeat = 'no-repeat';
  }

  console.log(
      "Profile: " +
      profile.elements.username.value + "\n" + 
      profile.elements.lastName.value + "\n" +
      profile.elements.firstName.value + "\n" +
      profile.elements.email.value + "\n" +
      profile.elements.country.value + "\n" +
      profile.elements.timezone.value + "\n" +
      profile.elements.gender.value + "\n" +
      "so komentar" +  "\n" +
      profile.elements.comment.value +
      "."
  );
  dogodek.preventDefault();
});

document.addEventListener("DOMContentLoaded", function() {    // na pocetok da gi pisi prethodnite vrednosti (prazni)
  document.getElementById("name-surname").textContent = profile.elements.firstName.value + " " + profile.elements.lastName.value;
  document.getElementById("user-name").textContent = profile.elements.username.value;
});

