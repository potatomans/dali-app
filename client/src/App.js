import './App.css';
import { useEffect, useState } from 'react';

const PORT = 3001;

const App = () => {
    const endpoint = `http://localhost:${PORT}/memejoke`;
    const [imgUrl, setImgUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchImg = () => {
        setLoading(true);
        fetch(endpoint)
            .then(res => res.url)
            .then(url => setImgUrl(url))
            .catch(err => console.error("error getting image", err))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        fetchImg();
    }, [])

    return (
        <div className="App">
            <header className="App-header">
            {!loading ? 
                <img src={imgUrl} alt="meme and joke" style={{padding: "20px"}} /> : 
                <h1>Loading...</h1>}
            <button onClick={fetchImg}>New Meme</button>
            </header>
        </div>
    );
}

export default App;
