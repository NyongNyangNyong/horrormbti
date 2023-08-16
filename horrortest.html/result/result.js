function moveEnfj() {
  location.href = "/horrortest.html/result/ENFJ.html"
}

function moveEnfp() {
  location.href = "/horrortest.html/result/ENFP.html"
}

function moveEntj() {
  location.href = "/horrortest.html/result/ENTJ.html"
}

function moveEntp() {
  location.href = "/horrortest.html/result/ENTP.html"
}

function moveEsfj() {
  location.href = "/horrortest.html/result/ESFJ.html"
}

function moveEsfp() {
  location.href = "/horrortest.html/result/ESFP.html"
}

function moveEstj() {
  location.href = "/horrortest.html/result/ESTJ.html"
}

function moveEstp() {
  location.href = "/horrortest.html/result/ESTP.html"
}

function moveInfj() {
  location.href = "/horrortest.html/result/INFJ.html"
}

function moveInfp() {
  location.href = "/horrortest.html/result/INFP.html"
}

function moveIntj() {
  location.href = "/horrortest.html/result/INTJ.html"
}

function moveIntp() {
  location.href = "/horrortest.html/result/INTP.html"
}

function moveIsfj() {
  location.href = "/horrortest.html/result/ISFJ.html"
}

function moveIsfp() {
  location.href = "/horrortest.html/result/ISFP.html"
}

function moveIstj() {
  location.href = "/horrortest.html/result/ISTJ.html"
}

function moveIstp() {
  location.href = "/horrortest.html/result/ISTP.html"
}

function copyToClipboard(val) {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
  }

  $('#tagButton').click(function() {
    var textCopy = '#폐가유형테스트 #폐가탐험테스트 #나의유형은? #유형테스트 #뇽냥뇽 #폐가MBTI #스토리로보는유형테스트 #요즘유행하는테스트'
    copyToClipboard(textCopy);
    alert('해시태그 복사완료!');
  });