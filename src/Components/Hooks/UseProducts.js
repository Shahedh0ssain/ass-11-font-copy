import { useEffect, useState } from "react"

const UseProducts = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ourcar')
            .then(res => {
                // console.log(res.json())
                return res.json()
            })
            .then(data => setServices(data));
    }, []);

    return [services, setServices];
}

export default UseProducts;