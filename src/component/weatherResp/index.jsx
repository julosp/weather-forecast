import React from "react";

class WeatherResp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
  }

  //   useEffect(() => {
  //     axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true&timezone=auto')
  //     .then((resp) => {
  //       console.log(resp.data)
  //     })
  //   })
}
