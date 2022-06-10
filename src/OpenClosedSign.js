import React from 'react';
// presentational component: just takes in props without changing state
export default function OpenClosedSign({ zooIsOpen }) {
    //zooIsOpen state is maintained in the parent, passed here to the child
  return (
    <div className={zooIsOpen ? 'open' : 'closed'}>
      {/* if the zoo is open, tell us the zoo is open, otherwise, tell us the zoo is closed */}
      {
        zooIsOpen 
          ? <h3>Hooray! The zoo is open! Come on in!</h3>
          : <h1>So sorry we missed you :( the zoo is closed</h1>
      }
    </div>
  );
}