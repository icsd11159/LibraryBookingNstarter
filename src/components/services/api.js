import axios from "axios";
//import Config from "../utils/config";
//import Cookies from "js-cookie";

//const apiURL = Config.getSettings().apiEndpoint;
/**
 * Get routes
 * @param query
 * @returns {AxiosPromise}
 */
/* export const getRoutes = (flowID, from, query) => {

    // LSSOL -SL
    const Settings = Config.getSettings();
    let isLSSOL = Settings && parseInt(Settings.api) === 2 ? true : false;
    
    // LSSOL -SL
    query = (Settings && parseInt(Settings.api) === 2) && query ? query.toUpperCase() : query;
  
    return axios({
      url: `http://localhost:8000/routes`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "language-code": Language.getLanguageCode(),
        "icp-id": flowID,
        "agency-user-name": Cookies.getJSON("agency")
          ? Cookies.getJSON("agency").username
          : "",
        "agency-password": Cookies.getJSON("agency")
          ? Cookies.getJSON("agency").password
          : "",
        "agency-code": Cookies.getJSON("agency")
          ? Cookies.getJSON("agency").agencyCode
          : "", // LSSOL -SL
          "agency-token": localStorage.getItem('access_token'), // LSSOL -SL
          "isLSSOL": isLSSOL // LSSOL -SL
      },
      method: "GET",
      params: { from, query }
    });
  }; */
  
  /**
   * Get routes frequency
   * @param resource
   * @returns {AxiosPromise}
   */
  export const getLogin = ( resource) => {
    console.log("resource");
    console.log(resource);
 

  return(
    fetch("http://localhost:8000/NStarter/Nstarter/Controller.php"),{
        method:"POST",
        header:{
           "Content-Type": "application/json",
           "Accept": "application/json",
   
        },
        body:JSON.stringify({Password:resource})
      }
  )
   
  };