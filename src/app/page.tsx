"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import PricingCardEight from "@/components/sections/pricing/PricingCardEight";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { CheckCircle, Clock, Handshake, Heart, Leaf, MapPin, MessageSquare, Quote, Smile, Star, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="large"
      background="circleGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="ENS Resto"
          navItems={[
            { name: "Accueil", id: "hero" },
            { name: "Pourquoi Nous", id: "features" },
            { name: "Tarifs & Horaires", id: "pricing" },
            { name: "Avis", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Votre pause déjeuner de qualité au cœur de l'ENS Lyon"
          description="Repas frais et diversifiés dans un cadre calme et verdoyant. Repas abordables de 1 à 10€ pour les étudiants et le personnel."
          tag="Restaurant Universitaire"
          tagIcon={Utensils}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/students-studying-indoors-full-shot_23-2149647035.jpg"
          imageAlt="Restaurant universitaire ENS Lyon - salle de restauration"
          mediaAnimation="slide-up"
          testimonials={[
            {
              name: "Emma Leclerc",              handle: "Étudiante, ENS Lyon",              testimonial: "Meilleurs repas de l'université! Équipe accueillante et portions généreuses.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-man_1268-21877.jpg"
            },
            {
              name: "Marc Dubois",              handle: "Chercheur, ENS",              testimonial: "Qualité exceptionnelle pour le prix. Je recommande vivement!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg"
            },
            {
              name: "Sophie Martin",              handle: "Étudiante Master",              testimonial: "Cadre paisible, nourriture saine. L'endroit idéal pour déjeuner.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg"
            }
          ]}
          testimonialRotationInterval={5000}
          buttons={[
            { text: "📞 Appeler maintenant", href: "tel:+33478754321" },
            { text: "📝 Nous contacter", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
          background={{ variant: "glowing-orb" }}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Note: 4.9/5 ⭐ de nos clients"
          description="Confiance et satisfaction de la communauté ENS"
          tag="Avis Clients"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          names={["14 avis positifs", "Recommandé par les étudiants", "Meilleur restaurant universitaire", "Équipe 5 étoiles", "Qualité garantie"]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBento
          title="Pourquoi choisir notre restaurant?"
          description="Une expérience culinaire pensée pour vous dans un cadre exceptionnel."
          tag="Nos avantages"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              title: "Repas frais quotidiens",              description: "Menu équilibré et diversifié, préparé chaque jour avec des ingrédients de qualité.",              bentoComponent: "globe"
            },
            {
              title: "Prix accessibles",              description: "Repas complets de 1 à 10€ - Le meilleur rapport qualité/prix de Lyon.",              bentoComponent: "animated-bar-chart"
            },
            {
              title: "Ambiance calme",              description: "Cadre verdoyant et paisible, loin de la foule - une pause déjeuner relaxante.",              bentoComponent: "marquee",              centerIcon: Leaf,
              variant: "text",              texts: ["Environnement tranquille", "Lumière naturelle", "Décoration apaisante"]
            },
            {
              title: "Équipe accueillante",              description: "Personnel bienveillant et disponible pour répondre à tous vos besoins.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Smile, label: "Service", value: "Convivial" },
                { icon: Handshake, label: "Accueil", value: "Chaleureux" },
                { icon: Heart, label: "Attention", value: "Personnalisée" }
              ]
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardEight
          title="Tarifs & Horaires"
          description="Accès facile avec des tarifs pensés pour la communauté ENS."
          tag="Informations Pratiques"
          tagIcon={Clock}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          plans={[
            {
              id: "repas-complet",              badge: "Formule Complète",              badgeIcon: Utensils,
              price: "1€ - 10€",              subtitle: "Selon la composition du repas",              buttons: [{ text: "Appeler pour détails", href: "tel:+33478754321" }],
              features: ["Entrée + Plat principal + Dessert", "Boisson incluse", "Menu varié quotidien", "Alternatives végétariennes", "Repas sur place ou emporté"]
            },
            {
              id: "horaires-acces",              badge: "Horaires d'Ouverture",              badgeIcon: MapPin,
              price: "Lundi - Vendredi",              subtitle: "11h30 - 14h30",              buttons: [{ text: "Localiser", href: "#location" }],
              features: ["Situé à l'ENS Lyon - Site René Descartes", "23 Allée de Fontenay, 69007 Lyon", "Accès direct au campus", "Facile à trouver", "Près des salles de cours"]
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="location" data-section="location">
        <MetricCardEleven
          title="Nous trouver"
          description="Localisé au cœur de l'ENS Lyon, facile d'accès pour tous."
          tag="Localisation"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "address",              value: "23 Allée",              title: "Adresse",              description: "Fontenay, 69007 Lyon - ENS Site René Descartes",              imageSrc: "http://img.b2bpic.net/free-photo/students-studying-sunny-day_23-2147850716.jpg?_wi=1",              imageAlt: "Campus ENS Lyon - vue extérieure"
            },
            {
              id: "access",              value: "100%",              title: "Accessibilité",              description: "Entrée directe depuis le campus ENS - Accès facile pour tous",              imageSrc: "http://img.b2bpic.net/free-vector/coloured-business-card-design_1043-322.jpg",              imageAlt: "Carte et indication d'accès"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Ce que disent nos clients"
          description="Les avis authentiques des étudiants et personnels de l'ENS."
          tag="Avis"
          tagIcon={Quote}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",              name: "Emma Leclerc, Étudiante Master",              date: "Date: 15 January 2025",              title: "Un lieu de pause incontournable",              quote: "J'y vais presque chaque jour. La qualité des repas est exceptionnelle pour le prix, et l'ambiance est tellement plus calme que les autres restaurants universitaires. L'équipe est vraiment bienveillante et se souvient même de nos préférences!",              tag: "Étudiante",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-man_1268-21877.jpg",              avatarAlt: "Emma Leclerc",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-healthy-dish-with-wooden-background_23-2148381275.jpg?_wi=1",              imageAlt: "Assiette de repas de qualité"
            },
            {
              id: "2",              name: "Marc Dubois, Chercheur ENS",              date: "Date: 20 December 2024",              title: "Meilleur restaurant du campus",              quote: "Après 5 ans d'ENS, c'est clairement le meilleur restaurant universitaire que j'ai connu. Les repas sont bien équilibrés, pas trop chers, et le cadre verdoyant permet de vraiment décompresser à midi.",              tag: "Chercheur",              avatarSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg",              avatarAlt: "Marc Dubois",              imageSrc: "http://img.b2bpic.net/free-photo/students-studying-sunny-day_23-2147850716.jpg?_wi=2",              imageAlt: "Vue calme du restaurant"
            },
            {
              id: "3",              name: "Sophie Martin, Étudiante ENS",              date: "Date: 10 December 2024",              title: "L'endroit parfait pour déjeuner",              quote: "Environnement magnifique, menu diversifié, et surtout une équipe qui écoute les demandes spéciales. C'est plus qu'une cantine, c'est vraiment un restaurant universitaire de qualité.",              tag: "Étudiante",              avatarSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",              avatarAlt: "Sophie Martin",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-healthy-dish-with-wooden-background_23-2148381275.jpg?_wi=2",              imageAlt: "Repas bien présenté"
            },
            {
              id: "4",              name: "Thomas Alves, Staff ENS",              date: "Date: 5 December 2024",              title: "Qualité et accueil au rendez-vous",              quote: "Les repas offrent un excellent rapport qualité-prix. L'accueil du personnel est chaleureux et la qualité des ingrédients est perceptible. Je recommande vivement ce restaurant à tous les membres de l'ENS!",              tag: "Personnel",              avatarSrc: "http://img.b2bpic.net/free-photo/happy-cheerful-student-guy-standing-pale-outdoor-wall_74855-4289.jpg",              avatarAlt: "Thomas Alves",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-healthy-dish-with-wooden-background_23-2148381275.jpg?_wi=3",              imageAlt: "Plate avec diverses options"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Questions Fréquentes"
          sideDescription="Tout ce que vous devez savoir sur notre restaurant universitaire."
          textPosition="left"
          faqsAnimation="slide-up"
          useInvertedBackground={false}
          faqs={[
            {
              id: "1",              title: "Quels sont les horaires d'ouverture?",              content: "Nous sommes ouverts du lundi au vendredi, de 11h30 à 14h30. Fermé les weekends et jours fériés."
            },
            {
              id: "2",              title: "Quel est le prix des repas?",              content: "Les repas complets coûtent entre 1€ et 10€ selon la composition. Nous proposons des tarifs réduits pour les étudiants ENS."
            },
            {
              id: "3",              title: "Y a-t-il des options végétariennes?",              content: "Oui! Nous proposons chaque jour des alternatives végétariennes et vegan. N'hésitez pas à nous les demander."
            },
            {
              id: "4",              title: "Puis-je réserver une table pour un groupe?",              content: "Oui, nous acceptons les réservations pour les groupes. Appelez-nous au 04 78 75 43 21 ou remplissez notre formulaire de contact."
            },
            {
              id: "5",              title: "Proposez-vous des services de catering?",              content: "Oui, nous proposons des services de catering pour les événements et réunions. Contactez-nous pour discuter de vos besoins spécifiques."
            },
            {
              id: "6",              title: "Comment puis-je vous contacter?",              content: "Vous pouvez nous appeler au 04 78 75 43 21, nous envoyer un email à contact@ens-resto.fr, ou remplir le formulaire de contact sur notre site."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Nous contacter"
          title="Organisez votre pause déjeuner dès maintenant"
          description="Que ce soit pour une question, une réservation de groupe, ou un partenariat, nous sommes à votre écoute. Appelez-nous ou remplissez le formulaire ci-dessous."
          tagIcon={MessageSquare}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Votre adresse email"
          buttonText="M'aider"
          termsText="En cliquant, vous consentez à être contacté par notre équipe. Nous respectons votre confidentialité."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="ENS Resto"
          leftLink={{ text: "Conditions d'utilisation", href: "#" }}
          rightLink={{ text: "Politique de confidentialité", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
