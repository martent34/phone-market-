import React from 'react'
import { Link } from 'react-router-dom'

function Sections() {
  return (
    <div>
      <div className="box-133">
        <div className="container">
            <Link to="/phones"><img src="../img/phone.png" alt=""/> phones</Link>
            <Link to="/covers"><img src="../img/cover.png" alt=""/> covers</Link>
            <Link to="/Earphone"><img src="../img/earphone.png" alt=""/> Earphone</Link>
            <Link to="/smart watch"><img src="../img/smart watch.png" alt=""/> smart watch</Link>
            <Link to="/earbuds"><img src="../img/earbuds.png" alt=""/> earbuds</Link>
        </div>
    </div>
    </div>
  )
}

export default Sections