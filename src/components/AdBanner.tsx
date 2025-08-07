interface AdBannerProps {
  size: 'leaderboard' | 'rectangle' | 'banner';
  className?: string;
  label?: string;
}

const adSizes = {
  leaderboard: { width: '728px', height: '90px' },
  rectangle: { width: '300px', height: '250px' },
  banner: { width: '320px', height: '50px' }
};

export function AdBanner({ size, className = '', label = 'Advertisement' }: AdBannerProps) {
  const dimensions = adSizes[size];

  return (
    <div className={`text-center ${className}`}>
      <p className="text-xs text-muted-foreground mb-2">{label}</p>
      <div 
        className="bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center mx-auto"
        style={{ 
          width: dimensions.width, 
          height: dimensions.height,
          maxWidth: '100%'
        }}
      >
        <p className="text-muted-foreground text-sm">
          Ad Space - {dimensions.width.replace('px', '')}x{dimensions.height.replace('px', '')}
        </p>
      </div>
    </div>
  );
}