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
    "books / bill books": "Custom-designed bill books with sequential numbering, carbon copy options, and sturdy binding — perfect for organized and professional business transactions.",
    "brochures": "High-impact brochures printed with vibrant colors and sharp details. Folded, stitched, or stapled — we deliver marketing materials that leave a lasting impression.",
    "calendars": "High-quality custom calendar printing to showcase your brand all year round. Vibrant designs and premium materials — perfect for businesses, events, and gifts.",
    "certificates": "Professional certificate printing with elegant designs and premium finishes. Ideal for awards, achievements, and recognitions.",
    "envelopes": "Custom envelope printing with sharp designs and quality materials — perfect for businesses, events, and personal branding.",
    "invitations": "Elegant and customized invitation printing for weddings, events, and special occasions. Premium designs and flawless finishes.",
    "letterheads": "Professional letterhead printing with premium quality paper and crisp designs — perfect for enhancing your brand identity.",
    "logo printing": "High-quality logo printing that brings your brand to life with vibrant colors and sharp details.",
    "shields / trophies": "Premium shield printing for awards, honors, and special recognitions — crafted with precision and elegant finishes.",
    "standees": "Eye-catching standee printing for events, promotions, and branding — vibrant colors and durable materials.",
    "stickers": "Custom sticker printing with vibrant colors, strong adhesives, and premium finishes — perfect for branding and packaging.",
    "business cards": "Premium business card printing with sleek designs and high-quality materials — leaving a professional lasting impression.",
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
  deadline?: string;
  name?: string;
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
function formatDate(d: Date): string {
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

/**
 * Converts relative date words to real calendar dates using the system clock.
 * Any other text is returned unchanged.
 */
function resolveDeadline(text: string): string {
  const lw = text.toLowerCase().trim();
  const today = new Date();

  const add = (days: number): string => {
    const d = new Date(today);
    d.setDate(d.getDate() + days);
    return formatDate(d);
  };

  if (lw === 'today') return `${formatDate(today)} (today)`;
  if (lw === 'tomorrow') return `${add(1)} (tomorrow)`;
  if (lw === 'day after tomorrow' || lw === 'day after') return `${add(2)} (day after tomorrow)`;
  if (lw === 'next week') return `${add(7)} (next week)`;
  if (lw === 'next month') {
    const d = new Date(today);
    d.setMonth(d.getMonth() + 1);
    return `${formatDate(d)} (next month)`;
  }
  // Helper to parse English numbers up to 10
  const parseNum = (n: string): number => {
    const map: Record<string, number> = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };
    return map[n] || parseInt(n);
  };

  // "in X days" or "after X days"
  const inDays = lw.match(/^(?:in|after)\s+(\d+|one|two|three|four|five|six|seven|eight|nine|ten)\s+days?$/);
  if (inDays) {
    const n = parseNum(inDays[1]);
    return `${add(n)} (in ${n} days)`;
  }

  // "X days" → e.g. "3 days"
  const justDays = lw.match(/^(\d+|one|two|three|four|five|six|seven|eight|nine|ten)\s+days?$/);
  if (justDays) {
    const n = parseNum(justDays[1]);
    return `${add(n)} (in ${n} days)`;
  }

  return text; // Not a relative term — keep as-is
}

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

    setTimeout(() => {
      this.addBot(`👋 Welcome to <strong>The Printing House</strong>, Trichy!`, 'greeting');
      this.addBot(`I'm your printing consultant — here to help with quotes, product info, services, and more. With <strong>40+ years of expertise</strong>, we handle everything from business cards to bulk commercial printing. How can I help you today?`, 'greeting');
      this.addQuickReplies(['📋 Get a Quote', '📦 Our Products', '🛠️ Our Services', '📍 Location & Contact', '⏰ Working Hours']);
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

  /** Last N user messages as plain text */
  private recentUserMessages(n = 3): string[] {
    return this.history
      .filter(e => e.role === 'user')
      .slice(-n)
      .map(e => e.content.toLowerCase());
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
    this.currentStep = 0;
    this.isProcessing = false;
    this.messagesContainer.innerHTML = '';
    setTimeout(() => {
      this.addBot(`🔄 Conversation restarted! How can I help you?`, 'reset');
      this.addQuickReplies(['📋 Get a Quote', '📦 Our Products', '🛠️ Our Services', '📍 Location & Contact', '⏰ Working Hours']);
    }, 200);
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
      this.addQuickReplies(['🃏 Business Cards', '📚 Books', '📄 Brochures', '📅 Calendars', '💌 Invitations', '📋 Get a Quote']);
      this.isProcessing = false;
      return;
    }

    // ── Individual product lookup ─────────────────────────────────────────────
    const productMap: Record<string, string[]> = {
      "books / bill books": ['book', 'bill book', 'notebook'],
      "brochures": ['brochure', 'flyer', 'leaflet', 'pamphlet'],
      "calendars": ['calendar', 'calender'],
      "certificates": ['certificate', 'award'],
      "envelopes": ['envelope'],
      "invitations": ['invitation', 'wedding card', 'wedding invitation', 'marriage card', 'marriage invitation'],
      "letterheads": ['letterhead', 'letter head'],
      "logo printing": ['logo'],
      "shields / trophies": ['shield', 'trophy'],
      "standees": ['standee', 'banner', 'flex'],
      "stickers": ['sticker', 'label'],
      "business cards": ['business card', 'visiting card', 'name card'],
    };

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

    // ── Quote / pricing ───────────────────────────────────────────────────────
    if (matchesAny(lw, ['quote', 'quotation', 'price', 'cost', 'rate', 'how much', 'estimate', 'pricing', 'charges', 'yes, get quote', 'get a quote'])) {
      this.leadData = {};
      // Pre-fill product from memory if we were just discussing one
      if (this.memory.lastProduct && lw.includes('how much') || lw.includes('price') || lw.includes('cost')) {
        this.leadData.product = this.memory.lastProduct;
      }
      this.currentStep = this.leadData.product ? 2 : 1;
      if (this.leadData.product) {
        this.addBot(this.personalise(`Got it — I'll prepare a quote for <strong>${this.leadData.product}</strong>! 📋<br><br>What quantity are you looking for?`), 'quote');
      } else {
        this.addBot(`📋 <strong>Let's get you a quotation${this.memory.name ? `, <strong>${this.memory.name}</strong>` : ''}!</strong><br><br>First — what product would you like to print? <em>(e.g., Books, Brochures, Calendars, Business Cards…)</em>`, 'quote');
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
      case 1:
        this.leadData.product = text;
        this.memory.lastProduct = text;
        if (!this.memory.mentionedProducts.includes(text)) this.memory.mentionedProducts.push(text);
        this.currentStep = 2;
        this.addBot(`Got it — <strong>${text}</strong>! 👍${name ? ` Great choice, <strong>${name}</strong>.` : ''}<br><br>What quantity are you looking for? <em>(e.g., 100, 500, 1000 copies)</em>`, 'quote-step');
        break;

      case 2:
        this.leadData.quantity = text;
        this.currentStep = 3;
        this.addBot(`<strong>${text} copies</strong> noted! 📊<br><br>What size or specifications do you need? <em>(e.g., A4, A5, custom size, paper type, single/double sided)</em>`, 'quote-step');
        break;

      case 3:
        this.leadData.specs = text;
        this.currentStep = 4;
        this.addBot(`Specifications noted. When do you need the order ready by? <em>(your deadline or expected delivery date)</em>`, 'quote-step');
        break;

      case 4: {
        // Prevent common paper sizes from being accepted as a deadline
        if (matchesAny(text.toLowerCase(), ['a4', 'a5', 'a3', 'letter', 'legal'])) {
          this.addBot(`It looks like you entered a paper size (<strong>${text}</strong>). Could you tell me the <strong>date or timeframe</strong> you need this order completed by instead? 📅`, 'quote-step');
          return; // Stay on step 4
        }

        // Resolve relative date terms to real dates from the system clock
        const resolvedDeadline = resolveDeadline(text);
        this.leadData.deadline = resolvedDeadline;
        this.currentStep = 5;
        const deadlineMsg = resolvedDeadline !== text
          ? `Got it — delivery by <strong>${resolvedDeadline}</strong>. 📅`
          : `Deadline noted: <strong>${resolvedDeadline}</strong>. 📅`;
        this.addBot(`${deadlineMsg}<br><br>Almost done${name ? `, <strong>${name}</strong>` : ''}! 😊 Could you share your <strong>Name and Phone Number</strong> so our team can send you the formal quotation?`, 'quote-step');
        break;
      }

      case 5:
        // If we already know the name, use it
        if (this.memory.name && text.trim().length < 5) {
          this.leadData.name = this.memory.name;
        } else {
          this.leadData.name = text;
          const nm = extractName(text);
          if (nm && !this.memory.name) this.memory.name = nm;
        }
        this.finishQuote();
        break;
    }
  }

  private finishQuote() {
    const rawContact = this.leadData.name || '';
    const extractedName = this.memory.name || extractName(rawContact) || '';

    // Create a display string for the contact info bullet
    const contactDisplay = rawContact;

    this.addBot(
      `✅ <strong>Enquiry captured!</strong><br><br>` +
      `• <strong>Product:</strong> ${this.leadData.product}<br>` +
      `• <strong>Quantity:</strong> ${this.leadData.quantity}<br>` +
      `• <strong>Specifications:</strong> ${this.leadData.specs}<br>` +
      `• <strong>Deadline:</strong> ${this.leadData.deadline}<br>` +
      `• <strong>Name / Contact:</strong> ${contactDisplay}`,
      'quote-done'
    );
    this.addBot(
      `${extractedName ? `Thank you, <strong>${extractedName}</strong>! ` : 'Thank you! '}Our sales executive will contact you shortly with competitive pricing.<br><br>📞 <strong>${KB.company.phone}</strong>`,
      'quote-done'
    );

    // Add context to WhatsApp pre-filled text
    const waText = `Hi! I just submitted an enquiry for ${this.leadData.product || 'printing'}.\n\n` +
      `Product: ${this.leadData.product}\n` +
      `Quantity: ${this.leadData.quantity}\n` +
      `Specs: ${this.leadData.specs}\n` +
      `Deadline: ${this.leadData.deadline}\n` +
      `Contact: ${contactDisplay}`;

    this.addBot(
      `<a href="https://wa.me/${KB.company.whatsapp}?text=${encodeURIComponent(waText)}" target="_blank" class="cta-button" style="display:inline-block; margin-top:10px; text-decoration:none;">💬 Follow up on WhatsApp →</a>`,
      'quote-done'
    );

    // Send email via FormSubmit AJAX API silently in background
    const emailBody = {
      _subject: `New Printing Enquiry: ${this.leadData.product || 'General'}`,
      Product: this.leadData.product,
      Quantity: this.leadData.quantity,
      Specifications: this.leadData.specs,
      Deadline: this.leadData.deadline,
      Name_and_Contact: contactDisplay,
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
    }, 900);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  new Chatbot();
});
