import React from 'react';

const Testimonials = () => {
    const testimonials = [
        { id: 1, text: "Best backpack I’ve ever owned! Highly recommend.", customer: "Alice" },
        { id: 2, text: "Fantastic quality and great design!", customer: "Bob" },
        { id: 3, text: "Perfect for my travels, love it!", customer: "Charlie" }
    ];

    return (
        <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">What Our Customers Say</h2>
            <div className="border p-4 rounded-lg">
                {testimonials.map(testimonial => (
                    <blockquote key={testimonial.id} className="mb-2 italic bordered">
                        &ldquo;{testimonial.text}&rdquo; <br />
                        <footer className="text-right font-semibold">- {testimonial.customer}</footer>
                    </blockquote>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;