export default function ContactSkeleton() {
  return (
    <section className="py-20 bg-black-primary border-b-4 border-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 bg-primary rounded-lg mb-12 animate-pulse" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-black-secondary p-8 rounded-xl animate-pulse">
              <div className="h-8 w-8 bg-primary/30 rounded-full mx-auto mb-4" />
              <div className="h-5 bg-white/20 rounded mb-3 w-2/3 mx-auto" />
              <div className="h-4 bg-white/20 rounded w-3/4 mx-auto" />
            </div>
          ))}
        </div>

        <div className="aspect-video bg-black-secondary rounded-xl animate-pulse" />
      </div>
    </section>
  );
}
