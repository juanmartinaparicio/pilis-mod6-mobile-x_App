import { useEffect, useState } from "react";

// FORMA TRADICIONAL DE HACER UNA LLAMADA A LA API
export function useFetch(url) {
    const[items, setItems] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error,setError] = useState(null);
    const[controller, setController] = useState(null);

    useEffect(() => {
        const abortController=new AbortController();//funcion propia de la plataforma, no se importa
        setController(abortController);
        setLoading(true);
        fetch(url, {signal: AbortController.signal})
            .then((res)=>res.json())
            .then((items) =>setData(items))
            .catch((error) => {
                if(error.name==="AbortError"){
                    console.log("Request cancelled")
                }else{
                setError(error)
                }
            })
            .finally(() => setLoading(false));

        return()=>abortController.abort();//sirve para evitar fugas de memoria en caso de que se desmonte el componente
    },[]);

    const handleCancelRequest=() => {
        if (controller){
        controller.abort();
        setError("request cancelled")
        }
    };

    return {items, loading, error, handleCancelRequest}; //se devuelve la  data en objeto pq es mas facil de desestructurar que un array
}
///"https://jsonplaceholder.typicode.com/users"