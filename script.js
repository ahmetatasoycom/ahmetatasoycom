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
  const scrollButton2 = document.getElementById('scrollButton2');

  scrollButton2.addEventListener('click', function (e) {
    e.preventDefault();

    const bottom2Section = document.getElementById('bottom2');
    bottom2Section.scrollIntoView({ behavior: 'smooth' });
  });
});







document.addEventListener('DOMContentLoaded', function () {
  const codeDisplay2 = document.getElementById('code2');
  const copyButton2 = document.getElementById('copyButton2');
  const copiedText2 = document.getElementById('copiedText2');

  const codes = {
    linkh1: `<div class="h-16 ...">h-16</div>`,
    linkh2: `<div class="h-20 ...">h-20</div>`,
    linkh3: `<div class="h-24 ...">h-24</div>`,
    linkh4: `<div class="h-32 ...">h-32</div>`,
    linkh5: `<div class="h-40 ...">h-40</div>`,
  };

  document.getElementById('linkh1').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay2.textContent = codes.linkh1;
  });

  document.getElementById('linkh2').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay2.textContent = codes.linkh2;
  });

  document.getElementById('linkh3').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay2.textContent = codes.linkh3;
  });
  document.getElementById('linkh4').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay2.textContent = codes.linkh4;
  });

  document.getElementById('linkh5').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay2.textContent = codes.linkh5;
  });

  copyButton2.addEventListener('click', function () {
    const code = codeDisplay2.textContent;
    navigator.clipboard.writeText(code).then(function () {
      copiedText2.classList.add('show');
      setTimeout(function () {
        copiedText2.classList.remove('show');
      }, 2000);
    }, function () {
      alert('Kopyalama işlemi başarısız oldu.');
    });
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








document.addEventListener('DOMContentLoaded', function () {
  const codeDisplay4 = document.getElementById('code4');
  const copyButton4 = document.getElementById('copyButton4');
  const copiedText4 = document.getElementById('copiedText4');

  const codes = {
    linkc1: `<div class="text-current">text-current</div>`,
    linkc2: `<div class="text-black">text-black</div>`,
    linkc3: `<div class="text-orange-500">text-orange-500</div>`,
    linkc4: `<div class="text-red-900">text-red-900</div>`,
    linkc5: `<div class="text-sky-400">text-sky-400</div>`,
  };

  document.getElementById('linkc1').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay4.textContent = codes.linkc1;
  });

  document.getElementById('linkc2').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay4.textContent = codes.linkc2;
  });

  document.getElementById('linkc3').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay4.textContent = codes.linkc3;
  });
  document.getElementById('linkc4').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay4.textContent = codes.linkc4;
  });

  document.getElementById('linkc5').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay4.textContent = codes.linkc5;
  });

  copyButton4.addEventListener('click', function () {
    const code = codeDisplay4.textContent;
    navigator.clipboard.writeText(code).then(function () {
      copiedText4.classList.add('show');
      setTimeout(function () {
        copiedText4.classList.remove('show');
      }, 2000);
    }, function () {
      alert('Kopyalama işlemi başarısız oldu.');
    });
  });


});














document.addEventListener('DOMContentLoaded', function () {
  const codeDisplay5 = document.getElementById('code5');
  const copyButton5 = document.getElementById('copyButton5');
  const copiedText5 = document.getElementById('copiedText5');

  const codes = {
    linkbg1: `<div class="bg-red-700">bg-red-700</div>`,
    linkbg2: `<div class="bg-orange-500">bg-orange-500</div>`,
    linkbg3: `<div class="bg-blue-500">bg-blue-500</div>`,
    linkbg4: `<div class="bg-pink-800">bg-pink-800</div>`,
  };

  document.getElementById('linkbg1').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay5.textContent = codes.linkbg1;
  });

  document.getElementById('linkbg2').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay5.textContent = codes.linkbg2;
  });

  document.getElementById('linkbg3').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay5.textContent = codes.linkbg3;
  });
  document.getElementById('linkbg4').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay5.textContent = codes.linkbg4;
  });

  copyButton5.addEventListener('click', function () {
    const code = codeDisplay5.textContent;
    navigator.clipboard.writeText(code).then(function () {
      copiedText5.classList.add('show');
      setTimeout(function () {
        copiedText5.classList.remove('show');
      }, 2000);
    }, function () {
      alert('Kopyalama işlemi başarısız oldu.');
    });
  });


});

















