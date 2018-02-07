export const dashboard_config = {
  site_name: 'The Jetsons',
  open_weather_map_api_key: 'xxxxxxxxxxxxxx',
  open_weather_city_code: 'xxxxxxxx',
  hassio_address: 'http://xxxxxxxxxxx:8123',
  hassio_http_password: 'xxxxxxxxx',
  thermostats: [
    {
      brand: 'xxxxxxxxxxxxxx',
      type: 'xxxxxxxxxxxxx',
      hassio_climate_name: 'xxxxxxxxx'
    },
    {
      brand: 'xxxxxxxxxxxxxx',
      type: 'xxxxxxxxxxxxxxx',
      hassio_climate_name: 'xxxxxxxxx'
    }
  ],
  locks: [
    {
      brand: 'xxxxxxxxxxxxxx',
      type: '',
      hassio_lock_entity_id: 'xxxxxxxxxxxxxx'
    }
  ],
  todoist_personal_api_token: 'xxxxxxxxxxxxxx',
  todoist_messaging_project_id: 1234567890,
  lights: [
    {
      entity_id: 'lamp_1'
    },
    {
      entity_id: 'lamp_2'
    },
    {
      entity_id: 'overhead_light_family_room'
    }
  ]
};
