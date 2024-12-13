import React from 'react';
import Image from 'next/image';
import { AiOutlineTeam } from 'react-icons/ai';

const TeamPage = () => {
  return (
    <div className="overflow-x-hidden mt-20">
      {/* Hero Section */}
      <section
        className="relative bg-gray-900 text-white flex items-center justify-center h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/team-hero.jpg')`, // Replace with your team hero image
        }}
      >
        <div className="bg-black bg-opacity-60 p-6 text-center rounded-lg shadow-lg">
          <h1 className="text-6xl font-extrabold leading-tight">Meet Our Diverse Team</h1>
          <p className="mt-4 text-lg italic">
            "Innovating Africa through technology, powered by our passionate team."
          </p>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold flex items-center justify-center gap-3 mb-10 text-teal-600">
            <AiOutlineTeam className="text-teal-600 text-3xl" /> Executive Team
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[
              {
                name: 'Sulley Abdul Latif',
                role: 'Co-founder & CEO',
                image: '/images/latif.jpeg',
              },
              {
                name: 'Abdul-Moomin Is-Haq',
                role: 'Co-founder & CTO',
                image: '/images/cto.jpg',
              },
              {
                name: 'Rebecca Owusu',
                role: 'Chief Operations Officer',
                image: '/images/rebecca.jpg',
              },
              {
                name: 'Jonathan Kamau',
                role: 'Chief Financial Officer',
                image: '/images/jonathan.jpg',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out border-t-4 border-teal-500"
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="mx-auto rounded-full border-8 border-teal-400"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-lg text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold flex items-center justify-center gap-3 mb-10 text-teal-600">
            <AiOutlineTeam className="text-teal-600 text-3xl" /> Instructors
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[
              {
                name: 'Sarah Lee',
                role: 'Lead Instructor',
                image: '/images/instructor1.jpg',
              },
              {
                name: 'Emily Johnson',
                role: 'Frontend Development Instructor',
                image: '/images/instructor2.jpg',
              },
              {
                name: 'David Kim',
                role: 'Backend Development Instructor',
                image: '/images/instructor3.jpg',
              },
              {
                name: 'Kwame Owusu',
                role: 'Data Science Instructor',
                image: '/images/instructor4.jpg',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out border-t-4 border-teal-500"
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="mx-auto rounded-full border-8 border-teal-400"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-lg text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold flex items-center justify-center gap-3 mb-10 text-teal-600">
            <AiOutlineTeam className="text-teal-600 text-3xl" /> Developers
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[
              {
                name: 'David Johnson',
                role: 'Senior Developer',
                image: '/images/dev.jpg',
              },
              {
                name: 'Maya Patel',
                role: 'Full Stack Developer',
                image: '/images/dev2.jpg',
              },
              {
                name: 'Leo Harrison',
                role: 'Mobile App Developer',
                image: '/images/dev3.jpg',
              },
              {
                name: 'Tunde Adebayo',
                role: 'DevOps Engineer',
                image: '/images/dev4.jpg',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out border-t-4 border-teal-500"
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="mx-auto rounded-full border-8 border-teal-400"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-lg text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designers Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold flex items-center justify-center gap-3 mb-10 text-teal-600">
            <AiOutlineTeam className="text-teal-600 text-3xl" /> Designers
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[
              {
                name: 'Michael King',
                role: 'Lead UI/UX Designer',
                image: '/images/designer.jpg',
              },
              {
                name: 'Olivia Smith',
                role: 'UI Designer',
                image: '/images/designer2.jpg',
              },
              {
                name: 'Isaac Osei',
                role: 'UX Researcher',
                image: '/images/designer3.jpg',
              },
              {
                name: 'Grace Roberts',
                role: 'Visual Designer',
                image: '/images/designer4.jpg',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out border-t-4 border-teal-500"
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="mx-auto rounded-full border-8 border-teal-400"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-lg text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambassadors Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold flex items-center justify-center gap-3 mb-10 text-teal-600">
            <AiOutlineTeam className="text-teal-600 text-3xl" /> Ambassadors
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[
              {
                name: 'Amy Wilson',
                role: 'Community Ambassador',
                image: '/images/ambassador.jpg',
              },
              {
                name: 'Kofi Agyemang',
                role: 'University Ambassador',
                image: '/images/ambassador2.jpg',
              },
              {
                name: 'Aisha Bello',
                role: 'Tech Ambassador',
                image: '/images/ambassador3.jpg',
              },
              {
                name: 'Julius Okafor',
                role: 'Global Ambassador',
                image: '/images/ambassador4.jpg',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out border-t-4 border-teal-500"
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="mx-auto rounded-full border-8 border-teal-400"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-lg text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
