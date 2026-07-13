# 🏮 Fener — Bilingual Animated Login Screen

A glassmorphic, night-themed login screen with a cursor-tilting card, an animated firefly/starfield background, and full **Turkish ⇄ English** language switching. Pure HTML, CSS and vanilla JavaScript — no frameworks, no build step.

**🌐 Live Demo:** [https://loginscreen1.netlify.app](https://loginscreen1.netlify.app)

---

## 🇹🇷 Türkçe

### Genel Bakış
Fener, gece temalı, cam efektli (glassmorphism) bir giriş ekranıdır. Sağ üstteki **TR / EN** düğmesiyle tüm arayüz metinleri anında dil değiştirir. Arka planda yumuşak bir ay, hareketli ateşböcekleri ve karanlık bir dağ silueti bulunur; giriş kartı imlecin yönüne göre hafifçe eğilir.

### ✨ Özellikler
- 🌗 **TR / EN dil değiştirici** — sayfadaki tüm metinler (başlık, etiketler, hata mesajı, butonlar) anında değişir
- 💎 **Cam efekti (glassmorphism)** kart — `backdrop-filter: blur()` ile
- 🖱️ **3D eğilme efekti** — kart, fare hareketine göre `perspective` ile hafifçe döner
- ✨ **Canvas tabanlı ateşböceği animasyonu** — parçacıklar yavaşça süzülüp titreşir
- 🌕 **Ay ve dağ silueti** ile atmosferik gece arka planı
- 👁️ **Şifre göster/gizle** düğmesi (özel SVG ikon değişimi)
- ☑️ **Beni hatırla** — özel stillendirilmiş checkbox
- 🔗 **Şifremi unuttum** ve **hesap oluştur** bağlantıları
- ⚡ **Sahte giriş akışı** — gönderimde yükleme (spinner) animasyonu, ardından başarı veya hata durumu
- 🔐 **Google / Apple ile devam et** butonları (arayüz hazır, gerçek OAuth bağlı değil)
- 📱 **Tam duyarlı (responsive)** tasarım — mobil, tablet, masaüstü
- ♿ **Erişilebilirlik** — klavye ile odaklanabilir alanlar, `prefers-reduced-motion` desteği

### 🎨 Renk Paleti
```css
--bg-deep:      #0a0e1a   /* Ana koyu lacivert arka plan */
--bg-violet:    #241246   /* Sol üst mor kütle */
--bg-teal:      #062e2c   /* Sağ alt teal kütle */
--accent:       #ffb454   /* Kehribar / fener rengi vurgu */
--text-primary: #f3f1ff   /* Ana metin rengi */
--text-muted:   #9aa3bd   /* İkincil metin rengi */
--danger:       #ff7a7a   /* Hata mesajı rengi */
```

### 🔤 Yazı Tipleri
- **Fraunces** (serif) — başlıklar için karakterli görünüm
- **Inter** (sans-serif) — form etiketleri ve gövde metni için

### 📁 Proje Yapısı
```
login-screen-1/
├── index.html     # Tüm HTML, CSS ve JS tek dosyada
└── README.md      # Bu dosya
```
> Not: Proje tek bir `index.html` dosyasından oluşur; ayrı `styles.css` veya `script.js` dosyası yoktur.

### 🚀 Yerelde Çalıştırma
Harici bağımlılık yok; dosyayı doğrudan tarayıcıda açabilirsin.

```bash
git clone https://github.com/darkknightlag/login-screen-1.git
cd login-screen-1
```

**Seçenek 1 — Doğrudan aç**
`index.html` dosyasına çift tıkla.

**Seçenek 2 — Python ile yerel sunucu**
```bash
python -m http.server 8000
# Tarayıcıda aç: http://localhost:8000
```

**Seçenek 3 — Node.js ile**
```bash
npm install -g http-server
http-server
# Tarayıcıda aç: http://localhost:8080
```

**Seçenek 4 — VS Code Live Server**
`index.html` üzerinde sağ tık → "Open with Live Server"

### 🧪 Test Etme
- Kullanıcı adı veya şifreyi boş bırakıp **Giriş yap**'a tıkla → hata mesajını gör
- Her iki alanı da doldurup gönder → yükleme animasyonu ardından "Başarılı ✓" durumu
- Şifre alanındaki göz ikonuna tıklayarak şifreyi göster/gizle
- Sağ üstteki **TR / EN** düğmesiyle dili değiştir
- Kart üzerinde fareyi gezdirerek 3D eğilme efektini gözlemle

### ⚠️ Önemli Not
Bu proje bir **ön yüz (frontend) tasarım gösterimidir**. Gerçek kimlik doğrulama içermez; "Giriş yap" akışı simülasyondur. Üretim ortamında kullanmadan önce:
- Gerçek bir backend ile kimlik doğrulama
- HTTPS zorunluluğu
- Şifrelerin sunucu tarafında hash'lenmesi
- CSRF koruması ve girdi doğrulama (validation)
gerekir.

### 📦 Yayınlama (Deployment)
Site şu anda **Netlify** üzerinden yayında: [loginscreen1.netlify.app](https://loginscreen1.netlify.app)

Kendi hesabından yayınlamak için:
```bash
# Netlify
netlify deploy --prod

# Vercel
npm install -g vercel
vercel --prod

# GitHub Pages
# Repo Settings → Pages → main branch → / (root)
```

### 📄 Lisans
MIT Lisansı altında açık kaynaktır — kişisel ve ticari projelerde özgürce kullanılabilir, değiştirilebilir ve dağıtılabilir.

---

## 🇬🇧 English

### Overview
Fener is a night-themed, glassmorphic login screen. The **TR / EN** toggle in the top-right corner instantly switches every piece of interface copy between Turkish and English. The background features a soft moon, drifting fireflies, and a dark mountain ridge, while the login card tilts subtly toward the cursor.

### ✨ Features
- 🌗 **TR / EN language switcher** — every text on the page (title, labels, error message, buttons) updates instantly
- 💎 **Glassmorphism card** — built with `backdrop-filter: blur()`
- 🖱️ **3D cursor-tilt effect** — the card rotates gently via `perspective` based on pointer position
- ✨ **Canvas-based firefly animation** — particles drift and flicker ambiently
- 🌕 **Moon and mountain ridge** for an atmospheric night backdrop
- 👁️ **Show/hide password** toggle with custom SVG icon swap
- ☑️ **Remember me** — custom-styled checkbox
- 🔗 **Forgot password** and **create account** links
- ⚡ **Simulated sign-in flow** — loading spinner on submit, followed by a success or error state
- 🔐 **Continue with Google / Apple** buttons (UI only, no OAuth wired up)
- 📱 **Fully responsive** — mobile, tablet, and desktop
- ♿ **Accessible** — keyboard-focusable fields, respects `prefers-reduced-motion`

### 🎨 Color Palette
```css
--bg-deep:      #0a0e1a   /* Deep navy base background */
--bg-violet:    #241246   /* Top-left violet glow */
--bg-teal:      #062e2c   /* Bottom-right teal glow */
--accent:       #ffb454   /* Amber / lantern accent */
--text-primary: #f3f1ff   /* Primary text color */
--text-muted:   #9aa3bd   /* Secondary text color */
--danger:       #ff7a7a   /* Error message color */
```

### 🔤 Typography
- **Fraunces** (serif) — used for the display heading, for character
- **Inter** (sans-serif) — used for form labels and body copy

### 📁 Project Structure
```
login-screen-1/
├── index.html     # All HTML, CSS, and JS in a single file
└── README.md      # This file
```
> Note: the project is a single self-contained `index.html` — there is no separate `styles.css` or `script.js`.

### 🚀 Running Locally
No external dependencies required; you can open the file directly in a browser.

```bash
git clone https://github.com/darkknightlag/login-screen-1.git
cd login-screen-1
```

**Option 1 — Open directly**
Double-click `index.html`.

**Option 2 — Python local server**
```bash
python -m http.server 8000
# Open: http://localhost:8000
```

**Option 3 — Node.js**
```bash
npm install -g http-server
http-server
# Open: http://localhost:8080
```

**Option 4 — VS Code Live Server**
Right-click `index.html` → "Open with Live Server"

### 🧪 Try It Out
- Submit with an empty username or password → see the inline error message
- Fill in both fields and submit → loading spinner, then a "Success ✓" state
- Click the eye icon in the password field to show/hide the password
- Use the **TR / EN** toggle to switch languages
- Move your cursor over the card to see the 3D tilt effect

### ⚠️ Important Note
This project is a **frontend design showcase**. It does not include real authentication — the sign-in flow is simulated. Before using this in production, you would need:
- Real backend authentication
- HTTPS enforcement
- Server-side password hashing
- CSRF protection and input validation

### 📦 Deployment
Currently live on **Netlify**: [loginscreen1.netlify.app](https://loginscreen1.netlify.app)

To deploy your own copy:
```bash
# Netlify
netlify deploy --prod

# Vercel
npm install -g vercel
vercel --prod

# GitHub Pages
# Repo Settings → Pages → main branch → / (root)
```

### 📄 License
Open source under the **MIT License** — free to use, modify, and distribute in personal or commercial projects.

---

**🔗 Links**
- Live demo: [loginscreen1.netlify.app](https://loginscreen1.netlify.app)
- Repository: [github.com/darkknightlag/login-screen-1](https://github.com/darkknightlag/login-screen-1)
