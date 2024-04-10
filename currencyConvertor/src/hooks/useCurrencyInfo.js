import { use } from 'react';
import {useState, useCallback} from 'react';

const useCurrencyInfo = () => {
    const [data, setData] = useState('USD');

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.4.10/v1/currencies/${currency}.json`)
        .then(response => response.json())
        .then(res => {
            setData(res[currency]);
        })
    },[currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;


