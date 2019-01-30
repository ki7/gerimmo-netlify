import React from 'react';
import Layout from '../components/Layout';

export default class Appartements extends React.Component {
  render() {
    return (
      <Layout>
              <section className="section">
        <div className="hero hero--investisseurs"> 
        </div>
        <div className="container">
      

          <h1 className="heading">Appartement à la carte</h1>
          <p>Nous garantissons des logements de standing plus spacieux à la décoration raffinée et à environnement qui privilégie le calme. <br/>

Nous offrons également à notre honorable clientèle un service de qualité :
          </p>
          <br/>



            <ul>
              <li>- Ménage quotidien dans l’appartement </li>
              <li>- Pressing à la demande</li>
              <li>- Chef à domicile</li>
            </ul>



        </div>
              </section>


      </Layout>
    );
  }
}
