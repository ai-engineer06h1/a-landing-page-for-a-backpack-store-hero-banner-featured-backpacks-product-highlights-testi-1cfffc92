import React from 'react';

const ProductHighlights = () => {
    const highlights = [
        "Durable materials for long-lasting use",
        "Spacious compartments to hold all essentials",
        "Lightweight design for easy carrying"
    ];

    return (
        <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Product Highlights</h2>
            <ul className="list-disc list-inside">
                {highlights.map((highlight, index) => (
                    <li key={index} className="mb-2">{highlight}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductHighlights;