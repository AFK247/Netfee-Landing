import netfee from '@/images/netFeesd.png'
import Image from 'next/image';

const Header=()=> {
  return (
    <nav className="navbar navbar-expand-lg bg-primary ">
  <div className="container-fluid w-75">
   
  <Image
     src={netfee} 
      width={100}
      height={40}
      alt="Picture of the author"
    />

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white ms-5" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white ms-2" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white ms-2" href="#">TEAM</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white ms-2" href="#">GALLERY</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white ms-2" href="#">FEATURES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white ms-2" href="#">PRICING</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white ms-2" href="#">CONTACT</a>
        </li>
        
        
      </ul>
      <div className="d-flex" >
       
        <button className="btn btn-outline-light" type="submit">Get Started</button>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Header;