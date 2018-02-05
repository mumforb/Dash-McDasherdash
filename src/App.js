import React, { Component } from 'react';
// import logo from './logo.svg';

import { dashboard_config } from './dashboard_config';

import Panel from './components/panel';

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
          color="c97b84"
          width={4}
          height={4}
          title={dashboard_config.site_name}
        />

        <Forecast
          color="5fb49c"
          width={2}
          height={4}
          title="5-Day Forecast"
          cityCode={dashboard_config.open_weather_city_code}
          openWeatherMapAPIKey={dashboard_config.open_weather_map_api_key}
        />


        <CurrentWeather
          color="70a0af"
          width={3}
          height={2}
          title="Weather"
          cityCode={dashboard_config.open_weather_city_code}
          openWeatherMapAPIKey={dashboard_config.open_weather_map_api_key}
        />

        <Message
          color="837a75"
          width={3}
          height={2}
          title="Messages"
        />

        <Lights
          color="718f94"
          width={3}
          height={2}
          title="Lights"
        />

        <IndoorClimate
          color="e9b872"
          width={4}
          height={4}
          title="Indoor Climate"
        />

        <Locks
          color="98dfaf"
          width={4}
          height={4}
          title="Locks"
        />

        <MaslowState
          color="70a0af"
          width={4}
          height={4}
          title="Maslow State"
        />

        <Scores
          color="6494aa"
          width={3}
          height={3}
          title="Tonight's Games"
        />
      </div>
    );
  }
}

export default App;
