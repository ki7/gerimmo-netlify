import React from 'react';
import Layout from '../components/Layout';

export default class Partenaires extends React.Component {
  render() {


    return (
      <Layout>
        <section className="section">
          <div className="hero hero--investisseurs"> </div>
          <div className="container">
            <h1 className="heading">Partenariat</h1>
            <p>Gerimmo Location est une agence spécialisée dans la location d’appartement relatif aux séjours de courtes durées.<br/>
            Nous louons un parc d’appartements que nous proposons à une clientèle essentiellement d’affaires, nous faisons donc une sélection particulièrement rigoureuse quant à la situation géographique et la qualité de chaque logement. </p>
            <br/>
            <p>Etre stratégiquement bien placé est une devise qui nous permet d’obtenir des clients de haute gamme, cadres dirigeant et autres catégories socioprofessionnelles supérieures.</p>
            <p> De ce fait, nous assurons les services associés à nos clients à savoir : un bien meublé et une sensation de confort comme s’ils étaient à la maison. L’agence procède également à la remise des clés en mains propre. </p>

            <p>Elle propose des appartements meublés, équipés de services tels que le WIFI, la télévision et d’une cuisine équipée avec de belles prestations.</p>
            <p>Nos logement sont parfaitement adaptés à des cadres en déplacements car tous nos biens sont équipés de grands écrans informatiques avec la connectique adaptée afin d’y relier vos ordinateurs portables pour plus de confort dans vos heures de travail.</p>
            <p>Nous garantissons des logements de standing plus spacieux à la décoration raffinée et environnement qui privilégie le calme. </p>
            <br/><br/>
            <p>Nous offrons également à notre honorable clientèle un service de qualité :</p>

            <ul>
              <li>- Ménage quotidien dans l’appartement </li>
              <li>- Pressing à la demande</li>
              <li>- Chef à domicile</li>
            </ul>
            <br/><br/>
            <p>L’agence Gerimmo Location espère que vous ferez partie de nos partenaires les plus assidus !<br/>
            N’hésitez pas à nous contacter, nous étudierons ensemble vos besoins afin d’y répondre au mieux.</p>
          </div>
        </section>
      </Layout>
    );
  }
}
