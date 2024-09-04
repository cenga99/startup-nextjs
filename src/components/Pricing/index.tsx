import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Unsere Digitalisierungspakete"
          paragraph="Maßgeschneiderte Digitalisierungslösungen für Ihr Unternehmen – wählen Sie das passende Paket für Ihre Bedürfnisse."
          center
          width="665px"
        />
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Digitaler Start"
            price={1500}
            subtitle="Idealer Einstieg in die digitale Transformation."
          >
            <OfferList text="Einrichtung eines NAS-Systems für zentralisierte Datenspeicherung" status="active" />
            <OfferList text="Installation und Konfiguration von Paperless-ngx für digitale Dokumentenverwaltung" status="active" />
            <OfferList text="Grundlegende Mitarbeiterschulung (2 Stunden)" status="active" />
            <OfferList text="30 Tage E-Mail-Support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Digitale Effizienz"
            price={3000}
            subtitle="Erweiterte Funktionen für fortgeschrittene Digitalisierung."
          >
            <OfferList text="Alles aus dem Basis-Paket" status="active" />
            <OfferList text="Implementierung eines digitalen Workflow-Systems" status="active" />
            <OfferList text="Einrichtung von automatisierten Backups" status="active" />
            <OfferList text="Erweiterte Schulung für Mitarbeiter (4 Stunden)" status="active" />
            <OfferList text="60 Tage E-Mail- und Telefon-Support" status="active" />
            <OfferList text="Monatlicher Check-up und Optimierung (3 Monate)" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Digitale Transformation"
            price={7000}
            subtitle="Umfassende Digitalisierungslösung für Ihr gesamtes Unternehmen."
          >
            <OfferList text="Alles aus dem Fortgeschrittenen Paket" status="active" />
            <OfferList text="Individuelle Anpassung der Dokumentenmanagement-Lösung" status="active" />
            <OfferList text="Integration mit bestehenden Systemen (z.B. CRM, ERP)" status="active" />
            <OfferList text="Entwicklung einer maßgeschneiderten Digitalisierungsstrategie" status="active" />
            <OfferList text="E-Mail-Support" status="active" />
            <OfferList text="Umfassende Schulung für Mitarbeiter und Führungskräfte (8 Stunden)" status="active" />
            <OfferList text="6 Monate prioritärer Support (E-Mail, Telefon, Remote-Zugriff)" status="active" />
            <OfferList text="Vierteljährliche Überprüfung und Optimierung (1 Jahr)" status="active" />
          </PricingBox>
        </div>
      </div>

      {/* SVG-Hintergrund hier... */}
    </section>
  );
};

export default Pricing;