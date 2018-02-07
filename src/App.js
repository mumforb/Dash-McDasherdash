import React, { Component } from 'react';
// import logo from './logo.svg';

import { dashboard_config } from './dashboard_config';

// import Panel from './components/panel';

import Badge from './components/panel_types/badge';
import Forecast from './components/panel_types/forecast';
import CurrentWeather from './components/panel_types/current_weather';
// import Camera from './components/panel_types/camera';
import IndoorClimate from './components/panel_types/indoor_climate';
import Locks from './components/panel_types/locks';
import Message from './components/panel_types/message';
import Lights from './components/panel_types/lights';
import MaslowState from './components/panel_types/maslow_state';
import Scores from './components/panel_types/scores';


class App extends Component {


  render() {
    return (
      <div className="flex-container">
        <Badge
          color="70A0AF"
          width={4}
          height={4}
          title={dashboard_config.site_name}
        />

        <Forecast
          color="104F55"
          width={2}
          height={4}
          title="5-Day Forecast"
          cityCode={dashboard_config.open_weather_city_code}
          openWeatherMapAPIKey={dashboard_config.open_weather_map_api_key}
        />

        <CurrentWeather
          color="264653"
          width={3}
          height={2}
          title="Weather"
          cityCode={dashboard_config.open_weather_city_code}
          openWeatherMapAPIKey={dashboard_config.open_weather_map_api_key}
        />

        <Message
          color="32746D"
          width={3}
          height={2}
          title="Messages"
        />

        <Lights
          color="173753"
          width={3}
          height={2}
          title="Lights"
        />

        <IndoorClimate
          color="70A0AF"
          width={4}
          height={4}
          title="Indoor Climate"
        />

        <Locks
          color="104F55"
          width={4}
          height={4}
          title="Locks"
        />

        <MaslowState
          color="32746D"
          width={4}
          height={4}
          title="Maslow State"
        />

        <Scores
          color="264653"
          width={1}
          height={3}
          title="Tonight's Games"
        />
      </div>
    );
  }
}

export default App;
