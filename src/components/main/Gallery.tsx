import Marquee from "react-fast-marquee";

const galleryitems = [
  {
    id: 1,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-cg-01.webp",
    alt: "Gallery Image 1",
  },
  {
    id: 23,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-cg-02.webp",
    alt: "Gallery Image 23",
  },
  {
    id: 2,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-01.webp",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-02.webp",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-08.webp",
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-spd-01.webp",
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-spd-02.webp",
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-03.webp",
    alt: "Gallery Image 7",
  },
  {
    id: 8,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-04.webp",
    alt: "Gallery Image 8",
  },
  {
    id: 9,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-09.webp",
    alt: "Gallery Image 9",
  },
  {
    id: 10,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-10.webp",
    alt: "Gallery Image 10",
  },
  {
    id: 11,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-11.webp",
    alt: "Gallery Image 11",
  },
  {
    id: 12,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-12.webp",
    alt: "Gallery Image 12",
  },
  {
    id: 13,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-13.webp",
    alt: "Gallery Image 13",
  },
  {
    id: 14,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-14.webp",
    alt: "Gallery Image 14",
  },
  {
    id: 15,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-05.webp",
    alt: "Gallery Image 5",
  },
  {
    id: 16,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-06.webp",
    alt: "Gallery Image 16",
  },
  {
    id: 17,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-ss-07.webp",
    alt: "Gallery Image 17",
  },
  {
    id: 22,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-spd-09.webp",
    alt: "Gallery Image 22",
  },
  {
    id: 18,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-spd-04.webp",
    alt: "Gallery Image 18",
  },
  {
    id: 19,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-spd-05.webp",
    alt: "Gallery Image 19",
  },
  {
    id: 20,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-spd-06.webp",
    alt: "Gallery Image 20",
  },
  {
    id: 21,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-spd-07.webp",
    alt: "Gallery Image 21",
  },
  {
    id: 22,
    src: "https://blog.tenpcr.com/wp-content/uploads/2025/12/gallery-spd-08.webp",
    alt: "Gallery Image 22",
  },
];

function Gallery() {
  return (
    <Marquee>
      <div className="flex flex-row overflow-hidden">
        {galleryitems?.map((item: any, index: number) => (
          <img
            key={index}
            src={item?.src}
            title={item.name}
            alt={item?.alt}
            className="aspect-[4/3] w-[300px] xl:w-[400px] object-cover hover:scale-[1.1] transition-all duration-300"
          />
        ))}
      </div>
    </Marquee>
  );
}

export default Gallery;
