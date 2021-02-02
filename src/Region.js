import React, { useState } from "react";

const Region = props => {
  const { nameRegion, coords, onSelectImage } = props;
  const [srcImageProps, setSrcImageProps] = useState("");

  const onMouseEnterImage = () => {
    setSrcImageProps(
      `https://www.pngitem.com/pimgs/m/66-665642_cartina-geomorfologica-valle-d-aosta-clipart-png-comuni.png`
    );
    onSelectImage(
      `https://www.pngitem.com/pimgs/m/66-665642_cartina-geomorfologica-valle-d-aosta-clipart-png-comuni.png`
    );
  };

  const onMouseOutImage = () => {
    setSrcImageProps(
      `https://www.youtrend.it/wp-content/uploads/2018/03/2013-regCam.png`
    );
    onSelectImage(
      `https://www.youtrend.it/wp-content/uploads/2018/03/2013-regCam.png`
    );
  };

  return (
    <map id="Map" key={nameRegion} name="Map">
      <area
        shape="poly"
        coords={coords}
        href="#"
        alt="Val d'Aosta"
        title="Val d'Aosta"
        onMouseEnter={onMouseEnterImage}
        onMouseOut={onMouseOutImage}
      />
    </map>
  );
};

export default Region;
