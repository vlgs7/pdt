import Image from 'next/image'
import sampleImage from '../public/sample.jpg' // 替换为你的图片路径

export default function Home() {
  const images = [
    sampleImage,
    sampleImage,
    sampleImage, // 添加更多图片路径
  ];

  return (
    <div className="flex flex-col items-center">
      {images.map((img, index) => (
        <div key={index} className="w-full relative mb-4">
          <Image
            src={img}
            alt={`Sample Image ${index + 1}`}
            layout="responsive"
            width={1920}
            // height={1080}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}
