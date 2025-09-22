// Mock data for Mangalathu Group website
export const mockData = {
  company: {
    name: "Mangalathu Builders and Contractors",
    tagline: "Building Excellence Since Decades",
    description: "Full-service construction and architecture firm specializing in residential, commercial, and luxury interior projects with innovative design approaches.",
    phone: "+91 9995558881",
    email: "contact@mangalathugroup.com",
    website: "www.mangalathugroup.com",
    address: "Kerala, India"
  },
  
  navigation: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" }
  ],

  // Advanced Slider Revolution Data
  sliderRevolutionData: [
    {
      id: 1,
      title: "Get an inspiration\nwhen its matter",
      subtitle: "Explore the residential community in Kerala.",
      year: "2024",
      location: "Kochi, Kerala",
      client: "Private Client",
      description: "Founded in Kerala with offices across India. Mangalathu Group creates exceptional residential and commercial spaces with innovative design approaches.",
      projectTitle: "Commercial\nbuilding\nconcept in\nVillage.",
      backgroundImage: "/api/placeholder/1920/1080",
      backgroundVideo: null,
      geometricShapes: [
        {
          className: "w-32 h-32 bg-red-500/20 rounded-full",
          style: { top: '20%', left: '10%' },
          animateIn: 'opacity-100 translate-x-0',
          animateOut: 'opacity-0 -translate-x-10'
        },
        {
          className: "w-24 h-24 bg-blue-500/20 rounded-lg rotate-45",
          style: { bottom: '30%', right: '15%' },
          animateIn: 'opacity-100 translate-y-0',
          animateOut: 'opacity-0 translate-y-10'
        }
      ]
    },
    {
      id: 2,
      title: "Están formados\npor la suma",
      subtitle: "Commercial building concept in Trivandrum.",
      year: "2024",
      location: "Trivandrum, Kerala",
      client: "Commercial Group",
      description: "Modern commercial architecture that blends functionality with aesthetic appeal, creating spaces that inspire business growth and innovation.",
      projectTitle: "Luxury Resort\nConcept\nin Coastal\nKerala.",
      backgroundImage: "/api/placeholder/1920/1080",
      backgroundVideo: null,
      geometricShapes: [
        {
          className: "w-40 h-40 bg-green-500/20 rounded-full",
          style: { top: '40%', right: '20%' },
          animateIn: 'opacity-100 scale-100',
          animateOut: 'opacity-0 scale-75'
        }
      ]
    },
    {
      id: 3,
      title: "Trabaja tu talento\nen construcción",
      subtitle: "Luxury residential project in Kottayam.",
      year: "2023",
      location: "Kottayam, Kerala",
      client: "Luxury Homes",
      description: "Premium residential development showcasing contemporary design principles with traditional Kerala architectural elements and sustainable practices.",
      projectTitle: "Heritage Villa\nRestoration\nProject in\nFort Kochi.",
      backgroundImage: "/api/placeholder/1920/1080",
      backgroundVideo: null,
      geometricShapes: [
        {
          className: "w-28 h-28 bg-yellow-500/20 rounded-lg",
          style: { top: '60%', left: '25%' },
          animateIn: 'opacity-100 rotate-0',
          animateOut: 'opacity-0 rotate-45'
        }
      ]
    }
  ],

  hero: [
    {
      id: 1,
      title: "Get an inspiration when its matter",
      subtitle: "Explore the residential community in Kerala.",
      year: "2024",
      location: "Kochi, Kerala",
      client: "Private Client",
      description: "Founded in Kerala with offices across India. Mangalathu Group creates exceptional residential and commercial spaces with innovative design approaches.",
      image: "/api/placeholder/800/600"
    },
    {
      id: 2,
      title: "Están formados por la suma",
      subtitle: "Commercial building concept in Trivandrum.",
      year: "2024",
      location: "Trivandrum, Kerala",
      client: "Commercial Group",
      description: "Modern commercial architecture that blends functionality with aesthetic appeal, creating spaces that inspire business growth.",
      image: "/api/placeholder/800/600"
    },
    {
      id: 3,
      title: "Trabaja tu talento en construcción",
      subtitle: "Luxury residential project in Kottayam.",
      year: "2023",
      location: "Kottayam, Kerala",
      client: "Luxury Homes",
      description: "Premium residential development showcasing contemporary design principles with traditional Kerala architectural elements.",
      image: "/api/placeholder/800/600"
    }
  ],

  services: [
    {
      title: "Residential Construction",
      description: "Using year-over-year design approaches and latest techs, we will ensure that your new home will be visible, accessible, and built to last.",
      icon: "home"
    },
    {
      title: "Commercial Construction",
      description: "Complete commercial construction services including shopping malls, office complexes, and retail spaces with modern facilities.",
      icon: "building"
    },
    {
      title: "Luxurious Interiors",
      description: "Premium interior design and execution services that transform spaces into extraordinary experiences with attention to detail.",
      icon: "palette"
    }
  ],

  stats: [
    { number: "25", label: "Years of Experience" },
    { number: "150", label: "Completed Projects" },
    { number: "50", label: "Happy Clients" },
    { number: "15", label: "Awards Won" }
  ],

  // Enhanced Projects for Portfolio Manager
  projects: [
    {
      id: 1,
      title: "Kerala Heritage Villa",
      category: ["Residential", "Architecture", "Heritage"],
      image: "/api/placeholder/400/500",
      description: "Traditional Kerala architecture meets modern amenities in this stunning heritage villa restoration project.",
      client: "Heritage Foundation",
      date: "2024-01-15",
      location: "Fort Kochi, Kerala",
      budget: "₹2.5 Crores",
      status: "Completed",
      views: 1250
    },
    {
      id: 2,
      title: "Techno Park Commercial Complex",
      category: ["Commercial", "Modern", "Technology"],
      image: "/api/placeholder/400/500",
      description: "State-of-the-art commercial complex in Technopark featuring sustainable design and smart building systems.",
      client: "Tech Innovations Ltd",
      date: "2024-03-20",
      location: "Technopark, Trivandrum",
      budget: "₹15 Crores",
      status: "In Progress",
      views: 890
    },
    {
      id: 3,
      title: "Luxury Beachfront Resort",
      category: ["Hospitality", "Luxury", "Resort"],
      image: "/api/placeholder/400/500",
      description: "Premium beachfront resort with contemporary design and world-class amenities for the ultimate vacation experience.",
      client: "Coastal Resorts Pvt Ltd",
      date: "2023-11-10",
      location: "Varkala, Kerala",
      budget: "₹25 Crores",
      status: "Completed",
      views: 2100
    },
    {
      id: 4,
      title: "Modern Apartment Complex",
      category: ["Residential", "Modern", "Apartments"],
      image: "/api/placeholder/400/500",
      description: "Multi-story residential complex with modern amenities, green spaces, and sustainable living solutions.",
      client: "Green Living Developers",
      date: "2024-02-05",
      location: "Kakkanad, Kochi",
      budget: "₹8 Crores",
      status: "In Progress",
      views: 650
    },
    {
      id: 5,
      title: "Cultural Arts Center",
      category: ["Public", "Cultural", "Community"],
      image: "/api/placeholder/400/500",
      description: "Community cultural center promoting local arts and traditions with modern exhibition spaces and performance halls.",
      client: "Kerala Cultural Department",
      date: "2023-09-15",
      location: "Thrissur, Kerala",
      budget: "₹5 Crores",
      status: "Completed",
      views: 980
    },
    {
      id: 6,
      title: "Corporate Headquarters",
      category: ["Commercial", "Corporate", "Modern"],
      image: "/api/placeholder/400/500",
      description: "Contemporary corporate headquarters with flexible workspaces, collaborative areas, and sustainable design features.",
      client: "Kerala Industries Corporation",
      date: "2024-04-12",
      location: "Industrial Estate, Kochi",
      budget: "₹12 Crores",
      status: "Planning",
      views: 420
    },
    {
      id: 7,
      title: "Boutique Hotel Project",
      category: ["Hospitality", "Boutique", "Heritage"],
      image: "/api/placeholder/400/500",
      description: "Intimate boutique hotel blending traditional Kerala architecture with modern luxury amenities.",
      client: "Heritage Hotels Group",
      date: "2023-12-20",
      location: "Munnar, Kerala",
      budget: "₹6 Crores",
      status: "Completed",
      views: 1560
    },
    {
      id: 8,
      title: "Educational Campus",
      category: ["Educational", "Public", "Modern"],
      image: "/api/placeholder/400/500",
      description: "Modern educational campus with smart classrooms, laboratories, and recreational facilities for holistic learning.",
      client: "Educational Trust",
      date: "2024-01-30",
      location: "Palakkad, Kerala",
      budget: "₹20 Crores",
      status: "In Progress",
      views: 780
    }
  ],

  // Portfolio categories for filtering
  portfolioCategories: [
    "Residential", "Commercial", "Hospitality", "Public", 
    "Educational", "Healthcare", "Heritage", "Modern", 
    "Luxury", "Sustainable", "Technology"
  ],

  testimonials: [
    {
      category: "Construction Quality",
      text: "Mangalathu Group delivered exceptional quality in our residential project. Their attention to detail and timely delivery exceeded our expectations. The team's professionalism and expertise made the entire process smooth and stress-free.",
      author: "Rajesh Kumar",
      position: "Homeowner, Kochi",
      rating: 5,
      projectType: "Residential Villa"
    },
    {
      category: "Project Management",
      text: "Professional approach and excellent project management. They completed our commercial building ahead of schedule with outstanding quality. Their innovative solutions helped us stay within budget while achieving our vision.",
      author: "Priya Nair",
      position: "Business Owner, Trivandrum",
      rating: 5,
      projectType: "Commercial Complex"
    },
    {
      category: "Design Excellence",
      text: "Their interior design team transformed our office space completely. The blend of functionality and aesthetics is remarkable. Every detail was carefully considered to create an inspiring work environment.",
      author: "Thomas George",
      position: "CEO, Tech Company",
      rating: 5,
      projectType: "Office Interiors"
    },
    {
      category: "Customer Service",
      text: "From initial consultation to project completion, Mangalathu Group provided exceptional customer service. They listened to our needs and delivered exactly what we envisioned for our dream home.",
      author: "Sunitha Menon",
      position: "Homeowner, Kottayam",
      rating: 5,
      projectType: "Luxury Villa"
    }
  ],

  blogPosts: [
    {
      title: "Modern Construction Techniques in Kerala Architecture",
      excerpt: "Exploring how traditional Kerala architecture adapts to modern construction methods and materials while preserving cultural heritage.",
      date: "July 15, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/400/300",
      category: ["Architecture", "Innovation", "Kerala"],
      author: "Architectural Team",
      featured: true
    },
    {
      title: "Sustainable Building Practices for Commercial Projects",
      excerpt: "Our approach to eco-friendly construction and sustainable building practices in commercial developments that benefit both environment and business.",
      date: "June 10, 2024",
      readTime: "4 min read",
      image: "/api/placeholder/400/300",
      category: ["Sustainability", "Commercial", "Green Building"],
      author: "Sustainability Experts"
    },
    {
      title: "Interior Design Trends: Luxury Meets Functionality",
      excerpt: "Latest trends in luxury interior design that prioritize both aesthetics and practical functionality for modern living spaces.",
      date: "May 20, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/300",
      category: ["Interior", "Design", "Luxury"],
      author: "Interior Design Team"
    },
    {
      title: "Smart Home Integration in Modern Construction",
      excerpt: "How we integrate cutting-edge smart home technology into our construction projects for enhanced living experiences.",
      date: "April 25, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/400/300",
      category: ["Technology", "Smart Homes", "Innovation"],
      author: "Technical Team"
    }
  ],

  clients: [
    "Tata Group", "Infosys", "Kerala Government", "Private Developers", 
    "Hospitality Chains", "Educational Institutions", "Healthcare Providers", 
    "Tech Companies", "Heritage Foundations", "Real Estate Groups"
  ],

  // Page Builder Default Sections
  pageBuilderSections: [
    {
      id: "hero-1",
      type: "hero",
      props: {
        title: "Building Dreams Into Reality",
        subtitle: "Professional construction and architecture services in Kerala",
        backgroundImage: "/api/placeholder/1920/1080",
        ctaText: "Start Your Project",
        ctaLink: "/contact"
      }
    },
    {
      id: "stats-1", 
      type: "stats",
      props: {
        stats: [
          { number: "25+", label: "Years Experience" },
          { number: "150+", label: "Projects Completed" },
          { number: "50+", label: "Happy Clients" }
        ]
      }
    }
  ]
};