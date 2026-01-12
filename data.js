const AppData = {
  traitDefinitions: [
    {
      id: "social_energy",
      label: "Social Energy",
      low: "Solo",
      high: "Group",
      description: "Preference for solo focus versus group interaction."
    },
    {
      id: "structure_preference",
      label: "Structure Preference",
      low: "Structured",
      high: "Free-form",
      description: "Comfort with plans and rules versus flexibility."
    },
    {
      id: "cognitive_style",
      label: "Cognitive Style",
      low: "Analytical",
      high: "Intuitive",
      description: "Leaning toward logic versus associative thinking."
    },
    {
      id: "hands_on",
      label: "Hands-on vs Abstract",
      low: "Hands-on",
      high: "Abstract",
      description: "Preference for tangible work versus conceptual work."
    },
    {
      id: "risk_appetite",
      label: "Risk Appetite",
      low: "Risk-averse",
      high: "Risk-seeking",
      description: "Comfort with uncertainty and experimentation."
    },
    {
      id: "novelty_preference",
      label: "Novelty Preference",
      low: "Routine",
      high: "Novelty",
      description: "Desire for variety versus stable patterns."
    },
    {
      id: "aesthetic_sensitivity",
      label: "Aesthetic Sensitivity",
      low: "Low",
      high: "High",
      description: "Attention to beauty, design, and sensory detail."
    },
    {
      id: "impact_orientation",
      label: "Impact Orientation",
      low: "People-focused",
      high: "Systems-focused",
      description: "Focus on people outcomes versus systems and things."
    },
    {
      id: "time_horizon",
      label: "Time Horizon",
      low: "Short-term",
      high: "Long-term",
      description: "Preference for immediate action versus long-range planning."
    },
    {
      id: "autonomy_need",
      label: "Autonomy Need",
      low: "Likes Direction",
      high: "Needs Independence",
      description: "Comfort with guidance versus independence."
    }
  ],
  questions: [
    {
      id: "rainy_sunday",
      text: "A mysterious box labeled \"Free afternoon\" shows up at your door. What do you do first?",
      options: [
        {
          id: "rainy_sunday_a",
          text: "Open a book or browser rabbit hole and disappear into it.",
          weights: {
            social_energy: -2,
            cognitive_style: -2,
            novelty_preference: 1,
            time_horizon: 2,
            autonomy_need: 1
          }
        },
        {
          id: "rainy_sunday_b",
          text: "Fix or reorganize something that has been bugging you.",
          weights: {
            hands_on: -2,
            structure_preference: -1,
            time_horizon: -1,
            autonomy_need: 1
          }
        },
        {
          id: "rainy_sunday_c",
          text: "Text someone and see who is up for something.",
          weights: {
            social_energy: 2,
            impact_orientation: -2,
            novelty_preference: 1,
            risk_appetite: 1
          }
        },
        {
          id: "rainy_sunday_d",
          text: "Start making something (sketching, writing, or music).",
          weights: {
            aesthetic_sensitivity: 2,
            cognitive_style: 2,
            hands_on: 1,
            autonomy_need: 2,
            novelty_preference: 1
          }
        }
      ]
    },
    {
      id: "new_gadget",
      text: "A complicated gadget appears with a 200-page manual. What happens?",
      options: [
        {
          id: "new_gadget_a",
          text: "Read the manual carefully before touching it.",
          weights: {
            structure_preference: -2,
            cognitive_style: -1,
            risk_appetite: -2,
            time_horizon: 1
          }
        },
        {
          id: "new_gadget_b",
          text: "Skim enough to start, then experiment.",
          weights: {
            structure_preference: 1,
            risk_appetite: 1,
            novelty_preference: 1,
            hands_on: -1
          }
        },
        {
          id: "new_gadget_c",
          text: "Ignore the manual and press buttons until it works.",
          weights: {
            risk_appetite: 2,
            novelty_preference: 2,
            structure_preference: 2,
            time_horizon: -1
          }
        },
        {
          id: "new_gadget_d",
          text: "Watch a few video walkthroughs first.",
          weights: {
            cognitive_style: 1,
            autonomy_need: -1,
            risk_appetite: -1
          }
        }
      ]
    },
    {
      id: "city_walk",
      text: "A teleport drops you into an unfamiliar city with four free hours. Where do you drift?",
      options: [
        {
          id: "city_walk_a",
          text: "Museums, galleries, or historic sites.",
          weights: {
            aesthetic_sensitivity: 1,
            cognitive_style: -1,
            time_horizon: 1
          }
        },
        {
          id: "city_walk_b",
          text: "Markets, crowded streets, and local food spots.",
          weights: {
            social_energy: 2,
            novelty_preference: 1,
            impact_orientation: -1
          }
        },
        {
          id: "city_walk_c",
          text: "Parks, quiet neighborhoods, scenic views.",
          weights: {
            social_energy: -1,
            aesthetic_sensitivity: 1,
            autonomy_need: 1
          }
        },
        {
          id: "city_walk_d",
          text: "Tech stores, design shops, or maker spaces.",
          weights: {
            hands_on: -1,
            cognitive_style: -1,
            novelty_preference: 1,
            impact_orientation: 1
          }
        }
      ]
    },
    {
      id: "music_habit",
      text: "Your brain needs a soundtrack to focus. What do you play?",
      options: [
        {
          id: "music_habit_a",
          text: "Curated playlists that match the task or mood.",
          weights: {
            aesthetic_sensitivity: 1,
            structure_preference: -1,
            cognitive_style: 1
          }
        },
        {
          id: "music_habit_b",
          text: "Background noise; anything is fine.",
          weights: {
            aesthetic_sensitivity: -1,
            structure_preference: 1
          }
        },
        {
          id: "music_habit_c",
          text: "Deep focus on the music itself.",
          weights: {
            aesthetic_sensitivity: 2,
            cognitive_style: 1
          }
        },
        {
          id: "music_habit_d",
          text: "Prefer silence to concentrate.",
          weights: {
            cognitive_style: -1,
            structure_preference: -1,
            novelty_preference: -1
          }
        }
      ]
    },
    {
      id: "small_windfall",
      text: "An eccentric aunt hands you a $500 gift card that expires tomorrow. What feels most natural?",
      options: [
        {
          id: "small_windfall_a",
          text: "Gear or tools for a project.",
          weights: {
            hands_on: -1,
            novelty_preference: 1,
            autonomy_need: 1
          }
        },
        {
          id: "small_windfall_b",
          text: "An experience you can share with others.",
          weights: {
            social_energy: 2,
            impact_orientation: -1
          }
        },
        {
          id: "small_windfall_c",
          text: "Something practical you have been meaning to upgrade.",
          weights: {
            structure_preference: -1,
            time_horizon: 1
          }
        },
        {
          id: "small_windfall_d",
          text: "Something spontaneous and indulgent.",
          weights: {
            risk_appetite: 2,
            novelty_preference: 2
          }
        }
      ]
    },
    {
      id: "time_distortion",
      text: "You look up and realize three hours vanished when you were...",
      options: [
        {
          id: "time_distortion_a",
          text: "Building or fixing something.",
          weights: {
            hands_on: -2,
            autonomy_need: 1,
            novelty_preference: 1
          }
        },
        {
          id: "time_distortion_b",
          text: "Diving into a subject and connecting ideas.",
          weights: {
            cognitive_style: -1,
            time_horizon: 2,
            social_energy: -1
          }
        },
        {
          id: "time_distortion_c",
          text: "In intense conversation or collaboration.",
          weights: {
            social_energy: 2,
            impact_orientation: -1,
            novelty_preference: 1
          }
        },
        {
          id: "time_distortion_d",
          text: "Creating art, music, or writing.",
          weights: {
            aesthetic_sensitivity: 2,
            cognitive_style: 2,
            autonomy_need: 1
          }
        }
      ]
    },
    {
      id: "rule_bending",
      text: "A sign says \"Do Not Touch\" on something you need to fix. What do you do?",
      options: [
        {
          id: "rule_bending_a",
          text: "Follow the rule; there is probably a reason.",
          weights: {
            structure_preference: -2,
            risk_appetite: -2,
            autonomy_need: -1
          }
        },
        {
          id: "rule_bending_b",
          text: "Follow it, but look for ways to improve the system.",
          weights: {
            structure_preference: -1,
            impact_orientation: 1,
            autonomy_need: 1
          }
        },
        {
          id: "rule_bending_c",
          text: "Bend or ignore it if it gets in the way.",
          weights: {
            risk_appetite: 2,
            autonomy_need: 2,
            structure_preference: 2
          }
        },
        {
          id: "rule_bending_d",
          text: "Push to change the rule for everyone.",
          weights: {
            social_energy: 1,
            impact_orientation: -1,
            risk_appetite: 1,
            autonomy_need: 1
          }
        }
      ]
    }
  ],
  clusterProfiles: {
    creative: {
      social_energy: 45,
      structure_preference: 65,
      cognitive_style: 70,
      hands_on: 55,
      risk_appetite: 55,
      novelty_preference: 75,
      aesthetic_sensitivity: 85,
      impact_orientation: 40,
      time_horizon: 55,
      autonomy_need: 70
    },
    analytical: {
      social_energy: 35,
      structure_preference: 30,
      cognitive_style: 20,
      hands_on: 70,
      risk_appetite: 30,
      novelty_preference: 40,
      aesthetic_sensitivity: 35,
      impact_orientation: 60,
      time_horizon: 75,
      autonomy_need: 55
    },
    helping: {
      social_energy: 75,
      structure_preference: 45,
      cognitive_style: 50,
      hands_on: 45,
      risk_appetite: 35,
      novelty_preference: 40,
      aesthetic_sensitivity: 55,
      impact_orientation: 20,
      time_horizon: 55,
      autonomy_need: 45
    },
    builder: {
      social_energy: 40,
      structure_preference: 40,
      cognitive_style: 45,
      hands_on: 25,
      risk_appetite: 50,
      novelty_preference: 55,
      aesthetic_sensitivity: 45,
      impact_orientation: 65,
      time_horizon: 50,
      autonomy_need: 60
    },
    technical: {
      social_energy: 30,
      structure_preference: 35,
      cognitive_style: 25,
      hands_on: 40,
      risk_appetite: 35,
      novelty_preference: 50,
      aesthetic_sensitivity: 30,
      impact_orientation: 70,
      time_horizon: 70,
      autonomy_need: 65
    },
    entrepreneurial: {
      social_energy: 60,
      structure_preference: 70,
      cognitive_style: 55,
      hands_on: 45,
      risk_appetite: 80,
      novelty_preference: 80,
      aesthetic_sensitivity: 55,
      impact_orientation: 60,
      time_horizon: 45,
      autonomy_need: 85
    },
    outdoors: {
      social_energy: 50,
      structure_preference: 55,
      cognitive_style: 55,
      hands_on: 20,
      risk_appetite: 60,
      novelty_preference: 65,
      aesthetic_sensitivity: 60,
      impact_orientation: 55,
      time_horizon: 45,
      autonomy_need: 70
    },
    community: {
      social_energy: 70,
      structure_preference: 50,
      cognitive_style: 55,
      hands_on: 50,
      risk_appetite: 40,
      novelty_preference: 45,
      aesthetic_sensitivity: 45,
      impact_orientation: 25,
      time_horizon: 60,
      autonomy_need: 55
    }
  },
  occupationEntries: [
    {
      name: "UX Designer",
      focus: "shaping how digital products feel and flow",
      environment: "balancing user needs with practical constraints",
      cluster: "creative",
      tweaks: { aesthetic_sensitivity: 10, impact_orientation: -10 }
    },
    {
      name: "Graphic Designer",
      focus: "crafting visual systems and brand assets",
      environment: "working across digital and print formats",
      cluster: "creative",
      tweaks: { aesthetic_sensitivity: 12, structure_preference: 5 }
    },
    {
      name: "Copywriter",
      focus: "finding the right words to persuade and explain",
      environment: "adapting tone for different audiences",
      cluster: "creative",
      tweaks: { cognitive_style: 10, impact_orientation: -5 }
    },
    {
      name: "Content Strategist",
      focus: "planning content that serves users over time",
      environment: "aligning messaging with product goals",
      cluster: "creative",
      tweaks: { structure_preference: -5, time_horizon: 10 }
    },
    {
      name: "Industrial Designer",
      focus: "designing physical products that feel intuitive",
      environment: "testing prototypes and refining details",
      cluster: "creative",
      tweaks: { hands_on: -5, aesthetic_sensitivity: 8 }
    },
    {
      name: "Game Designer",
      focus: "building systems and stories that keep people engaged",
      environment: "iterating on feedback and playful experiments",
      cluster: "creative",
      tweaks: { novelty_preference: 8, risk_appetite: 5 }
    },
    {
      name: "Brand Illustrator",
      focus: "creating distinct visual narratives for brands",
      environment: "working independently with clear style guides",
      cluster: "creative",
      tweaks: { autonomy_need: 8, aesthetic_sensitivity: 10 }
    },
    {
      name: "Sound Designer",
      focus: "crafting audio that shapes how experiences feel",
      environment: "layering textures to match mood and motion",
      cluster: "creative",
      tweaks: { aesthetic_sensitivity: 10, cognitive_style: 6 }
    },
    {
      name: "Data Analyst",
      focus: "turning raw data into clear insights",
      environment: "using structured tools and defined metrics",
      cluster: "analytical",
      tweaks: { structure_preference: -8, cognitive_style: -6 }
    },
    {
      name: "Actuary",
      focus: "modeling risk and forecasting outcomes",
      environment: "working with precise calculations and regulations",
      cluster: "analytical",
      tweaks: { risk_appetite: -10, time_horizon: 10 }
    },
    {
      name: "Market Research Analyst",
      focus: "understanding why people choose what they choose",
      environment: "mixing data with interviews and surveys",
      cluster: "analytical",
      tweaks: { impact_orientation: -5, social_energy: 5 }
    },
    {
      name: "Operations Analyst",
      focus: "finding efficiency gaps in complex processes",
      environment: "mapping workflows and performance metrics",
      cluster: "analytical",
      tweaks: { impact_orientation: 8, structure_preference: -5 }
    },
    {
      name: "Economist",
      focus: "studying how incentives shape behavior at scale",
      environment: "building models and policy scenarios",
      cluster: "analytical",
      tweaks: { time_horizon: 12, cognitive_style: -8 }
    },
    {
      name: "Quality Analyst",
      focus: "ensuring systems meet standards and expectations",
      environment: "testing details before release",
      cluster: "analytical",
      tweaks: { structure_preference: -10, risk_appetite: -6 }
    },
    {
      name: "Policy Analyst",
      focus: "evaluating how rules affect outcomes",
      environment: "connecting evidence to real-world impact",
      cluster: "analytical",
      tweaks: { impact_orientation: -5, time_horizon: 10 }
    },
    {
      name: "Pricing Analyst",
      focus: "balancing revenue goals with customer behavior",
      environment: "testing scenarios and forecasting results",
      cluster: "analytical",
      tweaks: { time_horizon: 8, risk_appetite: -3 }
    },
    {
      name: "Occupational Therapist",
      focus: "helping people regain independence in daily life",
      environment: "working one-on-one with practical routines",
      cluster: "helping",
      tweaks: { hands_on: -6, impact_orientation: -8 }
    },
    {
      name: "School Counselor",
      focus: "supporting students through academic and personal decisions",
      environment: "listening deeply and guiding next steps",
      cluster: "helping",
      tweaks: { social_energy: 6, impact_orientation: -8 }
    },
    {
      name: "Nurse Educator",
      focus: "teaching best practices in patient care",
      environment: "translating complex topics into clear steps",
      cluster: "helping",
      tweaks: { structure_preference: -6, hands_on: -4 }
    },
    {
      name: "Social Worker",
      focus: "advocating for people in vulnerable situations",
      environment: "navigating resources and systems",
      cluster: "helping",
      tweaks: { impact_orientation: -10, risk_appetite: 4 }
    },
    {
      name: "Career Coach",
      focus: "guiding people toward meaningful work",
      environment: "asking questions and building action plans",
      cluster: "helping",
      tweaks: { structure_preference: -4, autonomy_need: 4 }
    },
    {
      name: "Community Health Worker",
      focus: "connecting people to local health resources",
      environment: "building trust across neighborhoods",
      cluster: "helping",
      tweaks: { social_energy: 8, impact_orientation: -10 }
    },
    {
      name: "HR Partner",
      focus: "supporting teams through people operations",
      environment: "balancing policy with empathy",
      cluster: "helping",
      tweaks: { structure_preference: -4, impact_orientation: -6 }
    },
    {
      name: "Customer Success Manager",
      focus: "helping customers get value from products",
      environment: "mixing relationship building with problem solving",
      cluster: "helping",
      tweaks: { social_energy: 6, impact_orientation: -4 }
    },
    {
      name: "Carpenter",
      focus: "building and repairing physical structures",
      environment: "working with tools and precise measurements",
      cluster: "builder",
      tweaks: { hands_on: -10, structure_preference: -5 }
    },
    {
      name: "Mechanical Technician",
      focus: "maintaining and troubleshooting machines",
      environment: "hands-on work with clear diagnostics",
      cluster: "builder",
      tweaks: { hands_on: -8, cognitive_style: -4 }
    },
    {
      name: "Process Engineer",
      focus: "designing reliable production workflows",
      environment: "balancing efficiency, safety, and scale",
      cluster: "builder",
      tweaks: { impact_orientation: 8, structure_preference: -6 }
    },
    {
      name: "Culinary Chef",
      focus: "crafting flavors and experiences with food",
      environment: "working fast with sensory detail",
      cluster: "builder",
      tweaks: { aesthetic_sensitivity: 6, hands_on: -6 }
    },
    {
      name: "Event Producer",
      focus: "bringing live experiences to life",
      environment: "coordinating vendors and tight timelines",
      cluster: "builder",
      tweaks: { social_energy: 6, structure_preference: -3 }
    },
    {
      name: "Construction Manager",
      focus: "overseeing complex build projects",
      environment: "keeping teams aligned with safety and schedules",
      cluster: "builder",
      tweaks: { structure_preference: -8, time_horizon: 6 }
    },
    {
      name: "Supply Chain Planner",
      focus: "keeping materials moving at the right time",
      environment: "working with schedules, vendors, and forecasts",
      cluster: "builder",
      tweaks: { structure_preference: -6, time_horizon: 8 }
    },
    {
      name: "Environmental Technician",
      focus: "collecting field data on air, water, and soil",
      environment: "mixing lab precision with outdoor work",
      cluster: "builder",
      tweaks: { hands_on: -6, novelty_preference: 6 }
    },
    {
      name: "Software Engineer",
      focus: "building systems that solve real problems",
      environment: "working with logic, tools, and collaboration",
      cluster: "technical",
      tweaks: { cognitive_style: -6, impact_orientation: 6 }
    },
    {
      name: "DevOps Engineer",
      focus: "keeping infrastructure stable and fast",
      environment: "balancing reliability with automation",
      cluster: "technical",
      tweaks: { structure_preference: -4, time_horizon: 6 }
    },
    {
      name: "Cybersecurity Analyst",
      focus: "protecting systems from threats",
      environment: "thinking ahead and testing defenses",
      cluster: "technical",
      tweaks: { risk_appetite: -4, time_horizon: 8 }
    },
    {
      name: "Network Administrator",
      focus: "keeping connectivity stable and secure",
      environment: "monitoring systems and resolving issues",
      cluster: "technical",
      tweaks: { structure_preference: -6, hands_on: -2 }
    },
    {
      name: "Data Engineer",
      focus: "building the pipelines behind analytics",
      environment: "designing reliable data infrastructure",
      cluster: "technical",
      tweaks: { impact_orientation: 8, time_horizon: 6 }
    },
    {
      name: "QA Automation Engineer",
      focus: "making sure releases behave as expected",
      environment: "creating repeatable tests and guardrails",
      cluster: "technical",
      tweaks: { structure_preference: -8, risk_appetite: -4 }
    },
    {
      name: "Systems Administrator",
      focus: "keeping internal tools running smoothly",
      environment: "balancing preventive maintenance with urgent fixes",
      cluster: "technical",
      tweaks: { time_horizon: 6, hands_on: -2 }
    },
    {
      name: "Mobile App Developer",
      focus: "creating polished experiences for phones",
      environment: "iterating on performance and usability",
      cluster: "technical",
      tweaks: { aesthetic_sensitivity: 4, novelty_preference: 4 }
    },
    {
      name: "Startup Founder",
      focus: "turning an idea into a business",
      environment: "moving fast with limited resources",
      cluster: "entrepreneurial",
      tweaks: { risk_appetite: 10, autonomy_need: 8 }
    },
    {
      name: "Product Manager",
      focus: "aligning teams around a clear product direction",
      environment: "making tradeoffs between user needs and scope",
      cluster: "entrepreneurial",
      tweaks: { social_energy: 6, structure_preference: -2 }
    },
    {
      name: "Growth Marketer",
      focus: "testing ways to reach and retain customers",
      environment: "running experiments and tracking signals",
      cluster: "entrepreneurial",
      tweaks: { novelty_preference: 6, risk_appetite: 6 }
    },
    {
      name: "Business Development Lead",
      focus: "opening partnerships and new revenue paths",
      environment: "mixing strategy with relationship building",
      cluster: "entrepreneurial",
      tweaks: { social_energy: 8, impact_orientation: 4 }
    },
    {
      name: "Freelance Consultant",
      focus: "solving specific problems for clients",
      environment: "running work independently and on your terms",
      cluster: "entrepreneurial",
      tweaks: { autonomy_need: 10, structure_preference: 4 }
    },
    {
      name: "Real Estate Agent",
      focus: "matching people with the right spaces",
      environment: "moving quickly with changing priorities",
      cluster: "entrepreneurial",
      tweaks: { social_energy: 8, novelty_preference: 6 }
    },
    {
      name: "Sales Strategist",
      focus: "building repeatable ways to win new business",
      environment: "balancing targets with creative outreach",
      cluster: "entrepreneurial",
      tweaks: { risk_appetite: 6, impact_orientation: 4 }
    },
    {
      name: "Park Ranger",
      focus: "protecting natural spaces and educating visitors",
      environment: "balancing field work with public guidance",
      cluster: "outdoors",
      tweaks: { hands_on: -6, impact_orientation: -4 }
    },
    {
      name: "Field Ecologist",
      focus: "studying ecosystems in the wild",
      environment: "collecting data outdoors and in the lab",
      cluster: "outdoors",
      tweaks: { cognitive_style: -4, time_horizon: 6 }
    },
    {
      name: "Adventure Guide",
      focus: "leading people through challenging terrain",
      environment: "adapting quickly to weather and group needs",
      cluster: "outdoors",
      tweaks: { risk_appetite: 8, social_energy: 6 }
    },
    {
      name: "Urban Farmer",
      focus: "growing food in limited city spaces",
      environment: "combining hands-on care with experimentation",
      cluster: "outdoors",
      tweaks: { hands_on: -8, novelty_preference: 4 }
    },
    {
      name: "Wildlife Technician",
      focus: "monitoring animal habitats and behavior",
      environment: "mixing field observation with reporting",
      cluster: "outdoors",
      tweaks: { hands_on: -6, time_horizon: 4 }
    },
    {
      name: "Surveyor",
      focus: "mapping land and construction sites",
      environment: "using precise tools in outdoor settings",
      cluster: "outdoors",
      tweaks: { structure_preference: -4, hands_on: -4 }
    },
    {
      name: "Landscape Designer",
      focus: "planning outdoor spaces that feel welcoming",
      environment: "balancing aesthetics with environmental needs",
      cluster: "outdoors",
      tweaks: { aesthetic_sensitivity: 6, impact_orientation: -4 }
    },
    {
      name: "Community Organizer",
      focus: "bringing people together around shared goals",
      environment: "building trust and coordinating action",
      cluster: "community",
      tweaks: { social_energy: 8, impact_orientation: -10 }
    },
    {
      name: "Program Coordinator",
      focus: "keeping multi-step initiatives on track",
      environment: "aligning volunteers, schedules, and resources",
      cluster: "community",
      tweaks: { structure_preference: -4, time_horizon: 6 }
    },
    {
      name: "Nonprofit Director",
      focus: "setting direction for mission-driven teams",
      environment: "balancing vision with operational reality",
      cluster: "community",
      tweaks: { impact_orientation: -8, autonomy_need: 4 }
    },
    {
      name: "Event Coordinator",
      focus: "turning community plans into real gatherings",
      environment: "managing details and last-minute changes",
      cluster: "community",
      tweaks: { social_energy: 6, novelty_preference: 4 }
    },
    {
      name: "Public Relations Specialist",
      focus: "shaping how organizations communicate",
      environment: "responding quickly and crafting narratives",
      cluster: "community",
      tweaks: { social_energy: 6, cognitive_style: 4 }
    },
    {
      name: "Volunteer Manager",
      focus: "supporting people who give their time",
      environment: "matching strengths to community needs",
      cluster: "community",
      tweaks: { impact_orientation: -8, structure_preference: -2 }
    },
    {
      name: "Motion Designer",
      focus: "bringing stories to life through movement",
      environment: "balancing timing, rhythm, and visual polish",
      cluster: "creative",
      tweaks: { aesthetic_sensitivity: 10, novelty_preference: 6 }
    },
    {
      name: "Art Director",
      focus: "guiding the visual direction of campaigns",
      environment: "aligning teams around a cohesive style",
      cluster: "creative",
      tweaks: { social_energy: 4, aesthetic_sensitivity: 10 }
    },
    {
      name: "Experience Designer",
      focus: "crafting end-to-end experiences across touchpoints",
      environment: "mapping journeys and refining details",
      cluster: "creative",
      tweaks: { time_horizon: 6, aesthetic_sensitivity: 6 }
    },
    {
      name: "Exhibit Designer",
      focus: "designing immersive spaces for learning and culture",
      environment: "mixing narrative flow with physical constraints",
      cluster: "creative",
      tweaks: { hands_on: -4, aesthetic_sensitivity: 8 }
    },
    {
      name: "Story Editor",
      focus: "shaping narratives into clear arcs",
      environment: "giving feedback and refining drafts",
      cluster: "creative",
      tweaks: { cognitive_style: 8, structure_preference: -4 }
    },
    {
      name: "Creative Producer",
      focus: "turning creative concepts into shipped projects",
      environment: "coordinating schedules, budgets, and collaborators",
      cluster: "creative",
      tweaks: { structure_preference: -4, impact_orientation: 6 }
    },
    {
      name: "Visual Journalist",
      focus: "telling real stories through visuals and data",
      environment: "balancing accuracy with compelling imagery",
      cluster: "creative",
      tweaks: { cognitive_style: 6, impact_orientation: -4 }
    },
    {
      name: "Multimedia Artist",
      focus: "mixing formats to create expressive work",
      environment: "experimenting across sound, video, and physical media",
      cluster: "creative",
      tweaks: { novelty_preference: 8, autonomy_need: 6 }
    },
    {
      name: "Financial Analyst",
      focus: "assessing financial health and performance trends",
      environment: "building models and scenario plans",
      cluster: "analytical",
      tweaks: { time_horizon: 8, structure_preference: -6 }
    },
    {
      name: "Risk Analyst",
      focus: "identifying exposure and planning mitigations",
      environment: "reviewing data and stress scenarios",
      cluster: "analytical",
      tweaks: { risk_appetite: -8, time_horizon: 6 }
    },
    {
      name: "Business Intelligence Analyst",
      focus: "turning operational data into dashboards",
      environment: "defining metrics and reporting cadence",
      cluster: "analytical",
      tweaks: { structure_preference: -6, impact_orientation: 6 }
    },
    {
      name: "Quantitative Researcher",
      focus: "testing hypotheses with statistical models",
      environment: "validating findings with rigorous analysis",
      cluster: "analytical",
      tweaks: { cognitive_style: -10, novelty_preference: 4 }
    },
    {
      name: "Compliance Analyst",
      focus: "ensuring processes meet regulatory standards",
      environment: "documenting controls and audit trails",
      cluster: "analytical",
      tweaks: { structure_preference: -10, risk_appetite: -6 }
    },
    {
      name: "Program Evaluator",
      focus: "measuring the effectiveness of initiatives",
      environment: "combining surveys, data, and outcome analysis",
      cluster: "analytical",
      tweaks: { impact_orientation: -4, time_horizon: 8 }
    },
    {
      name: "Forecasting Analyst",
      focus: "predicting demand and resource needs",
      environment: "balancing history with scenario planning",
      cluster: "analytical",
      tweaks: { time_horizon: 10, cognitive_style: -4 }
    },
    {
      name: "Decision Scientist",
      focus: "optimizing trade-offs with analytical models",
      environment: "running simulations and recommendations",
      cluster: "analytical",
      tweaks: { cognitive_style: -8, impact_orientation: 6 }
    },
    {
      name: "Mental Health Counselor",
      focus: "supporting people through emotional challenges",
      environment: "building trust in structured sessions",
      cluster: "helping",
      tweaks: { social_energy: 6, impact_orientation: -10 }
    },
    {
      name: "Academic Advisor",
      focus: "helping students plan paths and decisions",
      environment: "balancing requirements with personal goals",
      cluster: "helping",
      tweaks: { structure_preference: -4, impact_orientation: -8 }
    },
    {
      name: "Patient Advocate",
      focus: "navigating care systems for patients",
      environment: "coordinating information and support",
      cluster: "helping",
      tweaks: { social_energy: 6, impact_orientation: -10 }
    },
    {
      name: "Rehabilitation Specialist",
      focus: "guiding recovery through practical routines",
      environment: "tracking progress and adapting exercises",
      cluster: "helping",
      tweaks: { hands_on: -6, structure_preference: -4 }
    },
    {
      name: "Youth Program Mentor",
      focus: "supporting young people through growth moments",
      environment: "mixing encouragement with practical guidance",
      cluster: "helping",
      tweaks: { social_energy: 8, impact_orientation: -8 }
    },
    {
      name: "Case Manager",
      focus: "connecting people to services and resources",
      environment: "tracking needs across multiple systems",
      cluster: "helping",
      tweaks: { structure_preference: -6, impact_orientation: -8 }
    },
    {
      name: "Wellness Coach",
      focus: "building habits for healthier routines",
      environment: "setting goals and accountability",
      cluster: "helping",
      tweaks: { autonomy_need: 4, impact_orientation: -6 }
    },
    {
      name: "Learning and Development Specialist",
      focus: "designing training that helps teams grow",
      environment: "turning feedback into practical learning paths",
      cluster: "helping",
      tweaks: { structure_preference: -4, social_energy: 4 }
    },
    {
      name: "HVAC Technician",
      focus: "installing and maintaining climate systems",
      environment: "troubleshooting on-site with tools",
      cluster: "builder",
      tweaks: { hands_on: -10, risk_appetite: -2 }
    },
    {
      name: "Facilities Manager",
      focus: "keeping buildings running smoothly",
      environment: "coordinating repairs, vendors, and schedules",
      cluster: "builder",
      tweaks: { structure_preference: -6, impact_orientation: 6 }
    },
    {
      name: "Fabrication Technician",
      focus: "assembling components from precise plans",
      environment: "working with tools and measurements",
      cluster: "builder",
      tweaks: { hands_on: -8, structure_preference: -4 }
    },
    {
      name: "Production Supervisor",
      focus: "keeping manufacturing lines on track",
      environment: "balancing people, timing, and output",
      cluster: "builder",
      tweaks: { impact_orientation: 8, social_energy: 4 }
    },
    {
      name: "Construction Estimator",
      focus: "translating plans into materials and costs",
      environment: "comparing bids and project constraints",
      cluster: "builder",
      tweaks: { cognitive_style: -4, time_horizon: 6 }
    },
    {
      name: "Renewable Energy Technician",
      focus: "installing and servicing energy systems",
      environment: "working outdoors and on equipment",
      cluster: "builder",
      tweaks: { hands_on: -8, novelty_preference: 4 }
    },
    {
      name: "Field Service Technician",
      focus: "diagnosing issues on client sites",
      environment: "adapting to varied equipment and timelines",
      cluster: "builder",
      tweaks: { autonomy_need: 6, hands_on: -6 }
    },
    {
      name: "Prototype Builder",
      focus: "building physical prototypes quickly",
      environment: "iterating materials and mechanisms",
      cluster: "builder",
      tweaks: { novelty_preference: 6, hands_on: -6 }
    },
    {
      name: "Machine Learning Engineer",
      focus: "building models that learn from data",
      environment: "iterating on experiments and pipelines",
      cluster: "technical",
      tweaks: { cognitive_style: -6, novelty_preference: 4 }
    },
    {
      name: "Site Reliability Engineer",
      focus: "keeping systems stable under real-world load",
      environment: "automating alerts and recovery playbooks",
      cluster: "technical",
      tweaks: { structure_preference: -4, impact_orientation: 8 }
    },
    {
      name: "Database Administrator",
      focus: "keeping data reliable and accessible",
      environment: "tuning performance and backups",
      cluster: "technical",
      tweaks: { structure_preference: -6, time_horizon: 6 }
    },
    {
      name: "Cloud Architect",
      focus: "designing scalable infrastructure patterns",
      environment: "balancing cost, reliability, and growth",
      cluster: "technical",
      tweaks: { time_horizon: 8, impact_orientation: 8 }
    },
    {
      name: "Embedded Systems Engineer",
      focus: "building software that lives inside hardware",
      environment: "working close to sensors and devices",
      cluster: "technical",
      tweaks: { hands_on: -4, cognitive_style: -6 }
    },
    {
      name: "Integration Engineer",
      focus: "connecting systems so data flows cleanly",
      environment: "mapping APIs and edge cases",
      cluster: "technical",
      tweaks: { structure_preference: -4, impact_orientation: 6 }
    },
    {
      name: "Observability Engineer",
      focus: "making systems visible through metrics and traces",
      environment: "designing telemetry and dashboards",
      cluster: "technical",
      tweaks: { cognitive_style: -4, time_horizon: 6 }
    },
    {
      name: "Performance Engineer",
      focus: "finding bottlenecks and speeding up systems",
      environment: "profiling, tuning, and load testing",
      cluster: "technical",
      tweaks: { risk_appetite: -2, impact_orientation: 8 }
    },
    {
      name: "Startup COO",
      focus: "turning ambitious ideas into operating rhythm",
      environment: "balancing speed with execution discipline",
      cluster: "entrepreneurial",
      tweaks: { risk_appetite: 6, impact_orientation: 6 }
    },
    {
      name: "Venture Builder",
      focus: "spinning up new ventures from scratch",
      environment: "testing ideas quickly and killing weak ones",
      cluster: "entrepreneurial",
      tweaks: { novelty_preference: 8, risk_appetite: 8 }
    },
    {
      name: "E-commerce Operator",
      focus: "running digital storefronts and growth loops",
      environment: "balancing conversion metrics and customer needs",
      cluster: "entrepreneurial",
      tweaks: { impact_orientation: 6, autonomy_need: 6 }
    },
    {
      name: "Partnership Manager",
      focus: "building deals that unlock new channels",
      environment: "negotiating terms and long-term relationships",
      cluster: "entrepreneurial",
      tweaks: { social_energy: 6, time_horizon: 6 }
    },
    {
      name: "Innovation Lead",
      focus: "scouting opportunities and piloting new bets",
      environment: "aligning stakeholders around experiments",
      cluster: "entrepreneurial",
      tweaks: { novelty_preference: 8, autonomy_need: 6 }
    },
    {
      name: "Product Marketing Lead",
      focus: "positioning products in crowded markets",
      environment: "connecting insight, narrative, and launch plans",
      cluster: "entrepreneurial",
      tweaks: { social_energy: 4, cognitive_style: 4 }
    },
    {
      name: "Revenue Operations Lead",
      focus: "designing systems that scale revenue teams",
      environment: "aligning process, data, and incentives",
      cluster: "entrepreneurial",
      tweaks: { structure_preference: -4, impact_orientation: 8 }
    },
    {
      name: "Trail Builder",
      focus: "maintaining and shaping outdoor trails",
      environment: "working with terrain, tools, and weather",
      cluster: "outdoors",
      tweaks: { hands_on: -8, novelty_preference: 4 }
    },
    {
      name: "Forestry Technician",
      focus: "managing forests for health and safety",
      environment: "collecting field data and maintaining equipment",
      cluster: "outdoors",
      tweaks: { hands_on: -6, time_horizon: 6 }
    },
    {
      name: "Outdoor Education Instructor",
      focus: "teaching outdoor skills and safety",
      environment: "guiding groups through hands-on learning",
      cluster: "outdoors",
      tweaks: { social_energy: 6, impact_orientation: -4 }
    },
    {
      name: "Conservation Officer",
      focus: "protecting ecosystems and wildlife habitats",
      environment: "balancing enforcement with public outreach",
      cluster: "outdoors",
      tweaks: { impact_orientation: -4, risk_appetite: 4 }
    },
    {
      name: "Marine Field Researcher",
      focus: "collecting data in aquatic environments",
      environment: "working on boats and in shifting conditions",
      cluster: "outdoors",
      tweaks: { novelty_preference: 6, hands_on: -4 }
    },
    {
      name: "Land Stewardship Manager",
      focus: "planning land use and restoration efforts",
      environment: "coordinating crews and seasonal priorities",
      cluster: "outdoors",
      tweaks: { time_horizon: 6, impact_orientation: 4 }
    },
    {
      name: "Eco-Tour Guide",
      focus: "leading visitors through natural landscapes",
      environment: "storytelling while managing safety",
      cluster: "outdoors",
      tweaks: { social_energy: 6, autonomy_need: 4 }
    },
    {
      name: "Civic Engagement Coordinator",
      focus: "increasing participation in local decisions",
      environment: "organizing campaigns and community outreach",
      cluster: "community",
      tweaks: { social_energy: 6, impact_orientation: -8 }
    },
    {
      name: "Arts Program Manager",
      focus: "supporting creative programs for the public",
      environment: "aligning artists, venues, and schedules",
      cluster: "community",
      tweaks: { aesthetic_sensitivity: 6, social_energy: 4 }
    },
    {
      name: "Community Outreach Specialist",
      focus: "connecting services to underserved groups",
      environment: "building partnerships and trust",
      cluster: "community",
      tweaks: { social_energy: 6, impact_orientation: -8 }
    },
    {
      name: "Youth Services Coordinator",
      focus: "running programs for young people",
      environment: "coordinating mentors, space, and activities",
      cluster: "community",
      tweaks: { social_energy: 6, impact_orientation: -8 }
    },
    {
      name: "Public Health Program Manager",
      focus: "guiding community health initiatives",
      environment: "balancing data, policy, and people needs",
      cluster: "community",
      tweaks: { impact_orientation: -6, structure_preference: -4 }
    },
    {
      name: "Housing Services Coordinator",
      focus: "helping residents access stable housing",
      environment: "navigating agencies, landlords, and resources",
      cluster: "community",
      tweaks: { impact_orientation: -8, structure_preference: -4 }
    }
  ],
  hobbyEntries: [
    {
      name: "Urban Photography",
      focus: "capturing city textures and light",
      environment: "exploring neighborhoods with a camera",
      cluster: "creative",
      tweaks: { aesthetic_sensitivity: 8, novelty_preference: 6 }
    },
    {
      name: "Sketchbook Illustration",
      focus: "drawing scenes and characters by hand",
      environment: "using quiet time to refine visual style",
      cluster: "creative",
      tweaks: { aesthetic_sensitivity: 10, autonomy_need: 6 }
    },
    {
      name: "Creative Writing",
      focus: "building worlds and voices through words",
      environment: "following ideas as they evolve",
      cluster: "creative",
      tweaks: { cognitive_style: 8, time_horizon: 4 }
    },
    {
      name: "Music Composition",
      focus: "layering melodies and rhythms",
      environment: "experimenting with sound and mood",
      cluster: "creative",
      tweaks: { aesthetic_sensitivity: 10, novelty_preference: 4 }
    },
    {
      name: "Ceramics",
      focus: "shaping clay into functional art",
      environment: "balancing technique with tactile detail",
      cluster: "creative",
      tweaks: { hands_on: -6, aesthetic_sensitivity: 6 }
    },
    {
      name: "Zine Making",
      focus: "turning ideas into small-batch prints",
      environment: "mixing collage, writing, and layout",
      cluster: "creative",
      tweaks: { autonomy_need: 6, structure_preference: 4 }
    },
    {
      name: "Interior Styling",
      focus: "reimagining spaces with mood and flow",
      environment: "testing textures, color, and layout",
      cluster: "creative",
      tweaks: { aesthetic_sensitivity: 8, hands_on: -2 }
    },
    {
      name: "Stop-Motion Animation",
      focus: "building short stories frame by frame",
      environment: "combining patience with playful experimentation",
      cluster: "creative",
      tweaks: { time_horizon: 4, novelty_preference: 6 }
    },
    {
      name: "Logic Puzzles",
      focus: "solving structured problems with clear rules",
      environment: "working through patterns and constraints",
      cluster: "analytical",
      tweaks: { structure_preference: -6, cognitive_style: -6 }
    },
    {
      name: "Chess and Strategy Games",
      focus: "anticipating outcomes several steps ahead",
      environment: "learning tactics and long-range planning",
      cluster: "analytical",
      tweaks: { time_horizon: 8, cognitive_style: -4 }
    },
    {
      name: "Amateur Astronomy",
      focus: "observing celestial patterns",
      environment: "using tools and logs to track discoveries",
      cluster: "analytical",
      tweaks: { time_horizon: 6, novelty_preference: 2 }
    },
    {
      name: "Data Visualization Projects",
      focus: "turning messy information into clarity",
      environment: "balancing analysis with visual structure",
      cluster: "analytical",
      tweaks: { aesthetic_sensitivity: 4, cognitive_style: -4 }
    },
    {
      name: "Speedrunning Optimization",
      focus: "finding tiny improvements in performance",
      environment: "testing techniques and tracking progress",
      cluster: "analytical",
      tweaks: { structure_preference: -4, time_horizon: 4 }
    },
    {
      name: "Language Learning Systems",
      focus: "building routines to absorb new languages",
      environment: "tracking habits and small milestones",
      cluster: "analytical",
      tweaks: { structure_preference: -6, time_horizon: 6 }
    },
    {
      name: "Budgeting and Forecasting",
      focus: "planning for future goals",
      environment: "using spreadsheets and clear categories",
      cluster: "analytical",
      tweaks: { risk_appetite: -6, time_horizon: 8 }
    },
    {
      name: "Science Reading Club",
      focus: "digging into new research together",
      environment: "discussing ideas in small groups",
      cluster: "analytical",
      tweaks: { social_energy: 4, cognitive_style: -4 }
    },
    {
      name: "Volunteer Tutoring",
      focus: "helping others learn at their pace",
      environment: "adapting explanations to different needs",
      cluster: "helping",
      tweaks: { impact_orientation: -8, social_energy: 6 }
    },
    {
      name: "Peer Coaching",
      focus: "supporting goals with encouragement",
      environment: "using questions instead of instructions",
      cluster: "helping",
      tweaks: { autonomy_need: 4, impact_orientation: -6 }
    },
    {
      name: "Community Gardening",
      focus: "growing food with neighbors",
      environment: "sharing tools and steady routines",
      cluster: "helping",
      tweaks: { hands_on: -6, social_energy: 4 }
    },
    {
      name: "First Aid Volunteering",
      focus: "being ready to help in emergencies",
      environment: "practicing calm and clear procedures",
      cluster: "helping",
      tweaks: { structure_preference: -4, risk_appetite: -2 }
    },
    {
      name: "Animal Shelter Support",
      focus: "caring for animals who need attention",
      environment: "mixing hands-on care with patience",
      cluster: "helping",
      tweaks: { hands_on: -4, impact_orientation: -8 }
    },
    {
      name: "Accessibility Advocacy",
      focus: "making spaces more inclusive",
      environment: "listening to lived experiences and fixing barriers",
      cluster: "helping",
      tweaks: { impact_orientation: -8, structure_preference: 2 }
    },
    {
      name: "Mentoring Students",
      focus: "guiding someone through new challenges",
      environment: "building trust and momentum",
      cluster: "helping",
      tweaks: { social_energy: 6, impact_orientation: -6 }
    },
    {
      name: "Donation Drives",
      focus: "organizing resources for people in need",
      environment: "coordinating pickups and sorting",
      cluster: "helping",
      tweaks: { structure_preference: -2, social_energy: 4 }
    },
    {
      name: "Woodworking",
      focus: "crafting objects from raw materials",
      environment: "measuring, cutting, and refining",
      cluster: "builder",
      tweaks: { hands_on: -10, structure_preference: -4 }
    },
    {
      name: "Home Repair Projects",
      focus: "fixing what is broken and making it last",
      environment: "working with tools and practical solutions",
      cluster: "builder",
      tweaks: { hands_on: -8, risk_appetite: 2 }
    },
    {
      name: "Model Building",
      focus: "assembling detailed miniature worlds",
      environment: "following steps and perfecting tiny parts",
      cluster: "builder",
      tweaks: { structure_preference: -6, time_horizon: 4 }
    },
    {
      name: "Baking Experiments",
      focus: "testing recipes and flavor combinations",
      environment: "mixing precision with creativity",
      cluster: "builder",
      tweaks: { aesthetic_sensitivity: 4, hands_on: -6 }
    },
    {
      name: "3D Printing",
      focus: "turning digital designs into physical objects",
      environment: "iterating on prototypes quickly",
      cluster: "builder",
      tweaks: { novelty_preference: 6, impact_orientation: 4 }
    },
    {
      name: "Furniture Upcycling",
      focus: "giving old pieces new life",
      environment: "combining design with practical repairs",
      cluster: "builder",
      tweaks: { aesthetic_sensitivity: 4, hands_on: -6 }
    },
    {
      name: "Bicycle Maintenance",
      focus: "tuning and fixing bikes",
      environment: "learning mechanics by doing",
      cluster: "builder",
      tweaks: { hands_on: -8, autonomy_need: 4 }
    },
    {
      name: "DIY Electronics",
      focus: "building simple circuits and gadgets",
      environment: "experimenting with components and tools",
      cluster: "builder",
      tweaks: { hands_on: -6, cognitive_style: -2 }
    },
    {
      name: "Coding Side Projects",
      focus: "making small apps and tools",
      environment: "iterating quickly and learning as you go",
      cluster: "technical",
      tweaks: { autonomy_need: 6, novelty_preference: 4 }
    },
    {
      name: "Home Automation",
      focus: "streamlining daily routines with smart devices",
      environment: "testing setups and tweaking performance",
      cluster: "technical",
      tweaks: { impact_orientation: 4, structure_preference: -2 }
    },
    {
      name: "Game Modding",
      focus: "reshaping game worlds and mechanics",
      environment: "mixing creative ideas with technical tweaks",
      cluster: "technical",
      tweaks: { aesthetic_sensitivity: 4, novelty_preference: 6 }
    },
    {
      name: "Raspberry Pi Projects",
      focus: "building tiny computers into useful tools",
      environment: "experimenting with sensors and scripts",
      cluster: "technical",
      tweaks: { hands_on: -2, novelty_preference: 6 }
    },
    {
      name: "Cybersecurity Labs",
      focus: "learning how systems break and recover",
      environment: "testing defenses in a safe environment",
      cluster: "technical",
      tweaks: { risk_appetite: 2, time_horizon: 4 }
    },
    {
      name: "Mechanical Keyboard Building",
      focus: "assembling a setup that feels perfect",
      environment: "mixing electronics with tactile detail",
      cluster: "technical",
      tweaks: { aesthetic_sensitivity: 4, hands_on: -4 }
    },
    {
      name: "Spreadsheet Engineering",
      focus: "turning messy tasks into clean systems",
      environment: "creating formulas that scale",
      cluster: "technical",
      tweaks: { structure_preference: -4, cognitive_style: -4 }
    },
    {
      name: "App Prototyping",
      focus: "sketching and testing app ideas",
      environment: "moving from concept to mockups",
      cluster: "technical",
      tweaks: { novelty_preference: 6, aesthetic_sensitivity: 4 }
    },
    {
      name: "Pop-up Market Selling",
      focus: "testing products with real customers",
      environment: "moving quickly and adapting on the spot",
      cluster: "entrepreneurial",
      tweaks: { risk_appetite: 6, social_energy: 6 }
    },
    {
      name: "Flipping Vintage Finds",
      focus: "spotting undervalued items and reselling them",
      environment: "trusting instincts and timing",
      cluster: "entrepreneurial",
      tweaks: { risk_appetite: 6, novelty_preference: 4 }
    },
    {
      name: "Podcasting",
      focus: "building a small show and audience",
      environment: "planning episodes and experimenting with tone",
      cluster: "entrepreneurial",
      tweaks: { autonomy_need: 6, aesthetic_sensitivity: 4 }
    },
    {
      name: "Freelance Services",
      focus: "offering a specialized skill on your own terms",
      environment: "balancing client needs with independence",
      cluster: "entrepreneurial",
      tweaks: { autonomy_need: 8, structure_preference: 4 }
    },
    {
      name: "Social Media Brand Building",
      focus: "growing a personal or niche identity",
      environment: "testing content styles and engagement",
      cluster: "entrepreneurial",
      tweaks: { novelty_preference: 6, social_energy: 4 }
    },
    {
      name: "Small Batch Product Sales",
      focus: "designing and selling limited items",
      environment: "mixing craft with real feedback",
      cluster: "entrepreneurial",
      tweaks: { risk_appetite: 6, hands_on: -2 }
    },
    {
      name: "Event Pop-up Planning",
      focus: "creating short-term experiences",
      environment: "coordinating people, permits, and momentum",
      cluster: "entrepreneurial",
      tweaks: { social_energy: 6, novelty_preference: 6 }
    },
    {
      name: "Trail Hiking",
      focus: "spending time in changing landscapes",
      environment: "moving at your own pace outdoors",
      cluster: "outdoors",
      tweaks: { autonomy_need: 6, novelty_preference: 4 }
    },
    {
      name: "Rock Climbing",
      focus: "solving physical routes and moves",
      environment: "testing strength and focus",
      cluster: "outdoors",
      tweaks: { risk_appetite: 6, hands_on: -6 }
    },
    {
      name: "Kayaking",
      focus: "exploring waterways and rhythms",
      environment: "balancing calm and intensity",
      cluster: "outdoors",
      tweaks: { novelty_preference: 4, hands_on: -4 }
    },
    {
      name: "Birdwatching",
      focus: "spotting patterns in wildlife behavior",
      environment: "moving quietly and logging sightings",
      cluster: "outdoors",
      tweaks: { time_horizon: 4, structure_preference: -2 }
    },
    {
      name: "Urban Exploring",
      focus: "discovering hidden corners of cities",
      environment: "following curiosity and local history",
      cluster: "outdoors",
      tweaks: { novelty_preference: 6, risk_appetite: 4 }
    },
    {
      name: "Orienteering",
      focus: "navigating with maps and terrain",
      environment: "combining strategy with motion",
      cluster: "outdoors",
      tweaks: { cognitive_style: -2, hands_on: -4 }
    },
    {
      name: "Nature Sketch Walks",
      focus: "observing landscapes and drawing on site",
      environment: "mixing outdoors with creative focus",
      cluster: "outdoors",
      tweaks: { aesthetic_sensitivity: 6, hands_on: -4 }
    },
    {
      name: "Hosting Game Nights",
      focus: "bringing friends together for shared play",
      environment: "creating a relaxed social space",
      cluster: "community",
      tweaks: { social_energy: 6, impact_orientation: -4 }
    },
    {
      name: "Local Meetup Organizing",
      focus: "creating spaces for people to connect",
      environment: "coordinating topics, venues, and follow-ups",
      cluster: "community",
      tweaks: { social_energy: 8, structure_preference: -2 }
    },
    {
      name: "Book Club Facilitation",
      focus: "guiding conversation around shared reading",
      environment: "balancing structure with open discussion",
      cluster: "community",
      tweaks: { cognitive_style: 2, social_energy: 6 }
    },
    {
      name: "Neighborhood Cleanup Leader",
      focus: "rallying neighbors around practical impact",
      environment: "planning small actions that add up",
      cluster: "community",
      tweaks: { impact_orientation: -6, structure_preference: -2 }
    },
    {
      name: "Community Choir",
      focus: "building harmony with a group",
      environment: "practicing together and performing occasionally",
      cluster: "community",
      tweaks: { social_energy: 6, aesthetic_sensitivity: 4 }
    },
    {
      name: "Amateur Theater Crew",
      focus: "supporting live performances behind the scenes",
      environment: "coordinating timing, props, and people",
      cluster: "community",
      tweaks: { social_energy: 6, structure_preference: -2 }
    },
    {
      name: "Collage Making",
      focus: "assembling unexpected visuals from scraps",
      environment: "mixing textures, paper, and found images",
      cluster: "creative",
      tweaks: { aesthetic_sensitivity: 8, novelty_preference: 6 }
    },
    {
      name: "Street Sketching",
      focus: "drawing quick scenes on the move",
      environment: "capturing people, places, and light",
      cluster: "creative",
      tweaks: { aesthetic_sensitivity: 6, autonomy_need: 4 }
    },
    {
      name: "Lyric Writing",
      focus: "playing with words, rhythm, and voice",
      environment: "collecting lines and polishing them over time",
      cluster: "creative",
      tweaks: { cognitive_style: 6, time_horizon: 4 }
    },
    {
      name: "Watercolor Studies",
      focus: "experimenting with color and flow",
      environment: "layering washes and textures",
      cluster: "creative",
      tweaks: { aesthetic_sensitivity: 8, hands_on: -2 }
    },
    {
      name: "Film Editing",
      focus: "shaping footage into a story",
      environment: "balancing pacing, sound, and tone",
      cluster: "creative",
      tweaks: { cognitive_style: 4, aesthetic_sensitivity: 6 }
    },
    {
      name: "Storyboarding",
      focus: "turning ideas into visual sequences",
      environment: "sketching scenes and pacing",
      cluster: "creative",
      tweaks: { cognitive_style: 4, structure_preference: -2 }
    },
    {
      name: "Handmade Bookbinding",
      focus: "building notebooks and journals by hand",
      environment: "measuring, folding, and stitching carefully",
      cluster: "creative",
      tweaks: { hands_on: -4, aesthetic_sensitivity: 6 }
    },
    {
      name: "Costume Design",
      focus: "creating wearable characters and moods",
      environment: "mixing fabric, texture, and detail",
      cluster: "creative",
      tweaks: { aesthetic_sensitivity: 8, novelty_preference: 4 }
    },
    {
      name: "Cryptography Challenges",
      focus: "solving ciphers and encoded puzzles",
      environment: "working through patterns and hints",
      cluster: "analytical",
      tweaks: { cognitive_style: -6, structure_preference: -4 }
    },
    {
      name: "Statistical Sports Analysis",
      focus: "finding trends in team and player data",
      environment: "building simple models and predictions",
      cluster: "analytical",
      tweaks: { time_horizon: 4, cognitive_style: -4 }
    },
    {
      name: "Citizen Science Data Projects",
      focus: "collecting or cleaning data for research",
      environment: "contributing to shared datasets",
      cluster: "analytical",
      tweaks: { impact_orientation: 4, structure_preference: -2 }
    },
    {
      name: "Personal Knowledge Graph Building",
      focus: "organizing ideas into linked systems",
      environment: "tagging, connecting, and refining notes",
      cluster: "analytical",
      tweaks: { structure_preference: -6, cognitive_style: -4 }
    },
    {
      name: "Forecasting Experiments",
      focus: "making predictions and tracking accuracy",
      environment: "running small experiments over time",
      cluster: "analytical",
      tweaks: { time_horizon: 6, risk_appetite: -2 }
    },
    {
      name: "Mapmaking and Cartography",
      focus: "turning locations into structured maps",
      environment: "layering data with visual structure",
      cluster: "analytical",
      tweaks: { aesthetic_sensitivity: 4, cognitive_style: -4 }
    },
    {
      name: "Historical Data Digging",
      focus: "comparing trends across time periods",
      environment: "building timelines and summaries",
      cluster: "analytical",
      tweaks: { time_horizon: 6, cognitive_style: -4 }
    },
    {
      name: "Logic Puzzle Hunts",
      focus: "joining teams to crack multi-step puzzles",
      environment: "iterating hypotheses under time pressure",
      cluster: "analytical",
      tweaks: { social_energy: 2, cognitive_style: -4 }
    },
    {
      name: "Food Pantry Volunteering",
      focus: "packing and distributing essentials",
      environment: "working with teams and regular shifts",
      cluster: "helping",
      tweaks: { social_energy: 4, impact_orientation: -6 }
    },
    {
      name: "Crisis Line Training",
      focus: "learning to support people in tough moments",
      environment: "practicing empathy and active listening",
      cluster: "helping",
      tweaks: { social_energy: 6, impact_orientation: -8 }
    },
    {
      name: "Literacy Coaching",
      focus: "helping others build reading skills",
      environment: "meeting regularly and tracking progress",
      cluster: "helping",
      tweaks: { structure_preference: -4, impact_orientation: -6 }
    },
    {
      name: "Senior Companion Visits",
      focus: "spending time with older adults",
      environment: "building trust through conversation",
      cluster: "helping",
      tweaks: { social_energy: 6, impact_orientation: -8 }
    },
    {
      name: "Refugee Support Team",
      focus: "helping new arrivals navigate basics",
      environment: "coordinating resources and check-ins",
      cluster: "helping",
      tweaks: { social_energy: 6, impact_orientation: -8 }
    },
    {
      name: "Community Mediation",
      focus: "helping people find common ground",
      environment: "facilitating calm, structured conversation",
      cluster: "helping",
      tweaks: { structure_preference: -4, impact_orientation: -6 }
    },
    {
      name: "Volunteer Event Planning",
      focus: "organizing people around a shared cause",
      environment: "building schedules and communication plans",
      cluster: "helping",
      tweaks: { social_energy: 4, structure_preference: -4 }
    },
    {
      name: "Mutual Aid Coordination",
      focus: "connecting neighbors with needs and offers",
      environment: "tracking requests and follow-through",
      cluster: "helping",
      tweaks: { structure_preference: -4, impact_orientation: -6 }
    },
    {
      name: "Metalworking Projects",
      focus: "shaping metal into functional pieces",
      environment: "working with heat, tools, and precision",
      cluster: "builder",
      tweaks: { hands_on: -8, risk_appetite: 2 }
    },
    {
      name: "Tool Restoration",
      focus: "bringing old tools back to life",
      environment: "cleaning, tuning, and testing",
      cluster: "builder",
      tweaks: { hands_on: -6, structure_preference: -4 }
    },
    {
      name: "Stone Masonry Practice",
      focus: "stacking and shaping stone by hand",
      environment: "learning balance, fit, and patience",
      cluster: "builder",
      tweaks: { hands_on: -8, time_horizon: 4 }
    },
    {
      name: "Leathercraft",
      focus: "cutting and stitching durable goods",
      environment: "working with patterns and hand tools",
      cluster: "builder",
      tweaks: { hands_on: -6, aesthetic_sensitivity: 4 }
    },
    {
      name: "Garden Irrigation DIY",
      focus: "building small watering systems",
      environment: "testing flow and fixing leaks",
      cluster: "builder",
      tweaks: { hands_on: -6, structure_preference: -2 }
    },
    {
      name: "Concrete Casting",
      focus: "pouring molds for small structures",
      environment: "mixing materials and refining forms",
      cluster: "builder",
      tweaks: { hands_on: -8, novelty_preference: 2 }
    },
    {
      name: "Skateboard Building",
      focus: "pressing decks and tuning components",
      environment: "experimenting with shape and ride feel",
      cluster: "builder",
      tweaks: { hands_on: -6, novelty_preference: 4 }
    },
    {
      name: "Workshop Layout Planning",
      focus: "designing efficient tool setups",
      environment: "building storage and workflow zones",
      cluster: "builder",
      tweaks: { structure_preference: -6, impact_orientation: 4 }
    },
    {
      name: "Open-source Contributions",
      focus: "fixing issues and shipping patches",
      environment: "collaborating through pull requests",
      cluster: "technical",
      tweaks: { impact_orientation: 6, social_energy: 2 }
    },
    {
      name: "Homelab Networking",
      focus: "building a small server and network setup",
      environment: "tuning routers, switches, and services",
      cluster: "technical",
      tweaks: { structure_preference: -4, impact_orientation: 6 }
    },
    {
      name: "Retro Console Repair",
      focus: "restoring older electronics and games",
      environment: "soldering, testing, and troubleshooting",
      cluster: "technical",
      tweaks: { hands_on: -4, cognitive_style: -4 }
    },
    {
      name: "Robotics Kits",
      focus: "assembling programmable robots",
      environment: "mixing code with sensors and movement",
      cluster: "technical",
      tweaks: { hands_on: -2, novelty_preference: 4 }
    },
    {
      name: "Command-line Tool Building",
      focus: "creating utilities to automate tasks",
      environment: "refining small scripts and workflows",
      cluster: "technical",
      tweaks: { cognitive_style: -4, autonomy_need: 4 }
    },
    {
      name: "API Experimentation",
      focus: "connecting services for small automations",
      environment: "testing endpoints and data flow",
      cluster: "technical",
      tweaks: { impact_orientation: 4, structure_preference: -2 }
    },
    {
      name: "Performance Benchmarking",
      focus: "measuring speed and resource use",
      environment: "running tests and tuning setups",
      cluster: "technical",
      tweaks: { cognitive_style: -4, time_horizon: 4 }
    },
    {
      name: "Firmware Tuning",
      focus: "customizing device firmware settings",
      environment: "testing builds and flashing updates",
      cluster: "technical",
      tweaks: { risk_appetite: 2, hands_on: -2 }
    },
    {
      name: "Newsletter Publishing",
      focus: "curating ideas and building a small audience",
      environment: "testing topics and feedback loops",
      cluster: "entrepreneurial",
      tweaks: { social_energy: 4, autonomy_need: 6 }
    },
    {
      name: "Crowdfunding Campaign Design",
      focus: "packaging ideas into compelling pitches",
      environment: "planning rewards, timelines, and storytelling",
      cluster: "entrepreneurial",
      tweaks: { novelty_preference: 6, risk_appetite: 6 }
    },
    {
      name: "Micro-Product Experiments",
      focus: "launching tiny products to test demand",
      environment: "iterating on feedback and pricing",
      cluster: "entrepreneurial",
      tweaks: { novelty_preference: 8, autonomy_need: 6 }
    },
    {
      name: "Local Service Hustle",
      focus: "running a small service for neighbors",
      environment: "scheduling, pricing, and repeat customers",
      cluster: "entrepreneurial",
      tweaks: { social_energy: 4, impact_orientation: -2 }
    },
    {
      name: "Sponsor Outreach",
      focus: "pitching partnerships for small projects",
      environment: "writing pitches and negotiating terms",
      cluster: "entrepreneurial",
      tweaks: { social_energy: 6, risk_appetite: 4 }
    },
    {
      name: "Subscription Box Curation",
      focus: "curating themed items into small bundles",
      environment: "sourcing, packaging, and testing demand",
      cluster: "entrepreneurial",
      tweaks: { novelty_preference: 6, structure_preference: -2 }
    },
    {
      name: "Pitch Deck Practice",
      focus: "crafting narratives for business ideas",
      environment: "refining messaging and visual flow",
      cluster: "entrepreneurial",
      tweaks: { cognitive_style: 4, autonomy_need: 4 }
    },
    {
      name: "Trail Running",
      focus: "pushing pace on uneven terrain",
      environment: "exploring routes and tracking progress",
      cluster: "outdoors",
      tweaks: { risk_appetite: 4, novelty_preference: 4 }
    },
    {
      name: "Mountain Biking",
      focus: "riding challenging trails",
      environment: "tuning gear and handling terrain",
      cluster: "outdoors",
      tweaks: { hands_on: -2, risk_appetite: 4 }
    },
    {
      name: "Foraging Walks",
      focus: "identifying edible plants and fungi",
      environment: "learning local ecology hands-on",
      cluster: "outdoors",
      tweaks: { cognitive_style: 4, hands_on: -2 }
    },
    {
      name: "Wilderness Survival Practice",
      focus: "learning shelter, fire, and navigation skills",
      environment: "testing skills in real conditions",
      cluster: "outdoors",
      tweaks: { risk_appetite: 6, autonomy_need: 4 }
    },
    {
      name: "Surfing Sessions",
      focus: "reading waves and timing movement",
      environment: "spending time in changing conditions",
      cluster: "outdoors",
      tweaks: { risk_appetite: 4, novelty_preference: 4 }
    },
    {
      name: "Stargazing Camping",
      focus: "spending nights under dark skies",
      environment: "tracking constellations and quiet time",
      cluster: "outdoors",
      tweaks: { time_horizon: 4, autonomy_need: 4 }
    },
    {
      name: "River Cleanup Kayaking",
      focus: "paddling waterways while collecting trash",
      environment: "mixing adventure with stewardship",
      cluster: "outdoors",
      tweaks: { impact_orientation: -4, hands_on: -2 }
    },
    {
      name: "Community Radio Volunteering",
      focus: "producing segments for local radio",
      environment: "working with a small team on schedules",
      cluster: "community",
      tweaks: { social_energy: 4, aesthetic_sensitivity: 4 }
    },
    {
      name: "Block Party Planning",
      focus: "organizing neighborhood gatherings",
      environment: "coordinating food, music, and people",
      cluster: "community",
      tweaks: { social_energy: 6, structure_preference: -2 }
    },
    {
      name: "Local History Tours",
      focus: "researching and sharing neighborhood stories",
      environment: "leading small groups through routes",
      cluster: "community",
      tweaks: { social_energy: 4, time_horizon: 4 }
    },
    {
      name: "Skill-share Workshops",
      focus: "teaching practical skills to neighbors",
      environment: "setting agendas and hands-on demos",
      cluster: "community",
      tweaks: { social_energy: 4, impact_orientation: -4 }
    },
    {
      name: "Town Hall Facilitation",
      focus: "helping groups discuss local issues",
      environment: "guiding discussion with clear structure",
      cluster: "community",
      tweaks: { structure_preference: -4, social_energy: 4 }
    },
    {
      name: "Community Bulletin Editing",
      focus: "curating news for local boards",
      environment: "collecting updates and keeping things organized",
      cluster: "community",
      tweaks: { structure_preference: -4, impact_orientation: -4 }
    }
  ]
};

window.AppData = AppData;
