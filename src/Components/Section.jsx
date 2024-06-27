import React from 'react'

const Section = ({id,children}) => {
  return (
    <section id={id}>
      {children}
    </section>
  );
};

export default Section
