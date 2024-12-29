import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  ArrowRightIcon,
  BookOpen,
  Heart,
  Lightbulb,
  MenuIcon,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import SparklesText from "@/components/ui/sparkles-text";
import GradualSpacing from "@/components/ui/gradual-spacing";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FaYoutube } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";

export default function Component() {
  const tags = [
    {
      icon: <BookOpen size={16} />,
      label: "Vedantic Scholar",
      color: "bg-amber-100 text-amber-800",
    },
    {
      icon: <Heart size={16} />,
      label: "Environmental Activist",
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      icon: <Users size={16} />,
      label: "Champion of Freedom",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: <Lightbulb size={16} />,
      label: "Science Activist",
      color: "bg-purple-100 text-purple-800",
    },
  ];

  return (
    <>
      <header className="flex flex-col h-16 w-full shrink-0 items-center px-4 md:px-6">
        <nav className="flex justify-between items-center w-full py-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <div className="md:hidden font-[Oswald] tracking-tight font-extrabold text-sm justify-start flex flex-col w-full ml-4">
              <div className="text-md">ACHARYA</div>PRASHANT
            </div>

            <SheetContent side="left">
              <Link to="/">
                <div className="h-10 w-10 flex items-center gap-2">
                  <img
                    src="https://acharyaprashant.org/images/ic_favicon.png"
                    alt=""
                    width={200}
                    height={200}
                  />
                  <div className="font-[Oswald] font-bold tracking-tight">
                    Acharya Prashant
                  </div>
                </div>
              </Link>
              <div className="grid gap-2 py-6">
                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  Home
                </Link>

                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  Podcasts
                </Link>

                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  Live Sessions
                </Link>

                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  AP Articles
                </Link>

                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  AP Books
                </Link>

                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  Video Series
                </Link>

                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  In Media
                </Link>

                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  Careers
                </Link>

                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  Donate
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="hidden lg:flex">
            <div className="h-10 w-10 flex gap-2 items-center">
              <img
                src="https://acharyaprashant.org/images/ic_favicon.png"
                alt=""
                width={200}
                height={200}
              />
              <div className="text-sm font-oswald font-extrabold tracking-tight">
                <div className="text-md">ACHARYA</div>PRASHANT
              </div>
            </div>
          </Link>
          <NavigationMenu className="hidden lg:flex text-md items-center">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  Home
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  Podcasts
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  Live Sessions
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  AP Articles
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  AP Books
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  Video Series
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  In Media
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  Careers
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  to="#"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:text-[#de4c2b] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                  Donate
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>
      <main className="bg-[#fff4ee] w-full h-full">
        <section className="w-full h-full bg-[#fff4ee] flex flex-col md:flex-row items-center md:justify-left justify-center">
          <div className="md:hidden text-center w-[100%] flex flex-col items-center justify-center">
            {/* Mobile View:) */}
            <img
              className=""
              src="https://cimg.acharyaprashant.org/images/img-b8b0c9c2-b27e-48f2-ad0e-3a073f9bb690/20/image.jpg"
              alt=""
            />
            <div className="pt-5 flex text-3xl  h-[50%] w-full justify-center items-center font-oswald font-black tracking-tighter">
              <SparklesText text="ACHARYA PRASHANT" />
            </div>

            <GradualSpacing
              className="text-xl font-inter text-center lg:text-4xl italic font-medium -tracking-widest text-black dark:text-white leading-[2.5rem]"
              text="To demolish all that is false"
            />

            <p className="w-[80%] h-[50%] text-left py-7">
              Acharya Prashant is a spiritual teacher rooted in Advait Vedanta.
              His unique spiritual literature is at par with the highest words
              that mankind has ever known. <br /> Equally, one could simply call
              him a teacher beyond any tradition.
            </p>
            <div className="flex gap-3 w-[75%] flex-wrap">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className={`flex flex-wrap items-center px-3 py-1 rounded-full ${tag.color} text-sm font-medium`}
                >
                  <div className="flex items-center">
                    <span className="mr-1.5">{tag.icon}</span>
                    {tag.label}
                  </div>
                </div>
              ))}
            </div>
            <Link to={"/"}>
              <AnimatedShinyText className="mt-5 inline-flex items-center justify-left px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ More</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </Link>
          </div>
          <div className="hidden md:block">
            {/* Desktop View:) */}
            <img
              className=" relative"
              src="https://cimg.acharyaprashant.org/images/img-6d892264-4421-4f05-8cd6-bf7ad2edee91/30/image.jpg"
              alt=""
            />
            <div className="absolute md:top-20 md:left-6 lg:top-28 lg:left-10 z-20">
              <SparklesText
                className="text-3xl md:text-4xl lg:text-5xl font-bold -tracking-wide leading-[4rem] font-sans bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text mb-2"
                text="ACHARYA PRASHANT"
              />

              <GradualSpacing
                className="md:text-2xl font-inter text-center lg:text-4xl italic font-medium -tracking-widest text-black dark:text-white leading-[2.5rem]"
                text="To demolish all that is false"
              />

              <p className="w-[45%] h-[50%] md:py-5 lg:h-[60%]  sm:text-sm md:text-md lg:text-2xl lg:-tracking-tighter">
                Acharya Prashant is a spiritual teacher rooted in Advait
                Vedanta. His unique spiritual literature is at par with the
                highest words that mankind has ever known. <br /> Equally, one
                could simply call him a teacher beyond any tradition.
              </p>
              <div className="flex gap-3 w-[45%] lg:w-[30%] flex-wrap">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className={`flex flex-wrap items-center px-3 py-1 rounded-full ${tag.color} text-sm font-medium`}
                  >
                    <div className="flex items-center">
                      <span className="mr-1.5">{tag.icon}</span>
                      {tag.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link to={"/"}>
                <AnimatedShinyText className="mt-5 inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>✨ More</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full items-center md:justify-left justify-center mt-9">
          <div className="flex flex-col items-center justify-center">
            <div className="pointer-events- bg-gradient-to-b from-gray-100 to-black bg-clip-text text-center text-4xl md:text-5xl font-bold leading-none text-transparent">
              Podcasts & Interviews
            </div>
            <div className="mt-11 w-full">
              <Carousel className="w-full max-w-sm md:max-w-7xl mx-auto ">
                <CarouselContent className="-ml-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="">
                        <Card>
                          <CardContent className="flex items-center justify-center">
                            <img
                              src="https://cimg.acharyaprashant.org/images/img-fbde7e26-12d5-4dbb-b389-37b1fe44a55f/20/image.jpg"
                              alt=""
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <Link to={"/"}>
              <AnimatedShinyText className="mt-5 inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ See All Videos</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </Link>
          </div>
        </section>
        <section className="w-full items-center md:justify-left justify-center mt-14">
          <div className="flex flex-col items-center justify-center">
            <div className="pointer-events- bg-gradient-to-b from-gray-100 to-black bg-clip-text text-center text-4xl md:text-5xl font-bold leading-none text-transparent">
              Our Journey
            </div>
            <p className="w-[80%] md:w-[40%] h-[50%] text-left md:text-center py-7 text-lg">
              Today, the mission of Acharya Prashant has touched the lives of
              tens of millions of individuals. Through his direct contact with
              people and through various internet-based channels, he continues
              to bring clarity to all.
            </p>
            <div className="w-full bg-[#ffedd5] p-12 rounded-md">
              <h1 className="flex text-4xl md:text-6xl items-center gap-4 mt-7 justify-center md:justify-start">
                <FaYoutube color="red" />
                Youtube
              </h1>
              <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row justify-center items-center text-center mt-2">
                <div className="rounded-xl bg-white py-9 w-[85%] h-[150px] md:w-[33%] cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl">
                  <div className="font-bold text-[#cd4628]">61 millions+</div>
                  <div>Subscribers</div>
                </div>
                <div className="rounded-xl bg-white py-9 w-[85%] h-[150px] md:w-[33%] cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl">
                  <div className="font-bold text-[#cd4628]">5.5 billions+</div>
                  <div>Views</div>
                </div>
                <div className="rounded-xl bg-white py-9 w-[85%] h-[150px] md:w-[33%] cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl">
                  <div className="font-bold text-[#cd4628]">100 millions+</div>
                  <div>Watch Hours</div>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#ffedd5] p-12 rounded-md">
              <h1 className="flex text-2xl md:text-6xl items-center gap-4 mt-7 justify-center md:justify-start">
                <SiBookstack color="brown" />
                Repository of Wisdom Content
              </h1>
              <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row justify-center items-center text-center mt-2">
                <div className="rounded-xl bg-white py-9 w-[95%] h-[150px] md:w-[33%] cursor-pointer flex-col items-center justify-center whitespace-nowrap text-2xl md:text-4xl shadow-2xl">
                  <div className="font-bold text-[#cd4628]">150 Books+</div>
                  <div className="text-2xl md:text-4xl">
                    On Life Topics & Scriptures
                  </div>
                </div>
                <div className="rounded-xl bg-white py-9 w-[95%] h-[150px] md:w-[33%] cursor-pointer flex-col items-center justify-center whitespace-nowrap text-2xl md:text-4xl shadow-2xl">
                  <div className="font-bold text-[#cd4628]">
                    10,000 Articles+
                  </div>
                  <div className="text-2xl md:text-4xl">Available for Free</div>
                </div>
                <div className="rounded-xl bg-white py-9 w-[95%] h-[150px] md:w-[33%] cursor-pointer flex-col items-center justify-center whitespace-nowrap text-2xl md:text-4xl shadow-2xl">
                  <div className="font-bold text-[#cd4628]">16,500 Videos</div>
                  <div className="text-2xl md:text-4xl">Available for Free</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full h-fit p-10 gap-5 bg-[#0f172a] text-white text-xl flex flex-col md:flex-row items-start md:items-center md:justify-around">
          <div className="font-light">
            <h1 className="font-bold mb-2">Live Events</h1>
            <div>Gita Samagam</div>
            <div>Vedanta: Basics to Classics</div>
          </div>
          <div className="font-light">
            <h1 className="font-bold mb-2">Contacts</h1>
            <div>support@advait.org.in</div>
            <div>+91 9650585100</div>
            <div>+91 9650585100</div>
          </div>
          <div className="font-light">
            <h1 className="font-bold mb-2">Wisdom Content</h1>
            <div>AP Articles</div>
            <div>AP Books</div>
            <div>Video Series</div>
            <div>Circle</div>
          </div>

          <div className="font-light">
            <h1 className="font-bold mb-2">More</h1>
            <div>About Acharya Prashant</div>
            <div>Invite Him</div>
            <div>Interview Him</div>
            <div>Ghar Ghar Upanishad</div>
            <div>Media and Public Interaction</div>
          </div>

        </footer>
      </main>
    </>
  );
}
