import React from 'react'

/*NavBar Component*/

export default function NavBar(props) {
  return (
    <div>
    <nav className={`navbar text-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid" style={{color: props.mode==='light'? 'black':'white'}}>
    <span className="navbar-brand mb-0 h1" style={{color: props.mode==='light'? 'black':'white'}}>iTask</span>

    <div className={`form-check form-switch text-${props.mode==='light'? 'black' : 'white'}`}>
  <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>

</div>
  </div>
  
</nav>
</div>
  )
}
