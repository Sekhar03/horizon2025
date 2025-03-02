import { HeadLine } from "@/components/global/HeadLine";
import { WidgetWrapper } from "@/components/global/WidgetWrapper";
import GlassMenu from "@/components/style/GlassMenu";
// import ScrollReveal from "@/components/style/ScrollReveal";
import TextPressure from "@/components/style/TextPressure";

//config for events
const funEvents = [
  {
    number: 1,
    text: "Rubik's Cube",
    image: "/images/cars/ferrari.png",
    posterImage: "/images/posters/rubiks_cube.jpg",
    description: "Test your speed, skill, and problem-solving abilities in this exciting Rubik’s Cube challenge! Participants will compete to solve a Rubik’s Cube in the shortest time possible. Whether you’re a beginner or an expert, this event is all about fun, focus, and fast fingers!",
    registerButtonTitle: "Register",
    rulebookLink: "https://docs.google.com/document/d/1Vwbr1jV9CTfypuR7AR-wiNVO5ny2PsVq/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true",
    registerButtonLink: "https://forms.gle/zPSfcBeTfVFJDbqo9"
  },
  {
    number: 2,
    text: "Scavenger Hunt",
    image: "/images/cars/redbull.png",
    posterImage: "/images/posters/scavengers_hunt.jpg",
    description: "A scavenger hunt game is an exciting adventure where participants are given a list of items or clues to find within a specific area or environment. Players work individually or in teams to search for the hidden objects, complete challenges, or solve puzzles. The hunt can be based on a particular theme, such as nature, history, or a holiday, and can be played indoors or outdoors.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://docs.google.com/forms/d/e/1FAIpQLSfaIENESEc8Oczj6Nmc2GAIaYFpxe6cu1N-vJQbOjkU1eAu1Q/viewform?usp=header",
    rulebookLink: "https://docs.google.com/document/d/1WFMvvQSP93U2v4l8SO97M7ywQKGV00yf/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 3,
    text: "Paper Dance",
    image: "/images/cars/bwt.png",
    posterImage: "/images/posters/paper_dance.jpg",
    description: "Paper Dance is a fun and engaging game that requires participants to dance while standing on a piece of paper without stepping outside of its boundaries. As the game progresses the paper is folded in half. The last pair standing on the smallest piece of paper wins. ",
    registerButtonTitle: "Register",
    rulebookLink: "https://docs.google.com/document/d/1W5Krk_eLFlzu0cKMAz9_Ms3U-gdjQ-If/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true",
    registerButtonLink: "https://forms.gle/cZnu417h4DUTvEQr7"
  },
  {
    number: 4,
    text: "Mystery Room",
    image: "/images/cars/mclaren.png",
    posterImage: "/images/posters/mystery_room.jpg",
    description: "To play a mystery room with two rooms and escape in one hour, start by searching the first room for clues, hidden objects, and puzzles. Work with your team to solve riddles, unlock boxes, and find keys or codes that may open doors or compartments. Once you gather enough clues, you’ll likely find a way to unlock the second room. Move quickly but carefully, as time is limited. In the second room, expect more challenging puzzles or a final task to complete the mission. Use logical thinking, teamwork, and any hints provided by the game master if you get stuck. Your goal is to solve all puzzles and escape within 60 minutes!",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/HDcJ3DGWAJpL2JRf7",
    rulebookLink: "https://docs.google.com/document/d/1WDwV5L2f_mhh9Wb_pk5sIN53wdvzb0H6/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 5,
    text: "Digital Duel",
    image: "/images/cars/mercedes.png",
    posterImage: "/images/posters/digital_duel.jpg",
    description: "Get ready to dominate the battlefield! Join us at HORIZON Techno-Cultural Fest, hosted by IGIT SARANG, for an electrifying BGMI showdown. Calling all BGMI enthusiasts to showcase their skills and claim victory in our intense competition. Bring your A-game, strategize your moves, and aim for the top spot! Compete against the best, forge alliances, and etch your name in gaming glory. Don't miss out on this adrenaline-packed event. Register now and let the battle begin!",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "https://docs.google.com/document/d/1VuVyneNSndulK1LO_QHrURK49JdqGp20/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 6,
    text: "Gully Cricket",
    image: "/images/cars/williams.png",
    posterImage: "/images/posters/gully_cricket.jpg",
    description: "The game of cricket is filled with emotion and excitement. Emotion being constant but enhancing the excitement, this form of cricket is brought for you all to your gully (narrow street) replacing the pitch on the ground. The rules are always improvised, however, we have compiled a list of those rules that we have seen being used most often. So, make your team, take part, play, and make your team a winner of the gully cricket.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/YgJ78UK4xyQssbhYA",
    rulebookLink: "https://docs.google.com/document/d/1VwWvTcW38mSIthNMRuxIDTWeoMasH55b/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 7,
    text: "Destiny Duo",
    image: "/images/cars/alphatauri.png",
    posterImage: "/images/posters/destiny_duo.jpg",
    description: "The objective of DESTINY DUO is to create a fun, engaging, and relaxed environment for individuals who may not know each other well. It aims to facilitate interaction, encourage conversation, and provide an opportunity for participants to discover common interests and connections in a light hearted setting. The event seeks to break the ice, foster a sense of comfort, and potentially spark a connection between the participants, all while ensuring a positive and enjoyable experience for everyone involved. Followed by a compatibility check, they could find their destined one.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/XVpiGABdVrhdW7hT7",
    rulebookLink: "https://docs.google.com/document/d/1WAza33gJBJ2QGdad-kRgQOLS5C8_xI4E/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 8,
    text: "Burst The Balloon",
    image: "/images/cars/alfaromeo.png",
    posterImage: "/images/posters/burst_the_balloon.jpg",
    description: "Burst the Balloon is an exciting, fast-paced game where participants compete to pop the most balloons within a specified time frame. The event is designed to test agility, coordination, and teamwork while offering a fun and lively atmosphere for participants and spectators alike.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/QVZKY6n2VfMc43nt5",
    rulebookLink: "https://docs.google.com/document/d/1W144zmjPx2D0YMFYdj6O1AAOs7WwSWqI/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 9,
    text: "Tug Of War",
    image: "/images/cars/renault.png",
    posterImage: "/images/posters/tug_of_war.jpg",
    description: "A tug of war is a game where two teams pull on opposite ends of a rope, with the goal being to pull the other team across a designated center line, essentially winning by dragging the opposing team to their side; it's a test of strength and teamwork, where the team that pulls the rope furthest towards them wins.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://docs.google.com/forms/d/e/1FAIpQLSfdDreNmsZ5BuuHZgiyb23KEh5ihr14ZSjcsQbx8EH0yR6PxA/viewform?usp=sharing",
    rulebookLink: "https://docs.google.com/document/d/1VyaoHhRrUopl6fRr8bNPu_BU8g7-KvrJ/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  }
]

const techEvents = [
  {
    number: 1,
    text: "Steel Push",
    image: "/images/cars/mercedes.png",
    posterImage: "/images/posters/steel_push.jpg",
    description: "Steel push is an electrifying event where participants design and build bots to compete in a strategic battle of strength and agility. The objective is to push the opponent's bot out of the circular arena while adhering to the competition's rules.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/jFDysWuEsxaw3yrw6",
    rulebookLink: "https://docs.google.com/document/d/1jRlZ_9zwj0_31OLHflZ3J3ebV4is-D7f/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 2,
    text: "Robo Striker",
    image: "/images/cars/alphatauri.png",
    posterImage: "/images/posters/robo_striker.jpg",
    description: "RoboStrikers is an exciting event where participants design and program robots to compete in a fast-paced soccer match. The goal is to score points by manoeuvring the ball into the opponent's net while showcasing innovation, precision, and teamwork.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/EumaSeLcaDTWuTLy5",
    rulebookLink: "https://docs.google.com/document/d/1rP8qzJbvwX95ME5xfQr312FabQJ86boQ/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 3,
    text: "Blind Code",
    image: "/images/cars/mclaren.png",
    posterImage: "/images/posters/blind_code.jpg",
    description: "Blind Code is a unique coding competition where participants are challenged to write code without seeing the screen. The event tests participants' coding skills, problem-solving abilities, and creativity in a fun and engaging way. Participants will be given a set of coding challenges and will have to write code based on verbal instructions provided by the event organizers.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/fa2UMwJQmVuAaY869",
    rulebookLink: "https://drive.google.com/file/d/1xaHbGP-Mma1aNsghYNnfzGxUbDFEck9x/view?usp=drive_link"
  },
  {
    number: 4,
    text: "Steel Sprint",
    image: "/images/cars/haas.png",
    posterImage: "/images/posters/steel_sprint.jpg",
    description: "Steel sprint will require the participating teams to build a manually controlled robot that must clear a trail full of obstacles.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/Jedf642KEnZkeRMS6",
    rulebookLink: "https://docs.google.com/document/d/1GM5VrCyjcHVcNEwi87Y0EyNdKDUVziNL/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 5,
    text: "Hackathon",
    image: "/images/cars/bwt.png",
    posterImage: "/images/posters/hackathon.jpg",
    description: "Welcome to the 12-Hour Hackathon! This event aims to bring together creative minds to develop innovative solutions in a collaborative environment. Please read through the following rules and guidelines to ensure a smooth and enjoyable experience for all participants.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/8A7QHJr2a6MGD5ww8",
    rulebookLink: "https://drive.google.com/file/d/1Pp3Xb6zwk3eCysWUcVgpq1wDzXgXkClO/view?usp=drive_link"
  },
  {
    number: 6,
    text: "Code Craft",
    image: "/images/cars/williams.png",
    posterImage: "/images/posters/code_craft.jpg",
    description: "Repliit is a competitive coding event where participants will be given a design, and they must replicate it through code as accurately as possible within the given time limit. The event tests coding skills, UI/UX implementation, and attention to detail.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/EQ5LJLmvbMoVoS6U9",
    rulebookLink: "https://drive.google.com/file/d/1g_LG5yP2GhvCZbeg56JfA9XuK9qk8khj/view?usp=drive_link"
  },
  {
    number: 7,
    text: "Ideathon",
    image: "/images/cars/alfaromeo.png",
    posterImage: "/images/posters/ideathon.jpg",
    description: "The Ideathon is an offline innovation challenge where participants collaborate in teams to brainstorm, design, and present innovative solutions to real-world problems.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/JSqUkjDgMDi3vKce6",
    rulebookLink: "https://drive.google.com/file/d/1CkTnVVFzzkNmRhRyy1AltpfVBFQA3Z4P/view?usp=drive_link"
  },
  {
    number: 8,
    text: "Cad-A-Thon",
    image: "/images/cars/renault.png",
    posterImage: "/images/posters/cadathon.jpg",
    description: "The CAD-E-THON is a competitive event where participants showcase their CAD modeling skills under a strict time limit of 30 minutes. The goal is to create the most accurate and creative design based on the given problem statement.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/YwqmNHfdnxVMkueY9",
    rulebookLink: "https://docs.google.com/document/d/1GLcxTCn6Ia_qomJBVdRq7gin4BaRokje/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 9,
    text: "Debug It",
    image: "/images/cars/redbull.png",
    posterImage: "/images/posters/tug_of_war.jpg",
    description: "De-Bug It is a competitive coding event where participants will be given error-ridden code snippets. The objective is to identify and fix the errors. If the corrected code passes all the test cases successfully, the participant will be declared the winner.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/si7HtAGtRyNxo1BY8",
    rulebookLink: "https://drive.google.com/file/d/16YQ0l4Bto7_LIyMI2NrDTCUUsCIONKK0/view?usp=drive_link"
  },
  {
    number: 10,
    text: "Dron-A-Master",
    image: "/images/cars/ferrari.png",
    posterImage: "/images/posters/drona_master.jpg",
    description: "Drone competitions blend the thrill of racing with the cutting-edge advancements in robotics and autonomous technologies. They offer a unique sport where drone pilots demonstrate their skill in piloting and programming.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/zbJUwVoZg96Qqw659",
    rulebookLink: "https://docs.google.com/document/d/196XpjiATaraR6wF3NUUln3uQKB1FGblS/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 11,
    text: "Fast Duino",
    image: "/images/cars/mclaren.png",
    posterImage: "/images/posters/fast_duino.jpg",
    description: "Welcome to Round 1 of the Arduino Competition! In this challenge, participants will use Arduino to create a given particular pattern of LED lighting. This tests creativity, coding skills, and understanding of Arduino programming.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/ADJpYQVyMb5jUZeu9",
    rulebookLink: "https://docs.google.com/document/d/1zo0DOiA2QiTZ2_Y1CQmmXzcHjYBE5nE5/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 12,
    text: "Group Debate",
    image: "/images/cars/bwt.png",
    posterImage: "/images/posters/group_debate.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 13,
    text: "IPL Auction",
    image: "/images/cars/redbull.png",
    posterImage: "/images/posters/ipl_auction.jpg",
    description: "Welcome to the IPL Auction Horizon 2025",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/zGTch2gmZ6fQiatr9",
    rulebookLink: "https://drive.google.com/file/d/1oA8LpagIkvXEaOViuoaM1EyyjPmI6afP/view?usp=drive_link"
  },
  {
    number: 14,
    text: "Logo Quest",
    image: "/images/cars/haas.png",
    posterImage: "/images/posters/logo_quest.jpg",
    description: "Guess The Logo is a fun and engaging event where participants will be shown a series of logos and will have to identify the brand or company associated with each logo. The event tests participants' knowledge of popular brands, logos, and corporate identities.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/kfZJdx9YQs71YjDc9",
    rulebookLink: "https://docs.google.com/document/d/1_bNFhr8ScFhAECYXJechXqVk9Zy8sdNM/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 15,
    text: "Tech Quiz",
    image: "/images/cars/alphatauri.png",
    posterImage: "/images/posters/tech_quiz.jpg",
    description: "The Tech Quiz in IGIT Horizon is designed to enhance students' technical skills and knowledge through a series of rounds, each featuring a set of questions. There will be two rounds in the competition.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/L9gqVZVRM71YQqbJ8",
    rulebookLink: "https://docs.google.com/document/d/1d2RSGYGB4ZCC681HIM5oCjfTtNwm6IR3/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  }
]

const culturalEvents = [
  {
    number: 1,
    text: "AI Art",
    image: "/images/cars/mclaren.png",
    posterImage: "/images/posters/ai_art.jpg",
    description: "It would be an AI Art Competition using Generative AI Bot, by which the art would be done only by using a prompt. The Competition would be of 24 hrs, anyone can take part in the competition within the stipulated time and the competition would be completely online.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/FHCijmBRYoVCSVq58",
    rulebookLink: "https://docs.google.com/document/d/1qSD0dRCVPHFfdsm2VMmdxIn0uHOHQVvY/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 2,
    text: "Choreo Clash",
    image: "/images/cars/redbull.png",
    posterImage: "/images/posters/choreo_clash.jpg",
    description: "Where Rhythm Meets Showdown! Join us for an electrifying dance spectacle as talented groups collide in an epic battle of creativity and choreography. Witness the fusion of diverse dance styles, intense energy and unparalleled entertainment in this ultimate Group Dance Battle. Get ready to be mesmerized by the beats, moves, and artistry – it's not just a clash, it's a choreographic masterpiece!",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/QkS33Adt61wJkRW56",
    rulebookLink: "https://docs.google.com/document/d/1cb_wWnLhUklr4GTbttcQnqYaHkURoU97/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 3,
    text: "Debonair",
    image: "/images/cars/ferrari.png",
    posterImage: "/images/posters/debonair.jpg",
    description: " During the event, participants will have the opportunity to showcase their creativity and fashion sense by designing and creating their own outfits. Participants may choose to create their own outfits using recycled materials, sustainable fabrics, or other creative materials. Participants may also choose to showcase traditional or modern fashion trends, highlighting their unique cultural backgrounds or personal style.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/6TAxiWRxY636Eqi17",
    rulebookLink: "https://docs.google.com/document/d/14OAZ09QDRDgaPbp1Nted7kcvBiBcIB-i/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 4,
    text: "FlashMob",
    image: "/images/cars/mercedes.png",
    posterImage: "/images/posters/falsh_mob.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 5,
    text: "Flash Film",
    image: "/images/cars/renault.png",
    posterImage: "/images/posters/flash_film.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/fVBSjiNW5TNMriaZ9",
    rulebookLink: "https://docs.google.com/document/d/15ngRPXhrK2UPlva_ZjmReFCA70mee4Ke/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 6,
    text: "Heritage Dance",
    image: "/images/cars/bwt.png",
    posterImage: "/images/posters/heritage_dance.jpg",
    description: " Immerse yourself in the rich tapestry of culture and tradition with our Heritage Dances event! Experience the vibrant rhythms and captivating movements passed down through generations. From the graceful elegance of the waltz to the spirited energy of the samba, join us for an unforgettable celebration of cultural heritage through dance.",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "https://docs.google.com/document/d/1OTX0cYxlcMh-yxRvgvN3-wuyi_ObrtHZ/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 7,
    text: "Logo Craft",
    image: "/images/cars/alfaromeo.png",
    posterImage: "/images/posters/logo_craft.jpg",
    description: " Calling all designers and creative minds! Participate in our Logo Design Competition and shape the visual identity of our Event. The Competition would be of 24 hrs, participants have to submit their designs within the stipulated time and the competition would be completely online.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/dhcei2TV69X2DGcMA",
    rulebookLink: "https://docs.google.com/document/d/19x8Pll0YlrvembDEdSQR_RFsKeDOtDf3/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 8,
    text: "Merchandise Design",
    image: "/images/cars/haas.png",
    posterImage: "/images/posters/merchandise.jpg",
    description: "Create visuals that resonate with our theme and audience. The Competition would be of 24 hrs, participants within the stipulated time and the competition would be completely online.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/Z9FmBtU46iY9JQhC9",
    rulebookLink: "https://docs.google.com/document/d/1HVntRD3Pejzsv_LA8YQZ1IU1R6PLACBc/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 9,
    text: "Nach Baliye",
    image: "/images/cars/renault.png",
    posterImage: "/images/posters/nach_baliye.jpg",
    description: " Nach Baliye is the ultimate competition of dance, where duo performers showcase their chemistry and talent on the floor. With stunning moves and electrifying performances, immerse yourself in the magic of love and rhythm & they will be judged accordingly. Join us for an unforgettable journey of dance, emotion, and entertainment at Nach Baliye!",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/qesfLBZNFWp1XhB46",
    rulebookLink: "https://docs.google.com/document/d/1Uuqhv5HSst1Ztnv96pvpEiNNdaS7RKT6/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 10,
    text: "Photo Of The Day",
    image: "/images/cars/alphatauri.png",
    posterImage: "/images/posters/photo_of_the_day.jpg",
    description: "Capture the essence of HORIZON 2025 through your lens in our Photo of the Day Competition! By tagging our Instagram Account. The event will continue for 3 days and the winners has been announced for each day.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/XUweXLA8tVrGofGJ8",
    rulebookLink: "https://docs.google.com/document/d/1OETKRIRMlenyiqoxgsEJ4EJZLvUTef34/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 11,
    text: "Urban Art",
    image: "/images/cars/mclaren.png",
    posterImage: "/images/posters/urban_art.png",
    description: "Express your artistic flair in our Graffiti Making Competition! Transform blank canvases into vibrant urban masterpieces as you unleash creativity and capture the spirit of the streets. Here student have to create graffiti on based on our theme within the stipulated time , and the competition would be completely offline infront of dome.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/1praSF8hz2epKQqF7",
    rulebookLink: "https://docs.google.com/document/d/1fgu8u2SVIXSg-piBOh2c_Pzvmo8-XnXu/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 12,
    text: "Nukkad Natak",
    image: "/images/cars/haas.png",
    posterImage: "/images/posters/nukkad.jpg",
    description: "The event can be structured with participants working together to create a unique and memorable performance. Participants will showcase their acting skills, stage presence, creativity, and overall performance.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/1praSF8hz2epKQqF7",
    rulebookLink: "https://docs.google.com/document/d/1NfKIBhx7x0YWLWVQ5yU5mx6jAVxsNviO/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  }
]

const literaryEvents = [
  {
    number: 1,
    text: "Doodling",
    image: "/images/cars/bwt.png",
    posterImage: "/images/posters/doodling.jpg",
    description: "Doodling is an elegant form of spontaneous artistic expression, where the mind effortlessly weaves simple sketches into intricate designs. Often born from idle moments, doodles are more than just scribbles; they are a silent dialogue between the hand andthe imagination.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/8NpAomrrM6yPJA3S6",
    rulebookLink: "https://drive.google.com/file/d/1sI5oy-IoL4GhBUhSCqJkdXz_eBxhbiGs/view?usp=drive_link"
  },
  {
    number: 2,
    text: "Identity Insight",
    image: "/images/cars/mclaren.png",
    posterImage: "/images/posters/identity_insight.jpg",
    description: "Identity Insight is an exciting and fast-paced game where participants challenge their knowledge of popular brands, famous novelists, dialogues, and characters by identifying certain images displayed on the screen. Players are shown various pictures and their task is to recognize what they represent, all within a set time limit. It’s a fun test of visual recognition, brand awareness, dialogue learning, movie quest and quick thinking.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/jWT2zwi6nVh1adrY8",
    rulebookLink: "https://drive.google.com/file/d/1ZTasWqHg-rHtxZDC18YBLwmje6nmpoSL/view?usp=drive_link"
  },
  {
    number: 3,
    text: "MUN",
    image: "/images/cars/ferrari.png",
    posterImage: "/images/posters/mun.jpg",
    description: "Model United Nations (MUN) is a simulation of the UN where students act as delegates, debate global issues, draft resolutions, and develop diplomacy, public speaking, and negotiation skills. It’s an intellectual arena where ideas shape policies, and leadership meets diplomacy. It is more than just debate—it’s a platform where future changemakers refine their vision, build alliances, and craft impactful resolutions, all while experiencing the essence of international diplomacy.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/LzB82sPTKkBph9w2A",
    rulebookLink: "https://drive.google.com/file/d/1kGbGZAZ_nIKsqkHPAZHtmoElTfxFt_O_/view?usp=drive_link"
  },
  {
    number: 4,
    text: "Poets Beat",
    image: "/images/cars/mercedes.png",
    posterImage: "/images/posters/poets_beat.jpg",
    description: "Poet's Beat is a dynamic and powerful form of performance poetry that combines raw emotion, rhythm, and storytelling. In this energetic competition, poets take the stage to deliver their verses, weaving together themes of social issues, personal experiences, and creative expression. Each performance is a blend of spoken word, theatrical delivery, and lyrical prowess, captivating the audience with both the message and the performance itself.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/RmfiMev8fv2DQwib8",
    rulebookLink: "https://drive.google.com/file/d/1tSi1TKJblHCmJ3saB2mrrV-cY3nEOz1H/view?usp=drive_link"
  },
  {
    number: 5,
    text: "Spell Bee",
    image: "/images/cars/redbull.png",
    posterImage: "/images/posters/spell_bee.jpg",
    description: "A Spelling Bee is a distinguished showcase of linguistic prowess, where intellect, precision, and composure converge in a thrilling test of mastery over words. It is more than just a competition—it is a celebration of language, discipline, and the relentless pursuit of excellence.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/ZUsTfgtdpbXvFWbr5",
    rulebookLink: "https://drive.google.com/file/d/1-X_KAxvE3qCkJqxzDTQpljfaNNF_YqeK/view?usp=drive_link"
  },
  {
    number: 6,
    text: "Trivia Quiz",
    image: "/images/cars/renault.png",
    posterImage: "/images/posters/trivia_quiz.jpg",
    description: "The Trivia Quiz is an intellectually stimulating event that challenges participants' knowledge across various subjects, from history and science to literature and current affairs.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/Z4BDyYoet6tRyq7r5",
    rulebookLink: "https://drive.google.com/file/d/1tnqdqBwygCXPJOmzQD77lmz_h6G78bV9/view?usp=drive_link"
  },
  {
    number: 7,
    text: "Wordless Wonders",
    image: "/images/cars/alfaromeo.png",
    posterImage: "/images/posters/wordless_wonder.jpg",
    description: "Wordless Wonders is a fun and engaging competition that combines the thrill of charades with the magic of literature. In this game, participants act out scenes, characters, or famous literary works, relying solely on gestures and expressions—no words allowed!",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/LzB82sPTKkBph9w2A",
    rulebookLink: "https://drive.google.com/file/d/1w10uQL46Du1x3WDPHhlFoBmY_xGMegVx/view?usp=drive_link"
  },
  {
    number: 7,
    text: "Wordless Wonders",
    image: "/images/cars/williams.png",
    posterImage: "/images/posters/WORDSMITHS MAZE.png",
    description: "Wordless Wonders is a fun and engaging competition that combines the thrill of charades with the magic of literature. In this game, participants act out scenes, characters, or famous literary works, relying solely on gestures and expressions—no words allowed! The challenge lies in translating iconic moments, novels, or characters into actions, allowing teams or individuals to guess the correct answer based on their knowledge of literature. This event celebrates creativity, storytelling, and the ability to convey meaning without speaking, all while adding a playful twist to beloved literary classics.Ultimately, it is a refined and playful tribute to the world of literature, inviting participants and audiences alike to experience the written word in a whole new light.",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/ifAUky2soAPaphyBA",
    rulebookLink: "https://drive.google.com/file/d/1w10uQL46Du1x3WDPHhlFoBmY_xGMegVx/view?usp=drive_link"
  },
]



const Events = () => (

  <WidgetWrapper>
    <HeadLine title="Events that are Funtastic" subtitle="Horizon has been a astounding festival and these events are the reason why. We've got a little something for everyone." titleClass="text-brand text-3xl sm:text-5xl"/>

  <TextPressure
    text="Tech!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={26}
  />

<GlassMenu 
      items={techEvents}
    />

<TextPressure
    text="Literary!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={26}
  />

<GlassMenu 
      items={literaryEvents}
    />

<TextPressure
    text="Fun!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={26}
  />

  <GlassMenu 
      items={funEvents}
    />

<TextPressure
    text="Cultural!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={26}
  />

<GlassMenu 
      items={culturalEvents}
    />

  {/* <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={50}
  textClassName='text-brand text-center'
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal> */}

  </WidgetWrapper>
);

export default Events;
