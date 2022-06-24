function NavBar(){
  return(
    <>
   
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mynav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">BadBank</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/CreateAccount/">CreateAccount</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/login/">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/deposit/">Deposit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/withdraw/">Withdraw</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/balance/">Balance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/alldata/">AllData</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}