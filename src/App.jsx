import React from 'react';
import HeroBanner from './components/HeroBanner';
import FeaturedBackpacks from './components/FeaturedBackpacks';
import ProductHighlights from './components/ProductHighlights';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';

function App() {
    return (
        <div className="container mx-auto">
            <HeroBanner />
            <FeaturedBackpacks />
            <ProductHighlights />
            <Testimonials />
            <CallToAction />
        </div>
    );
}

export default App;