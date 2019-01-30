import React from 'react';
import Layout from '../components/Layout';
/* 
function Section({children}){
  return(
     <section className="section">
        <div className="container">
          {children}
      </div>
    </section>
  )
} */
export default class IndexPage extends React.Component {
  render() {


    return (
      <Layout>
        <section className="section">
        <div className="hero"> 
        </div>
        <div className="container">
      

          <h2 className="heading"> Qui est GERIMMO LOCATION ?</h2>
          <p>
            Gerimmo Location est une jeune entreprise et  agence spécialisée dans la location d’appartement relatif aux séjours de courtes durées.
          </p>
          <p>
            Passionnée de philantropie et de l’immobilier, je suis propriétaire comme vous, chers investisseurs ! 
            Et comme vous, je me souci du bien-être de ce qui m’appartient !
          </p>
          <p>
            En revanche, je refuse d’y consacrer des heures voire des jours entiers pour recruter de nouveaux locataires ou bien d’y faire le ménage. 
            Alors, je préfère déléguer et profiter de ma famille, mes amis, mes loisirs…
          </p>
          <p>
            Gerimmo Location prend en main la gestion de biens immobiliers et met tout en œuvre pour satisfaire les investisseurs, clients et partenaires. 
          </p>
      </div>
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
    )
  }
}


