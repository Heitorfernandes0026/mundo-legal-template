const MarqueeBanner = () => {
  const text = "RONALD BLADE | PERSONAL TRAINER";
  const repeatedText = Array(10).fill(text).join(" • ");

  return (
    <div className="bg-primary py-2 md:py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="font-display text-sm sm:text-lg md:text-xl lg:text-2xl text-primary-foreground tracking-wider">
          {repeatedText} • {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
