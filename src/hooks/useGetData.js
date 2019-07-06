import { useState, useEffect } from "react";

const api = 'https://api.github.com/gists/28d88accbe1052c2697d7a24a33be205'

const useGetData = () => {
    //Set States y que Funciones lo van a manipular.
    const [myData, setData] = useState([]);

    //HandleFunctions
    useEffect(() => {
        //Aqui buscamos la data.
        var obj = {
            link: api,
            object: {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }
          }
        
        var gistFile;
        fetch(api, obj)
            .then(response => response.json())
            .then(data => {
                gistFile = data.files["gistfile1.json"].raw_url;

                fetch(gistFile, obj)
                    .then(response => response.json())
                    .then(data => {
                        setData(data);
                    })
            })
        
        
    }, []);
          
    //En este caso no vamos a utilizar useEffect para actualizar 
    //state

    return myData;
}

export default useGetData;