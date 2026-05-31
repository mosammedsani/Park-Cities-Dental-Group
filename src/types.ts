/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Doctor {
  name: string;
  title: string;
  education: string[];
  memberships: string[];
  bio: string;
  philosophy: string;
  image: string;
  credentialsHighlight: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: "Cosmetic" | "General" | "Restorative" | "Implants" | "Preventive" | "Emergency";
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  iconName: string; // Lucide icon name mapping
}

export interface SmileTransformation {
  id: string;
  title: string;
  treatment: string;
  category: "Veneers" | "Invisalign" | "Smile Makeover" | "Whitening" | "Restoration";
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  quote: string;
  rating: number;
  treatmentRecieved: string;
  date: string;
}

export interface BookingFormInput {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: "morning" | "afternoon";
  serviceType: string;
  isNewPatient: boolean;
  message: string;
}

// -------------------------------------------------------------
// Real Static Data corresponding to Park Cities Dental Group
// -------------------------------------------------------------

export const DENTAL_DOCTOR: Doctor = {
  name: "Dr. J. Garrett Shaver, DDS",
  title: "Principal & Chief Cosmetic Dentist",
  education: [
    "Doctor of Dental Surgery (DDS) - Texas A&M Baylor College of Dentistry, Dallas",
    "Post-Graduate Advanced Clinical Training in Restorative & Aesthetic Dentistry",
    "Invisalign® Certified Professional & Advanced Orthodontic Study Group Liaison",
    "Comprehensive Implantology Fellowship - Dallas Dental Academy"
  ],
  memberships: [
    "American Dental Association (ADA)",
    "Texas Dental Association (TDA)",
    "Dallas County Dental Society (DCDS)",
    "Academy of General Dentistry (AGD)",
    "American Academy of Cosmetic Dentistry (AACD) - Affiliate Member"
  ],
  bio: "Dr. J. Garrett Shaver, DDS has been providing extraordinary dental care to the Dallas, Highland Park, and University Park communities since taking over the prestigious Park Cities Dental Group. Combining a meticulous eye for cosmetic symmetry with a gentle, patient-centric delivery, Dr. Shaver has established the practice as a premier destination for state-of-the-art restorative and aesthetic smile design. Under his leadership, the clinic serves generational families and discerning individuals who seek a comfortable, boutique healthcare experience with uncompromising clinical outcomes.",
  philosophy: "I believe in conservative, patient-first dentistry. This means our absolute priority is preserving your natural tooth structure and maintaining oral health through highly selective, clinically-justified treatments. We combine this protective philosophy with the worlds most sophisticated technology to minimize discomfort and craft radiant, authentic smiles that structurally endure a lifetime.",
  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
  credentialsHighlight: "Accredited Dental Surgeon with 20+ years of clinical excellence in the Park Cities enclave of Dallas."
};

