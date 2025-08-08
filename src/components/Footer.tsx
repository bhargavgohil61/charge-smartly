export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} What to charge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};