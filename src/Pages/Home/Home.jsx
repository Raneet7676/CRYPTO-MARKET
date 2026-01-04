import React, { useContext, useEffect, useState } from "react";
import './Home.css'
import { CoinContext } from "../../Context/CoinContext";

const Home = () => {

    const {allCoin, currency} = useContext(CoinContext);
    const[displayCoin, setDisplayCoin] = useState([]);

    useEffect(() => {
        setDisplayCoin(allCoin)
    }, [allCoin]);

    return(
        <>
            <div className="home">
                <div className="hero">
                    <h1>Largest <br /> Crypto MarketPlace</h1>
                    <h3>Welcome to the world's largest cryptocurrency MarketPlace.</h3>
                    <h3>Sign up to explore more about Cryptos.</h3>

                    <form>
                        <input type="text" placeholder="Search crypto...."/>
                        <button type="submit">SEARCH</button>
                    </form>
                </div>
                <div className="crypto-table">
                    <div className="table-layout">
                        <p style={{textAlign : "left"}}>#</p>
                        <p>Coins</p>
                        <p>Price</p>
                        <p style={{textAlign : "center"}}>24H Change</p>
                        <p className="market-cap">Market Cap</p>
                    </div>
                    {
                        displayCoin.slice(0,10).map((item,index) => {
                            <div className="table-layout">
                                <p>{item.market_cap_rank}</p>
                                <div>
                                    <img src={item.image} alt="" />
                                    <p>{item.name + " - " + item.symbol}</p>
                                </div>
                                <p>{currency.symbol} {item.current_price}</p>
                                <p>{Math.floor(item.price_change_percentage_24h*100) / 100}</p>
                                <p className="market-cap">{item.market_cap}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Home;