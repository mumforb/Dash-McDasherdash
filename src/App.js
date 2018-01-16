import React, { Component } from 'react';
import logo from './logo.svg';

import { dashboard_config } from './dashboard_config';

import Panel from './components/panel';

import Badge from './components/panel_types/badge';
import Forecast from './components/panel_types/forecast';


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
          cityCode={dashboard_config.city_code}
          openWeatherMapAPIKey={dashboard_config.open_weather_map_api_key}
        />

        <Panel
          color="837a75"
          width={3}
          height={2}
          title="Sports"
          content="here's a line of content"
        />

        <Panel
          color="e9b872"
          width={3}
          height={2}
          title="Calendar"
          content="here's a line of content"
        />

        <Panel
          color="98dfaf"
          width={4}
          height={4}
          title="Sports"
          content="here's a line of content"
        />

        <Panel
          color="718f94"
          width={4}
          height={4}
          title="Calendar"
          content="here's a line of content"
        />

        <Panel
          color="70a0af"
          width={4}
          height={4}
          title="Sports"
          content="here's a line of content"
        />

        <Panel
          color="6494aa"
          width={4}
          height={4}
          title="Calendar"
          content="here's a line of content"
        />
      </div>
    );
  }
}

export default App;
