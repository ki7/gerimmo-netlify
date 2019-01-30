import React from 'react';
import Layout from '../components/Layout';

function Checktitle({children}){
  return(<h3><b>✓</b><strong>&nbsp;{children}</strong></h3>)
}
export default class Proprietaires extends React.Component {
  render() {
    return (
      <Layout>
              <section className="section">
        <div className="hero hero--investisseurs"> 
        </div>
        <div className="container">
      

          <h1 className="heading">Propriétaire ! <br/>
           <span>Trouver un locataire devient notre affaire !
          </span></h1>
          <p>
           Votre bien immobilier est confié à l’agence Gerimmo Location : elle aura pour principale mission de prendre en charge la gestion de vos biens selon les conditions énoncées entre les 2 parties et qui fera l’objet d’un contrat comprenant les indications suivantes:


          </p>

          <ul>
            <li>- Recherche de locataires</li>
            <li>- Accord entre les 2 partis concernant le montant du loyer </li>
            <li>- Mise en place des publicités nécessaires à la location du bien</li>
            <li>- Sélection des locataires en fonction des critères prédéfinis et du temps impartis 	</li>
            <li>- Gestion et entretien du bien</li>
          </ul>

</div>
   </section>
   <section className="section">

        <div className="container">
<h2 className="heading">
  Vous avez des questions, nous avons les réponses !
</h2>

<Checktitle>Mon bien sera t-il bien entretenu ? </Checktitle>
Oui. L’exigence de notre clientèle nous impose un niveau de prestation et d’attention particulièrement élevées. En effet, des professionnels de l’entretien interviendront systématiquement après chaque « sortie Clients » afin de rendre les lieux irréprochables en faveur de leurs successeurs.
Nous vous garantissons un grand respect des lieux. Nous sélectionnons et recevons des clients discrets, de qualité, qui recherche un cadre et un environnement à la hauteur d’une attente notablement pointilleuse.
 



<br/>
<br/>

<Checktitle>« Les allés et venus ne me plaisent guère »</Checktitle>
Lorsque vous louez à un particulier, ce dernier reste sur les lieux plusieurs années. Il reçoit des amis, de la famille et la probabilité de dégradation est définitivement plus importante que celle d’une clientèle à court séjour.
Nos clients séjournent le temps d’un séminaire, d’un congrès, d’un évènement exceptionnel nécessitant leurs présences sur place. Ils seront donc absents de l’appartement les trois/quart du temps. En d’autres termes et pour toutes ses raisons,  ils n’occuperont le logement que pour s’y relaxer.
 
<br/>
<br/>

<Checktitle>Mon loyer sera-t-il versé tous les mois, peu importe le taux d’occupations? </Checktitle>
Oui, vos loyers sont garantis chaque mois, selon les termes du contrat signé.
 

<br/>
<br/>

<Checktitle>Je loue mon bien en  « Meublé » pour bénéficier d’un abattement fiscal avantageux, en prenant la gestion de mon logement aurai-je encore les mêmes droits?</Checktitle>
 
Oui ! Puisque votre bien est loué en « Meublé » votre régime fiscal restera inchangé!
 



<br/>
<br/>

<Checktitle>A quel moment pourrai-je récupérer mon appartement?</Checktitle>
 
Le bail expire au terme de la période prédéfinie entre les 2 partis. En général, ce dernier se maintien au moins 1 an et il est renouvelable par « tacite reconduction ». Si vous souhaitez rompre notre partenariat, un simple préavis, 3 mois avant la fin du bail en cours, suffit pour récupérer votre bien.
        
      </div>
         </section>
         <section>

      <br />
        <div className="container">
          <p>
            Pour les services de proximité, la relation humaine est indispensable. Gerimmo Location est en relation avec d’autres professionnels dans le domaine du Service. Ils ont rejoints la société car ils ont été convaincus  par ce nouveau concept. Certains interviendront à la demande pour réaliser des visites, des états des lieux. D’autres, interviendront pour effectuer des prestations de qualité comme repasser un smocking pour un gala ou encore préparer un petit repas gastronomique cuisiné par un « Chef » !
          </p>
          <br />
          <p>
            Gerimmo Location apporte une vraie plus value pour un autre cadre de vie. Cette agence est un réel  gain de temps et d’argent pour les investisseurs aguérris qui ont parfois plusieurs biens à gérer et pour des clients d’affaires très exigeants.
          </p>
          <br />
          <p>
            J’ai fondé cette société afin de solutionner ce problème et  rendre la vie aisée et beaucoup plus agréable.
          </p>
          <br />
          <p>
          Travailler avec  Gerimmo Location, ne présente que des avantages, alors n’hésitez plus, simplifiez-vous la vie !
          </p>

      </div>
    </section>
      </Layout>
    );
  }
}
