let qrcode = select(".qr_code");
let qrbutton = select("button");
let amt = 3;

qrbutton.addEventListener("click", generateQR);

function generateQR() {
//   let qrtext1 = select("#id").value;
//   let qrtext2 = select("#prodName").value;
//   let qrtext3 = select("#qty").value;
  let fid = ceaserCipher(select("#id").value, amt);
  let fpname = ceaserCipher(select("#prodName").value, amt);
  let fqty = ceaserCipher(select("#qty").value, amt);
  let fplace = ceaserCipher(select("#place").value, amt);
  let fprice = ceaserCipher(select("#price").value, amt);
  let size = "1000x1000";
  let data = fid + fpname + fqty + fplace + fprice;
  let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

  let url = `${baseURL}?data=${data}&size=${size}`;

  qrcode.src = url;
}

function select(ele) {
  return document.querySelector(ele);
}

function isUpperCase(str) {
  return str === str.toUpperCase();
}

//decipher the string
function ceaserCipher(str, key) {
  let decipher = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(0) >= 65) {
      if (isUpperCase(str[i])) {
        decipher += String.fromCharCode(((str.charCodeAt(i) + key - 65) % 26) + 65);
      } else {
        decipher += String.fromCharCode(((str.charCodeAt(i) + key - 97) % 26) + 97);
      }
    }
    else {
        decipher += String.fromCharCode(((str.charCodeAt(i) + key - 48) % 10) + 48);
    }
  }

  return decipher;
}
