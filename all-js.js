

//Upload Img
var uploaded = true;
const cells = document.getElementsByClassName("grid-cell");
const uploadIcon = document.getElementById("upload-icon");

function handleImageUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const imageUrl = e.target.result;
    displayImage(imageUrl);
  };

  reader.readAsDataURL(file);
}
function displayImage(imageUrl) {
  // Loop through
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (uploaded) {
      cell.innerHTML = "";
      const img = document.createElement("img");
      img.classList.add("imgplaced");
      img.src = imageUrl;
      cell.appendChild(img);

      uploadIcon.style.animation = "spin 300ms linear 1";
      setTimeout(() => {
        uploadIcon.style.animation = "none";
      }, 1000);
    }
  }
}

//oku dinle izle
document.addEventListener("DOMContentLoaded", function () {
  const imageUpload1 = document.getElementById("uploadImgOne");
  const imageUpload2 = document.getElementById("uploadImgTwo");
  const imageUpload3 = document.getElementById("uploadImgThree");

  const preview1 = document.getElementById("img-oku");
  const preview2 = document.getElementById("img-dinle");
  const preview3 = document.getElementById("img-izle");

  imageUpload1.addEventListener("change", function (event) {
    displayImage(event, preview1);
  });

  imageUpload2.addEventListener("change", function (event) {
    displayImage(event, preview2);
  });

  imageUpload3.addEventListener("change", function (event) {
    displayImage(event, preview3);
  });

  function displayImage(event, preview) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.style.backgroundImage = `url('${e.target.result}')`;
      };
      reader.readAsDataURL(file);
    }
  }
});

// Yazdır
const gridCells = document.querySelectorAll(".grid-cell");
const integerDropdown = document.getElementById("numberOfFiles");
const finalizeButton = document.getElementById("finalize");

finalizeButton.addEventListener("click", () => {
  const numDivsToLoop = parseInt(integerDropdown.value) + 1;

  for (let i = 0; i < numDivsToLoop; i++) {
    const gridCell = gridCells[i];
    html2canvas(gridCell, { dpi: 300, scale: 2 }).then((canvas) => {
      const downloadLink = document.createElement("a");
      downloadLink.href = canvas.toDataURL("image/jpeg");
      downloadLink.download = `blog-${i}.jpg`;
      downloadLink.click();
    });
  }
});

// bg baslik tpocg lonca
const wbg = document.getElementById("wbg");
const bbg = document.getElementById("bbg");

const wbaslik = document.getElementById("wbaslik");
const bbaslik = document.getElementById("bbaslik");

const wt = document.getElementById("wt");
const bt = document.getElementById("bt");

const wl = document.getElementById("wl");
const bl = document.getElementById("bl");

wbg.addEventListener("click", () => {
  wbg.classList.add("clicked");
  bbg.classList.remove("clicked");
});

bbg.addEventListener("click", () => {
  bbg.classList.add("clicked");
  wbg.classList.remove("clicked");
});

wbaslik.addEventListener("click", () => {
  wbaslik.classList.add("clicked");
  bbaslik.classList.remove("clicked");
});

bbaslik.addEventListener("click", () => {
  bbaslik.classList.add("clicked");
  wbaslik.classList.remove("clicked");
});

wt.addEventListener("click", () => {
  wt.classList.add("clicked");
  bt.classList.remove("clicked");
});

bt.addEventListener("click", () => {
  bt.classList.add("clicked");
  wt.classList.remove("clicked");
});

wl.addEventListener("click", () => {
  wl.classList.add("clicked");
  bl.classList.remove("clicked");
});

bl.addEventListener("click", () => {
  bl.classList.add("clicked");
  wl.classList.remove("clicked");
});

// beyaz siyah arka
const wbgbutton = document.getElementById(wbg);
const bbgbutton = document.getElementById(bbg);
const whiteBG = "./images/all/SVG/whitebg-prev.svg";
const blackBG = "./images/all/SVG/blackbg-prev.svg";

