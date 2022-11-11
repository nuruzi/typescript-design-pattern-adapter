import './style.css';

const appDiv: HTMLElement = document.getElementById('app'); appDiv.innerHTML = `<h2>Adapter Pattern<h2/>`;

// =============== Adapter Pattern ===============

interface IPhone {
  useLightning();
}

interface Android {
  useUSBc();
}

class IPhoneXs implements IPhone {
  useLightning() {
    console.log("Using lightning port..");
    appDiv.innerHTML += `<h4>Using lightning port..</h4>`;
  }
}

class GooglePixel3 implements Android {
  useUSBc() {
    console.log("Using USB-C port..");
    appDiv.innerHTML += `<h4>Using USB-C port..</h4>`;
  }
}

// -------------------- Adapter class --------------------

class LightningToMicroUSBAdapter implements Android {
  iphoneDevice: IPhone;

  constructor(iphone: IPhone) {
    this.iphoneDevice = iphone;
  }

  useUSBc() {
    console.log('Want to use USBc, converting...');
    appDiv.innerHTML += `<h4>Want to use USBc, converting...</h4>`;
    this.iphoneDevice.useLightning();
  }
}

// --------------------------------------------------------

let iphone = new IPhoneXs();
let chargeAdaptor = new LightningToMicroUSBAdapter(iphone);

chargeAdaptor.useUSBc();