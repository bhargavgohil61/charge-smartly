export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-24">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-caption">
            © {currentYear} What to charge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};