function addWBG() {
  for (let i = 1; i < cells.length; i++) {
    const cell = cells[i];
    const wbgimg = document.createElement("img");
    wbgimg.classList.add("bgplaced");
    wbgimg.setAttribute("id", "WBGID");
    wbgimg.src = whiteBG;

    if (cell.querySelector(".bgplaced") !== null) {
      cell.removeChild(document.getElementById("BBGID"));
      cell.appendChild(wbgimg);
    } else {
      cell.appendChild(wbgimg);
    }
  }
}
function addBBG() {
  for (let i = 1; i < cells.length; i++) {
    const cell = cells[i];
    const bbgimg = document.createElement("img");
    bbgimg.classList.add("bgplaced");
    bbgimg.setAttribute("id", "BBGID");
    bbgimg.src = blackBG;

    if (cell.querySelector(".bgplaced") !== null) {
      cell.removeChild(document.getElementById("WBGID"));
      cell.appendChild(bbgimg);
    } else {
      cell.appendChild(bbgimg);
    }
  }
}

//Başlık arkası
const wbaslikbutton = document.getElementById(wbaslik);
const bbaslikbutton = document.getElementById(bbaslik);
const whiteTitle = "./images/all/SVG/wtitle-prev.svg";
const blackTitle = "./images/all/SVG/btitle-prev.svg";

function addWBaslik() {
  const firstCell = cells[0];
  const wtitleimg = document.createElement("img");
  wtitleimg.classList.add("titleplaced");
  wtitleimg.setAttribute("id", "WBasID");
  wtitleimg.src = whiteTitle;

  if (firstCell.querySelector(".titleplaced") !== null) {
    firstCell.removeChild(document.getElementById("BBasID"));
    firstCell.appendChild(wtitleimg);
  } else {
    firstCell.appendChild(wtitleimg);
  }
}
function addBBaslik() {
  const firstCell = cells[0];
  const btitleimg = document.createElement("img");
  btitleimg.classList.add("titleplaced");
  btitleimg.setAttribute("id", "BBasID");
  btitleimg.src = blackTitle;

  if (firstCell.querySelector(".titleplaced") !== null) {
    firstCell.removeChild(document.getElementById("WBasID"));
    firstCell.appendChild(btitleimg);
  } else {
    firstCell.appendChild(btitleimg);
  }
}

//TPÖÇG
const wtbutton = document.getElementById(wt);
const btbutton = document.getElementById(bt);
const whiteTpocg = "./images/all/SVG/wtpocg-prev.svg";
const blackTpocg = "./images/all/SVG/btpocg-prev.svg";

function addWTpocg() {
  const firstCell = cells[0];
  const wtpocgimg = document.createElement("img");
  wtpocgimg.classList.add("tpocgplaced");
  wtpocgimg.setAttribute("id", "WTpocgID");
  wtpocgimg.src = whiteTpocg;

  if (firstCell.querySelector(".tpocgplaced") !== null) {
    firstCell.removeChild(document.getElementById("BTpocgID"));
    firstCell.appendChild(wtpocgimg);
  } else {
    firstCell.appendChild(wtpocgimg);
  }
}
function addBTpocg() {
  const firstCell = cells[0];
  const btpocgimg = document.createElement("img");
  btpocgimg.classList.add("tpocgplaced");
  btpocgimg.setAttribute("id", "BTpocgID");
  btpocgimg.src = blackTpocg;

  if (firstCell.querySelector(".tpocgplaced") !== null) {
    firstCell.removeChild(document.getElementById("WTpocgID"));
    firstCell.appendChild(btpocgimg);
  } else {
    firstCell.appendChild(btpocgimg);
  }
}

//Lonca
const wlbutton = document.getElementById(wl);
const blbutton = document.getElementById(bl);
const whiteLonca = "./images/all/SVG/wlon-prev.svg";
const blackLonca = "./images/all/SVG/blon-prev.svg";

