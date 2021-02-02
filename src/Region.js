import React, { useState } from "react";

const Region = props => {
  const { nameRegion, coords, onSelectImage } = props;
  const [srcImageProps, setSrcImageProps] = useState("");

  const onMouseEnterImage = () => {
    setSrcImageProps(`https://www.weweb.in/data/2013/10/${nameRegion}.png`);
    onSelectImage(`https://www.weweb.in/data/2013/10/${nameRegion}.png`);
  };

  const onMouseOutImage = () => {
    setSrcImageProps('https://www.weweb.in/data/2013/10/cartina_italia.png');
    onSelectImage('https://www.weweb.in/data/2013/10/cartina_italia.png');
  };

  return (
    <map id="Map" key={nameRegion} name="Map">
      <area
        shape="poly"
        coords={coords}
        href="#"
        alt={nameRegion}
        title={nameRegion}
        onMouseEnter={onMouseEnterImage}
        onMouseOut={onMouseOutImage}
      />
    </map>
  );
};

export default Region;
