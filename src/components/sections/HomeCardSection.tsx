import React from 'react'
import HomeCard from '../cards/HomeCard'
import HomeCardItem from '../cards/HomeCardItem'

export default function HomeCardSections() {
  return (
    <section className="section  flex flex-col items-center gap-8 " id="services">
      <h2>Services</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
        <HomeCard
          title="Chaudières"
          src="/images/services/chaudiere_homepage.jpg"
          alt="Chaudières"
          link="/chaudieres"
        >
          <HomeCardItem
            text="Installation particuliers ou professionels."
            src="/icons/gear.svg"
            alt="Icone installation chaudières"
          />
          <HomeCardItem
            text="Entretien annuel pour une meilleure durée de vie."
            src="/icons/tool-plumbing.svg"
            alt="Icone entretien chaudières"
          />
          <HomeCardItem
            text="Remplacement de votre ancienne chaudière."
            src="/icons/maintenance.svg"
            alt="Icone remplacement chaudières"
          />
          <HomeCardItem
            text="Conseils personnalisés pour choisir le modèle idéal."
            src="/icons/help.svg"
            alt="Icone conseils chaudières"
          />
        </HomeCard>

        <HomeCard
          title="Pompes à chaleur"
          src="/images/services/pac_homepage.jpg"
          alt="Pompes à chaleur"
          link="/pompes-a-chaleur"
        >
          <HomeCardItem
            text="Une solutions écologique pour chauffer votre maison."
            src="/icons/leaf.svg"
            alt="Icone pompes à chaleur"
          />
          <HomeCardItem
            text="Installation de pompes à chaleur air-eau et géothermiques."
            src="/icons/heat-pump.svg"
            alt="Icone installation pompes à chaleur"
          />
          <HomeCardItem
            text="Entretien complet pour un fonctionnement optimal."
            src="/icons/tool-plumbing.svg"
            alt="Icone entretien pompes à chaleur"
          />
          <HomeCardItem
            text="Accompagnement pour les Aides financières disponibles."
            src="/icons/euro.svg"
            alt="Icone accompagnement pompes à chaleur"
          />
        </HomeCard>

        <HomeCard
          title="Climatisation"
          src="/images/services/clim_homepage.jpg"
          alt="Climatisation"
          link="/climatisation"
        >
          <HomeCardItem
            text="Installation de systèmes de climatisation sur mesure."
            src="/icons/gear.svg"
            alt="Icone installation climatisation"
          />
          <HomeCardItem
            text="Réglage variables pour un confort toute l'année."
            src="/icons/snow.svg"
            alt="Icone réglages climatisation"
          />
          <HomeCardItem
            text="Maintenance régulière pour une durée de vie optimale."
            src="/icons/tool-plumbing.svg"
            alt="Icone maintenance climatisation"
          />
          <HomeCardItem
            text="Solutions éco-énergétiques pour réduire vos coûts."
            src="/icons/leaf.svg"
            alt="Icone solutions climatisation"
          />
        </HomeCard>

        <HomeCard
          title="Plomberie"
          src="/images/services/plomberie_homepage.jpg"
          alt="Plomberie"
          link="/plomberie"
        >
          <HomeCardItem
            text="Dépannage rapide pour vos urgences de plomberie."
            src="/icons/tools.svg"
            alt="Icone dépannage plomberie"
          />
          <HomeCardItem
            text="Travaux salles de bain et cuisines."
            src="/icons/sink.svg"
            alt="Icone travaux plomberie"
          />
          <HomeCardItem
            text="Entretien et rénovation de votre installation."
            src="/icons/maintenance.svg"
            alt="Icone entretien plomberie"
          />
          <HomeCardItem
            text="Conseils d'experts pour vos projets de rénovation."
            src="/icons/question.svg"
            alt="Icone conseils plomberie"
          />
        </HomeCard>

       
      </div>
    </section>
  )
}
