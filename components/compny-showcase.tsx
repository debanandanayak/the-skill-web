export default function CompanyShowcase() {
  const companies = [
    "Open AI",
    "Linear",
    "Vercel",
    "Wipro",
    "Motia",
    "Resend",
    "Infosys",
    "Unittech",
  ];

  return (
    <div className="text-center font-black text-secondary-foreground">
      {/* === Marquee for md and below === */}
      <div className="block md:hidden overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-5">
          {companies.concat(companies).map((name, i) => (
            <div key={i} className="p-10 bg-primary rounded-sm min-w-[200px]">
              {name}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:grid [grid-template-columns:repeat(4,1fr)] gap-x-5 gap-y-10">
        {companies.map((name, i) => (
          <div key={i} className="p-10 bg-primary rounded-sm">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
