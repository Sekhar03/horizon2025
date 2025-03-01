"use client"

import { HeadLine } from "@/components/global/HeadLine";
import { WidgetWrapper } from "@/components/global/WidgetWrapper";
import { Timeline } from "@/components/style/Timeline";

const data = [
  {
    title: "7th March 2025",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Technical Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>CAD-E-THON (10:00 AM - New Building)</li>
          <li>TechQuiz (10:00 AM - New Building, Hall 3)</li>
          <li>Guess The Logo (11:00 AM - New Building, Room 401, 402)</li>
          <li>Hackathon (2:00 PM - New Building, Hall 3)</li>
          <li>BlindCode (2:00 PM - New Building, Room 401, 402)</li>
          <li>Code Craft (3:00 PM - New Building, Hall 3)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Cultural Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Flash Mob (4:30 PM - SBI Front)</li>
          <li>Heritage Dance (5:00 PM - Stage)</li>
          <li>IPL Auction (6:00 PM - New Building, Hall 3)</li>
          <li>Nukkad (6:30 PM - Mushi Square)</li>
          <li>Choreo Clash (7:30 PM - Stage)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Fun Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Scavenger Hunt (10:00 AM - Dome)</li>
          <li>Mystery Room (11:00 AM - Educate Room)</li>
          <li>AI Art Competition (Online)</li>
          <li>Digital Duel (Online)</li>
          <li>Merchandise Design (Online)</li>
          <li>Tug Of War (2:00 PM - Production Seminar Hall)</li>
          <li>Paper Dance (2:00 PM - Auditorium)</li>
          <li>Brust The Balloon (2:00 PM - Dome)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Literary Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Identity Insight (11:00 AM - Production Seminar Hall)</li>
          <li>Mun (9:00 AM - Educate Room)</li>
          <li>Spell Bee (2:00 PM - Production Seminar Hall)</li>
        </ul>
        
        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Workshops</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Workshop and Training on EV (5 hours - Room No. 102)</li>
        </ul>
      </div>
    ),
  },
  {
    title: "8th March 2025",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Technical Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>SteelSprint (10:00 AM - New Building)</li>
          <li>DronaMaster (10:00 AM - MP Memorial Stadium)</li>
          <li>Ideathon (10:00 AM - New Building, Hall 3)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Cultural Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Nachbaliye (6:30 PM - Stage)</li>
          <li>Debonair (7:30 PM - Stage)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Fun Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Rubik&apos;s Cube (9:00 AM - Educate Room)</li>
          <li>Logo Design (10:00 AM - Dome)</li>
          <li>Doodling (11:00 AM - New Building, Room 103)</li>
          <li>Grafitti (2:00 PM - Old Building)</li>
          <li>Photo Of The Day (Online)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Literary Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Poets Beat (11:00 AM - Educate Room)</li>
          <li>Wordsmith Maze (9:00 AM - Production Seminar Hall)</li>
          <li>Trivia Quiz (2:00 PM - New Building, Room 204, 205)</li>
        </ul>
        
        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Workshops</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Workshop Matlab (9:00 AM - Computer Centre)</li>
          <li>Workshop and Training on EV (5 hours - Room No. 102)</li>
        </ul>
      </div>
    ),
  },
  {
    title: "9th March 2025",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Technical Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>RoboStriker (11:00 AM - New Building)</li>
          <li>SteelPush (10:00 AM - New Building, Hall 3)</li>
          <li>D Bug it (2:00 PM - New Building, Room 401, 402)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Fun Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Gully Cricket (8:00 AM - MP Memorial Stadium)</li>
          <li>Destiny Duo (9:00 AM - New Building)</li>
          <li>Short Film Competition (10:00 AM)</li>
          <li>Wordless Wonders (8:00 AM - Dome)</li>
        </ul>
        
        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Workshops</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Workshop and Training on EV (5 hours - Room No. 102)</li>
        </ul>
        
        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Closing Ceremony</h3>
        <p className="text-gray-300">Evening - Details to be announced</p>
      </div>
    ),
  }
];

export const Testimonials = () => {
    return (
        <WidgetWrapper>
            <HeadLine title="Horizon 2025 Event Timeline" />
            <Timeline data={data} />
        </WidgetWrapper>
    );
};