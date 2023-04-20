import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [coins, setCoins] = useState([]);
  const [progs, setProgs] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
      response.json()
    ).then(json => {
      console.log(json);
      setCoins(json);
      setLoading2(false);
    });
    
    fetch("http://localhost:5000/").then((response) =>
      response.json()
    ).then(json => {
      console.log(json);
      setProgs(json);
      setLoading(false);
    });
  },[]);

  return (
    <div>
      <h1 className={styles.title}>개발자 멍멍쌤 프로그램</h1>
      <hr />
      <table border='1'>
        <tr>
          <th>코인 ({coins.length}개)</th>
          <th>프로그램 ({progs.length}개)</th>
        </tr>
        <tr>
          <td style={{verticalAlign: 'top'}}>
            <ui>
              {loading2 ? <strong>Loading2...</strong>:null}
              {coins.map((coin)=> <li>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</li>)}
            </ui>
          </td>
          <td style={{verticalAlign: 'top'}}>
            <ui>
              {loading ? <strong>Loading1...</strong>:null}
              {progs.map((prog)=> <li>{prog.title},{prog.version}</li>)}
            </ui>            
          </td>
        </tr>
      </table>
    </div>
  );
}
//id, order, category_id, created, title, version, excerpt, body, link_blog, link_youtube, created_at, updated_at
export default App;
