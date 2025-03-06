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
          <li>Tech event Inauguration (9:00 AM - New Building, arena)</li>
          <li>Steel Sprint(1st Round) (12:00 PM - New Building,arena)</li>
          <li>Fastduino (10:00 AM - New Building, Hall 3)</li>
          <li>Guess The Logo (11:00 AM - New Building, Room 401, 402)</li>
          <li>Hackathon(Start) (6:00 PM - New Building, Hall 3)</li>
          <li>Robo Stricker (10:00 AM - New Building, arena)</li>
          <li>d bug-it (2:00 PM - New Building, Hall 3)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Cultural Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Logo Design (10:00 AM - Dome)</li>
          <li>Flash Mob (4:30 PM - SBI Front)</li>
          <li>Debonair (7:30 PM - Stage)</li>
          <li>Heritage Dance (5:00 PM - Stage)</li>
          <li>Nukkad (6:30 PM - Mushi Square)</li>
          <li>Grafitti (2:00 PM - Old Building)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Fun Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Gully Cricket (8:00 AM - MP Memorial Stadium)</li>
          <li>Mystery Room (10:00 AM - Old Building,Room 204,205)</li>
          <li>Digital Duel (Online)</li>
          <li>Brust The Balloon (2:00 PM - Dome)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Literary Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
            <li>Doodling (8:00 AM - New Building, Room 101)</li>
            <li>Wordless Wonders (11:00 AM - New Building Room 103)</li>
            <li>Wordsmith Maze (9:00 AM - Edusat Room)</li>
            <li>Poets Beat (2:00 PM - New Building Room 101)</li>
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
          <li>Steel Sprint(Final Round) (9:00 AM - New Building, arena)</li>
          <li>DronaMaster (10:00 AM - MP Memorial Stadium)</li>
          <li>Steel Push (12:00 PM - New Building, arena)</li>
          <li>Hackathon(End) (8:00 AM - New Building, Hall 3)</li>
          <li>Ideathon (10:00 AM - New Building, Hall 3)</li>
          <li>Ipl Auction (11:00 AM - New Building, Room 401, 402)</li>
          <li>Code Craft (3:00 PM - New Building, Hall 3)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Cultural Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>AI Art Competition (Online)</li>
          <li>Merchandise Design (Online)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Fun Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Scavenger Hunt (11:00 AM - New Building)</li>
          <li>Rubiks Cube (9:00 AM - New Building, Room 204,205)</li>
          <li>Mystery Room (10:00 AM - Old Building,Room 204,205)</li>  
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Literary Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Spell Bee (11:00 AM - Production Seminar Hall)</li>
          <li>Mun (9:00 AM - Edusat Room)</li>
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
          <li>Blind Code (2:00 PM - New Building, Hall 3)</li>
          <li>SteelPush(Final Round) (2:00 PM - New Building, arena)</li>
          <li>Tech quiz (10:00 AM - New Building, Room 401, 402)</li>
          <li>CAD-E-THON(11:00 AM - New Building, Hall 3)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Cultural Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
           <li>Choreo Clash (7:30 PM - Stage)</li> 
           <li>Nach Baliye (6:30 PM - Stage)</li>
           <li>Photo Of The Day (Online)</li>
           <li>Short Film Competition  (10:00 AM)</li>
        </ul>


        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Fun Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Destiny Duo (9:00 AM - New Building,Room 103)</li>
          <li>Paper Dance (02:00 PM - Dome)</li>
          <li>Tug of War (8:00 AM - MP Memorial Stadium)</li>
        </ul>

        <h3 className="text-lg md:text-2xl font-bold text-blue-600">Literary Events</h3>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Quiz (2:00 PM Productiion Seminar Hall)</li>
          <li>Identity insight (11:00 AM New buiding Room 103)</li>
          <li>MUN (9:00 AM Edusat Room )</li>
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