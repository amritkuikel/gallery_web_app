const mockUrls = [
  "https://utfs.io/f/9746527d-926a-4057-b1b7-d5265e9e8c46-ncqmqi.jpg",
  "https://utfs.io/f/8250ab57-4358-4b2d-9512-c5bcc0bd0749-85i4bi.jpg",
  "https://utfs.io/f/c84770cc-6b5e-4dc5-be5c-71e931edf430-qk5bqi.jpg",
  "https://utfs.io/f/5d01703a-3122-47f7-9885-9b3f2ca5166e-yrzn2h.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
