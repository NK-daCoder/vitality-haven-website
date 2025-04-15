
import faceBookIcon from "../assets/images/logo/facebook.png";
import youTubeIcon from "../assets/images/logo/youtube.png";
import instagramicon from "../assets/images/logo/instagram.png";
import twitterIcon from "../assets/images/logo/twitter.png";

import equinox from "../assets/images/companies/trusted-by-gyms/equinox.svg";
import myGym from "../assets/images/companies/trusted-by-gyms/mygym-cape-town.svg";
import soulcycle from "../assets/images/companies/trusted-by-gyms/soulcycle.svg";
import barMethod from "../assets/images/companies/trusted-by-gyms/the-bar-method.svg";
import viginActive from "../assets/images/companies/trusted-by-gyms/virgin-active.svg";

import manLiftSquad from "../assets/images/wallpaper/liftingSquat.jpg";
import femaleCardioWorkout from "../assets/images/wallpaper/personal-training.jpg";
import ropSwing from "../assets/images/wallpaper/ropeswinging.jpg";
import femaleBoxingPractice from "../assets/images/wallpaper/boxing.jpg";
import femalePullups from "../assets/images/wallpaper/womenDoinPullup.jpg";
import fatManWithKettleBell from "../assets/images/wallpaper/fatman-kettlebel.jpg";
import yogaGroup from "../assets/images/wallpaper/group-yoga.jpg"

import gymCouple from "../assets/images/cutout/couple.png";
import man from "../assets/images/cutout/man.png";
import womenMidBody from "../assets/images/cutout/female-midBody.png";


import vitalityHavenLogoWhite from "../assets/vitality-haven-logo.svg";
import vitalityHavenLogoBlack from "../assets/vitality-haven-logo--black.svg";

import edwardDaniels from "../assets/images/founders/edward-daniels.jpg";
import horikitaSuzune from "../assets/images/founders/Horikita-suzune.jpg";
import jordanMasilo from "../assets/images/founders/Jordan-masilo.jpg";
import thaliaMokoena from "../assets/images/founders/talia-mokoena.jpg";

import shreddedBody from "../assets/images/icons/Killer-body.png";
import brainIcon from "../assets/images/icons/Cognitive-Sharpness.png";
import longevityIcon from "../assets/images/icons/Longevity.png";
import emotionalWellbeing from "../assets/images/icons/Emotional-wellbeing.png"

const vitalityHavenLogo = {
    mainLogoWhite: vitalityHavenLogoWhite,
    mainLogoBlack: vitalityHavenLogoBlack
};

const socialMediaIcons = [
    { 
        mediaIcon: twitterIcon,
        url: "#",
        text: "twitter"
    },
    { 
        mediaIcon: faceBookIcon ,
        url: "#",
        text: "facebook"
    },
    { 
        mediaIcon: youTubeIcon ,
        url: "#",
        text: "youtube"
    }, 
    { 
        mediaIcon: instagramicon ,
        url: "#",
        text: "instagram"
    }
];

const cutOut = {
    gymCouple: gymCouple,
    manPumpIron: man,
    womenBodyBuilder: womenMidBody,
};


const decoration = {
    manLiftSquad: manLiftSquad,
    femaleAbonomalWorkout: femaleCardioWorkout,
    heavyRopeWorkout: ropSwing,
    femaleBoxing: femaleBoxingPractice,
    femalePullups: femalePullups,
    fatmansKettleBells: fatManWithKettleBell,
    yogaGroup: yogaGroup,
};


