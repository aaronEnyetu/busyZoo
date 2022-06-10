import React from 'react';

export default function AnimalEmoji({ animal }) {
  return (
    <div>
      {animal === 'elephant' && '🐘'}
      {animal === 'buffalo' && '🐃'}
      {animal === 'rhino' && '🦏'}
      {animal === 'leopard' && '🐆'}
      {animal === 'ostrich' && '𓅦'}
    </div>
  );
}