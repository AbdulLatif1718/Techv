"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  Cpu,
  Zap,
  Brain,
  Globe2,
  Radio,
  Eye,
  Layers,
  ChevronRight,
  FlaskConical,
  BarChart3,
  Microscope,
  Users,
  Rocket,
  GitBranch,
  ArrowRight,
  Network,
  CircuitBoard,
  Target,
  Lightbulb,
  BookOpen,
  Database,
  Atom,
} from "lucide-react";

const researchAreas = [
  {
    number: "01",
    title: "Rethinking the Transformer",
    colorClass: "tech-accent",
    questions: [
      {
        id: "RQ1",
        text: "Which Transformer mechanisms are essential for intelligence vs. disproportionately costly?",
      },
      {
        id: "RQ2",
        text: "Can attention be replaced or selectively activated without degrading reasoning?",
      },
      {
        id: "RQ3",
        text: "Can recurrent, state-space, sparse, or hybrid architectures offer a more efficient alternative?",
      },
      {
        id: "RQ4",
        text: "Does persistent internal state require less compute than processing full contextual sequences each time?",
      },
    ],
  },
  {
    number: "02",
    title: "Persistent Intelligence",
    colorClass: "tech-green",
    questions: [
      {
        id: "RQ5",
        text: "Can persistent world state replace repeated recomputation of previously understood information?",
      },
      {
        id: "RQ6",
        text: "Can an AI maintain a compact internal representation and update only what changes?",
      },
      {
        id: "RQ7",
        text: "What is the optimal persistent state representation? (latent, symbolic, neural, semantic graph...)",
      },
    ],
  },
  {
    number: "03",
    title: "Event-Driven Intelligence",
    colorClass: "tech-orange",
    questions: [
      {
        id: "RQ8",
        text: "Can event-driven computation substantially reduce AI's continuous compute requirements?",
      },
      {
        id: "RQ9",
        text: "How can an AI judge whether incoming information justifies additional computation?",
      },
      {
        id: "RQ10",
        text: "Can an AI dynamically scale computational complexity to task difficulty?",
      },
    ],
  },
  {
    number: "04",
    title: "Intelligence per Watt",
    colorClass: "tech-accent",
    questions: [
      {
        id: "RQ11",
        text: "How should AI intelligence efficiency be measured? IE = Performance / Compute | Energy | Cost?",
      },
    ],
  },
  {
    number: "05",
    title: "Edge Intelligence",
    colorClass: "tech-green",
    questions: [
      {
        id: "RQ12",
        text: "What capability level can be achieved under strict compute, memory, energy, and bandwidth constraints?",
      },
      {
        id: "RQ13",
        text: "Can a general-purpose AI operate effectively without continuous cloud connectivity?",
      },
      {
        id: "RQ14",
        text: "What architectural changes are required when designing for edge hardware first?",
      },
    ],
  },
  {
    number: "06",
    title: "Multimodal Intelligence",
    colorClass: "tech-orange",
    questions: [
      {
        id: "RQ15",
        text: "Can multimodal information be unified through a shared persistent world state?",
      },
      {
        id: "RQ16",
        text: "How can vision, language, spatial reasoning, and sensor data be efficiently fused on edge devices?",
      },
    ],
  },
  {
    number: "07",
    title: "Embodied Intelligence",
    colorClass: "tech-accent",
    questions: [
      {
        id: "RQ17",
        text: "Can compute-efficient architecture support continuous perception, reasoning, planning, and action in unstructured environments?",
      },
      {
        id: "RQ18",
        text: "How should an AI represent objects, space, uncertainty, goals, and temporal changes for physical interaction?",
      },
      {
        id: "RQ19",
        text: "Can an edge AI learn from its environment without continuously uploading data to the cloud?",
      },
    ],
  },
];

