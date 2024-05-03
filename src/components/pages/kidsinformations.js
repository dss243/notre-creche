import React from 'react';
import QRCode from 'react-qr-code';
const KidsInformations = ({ image, qrCode }) => {
return (
<div className="badge">
<img src={image} alt="Kid Picture" className="badge-image" />
<div className="badge-content">
<h3 className="badge-name">Soundous Benzagouta</h3>
<p className="badge-birthdate">19 Aout 2002</p>
<p className="badge-class">Toddler</p>
</div>
<div className="badge-qrcode">
    
{/* <QRCode value={qrCode} /> */}
</div>

</div>

);
};
export default KidsInformations;