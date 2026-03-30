import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, ExternalLink, MessageCircle, Mail, Phone, Clock, CheckCircle, Zap, Shield, Smartphone } from 'lucide-react';

/* ============================================
   DATOS DE LOS DEMOS
   ============================================ */
const DEMOS = [
  {
    id: 'barber',
    name: 'Barbero',
    industry: 'Barbería',
    description: 'Reserva de citas con asistente IA que responde llamadas, transcribe y agenda automáticamente.',
    subdomain: 'barber',
    screenshot: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80',
    accentColor: '#f2c35b',
  },
  {
    id: 'beautyhair',
    name: 'Beauty Hair',
    industry: 'Peluquería',
    description: 'Gestión inteligente de citas para salón de belleza con recordatorios automáticos por WhatsApp.',
    subdomain: 'beautyhair',
    screenshot: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    accentColor: '#e879a9',
  },
  {
    id: 'besthair',
    name: 'Best Hair',
    industry: 'Peluquería Premium',
    description: 'Sistema de reservas premium con panel de administración y gestión de clientes.',
    subdomain: 'besthair',
    screenshot: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    accentColor: '#a78bfa',
  },
  {
    id: 'estetica',
    name: 'Centro Estética',
    industry: 'Estética y Bienestar',
    description: 'Automatización completa de agenda para centros de estética con múltiples profesionales.',
    subdomain: 'estetica',
    screenshot: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    accentColor: '#34d399',
  },
  {
    id: 'restaurante',
    name: 'Restaurante',
    industry: 'Hostelería',
    description: 'Reservas y gestión de mesas con asistente IA que confirma citas y envía recordatorios.',
    subdomain: 'restaurante',
    screenshot: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    accentColor: '#fb923c',
  },
];

/* ============================================
   WHATSAPP DE ANTONIO
   ============================================ */
const WHATSAPP_URL = 'https://wa.me/34637070994';

/* ============================================
   NAVBAR
   ============================================ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 gold-gradient rounded-lg flex items-center justify-center">
            <span className="text-text-inverse font-bold serif-headline text-lg">W</span>
          </div>
          <span className="text-xl serif-headline text-accent font-bold tracking-tight">WEEDEX</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#demos" className="text-text-secondary hover:text-accent transition-colors text-sm label-text">Demos</a>
          <a href="#caracteristicas" className="text-text-secondary hover:text-accent transition-colors text-sm label-text">Características</a>
          <a href="#precios" className="text-text-secondary hover:text-accent transition-colors text-sm label-text">Precios</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <button className="bg-accent text-text-inverse px-5 py-2.5 label-text text-[10px] font-bold tracking-widest hover:brightness-110 transition-all">
              HABLAR CON ANTONIO
            </button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-accent"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/30 px-6 py-6 space-y-4 animate-fade-in-up">
          <a href="#demos" onClick={() => setMobileOpen(false)} className="block text-text-secondary hover:text-accent label-text text-xs py-2">Demos</a>
          <a href="#caracteristicas" onClick={() => setMobileOpen(false)} className="block text-text-secondary hover:text-accent label-text text-xs py-2">Características</a>
          <a href="#precios" onClick={() => setMobileOpen(false)} className="block text-text-secondary hover:text-accent label-text text-xs py-2">Precios</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <button className="bg-accent text-text-inverse w-full px-5 py-3 label-text text-[10px] font-bold tracking-widest">
              HABLAR CON ANTONIO
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}

/* ============================================
   HERO SECTION
   ============================================ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10" />
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80"
          alt="AI Technology Background"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-accent label-text text-[10px] tracking-widest">ASISTENTES IA EN PRODUCCIÓN</span>
        </div>

        {/* Headline */}
        <h1 className="serif-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Asistentes AI para
          <br />
          <span className="text-accent italic">tu negocio</span>
        </h1>

        <p className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Transforma tu negocio con asistentes telefónicos IA que responden llamadas, transcriben conversaciones y gestionan citas automáticamente — 24/7.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <button className="bg-accent text-text-inverse px-8 py-4 label-text font-bold text-[10px] tracking-widest hover:brightness-110 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              <MessageCircle className="w-4 h-4" />
              PEDIR DEMO GRATIS
            </button>
          </a>
          <a href="#demos">
            <button className="border border-accent/30 text-accent px-8 py-4 label-text text-[10px] tracking-widest hover:bg-accent/10 transition-all w-full sm:w-auto">
              VER DEMOS
            </button>
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-text-muted text-xs animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>5 demos en producción</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>Sin código de instalación</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>Deploy en 24h</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronLeft className="w-6 h-6 text-accent rotate-270" />
      </div>
    </section>
  );
}

