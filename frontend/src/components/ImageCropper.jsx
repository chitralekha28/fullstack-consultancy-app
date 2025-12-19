import Cropper from "react-easy-crop";
import { useState } from "react";

const ImageCropper = ({ image, onCropDone }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = async (_, croppedAreaPixels) => {
    onCropDone(croppedAreaPixels);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: 300 }}>
      {/* REQUIRED RATIO: 450 x 350 */}
<Cropper
  image={image}
  crop={crop}
  zoom={zoom}
  aspect={450 / 350}
  onCropChange={setCrop}
  onZoomChange={setZoom}
  onCropComplete={onCropComplete}
/>

    </div>
  );
};

export default ImageCropper;
