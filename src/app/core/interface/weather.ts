export interface Weather {
  location?: LocationWeather;
  current?: Current;
}

export interface LocationWeather {
  name?: string;
  region?: string;
  country?: string;
  lat?: string;
  lon?: string;
  tz_id?: string;
  localtime_epoch?: string;
  localtime?: string;
}

export interface Current {
  last_updated_epoch?: string;
  last_updated: string;
  temp_c?: string;
  temp_f?: string;
  is_day?: number;
  condition?: {
    text?: string;
    icon?: string;
    code?: string;
  };
  wind_mph?: string;
  wind_kph?: string;
  wind_degree?: string;
  wind_dir?: string;
  pressure_mb?: string;
  pressure_in?: string;
  precip_mm?: string;
  precip_in?: string;
  humidity?: string;
  cloud?: number;
  feelslike_c?: string;
  feelslike_f?: string;
  windchill_c?: string;
  windchill_f?: string;
  heatindex_c?: string;
  heatindex_f?: string;
  dewpoint_c?: string;
  dewpoint_f?:string;
  vis_km?: string;
  vis_miles?: string;
  uv?: string;
  gust_mph?: string;
  gust_kph?: string;
}
