import React, { useState, useEffect } from 'react';
import Quagga from 'quagga';
import axios from 'axios';

const BarcodeScanner = () => {
  const [barcode, setBarcode] = useState('');
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#scanner-container'),
        constraints: {
          width: 640,
          height: 480,
          facingMode: "environment"
        },
      },
      decoder: {
        readers: ["code_128_reader", "ean_reader"]
      }
    }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      Quagga.start();
    });

    Quagga.onDetected((data) => {
      setBarcode(data.codeResult.code);
    });

    return () => {
      Quagga.offDetected();
      Quagga.stop();
    };
  }, []);

  useEffect(() => {
    if (barcode) {
      fetchProductData(barcode);
    }
  }, [barcode]);

  const fetchProductData = async (barcode) => {
    try {
      const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
      if (response.data && response.data.status === 1) {
        setProductInfo(response.data.product);
      } else {
        setProductInfo(null);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données du produit:", error);
      setProductInfo(null);
    }
  };

  return (
    <div>
      <div id="scanner-container" style={{ width: '640px', height: '480px' }} />
      {barcode && <p>Code-Barres: {barcode}</p>}
      {productInfo && <div>
        <h3>Informations sur le Produit</h3>
        <p>Nom du Produit: {productInfo.product_name}</p>
        {/* Vous pouvez ajouter plus d'informations du produit ici */}
      </div>}
      {!productInfo && barcode && <p>Aucune information trouvée pour ce produit.</p>}
    </div>
  );
};

export default BarcodeScanner;
