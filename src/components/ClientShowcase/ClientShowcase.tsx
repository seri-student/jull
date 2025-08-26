import React from 'react';
import { clients } from '../../data/clients';
import { ClientCard } from './ClientCard';
import './ClientShowcase.css';

export const ClientShowcase: React.FC = () => {
  const duplicatedClients = [...clients, ...clients]; // Duplicate for infinite scroll

  return (
    <section className="client-showcase" aria-label="Our top clients showcase">
      <div className="client-showcase-container">
        <h2 className="client-showcase-title">
          Our Best Clients
        </h2>
        
        <div className="client-showcase-wrapper">
          <div className="client-showcase-gradient-left" />
          <div className="client-showcase-gradient-right" />
          
          <div className="clients-track">
            {duplicatedClients.map((client, index) => (
              <ClientCard
                key={`${client.handle}-${index}`}
                client={client}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};