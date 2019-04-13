import { useState, useEffect } from "react";

const api = "https://us-central1-gndx-cv.cloudfunctions.net/me";

const useGetData = () => {
    //Set States y que Funciones lo van a manipular.
    const [myData, setData] = useState([]);

    //HandleFunctions
    useEffect(() => {
        //Aqui buscamos la data.
        fetch(api)
            .then(response => response.json())
            .then(data => setData(data))
    }, []);
    //En este caso no vamos a utilizar useEffect para actualizar 
    //state

    return myData;
}

export default useGetData;