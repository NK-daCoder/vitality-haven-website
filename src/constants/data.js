
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
import womenMidBody from "../assets/images/cutout/female-midbody-2.png";


import vitalityHavenLogoWhite from "../assets/vitality-haven-logo.svg";
import vitalityHavenLogoBlack from "../assets/vitality-haven-logo--black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        founded: 2015,
        yearsInBusiness: 10,
        totalMembers: 3500,
        expertTrainers: 12,
        members: 5000,
        // calculated based on the number of classes per day 
        weeklyClasses: 60, 
        locations: [
            {
            id: 1,
            name: "Downtown Oasis",
            address: "123 Wellness Way, Metropolis, NY 10001",
            phone: "(555) 123-4567",
            hours: {
                weekdays: "5:00 AM - 11:00 PM",
                weekends: "7:00 AM - 9:00 PM"
            },
            amenities: ["Indoor Pool", "Sauna", "Juice Bar", "Childcare"]
            },
            {
            id: 2,
            name: "Uptown Retreat",
            address: "456 Tranquility Trail, Metropolis, NY 10010",
            phone: "(555) 987-6543",
            hours: {
                weekdays: "6:00 AM - 10:00 PM",
                weekends: "8:00 AM - 8:00 PM"
            },
            amenities: ["Rooftop Yoga Deck", "Cryotherapy", "Smoothie Bar", "Physical Therapy"]
            }
        ]
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
        id: "basic",
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
        id: "premium",
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
        id: "elite",
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
          title: "The Vitality Morning Blueprint: How Our Top Members Start Their Days",
          excerpt: "We shadowed 12 of our most consistent members for a week to uncover the non-negotiable habits that fuel their success.",
          category: "Lifestyle",
          date: "2024-01-15",
          readTime: "12 min",
          contentSections: [
            "5:30 AM Hydration Rituals: Why lemon water beats coffee as a first drink",
            "The 7-Minute Mobility Sequence they all do before breakfast",
            "How they use 'habit stacking' to make fitness automatic",
            "The surprising bedtime habits that make early workouts easier"
          ],
          featuredImage: "/blog/morning-routines.jpg",
          trainerQuote: "Consistency beats intensity every time. These members prove small daily habits create massive transformations. - Marcus Johnson"
        },
        {
          title: "Macros Made Meaningful: A Food Lover's Guide to Nutrition",
          excerpt: "Stop counting grams and start understanding how food works for your unique body and goals.",
          category: "Nutrition",
          date: "2024-01-08",
          readTime: "15 min",
          contentSections: [
            "The 'Vitality Plate' method for perfect portions without scales",
            "How to identify your personal carb tolerance",
            "5 surprising high-protein foods our trainers swear by",
            "Why your workout timing changes your nutritional needs"
          ],
          featuredImage: "/blog/macro-plate.jpg",
          recipeIncluded: true
        },
        {
          title: "Gym Sanctuary: Designing Your Home for Movement",
          excerpt: "Transform your living space into an environment that naturally encourages activity without expensive equipment.",
          category: "Lifestyle",
          date: "2023-12-18",
          readTime: "10 min",
          contentSections: [
            "The 5 zones every movement-friendly home needs",
            "How to turn household items into workout tools",
            "Furniture arrangements that burn extra calories",
            "Our trainers' favorite minimalist home equipment"
          ],
          featuredImage: "/blog/home-gym-design.jpg",
          memberSpotlight: "After implementing these tips, I went from 3,000 to 12,000 daily steps without 'working out'. - Linda R., member since 2022"
        },
        {
          title: "The Connection Cure: How Group Fitness Fights Loneliness",
          excerpt: "New research shows our cycling classes may be as important for mental health as physical health.",
          category: "Wellness",
          date: "2023-12-01",
          readTime: "9 min",
          contentSections: [
            "The science of 'sweat bonding' and oxytocin release",
            "How we design classes to foster connections",
            "Member stories: From workout buddies to lifelong friends",
            "Why accountability partners triple success rates"
          ],
          featuredImage: "/blog/group-fitness.jpg",
          researchCited: ["Journal of Sport Psychology (2023)", "Mayo Clinic Social Wellness Study"]
        },
        {
          title: "Digital Detox for Better Workouts: Reclaim Your Focus",
          excerpt: "Why leaving your phone in your locker could be the key to your best performance yet.",
          category: "Lifestyle",
          date: "2023-11-27",
          readTime: "8 min",
          contentSections: [
            "How constant notifications sabotage your gains",
            "The 45-minute phone-free challenge our members love",
            "What heart rate data reveals about tech distractions",
            "Mindful movement techniques to deepen your practice"
          ],
          featuredImage: "/blog/digital-detox.jpg",
          challenge: "Try our #NoPhoneFit challenge this week!"
        },
        {
          title: "Seasonal Eating for Winter Energy: A Trainer's Pantry",
          excerpt: "What our nutrition coaches actually eat during colder months to maintain energy and immunity.",
          category: "Nutrition",
          date: "2023-11-14",
          readTime: "11 min",
          contentSections: [
            "The root vegetable roast everyone makes in bulk",
            "Why winter is the best time for protein-packed soups",
            "3 unexpected spices that boost metabolism in cold weather",
            "How to modify your macros when daylight decreases"
          ],
          featuredImage: "/blog/winter-food.jpg",
          seasonalRecipes: 4
        },
        {
          title: "From Gym to Life: How Fitness Habits Build Career Success",
          excerpt: "Members report unexpected professional breakthroughs after consistent training - here's why.",
          category: "Lifestyle",
          date: "2023-11-05",
          readTime: "14 min",
          contentSections: [
            "How discipline in the gym translates to workplace productivity",
            "The cognitive benefits of strategic workout timing",
            "Case study: The CEO who credits morning yoga for her promotion",
            "Why creative professionals need strength training"
          ],
          featuredImage: "/blog/gym-to-office.jpg",
          executiveInterviews: true
        },
        {
          title: "The Art of Active Recovery: Why Our Sauna Sessions Sell Out",
          excerpt: "Discover the science behind our most relaxing (and surprisingly effective) recovery modality.",
          category: "Wellness",
          date: "2023-10-30",
          readTime: "7 min",
          contentSections: [
            "Temperature cycling for muscle repair",
            "How to maximize 15 minutes in the sauna",
            "The perfect post-sauna cool-down routine",
            "Why our members pair sauna with yoga nidra"
          ],
          featuredImage: "/blog/sauna-benefits.jpg",
          bookingNote: "Pro tip: Book sauna sessions after 7pm when waitlists shorten"
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
        
    ]
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