document.addEventListener('DOMContentLoaded', function () {
  const codeDisplay = document.getElementById('code');
  const copyButton = document.getElementById('copyButton');
  const copiedText = document.getElementById('copiedText');

  const codes = {
    link1: `<div class="w-64 ...">w-64</div>`,
    link2: `<div class="w-56 ...">w-56</div>`,
    link3: `<div class="w-48 ...">w-48</div>`,
    link4: `<div class="w-32 ...">w-32</div>`,
    link5: `<div class="w-24 ...">w-24</div>`,
  };

  document.getElementById('link1').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay.textContent = codes.link1;
  });

  document.getElementById('link2').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay.textContent = codes.link2;
  });

  document.getElementById('link3').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay.textContent = codes.link3;
  });
  document.getElementById('link4').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay.textContent = codes.link4;
  });

  document.getElementById('link5').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay.textContent = codes.link5;
  });

  copyButton.addEventListener('click', function () {
    const code = codeDisplay.textContent;
    navigator.clipboard.writeText(code).then(function () {
      copiedText.classList.add('show');
      setTimeout(function () {
        copiedText.classList.remove('show');
      }, 2000);
    }, function () {
      alert('Kopyalama işlemi başarısız oldu.');
    });
  });


});






document.addEventListener('DOMContentLoaded', function () {
  const scrollButton = document.getElementById('scrollButton');

  scrollButton.addEventListener('click', function (e) {
    e.preventDefault();

    const bottomSection = document.getElementById('bottom');
    bottomSection.scrollIntoView({ behavior: 'smooth' });
  });
});










document.addEventListener('DOMContentLoaded', function () {
  const codeDisplay3 = document.getElementById('code3');
  const copyButton3 = document.getElementById('copyButton3');
  const copiedText3 = document.getElementById('copiedText3');

  const codes = {
    links1: `<div class="size-16 ...">size-16</div>`,
    links2: `<div class="size-20 ...">size-20</div>`,
    links3: `<div class="size-24 ...">size-24</div>`,
    links4: `<div class="size-32 ...">size-32</div>`,
    links5: `<div class="size-40 ...">size-40</div>`,
  };

  document.getElementById('links1').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay3.textContent = codes.links1;
  });

  document.getElementById('links2').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay3.textContent = codes.links2;
  });

  document.getElementById('links3').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay3.textContent = codes.links3;
  });
  document.getElementById('links4').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay3.textContent = codes.links4;
  });

  document.getElementById('links5').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay3.textContent = codes.links5;
  });

  copyButton3.addEventListener('click', function () {
    const code = codeDisplay3.textContent;
    navigator.clipboard.writeText(code).then(function () {
      copiedText3.classList.add('show');
      setTimeout(function () {
        copiedText3.classList.remove('show');
      }, 2000);
    }, function () {
      alert('Kopyalama işlemi başarısız oldu.');
    });
  });


});