fetch("https://api.covid19api.com/summary")
  .then((response) => response.json())
  .then((data) => {
    displayGlobalData(data.Global);
  });

const displayGlobalData = (data) => {
  // console.log(data);
  const globalContainer = document.getElementById("global-stat");
  const globalDiv = document.createElement("div");
  globalDiv.innerHTML = `
    <p>
    <h2>Global Statistics</h2>
    <br>
    New Confirmed: ${data.NewConfirmed}
    <br>
    Total Confirmed: ${data.TotalConfirmed} </h3>
    <br>
    New Death: ${data.NewDeaths}
    <br>
    Total Death: ${data.TotalDeaths}
    <br>
    New Recovered: ${data.NewRecovered}
    <br>
    Total Recovered: ${data.TotalRecovered}
    <br>
    </p>
    <p>Last Modified: ${data.Date.slice(0, 10)}</p>
    `;
  globalContainer.appendChild(globalDiv);
};

const searchCountry = () => {
  fetch("https://api.covid19api.com/summary")
    .then((response) => response.json())
    .then((data) => {
      displayCountryData(data.Countries);
    });
};

const displayCountryData = (countries) => {
  for (let i = 0; i < countries.length; i++) {
    const countryName = countries[i].Country;
    const countryName2 = countries[i].slug;
    let inputText = document.getElementById("search-field").value;

    if (countryName.toLowerCase() === inputText.toLowerCase()) {
      const countryContainer = document.getElementById("country-stat");
      const countryDiv = document.createElement("div");
      countryDiv.innerHTML = `
    <p>
    <h2>${countryName}</h2>
    <br>
    New Confirmed: ${countries[i].NewConfirmed}
    <br>
    Total Confirmed: ${countries[i].TotalConfirmed} </h3>
    <br>
    New Death: ${countries[i].NewDeaths}
    <br>
    Total Death: ${countries[i].TotalDeaths}
    <br>
    New Recovered: ${countries[i].NewRecovered}
    <br>
    Total Recovered: ${countries[i].TotalRecovered}
    <br>
    </p>
    <p>Last Modified: ${countries[i].Date.slice(0, 10)}</p>
    `;
      countryContainer.appendChild(countryDiv);
      document.getElementById("search-field").value = "";
    }
  }
};
