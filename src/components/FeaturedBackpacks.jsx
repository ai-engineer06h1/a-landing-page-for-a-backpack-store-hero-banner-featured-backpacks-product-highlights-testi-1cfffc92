import React from 'react';

const FeaturedBackpacks = () => {
    const backpacks = [
        { id: 1, name: "Adventure Pack", price: "$99.99", img: "path/to/image1.jpg" },
        { id: 2, name: "Urban Backpack", price: "$79.99", img: "path/to/image2.jpg" },
        { id: 3, name: "Traveler's Choice", price: "$109.99", img: "path/to/image3.jpg" }
    ];

    return (
        <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Backpacks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {backpacks.map(pack => (
                    <div key={pack.id} className="border p-4 rounded-lg">
                        <img src={pack.img} alt={pack.name} className="h-48 w-full object-cover rounded" />
                        <h3 className="text-lg font-bold mt-2">{pack.name}</h3>
                        <p className="text-xl font-semibold">{pack.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedBackpacks;