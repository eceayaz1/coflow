
// Smooth scroll for navbar links

document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Şehir dropdown doldurma

const iller = [
  "Adana","Adıyaman","Afyonkarahisar","Ağrı","Aksaray","Amasya","Ankara","Antalya","Ardahan","Artvin","Aydın",
  "Balıkesir","Bartın","Batman","Bayburt","Bilecik","Bingöl","Bitlis","Bolu","Burdur","Bursa",
  "Çanakkale","Çankırı","Çorum","Denizli","Diyarbakır","Düzce","Edirne","Elazığ","Erzincan","Erzurum",
  "Eskişehir","Gaziantep","Giresun","Gümüşhane","Hakkari","Hatay","Iğdır","Isparta","İstanbul","İzmir",
  "Kahramanmaraş","Karabük","Karaman","Kars","Kastamonu","Kayseri","Kırıkkale","Kırklareli","Kırşehir","Kilis",
  "Kocaeli","Konya","Kütahya","Malatya","Manisa","Mardin","Mersin","Muğla","Muş","Nevşehir",
  "Niğde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Siirt","Sinop","Sivas","Şanlıurfa",
  "Şırnak","Tekirdağ","Tokat","Trabzon","Tunceli","Uşak","Van","Yalova","Yozgat","Zonguldak"
];

const locationSelect = document.getElementById("location");
iller.forEach(il => {
  const option = document.createElement("option");
  option.value = il;
  option.textContent = il;
  locationSelect.appendChild(option);
});

// Form gönderme (frontend test)

document.getElementById('demoForm').addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Lütfen zorunlu alanları doldurunuz.");
    return;
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    alert("Geçerli bir e-posta adresi giriniz.");
    return;
  }

  // Form verilerini sadece console.log ile gösteriyoruz
  const formData = {
    name,
    company: document.getElementById('company').value,
    email,
    phone: document.getElementById('phone').value,
    location: locationSelect.value,
    message
  };

  console.log("Form data:", formData);
  alert("Form başarıyla test edildi! (Backend yok)");

  e.target.reset();
});

// Testimonial Slider (dots only)

const testimonials = document.querySelectorAll('#testimonial-slider .testimonial');
const dotsContainer = document.querySelector('#testimonial-slider .dots');

if (testimonials.length > 0) {
  let current = 0;

  // Noktaları oluştur
  testimonials.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('span');

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
    current = index;
  }

  // Noktalara tıklama
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showTestimonial(i));
  });
}
