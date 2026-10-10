import Image from "next/image";

export default function TrustReviews() {
  return (
    <section className="bg-white pb-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <div className="text-center">
              <div className="relative w-72 h-24 mx-auto mb-2">
                <Image
                  src="/Images/Facebook-reviews.jpg"
                  alt="Facebook Reviews"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-1 font-medium">
                5 Star Reviews on Facebook
              </p>
            </div>
            <div className="hidden md:block w-px h-20 bg-border" />
            <a 
              href="https://share.google/diYZtA7ApeHxBsIyH" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-center block hover:opacity-80 transition-opacity"
            >
              <div className="relative w-72 h-24 mx-auto mb-2">
                <Image
                  src="/Images/oogle-review-logo-png-google-reviews-transparent-1156292055272f0fh5jor-removebg-preview.png"
                  alt="Google Reviews"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-1 font-medium">
                5 Star Reviews on Google
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
