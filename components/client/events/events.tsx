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
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    rulebookLink: "https://docs.google.com/document/d/1Vwbr1jV9CTfypuR7AR-wiNVO5ny2PsVq/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true",
    registerButtonLink: "https://forms.gle/zPSfcBeTfVFJDbqo9"
  },
  {
    number: 2,
    text: "Scavenger Hunt",
    image: "/images/cars/redbull.png",
    posterImage: "/images/posters/scavengers_hunt.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/events",
    rulebookLink: "/events"
  },
  {
    number: 3,
    text: "Paper Dance",
    image: "/images/cars/bwt.png",
    posterImage: "/images/posters/paper_dance.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    rulebookLink: "https://docs.google.com/document/d/1W5Krk_eLFlzu0cKMAz9_Ms3U-gdjQ-If/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true",
    registerButtonLink: "https://forms.gle/cZnu417h4DUTvEQr7"
  },
  {
    number: 4,
    text: "Mystery Room",
    image: "/images/cars/mclaren.png",
    posterImage: "/images/posters/mystery_room.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "https://forms.gle/HDcJ3DGWAJpL2JRf7",
    rulebookLink: "https://docs.google.com/document/d/1WDwV5L2f_mhh9Wb_pk5sIN53wdvzb0H6/edit?usp=drive_link&ouid=100570421776735561443&rtpof=true&sd=true"
  },
  {
    number: 5,
    text: "Digital Duel",
    image: "/images/cars/mercedes.png",
    posterImage: "/images/posters/digital_duel.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 6,
    text: "Gully Cricket",
    image: "/images/cars/williams.png",
    posterImage: "/images/posters/gully_cricket.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 7,
    text: "Destiny Duo",
    image: "/images/cars/alphatauri.png",
    posterImage: "/images/posters/destiny_duo.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 8,
    text: "Burst The Balloon",
    image: "/images/cars/alfaromeo.png",
    posterImage: "/images/posters/burst_the_balloon.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 9,
    text: "Tug Of War",
    image: "/images/cars/renault.png",
    posterImage: "/images/posters/tug_of_war.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  }
]

const techEvents = [
  {
    number: 1,
    text: "Steel Push",
    image: "/images/cars/mercedes.png",
    posterImage: "/images/posters/steel_push.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 2,
    text: "Robo Striker",
    image: "/images/cars/alphatauri.png",
    posterImage: "/images/posters/robo_striker.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 3,
    text: "Blind Code",
    image: "/images/cars/mclaren.png",
    posterImage: "/images/posters/blind_code.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 4,
    text: "Steel Sprint",
    image: "/images/cars/haas.png",
    posterImage: "/images/posters/steel_sprint.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 5,
    text: "Hackathon",
    image: "/images/cars/bwt.png",
    posterImage: "/images/posters/hackathon.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 6,
    text: "Code Craft",
    image: "/images/cars/williams.png",
    posterImage: "/images/posters/code_craft.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 7,
    text: "Ideathon",
    image: "/images/cars/alfaromeo.png",
    posterImage: "/images/posters/ideathon.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 8,
    text: "Cad-A-Thon",
    image: "/images/cars/renault.png",
    posterImage: "/images/posters/cadathon.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 9,
    text: "Debug It",
    image: "/images/cars/redbull.png",
    posterImage: "/images/posters/tug_of_war.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 10,
    text: "Dron-A-Master",
    image: "/images/cars/ferrari.png",
    posterImage: "/images/posters/drona_master.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 11,
    text: "Fast Duino",
    image: "/images/cars/mclaren.png",
    posterImage: "/images/posters/fast_duino.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
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
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 14,
    text: "Logo Quest",
    image: "/images/cars/haas.png",
    posterImage: "/images/posters/logo_quest.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 15,
    text: "Tech Quiz",
    image: "/images/cars/alphatauri.png",
    posterImage: "/images/posters/tech_quiz.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  }
]

const culturalEvents = [
  {
    number: 1,
    text: "AI Art",
    image: "/images/cars/mclaren.png",
    posterImage: "/images/posters/ai_art.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 2,
    text: "Choreo Clash",
    image: "/images/cars/redbull.png",
    posterImage: "/images/posters/choreo_clash.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 3,
    text: "Debonair",
    image: "/images/cars/ferrari.png",
    posterImage: "/images/posters/debonair.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
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
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 6,
    text: "Heritage Dance",
    image: "/images/cars/bwt.png",
    posterImage: "/images/posters/heritage_dance.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 7,
    text: "Logo Craft",
    image: "/images/cars/alfaromeo.png",
    posterImage: "/images/posters/logo_craft.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 8,
    text: "Merchandise",
    image: "/images/cars/haas.png",
    posterImage: "/images/posters/merchandise.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 9,
    text: "Nach Baliye",
    image: "/images/cars/renault.png",
    posterImage: "/images/posters/nach_baliye.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 10,
    text: "Photo Of The Day",
    image: "/images/cars/alphatauri.png",
    posterImage: "/images/posters/photo_of_the_day.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
]

const literaryEvents = [
  {
    number: 1,
    text: "Doodling",
    image: "/images/cars/bwt.png",
    posterImage: "/images/posters/doodling.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 2,
    text: "Identity Insight",
    image: "/images/cars/mclaren.png",
    posterImage: "/images/posters/identity_insight.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 3,
    text: "MUN",
    image: "/images/cars/ferrari.png",
    posterImage: "/images/posters/mun.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 4,
    text: "Poets Beat",
    image: "/images/cars/mercedes.png",
    posterImage: "/images/posters/poets_beat.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 5,
    text: "Spell Bee",
    image: "/images/cars/redbull.png",
    posterImage: "/images/posters/spell_bee.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 6,
    text: "Trivia Quiz",
    image: "/images/cars/renault.png",
    posterImage: "/images/posters/trivia_quiz.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
  {
    number: 7,
    text: "Wordless Wonders",
    image: "/images/cars/alfaromeo.png",
    posterImage: "/images/posters/wordless_wonder.jpg",
    description: "Code without seeing the screen, show your skills",
    registerButtonTitle: "Register",
    registerButtonLink: "/",
    rulebookLink: "/"
  },
]



const Events = () => (

  <WidgetWrapper>
    <HeadLine title="Events that are Funtastic" subtitle="Horizon has been a astounding festival and these events are the reason why. We've got a little something for everyone." titleClass="text-brand text-3xl sm:text-5xl"/>
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
