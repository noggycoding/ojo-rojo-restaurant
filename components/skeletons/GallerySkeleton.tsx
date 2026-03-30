export default function GallerySkeleton() {
  return (
    <section className="py-20 bg-black-secondary border-b-4 border-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 bg-primary rounded-lg mb-12 animate-pulse" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square bg-black-primary rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}
