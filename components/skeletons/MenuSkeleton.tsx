export default function MenuSkeleton() {
  return (
    <section className="py-20 bg-black-primary border-b-4 border-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 bg-primary rounded-lg mb-12 animate-pulse" />
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-12 w-32 bg-black-secondary rounded-lg animate-pulse" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-black-secondary p-6 rounded-xl border-2 border-white/5 animate-pulse">
              <div className="h-6 bg-white/10 rounded mb-4 w-3/4" />
              <div className="h-4 bg-white/10 rounded mb-4 w-full" />
              <div className="h-8 bg-primary/30 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
