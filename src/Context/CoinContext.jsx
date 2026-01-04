import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const[allCoin, setAllCoin] = useState([]);
    const[currency, setcurrency] = useState({
        name : "usd",
        symbol : "$"
    })

    const fetchAllCoin = async () => {
        const options = {method: 'GET', headers: {'x-cg-demo-api-key': '	CG-qDj9FMUMFCFHR5n5HygXmPV4'}};

fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h`, options)
  .then(res => res.json())
  .then(res => setAllCoin(res))
  .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchAllCoin();
    }, [currency])

    const contextValue = {
        allCoin, currency, setcurrency
    }

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;