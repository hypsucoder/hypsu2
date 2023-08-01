import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../style/main.css'



function Navbar() {
  return (
    <div>



<nav className="navbar" id ="">
  <div className="brand-title">HYPSU</div>
  <a href="#" className='toggle-button'>

    <span className='bar'></span>
    <span className='bar'></span>
    <span className='bar'></span>
    <span className='bar'></span>
    <span className='bar'></span>


  </a>
  <div className='navbar-links'>

<ul>
  <li><a href="#page2">Expertise</a></li>
  <li><a href="#">Work</a></li>
  <li><a href="#">Team</a></li>
  <li><a href="#page5">Apply</a></li>
  <li><a href="http://google.com"><button type="button" class="btn btn-light bg-dark p-2 text-dark bg-opacity-10 text-white ">CONTACT US</button>
</a></li>
 </ul>

  </div>
</nav>

      </div>
  )
}

export default Navbar
