import React from 'react';
import { Button } from "@/components/ui/button";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-purple-600 text-white p-8">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-2">Shivshakti Tours & Travels</h1>
        <p className="text-xl">Your Trusted Travel Partner in Maharashtra</p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Tour Packages" description="Amazing destinations across Maharashtra and India." />
        <Card title="Car Rentals" description="Affordable and reliable car rental services." />
        <Card title="Holiday Trips" description="Customized vacations and sightseeing plans." />
      </div>
      <div className="mt-10 text-center">
        <Button className="text-lg px-6 py-3 bg-yellow-400 text-black hover:bg-yellow-300">Book Now</Button>
      </div>
      <footer className="mt-12 text-center text-sm">
        <p>Contact: Bhausaheb Patil - 9767486632 | Nivrutti Patil - 7028323159 | Digambar Patil - 7796033175</p>
        <p>Address: Chinchkhede Post-Deoli, Taluka-Chalisgaon, District-Jalgaon, Pin-424119</p>
      </footer>
    </div>
  );
};

const Card = ({ title, description }) => (
  <div className="bg-white text-black rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p>{description}</p>
  </div>
);

export default App;
