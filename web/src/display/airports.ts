// Bundled airport geometry, drawn at true geographic position so departures and
// arrivals visibly line up with the runways. Coordinates from OurAirports.

export interface Runway {
  leIdent: string;
  heIdent: string;
  le: [number, number]; // [lat, lon]
  he: [number, number];
  widthFt: number;
  lengthFt: number;
  /** Magnetic heading at the low-numbered end. */
  leHeadingDeg: number;
  heHeadingDeg: number;
}

export interface Airport {
  icao: string;
  iata: string;
  /** Short map label, e.g. CGK. */
  name: string;
  fullName: string;
  city: string;
  elevationFt: number;
  runways: Runway[];
}

/** Soekarno-Hatta International (CGK / WIII). */
export const CGK: Airport = {
  icao: "WIII",
  iata: "CGK",
  name: "CGK",
  fullName: "Soekarno-Hatta Intl",
  city: "Jakarta",
  elevationFt: 34,
  runways: [
    {
      leIdent: "06",
      heIdent: "24",
      le: [-6.113886, 106.644592],
      he: [-6.103842, 106.669769],
      widthFt: 197,
      lengthFt: 9843,
      leHeadingDeg: 68,
      heHeadingDeg: 248,
    },
    {
      leIdent: "07L",
      heIdent: "25R",
      le: [-6.12106, 106.639],
      he: [-6.10899, 106.668999],
      widthFt: 197,
      lengthFt: 11812,
      leHeadingDeg: 68,
      heHeadingDeg: 248,
    },
    {
      leIdent: "07R",
      heIdent: "25L",
      le: [-6.1426, 106.643997],
      he: [-6.13032, 106.674004],
      widthFt: 197,
      lengthFt: 12008,
      leHeadingDeg: 68,
      heHeadingDeg: 248,
    },
  ],
};

/** Reference build (San Francisco). */
export const SFO: Airport = {
  icao: "KSFO",
  iata: "SFO",
  name: "SFO",
  fullName: "San Francisco Intl",
  city: "San Francisco",
  elevationFt: 13,
  runways: [
    {
      leIdent: "10L",
      heIdent: "28R",
      le: [37.628742, -122.39341],
      he: [37.613538, -122.35716],
      widthFt: 200,
      lengthFt: 11870,
      leHeadingDeg: 118,
      heHeadingDeg: 298,
    },
    {
      leIdent: "10R",
      heIdent: "28L",
      le: [37.626298, -122.393124],
      he: [37.61172, -122.358367],
      widthFt: 200,
      lengthFt: 11381,
      leHeadingDeg: 118,
      heHeadingDeg: 298,
    },
    {
      leIdent: "1L",
      heIdent: "19R",
      le: [37.607898, -122.38295],
      he: [37.626476, -122.37063],
      widthFt: 200,
      lengthFt: 7650,
      leHeadingDeg: 28,
      heHeadingDeg: 208,
    },
    {
      leIdent: "1R",
      heIdent: "19L",
      le: [37.606333, -122.381061],
      he: [37.627346, -122.367124],
      widthFt: 200,
      lengthFt: 8650,
      leHeadingDeg: 28,
      heHeadingDeg: 208,
    },
  ],
};

/** Airports drawn on the map (CGK for Indonesia setup). */
export const AIRPORTS: Airport[] = [CGK];

/** Format runway length for map labels. */
export function formatRunwayLength(lengthFt: number): string {
  const m = Math.round(lengthFt * 0.3048);
  return m >= 1000 ? `${(m / 1000).toFixed(1)} km` : `${m} m`;
}
