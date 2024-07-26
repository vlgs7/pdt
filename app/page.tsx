import Image from 'next/image'
import sampleImage from '../public/sample.jpg' // Replace with your image path

export default function Home() {
  const images = [
    '/1.png',
    '/2.png',
    '/3.png',
    '/4.png',
    '/5.png',
    '/6.png',
  ];

  return (
    <div className="flex flex-col items-center bg-[#F5F5F5] min-h-screen">
      {images.map((img, index) => (
        <div key={index} className="w-4/5 relative mb-4">
          <img
            src={img}
            alt={`Sample Image ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}
