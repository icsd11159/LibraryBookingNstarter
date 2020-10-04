import axios from "axios";

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
  /**
   * Get routes frequency
   * @param resource
   * @returns {AxiosPromise}
   */
  export const getLibrarySeat = ( resource) => {
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