import React from 'react'

import './Acceuil.css'
import Navebar from '../../component/Navebar/Navebar'
import Facebook from '../../component/Facebook/Facebook'


const Acceuil = () => {
  return (
    <div>
        <Navebar />
        <div style={{marginTop:"112px"}}><Facebook/></div>

        <section className='sec1-main'>
            <h1 className='phrasebackground'>
            Notre passion pour une agriculture durable et la préservation 
            de la terre nourricière nous guide vers des produits de haute qualité pour les générations présentes et futures

            </h1>

        </section>

        <section className='sec2-main'>
            <div className='sec2-intro'>
            <div className='sec2-intro-text'>
            <h1 className='apropos'>
             A propos de nous
            </h1>
            <p>
            Fondée en 2011, notre entreprise est fière d'être un acteur de confiance dans le domaine des accessoires et équipements hydrauliques,
             ainsi que dans la prestation de services agricoles de qualité supérieure. 
             Basée à Sfax, en Tunisie, notre société a établi une solide réputation grâce à notre engagement envers l'excellence 
             et notre passion pour l'agriculture durable. Nos clients, qu'ils soient des agriculteurs expérimentés ou de nouveaux acteurs du secteur,
              ont bénéficié de nos produits de pointe, de notre expertise en matière d'études hydrauliques, 
              et de notre assistance agronomique personnalisée. Avec des succursales stratégiquement situées à Regueb et Moknine,
               nous sommes en mesure de servir nos clients à travers la région avec efficacité et réactivité. 
               Chez <strong style={{color:"red" , fontSize:"20px"}}>Espace Bio Eco</strong>,
                notre objectif est de soutenir le succès de l'agriculture moderne en fournissant 
            des solutions hydrauliques fiables et des services de pointe pour répondre aux besoins en constante évolution de notre clientèle.
    
            </p>
            </div>
            <div className='sec2-intro-img'>
                <img src='/images/succersale.jfif' alt=' ' />
            </div>
            </div>

            <div className='sec2-intro'>
            <div className='sec2-intro-img'>
                <img src='/images/succersale.jfif' alt=' ' />
            </div>
            <div className='sec2-intro-text'>
            <h1 className='apropos'>
             Ou sommes nous ?
            </h1>
            <p>
            Notre présence s'étend à travers le territoire tunisien pour mieux répondre aux besoins diversifiés de nos clients. 
            Notre siège principal est idéalement situé à <strong>Route Gremda, Kilomètre 8.5, à Sfax</strong>, où nous nous sommes spécialisés
             dans le domaine du jardinage, offrant une large gamme d'accessoires et d'équipements pour les passionnés de l'horticulture.
              De plus, notre succursale à <strong>Route Matar,  Kilomètre 10 , à Sfax</strong>, se concentre sur 
              l'irrigation et l'exécution de projets goutte à goutte, 
            apportant des solutions efficaces pour l'optimisation de l'eau dans l'agriculture.

Nous sommes également présents à <strong>Regueb, Sidi Bouzid</strong>, où notre succursale est dédiée à la vente de produits agricoles de qualité, 
soutenant les agriculteurs locaux dans leurs activités. Enfin, à <strong>Moknine, Monastir</strong>, notre succursale se spécialise dans la vente de tracteurs
 de pointe, accompagnés de pièces de rechange d'origine, pour répondre aux besoins de mécanisation de l'agriculture moderne.
  Chez <strong style={{color:"red" , fontSize:"20px"}}>Espace Bio Eco</strong>, notre réseau de localisations s'étend pour mieux vous servir,
   où que vous soyez dans la région.
    
            </p>
            </div>
          
            </div>


            <div className='sec2-intro'>
            <div className='sec2-intro-text'>
            <h1 className='apropos'>
             A propos de nous
            </h1>
            <p>
            Fondée en 2011, notre entreprise est fière d'être un acteur de confiance dans le domaine des accessoires et équipements hydrauliques,
             ainsi que dans la prestation de services agricoles de qualité supérieure. 
             Basée à Sfax, en Tunisie, notre société a établi une solide réputation grâce à notre engagement envers l'excellence 
             et notre passion pour l'agriculture durable. Nos clients, qu'ils soient des agriculteurs expérimentés ou de nouveaux acteurs du secteur,
              ont bénéficié de nos produits de pointe, de notre expertise en matière d'études hydrauliques, 
              et de notre assistance agronomique personnalisée. Avec des succursales stratégiquement situées à Regueb et Moknine,
               nous sommes en mesure de servir nos clients à travers la région avec efficacité et réactivité. 
               Chez <strong style={{color:"red" , fontSize:"20px"}}>Espace Bio Eco</strong>,
                notre objectif est de soutenir le succès de l'agriculture moderne en fournissant 
            des solutions hydrauliques fiables et des services de pointe pour répondre aux besoins en constante évolution de notre clientèle.
    
            </p>
            </div>
            <div className='sec2-intro-img'>
                <img src='/images/succersale.jfif' alt=' ' />
            </div>
            </div>
        </section>




    </div>
  )
}

export default Acceuil