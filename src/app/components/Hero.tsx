import Button from './Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#eff6ff] to-[#3b82f6]/10 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            
            <span className="text-[#3b82f6]"> Recoverly </span>
          </h1>
          <p className="text text-gray-600 mb-8 max-w-3xl mx-auto">
          Bridging recovery through technology.
          
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/about" variant="primary">
              Discover more
            </Button>
            <Button href="/contact" variant="accent">
             Send a message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}