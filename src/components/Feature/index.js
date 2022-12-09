import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
        <h1>Offer of the day</h1>
        <p>Red velvet cake with fruit.</p>
        <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>

  )
}

export default Feature