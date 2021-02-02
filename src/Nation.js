import React, { useState } from "react";
import Region from "./Region";

const regions = [
  {
    region: {
      name: "Piemonte",
      coords:
        "84,75,80,75,78,82,87,91,89,91,97,108,88,104,88,108,86,110,79,107,79,110,68,108,57,125,51,126,50,122,30,119,28,106,31,106,31,102,35,102,34,94,28,94,27,87,24,83,39,80,39,70,55,66,55,69,61,68,63,58,62,52,71,45,71,41,68,41,68,39,76,33,77,33,77,34,77,42,79,42,85,52,81,61,87,74,85,78,84,78,94,109,96,109,96,110"
    }
  },
  {
    region: {
      name: "Aosta",
      coords: "61,53,62,65,56,67,37,69,35,61,30,55,38,52,41,55,50,53,54,49"
    }
  }
];

const Nation = () => {
  const [srcImage, setSrcImage] = useState(
    "https://www.youtrend.it/wp-content/uploads/2018/03/2013-regCam.png"
  );

  const handleLanguage = image => {
    setSrcImage(image);
  };

  const singleRegionmap = regions => {
    return regions.map(region => {
      return (
        <Region
          key={region.region.name}
          nameRegion={region.region.name}
          coords={region.region.coords}
          onSelectImage={handleLanguage}
        />
      );
    });
  };

  return (
    <div>
      <div className="mappa">
        <img id="mappaitalia" useMap="#Map" src={srcImage} name="Italia" />
        {singleRegionmap(regions)}
      </div>
    </div>
  );
};

export default Nation;