document.addEventListener('DOMContentLoaded', function () {
  const codeDisplay6 = document.getElementById('code6');
  const copyButton6 = document.getElementById('copyButton6');
  const copiedText6 = document.getElementById('copiedText6');

  const codes = {
    linkds1: `<div class="drop-shadow-md">drop-shadow-md</div>`,
    linkds2: `<div class="drop-shadow-lg">drop-shadow-lg</div>`,
    linkds3: `<div class="drop-shadow-xl">drop-shadow-xl</div>`,
    linkds4: `<div class="drop-shadow-2xl">drop-shadow-2xl</div>`,
  };

  document.getElementById('linkds1').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay6.textContent = codes.linkds1;
  });

  document.getElementById('linkds2').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay6.textContent = codes.linkds2;
  });

  document.getElementById('linkds3').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay6.textContent = codes.linkds3;
  });
  document.getElementById('linkds4').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay6.textContent = codes.linkds4;
  });

  copyButton6.addEventListener('click', function () {
    const code = codeDisplay6.textContent;
    navigator.clipboard.writeText(code).then(function () {
      copiedText6.classList.add('show');
      setTimeout(function () {
        copiedText6.classList.remove('show');
      }, 2000);
    }, function () {
      alert('Kopyalama işlemi başarısız oldu.');
    });
  });


});











document.addEventListener('DOMContentLoaded', function () {
  const codeDisplay7 = document.getElementById('code7');
  const copyButton7 = document.getElementById('copyButton7');
  const copiedText7 = document.getElementById('copiedText7');

  const codes = {
    linkfn1: `<p class="font-sans ...">The quick brown fox ...</p>`,
    linkfn2: `<p class="font-serif ...">The quick brown fox ...</p>`,
    linkfn3: `<p class="font-mono ...">The quick brown fox ...</p>`,
  };

  document.getElementById('linkfn1').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay7.textContent = codes.linkfn1;
  });

  document.getElementById('linkfn2').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay7.textContent = codes.linkfn2;
  });

  document.getElementById('linkfn3').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay7.textContent = codes.linkfn3;
  });

  copyButton7.addEventListener('click', function () {
    const code = codeDisplay7.textContent;
    navigator.clipboard.writeText(code).then(function () {
      copiedText7.classList.add('show');
      setTimeout(function () {
        copiedText7.classList.remove('show');
      }, 2000);
    }, function () {
      alert('Kopyalama işlemi başarısız oldu.');
    });
  });


});










document.addEventListener('DOMContentLoaded', function () {
  const codeDisplay8 = document.getElementById('code8');
  const copyButton8 = document.getElementById('copyButton8');
  const copiedText8 = document.getElementById('copiedText8');

  const codes = {
    linkfs1: `<p class="text-sm ...">The quick brown fox ...</p>`,
    linkfs2: `<p class="text-base ...">The quick brown fox ...</p>`,
    linkfs3: `<p class="text-lg ...">The quick brown fox ...</p>`,
    linkfs4: `<p class="text-xl ...">The quick brown fox ...</p>`,
  };

  document.getElementById('linkfs1').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay8 .textContent = codes.linkfs1;
  });

  document.getElementById('linkfs2').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay8.textContent = codes.linkfs2;
  });

  document.getElementById('linkfs3').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay8.textContent = codes.linkfs3;
  });

  document.getElementById('linkfs4').addEventListener('click', function (e) {
    e.preventDefault();
    codeDisplay8.textContent = codes.linkfs4;
  });

  copyButton8.addEventListener('click', function () {
    const code = codeDisplay8.textContent;
    navigator.clipboard.writeText(code).then(function () {
      copiedText8.classList.add('show');
      setTimeout(function () {
        copiedText8.classList.remove('show');
      }, 2000);
    }, function () {
      alert('Kopyalama işlemi başarısız oldu.');
    });
  });


});