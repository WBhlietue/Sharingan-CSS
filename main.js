const main = document.getElementById("main");
var autoChange = true;
var actions = [];

function GetElement(style, id = "") {
  let item = document.createElement("div");
  item.className = "centerItems " + style;
  item.id = id;
  return item;
}

function FirstEye1() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline");
  var eyeInner = GetInnerCircle(1);
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
function FirstEye2() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline");
  var eyeInner = GetInnerCircle(2);
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
function FirstEye3() {
  main.innerHTML = "";
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
  main.innerHTML = "";
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
      let outlineItem = GetElement("markMangekyo1Item2");
      outline.appendChild(outlineItem);
      outline.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(outline);
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

function Mangekyo2() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline  noBoxShadow");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle = GetElement("blackCircleEmpty");
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
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo2Item");
    mainItem.appendChild(item1);
    return mainItem;
  }
}
function Mangekyo3() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline black noBoxShadow");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle = GetElement("blackCircleBig");
  var out = GetElement("markOutline1");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  eyeOutline.appendChild(out);
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
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo3Item");
    mainItem.appendChild(item1);
    return mainItem;
  }
}
function Mangekyo4() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline  noBoxShadow");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle = GetElement("redCircle");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      let circle2 = GetEyeElement2();
      circle2.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
      item.appendChild(circle2);
    }
    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo4Item");
    mainItem.appendChild(item1);
    return mainItem;
  }
  function GetEyeElement2() {
    let mainItem = GetElement("markMainItem z5");
    let item2 = GetElement("markMangekyo4Item2");
    let item3 = GetElement("markMangekyo4Item3");
    item3.appendChild(item2);
    mainItem.appendChild(item3);
    return mainItem;
  }
}
function Mangekyo5() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline  noBoxShadow");
  var eyeBack = GetElement("backBlack");
  var eyeInner = GetInnerCircle(4);
  var eyeBlackCircle = GetElement("redCircle");
  var eyeBlackCircle1 = GetElement("blackCircleLittle noBoxShadow");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle);
  eyeOutline.appendChild(eyeBlackCircle1);

  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.appendChild(eyeBack);
    for (let i = 0; i < num; i++) {
      let circle = GetEyeElement1();
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      let circle2 = GetEyeElement2();
      circle2.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
      item.appendChild(circle2);
    }
    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo5Item");
    mainItem.appendChild(item1);
    return mainItem;
  }
  function GetEyeElement2() {
    let mainItem = GetElement("markMainItem z5");
    return mainItem;
  }
}
function Mangekyo6() {
  main.innerHTML = "";
  var eyeOutline = GetElement("outline  noBoxShadow");
  var eyeBack = GetElement("backBlackCircle");
  var eyeInner = GetInnerCircle(3);
  var eyeBlackCircle1 = GetElement("blackCircleLittle noBoxShadow");
  eyeOutline.appendChild(eyeInner);
  eyeOutline.appendChild(eyeBlackCircle1);

  main.appendChild(eyeOutline);
  function GetInnerCircle(num) {
    let rotDiff = 360 / num;
    let item = GetElement("markOutlineParent");
    item.appendChild(eyeBack);
    for (let i = 0; i < num; i++) {
        let circle2 = GetElement("markOutline2");
      let circle = GetEyeElement1();
      circle.appendChild(circle2)
      circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
      item.appendChild(circle);
    }
    return item;
  }
  function GetEyeElement1() {
    let mainItem = GetElement("markMainItem");
    let item1 = GetElement("markMangekyo6Item");
    let item2 = GetElement("markMangekyo6Item2");
    item2.appendChild(item1);
    mainItem.appendChild(item2)
    return mainItem;
  }
}
function Mangekyo7() {
    main.innerHTML = "";
    var eyeOutline = GetElement("outline  noBoxShadow");
    var eyeBack = GetElement("markMangekyo7Circle");
    var eyeInner = GetInnerCircle(3);
    var eyeBlackCircle1 = GetElement("blackCircle ");
    eyeOutline.appendChild(eyeInner);
    eyeOutline.appendChild(eyeBlackCircle1);
  
    main.appendChild(eyeOutline);
    function GetInnerCircle(num) {
      let rotDiff = 360 / num;
      let item = GetElement("markOutlineParent");
      item.appendChild(eyeBack);
      for (let i = 0; i < num; i++) {
        let circle = GetEyeElement1();
        circle.style.transform = "rotateZ(" + rotDiff * i + "deg)";
        item.appendChild(circle);
      }
      return item;
    }
    function GetEyeElement1() {
      let mainItem = GetElement("markMainItem");
      let item1 = GetElement("markMangekyo7Item");

      let item2 = GetElement("markMangekyo7Item2");
      mainItem.appendChild(item1);
      mainItem.appendChild(item2)
      return mainItem;
    }
  }

actions.push(FirstEye1);
actions.push(FirstEye2);
actions.push(FirstEye3);
actions.push(Mangekyo1);
actions.push(Mangekyo2);
actions.push(Mangekyo3);
actions.push(Mangekyo4);
actions.push(Mangekyo5);
actions.push(Mangekyo6);
actions.push(Mangekyo7);
num = 0;
if (autoChange) {
  setInterval(() => {
    actions[num % actions.length]();
    num++;
  }, 2000);
} else {
  // FirstEye();
  // Mangekyo1();
  // Mangekyo2();
  // Mangekyo3()
  // Mangekyo4()
  // Mangekyo5();
//   Mangekyo6();
  Mangekyo7();
}
