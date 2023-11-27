import React from 'react';
import trabajos from '../data/trabajos';
import { Link } from 'react-router-dom';

export const ListadoTrabajos = ({limite}) => {
  return (
      <section className='work'>
        {
          trabajos.slice(0, limite).map(trabajo => {
            return (
              <article key={trabajo.id} className='work-item'>
                <div className='mask'>
                  <img src={"/img/" + trabajo.id + ".jpg"}></img>
                </div>
                <span>{trabajo.categoria}</span>
                <h2><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h2>
                <h3>{trabajo.tecnologias}</h3>
              </article>
            )
          })
        }
      </section>
  )
} 