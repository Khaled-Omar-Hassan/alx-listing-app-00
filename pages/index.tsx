import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import Image from "next/image";

const filters = [
  "Top Villa", "Self Checkin", "Pet Friendly", "Pool", "Luxury", "Fireplace"
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-96 bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: 'url(https://example.com/hero-bg.jpg)' }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="mt-2">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="my-8 flex flex-wrap gap-2">
        {filters.map((filter, i) => (
          <Pill key={i} label={filter} />
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image src={property.image} alt={property.name} className="h-48 w-full object-cover" width={100} height={100} />
            <div className="p-4">
              <h2 className="font-bold text-lg">{property.name}</h2>
              <p className="text-sm text-gray-500">
                {property.address.city}, {property.address.country}
              </p>
              <p className="text-blue-600 font-semibold mt-2">${property.price}/night</p>
              <p className="text-yellow-600 text-sm">Rating: {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
