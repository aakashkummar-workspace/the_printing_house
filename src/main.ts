import './style.css'

// ─────────────────────────────────────────────────────────────────────────────
// Knowledge Base – The Printing House, Trichy
// ─────────────────────────────────────────────────────────────────────────────
const KB = {
  company: {
    name: "The Printing House",
    founder: "Dr. Mustafa Kamal",
    established: 1986,
    yearsExp: "40+",
    location: "No 6, Race Course Road, Kajamalai, Tiruchirappalli, Tamil Nadu 620023",
    phone: "+91 90031 69615",
    whatsapp: "919003169615",
    email: "tphtrichy@gmail.com",
    hours: "Monday to Friday, 9:00 AM – 8:30 PM",
    clients: "10,000+",
  },

  about: `The Printing House was founded by Dr. Mustafa Kamal and is the region's premier provider of high-quality printing services. Established in 1986, with over 40 years of experience, we are a recognized leader in both quick and commercial printing. We combine state-of-the-art technology with expertise to bring your ideas to life — beautifully, precisely, and efficiently.`,

  services: {
    prepress: `Our PrePress team handles everything before printing:\n• Graphic design and layout\n• Typesetting and design consultation\n• Proofing and color management\n• File preparation and optimization\n• Consultation to ensure print readiness`,
    printing: `Our core printing capabilities:\n• Digital Printing – fast turnaround for small to medium runs\n• Offset Printing – cost-effective, high-volume with superior color\n• Multi-color Printing – vibrant results using state-of-the-art machinery\n• Full-color and black & white printing\n• Specialty prints with custom finishes`,
    finishing: `Our professional finishing services:\n• Cutting, folding, binding, and laminating\n• Stapling and collating\n• Premium lamination (gloss / matte)\n• Quality checks at every stage`,
  },

  products: {
    "sun pack printing": `Professional <strong>Sun Pack Printing</strong> solutions (All-inclusive price).<br><br>� <strong>Price per piece (Multi-Colour):</strong><br>• 1x1: ₹15 (300) | ₹14 (500) | ₹12 (1000) | ₹11 (2000)<br>• 1x1.5: ₹22.5 (300) | ₹21 (500) | ₹18 (1000) | ₹16.5 (2000)<br>• 2x1.5: ₹45 (300) | ₹42 (500) | ₹36 (1000) | ₹33 (2000)<br>• 2x2: ₹60 (300) | ₹56 (500) | ₹48 (1000) | ₹44 (2000)<br>• 3x2: ₹90 (300) | ₹84 (500) | ₹72 (1000) | ₹66 (2000)<br><br>🎨 <strong>Design Charges:</strong> ₹500`,
    "flex": `Premium <strong>Flex Printing</strong> & Media Solutions.<br><br>📋 <strong>Media Rates (per sq.ft):</strong><br>• Normal Flex: ₹12 (Above 100 sq.ft)<br>• Black Media: ₹20<br>• Star Flex: ₹25<br>• Backlit / Vinyl: ₹25<br>• Sun Pack: ₹15<br><br>📐 <strong>Piece Rates:</strong><br>• 3x2: ₹350 | 4x3: ₹450<br>• 5x3: ₹500 | 6x3: ₹600<br>• 8x3: ₹650 | 8x4: ₹750<br>• 8x6: ₹900 | 10x5: ₹950<br>• 10x6: ₹1000 | 10x10: ₹1150<br><br>🎨 <strong>Design Charges:</strong> ₹350`,
    "id cards": `Professional <strong>PVC ID Cards</strong> & Accessories.<br><br>📋 <strong>Pricing:</strong><br>• Pvc id card: ₹50<br>• Holder: ₹10<br>• Normal rope (no print): ₹10<br>• Multi-color rope (fish hook): ₹30<br><br>🎨 <strong>Design Charges:</strong><br>• Qty < 10 nos: ₹150 (total)<br>• Qty > 10 nos: ₹15 per card`,
    "multi colour certificate": `Professional <strong>Multi-Colour Certificates</strong> (A4 Size).<br><br>📋 <strong>300 Gsm Art Board (Single Side):</strong><br>• 1 - 20 nos: ₹12 per cert<br>• 20 - 250 nos: ₹10 per cert<br>• 300+ nos: ₹07 per cert<br><br>📄 <strong>Special Boards:</strong><br>• Textured Board: ₹20 per cert<br>• Metallic Board: ₹25 per cert<br><br>🎨 <strong>Design Charges:</strong> ₹300`,
    "flyer a5 ss": `<strong>Flyer A5 (Single Side)</strong> - 21.5 x 14.5 cm.<br><br>📋 <strong>100 GSM Paper:</strong><br>• 1000 Nos: ₹2850<br>• 5000 Nos: ₹4250<br>• 10000 Nos: ₹6500<br><br>🎨 <strong>Design Cost:</strong> ₹300`,
    "flyer a5 fb": `<strong>Flyer A5 (Front & Back)</strong> - 21.5 x 14.5 cm.<br><br>📋 <strong>100 GSM Paper:</strong><br>• 1000 Nos: ₹2850<br>• 5000 Nos: ₹4750<br>• 10000 Nos: ₹7000<br><br>🎨 <strong>Design Cost:</strong> ₹700`,
    "flyer a4 ss": `<strong>Flyer A4 (Single Side)</strong> - 21.5 x 28.5 cm.<br><br>📋 <strong>100 GSM Paper:</strong><br>• 1000 Nos: ₹3200<br>• 5000 Nos: ₹6500<br>• 10000 Nos: ₹10500<br><br>🎨 <strong>Design Cost:</strong> ₹500`,
    "flyer a4 fb": `<strong>Flyer A4 (Front & Back)</strong> - 21.5 x 28.5 cm.<br><br>📋 <strong>100 GSM Paper:</strong><br>• 1000 Nos: ₹3000<br>• 5000 Nos: ₹7000<br>• 10000 Nos: ₹11500<br><br>🎨 <strong>Design Cost:</strong> ₹800`,
    "flyer a3 ss": `<strong>Flyer A3 (Single Side)</strong> - 42 x 21 cm.<br><br>📋 <strong>100 GSM Paper:</strong><br>• 1000 Nos: ₹3900<br>• 5000 Nos: ₹10500<br>• 10000 Nos: ₹18500`,
    "flyer a3 fb": `<strong>Flyer A3 (Front & Back)</strong> - 42 x 21 cm.<br><br>📋 <strong>100 GSM Paper:</strong><br>• 1000 Nos: ₹3900<br>• 5000 Nos: ₹11500<br>• 10000 Nos: ₹21000`,
    "multi colour envelopes": `Professional <strong>Multi-Colour Envelopes</strong> (10.5 x 4.5 inch).<br><br>📋 <strong>80 Gsm Bond Sheet:</strong><br>• 1000 Nos: ₹5000<br><br>🎨 <strong>Design Charges:</strong> ₹300`,
    "double colour envelopes": `Professional <strong>Double-Colour Envelopes</strong> (10.5 x 4.5 inch).<br><br>📋 <strong>80 Gsm Bond Sheet:</strong><br>• 1000 Nos: ₹2100<br><br>🎨 <strong>Design Charges:</strong> ₹200`,
    "single colour envelopes": `Professional <strong>Single-Colour Envelopes</strong> (10.5 x 4.5 inch).<br><br>📋 <strong>80 Gsm Bond Sheet:</strong><br>• 1000 Nos: ₹1800<br><br>🎨 <strong>Design Charges:</strong> ₹150`,
    "synopsis binding": `Professional <strong>Synopsis Binding (Tape)</strong>.<br><br>📋 <strong>Pricing:</strong><br>• Less than 50 Pages: ₹50<br>• 50 - 200 Pages: ₹100<br>• More than 200 Pages: ₹200<br><br>🎨 <strong>Extras:</strong><br>• For Color Board: ₹15 extra`,
    "multi colour letter head": `Professional <strong>Multi-Colour Letterheads</strong> (A4 - 210 x 297 mm).<br><br>📋 <strong>80 Gsm Bond Sheet (Single Side):</strong><br>• 500 Nos (Loose): ₹2800<br>• 1000 Nos (Loose): ₹3500<br>• 5 Pads (Finishing): ₹2950<br>• 10 Pads (Finishing): ₹3800<br><br>🎨 <strong>Design Charges:</strong> ₹300`,
    "double colour letter head": `Professional <strong>Double-Colour Letterheads</strong> (A4 - 210 x 297 mm).<br><br>📋 <strong>80 Gsm Bond Sheet (Single Side):</strong><br>• 500 Nos (Loose): ₹950<br>• 1000 Nos (Loose): ₹1450<br>• 5 Pads (Finishing): ₹1100<br>• 10 Pads (Finishing): ₹1750<br><br>🎨 <strong>Design Charges:</strong> ₹200`,
    "single colour letter head": `Professional <strong>Single-Colour Letterheads</strong> (A4 - 210 x 297 mm).<br><br>📋 <strong>80 Gsm Bond Sheet (Single Side):</strong><br>• 500 Nos (Loose): ₹750<br>• 1000 Nos (Loose): ₹1250<br>• 5 Pads (Finishing): ₹900<br>• 10 Pads (Finishing): ₹1550<br><br>🎨 <strong>Design Charges:</strong> ₹150`,
    "thesis": `Professional <strong>Thesis Printing & Binding</strong>.<br><br>📝 <strong>Alignment (Per Page):</strong><br>• Normal: ₹20 | With Table: ₹30<br><br>📄 <strong>Printing (Per Page):</strong><br>• B/W (80gsm Copier): ₹1.5<br>• B/W (Bond 85gsm): ₹2<br>• Color (Bond 85gsm): ₹10 - ₹12<br><br>📚 <strong>Binding (Per Book):</strong><br>• Standard (2 Days): ₹350 (Incl. Design/Print/Lam)<br>• Express Bind (4 hrs): ₹450`,
    "cd": `Professional <strong>CD Services</strong>.<br><br>💿 <strong>Sticker:</strong> ₹150 (with Design)<br>📂 <strong>Writing:</strong> ₹40 (with CD and Pouch)`,
    "prescription pad": `Professional <strong>Prescription Pads</strong>.<br><br>📋 <strong>A5 (70gsm SC):</strong><br>• 1000 Nos: ₹500 (Loose) | ₹750 (Pad)<br>• 2000 Nos: ₹800 (Loose) | ₹1200 (Pad)<br><br>📋 <strong>A4 (70gsm SC):</strong><br>• 1000 Nos: ₹800 (Loose) | ₹1050 (Pad)<br>• 2000 Nos: ₹1600 (Loose) | ₹2100 (Pad)<br><br>📋 <strong>A4 (80gsm MC):</strong><br>• 1000 Nos: ₹4000 (Loose) | ₹4250 (Pad)<br>• 2000 Nos: ₹5000 (Loose) | ₹5500 (Pad)`,
    "lamination": `Professional <strong>Lamination Services</strong> (Standard A4 Size).<br><br>🔥 <strong>Thermal Mode:</strong><br>• Gloss: ₹5 per A4<br>• Matt: ₹5 per A4<br>• Velvet: ₹12 per A4<br><br>💧 <strong>Glue Mode:</strong><br>• Gloss: ₹0.7 per A4<br>• Matt: ₹0.8 per A4`,
    "doctor file - plastic": `Professional <strong>Doctor Files (Plastic)</strong>.<br><br>🚚 <strong>Despatch:</strong> 2 Weeks from Design Finalization<br><br>📋 <strong>Size 12x18 (1 Crease 4 Hole):</strong><br>• SS: ₹27 (1k) | ₹26.5 (2k) | ₹26 (3k)<br>• DS: ₹32 (1k) | ₹31.5 (2k) | ₹31 (3k)<br><br>📋 <strong>Size 12.5x19.4 (2 Crease 4 Hole):</strong><br>• SS: ₹28 (1k) | ₹27.5 (2k) | ₹27 (3k)<br>• DS: ₹33 (1k) | ₹32.5 (2k) | ₹32 (3k)`,
    "binding": `Professional <strong>Binding Services</strong> for all needs.<br><br>📊 <strong>General Binding (Spiral/Tape/Synopsis):</strong><br>• < 50 pgs: ₹50 | 50-100 pgs: ₹80<br>• 100-200 pgs: ₹100 | 200+ pgs: ₹200<br>• Color Board: +₹15 extra<br><br>📘 <strong>Project Binding:</strong><br>• Blue Board: ₹130 | Gold/Silver: ₹150<br>• Express (4 hrs): ₹180<br><br>📕 <strong>Soft Binding:</strong> Color: ₹110 | B/W: ₹90<br><br>📓 <strong>Record Binding:</strong> ₹100 (Normal) | ₹120 (Marble)`,
    "business cards": `Premium <strong>Digital Visiting Cards</strong> & 13x19 Sheet Printing.<br><br>📋 <strong>Digital Card Packs (per 100 nos):</strong><br>• Gloss 250gsm: SS ₹150 | FB ₹200<br>• Gloss 300gsm: SS ₹200 | FB ₹300<br>• Synthetic 175m: SS ₹300 | FB ₹400<br>• Texture Board: SS ₹250 | FB ₹350<br>• Metallic Board: SS ₹300 | FB ₹400<br>• Kraft: SS ₹260 | FB ₹450<br>• Cobble Trans: SS ₹350 | FB ₹650<br>• Ivory - Kent X: SS ₹300 | FB ₹550<br><br>📄 <strong>13 x 19 Inch Sheet Printing:</strong><br>• 130/170/250/300 GSM: ₹16 - ₹30<br>• Texture / Metallic: ₹30 - ₹50<br>• Synthetic / Ivory: ₹35 - ₹50<br>• Stickers (PVC White/Clear): ₹40<br>• CD Sticker: ₹150 (incl. design)<br><br>✨ <strong>Lamination (13x19):</strong> Gloss ₹10/side | Matt ₹15/side<br>💰 <strong>Bulk Discount:</strong> ₹1 off (51-100 sheets) | ₹2 off (101+ sheets)<br>🎨 <strong>Design Charges:</strong> SS ₹250 | DS ₹300`,
    "offset visiting card": `Premium <strong>Offset Visiting Cards</strong> with high-quality lamination finishes — leaving a professional, lasting impression.<br><br>📋 <strong>Gloss Lamination:</strong><br>• SS 500 nos — ₹460 (₹543 incl. GST)<br>• FB 500 nos — ₹580 (₹684 incl. GST)<br>• SS 1000 nos — ₹640 (₹755 incl. GST)<br>• FB 1000 nos — ₹840 (₹991 incl. GST)<br><br>📋 <strong>Matt Lamination:</strong><br>• SS 500 nos — ₹500 (₹590 incl. GST)<br>• FB 500 nos — ₹680 (₹802 incl. GST)<br>• SS 1000 nos — ₹680 (₹802 incl. GST)<br>• FB 1000 nos — ₹900<br><br>🎨 <strong>Design Charges (extra):</strong> Single Side ₹250 | Double Side ₹350`,
  },

  testimonials: [
    { name: "Praveen Kumar", review: "Availed their service several times. Excellent quality and prompt service. Definitely a recommended place and trusted business partner." },
    { name: "Rangarajan", review: "Very customer oriented. Prices are economical. Great for calendars, brochures, flyers etc. I strongly recommend The Printing House!" },
    { name: "Sarmila Banu", review: "A one stop HUB for designing and offset printing. On time delivery with reasonable pricing. Excellent customer support." },
    { name: "N Krishna Kumar", review: "Gave a brochure design for urgent printing. They accepted the order and made it ready on time. Really useful!" },
    { name: "Noel Martin", review: "Totally recommended. Only here I got the real gold colour output in digital print — and more economical too." },
    { name: "Tamil Selvan", review: "We conducted a state level Memory Championship at Anna University. All designs done by The Printing House. Excellent services! Value for money." },
    { name: "Vinoth Muthu", review: "Car mat papers and calendars — very good quality and reasonable price. Can't get better value in Tamil Nadu." },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Product-specific selectable pricing options
// ─────────────────────────────────────────────────────────────────────────────
const PRODUCT_PRICING_OPTIONS: Record<string, string[]> = {
  "offset visiting card": [
    "Gloss | Single Side | 500 nos — ₹460 (₹543 incl. GST)",
    "Gloss | Double Side | 500 nos — ₹580 (₹684 incl. GST)",
    "Gloss | Single Side | 1000 nos — ₹640 (₹755 incl. GST)",
    "Gloss | Double Side | 1000 nos — ₹840 (₹991 incl. GST)",
    "Matt  | Single Side | 500 nos — ₹500 (₹590 incl. GST)",
    "Matt  | Double Side | 500 nos — ₹680 (₹802 incl. GST)",
    "Matt  | Single Side | 1000 nos — ₹680 (₹802 incl. GST)",
    "Matt  | Double Side | 1000 nos — ₹900",
  ],
  "business cards": [
    "--- CARD PACKS (100 NOS) ---",
    "Digital | Gloss 250gsm | 100 nos — SS ₹150 / FB ₹200",
    "Digital | Gloss 300gsm | 100 nos — SS ₹200 / FB ₹300",
    "Digital | Synthetic 175m | 100 nos — SS ₹300 / FB ₹400",
    "Digital | Texture Board | 100 nos — SS ₹250 / FB ₹350",
    "Digital | Metallic Board | 100 nos — SS ₹300 / FB ₹400",
    "Digital | Kraft Paper | 100 nos — SS ₹260 / FB ₹450",
    "Digital | Cobble Trans | 100 nos — SS ₹350 / FB ₹650",
    "Digital | Ivory - Kent X | 100 nos — SS ₹300 / FB ₹550",
    "--- 13x19 SHEET PRINTING (PER COPY) ---",
    "Sheet | 130 GSM Art Paper — SS ₹16 / FB ₹23",
    "Sheet | 170 GSM Art Paper — SS ₹17 / FB ₹25",
    "Sheet | 250 GSM Art Board — SS ₹19 / FB ₹28",
    "Sheet | 300 GSM Art Board — SS ₹20 / FB ₹30",
    "Sheet | Texture Board — SS ₹30 / FB ₹40",
    "Sheet | Metallic Board — SS ₹40 / FB ₹50",
    "Sheet | Synthetic 125 Mic — SS ₹35 / FB ₹45",
    "Sheet | Synthetic 175 Mic — SS ₹40 / FB ₹50",
    "Sheet | Ivory Board (Kent) — SS ₹35 / FB ₹45",
    "Sheet | Mirror Coated — SS ₹25 / FB ₹35",
    "Sheet | Sticker CH(R) — ₹20",
    "Sheet | Sticker PVC Clear — ₹40",
    "Sheet | Sticker PVC White — ₹40",
    "Sheet | CD Sticker — ₹150 (incl. design)",
  ],
  "multi colour certificate": [
    "Board | 300 Gsm Art Board | 1-20 nos — ₹12/cert",
    "Board | 300 Gsm Art Board | 20-250 nos — ₹10/cert",
    "Board | 300 Gsm Art Board | 300+ nos — ₹07/cert",
    "Board | Textured Board — ₹20/cert",
    "Board | Metallic Board — ₹25/cert",
  ],
  "multi colour letter head": [
    "Pad | 5 Pads (Neat Finishing) — ₹2950",
    "Pad | 10 Pads (Neat Finishing) — ₹3800",
    "Loose | 500 Nos (Loose Sheets) — ₹2800",
    "Loose | 1000 Nos (Loose Sheets) — ₹3500",
  ],
  "multi colour envelopes": [
    "Multi-Colour | 1000 Nos (10.5x4.5) — ₹5000",
  ],
  "double colour envelopes": [
    "Double-Colour | 1000 Nos (10.5x4.5) — ₹2100",
  ],
  "double colour letter head": [
    "Pad | 5 Pads (Neat Finishing) — ₹1100",
    "Pad | 10 Pads (Neat Finishing) — ₹1750",
    "Loose | 500 Nos (Loose Sheets) — ₹950",
    "Loose | 1000 Nos (Loose Sheets) — ₹1450",
  ],
  "single colour envelopes": [
    "Single-Colour | 1000 Nos (10.5x4.5) — ₹1800",
  ],
  "single colour letter head": [
    "Pad | 5 Pads (Neat Finishing) — ₹900",
    "Pad | 10 Pads (Neat Finishing) — ₹1550",
    "Loose | 500 Nos (Loose Sheets) — ₹750",
    "Loose | 1000 Nos (Loose Sheets) — ₹1250",
  ],
  "id cards": [
    "PVC ID Card — ₹50",
    "Card + Holder — ₹60",
    "Card + Holder + Normal Rope — ₹70",
    "Card + Holder + Multi-Color Rope — ₹90",
  ],
  "flyer a5 ss": ["1000 Nos — ₹2850", "3000 Nos — ₹3550", "5000 Nos — ₹4250", "10000 Nos — ₹6500", "50000 Nos — ₹22900"],
  "flyer a5 fb": ["1000 Nos — ₹2850", "3000 Nos — ₹3550", "5000 Nos — ₹4750", "10000 Nos — ₹7000", "40000 Nos — ₹20000"],
  "flyer a4 ss": ["1000 Nos — ₹3200", "3000 Nos — ₹4600", "5000 Nos — ₹6500", "10000 Nos — ₹10500", "50000 Nos — ₹40900"],
  "flyer a4 fb": ["1000 Nos — ₹3000", "3000 Nos — ₹5100", "5000 Nos — ₹7000", "10000 Nos — ₹11500", "40000 Nos — ₹37900"],
  "flyer a3 ss": ["1000 Nos — ₹3900", "3000 Nos — ₹7200", "5000 Nos — ₹10500", "10000 Nos — ₹18500", "25000 Nos — ₹43500"],
  "flyer a3 fb": ["1000 Nos — ₹3900", "3000 Nos — ₹7700", "5000 Nos — ₹11500", "10000 Nos — ₹21000", "25000 Nos — ₹49500"],
  "flex": [
    "--- PIECE RATES ---",
    "3x2 Piece — ₹350",
    "4x3 Piece — ₹450",
    "5x3 Piece — ₹500",
    "6x3 Piece — ₹600",
    "8x4 Piece — ₹750",
    "10x5 Piece — ₹950",
    "--- MEDIA (PER SQ.FT) ---",
    "Normal Flex — ₹12 (Above 100 sq.ft)",
    "Black Media — ₹20",
    "Star Flex — ₹25",
    "Backlit / Vinyl — ₹25",
    "Sun Pack — ₹15",
  ],
  "sun pack printing": [
    "--- PIECES: 300 NOS ---",
    "1x1 | 300 Nos — ₹15 (MC)",
    "1x1.5 | 300 Nos — ₹22.50 (MC)",
    "2x1.5 | 300 Nos — ₹45 (MC)",
    "2x2 | 300 Nos — ₹60 (MC)",
    "3x2 | 300 Nos — ₹90 (MC)",
    "--- PIECES: 500 NOS ---",
    "1x1 | 500 Nos — ₹14 (MC)",
    "1x1.5 | 500 Nos — ₹21 (MC)",
    "2x1.5 | 500 Nos — ₹42 (MC)",
    "2x2 | 500 Nos — ₹56 (MC)",
    "3x2 | 500 Nos — ₹84 (MC)",
    "--- PIECES: 1000 NOS ---",
    "1x1 | 1000 Nos — ₹12 (MC)",
    "1x1.5 | 1000 Nos — ₹18 (MC)",
    "2x1.5 | 1000 Nos — ₹36 (MC)",
    "2x2 | 1000 Nos — ₹48 (MC)",
    "3x2 | 1000 Nos — ₹72 (MC)",
    "--- PIECES: 2000 NOS ---",
    "1x1 | 2000 Nos — ₹11 (MC)",
    "1x1.5 | 2000 Nos — ₹16.5 (MC)",
    "2x1.5 | 2000 Nos — ₹33 (MC)",
    "2x2 | 2000 Nos — ₹44 (MC)",
    "3x2 | 2000 Nos — ₹66 (MC)",
  ],
  "thesis": [
    "Binding | Standard (2 Days) — ₹350/book",
    "Binding | Express Bind (4 hrs) — ₹450/book",
    "Alignment | Normal — ₹20/page",
    "Alignment | With Table — ₹30/page",
    "Print | B/W (Bond 85gsm) — ₹2/page",
    "Print | Color (Bond 85gsm) — ₹10/page",
  ],
  "cd": [
    "CD Sticker (with Design) — ₹150",
    "CD Writing (with CD & Pouch) — ₹40",
  ],
  "synopsis binding": [
    "Binding | Less than 50 Pages — ₹50",
    "Binding | 50 - 200 Pages — ₹100",
    "Binding | More than 200 Pages — ₹200",
    "Extra | Color Board — ₹15 extra",
  ],
  "binding": [
    "Spiral / Tape Binding — ₹50 - ₹200",
    "Project | Blue Board — ₹130/book",
    "Project | Gold/Silver — ₹150/book",
    "Express Project (4 hrs) — ₹180/book",
    "Soft Binding (Color) — ₹110/book",
    "Soft Binding (B/W) — ₹90/book",
    "Record Binding — ₹100 - ₹120",
  ],
  "lamination": [
    "Thermal | Gloss — ₹5/page (A4)",
    "Thermal | Matt — ₹5/page (A4)",
    "Thermal | Velvet — ₹12/page (A4)",
    "Glue | Gloss — ₹0.7/page (A4)",
    "Glue | Matt — ₹0.8/page (A4)",
  ],
  "prescription pad": [
    "A5 SC | 1000 Nos (Loose) — ₹500",
    "A5 SC | 1000 Nos (With Pad) — ₹750",
    "A4 SC | 1000 Nos (Loose) — ₹800",
    "A4 SC | 1000 Nos (With Pad) — ₹1050",
    "A4 MC | 1000 Nos (With Pad) — ₹4250",
    "--- QUANTITY: 2000 NOS ---",
    "A5 SC | 2000 Nos (With Pad) — ₹1200",
    "A4 SC | 2000 Nos (With Pad) — ₹2100",
    "A4 MC | 2000 Nos (With Pad) — ₹5500",
  ],
  "doctor file - plastic": [
    "12x18 SS | 1000 Nos — ₹27/ea",
    "12x18 DS | 1000 Nos — ₹32/ea",
    "12.5x19.4 SS | 1000 Nos — ₹28/ea",
    "12.5x19.4 DS | 1000 Nos — ₹33/ea",
    "--- QUANTITY: 3000 NOS ---",
    "12x18 SS | 3000 Nos — ₹26/ea",
    "12x18 DS | 3000 Nos — ₹31/ea",
    "12.5x19.4 SS | 3000 Nos — ₹27/ea",
    "12.5x19.4 DS | 3000 Nos — ₹32/ea",
  ],
};


// Types
// ─────────────────────────────────────────────────────────────────────────────
interface ConversationEntry {
  role: 'user' | 'bot';
  content: string;        // plain text version for context lookups
  intent: string;         // what was this message about
  timestamp: number;
}

interface UserMemory {
  name?: string;                  // extracted name
  lastProduct?: string;           // last product discussed
  lastTopic?: string;             // last broad topic (services, products, contact…)
  lastIntent?: string;            // last matched intent key
  mentionedProducts: string[];    // all products discussed so far
  preferredContact?: 'call' | 'whatsapp' | 'email';
}

interface LeadData {
  product?: string;
  quantity?: string;
  specs?: string;
  name?: string;
  phone?: string;
  selections?: Record<string, string>; // itemized choices
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
function matchesAny(text: string, keywords: string[]): boolean {
  return keywords.some(kw => text.includes(kw));
}

/** Try to extract a first name from a message like "I'm John" or "my name is John" */
function extractName(text: string): string | null {
  const patterns = [
    /(?:i['']?m|my name is|i am|call me|this is)\s+([a-z][a-z'-]{1,20})/i,
    /^([A-Z][a-z]{1,20})(?:\s+here)?[!.,]?\s*$/,
  ];
  for (const pat of patterns) {
    const m = text.match(pat);
    if (m && m[1]) {
      const n = m[1].toLowerCase();
      // Exclude common false positives
      const skip = ['looking', 'interested', 'here', 'need', 'want', 'asking', 'trying'];
      if (!skip.includes(n)) return m[1];
    }
  }
  return null;
}

/** Format a Date object as D/M/YYYY */

/**
 * Converts relative date words to real calendar dates using the system clock.
 * Any other text is returned unchanged.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Chatbot Class
// ─────────────────────────────────────────────────────────────────────────────
class Chatbot {
  private messagesContainer: HTMLElement;
  private input: HTMLInputElement;
  private sendBtn: HTMLElement;

  // ── Memory ──────────────────────────────────────────────────────────────────
  private history: ConversationEntry[] = [];      // full conversation log
  private memory: UserMemory = { mentionedProducts: [] };

  // ── Lead flow ───────────────────────────────────────────────────────────────
  private leadData: LeadData = {};
  private currentStep: number = 0;
  private isProcessing: boolean = false;
  private pendingProducts: string[] = [];

  constructor() {
    this.messagesContainer = document.getElementById('chat-messages')!;
    this.input = document.getElementById('chat-input') as HTMLInputElement;
    this.sendBtn = document.getElementById('send-btn')!;
    this.init();
  }

  private init() {
    this.sendBtn.addEventListener('click', () => this.handleSendMessage());
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.handleSendMessage();
    });

    const refreshBtn = document.getElementById('chat-refresh-btn');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => this.resetConversation());
    }

    this.showWelcomeGreeting();
  }

  private showWelcomeGreeting() {
    setTimeout(() => {
      this.addBot(`👋 Welcome to <strong>The Printing House</strong>, Trichy!`, 'greeting');
      this.addBot(`I'm your printing consultant — here to help with quotes, product info, services, and more. With <strong>40+ years of expertise</strong>, we handle everything from business cards to bulk commercial printing. How can I help you today?`, 'greeting');
      this.addQuickReplies(['📋 Get a Quote', '📦 Our Products', '📍 Location & Contact', '⏰ Working Hours']);
    }, 600);
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  private greet(): string {
    return this.memory.name ? `${this.memory.name}` : '';
  }

  private personalise(msg: string): string {
    if (!this.memory.name) return msg;
    // Prepend name naturally
    return msg.replace(/^(Got it|Great|Perfect|Sure|Certainly|Absolutely|Understood|Thanks|Thank you)([,!.]?)/, `$1, <strong>${this.memory.name}</strong>$2`);
  }

  /** Push to history array */
  private recordHistory(role: 'user' | 'bot', content: string, intent: string) {
    this.history.push({ role, content, intent, timestamp: Date.now() });
    // Keep last 30 entries to bound memory
    if (this.history.length > 30) this.history.shift();
  }



  /** Check if the user seems to be asking a follow-up about the lastProduct/lastTopic */
  private isFollowUp(lw: string): boolean {
    const followUpWords = ['more', 'tell me', 'what about', 'how about', 'explain', 'details', 'elaborate', 'pricing for that', 'cost of that', 'price of it', 'how much for it', 'how much for that', 'and that', 'that one'];
    return matchesAny(lw, followUpWords) && !!this.memory.lastTopic;
  }

  // ── Rendering ──────────────────────────────────────────────────────────────
  private addBot(html: string, intent: string = '') {
    const div = document.createElement('div');
    div.className = 'message bot';
    div.innerHTML = html;
    this.messagesContainer.appendChild(div);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    // Strip HTML for history storage
    const plain = html.replace(/<[^>]*>/g, '');
    this.recordHistory('bot', plain, intent);
  }

  private addUser(text: string, intent: string = '') {
    const div = document.createElement('div');
    div.className = 'message user';
    div.innerHTML = text;
    this.messagesContainer.appendChild(div);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    this.recordHistory('user', text, intent);
  }

  private addQuickReplies(options: string[]) {
    const container = document.createElement('div');
    container.className = 'quick-replies';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quick-reply-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        container.remove();
        this.addUser(opt, 'quick-reply');
        this.processResponse(opt);
      });
      container.appendChild(btn);
    });
    this.messagesContainer.appendChild(container);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  private addChecklist(options: string[], buttonText: string, onsubmit: (selected: string[]) => void) {
    const container = document.createElement('div');
    container.className = 'checklist-container';

    const checkboxes: HTMLInputElement[] = [];

    options.forEach(opt => {
      const label = document.createElement('label');
      label.className = 'checklist-item';

      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.value = opt;
      checkboxes.push(cb);

      label.appendChild(cb);
      label.appendChild(document.createTextNode(opt));
      container.appendChild(label);
    });

    const btn = document.createElement('button');
    btn.className = 'checklist-submit';
    btn.textContent = buttonText;
    btn.addEventListener('click', () => {
      const selected = checkboxes.filter(c => c.checked).map(c => c.value);
      if (selected.length === 0) return;
      container.remove();
      const text = selected.join(', ');
      this.addUser(text, 'checklist-submit');
      onsubmit(selected);
    });

    container.appendChild(btn);
    this.messagesContainer.appendChild(container);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  /** Show selectable pricing option buttons. On click, captures selection as quantity+spec and jumps to deadline step. */
  private addPricingOptions(options: string[], onSelect: (selected: string) => void) {
    const container = document.createElement('div');
    container.className = 'pricing-options';

    const label = document.createElement('div');
    label.className = 'pricing-options-label';
    label.innerHTML = '👇 <strong>Select your option to proceed:</strong>';
    container.appendChild(label);

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'pricing-option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        container.remove();
        this.addUser(opt, 'pricing-select');
        onSelect(opt);
      });
      container.appendChild(btn);
    });

    this.messagesContainer.appendChild(container);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  private addTyping(): Promise<void> {
    return new Promise(resolve => {
      const el = document.createElement('div');
      el.className = 'message bot typing-indicator';
      el.innerHTML = '<span></span><span></span><span></span>';
      el.id = 'typing-indicator';
      this.messagesContainer.appendChild(el);
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
      setTimeout(() => { el.remove(); resolve(); }, 700);
    });
  }

  // ── Reset ──────────────────────────────────────────────────────────────────
  private resetConversation() {
    this.history = [];
    this.memory = { mentionedProducts: [] };
    this.leadData = {};
    this.pendingProducts = [];
    this.currentStep = 0;
    this.isProcessing = false;
    this.messagesContainer.innerHTML = '';
    this.showWelcomeGreeting();
  }

  // ── Input ──────────────────────────────────────────────────────────────────
  private handleSendMessage() {
    const text = this.input.value.trim();
    if (!text || this.isProcessing) return;
    this.addUser(text, 'user-input');
    this.input.value = '';
    document.querySelectorAll('.quick-replies').forEach(el => el.remove());
    this.processResponse(text);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Main Router  (context-aware)
  // ─────────────────────────────────────────────────────────────────────────────
  private async processResponse(text: string) {
    this.isProcessing = true;
    await this.addTyping();

    const lw = text.toLowerCase();

    // ── Try to extract user's name from any message ──────────────────────────
    const possibleName = extractName(text);
    if (possibleName && !this.memory.name) {
      this.memory.name = possibleName;
    }

    // ── Mid-lead-flow: continue regardless ───────────────────────────────────
    if (this.currentStep > 0) {
      this.handleQuoteFlow(text);
      this.isProcessing = false;
      return;
    }

    // ── Reset / Menu ─────────────────────────────────────────────────────────
    if (matchesAny(lw, ['start over', 'reset', 'restart', 'main menu', 'menu', 'back', 'home'])) {
      this.resetConversation();
      this.isProcessing = false;
      return;
    }

    // ── Follow-up resolution (context window) ─────────────────────────────────
    // If user sends a vague follow-up, use lastTopic / lastProduct from memory
    if (this.isFollowUp(lw)) {
      this.handleFollowUp(lw);
      this.isProcessing = false;
      return;
    }

    // ── Greetings ─────────────────────────────────────────────────────────────
    if (matchesAny(lw, ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'namaste', 'vanakkam', 'hii', 'helo'])) {
      const name = this.greet();
      this.addBot(`Hello${name ? `, <strong>${name}</strong>` : ''}! 👋 Great to have you here. What can I assist you with today?`, 'greeting');
      this.addQuickReplies(['📋 Get a Quote', '📦 Our Products', '🛠️ Our Services', '📍 Location & Contact']);
      this.memory.lastTopic = 'greeting';
      this.isProcessing = false;
      return;
    }

    // ── Name introduction ─────────────────────────────────────────────────────
    if (possibleName) {
      this.addBot(`Nice to meet you, <strong>${possibleName}</strong>! 😊 How can I assist you with your printing needs today?`, 'name');
      this.addQuickReplies(['📋 Get a Quote', '📦 Our Products', '🛠️ Our Services', '📍 Location & Contact']);
      this.memory.lastTopic = 'name';
      this.isProcessing = false;
      return;
    }

    // ── About company ─────────────────────────────────────────────────────────
    if (matchesAny(lw, ['about', 'who are you', 'company', 'history', 'founder', 'mustafa', 'established', 'since', 'background', 'tell me about'])) {
      this.addBot(`🏢 <strong>About The Printing House</strong><br><br>${KB.about}`, 'about');
      this.addBot(`📊 <strong>Key Facts:</strong><br>• Founded by <strong>Dr. Mustafa Kamal</strong><br>• Established: <strong>1986</strong> (40+ years!)<br>• <strong>10,000+</strong> happy clients<br>• 100% quality guaranteed`, 'about');
      this.memory.lastTopic = 'about';
      this.addQuickReplies(['📋 Get a Quote', '📦 Our Products', '🛠️ Our Services']);
      this.isProcessing = false;
      return;
    }

    // ── Location ──────────────────────────────────────────────────────────────
    if (matchesAny(lw, ['location', 'address', 'where', 'trichy', 'tiruchirappalli', 'find you', 'directions', 'map'])) {
      this.addBot(`📍 <strong>Our Location</strong><br><br>${KB.company.location}`, 'location');
      this.addBot(`<a href="https://maps.google.com/?q=No+6+Race+Course+Road+Kajamalai+Tiruchirappalli" target="_blank" style="color:#fbbf24; font-weight:bold;">📌 Open in Google Maps →</a>`, 'location');
      this.memory.lastTopic = 'location';
      this.isProcessing = false;
      return;
    }

    // ── Contact ───────────────────────────────────────────────────────────────
    if (matchesAny(lw, ['contact', 'phone', 'number', 'email', 'reach', 'get in touch'])) {
      this.addBot(`📞 <strong>Contact Us${this.memory.name ? `, ${this.memory.name}` : ''}</strong><br><br>Phone: <strong>${KB.company.phone}</strong><br>Email: <strong>${KB.company.email}</strong><br>Hours: <strong>${KB.company.hours}</strong>`, 'contact');
      this.addBot(`<a href="https://wa.me/${KB.company.whatsapp}" target="_blank" style="color:#fbbf24; font-weight:bold;">💬 Chat on WhatsApp →</a>`, 'contact');
      this.memory.lastTopic = 'contact';
      this.memory.preferredContact = 'call';
      this.isProcessing = false;
      return;
    }

    // ── Working hours ─────────────────────────────────────────────────────────
    if (matchesAny(lw, ['hours', 'timing', 'open', 'close', 'time', 'working', 'available', 'when are you'])) {
      this.addBot(`⏰ <strong>Working Hours</strong><br><br>We are open <strong>Monday to Friday</strong><br>🕘 <strong>9:00 AM – 8:30 PM</strong><br><br>For urgent orders outside hours, WhatsApp us at <strong>${KB.company.phone}</strong>.`, 'hours');
      this.memory.lastTopic = 'hours';
      this.isProcessing = false;
      return;
    }

    // ── WhatsApp ──────────────────────────────────────────────────────────────
    if (matchesAny(lw, ['whatsapp', 'wa.me', 'wp', 'watsapp'])) {
      this.addBot(`💬 Connect with us on WhatsApp for fast responses${this.memory.name ? `, <strong>${this.memory.name}</strong>` : ''}!`, 'whatsapp');
      this.addBot(`<a href="https://wa.me/${KB.company.whatsapp}" target="_blank" class="cta-button" style="display:inline-block; margin-top:8px; text-decoration:none;">Chat on WhatsApp →</a>`, 'whatsapp');
      this.memory.lastTopic = 'whatsapp';
      this.memory.preferredContact = 'whatsapp';
      this.isProcessing = false;
      return;
    }

    // ── Services (general) ────────────────────────────────────────────────────
    if (matchesAny(lw, ['service', 'what do you do', 'offering', 'capabilities', 'what can you do'])) {
      this.addBot(`🛠️ <strong>Our Services</strong><br><br>We offer a complete end-to-end printing solution in three stages:`, 'services');
      this.memory.lastTopic = 'services';
      this.addQuickReplies(['1️⃣ PrePress', '2️⃣ Printing', '3️⃣ Finishing & Delivery', '📋 Get a Quote']);
      this.isProcessing = false;
      return;
    }

    if (matchesAny(lw, ['prepress', 'pre press', 'pre-press', 'design', 'graphic', 'layout', 'file prep', '1️⃣'])) {
      this.addBot(`🎨 <strong>PrePress Services</strong><br><br>${KB.services.prepress.replace(/\n/g, '<br>')}`, 'prepress');
      this.memory.lastTopic = 'prepress';
      this.memory.lastIntent = 'prepress';
      this.addQuickReplies(['📋 Get a Quote', '2️⃣ Printing', '3️⃣ Finishing & Delivery']);
      this.isProcessing = false;
      return;
    }

    if (matchesAny(lw, ['offset', 'digital print', 'multicolor', 'multi-color', 'color printing', 'b&w', 'black and white', '2️⃣'])) {
      this.addBot(`🖨️ <strong>Printing Services</strong><br><br>${KB.services.printing.replace(/\n/g, '<br>')}`, 'printing');
      this.memory.lastTopic = 'printing';
      this.memory.lastIntent = 'printing';
      this.addQuickReplies(['📋 Get a Quote', '📦 Our Products']);
      this.isProcessing = false;
      return;
    }

    if (matchesAny(lw, ['finish', 'laminate', 'binding', 'cutting', 'fold', 'staple', 'delivery', '3️⃣'])) {
      this.addBot(`✂️ <strong>Finishing & Delivery</strong><br><br>${KB.services.finishing.replace(/\n/g, '<br>')}`, 'finishing');
      this.memory.lastTopic = 'finishing';
      this.memory.lastIntent = 'finishing';
      this.addQuickReplies(['📋 Get a Quote', '📦 Our Products']);
      this.isProcessing = false;
      return;
    }

    // ── Products list ─────────────────────────────────────────────────────────
    if (matchesAny(lw, ['product', 'items', 'catalogue', 'catalog', 'what can you print', 'what do you print', 'what types', 'print what'])) {
      const list = Object.keys(KB.products).map((p, i) => `${i + 1}. ${p.charAt(0).toUpperCase() + p.slice(1)}`).join('<br>');
      this.addBot(`📦 <strong>Our Products</strong><br><br>We print a wide range of items:<br><br>${list}`, 'products');
      this.addBot(this.memory.name
        ? `Which one interests you, <strong>${this.memory.name}</strong>? I can give you full details and arrange a quote.`
        : `Which product would you like to know more about? I can provide full details and a quotation.`, 'products');
      this.memory.lastTopic = 'products';
      this.addQuickReplies(['🃏 Business Cards', '📚 Books', '📄 Brochures', '📅 Calendars', '� Synopsis Binding', '📋 Get a Quote']);
      this.isProcessing = false;
      return;
    }

    // ── Individual product lookup ─────────────────────────────────────────────
    const productMap: Record<string, string[]> = {
      "sun pack printing": ['sun pack', 'sunpack', 'sunpack printing', 'advertisement board'],
      "flex": ['flex', 'banner', 'hoarding', 'vinyl', 'backlit', 'sunpack', 'star flex'],
      "id cards": ['id card', 'pvc card', 'identity card', 'idcard'],
      "flyer a5 ss": ['flyer a5 ss', 'a5 flyer ss', 'a5 flyer single', 'a5 flyer single side'],
      "flyer a5 fb": ['flyer a5 fb', 'a5 flyer fb', 'a5 flyer back', 'a5 flyer front and back'],
      "flyer a4 ss": ['flyer a4 ss', 'a4 flyer ss', 'a4 flyer single', 'a4 flyer single side'],
      "flyer a4 fb": ['flyer a4 fb', 'a4 flyer fb', 'a4 flyer back', 'a4 flyer front and back'],
      "flyer a3 ss": ['flyer a3 ss', 'a3 flyer ss', 'a3 flyer single', 'a3 flyer single side'],
      "flyer a3 fb": ['flyer a3 fb', 'a3 flyer fb', 'a3 flyer back', 'a3 flyer front and back'],
      "multi colour certificate": ['certificate', 'award'],
      "multi colour envelopes": ['multi colour envelopes', 'multi color envelope', 'multicolour envelope', 'multi colour envelope'],
      "double colour envelopes": ['double colour envelopes', 'double color envelope', 'double colour envelope'],
      "single colour envelopes": ['single colour envelopes', 'single color envelope', 'single colour envelope'],
      "synopsis binding": ['synopsis', 'synopsis binding', 'tape binding'],
      "multi colour letter head": ['multi colour letterhead', 'multi color letterhead', 'multi colour letter head'],
      "double colour letter head": ['double colour letterhead', 'double color letterhead', 'double colour letter head', 'double colour letter'],
      "single colour letter head": ['single colour letterhead', 'single color letterhead', 'single colour letter head'],
      "thesis": ['thesis', 'dissertation', 'project report', 'thesis binding'],
      "cd": ['cd', 'dvd', 'cd writing', 'cd sticker'],
      "prescription pad": ['prescription', 'prescription pad', 'doctor pad', 'medical pad'],
      "lamination": ['lamination', 'laminate', 'laminating', 'id lamination', 'sheet lamination'],
      "binding": ['binding', 'spiral binding', 'hard binding', 'soft binding', 'project binding', 'comb binding'],
      "doctor file - plastic": ['doctor file', 'plastic file', 'medical file', 'file printing'],
      "business cards": ['business card', 'visiting card', 'name card', 'offset visiting', 'offset card', 'visiting card rate', 'card rate', 'card price', 'vc rate'],
      "offset visiting card": ['offset visiting card'],
    };

    // Check if ANY product key is mentioned even partially (to stop auto-resorting to lastProduct)
    let hasNewProductMention = false;
    for (const keywords of Object.values(productMap)) {
      if (matchesAny(lw, keywords)) {
        hasNewProductMention = true;
        break;
      }
    }
    // Specific check for generic 'flyer' to prevent falling through
    if (lw.includes('flyer')) hasNewProductMention = true;

    for (const [product, keywords] of Object.entries(productMap)) {
      if (matchesAny(lw, keywords)) {
        const desc = KB.products[product as keyof typeof KB.products];
        // Check if user already asked about this product (memory)
        const alreadyMentioned = this.memory.mentionedProducts.includes(product);
        if (alreadyMentioned && this.memory.lastProduct === product) {
          this.addBot(`You asked about <strong>${product}</strong> earlier — here's a quick recap:<br><br>${desc}`, product);
          this.addBot(`Ready to place an order or get a formal quote${this.memory.name ? `, <strong>${this.memory.name}</strong>` : ''}?`, product);
        } else {
          this.addBot(`📌 <strong>${product.charAt(0).toUpperCase() + product.slice(1)}</strong><br><br>${desc}`, product);
          this.addBot(`Would you like a quotation for your ${product} order${this.memory.name ? `, <strong>${this.memory.name}</strong>` : ''}?`, product);
        }
        this.memory.lastProduct = product;
        this.memory.lastTopic = 'product-detail';
        this.memory.lastIntent = product;
        if (!this.memory.mentionedProducts.includes(product)) {
          this.memory.mentionedProducts.push(product);
        }
        this.addQuickReplies(['📋 Yes, get quote', '📦 See All Products', '📞 Call Us']);
        this.isProcessing = false;
        return;
      }
    }

    // Handle generic 'flyer' mention that wasn't caught by specific types
    if (lw.includes('flyer')) {
      this.addBot(`📄 <strong>Flyers & Leaflets</strong><br><br>We offer high-quality flyers in A5, A4, and A3 sizes with various paper options.`, 'flyer-choice');
      this.addBot(`Which size would you like a price for?`, 'flyer-choice');
      this.addQuickReplies(['Flyer A5', 'Flyer A4', 'Flyer A3']);
      this.memory.lastTopic = 'product-choice';
      this.isProcessing = false;
      return;
    }

    // ── Quote / pricing ───────────────────────────────────────────────────────
    if (matchesAny(lw, ['quote', 'quotation', 'price', 'cost', 'rate', 'how much', 'estimate', 'pricing', 'charges', 'yes, get quote', 'get a quote'])) {
      this.leadData = {};
      // Pre-fill product from memory ONLY if they haven't mentioned a different product in this specific message
      if (!hasNewProductMention && this.memory.lastProduct && (lw.includes('how much') || lw.includes('price') || lw.includes('cost'))) {
        this.leadData.product = this.memory.lastProduct;
      }
      this.currentStep = this.leadData.product ? 2 : 1;
      if (this.leadData.product) {
        this.addBot(this.personalise(`Got it — I'll prepare a quote for <strong>${this.leadData.product}</strong>! 📋<br><br>What quantity are you looking for?`), 'quote');
      } else {
        this.addBot(`📋 <strong>Let's get you a quotation${this.memory.name ? `, <strong>${this.memory.name}</strong>` : ''}!</strong><br><br>First — what product(s) would you like to print?`, 'quote');
        this.addChecklist([
          'Sun pack printing',
          'Flex',
          'ID cards',
          'Flyer A5 SS',
          'Flyer A5 FB',
          'Flyer A4 SS',
          'Flyer A4 FB',
          'Flyer A3 SS',
          'Flyer A3 FB',
          'Multi colour certificate',
          'Multi colour envelopes',
          'Double colour envelopes',
          'Single Colour envelopes',
          'Synopsis binding',
          'Multi colour letter head',
          'Double colour letter head',
          'Single Colour Letter head',
          'Thesis',
          'CD',
          'Prescription pad',
          'Lamination',
          'Doctor file - plastic',
          'Binding',
          'Business cards',
          'Offset visiting card'
        ], 'Confirm Products', (selected) => {
          this.processResponse(selected.join(', '));
        });
      }
      this.memory.lastTopic = 'quote';
      this.isProcessing = false;
      return;
    }

    // ── Bulk / corporate ──────────────────────────────────────────────────────
    if (matchesAny(lw, ['bulk', 'large quantity', 'large order', 'wholesale', 'corporate', 'big order', 'high volume'])) {
      this.addBot(`🏭 <strong>Bulk & Corporate Orders</strong><br><br>High-volume commercial printing is our forte! We handle:<br>• Large-quantity offset printing<br>• Corporate stationery kits<br>• Event & promotional materials<br>• Educational institution needs`, 'bulk');
      this.memory.lastTopic = 'bulk';
      this.addQuickReplies(['📋 Start Bulk Enquiry', '📞 Call Us', '💬 WhatsApp']);
      this.isProcessing = false;
      return;
    }

    // ── Urgent ────────────────────────────────────────────────────────────────
    if (matchesAny(lw, ['urgent', 'rush', 'emergency', 'same day', 'asap', 'fast', 'quick delivery', 'as soon as'])) {
      this.addBot(`⚡ <strong>Urgent Orders</strong><br><br>Yes${this.memory.name ? `, <strong>${this.memory.name}</strong>` : ''}, we accommodate urgent printing requests! Our team is known for fast turnaround without compromising quality.`, 'urgent');
      this.addBot(`📞 <strong>${KB.company.phone}</strong><br><a href="https://wa.me/${KB.company.whatsapp}" target="_blank" style="color:#fbbf24; font-weight:bold;">💬 WhatsApp Us Now →</a>`, 'urgent');
      this.memory.lastTopic = 'urgent';
      this.isProcessing = false;
      return;
    }

    // ── Testimonials / reviews ────────────────────────────────────────────────
    if (matchesAny(lw, ['review', 'testimonial', 'feedback', 'rating', 'recommend', 'what do customers say', 'opinions'])) {
      const t = KB.testimonials[Math.floor(Math.random() * KB.testimonials.length)];
      this.addBot(`⭐ <strong>What our clients say:</strong><br><br><em>"${t.review}"</em><br><br>— <strong>${t.name}</strong>`, 'reviews');
      this.addBot(`We have <strong>10,000+</strong> happy clients across Tiruchirappalli. Want to experience our quality${this.memory.name ? `, <strong>${this.memory.name}</strong>` : ''}?`, 'reviews');
      this.memory.lastTopic = 'reviews';
      this.addQuickReplies(['📋 Get a Quote', '📞 Call Us', '💬 WhatsApp']);
      this.isProcessing = false;
      return;
    }

    // ── File formats ──────────────────────────────────────────────────────────
    if (matchesAny(lw, ['file', 'format', 'pdf', 'ai file', 'psd', 'cdr', 'jpeg', 'png', 'artwork', 'design file', 'send file', 'submit file'])) {
      this.addBot(`📁 <strong>File Formats We Accept</strong><br><br>We accept: <strong>PDF, AI, PSD, CDR, JPEG/PNG</strong><br><br>Not sure if your file is ready? Our PrePress team will prepare it for you.`, 'file-formats');
      this.memory.lastTopic = 'file-formats';
      this.isProcessing = false;
      return;
    }

    // ── Quality ───────────────────────────────────────────────────────────────
    if (matchesAny(lw, ['quality', 'guarantee', 'assurance', 'defect', 'mistake', 'error', 'standard'])) {
      this.addBot(`✅ <strong>Our Quality Promise</strong><br><br>We have a rigorous quality control process at every stage — from pre-press proofing to final finishing. Every print is checked to ensure it meets the highest standards.<br><br>Over <strong>10,000+ satisfied clients</strong> and 40 years in business speak for our quality!`, 'quality');
      this.memory.lastTopic = 'quality';
      this.isProcessing = false;
      return;
    }

    // ── Minimum order ─────────────────────────────────────────────────────────
    if (matchesAny(lw, ['minimum', 'min order', 'small order', 'one piece', 'single copy', 'how many minimum', 'minimum quantity'])) {
      this.addBot(`📏 <strong>Minimum Order</strong><br><br>We accept orders of <strong>any size</strong> — from a single piece to high-volume bulk orders. Contact us for quantity-based pricing.`, 'min-order');
      this.memory.lastTopic = 'min-order';
      this.addQuickReplies(['📋 Get a Quote', '📞 Call Us']);
      this.isProcessing = false;
      return;
    }

    // ── Turnaround ────────────────────────────────────────────────────────────
    if (matchesAny(lw, ['how long', 'turnaround', 'days', 'lead time', 'ready in', 'how many days', 'delivery time'])) {
      this.addBot(`⏱️ <strong>Turnaround Time</strong><br><br>Turnaround depends on the product and quantity. Urgent orders are always accommodated. For time-sensitive requirements, please call or WhatsApp us directly.`, 'turnaround');
      this.addBot(`📞 <strong>${KB.company.phone}</strong>`, 'turnaround');
      this.memory.lastTopic = 'turnaround';
      this.isProcessing = false;
      return;
    }

    // ── Machinery ─────────────────────────────────────────────────────────────
    if (matchesAny(lw, ['machine', 'machinery', 'equipment', 'technology', 'press', 'latest machine'])) {
      this.addBot(`⚙️ <strong>Our Machinery</strong><br><br>The Printing House uses the <strong>latest state-of-the-art printing machinery</strong>:<br>• Modern offset printing presses<br>• Advanced digital printers<br>• Multi-color printing machines<br>• Professional finishing equipment<br><br>This allows us to deliver at any scale — from one piece to lakhs of copies.`, 'machinery');
      this.memory.lastTopic = 'machinery';
      this.isProcessing = false;
      return;
    }

    // ── Call us ───────────────────────────────────────────────────────────────
    if (matchesAny(lw, ['call', 'call us', 'talk to someone', 'speak', 'human', 'agent', 'executive', 'speak to'])) {
      this.addBot(`📞 Our team is ready to assist${this.memory.name ? `, <strong>${this.memory.name}</strong>` : ''}!<br><br><strong>${KB.company.phone}</strong><br>${KB.company.hours}`, 'call');
      this.addBot(`Prefer WhatsApp? <a href="https://wa.me/${KB.company.whatsapp}" target="_blank" style="color:#fbbf24; font-weight:bold;">Tap here →</a>`, 'call');
      this.memory.lastTopic = 'call';
      this.isProcessing = false;
      return;
    }

    // ── Start bulk enquiry (quick reply) ──────────────────────────────────────
    if (matchesAny(lw, ['start bulk enquiry', 'bulk enquiry'])) {
      this.leadData = {};
      this.currentStep = 1;
      this.addBot(`📋 Let's start your bulk enquiry${this.memory.name ? `, <strong>${this.memory.name}</strong>` : ''}!<br><br>What product are you looking to order in bulk?`, 'bulk-quote');
      this.addChecklist([
        'Sun pack printing',
        'Flex',
        'ID cards',
        'Flyer A5 SS',
        'Flyer A5 FB',
        'Flyer A4 SS',
        'Flyer A4 FB',
        'Flyer A3 SS',
        'Flyer A3 FB',
        'Multi colour certificate',
        'Multi colour envelopes',
        'Double colour envelopes',
        'Single Colour envelopes',
        'Synopsis binding',
        'Multi colour letter head',
        'Double colour letter head',
        'Single Colour Letter head',
        'Thesis',
        'CD',
        'Prescription pad',
        'Lamination',
        'Doctor file - plastic',
        'Binding',
        'Business cards',
        'Offset visiting card'
      ], 'Start Bulk Enquiry', (selected) => {
        this.processResponse(selected.join(', '));
      });
      this.memory.lastTopic = 'quote';
      this.isProcessing = false;
      return;
    }

    // ── Thanks ────────────────────────────────────────────────────────────────
    if (matchesAny(lw, ['thank', 'thanks', 'thank you', 'great', 'awesome', 'perfect', 'got it', 'okay', 'ok', 'sure'])) {
      const name = this.greet();
      this.addBot(`😊 You're welcome${name ? `, <strong>${name}</strong>` : ''}! Is there anything else I can help you with?`, 'thanks');
      this.addQuickReplies(['📋 Get a Quote', '📦 Our Products', '📞 Contact Us']);
      this.isProcessing = false;
      return;
    }

    // ── Context summary (user asks what was discussed) ────────────────────────
    if (matchesAny(lw, ['what did we discuss', 'what have we talked', 'summary', 'our conversation', 'what did i ask', 'recap'])) {
      this.handleContextSummary();
      this.isProcessing = false;
      return;
    }

    // ── Motto / tagline ────────────────────────────────────────────────────────
    if (matchesAny(lw, ['motto', 'moto', 'tagline', 'slogan', 'mission', 'what is your', 'your mission', 'your vision', 'your goal', 'what does tph stand for', 'company goal'])) {
      this.addBot(`🎯 <strong>Our Motto</strong><br><br><em>"Precision in Every Print."</em><br><br>At The Printing House, we believe every print job is an opportunity to elevate your brand. Our mission is to deliver <strong>excellence, accuracy, and quality</strong> through every project — combining 40+ years of craftsmanship with modern technology.`, 'motto');
      this.memory.lastTopic = 'motto';
      this.isProcessing = false;
      return;
    }

    // ── Owner / founder name ───────────────────────────────────────────────────
    if (matchesAny(lw, ['owner', 'founder', 'who founded', 'who started', 'who owns', 'proprietor', 'who is the owner', 'owner name', 'founder name', 'who is behind', 'md ', 'managing director', 'director name', 'jamila', 'mustafa'])) {
      this.addBot(`👤 <strong>Our Founder & Owner</strong><br><br>The Printing House was founded by <strong>Dr. Mustafa Kamal</strong>, a visionary leader who established the company in <strong>1986</strong>.<br><br>The business is also managed by <strong>Mrs. Jamila</strong>, who is known for her warm customer service and professional approach. Together, they have built TPH into the region's most trusted printing partner.`, 'owner');
      this.memory.lastTopic = 'owner';
      this.isProcessing = false;
      return;
    }

    // ── Who am I ───────────────────────────────────────────────────────────────
    if (matchesAny(lw, ['who am i', 'who am i?', 'what is my name', 'do you know me', 'do you know my name', 'my name', 'remember me', 'what did i tell you'])) {
      if (this.memory.name) {
        this.addBot(`😊 You told me your name is <strong>${this.memory.name}</strong>! I remember everything you've shared with me in this conversation.`, 'who-am-i');
      } else {
        this.addBot(`I don't know your name yet! 🙂 Feel free to introduce yourself — just say something like <em>"My name is [your name]"</em> and I'll remember it for the rest of our conversation.`, 'who-am-i');
      }
      this.memory.lastTopic = 'who-am-i';
      this.isProcessing = false;
      return;
    }

    // ── Fallback ──────────────────────────────────────────────────────────────
    const name = this.greet();
    this.addBot(`I'm here to help with all things related to <strong>The Printing House</strong>${name ? `, <strong>${name}</strong>` : ''}! Here's what I can assist with:`, 'fallback');
    this.addQuickReplies(['📋 Get a Quote', '📦 Our Products', '🛠️ Our Services', '📍 Location & Hours', '💬 WhatsApp']);
    this.isProcessing = false;
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Context-aware: follow-up handler
  // ─────────────────────────────────────────────────────────────────────────────
  private handleFollowUp(lw: string) {
    const topic = this.memory.lastTopic;
    const product = this.memory.lastProduct;
    const name = this.greet();

    // "how much / pricing" follow-up → quote for last product
    if (matchesAny(lw, ['how much', 'price', 'cost', 'rate', 'pricing for', 'how much for it', 'how much for that'])) {
      if (product) {
        this.leadData = { product };
        this.currentStep = 2;
        this.addBot(`Sure${name ? `, <strong>${name}</strong>` : ''}! I'll prepare a quote for <strong>${product}</strong>. What quantity are you looking for?`, 'quote');
        this.memory.lastTopic = 'quote';
        return;
      }
    }

    // "tell me more" about last product
    if (product && topic === 'product-detail') {
      const desc = KB.products[product as keyof typeof KB.products];
      this.addBot(`📌 <strong>More about ${product}</strong><br><br>${desc}<br><br>We can print in bulk or small quantities with full finishing options.`, 'product-detail');
      this.addQuickReplies(['📋 Get a Quote', '📞 Call Us', '💬 WhatsApp']);
      return;
    }

    // "tell me more" about last service
    if (topic === 'services' || topic === 'prepress' || topic === 'printing' || topic === 'finishing') {
      const map: Record<string, string> = { prepress: KB.services.prepress, printing: KB.services.printing, finishing: KB.services.finishing };
      const detail = map[topic] || KB.services.printing;
      this.addBot(`🛠️ <strong>More details on ${topic}</strong><br><br>${detail.replace(/\n/g, '<br>')}`, 'services');
      this.addQuickReplies(['📋 Get a Quote', '📦 Products']);
      return;
    }

    // Generic follow-up we couldn't resolve
    this.addBot(`I'm sorry, I didn't quite catch that. Could you clarify what you'd like to know more about${name ? `, <strong>${name}</strong>` : ''}? Here are some options:`, 'follow-up-unclear');
    this.addQuickReplies(['📋 Get a Quote', '📦 Our Products', '🛠️ Our Services', '📍 Location']);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Context summary — user can ask "what did we discuss?"
  // ─────────────────────────────────────────────────────────────────────────────
  private handleContextSummary() {
    const userTurns = this.history.filter(e => e.role === 'user');
    if (userTurns.length === 0) {
      this.addBot(`We haven't discussed anything yet! What would you like to know?`, 'summary');
      return;
    }
    let summary = `📋 <strong>Conversation Summary</strong><br><br>`;
    if (this.memory.name) summary += `• Your name: <strong>${this.memory.name}</strong><br>`;
    if (this.memory.mentionedProducts.length > 0) summary += `• Products discussed: <strong>${this.memory.mentionedProducts.join(', ')}</strong><br>`;
    if (this.memory.lastTopic) summary += `• Last topic: <strong>${this.memory.lastTopic}</strong><br>`;
    summary += `• Total exchanges: <strong>${userTurns.length}</strong>`;
    this.addBot(summary, 'summary');
    this.addBot(`Is there anything specific you'd like to continue or revisit?`, 'summary');
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Quote Flow
  // ─────────────────────────────────────────────────────────────────────────────
  private handleQuoteFlow(text: string) {
    const name = this.memory.name;
    switch (this.currentStep) {
      case 1: {
        this.leadData.product = text;
        this.leadData.selections = {};
        this.memory.lastProduct = text;
        if (!this.memory.mentionedProducts.includes(text)) this.memory.mentionedProducts.push(text);

        if (text.includes(',')) {
          this.pendingProducts = text.split(',').map(p => p.trim());
          this.moveToNextProductSelection();
        } else {
          this.pendingProducts = [text];
          this.moveToNextProductSelection();
        }
        break;
      }

      case 2: {
        const currentProduct = this.pendingProducts[0];
        if (currentProduct && this.leadData.selections) {
          this.leadData.selections[currentProduct] = text;
        }
        this.pendingProducts.shift(); // remove processed

        if (this.pendingProducts.length > 0) {
          this.moveToNextProductSelection();
        } else {
          this.currentStep = 3;
          this.addBot(`Got it! All items configured. 📝<br><br>Now${name ? `, <strong>${name}</strong>` : ''}, could you please share your <strong>Name</strong>?`, 'quote-step');
        }
        break;
      }

      case 3: {
        const trimmedName = text.trim();
        if (trimmedName.length < 2) {
          this.addBot(`I'm sorry, could you please provide a valid <strong>Name</strong>? (At least 2 characters)`, 'quote-step');
          return;
        }
        this.leadData.name = trimmedName;
        const nm = extractName(trimmedName);
        if (nm && !this.memory.name) this.memory.name = nm;
        this.currentStep = 4;
        this.addBot(`Thank you, <strong>${trimmedName}</strong>! Finally, what is your <strong>Phone Number</strong>?`, 'quote-step');
        break;
      }

      case 4: {
        const trimmedPhone = text.trim();
        const digitsOnly = trimmedPhone.replace(/\D/g, '');
        if (digitsOnly.length < 10) {
          this.addBot(`Please provide a valid <strong>Phone Number</strong> (e.g., 10 digits) so we can reach you with the quote.`, 'quote-step');
          return;
        }
        this.leadData.phone = trimmedPhone;
        this.finishQuote();
        break;
      }
    }
  }

  private moveToNextProductSelection() {
    const p = this.pendingProducts[0];
    const lwProduct = p.toLowerCase();
    const productDesc = KB.products[lwProduct as keyof typeof KB.products];
    const pricingOpts = PRODUCT_PRICING_OPTIONS[lwProduct];

    this.currentStep = 2;

    if (productDesc) {
      this.addBot(`📊 <strong>Rate Card: ${p}</strong><br><br>${productDesc}`, 'product-detail');
    }

    if (pricingOpts) {
      this.addPricingOptions(pricingOpts, (selected) => {
        this.handleQuoteFlow(selected);
      });
    } else {
      this.addBot(`What size or specifications do you need for <strong>${p}</strong>?`, 'quote-step');
    }
  }

  private finishQuote() {
    const extractedName = this.memory.name || extractName(this.leadData.name || '') || '';

    // ── 1. Render Quotation-style UI message ──────────────────────────────
    const quotationHtml = `
      <div id="quotation-summary-card" class="quotation-box" style="background: white; color: #1e293b; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); font-family: 'Inter', sans-serif;">
        <div style="text-align: center; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-bottom: 15px;">
          <img src="/logo.png" alt="Logo" style="height: 40px; margin-bottom: 5px;">
          <div style="font-weight: 800; font-size: 1.2rem; text-transform: uppercase; color: #1e3a8a;">${KB.company.name}</div>
          <div style="font-size: 0.75rem; color: #64748b; line-height: 1.2;">
            ${KB.company.location}<br>
            📞 ${KB.company.phone} | ✉️ ${KB.company.email}
          </div>
        </div>
        
        <div style="font-size: 0.85rem; margin-bottom: 12px;">
          <div style="font-weight: 700; color: #3b82f6; text-transform: uppercase; margin-bottom: 8px; font-size: 0.75rem; border-bottom: 1px dashed #cbd5e1;">Enquiry Details</div>
          <div style="line-height: 1.4;">
            ${Object.entries(this.leadData.selections || {}).map(([prod, spec]) => `
              <div style="margin-bottom: 8px; border-left: 3px solid #3b82f6; padding-left: 8px;">
                <div style="font-weight: 700; color: #1e3a8a; font-size: 0.8rem;">${prod}</div>
                <div style="font-size: 0.75rem; color: #475569;">${spec}</div>
              </div>
            `).join('')}
            
            <div style="display: grid; grid-template-columns: 85px 1fr; gap: 4px; margin-top: 8px; border-top: 1px solid #f1f5f9; pt-4;">
              <span style="color: #64748b;">Customer:</span><span style="font-weight: 600;">${this.leadData.name}</span>
              <span style="color: #64748b;">Phone:</span><span style="font-weight: 600;">${this.leadData.phone}</span>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; font-size: 0.7rem; color: #94a3b8; font-style: italic; border-top: 1px solid #f1f5f9; pt-8 mt-8;">
          Thank you for choosing The Printing House!
        </div>
      </div>
    `;

    this.addBot(`✅ <strong>Quotation Generated!</strong><br>${quotationHtml}`, 'quote-done');

    this.addBot(
      `${extractedName ? `Thank you, <strong>${extractedName}</strong>! ` : 'Thank you! '}Our sales executive will contact you shortly.<br><br>📞 <strong>${KB.company.phone}</strong>`,
      'quote-done'
    );

    const waText = `Hi! I just submitted an enquiry to The Printing House.\n\n` +
      `Enquiry Items:\n` +
      Object.entries(this.leadData.selections || {}).map(([p, s]) => `• ${p}: ${s}`).join('\n') +
      `\n\nName: ${this.leadData.name}\n` +
      `Phone: ${this.leadData.phone}`;

    this.addBot(
      `<a href="https://wa.me/${KB.company.whatsapp}?text=${encodeURIComponent(waText)}" target="_blank" class="cta-button" style="display:inline-block; margin-top:10px; text-decoration:none;">💬 Follow up on WhatsApp →</a>`,
      'quote-done'
    );

    // ── 2. Professional Plain-Text Receipt for Email ──────────────────
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    const refNum = Math.floor(1000 + Math.random() * 9000);

    const plainTextReceipt = [
      `==========================================`,
      `       THE PRINTING HOUSE - TRICHY        `,
      `          --- ENQUIRY RECEIPT ---         `,
      `==========================================`,
      `Ref No : TPH-${refNum} `,
      `Date   : ${dateStr}`,
      `------------------------------------------`,
      `CUSTOMER DETAILS:`,
      `Name   : ${this.leadData.name}`,
      `Phone  : ${this.leadData.phone}`,
      `------------------------------------------`,
      `ENQUIRY DETAILS:`,
      ...Object.entries(this.leadData.selections || {}).map(([p, s]) => ` - ${p}: ${s}`),
      `------------------------------------------`,
      `        Thank you for your enquiry!        `,
      `    Our team will contact you shortly.    `,
      `==========================================`,
      `Shop: No 6, Race Course Road, Trichy`,
      `Ph  : +91 90031 69615`,
      `==========================================`
    ].join('\n');

    const emailBody = {
      _subject: `QUOTATION ENQUIRY [TPH-${refNum}]: ${Object.keys(this.leadData.selections || {}).join(', ')}`,
      ENQUIRY_RECEIPT: plainTextReceipt,
      // Metadata for FormSubmit dashboard filtering
      Customer_Name: this.leadData.name,
      Customer_Phone: this.leadData.phone,
      Product: this.leadData.product,
      _template: 'table'
    };

    fetch('https://formsubmit.co/ajax/aakashkummar1258@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailBody)
    })
      .then(response => response.json())
      .then(data => console.log('Email sent successfully:', data))
      .catch(error => console.error('Email send failed:', error));

    this.currentStep = 0;
    this.leadData = {};
    this.memory.lastTopic = 'quote-done';
    setTimeout(() => {
      this.addBot(`Is there anything else I can help you with${this.memory.name ? `, <strong>${this.memory.name}</strong>` : ''}?`, 'quote-done');
      this.addQuickReplies(['📦 Our Products', '🛠️ Our Services', '📍 Location & Contact']);

      // Scroll back to the quotation card so it's visible
      const card = document.getElementById('quotation-summary-card');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 900);
  }
}

// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  new Chatbot();
});