const benchmarkRows = [
  { dimension: "Task Capability", measurement: "Accuracy / Success Rate" },
  { dimension: "Compute", measurement: "FLOPs / Operations" },
  { dimension: "Memory", measurement: "RAM / VRAM" },
  { dimension: "Latency", measurement: "Milliseconds" },
  { dimension: "Energy", measurement: "Joules / Task" },
  { dimension: "Power", measurement: "Watts" },
  { dimension: "Model Size", measurement: "Parameters / Storage" },
  { dimension: "Cost", measurement: "$ / Task" },
  { dimension: "Bandwidth", measurement: "MB / Task" },
  { dimension: "Robustness", measurement: "Failure Rate" },
  { dimension: "Adaptability", measurement: "Performance under env. change" },
];

const objectives = [
  {
    num: "01",
    text: "Investigate the computational inefficiencies of current AI architectures.",
  },
  {
    num: "02",
    text: "Identify alternative mechanisms for attention, memory, reasoning, and representation.",
  },
  {
    num: "03",
    text: "Develop experimental architectures optimized for edge deployment.",
  },
  {
    num: "04",
    text: "Develop methods for adaptive and event-driven computation.",
  },
  { num: "05", text: "Develop a persistent multimodal world representation." },
  {
    num: "06",
    text: "Benchmark capability against compute, memory, latency, energy, and monetary cost.",
  },
  {
    num: "07",
    text: "Deploy the resulting architecture on real robotic systems.",
  },
  {
    num: "08",
    text: "Release research findings, benchmarks, datasets, models, and tools openly where practical.",
  },
];

