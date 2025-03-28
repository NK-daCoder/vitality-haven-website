
import faceBookIcon from "../assets/images/logo/facebook.svg";
import youTubeIcon from "../assets/images/logo/youtube.svg";
import instagramicon from "../assets/images/logo/instagram.svg";
import tickTockIcon from "../assets/images/logo/tikTock.svg";
import twitter from "../assets/images/logo/twitter";

import gymCouple from "../assets/images/wallpaper/couple.png";
import man from "../assets/images/cutout/man.png"



const socialMediaIcons = {
    twitter: twitter,
    faceBook: faceBookIcon,
    tikTock: tickTockIcon,
    youTube: youTubeIcon, 
    instagram: instagramicon
}

const cutOut = {
    gymCouple: gymCouple,
    manPumpIron: man
}


const vitalityHaven = {
    // Gym Information
    gymInfo: {
      name: "Vitality Haven",
      slogan: "Where Strength Meets Serenity",
      description: "A premium fitness sanctuary offering state-of-the-art equipment, expert trainers, and holistic wellness programs designed to transform your body and mind.",
      founded: 2015,
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
        }
    ],
  
    // Testimonials
    testimonials: [
      {
        name: "Alex R.",
        membership: "Peak Performance",
        quote: "Vitality Haven completely changed my relationship with fitness. The community here makes every workout feel like an event rather than a chore!",
        rating: 5,
        date: "2023-11-15"
      },
      {
        name: "Priya K.",
        membership: "Total Transformation",
        quote: "After trying 3 other gyms, I finally found my fitness home. The trainers genuinely care about your progress and the facilities are immaculate.",
        rating: 5,
        date: "2023-10-28"
      },
      // ... more testimonials
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


  
// Initialize some sample displays
displayFeaturedClasses();
compareMemberships();

export { socialMediaIcons, cutOut, vitalityHaven } 