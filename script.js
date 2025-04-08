document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".overlay");
  const deviloverlay = document.querySelector(".devil-overlay");
  const siteContent = document.querySelector(".site-content");

  // Giriş animasyonu tamamlandığında overlay'i kaldır
  setTimeout(() => {
    overlay.style.opacity = "0"; // Şeffaflaşma
    setTimeout(() => {
      overlay.style.display = "none"; // Ekranı tamamen kaldır
      siteContent.style.display = "block"; // Web sitesi içeriğini göster

      // Navbar ve içerik animasyonları başlasın
      const animatableElements = document.querySelectorAll(
        ".navbar, .main-content, .center-text-container, contentCenterText"
      );
      animatableElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`; // Daha kısa gecikme
        el.classList.add("animate");
      });
    }, 500); // Şeffaflaşma süresi daha kısa
  }, 3000); // Giriş animasyonunu biraz daha hızlı bitiriyoruz

  setTimeout(() => {
    deviloverlay.style.opacity = "0"; // Şeffaflaşma
    setTimeout(() => {
      deviloverlay.style.display = "none"; // Ekranı tamamen kaldır
      siteContent.style.display = "block"; // Web sitesi içeriğini göster

      // Navbar ve içerik animasyonları başlasın
      const animatableElements = document.querySelectorAll(
        ".navbar, .main-content, .center-text-container, contentCenterText"
      );
      animatableElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`; // Daha kısa gecikme
        el.classList.add("animate");
      });
    }, 500); // Şeffaflaşma süresi daha kısa
  }, 3000); // Giriş animasyonunu biraz daha hızlı bitiriyoruz


  // Scroll ile animasyon başlatma işlemi
  const animatedDivs = document.querySelectorAll(".animated-div");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Div görünür olduğunda animasyonu başlat
          observer.unobserve(entry.target); // Bir defa animasyonu başlat
        }
      });
    },
    { threshold: 0.5 }
  ); // Ekranın %50'si görünür olduğunda animasyonu başlat

  animatedDivs.forEach((div) => {
    observer.observe(div); // Her div için gözlemciyi başlat
  });
});

$(function () {
  $("a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});

