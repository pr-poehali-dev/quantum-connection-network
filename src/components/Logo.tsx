export const Logo = ({ className }: { className?: string }) => {
  return (
    <span
      className={className}
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 800,
        fontSize: '1.4rem',
        color: 'var(--teal)',
        letterSpacing: '0.05em',
        lineHeight: 1,
        display: 'inline-block',
      }}
    >
      НАЛЕГКЕ
    </span>
  );
};
