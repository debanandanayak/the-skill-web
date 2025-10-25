import { Marquee } from "./ui/marquee";

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
        <div className="flex whitespace-nowrap gap-5">
          <Marquee pauseOnHover className="[--duration:20s]">
            {companies.map((name, i) => (
              <div
                key={`${i}-${name}`}
                className="p-10 bg-secondary rounded-sm min-w-[200px]"
              >
                {name}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="hidden md:grid [grid-template-columns:repeat(4,1fr)] gap-x-5 gap-y-10">
        {companies.map((name) => (
          <div key={`random  ${name}`} className="p-10 bg-secondary rounded-sm">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
