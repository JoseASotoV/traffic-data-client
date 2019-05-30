import React, { Component } from "react";
import Streets from "./Streets";
import { Polyline } from "react-leaflet";

const PORT = 3001;
const lineWeight = 3.7;

class Grid extends Component {
  constructor() {
    super();
    this.streetStatusMap = {};
    this.streets = new Streets().getStreets();
  }

  retrieveLatestData() {
    fetch(`http://localhost:${PORT}/api/last-block`)
      .then(result => {
        return result.json();
      })
      .then(block => {
        this.streetStatusMap = {};
        let info = block.data.map(roadSegment => {
          console.log("roadSegment", roadSegment);
          const segmentId = roadSegment.roadSegmentId;
          const status = roadSegment.trafficStatus.status;
          this.streetStatusMap[segmentId] = status;
          return segmentId;
        });
        console.log(this.streetStatusMap);
        return info;
      });
  }

  render() {
    this.retrieveLatestData();
    let streetComponents = [];
    for (let i = 0; i < this.streets.length; i++) {
      //const rand = Math.floor(Math.random() * 20);
      let color = "lime";
      switch (this.streetStatusMap[`Street${i + 1}`]) {
        case "HIGH-TRAFFIC":
          color = "red";
          break;
        case "MEDIUM-TRAFFIC":
          color = "orange";
          break;
        case "LOW-TRAFFIC":
        default:
          break;
      }

      streetComponents.push(
        <Polyline
          key={i}
          color={color}
          weight={lineWeight}
          positions={this.streets[i]}
        />
      );
    }

    return <div>{streetComponents}</div>;
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Grid;
