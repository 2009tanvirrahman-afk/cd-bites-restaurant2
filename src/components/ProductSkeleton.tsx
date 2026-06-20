export function ProductSkeleton() {
  return (
    <div className="bg-white p-5 md:p-6 text-center relative h-full flex flex-col overflow-hidden border border-gray-100 rounded-2xl shadow-sm animate-pulse">
      {/* Wishlist Button Skeleton */}
      <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-gray-200 rounded-full" />
      
      {/* Image Skeleton */}
      <div className="flex-grow flex items-center justify-center mb-6 relative">
        <div className="w-32 h-32 md:w-44 md:h-44 bg-gray-200 rounded-full" />
      </div>

      {/* Details Skeleton */}
      <div className="h-5 bg-gray-200 rounded-md w-3/4 mx-auto mb-3" />
      
      {/* Stars Skeleton */}
      <div className="flex justify-center gap-1 mb-4">
        {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-3 bg-gray-200 rounded-full" />)}
      </div>
      
      {/* Price Skeleton */}
      <div className="flex justify-center items-center gap-2 mb-6">
        <div className="h-6 bg-gray-200 rounded-md w-1/3" />
        <div className="h-4 bg-gray-200 rounded-md w-1/4" />
      </div>

      {/* Button Skeleton */}
      <div className="w-full h-10 md:h-12 bg-gray-200 rounded-md mt-auto" />
    </div>
  );
}
