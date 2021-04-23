'use strict';

const wrapper = document.querySelector('.wrapper'),
  lang = document.querySelector('.header__lang-select'),
  toggle = document.querySelector('.header__checkbox'),
  time = document.querySelector('.header__time'),
  city = document.querySelector('.weather__city'),
  weather = document.querySelector('.weather__mood'),
  temp = document.querySelector('.weather__temp'),
  sunset = document.querySelector('.sunset'),
  apiKey = '09c167d56f45bb57eda495fffcb6742a',
  cityDefault = 'Kremenchuk',
  url = `http://api.openweathermap.org/data/2.5/weather?q=${cityDefault}&lang=ru&units=metric&appid=${apiKey}`;

// + Day/Night
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    wrapper.classList.add('dark');
    wrapper.classList.remove('light');
  } else {
    wrapper.classList.remove('dark');
    wrapper.classList.add('light');
  }
});

// + Time now

const showCurrentTime = () => {
  const currDate = new Date();
  const hours = currDate.getHours();
  const minutes = currDate.getMinutes();

  time.innerHTML = `${hours}:${minutes}`;
};

showCurrentTime();

// ! Weather

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    city.innerHTML = data.name;
    weather.innerHTML = data.weather[0].description;
    temp.innerHTML = `${data.main.temp.toFixed(1)}&deg;`;
  });
