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
  const numDivsToLoop = parseInt(integerDropdown.value);

  for (let i = 0; i < numDivsToLoop; i++) {
    const gridCell = gridCells[i];
    html2canvas(gridCell, { dpi: 300, scale: 3 }).then((canvas) => {
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

  for (let i = 1; i < cells.length; i++) {
    const cell = cells[i];
    const whiteBG = "./images/all/SVG/whitebg-prev.svg";
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
});

bbg.addEventListener("click", () => {
  bbg.classList.add("clicked");
  wbg.classList.remove("clicked");

  for (let i = 1; i < cells.length; i++) {
    const cell = cells[i];
    const blackBG = "./images/all/SVG/blackbg-prev.svg";
    const bbgimg = document.createElement("img");
    bbgimg.classList.add("bgplaced");
    bbgimg.style.opacity = "80%";
    bbgimg.setAttribute("id", "BBGID");
    bbgimg.src = blackBG;

    if (cell.querySelector(".bgplaced") !== null) {
      cell.removeChild(document.getElementById("WBGID"));
      cell.appendChild(bbgimg);
    } else {
      cell.appendChild(bbgimg);
    }
  }
});

wbaslik.addEventListener("click", () => {
  wbaslik.classList.add("clicked");
  bbaslik.classList.remove("clicked");

  const whiteTitle = "./images/all/SVG/wtitle-prev.svg";
  const wtitleimg = document.createElement("img");
  wtitleimg.classList.add("titleplaced");
  wtitleimg.setAttribute("id", "WBasID");
  wtitleimg.src = whiteTitle;

  if (cells[0].querySelector(".titleplaced") !== null) {
    cells[0].removeChild(document.getElementById("BBasID"));
    cells[0].appendChild(wtitleimg);
  } else {
    cells[0].appendChild(wtitleimg);
  }
});

bbaslik.addEventListener("click", () => {
  bbaslik.classList.add("clicked");
  wbaslik.classList.remove("clicked");

  const blackTitle = "./images/all/SVG/btitle-prev.svg";
  const btitleimg = document.createElement("img");
  btitleimg.classList.add("titleplaced");
  btitleimg.setAttribute("id", "BBasID");
  btitleimg.src = blackTitle;

  if (cells[0].querySelector(".titleplaced") !== null) {
    cells[0].removeChild(document.getElementById("WBasID"));
    cells[0].appendChild(btitleimg);
  } else {
    cells[0].appendChild(btitleimg);
  }
});

wt.addEventListener("click", () => {
  wt.classList.add("clicked");
  bt.classList.remove("clicked");

  const whiteTpocg = "./images/all/SVG/wtpocg-prev.svg";
  const wtpocgimg = document.createElement("img");
  wtpocgimg.classList.add("tpocgplaced");
  wtpocgimg.setAttribute("id", "WTpocgID");
  wtpocgimg.src = whiteTpocg;

  if (cells[0].querySelector(".tpocgplaced") !== null) {
    cells[0].removeChild(document.getElementById("BTpocgID"));
    cells[0].appendChild(wtpocgimg);
  } else {
    cells[0].appendChild(wtpocgimg);
  }
});

bt.addEventListener("click", () => {
  bt.classList.add("clicked");
  wt.classList.remove("clicked");

  const blackTpocg = "./images/all/SVG/btpocg-prev.svg";
  const btpocgimg = document.createElement("img");
  btpocgimg.classList.add("tpocgplaced");
  btpocgimg.setAttribute("id", "BTpocgID");
  btpocgimg.src = blackTpocg;

  if (cells[0].querySelector(".tpocgplaced") !== null) {
    cells[0].removeChild(document.getElementById("WTpocgID"));
    cells[0].appendChild(btpocgimg);
  } else {
    cells[0].appendChild(btpocgimg);
  }
});

wl.addEventListener("click", () => {
  wl.classList.add("clicked");
  bl.classList.remove("clicked");

  const whiteLonca = "./images/all/SVG/wlon-prev.svg";
  const wloncaimg = document.createElement("img");
  wloncaimg.classList.add("loncaplaced");
  wloncaimg.setAttribute("id", "WLoncaID");
  wloncaimg.src = whiteLonca;

  if (cells[0].querySelector(".loncaplaced") !== null) {
    cells[0].removeChild(document.getElementById("BLoncaID"));
    cells[0].appendChild(wloncaimg);
  } else {
    cells[0].appendChild(wloncaimg);
  }
});

bl.addEventListener("click", () => {
  bl.classList.add("clicked");
  wl.classList.remove("clicked");

  const blackLonca = "./images/all/SVG/blon-prev.svg";
  const bloncaimg = document.createElement("img");
  bloncaimg.classList.add("loncaplaced");
  bloncaimg.setAttribute("id", "BLoncaID");
  bloncaimg.src = blackLonca;

  if (cells[0].querySelector(".loncaplaced") !== null) {
    cells[0].removeChild(document.getElementById("WLoncaID"));
    cells[0].appendChild(bloncaimg);
  } else {
    cells[0].appendChild(bloncaimg);
  }
});

//Başlık Kapak

function addBaslikText() {
  const baslikInput = document.getElementById("baslik-text").value;
  const baslikOutput = document.createElement("div");
  baslikOutput.classList.add("baslik-text", "bytext");
  baslikOutput.setAttribute("id", "baslikTextID");
  baslikOutput.innerText = baslikInput;

  if (cells[0].querySelector(".baslik-text") !== null) {
    cells[0].removeChild(document.getElementById("baslikTextID"));
    cells[0].appendChild(baslikOutput);
  } else {
    cells[0].appendChild(baslikOutput);
  }
}

//Yazar Kapak
function addYazarText() {
  const yazarInput = document.getElementById("yazar-text").value;
  const yazarOutput = document.createElement("div");
  yazarOutput.classList.add("yazar-text", "bytext");
  yazarOutput.setAttribute("id", "yazarTextID");
  yazarOutput.innerText = yazarInput;

  if (cells[0].querySelector(".yazar-text") !== null) {
    cells[0].removeChild(document.getElementById("yazarTextID"));
    cells[0].appendChild(yazarOutput);
  } else {
    cells[0].appendChild(yazarOutput);
  }
}

// Metin gir

function addMetinText() {
  const metinButton = document.getElementById("metin-text");
  const baslikInput = document.getElementById("baslik-text").value;

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

        const baslikText = document.createElement("span");
        baslikText.classList.add("oneri-baslik");
        baslikText.innerText = baslikInput;
        baslikText.setAttribute("contenteditable", "true");
        cells[1].appendChild(baslikText);

        if (cell.querySelector("#BBGID") !== null) {
          baslikText.classList.add("whitetext");
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

const slideSection = document.getElementById("phonewarning");
const slideButton = document.getElementById("slideButton");

slideButton.addEventListener("click", () => {
  slideSection.style.display = "none";
});

const tutorialOpenBtn = document.getElementById("tut-show");
const tutorialCloseBtn = document.getElementById("tut-close");
const tutorialNextBtn = document.getElementById("tut-next");
const tutorialSection = document.getElementById("tutorialSection");
const tutorialWrap = document.getElementById("tutorial-wrap");
const tutorialText = document.getElementById("tutorialText");

const textContentArray = [
  "Merhaba, blog makinesine hoşgeldin. Bu baloncuk ile siteyi nasıl kullanacağını öğreneceksin. <br>Baloncuğu kapatmak için sol üstteki çarpıya tıkla. <br>Bir sonraki adım için çarpının yanındaki oka tıkla. <br>",
  "Öncelikle 'Görsel Seç' yazan tuş ile blog görselini yükle.<br>Yüklediğin görsel ve yapacağın diğer değişiklikleri aşağıda canlı görebilirsin.",
  "Şimdi siyah/beyaz tuşlardan biriyle yazının arkasına koyulacak rengi seç. <br>Yazının rengi otomatik ayarlanacak.",
  "Blog görseline uygun olduğunu düşündüğün siyah/beyaz 'Akıl Defterim, TPÖÇG ve Lonca' logolarını seç.",
  "Blogun başlığını ve yazar ismini yazıp her ikisinin de yanındaki onay tuşuna tıkla.<br><br><b>Not: </b>Onay tuşlarına tıklamazsan yazılar yerleştirilmez.<br>Bir hata yaparsan <b>bir sonraki adıma geçmeden</b> yazıyı değiştirip tekrar onay tuşlarına basabilirsin.",
  "Önceki adımları sorunsuz geçtikten sonra 'Metin gir.' yazılı tuşa tıklayıp blog içeriğini yerleştirmeye başlayabilirsin.<br><br><b>Not: </b>Yazıları aşağıdaki görseller üzerinde düzenleyeceksin.",
  "Son adım olarak '(Sayfa Sayısı Seç)' yazan menüden tasarımın kaç sayfa olduğunu seçip altındaki 'Yazdır!' tuşu ile bitirebilirsin.<br><br>Kolay gelsin hocam :)",
];
let currentTextIndex = 0;
let isMoved = false;

let currentPositionIndex = 0;
const positions = [68, 140, 384, 744, 984, 984];

tutorialNextBtn.addEventListener("click", () => {
  currentTextIndex = (currentTextIndex + 1) % textContentArray.length;
  tutorialText.style.opacity = 0;

  setTimeout(() => {
    tutorialText.innerHTML = textContentArray[currentTextIndex];
    tutorialText.style.opacity = 1;
  }, 500);

  if (currentPositionIndex < positions.length) {
    tutorialWrap.style.left = positions[currentPositionIndex] + "px";
    currentPositionIndex++;
  } else {
    tutorialSection.style.display = "none";
  }
});

tutorialCloseBtn.addEventListener("click", () => {
  tutorialSection.style.display = "none";
  currentPositionIndex = 0;
  tutorialWrap.style.left = "0";
  tutorialOpenBtn.style.display = "block";
});

tutorialOpenBtn.addEventListener("click", () => {
  tutorialSection.style.display = "block";
  tutorialWrap.style.left = "60px";
  tutorialText.innerHTML = textContentArray[0];
  setTimeout(() => {
  tutorialOpenBtn.style.display = "none";
  }, 4000);
});
