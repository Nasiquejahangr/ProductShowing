import React from 'react'

function Navbar({ setCategory }) {
  return (
    <>
    <div className='container'>
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">PdoductSample</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link active" aria-current="page" onClick={() => setCategory('all')} style={{cursor: 'pointer'}}>Home</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory('groceries')} style={{cursor: 'pointer'}}>Groceries</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory('electronics')} style={{cursor: 'pointer'}}>Electronics</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory('clothing')} style={{cursor: 'pointer'}}>Clothing</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory('beauty')} style={{cursor: 'pointer'}}>Beauty</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={() => setCategory('health')} style={{cursor: 'pointer'}}>Health</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}

export default Navbar