const contributorRoles = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Neural Architecture Design",
  "Computer Vision",
  "Robotics",
  "Edge AI",
  "Embedded Systems",
  "Computer Architecture",
  "Neuroscience",
  "Cognitive Science",
  "Information Theory",
  "Optimization",
  "Compilers",
  "AI Hardware",
  "Mathematics",
  "Systems Engineering",
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ResearchPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-tech-dark text-white overflow-x-hidden">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-tech-accent/10 blur-[120px] animate-pulse-slow pointer-events-none" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-tech-green/[0.08] blur-[100px] animate-pulse-slow pointer-events-none"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-tech-orange/[0.06] blur-[80px] animate-pulse-slow pointer-events-none"
          style={{ animationDelay: "4s" }}
        />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-tech-accent/40 pointer-events-none"
            style={{
              left: `${(i * 17 + 5) % 95}%`,
              top: `${(i * 13 + 8) % 90}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-tech-accent/20 bg-tech-accent/5 mb-8"
          >
            <FlaskConical size={14} className="text-tech-accent" />
            <span className="text-tech-accent text-xs font-bold tracking-[0.3em] uppercase">
              TVA Open Research Initiative
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-6"
          >
            Rethinking <span className="text-tech-accent">AI Compute</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-4"
          >
            Toward Efficient, Low-Cost and General-Purpose Intelligence at the
            Edge
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Investigating new neural architectures, memory systems, sparse
            computation, and adaptive inference for capable AI under severe
            compute, energy, memory, and connectivity constraints.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/join">
              <button
                aria-label="Contribute to the research"
                className="px-8 py-4 bg-tech-accent text-tech-dark font-bold rounded-full hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center gap-2 text-sm tracking-widest uppercase"
              >
                <GitBranch size={16} /> Contribute to Research
              </button>
            </Link>
            <a href="#research-questions">
              <button
                aria-label="Explore research questions"
                className="px-8 py-4 border border-white/10 glass text-white font-bold rounded-full hover:border-tech-accent/40 hover:text-tech-accent transition-all duration-300 flex items-center gap-2 text-sm tracking-widest uppercase"
              >
                Explore Questions <ChevronRight size={16} />
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-2 bg-tech-accent rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* CORE PROBLEM */}
      <section className="py-32 relative border-t border-white/5">
        <div className="absolute inset-0 bg-grid opacity-[0.025] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-tech-accent text-xs font-bold tracking-[0.4em] uppercase mb-6">
                The Core Research Problem
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 leading-tight">
                Modern AI is{" "}
                <span className="text-tech-accent">Brilliantly Expensive</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Large models require substantial GPU/accelerator compute,
                memory, energy, bandwidth, storage, cooling, and inference
                infrastructure. This creates a fundamental economic question:
              </p>
              <blockquote className="border-l-2 border-tech-accent pl-6 my-8">
                <p className="text-xl font-bold text-white italic leading-snug">
                  &ldquo;If the cost of computation required to produce
                  intelligence approaches or exceeds the economic value
                  generated by that intelligence, can AI achieve truly massive
                  adoption?&rdquo;
                </p>
              </blockquote>
              <p className="text-gray-400 text-lg leading-relaxed">
                Rather than simply making existing models smaller, we want to
                investigate whether the
                <strong className="text-white">
                  {" "}
                  computational architecture of AI itself
                </strong>{" "}
                can be redesigned.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "GPU / Accelerator Compute",
                  icon: Cpu,
                  classes:
                    "bg-tech-accent/5 border-tech-accent/20 text-tech-accent",
                },
                {
                  label: "Memory & Storage",
                  icon: Database,
                  classes:
                    "bg-tech-green/5 border-tech-green/20 text-tech-green",
                },
                {
                  label: "Energy & Cooling",
                  icon: Zap,
                  classes:
                    "bg-tech-orange/5 border-tech-orange/20 text-tech-orange",
                },
                {
                  label: "Bandwidth & Infrastructure",
                  icon: Network,
                  classes:
                    "bg-tech-accent/5 border-tech-accent/20 text-tech-accent",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className={`p-6 rounded-2xl border ${item.classes} flex flex-col gap-4 group hover:scale-[1.02] transition-transform duration-300`}
                >
                  <item.icon
                    size={28}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <p className="text-white font-bold text-sm leading-snug">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NORTH STAR */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-accent/5 via-transparent to-tech-green/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-tech-orange/30 bg-tech-orange/5 mb-8">
              <Target size={14} className="text-tech-orange" />
              <span className="text-tech-orange text-xs font-bold tracking-[0.3em] uppercase">
                The Central Research Question
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-8">
              Can we develop a fundamentally more{" "}
              <span className="text-tech-accent">compute-efficient</span>{" "}
              architecture for AI that achieves useful{" "}
              <span className="text-tech-green">
                perception, reasoning, memory, and decision-making
              </span>{" "}
              on{" "}
              <span className="text-tech-orange">low-cost edge hardware?</span>
            </h2>
            <p className="text-gray-500 text-sm font-bold tracking-[0.3em] uppercase">
              This is our North Star question.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RESEARCH QUESTIONS */}
      <section
        id="research-questions"
        className="py-32 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <p className="text-tech-accent text-xs font-bold tracking-[0.4em] uppercase mb-4">
              Research Directions
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Eight Interconnected
              <br />
              <span className="text-tech-accent">Research Areas</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {researchAreas.map((area, areaIdx) => (
              <motion.div
                key={area.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={areaIdx % 3}
                className="glass rounded-3xl p-8 flex flex-col gap-6 hover:border-white/15 transition-all duration-500 group"
              >
                <div className="flex items-start justify-between">
                  <span className="text-5xl font-extrabold tracking-tighter text-white/10 group-hover:text-white/20 transition-colors">
                    {area.number}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Microscope size={16} className="text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold tracking-tight">
                  {area.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {area.questions.map((q) => (
                    <li key={q.id} className="flex gap-3 items-start">
                      <span className="text-[10px] font-black tracking-widest text-tech-accent mt-0.5 shrink-0">
                        {q.id}
                      </span>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {q.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* The Bigger Question */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="glass rounded-3xl p-8 flex flex-col gap-6 border-tech-accent/20 bg-tech-accent/5 group hover:border-tech-accent/40 transition-all duration-500"
            >
              <div className="flex items-start justify-between">
                <span className="text-5xl font-extrabold tracking-tighter text-tech-accent/30 group-hover:text-tech-accent/50 transition-colors">
                  &#8734;
                </span>
                <div className="w-8 h-8 rounded-xl bg-tech-accent/10 border border-tech-accent/30 flex items-center justify-center">
                  <Lightbulb size={16} className="text-tech-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                The Bigger Question
              </h3>
              <p className="text-gray-300 text-base leading-relaxed italic">
                &ldquo;Do we need larger models to obtain more intelligence, or
                do we need better architectures that use computation more
                intelligently?&rdquo;
              </p>
              <p className="text-tech-accent text-xs font-bold tracking-[0.2em] uppercase">
                That&apos;s our strongest research question.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HYPOTHESIS */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-tech-accent/[0.03] blur-[200px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-tech-green text-xs font-bold tracking-[0.4em] uppercase mb-4">
              Primary Hypothesis
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
              Falsifiable &amp; Testable
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="glass rounded-3xl p-10 md:p-14 border border-tech-green/20 bg-tech-green/5"
          >
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center mb-8 font-medium">
              AI systems that combine{" "}
              <span className="text-tech-accent font-bold">
                persistent state
              </span>
              ,{" "}
              <span className="text-tech-green font-bold">
                selective computation
              </span>
              ,{" "}
              <span className="text-tech-orange font-bold">
                adaptive inference
              </span>
              ,{" "}
              <span className="text-white font-bold">
                efficient neural architectures
              </span>
              , and{" "}
              <span className="text-tech-accent font-bold">
                multimodal world representations
              </span>{" "}
              can achieve competitive real-world task performance while
              requiring{" "}
              <span className="text-tech-green font-bold">
                substantially less computation, memory, energy, and connectivity
              </span>{" "}
              than conventional continuously executing large-model
              architectures.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-tech-green/30 bg-tech-green/10">
                <FlaskConical size={16} className="text-tech-green" />
                <span className="text-tech-green text-xs font-bold tracking-[0.3em] uppercase">
                  We are going to test it.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-tech-accent text-xs font-bold tracking-[0.4em] uppercase mb-6">
                Research Objectives
              </p>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-8">
                Eight Clear
                <br />
                <span className="text-tech-accent">Objectives</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Each objective is concrete and measurable. We aren&apos;t
                chasing vague milestones &mdash; we&apos;re building science.
              </p>
            </motion.div>
            <div className="flex flex-col gap-4">
              {objectives.map((obj, i) => (
                <motion.div
                  key={obj.num}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.5}
                  className="flex gap-5 items-start p-6 glass rounded-2xl hover:border-tech-accent/20 transition-all duration-300 group"
                >
                  <span className="text-3xl font-extrabold text-tech-accent/30 group-hover:text-tech-accent/60 transition-colors shrink-0">
                    {obj.num}
                  </span>
                  <p className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors">
                    {obj.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-accent/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-tech-accent text-xs font-bold tracking-[0.4em] uppercase mb-4">
              Proposed Architecture
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              A New{" "}
              <span className="text-tech-accent">Intelligence Pipeline</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Old paradigm */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <p className="text-gray-500 text-xs font-bold tracking-[0.3em] uppercase mb-6">
                Current Paradigm
              </p>
              <div className="flex flex-col items-center gap-3">
                {["Input", "Tokens", "Transformer", "Output"].map((step, i) => (
                  <div key={step} className="flex flex-col items-center gap-2">
                    <div className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 font-bold text-sm w-48 text-center">
                      {step}
                    </div>
                    {i < 3 && (
                      <ChevronRight
                        size={16}
                        className="text-gray-600 rotate-90"
                      />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-xs text-center mt-6 font-bold tracking-widest uppercase">
                Stateless · Expensive · Repetitive
              </p>
            </motion.div>

            {/* New paradigm */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="glass rounded-3xl p-8 border-tech-accent/20 bg-tech-accent/5"
            >
              <p className="text-tech-accent text-xs font-bold tracking-[0.3em] uppercase mb-6">
                TVA Proposed Architecture
              </p>
              <div className="flex flex-col items-center gap-3">
                {[
                  { label: "Perception", Icon: Eye },
                  { label: "State", Icon: Database },
                  { label: "Memory", Icon: Brain },
                  { label: "Events", Icon: Radio },
                  { label: "Adaptive Reasoning", Icon: Cpu },
                  { label: "Planning", Icon: Layers },
                  { label: "Action", Icon: Rocket },
                ].map((step, i) => (
                  <div
                    key={step.label}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="px-6 py-3 rounded-xl bg-tech-accent/10 border border-tech-accent/20 text-tech-accent font-bold text-sm w-56 text-center flex items-center justify-center gap-2">
                      <step.Icon size={14} />
                      {step.label}
                    </div>
                    {i < 6 && (
                      <ChevronRight
                        size={16}
                        className="text-tech-accent/40 rotate-90"
                      />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-tech-accent text-xs text-center mt-6 font-bold tracking-widest uppercase">
                Persistent · Efficient · Adaptive
              </p>
            </motion.div>
          </div>

          {/* Experimental question */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-3xl p-10 md:p-14 text-center border-tech-orange/20 bg-tech-orange/5"
          >
            <p className="text-tech-orange text-xs font-bold tracking-[0.4em] uppercase mb-8">
              The Experimental Question
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {[
                {
                  label: "Can we match intelligence with",
                  highlight: "10× less compute?",
                  color: "text-tech-orange",
                },
                {
                  label: "Then achieve it with",
                  highlight: "100× less?",
                  color: "text-tech-accent",
                },
                {
                  label: "Ultimately: What is the",
                  highlight:
                    "minimum computational substrate for useful general-purpose AI?",
                  color: "text-tech-green",
                },
              ].map((q, i) => (
                <div key={i} className="flex-1 flex flex-col gap-2 px-6">
                  <p className="text-gray-400 text-sm">{q.label}</p>
                  <p
                    className={`text-xl md:text-2xl font-extrabold tracking-tight ${q.color}`}
                  >
                    {q.highlight}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EIEB BENCHMARK */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-tech-green/30 bg-tech-green/5 mb-6">
              <BarChart3 size={14} className="text-tech-green" />
              <span className="text-tech-green text-xs font-bold tracking-[0.3em] uppercase">
                Our Benchmark
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
              Edge Intelligence
              <br />
              <span className="text-tech-green">Efficiency Benchmark</span>
            </h2>
            <p className="text-2xl font-bold text-tech-green mb-4">EIEB</p>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A rigorous, multi-dimensional benchmark measuring AI capability
              where it really counts: the edge.
            </p>
          </motion.div>

          <div className="glass rounded-3xl overflow-hidden border border-white/5">
            <div className="grid grid-cols-2 px-8 py-4 border-b border-white/5 bg-white/[0.02]">
              <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">
                Dimension
              </span>
              <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">
                Measurement
              </span>
            </div>
            {benchmarkRows.map((row, i) => (
              <motion.div
                key={row.dimension}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.3}
                className={`grid grid-cols-2 px-8 py-5 border-b border-white/5 hover:bg-white/[0.02] transition-colors group ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}
              >
                <span className="text-white font-bold text-sm group-hover:text-tech-accent transition-colors">
                  {row.dimension}
                </span>
                <span className="text-gray-400 text-sm">{row.measurement}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid sm:grid-cols-4 gap-4"
          >
            {[
              "Large Transformer",
              "Efficient Transformer",
              "Alternative Architecture",
              "TVA Experimental Architecture",
            ].map((label, i) => (
              <div
                key={label}
                className={`px-5 py-4 rounded-2xl border text-center text-sm font-bold ${i === 3 ? "border-tech-accent/40 bg-tech-accent/10 text-tech-accent" : "border-white/5 glass text-gray-400"}`}
              >
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INTELLIGENCE METRICS */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-tech-accent/[0.03] via-transparent to-tech-green/[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-tech-accent text-xs font-bold tracking-[0.4em] uppercase mb-4">
              Intelligence Efficiency Metrics
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
              Intelligence Per Watt
              <br />
              <span className="text-tech-accent">&amp; Per Dollar</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                label: "Compute Efficiency",
                formula: "IE = Performance / Compute",
                sub: "Task Performance per FLOP",
                colorBorder: "border-tech-accent/20 bg-tech-accent/5",
                colorText: "text-tech-accent",
              },
              {
                label: "Energy Efficiency",
                formula: "IE_E = Performance / Energy",
                sub: "Useful Intelligence per Watt",
                colorBorder: "border-tech-green/20 bg-tech-green/5",
                colorText: "text-tech-green",
              },
              {
                label: "Economic Efficiency",
                formula: "IE_C = Performance / Cost",
                sub: "Useful Intelligence per Dollar",
                colorBorder: "border-tech-orange/20 bg-tech-orange/5",
                colorText: "text-tech-orange",
              },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className={`glass rounded-3xl p-8 border ${metric.colorBorder} text-center group hover:scale-[1.02] transition-all duration-300`}
              >
                <p
                  className={`${metric.colorText} text-xs font-bold tracking-[0.3em] uppercase mb-4`}
                >
                  {metric.label}
                </p>
                <p
                  className={`font-mono text-white text-lg md:text-xl font-bold mb-3`}
                >
                  {metric.formula}
                </p>
                <p className="text-gray-500 text-sm">{metric.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ULTIMATE VISION */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-tech-accent/[0.08] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-tech-accent text-xs font-bold tracking-[0.4em] uppercase mb-4">
              The Ultimate Vision
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
              Intelligence
              <br />
              <span className="text-tech-accent">Everywhere</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              TVR A1 is our embodied research platform. But the bigger vision
              extends far beyond any single robot.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-0">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="px-8 py-4 rounded-2xl bg-tech-accent/10 border border-tech-accent/30 text-tech-accent font-extrabold text-sm tracking-[0.3em] uppercase flex items-center gap-2"
            >
              <Atom size={16} /> Efficient Intelligence
            </motion.div>

            <div className="w-px h-10 bg-gradient-to-b from-tech-accent/30 to-transparent" />

            <div className="grid grid-cols-3 gap-6 w-full max-w-3xl">
              {[
                {
                  icon: CircuitBoard,
                  label: "Robots",
                  sub: "TVR A1",
                  borderClass: "border-tech-accent/20 bg-tech-accent/5",
                  textClass: "text-tech-accent",
                },
                {
                  icon: Globe2,
                  label: "Devices",
                  sub: "Edge AI",
                  borderClass: "border-tech-green/20 bg-tech-green/5",
                  textClass: "text-tech-green",
                },
                {
                  icon: Cpu,
                  label: "Machines",
                  sub: "Industrial AI",
                  borderClass: "border-tech-orange/20 bg-tech-orange/5",
                  textClass: "text-tech-orange",
                },
              ].map((branch, i) => (
                <motion.div
                  key={branch.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                  <div
                    className={`p-6 rounded-2xl glass border ${branch.borderClass} flex flex-col items-center gap-3 w-full`}
                  >
                    <branch.icon size={28} className={branch.textClass} />
                    <p className="text-white font-bold text-lg">
                      {branch.label}
                    </p>
                    <p
                      className={`${branch.textClass} text-xs font-bold tracking-widest uppercase`}
                    >
                      {branch.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="w-px h-10 bg-gradient-to-b from-transparent to-tech-accent/30" />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="px-8 py-4 rounded-2xl bg-tech-accent/10 border border-tech-accent/30 text-tech-accent font-extrabold text-sm tracking-[0.3em] uppercase flex items-center gap-2"
            >
              <Globe2 size={16} /> Intelligence Everywhere
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 text-center max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-200 leading-snug">
              Not merely for wealthy companies with enormous GPU clusters, but
              for{" "}
              <span className="text-tech-accent">
                robots, farms, factories, vehicles, devices, schools,
              </span>{" "}
              and{" "}
              <span className="text-tech-green">communities everywhere.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* RESEARCH PHILOSOPHY */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-accent/5 via-transparent to-tech-orange/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-tech-orange text-xs font-bold tracking-[0.4em] uppercase mb-8">
              Research Philosophy
            </p>
            <div className="glass rounded-3xl p-10 md:p-16 border border-white/5">
              <p className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-white">
                We are not trying to make AI bigger.
              </p>
              <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-tech-accent">
                We are trying to make intelligence cheaper.
              </p>
              <div className="w-16 h-px bg-white/10 mx-auto my-10" />
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                Today&apos;s AI paradigm has demonstrated what massive
                computation can accomplish. Our question is what can be
                accomplished when computation is scarce. We believe the next
                major leap in AI may not come solely from larger models, but
                from fundamentally more efficient ways of{" "}
                <strong className="text-white">
                  representing, processing, remembering, and reasoning
                </strong>{" "}
                about information.
              </p>
              <div className="mt-10">
                <p className="text-xl font-bold text-white">
                  TVA Robotics Research Identity:
                </p>
                <p className="text-tech-accent text-2xl md:text-3xl font-extrabold mt-2 tracking-tight italic">
                  &ldquo;We are researching the economics and architecture of
                  efficient machine intelligence.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTRIBUTORS */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-tech-accent text-xs font-bold tracking-[0.4em] uppercase mb-6">
                Who We Want to Join
              </p>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
                Open to
                <br />
                <span className="text-tech-accent">All Minds</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Students and independent researchers can contribute through
                literature reviews, experiments, benchmarking, simulations,
                datasets, model optimization, theoretical work, hardware
                experiments, documentation, and more.
              </p>
              <div className="p-6 glass rounded-2xl border border-tech-green/20 bg-tech-green/5">
                <p className="text-tech-green font-bold mb-2 flex items-center gap-2">
                  <Users size={18} /> You do not need to be an expert.
                </p>
                <p className="text-gray-400 text-sm">
                  Curiosity, rigour, and commitment to open science are the only
                  prerequisites.
                </p>
              </div>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              {contributorRoles.map((role, i) => (
                <motion.span
                  key={role}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.2}
                  className="px-4 py-2 glass rounded-full border border-white/5 text-gray-300 text-sm font-medium hover:border-tech-accent/40 hover:text-tech-accent transition-all duration-300 cursor-default"
                >
                  {role}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-accent/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-tech-accent/[0.08] blur-[160px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-tech-accent/30 bg-tech-accent/5 mb-8">
              <Rocket size={14} className="text-tech-accent" />
              <span className="text-tech-accent text-xs font-bold tracking-[0.3em] uppercase">
                Join the Initiative
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-tight">
              Help Us Make
              <br />
              <span className="text-tech-accent">Intelligence Cheap.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed">
              TechVerge Africa&apos;s open research initiative is building the
              science of efficient AI. Whether you&apos;re a student,
              researcher, engineer, or visionary &mdash; your contribution
              matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/join">
                <button
                  aria-label="Join the TVA Research Initiative"
                  className="px-10 py-5 bg-tech-accent text-tech-dark font-extrabold rounded-full hover:brightness-110 active:scale-95 transition-all duration-300 text-base flex items-center gap-3"
                >
                  <Users size={18} /> Join the Initiative
                </button>
              </Link>
              <Link href="/join">
                <button
                  aria-label="Contact the research team"
                  className="px-10 py-5 border border-white/15 glass text-white font-bold rounded-full hover:border-tech-accent/40 hover:text-tech-accent transition-all duration-300 text-base flex items-center gap-3"
                >
                  <BookOpen size={18} /> Read the Full Proposal{" "}
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
