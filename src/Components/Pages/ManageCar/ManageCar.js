import UseProducts from '../../Hooks/UseProducts';
import { useNavigate } from 'react-router-dom';


import Service from './../Service/Service'

const ManageCar = () => {

    const [services, setServices] = UseProducts();

    // const [mCar, setMcar] = useState([]);

    //load all car data:
    // useEffect(() => {
    //     fetch('http://localhost:5000/ourcar')
    //         .then(res => res.json())
    //         .then(data => setMcar(data))
    // }, [])

    const navigate = useNavigate();

    const showDetail = id => {
        const path = `/ProductId/${id}`
        navigate(path);
    }

    const handleDelete = id => {

        // console.log('Click',id);
        const proceed = window.confirm('Confirm delete item?');

        if (proceed) {
            console.log(id);
            const url = `http://localhost:5000/ourcar/delete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                });
        }
    }

    return (
        <div className='container'>


            <h1 className='text-center text-3xl m-8'>Manage Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3  justify-items-center '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        btn='delete'
                        btn2='manage'
                        handle={handleDelete}
                        handle2={showDetail}
                        bool={true}
                    ></Service>)
                }
            </div>

            {/* fruits.slice(1, 3); */}
            {/* handleDelete={handleDelete} */}
        </div >
    );
};

export default ManageCar;