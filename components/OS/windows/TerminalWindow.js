import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TerminalWindow = () => {
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const terminalRef = useRef(null);

  // Simulated AI "Knowledge Base"
  const aiKnowledge = {
    greetings: ['hello', 'hi', 'hey', 'start', 'begin'],
    identity: ['who are you', 'what is this', 'identify', 'name'],
    capabilities: ['help', 'what can you do', 'commands', 'menu'],
    ventures: ['ventures', 'startups', 'companies', 'portfolio'],
    team: ['team', 'founders', 'who runs this', 'staff', 'people'],
    contact: ['contact', 'email', 'reach out', 'message', 'talk'],
    about: ['about', 'techverge', 'company', 'mission', 'vision'],
  };

  const getAIResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    if (aiKnowledge.greetings.some(word => lowerInput.includes(word))) {
      return [
        "Hello! I am Core, the AI interface for TechVerge Africa.",
        "I'm here to guide you through our infrastructure and ecosystem.",
        "How can I assist you today?"
      ];
    }
    
    if (aiKnowledge.identity.some(word => lowerInput.includes(word))) {
      return [
        "I am Core, a specialized AI constructs designed to facilitate interaction with the TechVerge Africa OS.",
        "I operate within this terminal to provide information and execute system commands."
      ];
    }

    if (aiKnowledge.capabilities.some(word => lowerInput.includes(word))) {
      return [
        "I can categorize and retrieve information on the following nodes:",
        "",
        "  • /about      - Mission parameters & vision",
        "  • /ventures   - Active portfolio links",
        "  • /team       - Personnel manifest",
        "  • /contact    - Communication channels",
        "  • /clear      - Purge current buffer",
        "",
        "Simply type a command or ask me a question naturally."
      ];
    }

    if (aiKnowledge.ventures.some(word => lowerInput.includes(word))) {
       return [
        "Accessing Venture Database...",
        "--------------------------------",
        "  • AgriNova (AgriTech)",
        "  • PayBloc (FinTech)",
        "  • RoboTech Africa (Robotics)",
        "  • EduTech Labs (Education)",
        "  • Web3 Ventures (Blockchain)",
        "  • HealthTech Solutions (Healthcare)",
        "--------------------------------",
        "Would you like deeper analysis on any specific sector?"
      ];
    }

    if (aiKnowledge.team.some(word => lowerInput.includes(word))) {
      return [
        "Retrieving Personnel Data...",
        "  • Mustapha - Chief Executive Officer",
        "  • Ishaq - Chief Technology Officer",
        "  • Sulley - Head of Operations",
        "  • Latif - Head of Ventures",
        "",
        "A formidable unit dedicated to technological advancement."
      ];
    }

    if (aiKnowledge.contact.some(word => lowerInput.includes(word))) {
       return [
        "Communication Protocols:",
        "  • Email: hello@techverge.africa",
        "  • Location: Accra, Ghana",
        "  • Status: Open for collaboration",
        "",
        "Shall I initiate a contact form protocol? (Type 'yes' to simulating opening Contact window - *feature pending*)"
      ];
    }

    if (aiKnowledge.about.some(word => lowerInput.includes(word))) {
      return [
        "TechVerge Africa: The Infrastructure for the Future.",
        "We do not just invest; we build. We are a holding company backing and constructing bold, tech-driven ventures.",
        "Our mission is to solve critical problems across Africa using deep local insight and high-level technology."
      ];
    }
    
    if (lowerInput === 'clear' || lowerInput === '/clear') {
       return ['CLEAR_COMMAND'];
    }

    // Default Fallback
    return [
      `Processing: "${userInput}"...`,
      "Input not recognized in my primary database.",
      "Try asking about '/ventures', '/team', or type '/help' for a command list.",
      "I am learning every day."
    ];
  };

  useEffect(() => {
    // Initial Boot Sequence
    const bootSequence = [
      { text: 'Initializing Core AI v1.0.4...', delay: 500 },
      { text: 'Loading Knowledge Base... [OK]', delay: 1000 },
      { text: 'Establishing Secure Connection... [OK]', delay: 1800 },
      { text: 'User Authenticated: Guest', delay: 2500 },
      { text: '----------------------------------------', delay: 2600 },
      { text: 'Welcome to TechVerge Africa.', delay: 3200 },
      { text: 'I am Core. I am here to assist you navigate our ecosystem.', delay: 4000 },
      { text: 'What would you like to know?', delay: 4800 },
    ];
    
    let currentStep = 0;

    const runSequence = () => {
        if (currentStep < bootSequence.length) {
            const step = bootSequence[currentStep];
            setTimeout(() => {
                setOutput((prev) => [...prev, { type: 'system', text: step.text }]);
                currentStep++;
                runSequence();
            }, 800); // Simple fixed delay between specific lines for effect, override by step.delay if complex
        } else {
            setIsTyping(false);
        }
    };

    // More precise timing control
    const timeouts = [];
    let cumulativeTime = 0;

    bootSequence.forEach((step, index) => {
        cumulativeTime = step.delay;
        const timeout = setTimeout(() => {
             setOutput((prev) => [...prev, { type: 'system', text: step.text }]);
             if (index === bootSequence.length - 1) setIsTyping(false);
        }, cumulativeTime);
        timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userInput = input.trim();
    setOutput((prev) => [...prev, { type: 'user', text: `> ${userInput}` }]);
    setInput('');
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
        const responses = getAIResponse(userInput);
        
        if (responses[0] === 'CLEAR_COMMAND') {
            setOutput([]);
            setIsTyping(false);
            return;
        }

        responses.forEach((line, idx) => {
            setTimeout(() => {
                 setOutput((prev) => [...prev, { type: 'ai', text: line }]);
                 if (idx === responses.length - 1) setIsTyping(false);
            }, idx * 300); // Stagger lines slightly
        });
    }, 600);
  };

  return (
    <div className="p-4 h-full bg-black/90 text-green-500 font-mono text-sm flex flex-col relative overflow-hidden">
      {/* Scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />
      
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto space-y-2 mb-4 scrollbar-hide pb-2"
      >
        {output.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={
              line.type === 'error'
                ? 'text-red-500'
                : line.type === 'user'
                ? 'text-cyan-400 font-bold mt-4 mb-2'
                : 'text-green-500 loading-tight' // System/AI text
            }
          >
            {line.type === 'ai' && <span className="text-green-700 mr-2">➜</span>}
            {line.text}
          </motion.div>
        ))}
        {isTyping && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-500/50 text-xs animate-pulse"
          >
            Core is processing...
          </motion.div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center space-x-2 border-t border-green-500/30 pt-3 relative z-10">
        <span className="text-cyan-400 font-bold">visitor@techverge:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-green-400 outline-none placeholder-green-800"
          placeholder="Type your command..."
          autoFocus
          disabled={isTyping}
        />
      </form>
    </div>
  );
};

export default TerminalWindow;
