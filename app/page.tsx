import CompanyShowcase from "@/components/compny-showcase";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCheck, CheckCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";
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
      <main className="w-[90%] md:w-[80%] mx-auto my-10">
        <section className="flex flex-col gap-[32px] justify-between items-center md:flex-row h-full">
          <div className="md:w-1/2">
            <span>
              ✨
              <h2 className="tracking-widest text-sm font-semibold bg-primary text-primary-foreground inline px-2.5 rounded-xs">
                INTERVIEW MADE EASY
              </h2>
            </span>
            <h1 className="text-4xl font-medium mb-3.5 md:text-6xl">
              Crack your next interview with confidence.
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

        <section className="py-16">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end auto-cols-fr">
            <div className="lg:col-span-6 text-5xl font-semibold">
              Cohorts for better learning.
            </div>
            <div className="lg:col-span-6 lg:col-start-7 text-secondary-foreground/60">
              Linear is shaped by the practices and principles that distinguish
              world-class product teams from the rest: relentless focus, fast
              execution, and a commitment to the quality of craft. Make the
              switch
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="shadow-none rounded-sm border-amber-500 hover:bg-amber-500 hover:text-white"
              >
                <CardContent className="flex flex-col items-start p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="pt-10">
            <h2 className="bg-yellow-300 rounded-sm inline p-3 font-medium">
              The important skills
            </h2>
            <Card className="rounded-sm shadow-none bg-yellow-300">
              <CardContent className="">
                Learn what you haven't learned yet despite spending lakhs every
                year! <strong>The Comunication Skill</strong>
              </CardContent>
            </Card>
          </div>
          <div className="pt-5">
            <h2 className="bg-yellow-300 rounded-sm inline  p-3 font-medium mb-2">
              Interview redirect
            </h2>
            <Card className="rounded-sm shadow-none bg-yellow-300">
              <CardContent className="">
                Take control of the<strong> discussion</strong>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center h-60 bg-black text-white/70">
        <h1>© 2025 The skill web, Inc. All rights reserved. </h1>
      </footer>
    </div>
  );
}