export const DENTAL_SERVICES: ServiceItem[] = [
  {
    id: "veneers",
    name: "Premium Porcelain Veneers",
    category: "Cosmetic",
    shortDescription: "Impeccably hand-crafted, wafer-thin porcelain shells designed to permanently correct chips, gaps, and severe staining with microscopic precision.",
    fullDescription: "Porcelain veneers are the gold standard of cosmetic smile design. Each veneer is meticulously sculpted to fit the front face of individual teeth, allowing Dr. Shaver to seamlessly correct alignment issues, severe enamel coloration, and anatomical discrepancies. Utilizing premium leucite-reinforced glass-ceramics, our veneers mimic the light-handling properties of natural teeth while delivering extreme structural strength.",
    highlights: [
      "Individually hand-crafted by master ceramicists",
      "Conservative enamel preparation preserving natural tooth structure",
      "Stain-resistant materials that uphold long-term brilliance",
      "Digital mapping for optimal facial framing and bite alignment"
    ],
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    iconName: "Sparkles"
  },
  {
    id: "smile-makeover",
    name: "Comprehensive Smile Makeovers",
    category: "Cosmetic",
    shortDescription: "A fully tailored combination of aesthetic and restorative procedures designed to create a harmonious, structurally sound smile transformation.",
    fullDescription: "A smile makeover is a holistic cosmetic rehabilitation engineered to align with your facial proportions, lips, and unique aesthetic goals. Dr. Shaver combines veneers, custom crowns, whitening, and conservative bonding to create a balanced, radiant composition. Our digital preview workflows allow you to see and co-design your final smile before any clinical treatment begins.",
    highlights: [
      "Custom aesthetic mapping based on high-definition facial photography",
      "Integration of cosmetic, restorative, and periodontal enhancements",
      "Direct collaborative design custom-fit to your skin tone and lip lines",
      "Comprehensive multi-phased treatment plans with maximum comfort protocols"
    ],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    iconName: "ShieldCheck"
  },
  {
    id: "invisalign",
    name: "Invisalign® Clear Aligners",
    category: "Cosmetic",
    shortDescription: "Discreet orthodontic correction using highly comfortable, removable, custom-sculpted medical-grade polymer clear aligners.",
    fullDescription: "Straighten your smile without the compromise of metal braces. The Invisalign® system uses sequence-controlled clear aligners to gradually translate misaligned teeth. Perfect for busy Dallas professionals and adolescents, these aligners are easily removable for seamless brushing, flossing, and fine dining.",
    highlights: [
      "Virtually invisible orthodontic therapy",
      "Custom 3D iTero® digital impressions without sticky molds",
      "Removable for effortless oral hygiene and meals",
      "Fewer office adjustments with highly accurate biomechanics"
    ],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    iconName: "Activity"
  },
  {
    id: "whitening",
    name: "Bespoke Teeth Whitening",
    category: "Cosmetic",
    shortDescription: "Advanced in-office dental whitening and custom-molded take-home tray systems formulated to safely lifts decades of stains.",
    fullDescription: "Launder away yellowing and deep stains from coffee, tea, and aging under professional supervised conditions. We offer premium, hydrogen-peroxide based bleaching containing custom desensitizing elements that protect tooth enamel and root structures while achieving up to eight shades of improvement.",
    highlights: [
      "Rapid, safe in-office single visit sessions",
      "Professional-grade take-home kits with customized vinyl trays",
      "Formulated with desensitizers to minimize nerve irritation",
      "Permanent cosmetic guidance to maintain brilliant ivory tones"
    ],
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    iconName: "Zap"
  },
  {
    id: "implants",
    name: "Advanced Dental Implants",
    category: "Implants",
    shortDescription: "High-integrity titanium posts that substitute missing roots to anchor premium custom-shaded dental crowns, restoring 100% bite function.",
    fullDescription: "Dental implants represent the modern zenith of tooth replacement. Dr. Shaver partners with top oral micro-surgeons to place high-grade biocompatible titanium anchors directly into the jawbone, which fuse naturally through osteointegration. Dr. Shaver then crafts elite crowns and bridges on top that look and function elegantly like natural teeth.",
    highlights: [
      "Permanent, non-slipping root and tooth replacement",
      "Preserves jawbone density and structural facial contours",
      "Does not rely on or damage surrounding healthy teeth",
      "Elite CeraGem restorations colored to match existing teeth"
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    iconName: "HeartPulse"
  },
  {
    id: "crowns",
    name: "Porcelain Crowns & Bridges",
    category: "Restorative",
    shortDescription: "Metal-free, durable porcelain restorations that fully encapulate compromised teeth or span gaps left by missing teeth.",
    fullDescription: "Restoring major damage or decay requires structural support. Our dental crowns fully cover a weakened tooth to block fracture propagation and restore natural form. For gaps, custom high-tensile porcelain bridges anchor elegantly onto surrounding supportive structures, forming a solid chewing surface.",
    highlights: [
      "100% metal-free biocompatible premium porcelain",
      "Digitally milled to match your bite force coordinates",
      "Prevents drifting of neighboring teeth into empty zones",
      "Hermetically sealed margins to prevent recurrent decay"
    ],
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800",
    iconName: "Heart"
  },
  {
    id: "periodontal",
    name: "Microbial Periodontal Care",
    category: "Restorative",
    shortDescription: "Targeted scaling, root planing, and therapeutic irrigation designed to treat gum infection and save supporting structures.",
    fullDescription: "Healthy gums are the absolute foundation of any stable smile. Periodontal disease is a chronic bacterial infection that compromises the alveolar bone. Our targeted diagnostics, deep scaling, root planing, and local antibiotic therapies arrest deep-pocket infections and protect your cardiac wellness.",
    highlights: [
      "Detailed pocket depth mapping using computerized testing",
      "Ultrasound scaling to disrupt deep subgingival micro-biofilm",
      "Local antimicrobial placement to sterilize active pockets",
      "Supportive custom therapy cycles to reverse early gingivitis"
    ],
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    iconName: "AlertCircle"
  },
  {
    id: "preventive",
    name: "Boutique Preventive Hygiene & Prophylaxis",
    category: "Preventive",
    shortDescription: "Elite-level cleaning, highly sensitive digital diagnostics, and comprehensive screening to maintain optimal pristine wellness.",
    fullDescription: "Clinical cleanliness prevents costly dental problems. Our boutique hygiene visits are designed to pamper you. Enjoy noise-canceling headphones, warm towels, and state-of-the-art diagnostic screening, including oral cancer evaluations and zero-radiation digital imaging, with thoroughly painless procedures.",
    highlights: [
      "Advanced ultrasonic plaque and tarter ablation",
      "Ultra-low dose digital radiography with instant image rendering",
      "Comprehensive screening for bruxism, TMJ, and active pathology",
      "Fluoride varnish and advanced enamel remineralization coatings"
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    iconName: "Smile"
  },
  {
    id: "emergency",
    name: "Priority Emergency Dental Care",
    category: "Emergency",
    shortDescription: "Immediate priority visual scheduling for acute pain, avulsed teeth, severe structural fractures, or abscesses.",
    fullDescription: "Dental emergencies can be incredibly stressful and painful. At Park Cities Dental Group, we reserved daily scheduling blocks specifically to provide prompt triage. Whether you have cracked a tooth on a weekend or are facing excruciating swelling, Dr. Shaver and our staff prioritize swift relief and definitive solutions.",
    highlights: [
      "Same-day emergency triage availability",
      "Immediate local pain management and digital diagnostics",
      "Emergency root canal treatments and crown re-bonding",
      "Direct, step-by-step guidance on rescuing avulsed (knocked out) elements"
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    iconName: "Clock"
  }
];

export const SMILE_GALLERY: SmileTransformation[] = [
  {
    id: "case-1",
    title: "Highland Park Makeover",
    treatment: "10 Upper Custom Porcelain Veneers",
    category: "Veneers",
    description: "The patient presented with enamel erosion, uneven lengths, and internal discoloration. We sculpted 10 custom feldspathic porcelain veneers in a warm ivory shade to frame her smile naturally with natural translucency.",
    beforeImage: "https://picsum.photos/seed/before1/500/350",
    afterImage: "https://picsum.photos/seed/after1/500/350"
  },
  {
    id: "case-2",
    title: "University Park Orthodontics",
    treatment: "14-Month Invisalign® Therapy & Whitening",
    category: "Invisalign",
    description: "Moderate crowding of the anterior teeth with deep bite issues. Resolved comfortably using sequence aligners, followed by an in-office deep formulation tooth whitening session to highlight the newly aligned teeth.",
    beforeImage: "https://picsum.photos/seed/before2/500/350",
    afterImage: "https://picsum.photos/seed/after2/500/350"
  },
  {
    id: "case-3",
    title: "Restorative Rejuvenation",
    treatment: "Failing Metal Crowns Replaced & Implant Crown",
    category: "Smile Makeover",
    description: "Patient had old failing porcelain-fused-to-metal (PFM) crowns with visible dark gum margins and a missing bicuspid. We placed a biocompatible root implant and 4 all-ceramic crowns to match her dental profile perfectly.",
    beforeImage: "https://picsum.photos/seed/before3/500/350",
    afterImage: "https://picsum.photos/seed/after3/500/350"
  },
  {
    id: "case-4",
    title: "Elite Stain Ablation",
    treatment: "Bespoke In-office Whitening",
    category: "Whitening",
    description: "Years of espresso and red wine staining successfully corrected in one visit using professional-grade whitening. Achieved an 8-shade increase with zero permanent post-operative tooth sensitivity.",
    beforeImage: "https://picsum.photos/seed/before4/500/350",
    afterImage: "https://picsum.photos/seed/after4/500/350"
  }
];

export const PATIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    patientName: "Victoria C.",
    location: "Highland Park, TX",
    quote: "Dr. Shaver completely transformed my confidence. After decades of feeling self-conscious about a gap and dull color, his custom porcelain veneers gave me a smile that matches my facial structure perfectly. The office feels more like a luxury concierge spa than a dentist! He is a true artist.",
    rating: 5,
    treatmentRecieved: "Porcelain Veneers & Aesthetic Design",
    date: "April 2026"
  },
  {
    id: "rev-2",
    patientName: "Charles M.",
    location: "University Park, TX",
    quote: "My entire family has been coming to Park Cities Dental Group under Dr. Shaver's stewardship. He is extraordinarily conservative — he will never push a procedure you do not need, and his focus is always on long-term tooth health. The pain-free anesthesia they use is brilliant.",
    rating: 5,
    treatmentRecieved: "Boutique Preventive Hygiene & Restorative",
    date: "March 2026"
  },
  {
    id: "rev-3",
    patientName: "Sarah L.",
    location: "Preston Hollow, TX",
    quote: "I had a sudden dental emergency on a Thursday before a major wedding. Dr. Shaver and his team worked me in instantly and completed a flawless, natural repair of my front crown. Their kindness, attention to detail, and modern clinical style is unmatched in Dallas.",
    rating: 5,
    treatmentRecieved: "Emergency Crown Stabilization",
    date: "February 2026"
  },
  {
    id: "rev-4",
    patientName: "Robert D., Jr.",
    location: "Dallas, TX",
    quote: "If you want the highest quality dentistry with complete professional transparency, this is the place. Dr. Shaver is thorough, extremely well-educated, and explains every digital scan with you. Free reserved parking makes the visit incredibly convenient.",
    rating: 5,
    treatmentRecieved: "Dental Implant Crown & Invisalign",
    date: "May 2026"
  }
];

export const OFFICE_AMENITIES = [
  {
    title: "Luxury Waiting Lounge",
    description: "Plush leather seating, premium organic local coffee, sparkling mineral water, and curated modern architecture."
  },
  {
    title: "Noise-Canceling Headphones",
    description: "Equipped in each treatment suite with active sound mitigation so you can stream calming audio or visual entertainment."
  },
  {
    title: "Therapeutic Heated Cushions",
    description: "Our dental chairs feature micro-contouring warm compression systems to relax neck and spinal tension."
  },
  {
    title: "Drill-Free Air Abrasion",
    description: "Advanced conservative decay extraction that often eliminates the need for needles, drills, or local anesthesia."
  },
  {
    title: "Free Reserved Parking",
    description: "Avoid the typical city stress with dedicated, clearly labeled client parking spots right beneath our high-rise tower."
  }
];

export const INSURANCE_NETWORKS = [
  "Delta Dental Premier",
  "Cigna PPO (Selective Policies)",
  "MetLife (Advanced Care Preferred)",
  "Aetna (Assigned Network Benefit)",
  "Guardian Dental Guard Elite"
];
