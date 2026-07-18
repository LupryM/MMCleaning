import Image from "next/image";

export default function TrustReviews() {
  return (
    <section className="bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream rounded-3xl px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <div className="text-center">
              <div className="relative w-48 h-16 mx-auto mb-2">
                <Image
                  src="/Images/Facebook-reviews.jpg"
                  alt="Facebook Reviews"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-lime text-2xl tracking-widest">★★★★★</div>
              <p className="text-sm text-muted-foreground mt-1">
                4.9/5 based on 120 reviews
              </p>
            </div>
            <div className="hidden md:block w-px h-20 bg-border" />
            <div className="text-center">
              <div className="relative w-48 h-16 mx-auto mb-2">
                <Image
                  src="/Images/oogle-review-logo-png-google-reviews-transparent-1156292055272f0fh5jor.png"
                  alt="Google Reviews"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-lime text-2xl tracking-widest">★★★★★</div>
              <p className="text-sm text-muted-foreground mt-1">
                4.8/5 based on 85 reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
