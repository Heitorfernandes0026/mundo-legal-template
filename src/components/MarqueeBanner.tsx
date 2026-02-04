const MarqueeBanner = () => {
  const text = "RONALD BLADE | PERSONAL TRAINER";
  const repeatedText = Array(10).fill(text).join(" • ");

  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="font-display text-xl md:text-2xl text-primary-foreground tracking-wider">
          {repeatedText} • {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
