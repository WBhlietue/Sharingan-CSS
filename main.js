const main = document.getElementById("main");

function GetElement(style, id = "") {
  let item = document.createElement("div");
  item.className = "centerItems " + style;
  item.id = id;
  return item;
}

function FirstEye() {
    main.innerHTML = ""
  var eyeOutline = GetElement("outline");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle = GetElement("blackCircle");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    return item;
  }
  function GetEyeElement1() {
    let circle = GetElement("markOutline");
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markItem1");
    let item2 = GetElement("markItem2");
    mainItem.appendChild(item1);
    item1.appendChild(item2);
    circle.appendChild(mainItem);
    return circle;
  }
}

function Mangekyo1() {
    main.innerHTML = ""
  var eyeOutline = GetElement("outline black noBoxShadow");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle = GetElement("blackCircle");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      let outline = GetElement("z5");
      let outlineItem = GetElement("markMangekyo1Item2")
      outline.appendChild(outlineItem)
      outline.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(outline)
      item.appendChild(circle);
    }
    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo1Item");
    mainItem.appendChild(item1);
    return mainItem;
  }
}

// FirstEye();
Mangekyo1();
