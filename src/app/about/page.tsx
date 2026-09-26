import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";
import Sparkle from "@/components/sparkle";

export const metadata = {
  title: "About Us | MM Cleaners",
  description: "Learn more about MM Cleaners, our family-owned business, and the hardworking values we bring to every clean.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-32 bg-background border-b border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <span className="inline-flex bg-lime text-lime-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-none mb-6">
              Our Story
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-foreground">
              Built on honest, hardworking values.
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Story Content */}
            <div className="lg:col-span-7 bg-cream p-6 sm:p-8 md:p-12 border border-border relative">
              <Sparkle className="absolute top-6 right-6 w-5 h-5 text-lime" />
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed mb-8">
                  MM Cleaners is a family-owned business based in Centurion, managed directly by two sisters. When we built this company, we didn&apos;t look far for our business model. We built it around the standards of our grandmother, Angie.
                </p>
                
                <div className="w-12 h-1 bg-lime mb-8" />
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  Angie didn&apos;t believe in shortcuts. She was practical, hardworking, and knew that doing a job right the first time meant paying attention to the details most people ignore. She passed that no-nonsense approach down to her daughters.
                </p>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Today, that is exactly how we operate. We aren&apos;t a massive, faceless franchise. We are a local team that values reliability, efficiency, and honest work. We train our staff rigorously and oversee the work to make sure it hits the mark. When you hire us, you get a crew that shows up on time, works hard, and leaves your space genuinely clean.
                </p>
              </div>
            </div>

            {/* Headshot / Image Space */}
            <div className="lg:col-span-5 relative aspect-[4/5] w-full bg-dark flex flex-col items-center justify-center overflow-hidden border border-border group">
               {/* Placeholder for Headshot */}
               <div className="absolute inset-0 bg-dark/5 z-10 transition-colors group-hover:bg-transparent" />
               <Sparkle className="absolute bottom-6 left-6 w-8 h-8 text-lime z-20" />
               
               <div className="text-center p-8 relative z-20 flex flex-col items-center">
                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/10 mb-4 border border-background/20">
                   <svg className="w-8 h-8 text-background/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <p className="text-background/70 font-medium text-sm max-w-[200px] mx-auto uppercase tracking-widest text-center mt-2">
                   Image Placeholder
                 </p>
                 <p className="text-background/40 text-xs mt-2 text-center max-w-[220px]">
                   Replace this container with your headshot image component.
                 </p>
               </div>
               
               {/* Optionally, if an image is provided later you can use next/image here */}
               {/* <Image src="/about-headshot.jpg" alt="MM Cleaners Founders" fill className="object-cover" /> */}
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsappButton />
    </main>
  );
}
