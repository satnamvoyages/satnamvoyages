<?php
/**
 * Satnam Voyages - Complete Core PHP Website
 * Ready to host on any Apache, Nginx, cPanel, or XAMPP PHP web server!
 */
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/tours-data.php';
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo htmlspecialchars(COMPANY_NAME); ?> — Bespoke India Tours &amp; Chauffeured Outstation Fleets</title>
  <meta name="description" content="Premier travel agency and outstation cab provider in India. Bespoke Golden Triangle, Rajasthan, Himachal & Uttarakhand tours with verified private chauffeurs.">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN for instant styling -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              orange: '#EA580C',
              darkOrange: '#C2410C',
              sand: '#FAF6F0',
              border: '#E8DFD3',
              dark: '#141210'
            }
          },
          fontFamily: {
            cinzel: ['Cinzel', 'serif'],
            montserrat: ['Montserrat', 'sans-serif']
          }
        }
      }
    }
  </script>

  <style>
    .font-headline { font-family: 'Cinzel', serif; }
    .font-body { font-family: 'Montserrat', sans-serif; }
  </style>
</head>
<body class="bg-[#FAF6F0] text-stone-900 font-body antialiased selection:bg-[#EA580C] selection:text-white">

  <!-- Top Announcement Bar -->
  <div class="bg-[#141210] text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
      <div class="flex items-center space-x-3">
        <span class="inline-flex items-center text-amber-400 font-semibold tracking-wider uppercase text-[11px]">
          <span class="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          24/7 Live Booking Desk
        </span>
        <span class="hidden sm:inline text-stone-600">•</span>
        <span class="hidden sm:inline text-stone-400">Delhi NCR • Agra • Jaipur • Shimla • Manali</span>
      </div>
      <div class="flex items-center space-x-4 text-[12px]">
        <a href="tel:<?php echo htmlspecialchars(COMPANY_PHONE); ?>" class="hover:text-amber-400 transition flex items-center space-x-1">
          <span>📞 <?php echo htmlspecialchars(COMPANY_PHONE); ?></span>
        </a>
        <span>•</span>
        <a href="https://wa.me/<?php echo WHATSAPP_NUMBER; ?>" target="_blank" class="text-emerald-400 hover:text-emerald-300 font-bold flex items-center space-x-1">
          <span>💬 WhatsApp Instant Quote</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Primary Navigation -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8DFD3] shadow-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <a href="index.php" class="flex flex-col">
        <span class="text-2xl sm:text-3xl font-black font-headline tracking-widest text-stone-950 uppercase">
          Satnam <span class="text-[#EA580C]">Voyages</span>
        </span>
        <span class="text-[10px] tracking-[0.25em] uppercase text-stone-500 font-bold -mt-1">
          Journeys Beyond the Horizon
        </span>
      </a>

      <nav class="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider text-stone-700">
        <a href="#tours" class="hover:text-[#EA580C] transition">Tour Packages</a>
        <a href="#fleet" class="hover:text-[#EA580C] transition">Chauffeur Fleet</a>
        <a href="#why-us" class="hover:text-[#EA580C] transition">Why Us</a>
        <a href="#inquiry" class="hover:text-[#EA580C] transition">Contact &amp; Quotes</a>
      </nav>

      <div class="flex items-center space-x-3">
        <button onclick="openInquiryModal('General Trip Inquiry')" class="px-5 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-600/20 transition cursor-pointer">
          Inquire Now
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
    <!-- Hero Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85"
        alt="Royal India Monument"
        class="w-full h-full object-cover opacity-35"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/80"></div>
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center space-y-6">
      <!-- Trust Pill -->
      <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-stone-900/90 border border-stone-700/60 text-stone-300 text-xs font-medium tracking-wide">
        <span class="w-2 h-2 rounded-full bg-amber-400 mr-2"></span>
        Government Approved Travel Operator • Verified Private Chauffeurs
      </div>

      <!-- Main Headline -->
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black font-headline tracking-tight uppercase leading-none text-white drop-shadow-md">
        Satnam Voyages
      </h1>

      <!-- Orange Subheading Requested by User -->
      <p class="text-lg sm:text-2xl font-bold uppercase tracking-wide text-[#EA580C] drop-shadow-sm max-w-3xl mx-auto font-headline">
        Bespoke Private Journeys &amp; Chauffeured Outstation Fleets
      </p>

      <!-- Description -->
      <p class="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
        Curated Golden Triangle expeditions, Royal Rajasthan palaces, and mountain getaways across North India. Driven by courteous English-speaking chauffeurs in sanitised luxury vehicles.
      </p>

      <!-- CTA Button Requested by User -->
      <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onclick="openInquiryModal('Golden Triangle & Outstation Tour')"
          class="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-orange-600/40 transition transform hover:-translate-y-0.5 cursor-pointer font-headline"
        >
          Book Your Journey
        </button>
        <a
          href="https://wa.me/<?php echo WHATSAPP_NUMBER; ?>?text=<?php echo urlencode('Hello Satnam Voyages, I would like to inquire about tour packages and chauffeur car hire.'); ?>"
          target="_blank"
          class="w-full sm:w-auto px-8 py-4 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-white border border-stone-700 font-bold text-xs uppercase tracking-widest shadow-md transition flex items-center justify-center space-x-2"
        >
          <span>💬 WhatsApp Instant Desk</span>
        </a>
      </div>

      <!-- Quick Metrics -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-stone-800/80 max-w-4xl mx-auto text-center">
        <div>
          <span class="block text-2xl font-extrabold text-white font-headline">15+</span>
          <span class="text-xs text-stone-400 uppercase tracking-wider">Years Experience</span>
        </div>
        <div>
          <span class="block text-2xl font-extrabold text-amber-400 font-headline">25,000+</span>
          <span class="text-xs text-stone-400 uppercase tracking-wider">Happy Travelers</span>
        </div>
        <div>
          <span class="block text-2xl font-extrabold text-white font-headline">100%</span>
          <span class="text-xs text-stone-400 uppercase tracking-wider">Verified Drivers</span>
        </div>
        <div>
          <span class="block text-2xl font-extrabold text-emerald-400 font-headline">4.9 ★</span>
          <span class="text-xs text-stone-400 uppercase tracking-wider">Google Rating</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Popular Tour Packages -->
  <section id="tours" class="py-20 px-4 max-w-7xl mx-auto">
    <div class="text-center max-w-3xl mx-auto mb-14">
      <span class="text-xs font-bold text-[#EA580C] uppercase tracking-widest block font-headline">Curated Circuits</span>
      <h2 class="text-3xl sm:text-4xl font-black text-stone-900 font-headline uppercase mt-1">
        Iconic Private India Journeys
      </h2>
      <p class="text-sm text-stone-600 mt-3">
        Tailored itineraries with door-to-door private chauffeur pick-up from Delhi Airport or your hotel.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <?php foreach ($TOURS as $tour): ?>
        <div class="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
          <div class="relative h-60 overflow-hidden">
            <img src="<?php echo htmlspecialchars($tour['image']); ?>" alt="<?php echo htmlspecialchars($tour['title']); ?>" class="w-full h-full object-cover transform hover:scale-105 transition duration-500">
            <span class="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-sm text-amber-400 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-stone-800">
              <?php echo htmlspecialchars($tour['badge']); ?>
            </span>
            <span class="absolute bottom-4 right-4 bg-white/95 text-stone-900 text-xs font-extrabold px-3 py-1 rounded-lg shadow">
              ⏱️ <?php echo htmlspecialchars($tour['duration']); ?>
            </span>
          </div>

          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 class="text-xl font-bold font-headline uppercase text-stone-900">
                <?php echo htmlspecialchars($tour['title']); ?>
              </h3>
              <p class="text-xs text-stone-600 mt-2 leading-relaxed">
                <?php echo htmlspecialchars($tour['description']); ?>
              </p>

              <div class="mt-4 space-y-1.5 border-t border-stone-100 pt-3">
                <?php foreach ($tour['highlights'] as $highlight): ?>
                  <div class="flex items-center text-xs text-stone-700">
                    <span class="text-[#EA580C] font-bold mr-2">✓</span>
                    <span><?php echo htmlspecialchars($highlight); ?></span>
                  </div>
                <?php endforeach; ?>
              </div>
            </div>

            <div class="pt-4 border-t border-[#E8DFD3] flex items-center justify-between">
              <div>
                <span class="text-[10px] uppercase text-stone-400 font-bold block">Starting From</span>
                <span class="text-xl font-black text-[#EA580C] font-headline">
                  ₹<?php echo number_format($tour['price_inr']); ?>
                </span>
                <span class="text-xs text-stone-500">($<?php echo $tour['price_usd']; ?> USD) / person</span>
              </div>

              <button
                onclick="openInquiryModal('<?php echo addslashes($tour['title']); ?>')"
                class="px-5 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow transition cursor-pointer"
              >
                Inquire &amp; Book
              </button>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </section>

  <!-- Chauffeur Fleet -->
  <section id="fleet" class="py-16 bg-[#F3ECE0] border-y border-[#E8DFD3]">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-xs font-bold text-[#EA580C] uppercase tracking-widest block font-headline">Our Chauffeur Fleet</span>
        <h2 class="text-3xl font-black text-stone-900 font-headline uppercase mt-1">
          Maintained Private Vehicles &amp; Coaches
        </h2>
        <p class="text-xs text-stone-600 mt-2">
          Air-conditioned, commercial tourist permit taxis with experienced police-verified highway drivers.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <?php foreach ($FLEET as $car): ?>
          <div class="bg-white rounded-2xl p-6 border border-[#E8DFD3] shadow-sm flex flex-col justify-between">
            <div class="space-y-3">
              <span class="inline-block px-3 py-1 bg-stone-100 rounded-lg text-xs font-bold text-[#EA580C] uppercase">
                <?php echo htmlspecialchars($car['type']); ?>
              </span>
              <h3 class="text-xl font-bold font-headline uppercase text-stone-900">
                <?php echo htmlspecialchars($car['name']); ?>
              </h3>
              <p class="text-xs font-semibold text-stone-500">
                Ideal for: <?php echo htmlspecialchars($car['ideal_for']); ?>
              </p>
              <div class="space-y-1 pt-2 border-t border-stone-100">
                <?php foreach ($car['features'] as $f): ?>
                  <div class="text-xs text-stone-600 flex items-center">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#EA580C] mr-2"></span>
                    <span><?php echo htmlspecialchars($f); ?></span>
                  </div>
                <?php endforeach; ?>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-[#E8DFD3] flex items-center justify-between">
              <div>
                <span class="text-[10px] text-stone-400 block uppercase font-bold">Standard Tariff</span>
                <span class="text-lg font-black text-stone-900"><?php echo htmlspecialchars($car['rate']); ?></span>
              </div>
              <button
                onclick="openInquiryModal('Cab Hire: <?php echo addslashes($car['name']); ?>')"
                class="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider transition"
              >
                Hire Cab
              </button>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#141210] text-stone-400 py-12 px-4 border-t border-stone-800">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-stone-800 text-xs">
      <div>
        <h4 class="text-white font-headline text-lg uppercase tracking-wider mb-3">
          Satnam <span class="text-[#EA580C]">Voyages</span>
        </h4>
        <p class="text-stone-400 leading-relaxed mb-4">
          Government-registered travel agency and luxury outstation chauffeur car rental service based in Delhi NCR, India.
        </p>
        <p class="text-stone-300">
          📍 Main Desk: Mahipalpur / Aerocity, New Delhi, India 110037
        </p>
      </div>

      <div>
        <h5 class="text-white font-headline uppercase tracking-wider mb-3">Direct Contact</h5>
        <p class="mb-2">📞 Phone: <a href="tel:<?php echo htmlspecialchars(COMPANY_PHONE); ?>" class="text-stone-200 hover:text-amber-400"><?php echo htmlspecialchars(COMPANY_PHONE); ?></a></p>
        <p class="mb-2">💬 WhatsApp: <a href="https://wa.me/<?php echo WHATSAPP_NUMBER; ?>" class="text-emerald-400 hover:underline">+91 98117 76525</a></p>
        <p class="mb-2">✉️ Email: <a href="mailto:<?php echo htmlspecialchars(COMPANY_EMAIL); ?>" class="text-stone-200 hover:text-amber-400"><?php echo htmlspecialchars(COMPANY_EMAIL); ?></a></p>
        <p class="text-stone-500 mt-2">Available 24 hours / 7 days for airport pick-up &amp; emergencies.</p>
      </div>

      <div>
        <h5 class="text-white font-headline uppercase tracking-wider mb-3">Core PHP &amp; Gmail SMTP</h5>
        <p class="text-stone-400 mb-3">
          This system uses a native Core PHP SMTP client connecting directly to <code>smtp.gmail.com:587</code> with TLS encryption. Zero external composer dependencies required.
        </p>
        <div class="p-3 bg-stone-900 rounded-xl border border-stone-800 text-[11px] text-amber-300">
          🔒 Secure SSL/TLS Form Submissions
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto pt-6 text-center text-[11px] text-stone-500 flex flex-col sm:flex-row justify-between items-center gap-2">
      <span>© <?php echo date('Y'); ?> Satnam Voyages. All rights reserved.</span>
      <span>Engineered in Core PHP with Gmail SMTP</span>
    </div>
  </footer>

  <!-- Floating Inquiry Modal -->
  <div id="inquiryModal" class="fixed inset-0 z-50 hidden bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-[#FAF6F0] rounded-2xl max-w-lg w-full overflow-hidden border border-[#E8DFD3] shadow-2xl flex flex-col max-h-[90vh]">
      <!-- Header -->
      <div class="bg-[#141210] text-white p-5 flex items-center justify-between border-b-2 border-[#EA580C]">
        <div>
          <span class="text-amber-400 text-[10px] font-bold uppercase tracking-wider block">Official Booking Desk</span>
          <h3 class="text-lg font-bold font-headline uppercase text-white">Plan Your India Journey</h3>
        </div>
        <button onclick="closeInquiryModal()" class="text-stone-400 hover:text-white text-xl p-1 font-bold cursor-pointer">✕</button>
      </div>

      <!-- Result Banner (Hidden initially) -->
      <div id="modalSuccess" class="hidden p-8 text-center space-y-4 m-4 bg-white rounded-2xl border border-[#E8DFD3]">
        <div class="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 text-2xl font-bold">
          ✓
        </div>
        <h4 class="text-xl font-bold font-headline uppercase text-stone-900">Inquiry Received!</h4>
        <div id="resultRef" class="inline-block px-3 py-1 bg-stone-100 rounded-lg text-xs font-mono font-bold text-[#EA580C]">
          Ref: #SV-000000
        </div>
        <div id="resultStatusText" class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs">
          Dispatched to our reservation desk via <strong>Gmail SMTP</strong>!
        </div>
        <p class="text-xs text-stone-600 max-w-xs mx-auto">
          Thank you! Our tour coordinator will contact you on WhatsApp / Phone within 15 minutes with complete pricing &amp; chauffeur details.
        </p>
        <div class="pt-2">
          <button onclick="closeInquiryModal()" class="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider">
            Done
          </button>
        </div>
      </div>

      <!-- Inquiry Form (Submits to send-inquiry.php) -->
      <form id="inquiryForm" action="send-inquiry.php" method="POST" onsubmit="handleFormSubmit(event)" class="p-6 overflow-y-auto space-y-4 text-xs">
        <div>
          <label class="block font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">Full Name *</label>
          <input type="text" name="name" required placeholder="e.g. John Smith / Ananya Roy" class="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFD3] bg-white text-sm focus:ring-2 focus:ring-[#EA580C] focus:outline-none">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">Phone / WhatsApp *</label>
            <input type="tel" name="phone" required placeholder="e.g. +91 9811X XXXXX" class="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFD3] bg-white text-sm focus:ring-2 focus:ring-[#EA580C] focus:outline-none">
          </div>
          <div>
            <label class="block font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">Email Address</label>
            <input type="email" name="email" placeholder="e.g. traveler@gmail.com" class="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFD3] bg-white text-sm focus:ring-2 focus:ring-[#EA580C] focus:outline-none">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">Expected Travel Date</label>
            <input type="date" name="travelDate" class="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD3] bg-white text-xs">
          </div>
          <div>
            <label class="block font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">Total Travelers</label>
            <input type="number" name="travelers" min="1" max="50" value="2" class="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD3] bg-white text-xs">
          </div>
        </div>

        <div>
          <label class="block font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">Selected Tour / Service</label>
          <input type="text" id="modalServiceInput" name="serviceChoice" value="Golden Triangle Tour — Delhi • Agra • Jaipur" class="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD3] bg-white text-xs font-semibold">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">Preferred Vehicle</label>
            <select name="vehicleChoice" class="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD3] bg-white text-xs">
              <option value="Toyota Innova Crysta (SUV)">Toyota Innova Crysta (SUV)</option>
              <option value="Maruti Dzire / Etios (Sedan)">Maruti Dzire (Sedan)</option>
              <option value="Toyota Fortuner (VIP SUV)">Toyota Fortuner (VIP SUV)</option>
              <option value="12-Seater Maharaja Tempo">12-Seater Maharaja Tempo</option>
              <option value="Luxury Mini Coach">Luxury Mini Coach</option>
            </select>
          </div>
          <div>
            <label class="block font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">Stay Tier</label>
            <select name="tier" class="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD3] bg-white text-xs">
              <option value="Deluxe (4-Star Heritage)">Deluxe (4-Star)</option>
              <option value="Luxury (5-Star Palaces)">Luxury (5-Star)</option>
              <option value="Standard (3-Star Clean)">Standard (3-Star)</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">Pickup Location &amp; Special Notes (Optional)</label>
          <textarea name="notes" rows="2" placeholder="e.g. Pickup from Delhi Airport T3, need infant seat, English guide..." class="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD3] bg-white text-xs"></textarea>
        </div>

        <div class="pt-2">
          <button id="modalSubmitBtn" type="submit" class="w-full py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-600/20 flex items-center justify-center space-x-2 transition cursor-pointer">
            <span>Submit Inquiry via Gmail SMTP</span>
          </button>
          <p class="text-[10px] text-center text-stone-500 mt-2">
            🔒 Dispatched via Core PHP Gmail SMTP directly to Satnam Voyages reservation desk.
          </p>
        </div>
      </form>
    </div>
  </div>

  <!-- JavaScript for Interactive Modal & AJAX Form Dispatch -->
  <script>
    function openInquiryModal(serviceTitle) {
      if (serviceTitle) {
        document.getElementById('modalServiceInput').value = serviceTitle;
      }
      document.getElementById('modalSuccess').classList.add('hidden');
      document.getElementById('inquiryForm').classList.remove('hidden');
      document.getElementById('inquiryModal').classList.remove('hidden');
    }

    function closeInquiryModal() {
      document.getElementById('inquiryModal').classList.add('hidden');
    }

    async function handleFormSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const btn = document.getElementById('modalSubmitBtn');
      const originalText = btn.innerHTML;

      btn.disabled = true;
      btn.innerHTML = '<span>Sending via Gmail SMTP...</span>';

      const formData = new FormData(form);
      const payload = {};
      formData.forEach((value, key) => { payload[key] = value; });

      try {
        const response = await fetch('send-inquiry.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        // Show Success UI
        document.getElementById('inquiryForm').classList.add('hidden');
        document.getElementById('modalSuccess').classList.remove('hidden');
        document.getElementById('resultRef').textContent = 'Ref: #' + (result.refCode || 'SV-' + Date.now().toString().slice(-6));

        if (result.emailSent) {
          document.getElementById('resultStatusText').innerHTML = 'Dispatched to our reservation desk via <strong>Gmail SMTP</strong>!';
          document.getElementById('resultStatusText').className = 'p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs';
        } else {
          document.getElementById('resultStatusText').innerHTML = 'Inquiry logged! (Add <code>GMAIL_USER</code> and <code>GMAIL_APP_PASSWORD</code> in <code>php/config.php</code> to send live emails).';
          document.getElementById('resultStatusText').className = 'p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 text-xs text-left';
        }

        form.reset();
      } catch (err) {
        console.warn('AJAX submit error, falling back to standard submit:', err);
        // Fallback to regular standard POST if fetch fails
        form.submit();
      } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
      }
    }
  </script>
</body>
</html>
