import './App.css';

function Home(){

    return(
        <div className='container'>
            <footer className='info-finish'>
                <ul>
                    <h1 className='info-footer'>Contactanos</h1>
                    <li>Numero: </li>
                    <li>Direccion: </li>
                    <li>Email: </li>
                </ul>
                <div>
                <a href='#' className='link-web'>Facebook</a>
                <a href='#' className='link-web'>Twitter</a>
                <a href='#' className='link-web'>Linkedin</a>
                <a href='#' className='link-web'>Instagram</a>
                </div>
            </footer>
        </div>
    );
}

export default Home;