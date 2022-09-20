import './style.css';
require('dotenv').config();
document.querySelector('#app').innerHTML = `
  <div>
    <h1>ima parser bruv!</h1>
    
    <div class="card">
      <form id="form">
        <input type="text" name="city" placeholder="enter a city">
        <button type="submit">submit</button>
      </form>
    </div>
    <div class="card">
        <a id="info"></a>
    </div>
  </div>
`;

let city = '';
const API_URL = process.env.api_url;
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    city = event.target.city.value;
    fetch(`${API_URL}/api?citys_name=${city}`).then((response) =>
        response.json().then((data) => {
            updateInfo(data);
            event.target.city.value = '';
        })
    );
});

function updateInfo(data) {
    document.querySelector('#info').innerHTML = `
        <h2>${city} weather</h2>
        <p>Температура: ${data['temp']} С</p>
        <p>Облачность: ${data['clouds']}</p>
        <p>Ветер: направление ${data['wind']} со скоростью ${data['pw']} м/с</p>

    `;
}
