import "./App.css";

export default function App() {
  return (
    <div class="container">
      <div class="weather-app">
        <div class="row">
          <div class="col-4">
            <h1>New York</h1>
            <li>
              <span id="date">Friday 05:00</span>,
              <span class="weatherDescription" id="des">
                clear sky
              </span>
            </li>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt=""
              id="icon-Main"
              class="iconCanvas"
            />
            <div class="d-inline-flex">
              <div class="temperature" id="temp">
                28
              </div>
              <span class="units">
                <a href="#" id="celsius-Link" class="active">
                  C°
                </a>
                |
                <a href="#" id="farenheit-link">
                  F°
                </a>
              </span>
            </div>
            <div class="weather-information">
              <li>
                Humidity: <strong id="humidity-Element">85</strong>
                <strong> %</strong>, Wind:
                <strong class="windSpeed" id="wind-Speed">
                  2.7
                </strong>
                <strong> km/h</strong>
              </li>
            </div>
            <div class="row">
              <form id="search-form">
                <div class="d-flex justify-content-center">
                  <div class="d-inline-flex p-2">
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      autocomplete="off"
                      placeholder="Enter city"
                      id="enter-City"
                    />

                    <input
                      class="btn btn-primary btn-sm"
                      type="submit"
                      value="Search"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-8" id="forecast"></div>
        </div>
        <br />
        <small>
          This project was coded by
          <a
            class="Instagram"
            href="https://www.instagram.com/yerani_k/?hl=es-la"
            target="_blank"
          >
            Yerani Kingston
          </a>
          and is
          <a
            class="GithubLink"
            href="https://github.com/yeranik/vw-app"
            target="_blank"
          >
            Open-source code on Github
          </a>
          and
          <a
            class="netlify"
            href="https://precious-dragon-ab7660.netlify.app/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </small>
      </div>
    </div>
  );
}
