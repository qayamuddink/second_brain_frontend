import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";




export function useContent() {
    const [contents , setcontents] = useState([]) ;

    function refresh() {
        axios.get(`${BACKEND_URL}/api/v1/content` , {
            headers:{
                "Authorization" : localStorage.getItem("token")
            }
        })
            .then((response) => {

            setcontents(response.data.content)
        })

    }
    
    useEffect( ()=>{

        refresh()
        let interval = setInterval(() => {
            refresh()
        }, 10*1000);
       
        return () => {
            clearInterval(interval)
        }
    } ,[])
    return {contents , refresh };
}






const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    setMatches(media.matches); 
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;