import {
  lookupRegion,
  LookupRegionRequestData,
  LookupRegionResponseData,
  LookupRegionResponse,
  RegionIdentifier
} from "@googlemaps/region-lookup";

const data: LookupRegionRequestData = {
  identifiers: [
    {
      "place": "new york city",
      "place_type": "locality",
      "region_code": "us",
      "language": "en",
    },
  ],
};

type placesType = {
  "displayName": {
      "text": string,
      "languageCode": string
    }
}

const locationRestriction =  {
  "circle": {
    "center": {
      "latitude": 37.7937,
      "longitude": -122.3965
    },
    "radius": 500.0
  }
} 
const url = 'https://places.googleapis.com/v1/places:searchNearby'