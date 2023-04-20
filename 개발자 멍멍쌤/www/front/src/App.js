import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [movies, setMovies] = useState([]);
  const [progs, setProgs] = useState([]);
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year").then((response) =>
      response.json()
    ).then(json => {
      //console.log(json);
      setMovies(json.data.movies);
      setLoading2(false);
    });
    
    fetch("http://localhost:81/").then((response) =>
      response.json()
    ).then(json => {
      //console.log(json);
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
          <th>무비 ({movies.length}개)</th>
          <th>프로그램  ({progs.length}개)</th>
        </tr>
        <tr>
          <td style={{verticalAlign: 'top'}}>
            <ui>
              {loading2 ? <strong>Loading2...</strong>:null}
              {movies.map((movie)=> <li>{movie.title}</li>)}
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

