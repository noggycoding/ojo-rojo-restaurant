export default function AboutSkeleton() {
  return (
    <section className="py-20 bg-primary border-b-4 border-black-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 bg-primary rounded-lg mb-12 animate-pulse" />
        
        <div className="max-w-4xl mx-auto">
          <div className="h-6 bg-white/20 rounded mb-6 w-3/4 mx-auto animate-pulse" />
          <div className="h-4 bg-white/20 rounded mb-12 w-2/3 mx-auto animate-pulse" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-black-primary p-6 rounded-xl animate-pulse">
                <div className="h-12 w-12 bg-white/20 rounded-full mx-auto mb-4" />
                <div className="h-4 bg-white/20 rounded mb-2 w-3/4 mx-auto" />
                <div className="h-3 bg-white/20 rounded w-full" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-black-primary rounded-2xl">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center animate-pulse">
                <div className="h-10 bg-white/20 rounded mb-2 w-16 mx-auto" />
                <div className="h-3 bg-white/20 rounded w-20 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
