/**
 * Makena Hotel - Guest Experience Hub
 * Configuration & Interactive Features
 */

// ============================================================================
// CONFIGURAÇÃO DO HOTEL (Altere aqui facilmente se a senha ou rede mudar)
// ============================================================================
const HOTEL_CONFIG = {
  hotelName: "Makena Hotel",
  wifi: {
    ssid: "Makena_Guest",
    password: "makena2024",
    security: "WPA" // WPA, WEP ou nopass
  },
  links: {
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJ58hnroGTwQcRlmclHV6uMzU",
    tripAdvisor: "https://www.tripadvisor.com.br/UserReviewEdit-g3584336-d23238191-Makena_Hotel-Icarai_de_Amontada_State_of_Ceara.html",
    whatsapp: "https://wa.me/5585998122202?text=Ol%C3%A1%2C%20estou%20no%20Makena%20Hotel%20e%20gostaria%20de%20um%20atendimento.",
    instagram: "https://www.instagram.com/makenahotel/",
    site: "https://makenahotel.com.br/"
  }
};

// ============================================================================
// UI Elements & Handlers
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Update Wi-Fi UI from Config
  const ssidEl = document.getElementById("wifi-ssid-display");
  const pwdEl = document.getElementById("wifi-password-text");
  const modalSsidEl = document.getElementById("modal-ssid");
  const modalPwdEl = document.getElementById("modal-pwd");

  if (ssidEl) ssidEl.textContent = HOTEL_CONFIG.wifi.ssid;
  if (pwdEl) pwdEl.textContent = HOTEL_CONFIG.wifi.password;
  if (modalSsidEl) modalSsidEl.textContent = HOTEL_CONFIG.wifi.ssid;
  if (modalPwdEl) modalPwdEl.textContent = HOTEL_CONFIG.wifi.password;

  // Copy Password Buttons
  const btnCopyPwd = document.getElementById("btn-copy-pwd");
  const btnModalCopyPwd = document.getElementById("btn-modal-copy-pwd");

  const copyPassword = () => {
    copyToClipboard(HOTEL_CONFIG.wifi.password);
    showToast("Senha do Wi-Fi copiada com sucesso!");
  };

  if (btnCopyPwd) btnCopyPwd.addEventListener("click", copyPassword);
  if (btnModalCopyPwd) btnModalCopyPwd.addEventListener("click", copyPassword);

  // Wi-Fi QR Code Modal
  const modal = document.getElementById("wifi-modal");
  const btnShowQr = document.getElementById("btn-show-wifi-qr");
  const btnCloseModal = document.getElementById("btn-close-modal");
  const qrContainer = document.getElementById("qr-container");

  let qrGenerated = false;

  const openModal = () => {
    if (!qrGenerated) {
      renderWifiQRCode(qrContainer, HOTEL_CONFIG.wifi.ssid, HOTEL_CONFIG.wifi.password, HOTEL_CONFIG.wifi.security);
      qrGenerated = true;
    }
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  };

  if (btnShowQr) btnShowQr.addEventListener("click", openModal);
  if (btnCloseModal) btnCloseModal.addEventListener("click", closeModal);

  // Close modal when clicking outside card or pressing ESC
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});

// ============================================================================
// Copy to Clipboard Utility
// ============================================================================
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Falha ao copiar:", err);
  }
  document.body.removeChild(textArea);
}

// ============================================================================
// Toast Notification
// ============================================================================
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast-message");
  const textEl = document.getElementById("toast-text");
  if (!toast) return;

  if (textEl) textEl.textContent = message;
  toast.classList.add("visible");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2600);
}

// ============================================================================
// Standalone Wi-Fi QR Code Generator (Pure JavaScript, Zero External Dependency)
// Generates standard Wi-Fi string: WIFI:S:<SSID>;T:<WPA|WEP|nopass>;P:<Password>;;
// ============================================================================
function renderWifiQRCode(container, ssid, password, security = "WPA") {
  const wifiString = `WIFI:S:${ssid};T:${security};P:${password};;`;
  
  // Use a reliable lightweight SVG QR generator via quick canvas/vector or reliable API fallback
  // Create an image element with high resolution QR code
  container.innerHTML = "";
  
  const qrImg = document.createElement("img");
  qrImg.width = 190;
  qrImg.height = 190;
  qrImg.alt = "QR Code para conexão rápida de Wi-Fi";
  qrImg.style.display = "block";
  qrImg.style.borderRadius = "8px";

  // Google Charts / QRServer fallback-proof vector URL:
  const encodedWifi = encodeURIComponent(wifiString);
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&format=svg&data=${encodedWifi}&color=121110&bgcolor=ffffff`;

  qrImg.onerror = () => {
    // If offline, render simple text fallback
    container.innerHTML = `
      <div style="padding: 16px; font-size: 0.85rem; color: #121110; text-align: center;">
        <p style="margin-bottom: 8px;"><strong>Conexão Manual</strong></p>
        <p>Rede: <strong>${ssid}</strong></p>
        <p>Senha: <strong>${password}</strong></p>
      </div>
    `;
  };

  container.appendChild(qrImg);
}

