import type { Metadata } from "next";
import Script from "next/script";

// ─── Meta & Social ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "TVA Open Research Initiative | Efficient AI at the Edge — TechVerge Africa",
  description:
    "TechVerge Africa's open research initiative rethinks AI compute: investigating efficient neural architectures, sparse computation, persistent memory, and adaptive inference for capable AI on low-cost edge hardware. Open to students and independent researchers worldwide.",
  keywords: [
    // Core topic
    "efficient AI",
    "edge AI research",
    "low-cost AI",
    "AI compute efficiency",
    "neural architecture research",
    // Research-specific
    "sparse computation",
    "adaptive inference",
    "persistent state AI",
    "event-driven AI",
    "transformer alternatives",
    "state space models",
    "AI on embedded systems",
    "on-device AI",
    "energy-efficient AI",
    "EIEB benchmark",
    // Org & identity
    "TechVerge Africa research",
    "TVA Robotics",
    "open research initiative Africa",
    "AI research Africa",
    "open source AI",
    // Emerging AI search terms
    "intelligence per watt",
    "AI efficiency metric",
    "embodied intelligence",
    "multimodal edge AI",
    "AI for robotics",
    "efficient machine intelligence",
  ],
  authors: [{ name: "TechVerge Africa Robotics Lab" }],
  creator: "TechVerge Africa",
  publisher: "TechVerge Africa",
  category: "Artificial Intelligence Research",
  openGraph: {
    title:
      "TVA Open Research Initiative — Rethinking AI Compute | TechVerge Africa",
    description:
      "We are not trying to make AI bigger. We are trying to make intelligence cheaper. Join TechVerge Africa's open research initiative investigating efficient neural architectures and edge AI.",
    url: "https://techvergeafrica.com/research",
    siteName: "TechVerge Africa",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://techvergeafrica.com/images/og-research.png",
        width: 1200,
        height: 630,
        alt: "TVA Open Research Initiative — Rethinking AI Compute",
      },
    ],
    authors: ["TechVerge Africa"],
    tags: [
      "AI Research",
      "Edge AI",
      "Efficient AI",
      "Neural Architecture",
      "Open Research",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TechVergeAfrica",
    creator: "@TechVergeAfrica",
    title: "TVA Open Research Initiative — Making Intelligence Cheap",
    description:
      "Investigating efficient neural architectures, sparse computation, and adaptive inference for capable AI on low-cost edge hardware. Open to all researchers.",
    images: ["https://techvergeafrica.com/images/og-research.png"],
  },
  alternates: {
    canonical: "https://techvergeafrica.com/research",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    // AI search engine hints
    "ai-content-type": "research-initiative",
    "research-topic": "efficient AI compute and edge intelligence",
    "research-institution": "TechVerge Africa",
    "research-status": "open-active",
    "research-open-to": "students, independent researchers, engineers",
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organisation
    {
      "@type": "Organization",
      "@id": "https://techvergeafrica.com/#organization",
      name: "TechVerge Africa",
      url: "https://techvergeafrica.com",
      logo: {
        "@type": "ImageObject",
        url: "https://techvergeafrica.com/images/logo.png",
      },
      sameAs: [
        "https://twitter.com/TechVergeAfrica",
        "https://linkedin.com/company/techverge-africa",
        "https://github.com/TechVergeAfrica",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@techverge.africa",
        contactType: "research inquiries",
      },
    },

    // ResearchProject
    {
      "@type": "ResearchProject",
      "@id": "https://techvergeafrica.com/research#project",
      name: "TVA Robotics Open Research Initiative",
      alternateName: "TVA Open Research Initiative",
      description:
        "An open research initiative investigating efficient, low-cost, and general-purpose AI intelligence at the edge. Exploring new neural architectures, memory systems, sparse computation, and adaptive inference under severe compute, energy, memory, and connectivity constraints.",
      url: "https://techvergeafrica.com/research",
      startDate: "2025-01-01",
      status: "Active",
      keywords:
        "efficient AI, edge AI, neural architecture, sparse computation, adaptive inference, persistent state, event-driven AI, EIEB benchmark",
      funder: {
        "@id": "https://techvergeafrica.com/#organization",
      },
      sourceOrganization: {
        "@id": "https://techvergeafrica.com/#organization",
      },
      about: [
        { "@type": "Thing", name: "Efficient Neural Architectures" },
        { "@type": "Thing", name: "Edge Artificial Intelligence" },
        { "@type": "Thing", name: "Sparse Computation" },
        { "@type": "Thing", name: "Adaptive Inference" },
        { "@type": "Thing", name: "Persistent AI Memory Systems" },
        { "@type": "Thing", name: "Event-Driven Computation" },
        { "@type": "Thing", name: "Multimodal AI" },
        { "@type": "Thing", name: "Embodied Intelligence" },
        { "@type": "Thing", name: "Intelligence Efficiency Benchmarking" },
      ],
    },

    // Article / web page
    {
      "@type": "ScholarlyArticle",
      "@id": "https://techvergeafrica.com/research#article",
      headline:
        "Rethinking AI Compute: Toward Efficient, Low-Cost and General-Purpose Intelligence at the Edge",
      description:
        "Investigating new neural architectures, memory systems, sparse computation, and adaptive inference for capable AI under severe compute, energy, memory, and connectivity constraints.",
      url: "https://techvergeafrica.com/research",
      image: "https://techvergeafrica.com/images/og-research.png",
      datePublished: "2025-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      author: {
        "@id": "https://techvergeafrica.com/#organization",
      },
      publisher: {
        "@id": "https://techvergeafrica.com/#organization",
      },
      about: {
        "@id": "https://techvergeafrica.com/research#project",
      },
      keywords:
        "efficient AI, edge AI, transformer alternatives, sparse computation, adaptive inference, EIEB, intelligence per watt",
    },

    // FAQ — great for AI search snippets and featured snippets
    {
      "@type": "FAQPage",
      "@id": "https://techvergeafrica.com/research#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the TVA Open Research Initiative?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The TVA Robotics Open Research Initiative is TechVerge Africa's open research program investigating efficient, low-cost, and general-purpose AI at the edge. It explores new neural architectures, persistent memory systems, sparse computation, and adaptive inference to make capable AI achievable on low-cost hardware.",
          },
        },
        {
          "@type": "Question",
          name: "What is the core research question TechVerge Africa is investigating?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Can we develop a fundamentally more compute-efficient architecture for AI that achieves useful perception, reasoning, memory, and decision-making on low-cost edge hardware? TechVerge Africa believes we do not need larger models for more intelligence — we need better architectures that use computation more intelligently.",
          },
        },
        {
          "@type": "Question",
          name: "What is the EIEB benchmark?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EIEB stands for Edge Intelligence Efficiency Benchmark. It is TechVerge Africa's proposed multi-dimensional benchmark that measures AI capability across task capability, compute (FLOPs), memory (RAM/VRAM), latency (ms), energy (Joules/task), power (Watts), model size, cost ($/task), bandwidth (MB/task), robustness, and adaptability.",
          },
        },
        {
          "@type": "Question",
          name: "What is Intelligence Efficiency (IE) as defined by TechVerge Africa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TechVerge Africa defines Intelligence Efficiency (IE) as Performance divided by Compute. Extensions include IE_E (Performance / Energy, measuring useful intelligence per Watt) and IE_C (Performance / Cost, measuring useful intelligence per Dollar). These metrics are the foundation of TechVerge's EIEB benchmark.",
          },
        },
        {
          "@type": "Question",
          name: "Can students and independent researchers contribute to the TVA research initiative?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TechVerge Africa's research initiative is explicitly open to students, independent researchers, and engineers from any background. Contributions can include literature reviews, experiments, benchmarking, simulations, datasets, model optimization, theoretical work, hardware experiments, and documentation. Curiosity, rigour, and commitment to open science are the only prerequisites.",
          },
        },
        {
          "@type": "Question",
          name: "What is TechVerge Africa's research identity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TechVerge Africa describes its research identity as: 'We are researching the economics and architecture of efficient machine intelligence.' Their mission is not to make AI bigger, but to make intelligence cheaper.",
          },
        },
        {
          "@type": "Question",
          name: "What are the 8 research areas of the TVA initiative?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The eight research areas are: (1) Rethinking the Transformer — questioning which mechanisms are essential vs. costly; (2) Persistent Intelligence — maintaining compact world state instead of recomputing; (3) Event-Driven Intelligence — compute only when input warrants it; (4) Intelligence per Watt — measuring efficiency not just performance; (5) Edge Intelligence — AI without cloud connectivity; (6) Multimodal Intelligence — fusing vision, language, sensors on edge; (7) Embodied Intelligence — AI for robots in unstructured environments; and (8) The Bigger Question — do we need larger models or better architectures?",
          },
        },
        {
          "@type": "Question",
          name: "What is TechVerge Africa's primary AI research hypothesis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TechVerge Africa's primary falsifiable hypothesis is: AI systems that combine persistent state, selective computation, adaptive inference, efficient neural architectures, and multimodal world representations can achieve competitive real-world task performance while requiring substantially less computation, memory, energy, and connectivity than conventional large-model architectures.",
          },
        },
      ],
    },

    // BreadcrumbList
    {
      "@type": "BreadcrumbList",
      "@id": "https://techvergeafrica.com/research#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://techvergeafrica.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Research",
          item: "https://techvergeafrica.com/research",
        },
      ],
    },
  ],
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="research-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      {children}
    </>
  );
}