function addWLonca() {
  const firstCell = cells[0];
  const wloncaimg = document.createElement("img");
  wloncaimg.classList.add("loncaplaced");
  wloncaimg.setAttribute("id", "WLoncaID");
  wloncaimg.src = whiteLonca;

  if (firstCell.querySelector(".loncaplaced") !== null) {
    firstCell.removeChild(document.getElementById("BLoncaID"));
    firstCell.appendChild(wloncaimg);
  } else {
    firstCell.appendChild(wloncaimg);
  }
}
function addBLonca() {
  const firstCell = cells[0];
  const bloncaimg = document.createElement("img");
  bloncaimg.classList.add("loncaplaced");
  bloncaimg.setAttribute("id", "BLoncaID");
  bloncaimg.src = blackLonca;

  if (firstCell.querySelector(".loncaplaced") !== null) {
    firstCell.removeChild(document.getElementById("WLoncaID"));
    firstCell.appendChild(bloncaimg);
  } else {
    firstCell.appendChild(bloncaimg);
  }
}

//Başlık Kapak
const firstCell = cells[0];
const baslikInput = document.getElementById("baslik-text").value;

function addBaslikText() {
  const baslikOutput = document.createElement("div");
  baslikOutput.classList.add("baslik-text", "bytext");
  baslikOutput.setAttribute("id", "baslikTextID");
  baslikOutput.innerText = baslikInput;

  if (firstCell.querySelector(".baslik-text") !== null) {
    firstCell.removeChild(document.getElementById("baslikTextID"));
    firstCell.appendChild(baslikOutput);
  } else {
    firstCell.appendChild(baslikOutput);
  }
}

//Yazar Kapak
function addYazarText() {
  const firstCell = cells[0];
  const yazarInput = document.getElementById("yazar-text").value;
  const yazarOutput = document.createElement("div");
  yazarOutput.classList.add("yazar-text", "bytext");
  yazarOutput.setAttribute("id", "yazarTextID");
  yazarOutput.innerText = yazarInput;

  if (firstCell.querySelector(".yazar-text") !== null) {
    firstCell.removeChild(document.getElementById("yazarTextID"));
    firstCell.appendChild(yazarOutput);
  } else {
    firstCell.appendChild(yazarOutput);
  }
}

// Metin gir
function addMetinText() {
  const metinButton = document.getElementById("metin-text");

  // Metin cells
  for (let i = 1; i < cells.length; i++) {
    const cell = cells[i];

    if (cell.querySelector(".metinplaced") !== null) {
      metinButton.innerHTML =
        "<span class='error'> Yazıya tıkla ve düzenle! <span>";
      setTimeout(() => {
        metinButton.innerHTML = "Metin gir.";
      }, 1500);
    } else {
      if (cell.querySelector(".bgplaced") !== null) {

        const metinText = document.createElement("div");
        metinText.classList.add("metinplaced");
        metinText.innerText = "Yazı buraya gelecek.";
        metinText.setAttribute("contenteditable", "true");
        metinText.setAttribute("id", "metinText");

        cell.appendChild(metinText);

        if (cell.querySelector("#BBGID") !== null) {
          metinText.classList.add("whitetext");
        }
      } else {
        metinButton.innerHTML =
          "<span class='error'> Önce arka plan rengi seç! <span>";
        setTimeout(() => {
          metinButton.innerHTML = "Metin gir.";
        }, 1500);
      }
    }
  }
// başlık
const baslikText = document.createElement("span");
baslikText.classList.add("oneri-baslik");
baslikText.innerText = baslikInput;
baslikText.setAttribute("contenteditable", "true");
cells[1].appendChild(baslikText);

  // "paste" event
  const metinText = document.getElementsByClassName("metinplaced");
  for (let i = 0; i < metinText.length; i++) {
    const metinTextArray = metinText[i];
    metinTextArray.addEventListener("paste", function (e) {
      e.preventDefault();

      // Get the pasted text without formatting
      const clipboardData = e.clipboardData || window.clipboardData;
      const pastedText = clipboardData.getData("text/plain");

      // Replace special characters and keep line breaks
      const cleanedText = pastedText.replace(/[^\r\n\s]+/g, function (match) {
        return match.replace(/[]/g, "");
      });

      // Insert the cleaned text into the contenteditable element
      document.execCommand("insertText", false, cleanedText);
    });
  }
}