const vitalityHaven = {
    // Gym Information
    gymInfo: {
      name: "Vitality Haven",
      slogan: "Where Strength Meets Serenity",
      description: "A premium fitness sanctuary offering state-of-the-art equipment, expert trainers, and holistic wellness programs designed to transform your body and mind.",
      gymStats: {
        founded: 2021,
        yearsInBusiness: 4,
        totalMembers: 3500,
        expertTrainers: 12,
        members: 5000,
        // calculated based on the number of classes per day 
        weeklyClasses: 60, 
        locations: [
          // United States
          {
            id: 1,
            name: "Manhattan Flagship",
            address: "200 Hudson Yards, New York, NY 10001",
            phone: "(212) 555-7890",
            hours: {
              weekdays: "4:30 AM - 12:00 AM",
              weekends: "6:00 AM - 10:00 PM"
            },
            amenities: ["Olympic Pool", "Luxury Spa", "Executive Lounge", "Basketball Court"]
          },
          {
            id: 2,
            name: "Venice Beach Wellness",
            address: "1 Muscle Beach Way, Los Angeles, CA 90291",
            phone: "(310) 555-2345",
            hours: {
              weekdays: "5:00 AM - 11:00 PM",
              weekends: "6:00 AM - 9:00 PM"
            },
            amenities: ["Outdoor Training Deck", "Beach Access", "Cold Plunge Pools", "Surfboard Storage"]
          },
          {
            id: 3,
            name: "Chicago Lakeside",
            address: "300 N Harbor Dr, Chicago, IL 60601",
            phone: "(312) 555-6789",
            hours: {
              weekdays: "5:00 AM - 11:00 PM",
              weekends: "7:00 AM - 9:00 PM"
            },
            amenities: ["Indoor Track", "Regeneration Lounge", "Physical Therapy", "Winter Training Zone"]
          },
        
          // South Africa
          {
            id: 4,
            name: "Cape Town Waterfront",
            address: "Victoria & Alfred Waterfront, Cape Town 8001",
            phone: "+27 21 555 1234",
            hours: {
              weekdays: "5:30 AM - 10:00 PM",
              weekends: "7:00 AM - 8:00 PM"
            },
            amenities: ["Table View Yoga Deck", "Altitude Training Room", "Boutique Cafe", "Massage Therapy"]
          },
          {
            id: 5,
            name: "Johannesburg Sandton",
            address: "Nelson Mandela Square, Sandton, Johannesburg 2196",
            phone: "+27 11 555 5678",
            hours: {
              weekdays: "5:00 AM - 10:30 PM",
              weekends: "7:00 AM - 8:30 PM"
            },
            amenities: ["Executive Wellness Center", "24/7 Private Training", "Nutrition Clinic", "Sleep Pods"]
          },
        
          // Asia
          {
            id: 6,
            name: "Singapore Marina Bay",
            address: "10 Bayfront Ave, Singapore 018956",
            phone: "+65 6555 8888",
            hours: {
              weekdays: "6:00 AM - 11:00 PM",
              weekends: "7:00 AM - 10:00 PM"
            },
            amenities: ["Infinity Pool", "Sky Garden Training", "TCM Wellness Center", "Digital Fitness Lab"]
          },
          {
            id: 7,
            name: "Tokyo Roppongi",
            address: "6-10-1 Roppongi, Minato City, Tokyo 106-0032",
            phone: "+81 3-5555-1212",
            hours: {
              weekdays: "5:00 AM - 12:00 AM",
              weekends: "6:00 AM - 10:00 PM"
            },
            amenities: ["Onsen Recovery Center", "Robot Training Assistants", "Kaiseki Nutrition Bar", "Sleep Optimization Pods"]
          },
        
          // Additional US Locations
          {
            id: 8,
            name: "Miami Beach Club",
            address: "1 Ocean Dr, Miami Beach, FL 33139",
            phone: "(305) 555-3456",
            hours: {
              weekdays: "5:00 AM - 11:00 PM",
              weekends: "6:00 AM - 10:00 PM"
            },
            amenities: ["Beachfront Training", "Saltwater Pool", "Cryotherapy", "Vitamin IV Bar"]
          },
          {
            id: 9,
            name: "Austin Tech District",
            address: "500 Congress Ave, Austin, TX 78701",
            phone: "(512) 555-7890",
            hours: {
              weekdays: "5:00 AM - 11:00 PM",
              weekends: "7:00 AM - 9:00 PM"
            },
            amenities: ["Biohacking Lab", "Outdoor Climbing Wall", "Recovery Lounge", "Tech-Free Zen Garden"]
          },
        
          // Additional Asian Locations
          {
            id: 10,
            name: "Hong Kong Central",
            address: "88 Queensway, Central, Hong Kong",
            phone: "+852 5555 6789",
            hours: {
              weekdays: "6:00 AM - 12:00 AM",
              weekends: "7:00 AM - 10:00 PM"
            },
            amenities: ["Sky High Cycling Studio", "TCM Herbal Sauna", "Financial District Express Classes", "24/7 Executive Access"]
          },
          {
            id: 11,
            name: "Bangkok Sukhumvit",
            address: "999 Sukhumvit Road, Bangkok 10110",
            phone: "+66 2 555 1234",
            hours: {
              weekdays: "5:00 AM - 11:00 PM",
              weekends: "6:00 AM - 10:00 PM"
            },
            amenities: ["Muay Thai Training Center", "Thai Massage Studio", "Tropical Rooftop Yoga", "Detox Juice Bar"]
          },
        
          // Additional South Africa Locations
          {
            id: 12,
            name: "Durban Beachfront",
            address: "1 Golden Mile, Durban 4001",
            phone: "+27 31 555 9012",
            hours: {
              weekdays: "5:00 AM - 10:00 PM",
              weekends: "6:00 AM - 8:00 PM"
            },
            amenities: ["Oceanview Training Deck", "Surf Fitness Program", "Braai Nutrition Cafe", "African Dance Studio"]
          },
          {
            id: 13,
            name: "Pretoria Executive",
            address: "267 Francis Baard St, Pretoria 0002",
            phone: "+27 12 555 3456",
            hours: {
              weekdays: "5:30 AM - 10:30 PM",
              weekends: "7:00 AM - 8:00 PM"
            },
            amenities: ["Diplomatic District Access", "Private Training Suites", "Business Center", "High-Security Parking"]
          },
        
          // More Asian Locations
          {
            id: 14,
            name: "Seoul Gangnam",
            address: "623 Teheran-ro, Gangnam-gu, Seoul 06173",
            phone: "+82 2 555 7890",
            hours: {
              weekdays: "5:00 AM - 12:00 AM",
              weekends: "6:00 AM - 10:00 PM"
            },
            amenities: ["K-Beauty Recovery Lounge", "E-Sports Performance Center", "Korean Spa Facilities", "Smart Mirror Training"]
          },
          {
            id: 15,
            name: "Shanghai Bund",
            address: "88 The Bund, Shanghai 200002",
            phone: "+86 21 5555 1234",
            hours: {
              weekdays: "6:00 AM - 11:00 PM",
              weekends: "7:00 AM - 10:00 PM"
            },
            amenities: ["Huangpu River View Cycling", "Traditional Chinese Medicine Center", "Corporate Wellness Programs", "24/7 International Access"]
          },
        
          // More US Locations
          {
            id: 16,
            name: "Seattle Tech Haven",
            address: "500 Union St, Seattle, WA 98101",
            phone: "(206) 555-4567",
            hours: {
              weekdays: "5:00 AM - 11:00 PM",
              weekends: "6:00 AM - 9:00 PM"
            },
            amenities: ["Rainforest-Themed Sauna", "Startup Founder Programs", "Standing Desk Work Area", "Northwest Organic Cafe"]
          },
          {
            id: 17,
            name: "Boston Historic",
            address: "1 Financial Center, Boston, MA 02110",
            phone: "(617) 555-8901",
            hours: {
              weekdays: "5:00 AM - 11:00 PM",
              weekends: "6:00 AM - 9:00 PM"
            },
            amenities: ["Ivy League Sports Science Lab", "Revolutionary War-Themed Bootcamp", "Academic Discounts", "Nor'easter Recovery Lounge"]
          },
        
          // More Asian Locations
          {
            id: 18,
            name: "Mumbai Bandra",
            address: "Bandra Kurla Complex, Mumbai 400051",
            phone: "+91 22 5555 6789",
            hours: {
              weekdays: "5:30 AM - 11:30 PM",
              weekends: "6:00 AM - 10:00 PM"
            },
            amenities: ["Bollywood Dance Studio", "Ayurvedic Wellness Center", "Cricket Performance Training", "Vegetarian Superfood Bar"]
          },
          {
            id: 19,
            name: "Taipei 101",
            address: "45 Taipei 101, Xinyi District, Taipei 110",
            phone: "+886 2 5555 1010",
            hours: {
              weekdays: "6:00 AM - 11:00 PM",
              weekends: "7:00 AM - 10:00 PM"
            },
            amenities: ["Mountain View Yoga", "Night Market Nutrition Guides", "Bubble Tea Recovery Bar", "Earthquake-Proof Training Equipment"]
          },
        
          // More South Africa Locations
          {
            id: 20,
            name: "Stellenbosch Vineyard",
            address: "1 Wellness Estate, Stellenbosch 7600",
            phone: "+27 21 555 7890",
            hours: {
              weekdays: "6:00 AM - 9:00 PM",
              weekends: "7:00 AM - 7:00 PM"
            },
            amenities: ["Vineyard Running Trails", "Wine Country Nutrition", "Harvest-Themed Workouts", "Luxury Spa Retreat"]
          },
          {
            id: 21,
            name: "Port Elizabeth Ocean",
            address: "1 Marine Dr, Summerstrand, Gqeberha 6001",
            phone: "+27 41 555 1234",
            hours: {
              weekdays: "5:00 AM - 10:00 PM",
              weekends: "6:00 AM - 8:00 PM"
            },
            amenities: ["Dolphin View Cycling", "Marine-Themed Hydrotherapy", "Surf & Sand Training", "Seaside Meditation Deck"]
          },
        
          // Additional Global Locations
          {
            id: 22,
            name: "Dubai Marina",
            address: "The Palm Tower, Dubai Marina, Dubai",
            phone: "+971 4 555 1234",
            hours: {
              weekdays: "6:00 AM - 12:00 AM",
              weekends: "7:00 AM - 11:00 PM"
            },
            amenities: ["Gold-Plated Recovery Lounge", "Desert Cooled Training Floor", "Luxury Changing Suites", "Private Beach Access"]
          },
          {
            id: 23,
            name: "Sydney Harbour",
            address: "1 Circular Quay, Sydney NSW 2000",
            phone: "+61 2 5555 6789",
            hours: {
              weekdays: "5:00 AM - 11:00 PM",
              weekends: "6:00 AM - 10:00 PM"
            },
            amenities: ["Opera House View Yoga", "Bondi Beach Training Programs", "Outdoor Olympic Pool", "Aussie BBQ Nutrition Bar"]
          },
          {
            id: 24,
            name: "London Mayfair",
            address: "100 Park Lane, London W1K 7TN",
            phone: "+44 20 5555 1234",
            hours: {
              weekdays: "5:00 AM - 11:00 PM",
              weekends: "6:00 AM - 10:00 PM"
            },
            amenities: ["Royal Training Protocols", "Afternoon Tea Recovery", "Fog-Proof Running Track", "Private Member's Club"]
          },
          {
            id: 25,
            name: "Rio de Janeiro Copacabana",
            address: "Avenida Atlântica 4000, Rio de Janeiro 22070-001",
            phone: "+55 21 5555-6789",
            hours: {
              weekdays: "5:00 AM - 11:00 PM",
              weekends: "6:00 AM - 10:00 PM"
            },
            amenities: ["Beachfront Functional Training", "Samba Dance Cardio", "Carnival-Themed Classes", "Acai Superfood Bar"]
          }
        ]
      },

      sellingPoints: {
        ourStory: {
          title: "Our Story",
          content: "Vitality Haven Health Club was founded in 2021, in the wake of a pandemic-ridden world that revealed one undeniable truth: modern gyms were failing people in more ways than one. Physical health without mental resilience was incomplete. People didn’t just want abs—they wanted vitality. And so, Vitality Haven was born.",
        },
        ourFounders: [
          {
            name: "Jordan Masilo",
            occupation: "Bodybuilding Coach and Mental Wellness Enthusiast",
            qualifications: [
              "Former professional bodybuilder",
              "Certified Health Coach & Strength Specialist",
              "Trained over 300+ athletes",
              "Speaks globally on the intersection of grit and gratitude"
            ],
            profileImages: jordanMasilo,

            socialMedia: [
              "facebook",
              "instagram"
            ],
          },
          {
            name: "Dr. Thalia Mokoena",
            occupation: "Neuroscientist and Yoga Therapist",
            qualifications: [
              "Ph.D. in Neurobiology (UCT)",
              "Certified Yoga Instructor & Breathwork Coach",
              "Focus: Cognitive performance + emotional regulation",
              "Owner of the Neurobro podcast"
            ],
            socialMedia: [
              "twitter",
              "facebook",
              "youtube",
              "tiktock"
            ],
            profileImages: thaliaMokoena
          },
          {
            name: "Edward Daniels",
            occupation: "Lifestyle Coach",
            qualifications: [
              "Registered Dietitian",
              "Specializes in African whole-food meal plans",
              "Host of “Eat for Energy” podcast"
            ],
            socialMedia: [
              "twitter",
              "instagram",
              "youtube",
              "ticktock"
            ],
            profileImages: edwardDaniels
          },
          {
            name: "Horikita Suzune",
            occupation: "Youth & Elder Fitness Coordinator",
            qualifications: [
              "Focuses on intergenerational movement routines",
              "Helps elders regain mobility + teens manage energy bursts"
            ],
            profileImages: horikitaSuzune,

            socialMedia: [
              "twitter",
              "instagram",
              "youtube",
              "ticktock"
            ],
          },
        ],

        mission: {
          title: "Our Mission",
          quote: "At Vitality Haven, we’re here to help you thrive—body, mind, and spirit. Through science-backed training, recovery grounded in neuroscience, and the power of community, we turn potential into real, lasting vitality.",
          whatGymsFocusOn: {
            title: "Why Would you stay?",
            subText: "While most gyms chase aesthetics. We train for something deeper with these focused points:",
            list: [
              {
                icon: longevityIcon,
                content: "Longevity",
                why: {
                  headLine: "Move with purpose, live with power.",
                  evidence: [
                    "The CDC (2022) reports that strength training just twice a week can cut all-cause mortality risk by 21%.",
                    "Blue Zones research—based on the world’s longest-living populations—shows that daily movement, low stress, and social connection are as vital as nutrition or genetics."
                  ]
                }
              },
              {
                icon: emotionalWellbeing,
                content: "Emotional Well-being",
                why: {
                  headLine: "Train the body, free the mind.",
                  evidence: [
                    "According to the APA, people who exercise three or more times per week are 43% less likely to experience depression.",
                    "Yoga and meditation reduce amygdala overactivation (stress/fear response) and increase GABA levels, which calm the nervous system.",
                    "Harvard Medical School found that breathwork practices like box breathing reduce cortisol by up to 32% in under 10 minutes."
                  ]
                }
              },
              {
                icon: brainIcon,
                content: "Cognitive Sharpness",
                why: {
                  headLine: "Sharper mind. Stronger body.",
                  evidence: [
                    "A 2021 Nature Neuroscience meta-analysis showed that exercise enhances executive function, memory, and learning. Aerobic activity also boosts BDNF—a key neurochemical for brain growth.",
                    "Resistance training can reduce cognitive decline by up to 40% in older adults (Journal of Alzheimer's Disease, 2020)."
                  ]
                }
              },
              {
                icon: shreddedBody,
                content: "Yes, a strong physique too.",
                why: {
                  headLine: "Looks matter. But they’re not the only thing that does.",
                  evidence: [
                    "The ACSM confirms strength training improves metabolism, insulin sensitivity, bone density, and lean mass.",
                    "Still, when goals are purely aesthetic, motivation drops fast—up to 50% of gym-goers quit within 6 months (IHRSA, 2023). We train for more than the mirror."
                  ]
                }
              }
            ]
          }
        },

        ourVision: {
          title: " OUR VISION VS OTHER HEALTH CLUBS",
          mostGymOfferingsComparison : {
            gymsInGeneral: {
              title: "Most Gyms offer",
              list: [
                "Cardio and weights",
                "Generic classes",
                "Limited personal development"
              ]
            },
            vitalityHaven: {
              title: "Vitality Haven, on the other hand, integrates:",
              list: [
                "Mind-body alignment (yoga + meditation backed by neuroscience)",
                "Functional diagnostics (real-time body scans + HRV testing)",
                "Coaching that adapts to life cycles (teen, adult, senior)"
              ]
            },
            quote: "Our vision is to be the first health club where members don’t just train—they transform.",
          }
        },

        valuePropersitionInfographic: [
          {
            title: "SCIENCE MEETS SWEAT",
            list: [
              "Biofeedback-driven workouts (HRV, sleep quality, cortisol monitoring)",
              "Personalized fitness journeys"
            ],
          },
          {
            title: "BRAIN + BODY TRAINING",
            list: [
              "Programs built with input from neuroscientists",
              "Workouts that also improve focus, memory, and emotional regulation"
            ]
          },
          {
            title: "COMMUNITY + CARE",
            list: [
              "Family-based memberships",
              "Community wellness events",
              "Lifestyle mentorship programs"
            ]
          },
          {
            title: "ELITE BODYBUILDING ROOTS",
            list: [
              "Pro-level bodybuilding coaching for all levels",
              "Fitness as a tool for discipline, confidence, and purpose",
            ]
          }
        ],

        whatLeadToTheirApproach: {
            title: "WHAT LED US TO HOLISTIC HEALTH?",
            subText: "Let’s talk research.",
            researchContent: [
              {
                title: "Burnout epidemic:",
                content: "According to Gallup (2023), 76% of employees experience burnout at least sometimes. Gym workouts alone don’t resolve chronic stress. Mind-body practices reduce cortisol by up to 32%, according to the APA."
              },
              {
                title: "Mental health stats:",
                content: "WHO reports a 25% increase in anxiety and depression globally post-COVID. Holistic training that combines cardio, strength, breathwork, and community support improves mental health outcomes by 35% compared to traditional training."
              },
              {
                title: "Cognitive benefits of exercise:",
                content: "According to a Harvard study (2022), regular aerobic exercise increases hippocampal volume, boosting memory and learning. Add mindfulness—and you strengthen prefrontal cortex activation, the seat of judgment and planning."
              },
            ]
        },

        neuroscienceResearch: {
          title: "THE NEUROSCIENCE BEHIND OUR SYSTEM",
          subText: "Movement is medicine. But mindful movement is a revolution.",
          research: [
            {
              title: "Neuroplasticity",
              research: "We design routines that challenge both body and brain. Think: complex movement patterns, memory drills, and problem-solving during workouts. These strengthen neural networks.",
            },
            {
              title: "Binaural beats & breathwork",
              research: "Used in recovery sessions to stimulate alpha and theta brainwaves—proven to reduce anxiety and improve sleep.",
            },
            {
              title: "Heart Rate Variability (HRV) Tracking",
              research: "Higher HRV = better stress response. We tailor recovery days using your HRV data."
            },
            {
              title: "Dopamine Pathways",
              research: "Our routines follow the “effort-reward-effort” pattern, shown to build habit formation and improve mood regulation."
            }
          ]
        },

        problemsVitalityHavenSolves: {
          title: "PROBLEMS WE’RE SOLVING (REAL GYM INDUSTRY PAINS)",
          tableContent: [
            {
              tableHeading: "Problem",
              tableColumn: [
                "High dropout rates",
                "Lack of personalization",
                "Mental health neglect",
                "Poor recovery education"
              ]
            },
            {
              tableHeading: "Industry Stat",
              tableColumn: [
                "50% of new members quit in 6 months (IHRSA)",
                "74% of members feel programs are too generic",
                "Only 15% of clubs offer wellness programs",
                "Most gyms ignore sleep & mobility"
              ]
            },
            {
              tableHeading: "Vitality Haven’s Cure",
              tableColumn: [
                "Personal accountability coaches & community pods",
                "AI-assisted training plans & regular 1:1 reviews",
                "Integrated emotional health and meditation suites",
                "Full spectrum recovery rooms & sleep tracking integration"
              ]
            },
          ]
        },

        problemsWithGymHeatlthClubs: [
          {
            title: "Lack of Personalization",
            content: "Most gyms are one-size-fits-all, and that doesn’t work. Everyone’s body, goals, and schedule are different. Yet, 81% of people who sign up for a gym membership quit within the first 6 months (IHRSA)—why? Because they don’t get the guidance or personalization they need to stay motivated or safe."
          },
          {
            title: "Intimidation Factor & Gymtimidation",
            content: "A 2023 UK study found that 50% of women and 36% of men avoid gyms due to feeling judged or intimidated. Traditional gym environments can be toxic, especially to beginners."
          },
          {
            title: "Lack of Community & Support",
            content: "According to a survey by Les Mills, 84% of people are more likely to stick with a fitness program when they feel part of a community. Yet most gyms are transactional—scan your card, do your reps, and leave. No connection."
          },
          {
            title: "Overcrowding & Poor Maintenance",
            content: "Gyms often oversell memberships. A gym might have 3,000 members, but space and equipment for 300. That’s why you’re always waiting for machines or forced into 6 AM slots."
          },
          {
            title: "No Holistic Health Integration",
            content: "Fitness isn’t just about lifting weights. Mental health, sleep, nutrition, and lifestyle play massive roles. Yet most gyms offer no support in these areas."
          }
        ],

        vitalityHavenSolution: [
          {
            title: "Hyper-Personalized Wellness Programs",
            content: `We use AI-driven fitness assessments combined with professional evaluations to create personalized health blueprints. No more generic workouts. Whether it’s fat loss, strength building, recovery, or holistic balance—we tailor it.`,
            list: [
              "Includes mental wellness check-ins",
              "Nutrition guidance integrated into your plan",
              "Progress tracked with data you actually understand"
            ]
          },
          {
            title: "Judgement-Free, Inclusive Environment",
            content: `Vitality Haven is for every body—literally. Whether you're an elite athlete, a mom trying to bounce back, or someone just starting, you're met wit`,
            list: [
              "Separate zones for beginners",
              "Classes designed specifically for different fitness levels",
              "Trainers trained in body neutrality and psychological safety"
            ]
          },
          {
            title: "Strong Community + Group Accountability",
            content: `We’re big on community. Our app and in-person events connect members based on goals, age, and fitness type don't believe us well... Studies from the Journal of Social Sciences found that people tend to work out harder and longer when they’re around others doing the same thing. We leverage that with real-time virtual workout rooms and live community feeds.`,
            list: [
              "Member-only support circles",
              "Group challenges with actual rewards (not just bragging rights)",
              "Real-time encouragement through our social wellness platform"
            ]
          },
          {
            title: "Smart Facility Management",
            content: `No overcrowding. No broken machines. No “we’ll fix it next week.” We use IoT sensors and smart scheduling to ensure optimal usage of space and equipment.`,
            list: [
              "Real-time machine availability tracking via app",
              "Equipment usage analytics to prevent wear and tear",
              "Occupancy monitoring to avoid overcrowding"
            ]
          },
          {
            title: "Integrated Mind-Body Services",
            content: `We offer not just yoga and meditation, but also mental wellness coaching, sleep improvement programs, and emotional resilience workshops—because mental health is fitness too.`,
            list: [
              "Real-time machine availability tracking via app",
              "Equipment usage analytics to prevent wear and tear",
              "Occupancy monitoring to avoid overcrowding"
            ]
          },
          {
            title: "Technology That Makes You Feel Human, Not Just a Number",
            content: `Vitality Haven isn’t just a health club—it’s an ecosystem.`,
            list: [
              "Intuitive mobile app with habit tracking, reminders, and personalized tips",
              "Virtual classes and challenges to keep you engaged",
              "Integration with wearables like Fitbit, Apple Watch, and more"
            ]
          },
        ],
      }
    },

    trustedCompanies: [
        {
            id: 1,  
            name: "equinox",
            logo: equinox
        },
        {
            id: 2,
            name: "myGym",
            logo: myGym
        },
        {
            id: 3,
            name: "soulcycle",
            logo: soulcycle
        },
        {
            id: 4,
            name: "barMethod",
            logo: barMethod
        },
        {
            id: 5,
            name: "virginActive",
            logo: viginActive
        },
    ],

    onlineCourses: [
      {
          id: "oc-101",
          title: "Calisthenics Mastery: Bodyweight Excellence",
          instructor: "Marcus Johnson",
          category: "Strength & Mobility",
          level: ["Beginner", "Intermediate", "Advanced"],
          description: "Unlock your body's potential through progressive bodyweight training. This comprehensive program blends strength, mobility, and control for complete physical mastery.",
          duration: "8 weeks",
          format: "Self-paced with weekly live Q&A",
          price: 149,
          premiumMemberDiscount: true,
          features: [
              "Progressive skill pyramids from basic to advanced moves",
              "Injury prevention protocols",
              "Mobility drills for optimal movement",
              "Program customization based on your level",
              "Private community forum",
              "Form critique videos"
          ],
          modules: [
              {
                  title: "Foundation Phase",
                  lessons: [
                      "The Science of Bodyweight Leverage",
                      "Perfecting Pushup Mechanics",
                      "Squat Progressions for Joint Health",
                      "Hanging & Grip Strength Basics"
                  ]
              },
              {
                  title: "Control Phase",
                  lessons: [
                      "Core Sequencing for Advanced Moves",
                      "Pull-up Variations Pyramid",
                      "Handstand Preparation Drills",
                      "Eccentric Training Protocols"
                  ]
              },
              {
                  title: "Expression Phase",
                  lessons: [
                      "Muscle-up Breakdown",
                      "Planche Progressions",
                      "Front Lever Training System",
                      "Freestyle Flow Choreography"
                  ]
              }
          ],
          bonuses: [
              "Exclusive Access to Vitality Haven Calisthenics Park",
              "Monthly Live Workshops with Marcus",
              "Nutrition Guide for Bodyweight Athletes"
          ],
          certification: "Vitality Haven Calisthenics Certificate (upon completion)"
      },
      {
          id: "oc-202",
          title: "Elite Home Training System",
          instructor: "Sarah Miller",
          category: "Home Fitness",
          level: ["Beginner", "Intermediate"],
          description: "Transform any space into your personal fitness studio with minimal equipment. Our holistic approach combines movement science with practical space solutions.",
          duration: "6 weeks",
          format: "Daily guided workouts + educational modules",
          price: 99,
          premiumMemberDiscount: true,
          features: [
              "Equipment alternatives using household items",
              "Space optimization strategies",
              "Time-efficient metabolic circuits",
              "Noise-conscious routines for apartments",
              "Family-friendly workout modifications"
          ],
          modules: [
              {
                  title: "Space Solutions",
                  lessons: [
                      "5-Zone Home Gym Design",
                      "Furniture-as-Equipment Hacks",
                      "Micro-Workout Scheduling",
                      "Outdoor Space Utilization"
                  ]
              },
              {
                  title: "Movement Modalities",
                  lessons: [
                      "Resistance Band Mastery",
                      "Chair-Based Strength Series",
                      "Bodyweight-Only Cardio",
                      "Recovery in Restricted Spaces"
                  ]
              }
          ],
          bonuses: [
              "Printable Home Workout Blueprint",
              "Virtual Home Gym Assessment",
              "Private Facebook Community"
          ],
          equipmentRequired: "Yoga mat, resistance bands (provided for premium members)"
      },
      {
          id: "oc-303",
          title: "Next-Gen Fitness Coach Certification",
          instructor: "All Master Trainers",
          category: "Professional Development",
          level: ["Advanced"],
          description: "Our flagship trainer education program blending cutting-edge science with proven coaching methodologies. Elevate your skills beyond basic certification.",
          duration: "12 weeks",
          format: "Live lectures + practicum",
          price: 899,
          accreditation: "4.0 ACE CECs, NASM approved",
          features: [
              "Biomechanics Deep Dive",
              "Advanced Cueing Systems",
              "Client Psychology Frameworks",
              "Business Building Modules",
              "Virtual Training Mastery",
              "Vitality Haven Coaching Methodology"
          ],
          modules: [
              {
                  title: "Science Foundations",
                  lessons: [
                      "Neuro-Mechanical Training Principles",
                      "Metabolic Flexibility Protocols",
                      "Pain vs. Injury Differentiation",
                      "Hormonal Impact of Training Styles"
                  ]
              },
              {
                  title: "Coaching Artistry",
                  lessons: [
                      "Motivational Interviewing Techniques",
                      "Non-Verbal Communication Analysis",
                      "Adaptive Programming Systems",
                      "Group Energy Management"
                  ]
              },
              {
                  title: "Business Integration",
                  lessons: [
                      "Digital Client Acquisition",
                      "Premium Service Design",
                      "Legal Considerations for Coaches",
                      "Brand Development Frameworks"
                  ]
              }
          ],
          practicum: [
              "20 hours supervised coaching",
              "Program design submission",
              "Mock client sessions",
              "Business plan development"
          ],
          certification: "Vitality Haven Master Coach Credential",
          prerequisites: "Current CPT certification or exercise science degree"
      },
      {
          id: "oc-404",
          title: "Mind-Body Fusion: Yoga & Calisthenics Synergy",
          instructor: "Nadia Chen & Marcus Johnson",
          category: "Hybrid Training",
          level: ["Intermediate", "Advanced"],
          description: "A revolutionary blend of yoga's mindfulness with calisthenics' strength. Develop fluid power and resilient mobility simultaneously.",
          duration: "4 weeks",
          format: "Live-streamed sessions + community platform",
          price: 129,
          features: [
              "Proprioception enhancement drills",
              "Breath-to-movement linking",
              "Transitional flow development",
              "Injury resilience protocols"
          ],
          schedule: [
              "Monday: Strength-Focused Flow",
              "Wednesday: Mobility Deep Dives",
              "Friday: Creative Sequencing Labs"
          ],
          bonuses: [
              "Exclusive Mobility Assessment Tools",
              "Live Student Showcase Events",
              "Digital Pose Library"
          ]
      },
      {
        id: "oc-505",
        title: "Neuro-Fitness: Train Your Brain for Peak Performance",
        instructor: "Dr. Rebecca Stern (Neuroscience Consultant) & Marcus Johnson",
        category: "Mind-Body Science",
        level: ["All Levels"],
        description: "Harness cutting-edge neuroscience to optimize workouts, recovery, and results. This course reveals how to 'hack' your nervous system for faster gains, better motivation, and enhanced mind-muscle connection.",
        duration: "5 weeks",
        format: "Weekly deep-dive modules + interactive neuro-tracking",
        price: 179,
        premiumMemberDiscount: true,
        features: [
            "Proprietary Neuro-Fitness Assessment™",
            "Brainwave-based recovery tracking",
            "Dopamine-driven workout structuring",
            "Pain modulation techniques",
            "Cognitive priming exercises",
            "Real-time biofeedback integration (compatible with Apple Watch/Whoop)"
        ],
        modules: [
            {
                title: "The Lifting Brain",
                lessons: [
                    "Neuroplasticity in Strength Training",
                    "Motor Cortex Mapping for Better Form",
                    "The Cerebellum's Role in Coordination",
                    "Mirror Neuron Workout Partners"
                ],
                practical: "Muscle Activation Scan Technique"
            },
            {
                title: "Neurochemistry of Gains",
                lessons: [
                    "Dopamine Scheduling for Consistency",
                    "Endorphin Management for Pain Tolerance",
                    "BDNF: The 'Miracle Grow' Protein",
                    "Optimizing Cortisol Rhythms"
                ],
                practical: "Pre-Workout Neuro-Cocktail Design"
            },
            {
                title: "Cognitive Performance",
                lessons: [
                    "Attention Cycling for Marathon Sessions",
                    "Decision Fatigue in Program Design",
                    "The 90-Minute Ultradian Rhythm Rule",
                    "Neurovascular Coupling for Pump"
                ],
                practical: "Focus-Rep Correlation Tracking"
            },
            {
                title: "Recovery Neurology",
                lessons: [
                    "Sleep Spindle Enhancement",
                    "Vagus Nerve Stimulation Drills",
                    "Glymphatic System Flushing",
                    "Neuroinflammation Reduction"
                ],
                practical: "Post-Workout Neural Reset Protocol"
            }
        ],
        neuroscienceTools: [
            "HRV Monitoring Guide",
            "Neuro-Performance Scorecard",
            "Mental Fatigue Threshold Calculator",
            "Proprioception Enhancement Kit (shipped to premium members)"
        ],
        certification: "Vitality Haven Neuro-Athlete Certification",
        researchPartners: [
            "Columbia University Motor Learning Lab",
            "NeuroFit Institute"
        ],
        bonuses: [
            "Private Brain-Body Coaching Session",
            "Annual 'Neuro-Fitness' Symposium Access",
            "Smart Supplements Starter Pack (for first 50 enrollees)"
        ]
      }
    ],

    services: {
      // Personal Training & Coaching  
      personalTraining: {
          title: "Bespoke Performance Coaching",
          tiers: [
              {
                  name: "Foundational Coaching",
                  for: "New members or those rebuilding fundamentals",
                  includes: [
                      "1-on-1 movement assessment",
                      "Customized starter program",
                      "Bi-weekly form checks",
                      "Nutritional foundations guide",
                      "Access to 'Essentials' video library"
                  ],
                  price: "$199/month"
              },
              {
                  name: "Elite Performance",
                  for: "Athletes and serious fitness enthusiasts",
                  includes: [
                      "3+ sessions/week with dedicated coach",
                      "Biomechanical video analysis",
                      "Sports-specific periodization",
                      "Advanced recovery protocols (red light therapy, cryo)",
                      "Metabolic testing"
                  ],
                  price: "$799/month"
              },
              {
                  name: "Concierge Coaching",
                  for: "Executives and high-profile clients",
                  includes: [
                      "24/7 coach access via VIP channel",
                      "Home/gym hybrid training",
                      "Travel workout programming",
                      "Stress resilience coaching",
                      "Quarterly retreats"
                  ],
                  price: "Custom pricing"
              }
          ],
          note: "All tiers include AI-powered progress tracking and monthly goal reviews."
      },
  
      // Rehabilitation & Prehab  
      rehabServices: {
          title: "Restorative Movement Clinic",
          options: [
              {
                  name: "Post-Injury Rebuild",
                  for: "Post-physical therapy conditioning",
                  includes: [
                      "Collaboration with your medical team",
                      "Joint-friendly strength progressions",
                      "Scar tissue mobilization",
                      "Proprioception retraining"
                  ],
                  price: "$120/session"
              },
              {
                  name: "Prehab for Athletes",
                  for: "Injury prevention for sport-specific demands",
                  includes: [
                      "Movement asymmetry screening",
                      "Rotator cuff/ACL resilience drills",
                      "Dynamic stability programming",
                      "Recovery nutrition plan"
                  ],
                  price: "$150/session"
              }
          ],
          tech: "Uses Force Plate Analysis and EMG muscle activation scans."
      },
  
      // Group Experiences  
      groupServices: {
          title: "Curated Community Training",
          offerings: [
              {
                  name: "Squad Goals (Small Group PT)",
                  for: "Friends or accountability partners",
                  benefits: [
                      "3-5 person tailored sessions",
                      "Shared progress dashboard",
                      "Themed challenges (e.g., 'Tour de Squat')",
                      "30% discount vs. 1-on-1"
                  ],
                  price: "$45/person/session"
              },
              {
                  name: "Corporate Wellness Pods",
                  for: "Companies investing in employee health",
                  benefits: [
                      "On-site or gym-based sessions",
                      "Ergonomic workstation assessments",
                      "Lunch-and-learn nutrition talks",
                      "Step/HRV team competitions"
                  ],
                  price: "Custom packages"
              }
          ]
      },
  
      // Wellness & Recovery  
      recoveryServices: {
          title: "Regeneration Lounge",
          menu: [
              {
                  name: "The Executive Reset",
                  includes: [
                      "30-min percussion massage",
                      "15-min guided breathwork",
                      "CBD-infused hydration",
                      "Post-session cognitive clarity tea"
                  ],
                  price: "$95"
              },
              {
                  name: "Athlete Overhaul",
                  includes: [
                      "PEMF (Pulsed Electromagnetic Field) therapy",
                      "Lymphatic drainage session",
                      "Float tank immersion",
                      "Post-treatment amino IV drip"
                  ],
                  price: "$250"
              }
          ],
          addOns: [
              "Cryofacial ($45)",
              "Neurofeedback session ($80)",
              "Sleep hygiene consultation ($60)"
          ]
      },
  
      // Tech-Enhanced Services  
      techServices: {
          title: "Digital Integration Suite",
          offerings: [
              {
                  name: "Virtual Form Coach",
                  howItWorks: "Upload workout videos for AI-powered form analysis",
                  features: [
                      "48-hour turnaround with trainer notes",
                      "3D joint angle measurements",
                      "Personalized cue library"
                  ],
                  price: "$29/month"
              },
              {
                  name: "Biometric Blueprint",
                  howItWorks: "Comprehensive testing for data-driven programming",
                  tests: [
                      "VO2 max testing",
                      "DEXA body composition scan",
                      "Heart rate variability (HRV) baseline",
                      "Genetic fitness markers (via partner lab)"
                  ],
                  price: "$399 (annual update $249)"
              }
          ]
      },
  
      // Specialized Populations  
      nicheServices: {
          title: "Tailored For You",
          programs: [
              {
                  name: "Golden Vitality (65+)",
                  focus: [
                      "Bone density preservation",
                      "Fall prevention drills",
                      "Social workout cohorts",
                      "Cognitive-movement integration"
                  ],
                  price: "$159/month"
              },
              {
                  name: "Teen Athletic Development",
                  focus: [
                      "Growth plate-safe programming",
                      "College sports prep",
                      "Confidence-building through fitness",
                      "Injury resilience education"
                  ],
                  price: "$129/month"
              }
          ]
      }
    },
  
    // Membership Plans
    membershipPlans: [
      {
        id: "Basic",
        name: "Essential Vitality",
        price: 49.99,
        period: "month",
        features: [
          "Access to all gym equipment",
          "Free fitness assessment",
          "3 group classes/month",
          "Locker room access"
        ],
        bestSeller: false
      },
      {
        id: "Premium",
        name: "Peak Performance",
        price: 89.99,
        period: "month",
        features: [
          "Unlimited group classes",
          "Sauna & steam room access",
          "2 personal training sessions",
          "Nutrition consultation",
          "Priority class booking"
        ],
        bestSeller: true
      },
      {
        id: "Elite",
        name: "Total Transformation",
        price: 149.99,
        period: "month",
        features: [
          "Unlimited personal training",
          "Cryotherapy sessions",
          "Meal planning service",
          "24/7 gym access",
          "All premium amenities"
        ],
        bestSeller: false
      }
    ],
  
    classSchedule: {
        monday: [
          { time: "6:00 AM", name: "Sunrise Yoga", instructor: "Nadia Chen", duration: 45, difficulty: "Beginner", spots: 12 },
          { time: "7:30 AM", name: "HIIT Blast", instructor: "Marcus Johnson", duration: 30, difficulty: "Advanced", spots: 8 },
          { time: "12:00 PM", name: "Power Lunch Cycling", instructor: "Jamal Wright", duration: 45, difficulty: "Intermediate", spots: 15 },
          { time: "6:30 PM", name: "Boxing Fundamentals", instructor: "Tyson Reeves", duration: 60, difficulty: "All Levels", spots: 10 }
        ],
        tuesday: [
          { time: "5:30 AM", name: "Bootcamp Challenge", instructor: "Sarah Miller", duration: 60, difficulty: "Advanced", spots: 10 },
          { time: "9:00 AM", name: "Aqua Aerobics", instructor: "Megan O'Connor", duration: 45, difficulty: "Beginner", spots: 20 },
          { time: "5:45 PM", name: "Pilates Reform", instructor: "Olivia Santos", duration: 50, difficulty: "Intermediate", spots: 8 },
          { time: "7:00 PM", name: "Kettlebell Kings & Queens", instructor: "Dmitri Petrov", duration: 45, difficulty: "Intermediate", spots: 12 }
        ],
        wednesday: [
          { time: "6:15 AM", name: "Vinyasa Flow", instructor: "Nadia Chen", duration: 60, difficulty: "Intermediate", spots: 15 },
          { time: "8:00 AM", name: "Senior Strength", instructor: "Sarah Miller", duration: 45, difficulty: "Beginner", spots: 15 },
          { time: "12:30 PM", name: "Core Crusher", instructor: "Marcus Johnson", duration: 30, difficulty: "All Levels", spots: 20 },
          { time: "6:00 PM", name: "Zumba Fiesta", instructor: "Carlos Mendez", duration: 50, difficulty: "Beginner", spots: 25 }
        ],
        thursday: [
          { time: "5:45 AM", name: "Rise & Grind Cycling", instructor: "Jamal Wright", duration: 45, difficulty: "Advanced", spots: 15 },
          { time: "10:00 AM", name: "Yin Yoga & Sound Bath", instructor: "Priya Kapoor", duration: 75, difficulty: "Beginner", spots: 18 },
          { time: "4:30 PM", name: "Teen Fitness", instructor: "Tyson Reeves", duration: 45, difficulty: "Intermediate", spots: 15 },
          { time: "6:45 PM", name: "Olympic Lifting Clinic", instructor: "Dmitri Petrov", duration: 90, difficulty: "Advanced", spots: 6 }
        ],
        friday: [
          { time: "6:00 AM", name: "Sun Salutation Bootcamp", instructor: "Nadia Chen", duration: 60, difficulty: "Intermediate", spots: 15 },
          { time: "9:30 AM", name: "Aqua Zumba", instructor: "Megan O'Connor", duration: 45, difficulty: "Beginner", spots: 20 },
          { time: "12:00 PM", name: "Executive Lunch Burn", instructor: "Sarah Miller", duration: 30, difficulty: "All Levels", spots: 12 },
          { time: "5:30 PM", name: "Friday Night Fight Club", instructor: "Tyson Reeves", duration: 60, difficulty: "Advanced", spots: 10 }
        ],
        saturday: [
          { time: "7:30 AM", name: "Total Body Burn", instructor: "Marcus Johnson", duration: 60, difficulty: "Intermediate", spots: 20 },
          { time: "9:00 AM", name: "Family Yoga", instructor: "Priya Kapoor", duration: 50, difficulty: "Beginner", spots: 25 },
          { time: "10:30 AM", name: "Dance Cardio Party", instructor: "Carlos Mendez", duration: 45, difficulty: "Beginner", spots: 30 },
          { time: "12:00 PM", name: "Strongman Workshop", instructor: "Dmitri Petrov", duration: 90, difficulty: "Advanced", spots: 8 }
        ],
        sunday: [
          { time: "8:00 AM", name: "Restorative Yoga", instructor: "Nadia Chen", duration: 75, difficulty: "Beginner", spots: 18 },
          { time: "10:00 AM", name: "Cycling Scenic Journey", instructor: "Jamal Wright", duration: 60, difficulty: "Intermediate", spots: 15 },
          { time: "4:00 PM", name: "Mobility & Recovery", instructor: "Olivia Santos", duration: 45, difficulty: "All Levels", spots: 20 },
          { time: "5:30 PM", name: "Sunset Stretch", instructor: "Priya Kapoor", duration: 30, difficulty: "Beginner", spots: 25 }
        ]
    },
      
    trainers: [
        {
            id: 1,
            name: "Marcus Johnson",
            specialty: "Strength Training & Conditioning",
            certification: "NASM, ACE",
            bio: "Former college football strength coach with 12 years experience training professional athletes. Creator of the popular 'HIIT Blast' and 'Total Body Burn' programs.",
            image: "/trainers/marcus.jpg",
            availableForPT: true,
            classes: ["HIIT Blast", "Core Crusher", "Total Body Burn"]
        },
        {
            id: 2,
            name: "Nadia Chen",
            specialty: "Yoga & Mindfulness",
            certification: "RYT-500, Yoga Medicine",
            bio: "Trained in India and Bali, Nadia blends traditional yoga with modern movement science. She leads our yoga teacher training program and specializes in therapeutic yoga.",
            image: "/trainers/nadia.jpg",
            availableForPT: true,
            classes: ["Sunrise Yoga", "Vinyasa Flow", "Sun Salutation Bootcamp", "Restorative Yoga"]
        },
        {
            id: 3,
            name: "Jamal Wright",
            specialty: "Cycling & Endurance Training",
            certification: "Schwinn Cycling, USAC Level 2",
            bio: "Former competitive cyclist who brings high-energy motivation to every ride. His 'Power Lunch' series has helped hundreds of members improve their cardiovascular health.",
            image: "/trainers/jamal.jpg",
            availableForPT: true,
            classes: ["Power Lunch Cycling", "Rise & Grind Cycling", "Cycling Scenic Journey"]
        },
        {
            id: 4,
            name: "Tyson Reeves",
            specialty: "Combat Sports & Functional Fitness",
            certification: "NSCA-CPT, USA Boxing",
            bio: "With a background in MMA and golden gloves boxing, Tyson brings technical precision to his classes. His focus is on building confidence through skill development.",
            image: "/trainers/tyson.jpg",
            availableForPT: true,
            classes: ["Boxing Fundamentals", "Teen Fitness", "Friday Night Fight Club"]
        },
        {
            id: 5,
            name: "Sarah Miller",
            specialty: "Bootcamp & Senior Fitness",
            certification: "ACE, Senior Fitness Specialist",
            bio: "Sarah specializes in making fitness accessible for all ages and ability levels. Her bootcamp classes are legendary for their creative obstacle courses.",
            image: "/trainers/sarah.jpg",
            availableForPT: true,
            classes: ["Bootcamp Challenge", "Senior Strength", "Executive Lunch Burn"]
        },
        {
            id: 6,
            name: "Megan O'Connor",
            specialty: "Aqua Fitness & Low-Impact Training",
            certification: "AEA, Arthritis Foundation",
            bio: "Our aquatic specialist who believes water workouts can be both challenging and therapeutic. Perfect for recovery or cross-training.",
            image: "/trainers/megan.jpg",
            availableForPT: false,
            classes: ["Aqua Aerobics", "Aqua Zumba"]
        },
        {
            id: 7,
            name: "Olivia Santos",
            specialty: "Pilates & Postural Correction",
            certification: "Polestar Pilates, PMA-CPT",
            bio: "Physical therapist turned Pilates instructor who focuses on alignment and injury prevention. Her reformers classes sell out weeks in advance.",
            image: "/trainers/olivia.jpg",
            availableForPT: true,
            classes: ["Pilates Reform", "Mobility & Recovery"]
        },
        {
            id: 8,
            name: "Dmitri Petrov",
            specialty: "Powerlifting & Strongman Training",
            certification: "ISSA, Strongman Corporation",
            bio: "Competitive strongman who holds state records in deadlift and log press. Known for his technical coaching style that helps lifters break through plateaus.",
            image: "/trainers/dmitri.jpg",
            availableForPT: true,
            classes: ["Kettlebell Kings & Queens", "Olympic Lifting Clinic", "Strongman Workshop"]
        },
        {
            id: 9,
            name: "Carlos Mendez",
            specialty: "Dance Fitness & Latin Rhythms",
            certification: "Zumba, Bachata Fitness",
            bio: "Professional dancer who infuses his fitness classes with infectious energy and authentic Latin rhythms. No dance experience needed - just bring your smile!",
            image: "/trainers/carlos.jpg",
            availableForPT: false,
            classes: ["Zumba Fiesta", "Dance Cardio Party"]
        },
        {
            id: 10,
            name: "Priya Kapoor",
            specialty: "Therapeutic Yoga & Sound Healing",
            certification: "Yoga Therapy, Sound Healer",
            bio: "Combines traditional Indian yoga practices with modern sound therapy techniques. Her classes are perfect for stress relief and deep relaxation.",
            image: "/trainers/priya.jpg",
            availableForPT: true,
            classes: ["Yin Yoga & Sound Bath", "Family Yoga", "Sunset Stretch"]
        },
        
    ],
  
    // Testimonials
    testimonials: [
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/men/32.jpg",
        testamonialDataName: "Alex R. (Corporate Executive)",
        testamonial: "After 15 years at a desk job, my back pain was unbearable. Vitality Haven's 'Desk-to-Fit' program changed everything - posture correction, stress-relief workouts, and ergonomic advice. In 6 months, I lost 28lbs and eliminated chronic pain. Now I lead our company's wellness initiative!",
        socialMedia: [
          { url: "https://twitter.com", icon: "twitter" },
          { url: "https://instagram.com", icon: "instagram" }
        ],
        ratings: 5,
        date: "2023-11-15",
        program: "Executive Wellness Package"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/women/44.jpg",
        testamonialDataName: "Priya K. (New Mom)",
        testamonial: "Postpartum depression hit hard after my twins were born. The 'MomStrong' program gave me back my strength - both physically and mentally. The nursery let me focus on workouts, while the mom's support group became my lifeline. From C-section recovery to running 5Ks with my stroller!",
        socialMedia: [
          { url: "https://facebook.com", icon: "facebook" }
        ],
        ratings: 5,
        date: "2023-10-28",
        program: "Postnatal Fitness Program"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/men/75.jpg",
        testamonialDataName: "Marcus T. (Diabetes Prevention)",
        testamonial: "My doctor's warning about prediabetes scared me straight. The medical team created a customized plan - gentle strength training for my arthritis combined with nutrition coaching. Not only did I lose 25lbs, but my A1C dropped to normal levels. The diabetes prevention cooking classes were game-changers!",
        socialMedia: [
          { url: "https://linkedin.com", icon: "linkedin" }
        ],
        ratings: 4.5,
        date: "2023-12-05",
        program: "Metabolic Reset Program"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/women/63.jpg",
        testamonialDataName: "Jamie L. (Retiree)",
        testamonial: "At 68, I thought my active days were over. The senior specialists modified everything for my osteoporosis and knee replacements. The pool therapy let me move pain-free, and now I'm in the over-60s dance troupe! My grandkids can't keep up with me anymore.",
        socialMedia: [],
        ratings: 5,
        date: "2023-09-22",
        program: "Golden Vitality Senior Fitness"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/men/19.jpg",
        testamonialDataName: "Carlos M. (Night Shift Nurse)",
        testamonial: "Working ER nights destroyed my health. The 24/7 access meant I could workout at 4am after shifts. Trainer Sarah designed a 'circadian rhythm' program that actually helped me sleep better. The overnight smoothie bar became my recovery station!",
        socialMedia: [
          { url: "https://twitter.com", icon: "twitter" },
          { url: "https://instagram.com", icon: "instagram" },
          { url: "https://youtube.com", icon: "youtube" }
        ],
        ratings: 4,
        date: "2023-11-30",
        program: "Night Owl Fitness Plan"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/women/28.jpg",
        testamonialDataName: "Nia W. (Anxiety Warrior)",
        testamonial: "My panic attacks kept me from leaving home. The 'Mindful Movement' program combined therapy techniques with exercise. The sensory-friendly hours and trauma-informed trainers made me feel safe. Now I'm not just managing anxiety - I'm training for my first 5K!",
        socialMedia: [
          { url: "https://tiktok.com", icon: "tiktok" }
        ],
        ratings: 5,
        date: "2023-10-15",
        program: "Mental Health Movement"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/men/42.jpg",
        testamonialDataName: "Ethan P. (College Athlete)",
        testamonial: "Tore my ACL during basketball season. The sports rehab team worked with my college trainers to create a recovery plan. Their anti-gravity treadmill and cryotherapy got me back on court 2 months early - just in time for playoffs!",
        socialMedia: [
          { url: "https://twitter.com", icon: "twitter" }
        ],
        ratings: 4.5,
        date: "2023-12-18",
        program: "Elite Sports Rehab"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/women/51.jpg",
        testamonialDataName: "Sophia C. (Working Mom of 3)",
        testamonial: "Between Zoom calls and diaper changes, I'd given up on myself. The '30-Minute Power Parent' program fits into naptimes, and the kids BEG to go to the childcare center. The nutritionist's '5-minute meal' system saved our family's health. Down 40lbs and finally have energy again!",
        socialMedia: [
          { url: "https://instagram.com", icon: "instagram" }
        ],
        ratings: 5,
        date: "2023-11-02",
        program: "Time-Crunched Parent Plan"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/men/67.jpg",
        testamonialDataName: "Derek H. (Former Couch Potato)",
        testamonial: "At 320lbs, I could barely walk up stairs. Trainer Jamal started with chair exercises and celebrated every small victory. The 'No Judgment Zone' philosophy kept me coming back. 18 months later, I've run three 10Ks and became a certified nutrition coach!",
        socialMedia: [],
        ratings: 5,
        date: "2023-09-10",
        program: "Beginner Transformation"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/women/37.jpg",
        testamonialDataName: "Lena K. (Cancer Survivor)",
        testamonial: "After chemo, I could barely lift my arms. The oncology rehab specialists rebuilt my strength gradually - starting with breathing exercises. The infrared sauna helped with nerve pain, and the survivor's yoga class gave me hope. Now I lead the monthly 'Thrivers' support group!",
        socialMedia: [
          { url: "https://facebook.com", icon: "facebook" },
          { url: "https://instagram.com", icon: "instagram" }
        ],
        ratings: 4,
        date: "2023-10-05",
        program: "Post-Treatment Rebuild"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/men/88.jpg",
        testamonialDataName: "Tyler G. (Tech Entrepreneur)",
        testamonial: "The 90-Day CEO Challenge saved my health and business. Morning 'Power Hour' combines workout, meditation, and planning. The executive chef's meal prep service saved 10+ hours weekly. My company's growth tripled as my waistline shrank!",
        socialMedia: [
          { url: "https://twitter.com", icon: "twitter" }
        ],
        ratings: 5,
        date: "2023-12-22",
        program: "High-Performance CEO"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/women/92.jpg",
        testamonialDataName: "Maya S. (College Student)",
        testamonial: "The student membership made fitness affordable. The 'Study Break' workouts boosted my focus better than caffeine! The nutritionist taught me dorm-room meal prep that cured my 'freshman 15'. Now I'm president of our campus wellness club.",
        socialMedia: [
          { url: "https://instagram.com", icon: "instagram" }
        ],
        ratings: 5,
        date: "2023-11-19",
        program: "Campus Vitality Plan"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/men/15.jpg",
        testamonialDataName: "Omar J. (Retired Vet)",
        testamonial: "Service injuries left me with chronic pain. The adaptive fitness program uses techniques from VA rehab hospitals. The veteran's meetups gave me camaraderie I'd missed since discharge. From wheelchair to walking 5 miles daily!",
        socialMedia: [],
        ratings: 4.5,
        date: "2023-10-30",
        program: "Heroes Fitness Initiative"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/women/24.jpg",
        testamonialDataName: "Elena V. (Yoga Teacher)",
        testamonial: "Vitality Haven's teacher training elevated my practice beyond the physical. The anatomy modules helped me safely guide students with injuries. Their trauma-informed approach transformed how I teach. Now I lead classes here and mentor new instructors!",
        socialMedia: [
          { url: "https://youtube.com", icon: "youtube" }
        ],
        ratings: 5,
        date: "2023-09-15",
        program: "Advanced Yoga Certification"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/men/53.jpg",
        testamonialDataName: "Kyle B. (Data Scientist)",
        testamonial: "The app's biometric tracking satisfies my analytics brain! The AI trainer adjusts my program based on sleep/stress data. Joined the 'Quantified Self' group where we optimize workouts like code. PR'd all my lifts while reducing injury risk by 62%!",
        socialMedia: [
          { url: "https://twitter.com", icon: "twitter" },
          { url: "https://linkedin.com", icon: "linkedin" }
        ],
        ratings: 4,
        date: "2023-12-10",
        program: "Biohacker Elite"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/women/76.jpg",
        testamonialDataName: "Aisha N. (Breast Cancer Survivor)",
        testamonial: "After double mastectomy, I feared I'd never regain strength. The women's rehab program rebuilt my confidence along with my body. The lymphedema massage therapy was life-changing. Now I lead 'Strength After Surgery' workshops!",
        socialMedia: [
          { url: "https://instagram.com", icon: "instagram" }
        ],
        ratings: 5,
        date: "2023-11-25",
        program: "Recovery Warriors"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/men/29.jpg",
        testamonialDataName: "Daniel F. (Powerlifter)",
        testamonial: "Plateaued for 2 years until joining Vitality's strength lab. The force plate analysis revealed imbalances I never noticed. Their Westside Barbell programming took my deadlift from 505 to 585 in 6 months! The strongman crew pushes me like family.",
        socialMedia: [],
        ratings: 4.5,
        date: "2023-10-12",
        program: "Elite Powerlifting"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/women/81.jpg",
        testamonialDataName: "Rachel M. (Bride-to-Be)",
        testamonial: "The 'Wedding Ready' program delivered more than I hoped - not just weight loss but radiant health. The bridal bootcamp group kept me motivated, and the nutritionist's 'stress eating' strategies saved me during planning. Felt amazing in my dress AND had energy to dance all night!",
        socialMedia: [
          { url: "https://facebook.com", icon: "facebook" },
          { url: "https://instagram.com", icon: "instagram" }
        ],
        ratings: 5,
        date: "2023-09-28",
        program: "Bridal Transformation"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/men/64.jpg",
        testamonialDataName: "Samuel T. (Firefighter)",
        testamonial: "The tactical fitness program mimics real fireground demands. The heat acclimation chamber prepared me better than any drill. After 6 months, my air tank lasts 25% longer on calls. Our whole station joined after seeing my results!",
        socialMedia: [
          { url: "https://twitter.com", icon: "twitter" }
        ],
        ratings: 4,
        date: "2023-12-15",
        program: "First Responder Fitness"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/women/33.jpg",
        testamonialDataName: "Isabella G. (Flight Attendant)",
        testamonial: "Constant travel wrecked my routine. The global membership lets me use top facilities worldwide. The 'Jet Lag Reset' program helps with time zones, and the travel-friendly workouts need no equipment. Finally consistent despite my crazy schedule!",
        socialMedia: [
          { url: "https://instagram.com", icon: "instagram" }
        ],
        ratings: 5,
        date: "2023-11-08",
        program: "Road Warrior Wellness"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/men/47.jpg",
        testamonialDataName: "Nathan W. (Marathoner)",
        testamonial: "The endurance lab's VO2 max testing revealed inefficient breathing patterns. Their running form analysis shaved 3 minutes off my mile. The cryotherapy lets me train harder without joint pain. Qualified for Boston at 45!",
        socialMedia: [],
        ratings: 5,
        date: "2023-10-20",
        program: "Peak Endurance"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/women/59.jpg",
        testamonialDataName: "Olivia P. (Physical Therapist)",
        testamonial: "As a PT, I'm blown by Vitality's preventative approach. The movement screens catch issues before they become injuries. I now refer patients here for prehab - their recovery times have improved dramatically!",
        socialMedia: [
          { url: "https://linkedin.com", icon: "linkedin" }
        ],
        ratings: 4.5,
        date: "2023-09-05",
        program: "Medical Professional Partnership"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/men/71.jpg",
        testamonialDataName: "Victor L. (Strength Coach)",
        testamonial: "The strongman certification elevated my coaching. Learning to implement atlas stones and yoke walks safely transformed my athletes' functional strength. The continuing education here keeps me at the cutting edge!",
        socialMedia: [
          { url: "https://youtube.com", icon: "youtube" }
        ],
        ratings: 5,
        date: "2023-12-28",
        program: "Coaches Development"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/women/42.jpg",
        testamonialDataName: "Hannah R. (Expectant Mother)",
        testamonial: "The prenatal program adjusted perfectly through each trimester. The pelvic floor specialists prevented common pregnancy pains. Even at 8 months, I felt strong and mobile thanks to my modified workouts!",
        socialMedia: [
          { url: "https://instagram.com", icon: "instagram" }
        ],
        ratings: 5,
        date: "2023-11-12",
        program: "Pregnancy Fitness"
      },
      {
        testamonialDataImage: "https://randomuser.me/api/portraits/men/22.jpg",
        testamonialDataName: "Jordan K. (Gym Owner)",
        testamonial: "After 10 years in the industry, Vitality Haven still impresses me. The staff training programs are revolutionary. I've implemented their member retention systems - our churn rate dropped 40% in 3 months!",
        socialMedia: [
          { url: "https://twitter.com", icon: "twitter" },
          { url: "https://instagram.com", icon: "instagram" }
        ],
        ratings: 5,
        date: "2023-10-08",
        program: "Gym Owner Mastermind"
      }
    ],
  
    // Special Programs
    specialPrograms: [
      {
        name: "90-Day Reboot Challenge",
        description: "Our most popular transformation program combining nutrition, fitness and accountability to jumpstart your health journey.",
        duration: "90 days",
        nextStartDate: "2024-02-01",
        price: 299,
        includes: [
          "Custom meal plan",
          "3 weekly training sessions",
          "Progress tracking",
          "Weekly check-ins",
          "Final assessment"
        ]
      },
      {
        name: "Executive Wellness Package",
        description: "Tailored for busy professionals needing efficient, results-driven fitness solutions.",
        duration: "Ongoing",
        price: 499,
        includes: [
          "Before-work training sessions",
          "Meal delivery options",
          "Stress management coaching",
          "Biometric screenings"
        ]
      }
    ],
  
    // Blog Content Ideas
    blogPosts: [
      {
        title: "The Neuroscience of Muscle Memory: How Your Brain Learns Movements",
        excerpt: "Discover how your brain encodes movement patterns and how to leverage this for faster skill acquisition in any sport or exercise.",
        category: "Neuroscience",
        date: "2024-03-15",
        readTime: "8 min",
        likes: 1243,
        views: 8560,
        contentSections: [
          "The role of the cerebellum in movement automation",
          "How many repetitions it really takes to form a new neural pathway",
          "Why sleeping after practice improves performance by 20-30%",
          "The surprising way mirror neurons help perfect your form"
        ],
        featuredImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        researchCited: [
          "Journal of Neurophysiology (2023)",
          "Nature Neuroscience Study on Motor Learning"
        ],
        trainerQuote: "What we call 'muscle memory' is actually brain memory - your nervous system is the true athlete. - Dr. Rebecca Stern"
      },
      {
        title: "5 Biohacks to Boost Your Workout Performance",
        excerpt: "Science-backed tricks to enhance energy, focus, and recovery using cutting-edge neuroscience and physiology research.",
        category: "Performance Tips",
        date: "2024-03-10",
        readTime: "6 min",
        likes: 892,
        views: 5420,
        contentSections: [
          "The 2-minute breathing technique that increases oxygen uptake",
          "How cold exposure pre-workout can enhance endurance",
          "The optimal caffeine timing based on your chronotype",
          "Why chewing gum between sets improves power output",
          "How blue light exposure post-workout accelerates recovery"
        ],
        featuredImage: "https://images.pexels.com/photos/6551166/pexels-photo-6551166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        researchCited: [
          "European Journal of Applied Physiology",
          "Journal of Sports Sciences"
        ]
      },
      {
        title: "The Cognitive Benefits of Strength Training You Never Knew",
        excerpt: "Lifting weights does more than build muscle - it literally reshapes your brain for better thinking and mental resilience.",
        category: "Neuroscience",
        date: "2024-03-05",
        readTime: "10 min",
        likes: 1567,
        views: 9230,
        contentSections: [
          "How resistance training increases BDNF (brain-derived neurotrophic factor)",
          "The connection between grip strength and cognitive decline",
          "Why compound lifts improve decision-making skills",
          "The ideal rest periods for mental benefits vs physical gains"
        ],
        featuredImage: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        researchCited: [
          "Harvard Brain Health Study",
          "Frontiers in Aging Neuroscience"
        ],
        memberSpotlight: "After 6 months of strength training, my focus at work improved dramatically - I cut my ADHD medication dose in half. - Mark T., member since 2022"
      },
      {
        title: "The 90-Second Rule: How to Push Past Mental Barriers",
        excerpt: "Neuroscience reveals why you want to quit at the 90-second mark - and how elite athletes override this instinct.",
        category: "Mindset",
        date: "2024-02-28",
        readTime: "5 min",
        likes: 2105,
        views: 12400,
        contentSections: [
          "The brain's threat detection system during exertion",
          "Why discomfort peaks then plateaus",
          "Verbal cues that reduce perceived effort by 15%",
          "How to reframe your body's warning signals"
        ],
        featuredImage: "https://images.pexels.com/photos/3763872/pexels-photo-3763872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        researchCited: [
          "Journal of Applied Physiology",
          "Sports Medicine Research Institute"
        ],
        challenge: "Try our #90SecondChallenge this week!"
      },
      {
        title: "Sleep Like an Athlete: Recovery Science for Better Gains",
        excerpt: "Optimize your sleep architecture using techniques from Olympic training centers and sleep labs.",
        category: "Recovery",
        date: "2024-02-22",
        readTime: "12 min",
        likes: 1789,
        views: 9870,
        contentSections: [
          "The 4 sleep cycles and their specific recovery functions",
          "How to time your workouts for optimal sleep quality",
          "The temperature sweet spot for muscle repair",
          "Why your sleeping position affects DOMS (delayed onset muscle soreness)",
          "Sleep supplements that actually work (and 3 that don't)"
        ],
        featuredImage: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        researchCited: [
          "National Sleep Foundation Guidelines",
          "Stanford Sleep Research Center"
        ],
        trainerQuote: "You don't grow in the gym - you grow in bed. Recovery is where the magic happens. - Sarah Miller"
      },
      {
        title: "The Pre-Workout Brain Hack Navy SEALs Use",
        excerpt: "This simple 30-second technique can increase workout intensity and enjoyment by activating your brain's reward system.",
        category: "Neuroscience",
        date: "2024-02-15",
        readTime: "4 min",
        likes: 2450,
        views: 15320,
        contentSections: [
          "How dopamine priming works",
          "The exact visualization sequence used by special forces",
          "Why this works better than caffeine for some people",
          "How to measure your personal response"
        ],
        featuredImage: "https://images.pexels.com/photos/6295994/pexels-photo-6295994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        researchCited: [
          "Journal of Special Operations Medicine",
          "Neuropsychology Review"
        ]
      },
      {
        title: "Why Your Workout Playlist Is Holding You Back",
        excerpt: "New research reveals how music tempo and lyrics affect strength, endurance, and form - and what to listen to instead.",
        category: "Performance Tips",
        date: "2024-02-10",
        readTime: "7 min",
        likes: 1320,
        views: 7650,
        contentSections: [
          "The ideal BPM range for different workout types",
          "How lyrical content affects motor control",
          "When silence is better than music",
          "The unexpected benefits of nature sounds for recovery",
          "How to create the perfect workout playlist"
        ],
        featuredImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        researchCited: [
          "Journal of Sports Exercise Psychology",
          "Baylor University Music Study"
        ],
        memberSpotlight: "Switching to instrumental music added 20lbs to my deadlift in 8 weeks - the focus difference was incredible. - Jenna L., powerlifting member"
      },
      {
        title: "The Cognitive Cost of Multitasking During Workouts",
        excerpt: "Checking your phone between sets? Neuroscience shows why this sabotages your gains and how to stay focused.",
        category: "Neuroscience",
        date: "2024-02-05",
        readTime: "9 min",
        likes: 987,
        views: 6320,
        contentSections: [
          "How task-switching depletes neural resources",
          "The 'attention residue' effect on muscle activation",
          "Why your rest periods are more important than you think",
          "5 techniques to maintain workout focus",
          "How to measure your personal focus threshold"
        ],
        featuredImage: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        researchCited: [
          "Journal of Cognitive Neuroscience",
          "Human Performance Laboratory Studies"
        ],
        challenge: "Try our #NoPhoneWorkout challenge!"
      }
    ],
  
    // Contact Information
    contact: {
      generalInquiries: "hello@vitalityhaven.com",
      careers: "careers@vitalityhaven.com",
      press: "press@vitalityhaven.com",
      phone: "(555) 789-0123"
    },
  
    // Current Promotions
    promotions: [
      {
        title: "New Year Transformation Challenge",
        description: "Join by January 15th and get 50% off your first month plus a free personal training session!",
        code: "VH2024",
        expires: "2024-01-15"
      },
      {
        title: "Bring a Friend Week",
        description: "Members can bring a friend for free January 8-14!",
        expires: "2024-01-14"
      }
    ],

    amenities: [
        {
            id: "amenities-0",
            type: "spa"
        },
        {
            id: "amenities-1",
            type: "pool"
        },
        {
            id: "amenities-2",
            type: "cryotherapy chamber"
        },
        {
            id: "amenities-2",
            type: "cryotherapy chamber"
        },
        {
            id: "amenities-3",
            type: "rooftop yoga deck"
        }
        
    ],

    footerContent: {
    
      quickLinks: [
        { title: "Membership Plans", url: "/memberships" },
        { title: "Class Schedule", url: "/schedule" },
        { title: "Personal Training", url: "/training" },
        { title: "Online Courses", url: "/courses" },
        { title: "Blog", url: "/blog" },
        { title: "Locations", url: "/locations" }
      ],

      contactInfo: {
        generalEmail: "hello@vitalityhaven.com",
        supportEmail: "support@vitalityhaven.com",
        phone: "+1 (555) 789-0123",
        corporateAddress: "200 Hudson Yards, New York, NY 10001",
        hours: "Monday-Friday: 8AM-8PM EST"
      },

      careers: {
        title: "Join Our Team",
        description: "We're always looking for passionate fitness professionals and support staff to join our growing family.",
        currentOpenings: [
          {
            position: "Personal Trainer",
            type: "Full-time",
            location: "Multiple Locations",
            requirements: [
              "NASM/ACE certification or equivalent",
              "2+ years training experience",
              "Specialization in one discipline"
            ],
            applyLink: "/careers/trainer"
          },
          {
            position: "Group Fitness Instructor",
            type: "Part-time/Contract",
            location: "Multiple Locations",
            requirements: [
              "Certification in specialty area",
              "Dynamic teaching ability",
              "Weekend availability preferred"
            ],
            applyLink: "/careers/instructor"
          },
          {
            position: "Wellness Coordinator",
            type: "Full-time",
            location: "New York, NY",
            requirements: [
              "Degree in kinesiology or related field",
              "3+ years in wellness programming",
              "Excellent organizational skills"
            ],
            applyLink: "/careers/wellness"
          },
          {
            position: "Front Desk Associate",
            type: "Part-time",
            location: "Los Angeles, CA",
            requirements: [
              "Customer service experience",
              "Basic fitness knowledge",
              "Flexible schedule"
            ],
            applyLink: "/careers/frontdesk"
          },
          {
            position: "Digital Content Creator",
            type: "Contract",
            location: "Remote",
            requirements: [
              "Portfolio of fitness content",
              "Video editing skills",
              "Understanding of fitness trends"
            ],
            applyLink: "/careers/content"
          },
          {
            position: "Facility Manager",
            type: "Full-time",
            location: "Chicago, IL",
            requirements: [
              "5+ years gym management",
              "Budgeting experience",
              "Staff leadership skills"
            ],
            applyLink: "/careers/manager"
          }
        ],
        benefits: [
          "Competitive compensation packages",
          "Free premium membership",
          "Continuing education stipends",
          "Health and wellness benefits",
          "Career advancement opportunities",
          "Global location transfers"
        ],
        culture: "At Vitality Haven, we foster a culture of growth, collaboration, and passion for transforming lives through fitness. Our team enjoys a dynamic work environment with regular team workouts, education days, and community events."
      },

      legal: {
        copyright: `© ${new Date().getFullYear()} Vitality Haven International. All rights reserved.`,
        links: [
          { title: "Privacy Policy", url: "/privacy" },
          { title: "Terms of Service", url: "/terms" },
          { title: "Accessibility", url: "/accessibility" },
          { title: "Do Not Sell My Info", url: "/privacy#donotsell" }
        ]
      },

      newsletter: {
        title: "Stay Connected",
        description: "Get exclusive fitness tips, class updates, and special offers delivered to your inbox.",
        placeholder: "Your email address",
        cta: "Subscribe",
        benefits: [
          "Weekly workout inspiration",
          "Member-only discounts",
          "First access to new programs",
          "Healthy recipes and nutrition tips"
        ]
      },

      appDownload: {
        title: "Vitality Haven App",
        description: "Book classes, track workouts, and connect with trainers on our mobile app.",
        appStore: "/download-ios",
        playStore: "/download-android",
        features: [
          "Real-time class availability",
          "Digital locker",
          "Workout history",
          "Community challenges"
        ]
      }
    }
};
  
