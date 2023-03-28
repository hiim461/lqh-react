import React, {useState} from "react";

function SelectCar() {

    const [imgUrl, setImgUrl] = useState("./img/black-car.jpg")

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <img src={imgUrl} alt="car" width="100%" height="auto" />
        </div>
        <div className="col-md-4">
          <ul class="list-group">
            <li onClick={() => setImgUrl("./img/black-car.jpg")} class="list-group-item d-flex">
              <img src="./img/icon-black.jpg" alt="icon-black" width="50px" />
              <h3 style={{margin:"0", lineHeight:"50px"}}>Crystal Black</h3>
            </li>
            <li onClick={() => setImgUrl("./img/steel-car.jpg")} class="list-group-item d-flex">
              <img src="./img/icon-steel.jpg" alt="icon-steel" width="50px" />
              <h3 style={{margin:"0", lineHeight:"50px"}}>Modern Steel</h3>
            </li>
            <li onClick={() => setImgUrl("./img/silver-car.jpg")} class="list-group-item d-flex">
              <img src="./img/icon-silver.jpg" alt="icon-silver" width="50px" />
              <h3 style={{margin:"0", lineHeight:"50px"}}>Lunar Siver</h3>
            </li>
            <li onClick={() => setImgUrl("./img/red-car.jpg")} class="list-group-item d-flex">
              <img src="./img/icon-red.jpg" alt="icon-red" width="50px" />
              <h3 style={{margin:"0", lineHeight:"50px"}}>Rallye Red</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SelectCar;
