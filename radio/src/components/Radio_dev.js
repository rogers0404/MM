import React, { useEffect, useState } from "react"
import { RadioBrowserApi } from "radio-browser-api"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import defaultImage from "./radio.jpg"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Radio() {
  const [stations, setStations] = useState()
  const [stationFilter, setStationFilter] = useState("all")

  useEffect(() => {
    setupApi(stationFilter).then(data => {
      console.log(data)
      setStations(data)
    })
  }, [stationFilter])

  const setupApi = async stationFilter => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App")

    const stations = await api
      .searchStations({
        language: "english",
        tag: stationFilter,
        limit: 30,
      })
      .then(data => {
        return data
      })

    return stations
  }

  const filters = [
    "all",
    "classical",
    "country",
    "dance",
    "disco",
    "house",
    "jazz",
    "pop",
    "rap",
    "retro",
    "rock",
  ]

  const setDefaultSrc = event => {
    event.target.src = defaultImage
  }

  return (
    <div className="radio">
      <div className="filters">
        {filters.map((filter, index) => (
          <span
            key={index}
            className={stationFilter === filter ? "selected" : ""}
            onClick={() => setStationFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      <div className="stations_carousel ">
      <Carousel interval={null} indicators={false}>
        {stations &&
          stations.map((station, index) => {
            return (
                <Carousel.Item>
                  <div className="station" key={index}>
                    <div className="stationName mt-3">
                      <div>
                        <img
                          src={station.favicon}
                          alt="station logo"
                          onError={setDefaultSrc}
                        />
                        </div>
                      <div className="name">{station.name}</div>
                    </div>

                    <div className='w-75 mt-5'>
                      <AudioPlayer
                        className="player"
                        src={station.urlResolved}
                        showJumpControls={false}
                        layout="stacked"
                        customProgressBarSection={[]}
                        customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                        autoPlayAfterSrcChange={false}
                      />
                      </div>
                  </div>
                  {/*  <Carousel.Caption>
                    {station.name}
                  </Carousel.Caption> */} 
                </Carousel.Item>
              
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}