"use client"

import { HeadLine } from "@/components/global/HeadLine";
import { WidgetWrapper } from "@/components/global/WidgetWrapper";
import { Timeline } from "@/components/style/Timeline";

const data = [
  {
    title: "7th March 2025",
    content: (
      <div className='space-y-4'>

        <h3 className='text-lg md:text-2xl font-bold text-blue-600'>Opening Ceremony</h3>
        <p className='text-gray-300'>10:00 AM at Gopabandhu Auditorium</p>

        <h3 className='text-lg md:text-2xl font-bold text-blue-600'>Inauguration of Horizon-2K24</h3>
        <p className='text-gray-300'>09:00 AM at e-Learning Center (EDUSAT), Old Building</p>

        <h3 className='text-lg md:text-2xl font-bold text-blue-600'>Literary Events</h3>
        <ul className='list-disc pl-5 text-gray-300'><li>MUN</li><li>Doodling</li><li>Wordless Wonders</li><li>Poet's Beat</li><li>Spelling Bee</li><li>Trivia Quiz</li><li>Wordsmith Maze</li></ul>

        <h3 className='text-lg md:text-2xl font-bold text-blue-600'>Technical Events</h3>
        <ul className='list-disc pl-5 text-gray-300'><li>Steel Sprint</li><li>Drone Workshop</li><li>BlindCode</li><li>SteelPush</li><li>Ideathon</li><li>Hackathon</li><li>RoboStrikers</li></ul>

        <h3 className='text-lg md:text-2xl font-bold text-blue-600'>Fun Events</h3>
        <ul className='list-disc pl-5 text-gray-300'><li>Gully Cricket</li><li>Burst the Balloons</li><li>Mystery Room</li><li>Digital Duel</li></ul>

        <h3 className='text-lg md:text-2xl font-bold text-blue-600'>Cultural Events</h3>
        <ul className='list-disc pl-5 text-gray-300'><li>Logo Design</li><li>Graffiti</li><li>Nukkad</li><li>Flashmob</li><li>Debonair</li><li>Heritage Dances</li></ul>
      </div>
    ),
  },
  {
    title: "8th March 2025",
    content: (
      <div className="space-y-4">

        <h3 className='text-lg md:text-2xl font-bold text-blue-600'>Technical Events</h3>
        <ul className='list-disc pl-5 text-gray-300'><li>CodeCraft</li><li>Dron-a-Master</li></ul>

        <h3 className='text-lg md:text-2xl font-bold text-blue-600'>Fun Events</h3>
        <ul className='list-disc pl-5 text-gray-300'><li>Rubik's Cube</li><li>Paper Dance</li></ul>

        <h3 className='text-lg md:text-2xl font-bold text-blue-600'>Cultural Events</h3>
        <ul className='list-disc pl-5 text-gray-300'><li>Merchandise Design</li><li>AI Art</li></ul>

        <h2 className="text-gray-500 text-xl font-semibold">And many more ....</h2>
      </div>
    ),
  },
  {
    title: "9th March 2025",
    content: (
      <div className="space-y-4">

        <h3 className='text-lg md:text-2xl font-bold text-blue-600'>Fun Events</h3>
        <ul className='list-disc pl-5 text-gray-300'><li>Tug Of War</li><li>Digital Duel</li></ul>

        <h3 className='text-lg md:text-2xl font-bold text-blue-600'>Cultural Events</h3>
        <ul className='list-disc pl-5 text-gray-300'><li>Flash Film</li><li>Photo of the Day</li><li>Nach Baliye</li><li>Choreo Clash</li></ul>
      </div>
    ),
  },
  {
    title: "9th March 2025",
    content: (
      <div>
        <h3 className='text-lg font-bold text-blue-600'>Standup Comedy & DJ Night</h3>
        <p className='text-gray-700'>06:00 PM to 11:00 PM</p>
      </div>
    ),
  }
];

export const Testimonials = () => {
    return (
        <WidgetWrapper>
            <HeadLine title="Event Timeline" />
            <Timeline data={data} />
        </WidgetWrapper>
    );
};
