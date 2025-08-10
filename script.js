// Tema toggle (örnek olarak dark mode açma)
document.documentElement.classList.toggle('dark');


// Navbar ile ilgili işlevler ve animasyonlar
function setupNavbarLogic() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav-btn");

    links.forEach((link) => {
        const href = link.getAttribute("href");
        const underline = link.querySelector(".nav-underline");

        // Aktif sayfanın altını çiz
        if (href === currentPage) {
            link.classList.add("text-white");
            link.classList.remove("text-gray-400");
            underline.classList.remove("scale-x-0");
            underline.classList.add("scale-x-100");
        }
    });

    // Sayfa geçişlerinde animasyonları güncelleme ve yumuşak geçiş
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const target = btn.getAttribute("href");

            // Butonun altını çizme animasyonu
            document.querySelectorAll(".nav-btn").forEach(link => {
                const underline = link.querySelector(".nav-underline");
                link.classList.remove("text-white");
                link.classList.add("text-gray-400");
                underline.classList.remove("scale-x-100");
                underline.classList.add("scale-x-0");
            });
            const underline = btn.querySelector(".nav-underline");
            btn.classList.add("text-white");
            btn.classList.remove("text-gray-400");
            underline.classList.remove("scale-x-0");
            underline.classList.add("scale-x-100");

            // Sayfa içeriğini dinamik yükleme
            document.body.classList.add("fade-out");
            setTimeout(() => {
                // Burada target adresindeki içeriği fetch ile çekip ana içeriğe yerleştirebilirsin.
                // Bu kodun mevcut yapında çalışması için HTML'ini SPA mantığına göre düzenlemen gerek.
                window.location.href = target;
            }, 300);
        });
    });
}


// Discord Lanyard durum verisini gösteren fonksiyon
function setupDiscordStatus() {
  const userId = "256830429724672011";
  const ws = new WebSocket("wss://api.lanyard.rest/socket");

  let heartbeatInterval;

  ws.onopen = () => {
    ws.send(JSON.stringify({
      op: 2,
      d: { subscribe_to_id: userId }
    }));
  };

  ws.onmessage = (event) => {
    const { t, d, op } = JSON.parse(event.data);

    if (op === 1) {
      heartbeatInterval = setInterval(() => {
        ws.send(JSON.stringify({ op: 3 }));
      }, d.heartbeat_interval);
    }

    if (t === "INIT_STATE" || t === "PRESENCE_UPDATE") {
      if (d && d.discord_user) {
        const status = d.discord_status;
        const username = d.discord_user.username;

        const indicator = document.getElementById("status-indicator");
        const usernameSpan = document.getElementById("discord-username");

        if (indicator && usernameSpan) {
          usernameSpan.textContent = username || "Unknown";

          if (status === "online") {
            indicator.className = "w-4 h-4 rounded-full bg-green-500 shadow-[0_0_8px_2px_rgba(34,197,94,0.7)] animate-pulse";
          } else if (status === "idle") {
            indicator.className = "w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_8px_2px_rgba(234,179,8,0.7)] animate-pulse";
          } else if (status === "dnd") {
            indicator.className = "w-4 h-4 rounded-full bg-red-600 shadow-[0_0_8px_2px_rgba(220,38,38,0.7)] animate-pulse";
          } else {
            indicator.className = "w-4 h-4 rounded-full bg-gray-400 shadow-none animate-none";
          }
        }
      } else {
        console.warn("Discord user data is missing", d);
      }
    }
  };

  ws.onerror = (err) => {
    console.error("WebSocket error:", err);
  };
}