// Sample function to display featured classes
const displayFeaturedClasses = () => {
    // Get current date information
    const now = new Date();
    const currentDay = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Create a weekly seed based on year and week number for consistent weekly features
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    const weekSeed = Math.floor(now / oneWeek);
    
    // Get days to feature (current day + next 2 days, wrapping around if needed)
    const daysToFeature = [];
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    for (let i = 0; i < 3; i++) {
        const dayIndex = (currentDay + i) % 7;
        daysToFeature.push(dayNames[dayIndex]);
    }
    
    // Filter classes that are upcoming today
    const filterUpcomingClasses = (classes) => {
        return classes.filter(cls => {
            if (dayNames[currentDay] !== daysToFeature[0]) return true; // Not today
            
            const [hour, minute] = cls.time.split(':').map(Number);
            const isAM = cls.time.includes('AM');
            const classHour = isAM ? hour : hour === 12 ? 12 : hour + 12;
            
            return classHour > currentHour || 
                  (classHour === currentHour && minute > currentMinute);
        });
    };
    
    // Get eligible classes from each featured day
    const eligibleClasses = daysToFeature.map(day => {
        const dayClasses = vitalityHaven.classSchedule[day];
        return filterUpcomingClasses(dayClasses);
    }).flat();
    
    // Select featured classes using weekSeed for consistent weekly selection
    const featuredClasses = [];
    const classCount = eligibleClasses.length;
    
    if (classCount > 0) {
        // Select 3 classes using pseudo-random selection based on week seed
        for (let i = 0; i < Math.min(3, classCount); i++) {
            const index = (weekSeed * 31 + i * 11) % classCount; // Simple hash-like function
            featuredClasses.push(eligibleClasses[index]);
        }
    } else {
        // Fallback if no upcoming classes - select random classes from the week
        const allClasses = Object.values(vitalityHaven.classSchedule).flat();
        for (let i = 0; i < Math.min(3, allClasses.length); i++) {
            const index = (weekSeed * 31 + i * 11) % allClasses.length;
            featuredClasses.push(allClasses[index]);
        }
    }
    
    // Display the featured classes
    console.log(`🔥 FEATURED CLASSES (${now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}) 🔥`);
    
    if (featuredClasses.length === 0) {
        console.log("No upcoming featured classes this week - check back soon!");
        return;
    }
    
    featuredClasses.forEach((cls, i) => {
        const day = daysToFeature[i % daysToFeature.length];
        console.log(
            `${cls.name} with ${cls.instructor}\n` +
            `📅 ${day.charAt(0).toUpperCase() + day.slice(1)} at ${cls.time}\n` +
            `⏱️ ${cls.duration} min | 🏷️ ${cls.difficulty} | 🎟️ ${cls.spots} spots left\n`
        );
    });
    
    console.log("Book now at vitalityhaven.com/classes!");
};


// Sample function to show membership comparison
const compareMemberships = () => {
    console.log("💪 MEMBERSHIP OPTIONS 💪");
    vitalityHaven.membershipPlans.forEach(plan => {
        console.log(`\n${plan.name.toUpperCase()}${plan.bestSeller ? " (BEST VALUE)" : ""}`);
        console.log(`$${plan.price}/${plan.period}`);
        plan.features.forEach(feat => console.log(`✓ ${feat}`));
    });
}


displayFeaturedClasses();
compareMemberships();

export { 
    socialMediaIcons, 
    cutOut, 
    vitalityHaven,
    decoration,
    vitalityHavenLogo
} 