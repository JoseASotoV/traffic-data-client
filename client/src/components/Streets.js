import React, { Component } from "react";
import { Polyline } from "react-leaflet";

//const polyline = [[47.57319, -122.38666], [47.573193, -122.385763]];

class Streets {
  constructor() {
    const street1 = [[47.57561, -122.38667], [47.57561, -122.38575]];
    const street2 = [[47.57561, -122.3856], [47.5756, -122.38472]];
    const street3 = [[47.5756, -122.38458], [47.57559, -122.38367]];
    const street4 = [[47.57558, -122.38354], [47.57558, -122.38262]];
    const street5 = [[47.57558, -122.38248], [47.57558, -122.3815]];
    const street6 = [[47.57557, -122.38135], [47.57557, -122.38041]];
    const street7 = [[47.57556, -122.38025], [47.57556, -122.37929]];
    const street8 = [[47.57556, -122.37915], [47.57556, -122.3783]];

    const street9 = [[47.57317, -122.38667], [47.57317, -122.38575]];
    const street10 = [[47.57317, -122.3856], [47.57317, -122.38472]];
    const street11 = [[47.57317, -122.38458], [47.57317, -122.38367]];
    const street12 = [[47.57317, -122.38354], [47.57317, -122.38262]];
    const street13 = [[47.57317, -122.38248], [47.57317, -122.3815]];
    const street14 = [[47.57317, -122.38135], [47.57317, -122.38041]];
    const street15 = [[47.57316, -122.38025], [47.57316, -122.37929]];
    const street16 = [[47.57316, -122.37915], [47.57316, -122.37832]];

    const street17 = [[47.57123, -122.38667], [47.57123, -122.38575]];
    const street18 = [[47.57123, -122.3856], [47.57123, -122.38472]];
    const street19 = [[47.57123, -122.38458], [47.57123, -122.38367]];
    const street20 = [[47.57123, -122.38354], [47.57123, -122.38262]];
    const street21 = [[47.57123, -122.38248], [47.57123, -122.3815]];
    const street22 = [[47.57123, -122.38135], [47.57123, -122.38041]];
    const street23 = [[47.57123, -122.38025], [47.57123, -122.37929]];
    const street24 = [[47.57123, -122.37915], [47.57123, -122.3783]];

    const street25 = [[47.5732, -122.38672], [47.57554, -122.38672]];
    const street26 = [[47.5732, -122.38567], [47.57554, -122.38568]];
    const street27 = [[47.5732, -122.38464], [47.57554, -122.38462]];
    const street28 = [[47.5732, -122.38361], [47.57554, -122.38362]];
    const street29 = [[47.5732, -122.38254], [47.57554, -122.38255]];
    const street30 = [[47.5732, -122.3814], [47.57554, -122.38142]];
    const street31 = [[47.5732, -122.38035], [47.57554, -122.38034]];
    const street32 = [[47.5732, -122.37924], [47.57554, -122.37925]];
    const street33 = [[47.5732, -122.37825], [47.57554, -122.37822]];

    const street34 = [[47.57129, -122.38672], [47.57312, -122.38672]];
    const street35 = [[47.57128, -122.38567], [47.57312, -122.38568]];
    const street36 = [[47.57127, -122.38464], [47.57312, -122.38462]];
    const street37 = [[47.57127, -122.38361], [47.57312, -122.38362]];
    const street38 = [[47.57126, -122.38254], [47.57312, -122.38255]];
    const street39 = [[47.57126, -122.3814], [47.57312, -122.38142]];
    const street40 = [[47.57125, -122.38035], [47.57312, -122.38034]];
    const street41 = [[47.57125, -122.37924], [47.57312, -122.37925]];
    const street42 = [[47.57123, -122.37822], [47.57312, -122.37822]];

    this.streets = [
      street1,
      street2,
      street3,
      street4,
      street5,
      street6,
      street7,
      street8,
      street9,
      street10,
      street11,
      street12,
      street13,
      street14,
      street15,
      street16,
      street17,
      street18,
      street19,
      street20,
      street21,
      street22,
      street23,
      street24,
      street25,
      street26,
      street27,
      street28,
      street29,
      street30,
      street31,
      street32,
      street33,
      street34,
      street35,
      street36,
      street37,
      street38,
      street39,
      street40,
      street41,
      street42
    ];
  }

  getStreets() {
    return this.streets;
  }
}

export default Streets;
