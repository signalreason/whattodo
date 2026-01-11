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
      text: "It is a rainy Sunday with no obligations. Which feels closest to what you would do first?",
      options: [
        {
          id: "rainy_sunday_a",
          text: "Deep-dive a topic online or in a book.",
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
          text: "Rearrange or fix something at home.",
          weights: {
            hands_on: -2,
            structure_preference: -1,
            time_horizon: -1,
            autonomy_need: 1
          }
        },
        {
          id: "rainy_sunday_c",
          text: "Call a friend and make loose plans.",
          weights: {
            social_energy: 2,
            impact_orientation: -2,
            novelty_preference: 1,
            risk_appetite: 1
          }
        },
        {
          id: "rainy_sunday_d",
          text: "Start a creative project (writing, drawing, music).",
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
      text: "You get a complicated new gadget with a 200-page manual. What happens?",
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
          text: "Watch a few video reviews and tutorials.",
          weights: {
            cognitive_style: 1,
            autonomy_need: -1,
            risk_appetite: -1
          }
        }
      ]
    },
    {
      id: "party_room",
      text: "At a lively party where you do not know many people, you are most likely to...",
      options: [
        {
          id: "party_room_a",
          text: "Find one interesting person and talk for a while.",
          weights: {
            social_energy: 1,
            impact_orientation: -1,
            cognitive_style: 1,
            time_horizon: 1
          }
        },
        {
          id: "party_room_b",
          text: "Move around and chat with lots of people briefly.",
          weights: {
            social_energy: 2,
            novelty_preference: 1,
            risk_appetite: 1
          }
        },
        {
          id: "party_room_c",
          text: "Help in the kitchen or with logistics.",
          weights: {
            hands_on: -1,
            structure_preference: -1,
            impact_orientation: -1,
            autonomy_need: -1
          }
        },
        {
          id: "party_room_d",
          text: "Hang back and observe until something draws you in.",
          weights: {
            social_energy: -2,
            cognitive_style: -1,
            autonomy_need: 1
          }
        }
      ]
    },
    {
      id: "notebook_pattern",
      text: "Look at your current notes. They are mostly...",
      options: [
        {
          id: "notebook_pattern_a",
          text: "Lists, bullet points, and checkboxes.",
          weights: {
            structure_preference: -2,
            cognitive_style: -1,
            time_horizon: 1
          }
        },
        {
          id: "notebook_pattern_b",
          text: "Diagrams, arrows, and sketches.",
          weights: {
            cognitive_style: 1,
            aesthetic_sensitivity: 1,
            hands_on: 1,
            structure_preference: 1
          }
        },
        {
          id: "notebook_pattern_c",
          text: "Paragraphs and reflections.",
          weights: {
            cognitive_style: 1,
            time_horizon: 1,
            autonomy_need: 1
          }
        },
        {
          id: "notebook_pattern_d",
          text: "Almost none; I keep things in my head.",
          weights: {
            structure_preference: 2,
            novelty_preference: 1,
            risk_appetite: 1
          }
        }
      ]
    },
    {
      id: "deadline_style",
      text: "You are assigned a project due in three weeks. What best matches your style?",
      options: [
        {
          id: "deadline_style_a",
          text: "Plan out each week and follow the plan.",
          weights: {
            structure_preference: -2,
            time_horizon: 2,
            risk_appetite: -1
          }
        },
        {
          id: "deadline_style_b",
          text: "Start exploring immediately and refine as you go.",
          weights: {
            novelty_preference: 1,
            autonomy_need: 1,
            structure_preference: 1,
            time_horizon: 1
          }
        },
        {
          id: "deadline_style_c",
          text: "Think off and on, do most work in the last week.",
          weights: {
            time_horizon: -1,
            risk_appetite: 1,
            structure_preference: 1
          }
        },
        {
          id: "deadline_style_d",
          text: "Wait for a spark, then work in big bursts.",
          weights: {
            autonomy_need: 2,
            novelty_preference: 1,
            risk_appetite: 1,
            cognitive_style: 1
          }
        }
      ]
    },
    {
      id: "city_walk",
      text: "Walking through a new city with an afternoon free, where do you drift?",
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
      id: "frustration_trigger",
      text: "Which situation frustrates you the most?",
      options: [
        {
          id: "frustration_trigger_a",
          text: "Chaotic meetings with no clear decisions.",
          weights: {
            structure_preference: -2,
            autonomy_need: 1
          }
        },
        {
          id: "frustration_trigger_b",
          text: "Being told exactly how to do something step-by-step.",
          weights: {
            autonomy_need: 2,
            structure_preference: 1,
            risk_appetite: 1
          }
        },
        {
          id: "frustration_trigger_c",
          text: "Doing the same task the same way every day.",
          weights: {
            novelty_preference: 2,
            structure_preference: 1
          }
        },
        {
          id: "frustration_trigger_d",
          text: "Not seeing how your work affects anything or anyone.",
          weights: {
            impact_orientation: -1,
            time_horizon: 1
          }
        }
      ]
    },
    {
      id: "music_habit",
      text: "Think about how you listen to music while working.",
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
      text: "You unexpectedly receive $500 to spend on yourself. What feels most natural?",
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
          text: "A short trip, experience, or event.",
          weights: {
            novelty_preference: 2,
            risk_appetite: 1,
            social_energy: 1
          }
        },
        {
          id: "small_windfall_c",
          text: "Courses or books to learn something new.",
          weights: {
            cognitive_style: -1,
            time_horizon: 2
          }
        },
        {
          id: "small_windfall_d",
          text: "Save or invest it toward a bigger plan.",
          weights: {
            risk_appetite: -2,
            time_horizon: 2,
            structure_preference: -1
          }
        }
      ]
    },
    {
      id: "problem_type",
      text: "You are at your best when solving...",
      options: [
        {
          id: "problem_type_a",
          text: "Puzzles with clear right or wrong answers.",
          weights: {
            cognitive_style: -2,
            structure_preference: -1,
            time_horizon: 1
          }
        },
        {
          id: "problem_type_b",
          text: "Messy, human problems with no obvious answer.",
          weights: {
            social_energy: 1,
            impact_orientation: -2,
            cognitive_style: 1
          }
        },
        {
          id: "problem_type_c",
          text: "Design or creative problems (how something should feel).",
          weights: {
            aesthetic_sensitivity: 2,
            cognitive_style: 2,
            structure_preference: 1
          }
        },
        {
          id: "problem_type_d",
          text: "Physical or technical problems (why something is not working).",
          weights: {
            hands_on: -2,
            cognitive_style: -1,
            impact_orientation: 1
          }
        }
      ]
    },
    {
      id: "time_distortion",
      text: "You tend to lose track of time when...",
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
          text: "Being in intense conversation or collaboration.",
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
      text: "Faced with a rule that seems inefficient or pointless, you usually...",
      options: [
        {
          id: "rule_bending_a",
          text: "Follow it exactly; there is probably a reason.",
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
          text: "Fight to get it changed for everyone.",
          weights: {
            social_energy: 1,
            impact_orientation: -1,
            risk_appetite: 1,
            autonomy_need: 1
          }
        }
      ]
    },
    {
      id: "travel_style",
      text: "On a trip, how do you prefer your days to go?",
      options: [
        {
          id: "travel_style_a",
          text: "Pre-planned schedule with key stops.",
          weights: {
            structure_preference: -2,
            time_horizon: 1,
            risk_appetite: -1
          }
        },
        {
          id: "travel_style_b",
          text: "A loose idea of the day with room to improvise.",
          weights: {
            structure_preference: 1,
            novelty_preference: 1
          }
        },
        {
          id: "travel_style_c",
          text: "No plan; follow curiosity and conversations.",
          weights: {
            structure_preference: 2,
            novelty_preference: 2,
            risk_appetite: 1
          }
        },
        {
          id: "travel_style_d",
          text: "One main goal; the rest can be flexible.",
          weights: {
            time_horizon: 1,
            structure_preference: -1,
            autonomy_need: 1
          }
        }
      ]
    },
    {
      id: "attention_detail",
      text: "How do you feel about small details?",
      options: [
        {
          id: "attention_detail_a",
          text: "I naturally notice them and care.",
          weights: {
            structure_preference: -1,
            cognitive_style: -1,
            time_horizon: 1
          }
        },
        {
          id: "attention_detail_b",
          text: "I can focus on them when needed, but prefer the big picture.",
          weights: {
            autonomy_need: 1
          }
        },
        {
          id: "attention_detail_c",
          text: "I usually ignore them unless they cause problems.",
          weights: {
            structure_preference: 1,
            time_horizon: -1,
            novelty_preference: 1
          }
        },
        {
          id: "attention_detail_d",
          text: "I obsess over them in certain areas, ignore them in others.",
          weights: {
            cognitive_style: 1,
            autonomy_need: 1,
            aesthetic_sensitivity: 1
          }
        }
      ]
    },
    {
      id: "conflict_style",
      text: "When a team disagrees, you are most likely to...",
      options: [
        {
          id: "conflict_style_a",
          text: "Gather facts and propose a clear decision.",
          weights: {
            cognitive_style: -1,
            structure_preference: -1,
            social_energy: 1
          }
        },
        {
          id: "conflict_style_b",
          text: "Help people understand each other's viewpoints.",
          weights: {
            social_energy: 2,
            impact_orientation: -1,
            cognitive_style: 1
          }
        },
        {
          id: "conflict_style_c",
          text: "Suggest a creative compromise or third option.",
          weights: {
            cognitive_style: 2,
            aesthetic_sensitivity: 1,
            autonomy_need: 1
          }
        },
        {
          id: "conflict_style_d",
          text: "Step away; conflict drains you.",
          weights: {
            social_energy: -2,
            autonomy_need: 1
          }
        }
      ]
    },
    {
      id: "side_project",
      text: "A friend asks for help on a side project. What is most appealing?",
      options: [
        {
          id: "side_project_a",
          text: "Define the scope and set milestones.",
          weights: {
            structure_preference: -2,
            time_horizon: 2
          }
        },
        {
          id: "side_project_b",
          text: "Prototype something quickly and test it.",
          weights: {
            hands_on: -1,
            novelty_preference: 1,
            risk_appetite: 1
          }
        },
        {
          id: "side_project_c",
          text: "Brainstorm ideas and patterns together.",
          weights: {
            cognitive_style: 1,
            autonomy_need: 1,
            novelty_preference: 1
          }
        },
        {
          id: "side_project_d",
          text: "Handle outreach and coordination.",
          weights: {
            social_energy: 2,
            impact_orientation: -1,
            autonomy_need: -1
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
    }
  ]
};

window.AppData = AppData;
