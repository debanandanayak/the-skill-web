import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import CompanyShowcase from "@/components/company-showcase";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
export default function Home() {
  const benefits = [
    {
      title: "Boost Your Confidence",
      desc: "Overcome nervousness and speak with clarity during interviews.",
    },
    {
      title: "Mock Interviews",
      desc: "Practice real interview scenarios and receive expert feedback.",
    },
    {
      title: "Behavioural Skills",
      desc: "Improve communication, teamwork, and professional body language.",
    },
    {
      title: "Resume & HR Prep",
      desc: "Craft strong resumes and prepare for common HR questions.",
    },
    {
      title: "Personalized Feedback",
      desc: "Identify your strengths and improve weak areas with detailed guidance.",
    },
    {
      title: "Proven Results",
      desc: "Thousands of students placed successfully in top companies.",
    },
  ];
  const points = [
    "Personalized guidance from human not AI.",
    "Better interactive learning environment.",
    "Resume & HR Prep and many more.",
  ];
  return (
    <div className="font-sans text-foreground">
      <div className="md:h-40 md:w-40 md:-top-[0%] md:-left-[0%] bg-purple-600 absolute -z-20 rounded-full blur-[100px]"></div>
      <header className="h-16 w-[90%] md:w-[80%] mx-auto flex flex-row items-center">
        <span className="font-bold tracking-wider">
          The skill web |{" "}
          <span className="font-medium">Unlock your potential</span>
        </span>
      </header>
      <main className="w-[90%] md:w-[80%] my-10 mx-auto">
        <section className="flex flex-col gap-[32px] justify-between items-center md:flex-row h-full">
          <div className="md:w-1/2">
            <span>
              ✨
              <h2 className="tracking-widest text-sm font-semibold bg-primary text-primary-foreground dark:text-secondary-foreground inline px-2.5 rounded-xs">
                INTERVIEW MADE EASY
              </h2>
            </span>
            <h1 className="text-4xl font-medium mb-3.5 md:text-6xl lg:leading-20">
              Crack your next{" "}
              <Highlighter action="underline" color="blue">
                interview
              </Highlighter>{" "}
              with confidence .
            </h1>
            <h3 className="text-sm leading-relaxed font-medium text-secondary-foreground/60">
              We offers
            </h3>
            <div className="flex flex-col items-strt mb-3.5">
              {points.map((point) => (
                <p
                  key={point}
                  className="flex items-center gap-2 text-secondary-foreground/60 text-sm leading-relaxed p-0.5 rounded"
                >
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  <span>{point}</span>
                </p>
              ))}
            </div>
            <div className="flex flex-row gap-4">
              <Button
                variant="default"
                className="rounded-sm cursor-pointer text-foreground"
              >
                Get started
              </Button>
              <Button
                variant="link"
                className="rounded-sm cursor-pointer text-foreground"
              >
                Book a demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-10">
              <Card className="rounded-sm shadow-none border-secondary p-2 font-medium font-mono">
                <CardContent>HR Prep</CardContent>
              </Card>
            </div>
            <div className="absolute right-0 top-30">
              <Card className="rounded-sm shadow-none border border-secondary py-2 font-medium font-mono">
                <CardContent>⭐⭐⭐⭐</CardContent>
              </Card>
            </div>
            <div className="absolute left-20 bottom-0">
              <Card className="rounded-sm shadow-none border border-secondary py-2 font-medium font-mono">
                <CardContent>Resume</CardContent>
              </Card>
            </div>
            <Image
              className="bg-primary/70 rounded-full p-2 w-[350px]  md:w-[430px] "
              src="/Interview-rafiki.svg"
              alt="Hero image"
              width={430}
              height={38}
              priority
            />
          </div>
        </section>
      </main>
      <section className="py-16 md:mx-30">
        <div className="text-center">
          <p className="text-secondary-foreground/60 text-center inline md:block md:text-2xl md:font-bold md:text-secondary-foreground after:content-['_'] md:after:content-none">
            Powering organizations to produce next-gen talents.
          </p>
          <p className="text-center text-secondary-foreground/60 inline md:block">
            From individuals to institutes and corporates.
          </p>
        </div>
        <div className="mt-5">
          <CompanyShowcase />
        </div>
      </section>
      <section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end auto-cols-fr mx-10 md:mx-30">
          <div className="lg:col-span-6 text-5xl font-semibold text-balance">
            Equipping students for real-world
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-secondary-foreground/60">
            Our programs bridge the gap between academics and real-world skills,
            preparing students to think critically, build confidently, and
            perform at industry standards from day one.
          </div>
        </div>
        <div className="mt-10"></div>
        <div className="snap-x overscroll-x-contain snap-always overflow-x-scroll overflow-y-hidden [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          <div className="grid gap-4 grid-flow-col min-w-fit justify-center items-center">
            <Card className="aspect-[320/380] h-85 ml-8  slide-out-to-right-85 snap-center rounded-sm ">
              <CardTitle className="px-10 mt-5 text-xl">
                Behavioural Skills
              </CardTitle>
              <CardContent className="p-10">
                Improve communication, teamwork, and professional body language.
              </CardContent>
            </Card>
            <Card className="aspect-[320/380] h-85 slide-out-to-right-90 snap-center rounded-sm">
              <CardTitle className="px-10 mt-5 text-xl">
                Technical Skills
              </CardTitle>
              <CardContent className="p-10">
                Develop coding, problem-solving, and analytical skills.
              </CardContent>
            </Card>
            <Card className="aspect-[320/380] h-85 mr-8 slide-out-to-right-90 snap-center rounded-sm">
              <CardTitle className="px-10 mt-5 text-xl">Soft Skills</CardTitle>
              <CardContent className="p-10">
                Enhance adaptability, leadership, and time management skills.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center h-60 text-secondary-foreground/80 text-sm">
        <AnimatedThemeToggler />{" "}
        <h1>© 2025 The skill web, Inc. All rights reserved. </h1>
      </footer>
    </div>
  );
}
