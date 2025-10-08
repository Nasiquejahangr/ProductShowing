import React from 'react'

function Navbar({ setCategory, categories }) {
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
      <select className="form-select" onChange={(e) => setCategory(e.target.value)} style={{width: 'auto'}}>
        {categories.map(category => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}

export default Navbar
