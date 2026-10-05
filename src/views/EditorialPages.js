import React from "react";
import { Link } from "react-router-dom";

const lookbookItems = [
  {
    name: "Everyday layers",
    category: "Women's edit",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "The considered fit",
    category: "Modern essentials",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "A lighter pace",
    category: "New season",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Off-duty classics",
    category: "Men's edit",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "The finishing touch",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Made to move",
    category: "Everyday sneakers",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
  },
];

export function LookbookPage() {
  return (
    <main className="editorial-page lookbook-page">
      <section className="editorial-heading">
        <p className="editorial-kicker">The FashionCube edit</p>
        <h1>Pieces with a point of view.</h1>
        <p>Fresh finds, easy layers, and details worth keeping around.</p>
      </section>
      <section className="lookbook-grid" aria-label="Fashion lookbook">
        {lookbookItems.map((item) => (
          <article className="lookbook-item" key={item.name}>
            <img src={item.image} alt={item.name} loading="lazy" />
            <div className="lookbook-caption">
              <div>
                <p>{item.category}</p>
                <h2>{item.name}</h2>
              </div>
              <Link to="/fashion-cube" aria-label={`Explore the shop: ${item.name}`}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export function AboutPage() {
  return (
    <main className="editorial-page about-page">
      <section className="about-copy">
        <p className="editorial-kicker">A little about us</p>
        <h1>Good style should feel like your own.</h1>
        <p>
          FashionCube is a place to find wearable pieces, thoughtful details,
          and new ideas for the everyday. We believe getting dressed can be
          simple, personal, and a little unexpected.
        </p>
        <Link className="editorial-button" to="/fashion-cube/lookbook">
          Explore the lookbook <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </section>
      <img
        className="about-image"
        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1400&q=85"
        alt="A curated rail of contemporary clothing"
        loading="lazy"
      />
    </main>
  );
}

export function ContactPage() {
  return (
    <main className="editorial-page contact-page">
      <section className="editorial-heading">
        <p className="editorial-kicker">We're here to help</p>
        <h1>Let's talk.</h1>
        <p>Questions about an order, a piece, or just want to say hello?</p>
      </section>
      <section className="contact-details">
        <div>
          <h2>Customer care</h2>
          <p>For orders and product questions, email us anytime.</p>
          <a href="mailto:hello@fashioncube.in">hello@fashioncube.in</a>
        </div>
        <div>
          <h2>Find your next favorite</h2>
          <p>Browse the latest edit and discover pieces for your wardrobe.</p>
          <Link to="/fashion-cube/lookbook">Visit the lookbook</Link>
        </div>
      </section>
    </main>
  );
}