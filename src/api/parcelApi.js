
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/api/parcel/";


export function saveParcel(parcel) {
    return fetch(baseUrl, {
      method: "POST", 
      headers: { "content-type": "application/json" },
      body: JSON.stringify(parcel)
    })
      .then(handleResponse)
      .catch(handleError);
  }
  