import logo from '../assets/logo2.png'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow fixed-top">
            <div className="container">
                <div className="logo">
                    <a href="#">
                    <img src={logo} alt="Projuncture Logo" style={{ width: '50px', height: '50px' }} />
                    </a>
                </div>
                <a className="navbar-brand" href="#">
                Projuncture
                </a>
                <form className="d-flex mt-2" role="search" style={styles.searchForm}>
                <input
                    className="form-control me-2 rounded-pill"
                    type="search"
                    placeholder="Projuncture'da Arayın"
                    aria-label="Search"
                    style={styles.searchInput}
                />               
                <span className="material-icons">
                    search
                </span>               
                </form>
                <button
                className="navbar-toggler shadow-none border-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                
            <div
            className="sidebar offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            >
            <div className="offcanvas-header border-bottom">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Projuncture
                </h5>
                <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                />
            </div>
            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                <li className="nav-item mx-2">
                    <a className="nav-link" aria-current="page" href="#">
                    Kategoriler
                    </a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="#">
                    Projelerim
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <PermIdentityIcon />
                    </a>
                    <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                        Profil
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                        Another action
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                        Ayarlar
                        </a>
                    </li>
                    </ul>
                </li>
                </ul>
                
            </div>
            </div>
        </div>
        </nav>

    );
}

const styles = {
   
    searchForm: {
      display: 'flex',
      alignItems: 'center',
      width: '50%'   // Genişliği ayarlayarak ortada görünmesini sağlar
    },
    searchInput: {
      padding: '8px',
      fontSize: '16px',
      flex: '1',
    },
    searchButton: {
      padding: '8px 12px',
      fontSize: '16px',
      marginLeft: '8px'
    }
  };