/* ============================================
   DEMO CARD
   ============================================ */
function DemoCard({ demo, isActive }: { demo: typeof DEMOS[0]; isActive: boolean }) {
  const demoUrl = `https://${demo.subdomain}.weedex.es`;

  return (
    <div className={`flex-shrink-0 w-full md:w-[480px] transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'}`}>
      <div className="bg-background-card rounded-2xl overflow-hidden border border-border/30 hover:border-accent/30 transition-all">
        {/* Screenshot */}
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-lowest">
          <img
            src={demo.screenshot}
            alt={`Demo ${demo.name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Overlay badge */}
          <div
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-[9px] label-text font-bold tracking-widest"
            style={{ backgroundColor: `${demo.accentColor}22`, color: demo.accentColor, border: `1px solid ${demo.accentColor}44` }}
          >
            {demo.industry}
          </div>
          {/* Demo URL badge */}
          <div className="absolute bottom-3 right-3 glass rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[9px] text-text-secondary label-text">{demo.subdomain}.weedex.es</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="serif-headline text-lg text-text-primary">{demo.name}</h3>
              <p className="text-text-muted text-xs mt-0.5">{demo.industry}</p>
            </div>
          </div>
          <p className="text-text-secondary text-sm font-light mb-4 leading-relaxed">{demo.description}</p>

          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <button
              className="w-full py-2.5 rounded-xl label-text text-[10px] font-bold tracking-widest flex items-center justify-center gap-2 transition-all hover:brightness-110"
              style={{ backgroundColor: `${demo.accentColor}22`, color: demo.accentColor, border: `1px solid ${demo.accentColor}44` }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              VISITAR DEMO
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   DEMOS CAROUSEL
   ============================================ */
function DemosCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + DEMOS.length) % DEMOS.length);
  }, []);

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % DEMOS.length);
  }, []);

  // Auto-advance every 5s
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="demos" className="py-20 md:py-32 px-6 bg-surface-lowest">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent label-text text-xs mb-4 tracking-widest">CASOS DE ÉXITO</p>
          <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl text-text-primary mb-4">
            Demos en producción
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto font-light">
            Cada demo es un negocio real funcionando con nuestro sistema de asistente IA.
            Haz clic para ver el demo completo.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards */}
          <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden py-4">
            {DEMOS.map((demo) => {
              const isActive = demo.id === DEMOS[current].id;
              return (
                <div
                  key={demo.id}
                  className={`transition-all duration-500 ${isActive ? 'scale-100 z-10' : 'scale-90 opacity-50 z-0 hidden md:block'}`}
                >
                  <DemoCard demo={demo} isActive={isActive} />
                </div>
              );
            })}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background-card border border-border/30 flex items-center justify-center text-accent hover:border-accent/50 transition-all z-20"
            aria-label="Demo anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background-card border border-border/30 flex items-center justify-center text-accent hover:border-accent/50 transition-all z-20"
            aria-label="Siguiente demo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {DEMOS.map((demo, i) => (
            <button
              key={demo.id}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-border-hover'}`}
              aria-label={`Ir a ${demo.name}`}
            />
          ))}
        </div>

        {/* All demos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-12">
          {DEMOS.map((demo) => (
            <a
              key={demo.id}
              href={`https://${demo.subdomain}.weedex.es`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 bg-background-card rounded-xl border border-border/30 hover:border-accent/30 transition-all text-center group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-text-primary text-sm font-bold"
                style={{ backgroundColor: `${demo.accentColor}22`, color: demo.accentColor }}
              >
                {demo.name[0]}
              </div>
              <span className="text-text-secondary text-xs group-hover:text-accent transition-colors">{demo.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   AI FEATURES SECTION
   ============================================ */
const FEATURES = [
  {
    icon: Phone,
    title: 'Responde llamadas 24/7',
    desc: 'Tu asistente IA responde automáticamente incluso fuera de horario. Nunca pierdes una cita.',
  },
  {
    icon: MessageCircle,
    title: 'Transcribe cada llamada',
    desc: 'Todas las conversaciones se transcriben automáticamente. Revisa cualquier detalle en segundos.',
  },
  {
    icon: Clock,
    title: 'Agenda citas sin fricción',
    desc: 'El cliente dice "quiero cita mañana" y el asistente lo gestiona. Sin apps, sin formularios.',
  },
  {
    icon: Smartphone,
    title: 'Notificaciones WhatsApp',
    desc: 'Recordatorios automáticos a tus clientes por WhatsApp. Reduce ausencias hasta un 60%.',
  },
  {
    icon: Shield,
    title: 'Datos seguros y GDPR',
    desc: 'Transcripciones y datos de clientes encriptados. Cumplimiento GDPR garantizado.',
  },
  {
    icon: Zap,
    title: 'Deploy en 24 horas',
    desc: 'No necesitas código ni instalaciones. Conectamos tu línea y en 24h estás funcionando.',
  },
];

function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent label-text text-xs mb-4 tracking-widest">TECNOLOGÍA</p>
          <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl text-text-primary mb-4">
            Así funciona
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto font-light">
            Un asistente telefónico IA que trabaja para tu negocio mientras tú te dedicas a lo importante.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-background-card rounded-2xl p-6 border border-border/30 hover:border-accent/20 transition-all group">
              <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-text-inverse" />
              </div>
              <h3 className="serif-headline text-lg text-text-primary mb-2">{f.title}</h3>
              <p className="text-text-secondary text-sm font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   CHAT MOCKUP SECTION
   ============================================ */
function ChatMockupSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-surface-lowest">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div>
          <p className="text-accent label-text text-xs mb-4 tracking-widest">EN ACCIÓN</p>
          <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6 leading-tight">
            Tu cliente llama,
            <br />
            <span className="text-accent italic">el asistente responde</span>
          </h2>
          <p className="text-text-secondary text-base font-light mb-8 leading-relaxed">
            El asistente IA responde la llamada, transcribe la conversación en tiempo real, detecta la intención del cliente y gestiona la cita automáticamente — sin intervención humana.
          </p>
          <ul className="space-y-4">
            {[
              'IA responde: "Buenos días, ¿en qué le puedo ayudar?"',
              'Cliente: "Quiero cita para corte mañana por la mañana"',
              'IA confirma disponibilidad y agenda directamente',
              'Cliente recibe confirmación por WhatsApp al instante',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Chat mockup */}
        <div className="bg-background-card rounded-2xl overflow-hidden border border-border/30 shadow-2xl max-w-md mx-auto">
          {/* Header */}
          <div className="bg-background-elevated px-5 py-4 flex items-center gap-3 border-b border-border/20">
            <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center">
              <span className="text-text-inverse font-bold serif-headline text-sm">W</span>
            </div>
            <div>
              <p className="text-text-primary text-sm font-medium">Asistente Weedex</p>
              <p className="text-green-400 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse inline-block" />
                En línea
              </p>
            </div>
          </div>

          {/* Chat messages */}
          <div className="p-5 space-y-3 min-h-[320px]">
            {/* AI */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-accent text-[8px] font-bold">AI</span>
              </div>
              <div className="bg-background-elevated rounded-xl rounded-tl-none px-4 py-3 max-w-[80%]">
                <p className="text-text-primary text-xs">Buenos días, le atiende el asistente automático de Barbería El Atelier. ¿En qué puedo ayudarle?</p>
              </div>
            </div>

            {/* Customer */}
            <div className="flex items-start gap-2 justify-end">
              <div className="bg-accent/10 border border-accent/20 rounded-xl rounded-tr-none px-4 py-3 max-w-[80%]">
                <p className="text-accent text-xs">Hola, quiero pedir cita para un corte... ¿tenéis algo para mañana por la mañana?</p>
              </div>
            </div>

            {/* AI */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-accent text-[8px] font-bold">AI</span>
              </div>
              <div className="bg-background-elevated rounded-xl rounded-tl-none px-4 py-3 max-w-[80%]">
                <p className="text-text-primary text-xs">Sí, tenemos disponible mañana a las 10:30 con Marcos. ¿Le viene bien?</p>
              </div>
            </div>

            {/* Customer */}
            <div className="flex items-start gap-2 justify-end">
              <div className="bg-accent/10 border border-accent/20 rounded-xl rounded-tr-none px-4 py-3 max-w-[80%]">
                <p className="text-accent text-xs">Perfecto, dame esa hora.</p>
              </div>
            </div>

            {/* AI confirming */}
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-accent text-[8px] font-bold">AI</span>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl rounded-tl-none px-4 py-3 max-w-[80%]">
                <p className="text-green-400 text-xs font-medium">✅ Cita confirmada: Mañana 10:30 — Corte Clásico</p>
                <p className="text-text-muted text-[10px] mt-1">Se ha enviado recordatorio por WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   PRICING SECTION (teaser)
   ============================================ */
function PricingTeaser() {
  return (
    <section id="precios" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent label-text text-xs mb-4 tracking-widest">INVERSIÓN</p>
        <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6">
          Empieza desde <span className="text-accent italic">149€/mes</span>
        </h2>
        <p className="text-text-secondary text-base font-light mb-10 max-w-xl mx-auto">
          Sin contrato obligatorio, sin permanencia. Incluye asistente IA, transcripciones, интеграция WhatsApp y soporte técnico. Pago mensual, cancela cuando quieras.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <button className="bg-accent text-text-inverse px-10 py-4 label-text font-bold text-[10px] tracking-widest hover:brightness-110 transition-all inline-flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            PEDIR DEMO PERSONALIZADA
          </button>
        </a>
        <p className="text-text-muted text-xs mt-4">Respuesta en menos de 2 horas</p>
      </div>
    </section>
  );
}

/* ============================================
   CTA SECTION
   ============================================ */
function CTASection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-surface-lowest border-t border-border/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-8 rounded-full gold-gradient flex items-center justify-center">
          <span className="text-text-inverse serif-headline text-2xl font-bold">W</span>
        </div>
        <h2 className="serif-headline text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6">
          ¿Hablamos?
        </h2>
        <p className="text-text-secondary text-lg font-light mb-10 max-w-2xl mx-auto">
          Antonio puede mostrarte una demo personalizada funcionando con tu tipo de negocio en menos de 30 minutos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 label-text font-bold text-[10px] tracking-widest transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              <MessageCircle className="w-4 h-4" />
              WHATSAPP DE ANTONIO
            </button>
          </a>
          <a href="mailto:forja@weedex.es">
            <button className="border border-accent/30 text-accent px-8 py-4 label-text text-[10px] tracking-widest hover:bg-accent/10 transition-all w-full sm:w-auto">
              <Mail className="w-4 h-4 inline mr-2" />
              ESCRIBIR EMAIL
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   FOOTER
   ============================================ */
function Footer() {
  return (
    <footer className="bg-background border-t border-border/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
              <span className="text-text-inverse font-bold serif-headline text-sm">W</span>
            </div>
            <span className="text-lg serif-headline text-accent font-bold">WEEDEX</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            <a href="#demos" className="text-text-muted hover:text-accent text-xs transition-colors">Demos</a>
            <a href="#caracteristicas" className="text-text-muted hover:text-accent text-xs transition-colors">Características</a>
            <a href="#precios" className="text-text-muted hover:text-accent text-xs transition-colors">Precios</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent text-xs transition-colors">Contacto</a>
          </div>
        </div>

        <div className="border-t border-border/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-text-muted text-[10px]">
            © {new Date().getFullYear()} Weedex Solutions. Todos los derechos reservados.
          </p>
          <p className="text-text-muted text-[10px]">
            Weedex Solutions — Soluciones de transformación digital y telecomunicacións
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================
   APP ROOT
   ============================================ */
export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <main>
        <HeroSection />
        <DemosCarousel />
        <FeaturesSection />
        <ChatMockupSection />
        <PricingTeaser />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
