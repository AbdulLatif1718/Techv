import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TerminalWindow = () => {
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const terminalRef = useRef(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  help     - Show this help message',
      '  about    - About TechVerge Africa',
      '  ventures - List our ventures',
      '  team     - Meet our team',
      '  clear    - Clear terminal',
      '  exit     - Close terminal',
    ],
    about: () => [
      'TechVerge Africa is a holding company backing bold, tech-driven ventures',
      'solving real problems across Africa.',
      '',
      'We build companies that create real change using technology, creativity,',
      'and deep local insight.',
    ],
    ventures: () => [
      'Our Ventures:',
      '  • AgriNova - AgriTech solutions',
      '  • PayBloc - FinTech platform',
      '  • RoboTech Africa - Robotics & Automation',
      '  • EduTech Labs - Education technology',
      '  • Web3 Ventures - Blockchain solutions',
      '  • HealthTech Solutions - Healthcare innovation',
    ],
    team: () => [
      'Our Team:',
      '  • Mustapha - CEO & Co-Founder',
      '  • Ishaq - CTO & Co-Founder',
      '  • Sulley - Head of Operations',
      '  • Latif - Head of Ventures',
    ],
    clear: () => {
      setOutput([]);
      return [];
    },
    exit: () => {
      return ['Closing terminal...'];
    },
  };

  useEffect(() => {
    // Auto-type welcome message
    const welcomeMessage = [
      'Welcome to TechVerge Africa OS',
      'Type "help" for available commands',
      '',
    ];
    
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < welcomeMessage.length) {
        setOutput((prev) => [...prev, { type: 'system', text: welcomeMessage[currentIndex] }]);
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 500);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const command = input.trim().toLowerCase();
    setOutput((prev) => [...prev, { type: 'user', text: `$ ${input}` }]);

    if (commands[command]) {
      const result = commands[command]();
      if (result && result.length > 0) {
        result.forEach((line) => {
          setOutput((prev) => [...prev, { type: 'system', text: line }]);
        });
      }
    } else {
      setOutput((prev) => [
        ...prev,
        { type: 'error', text: `Command not found: ${command}. Type "help" for available commands.` },
      ]);
    }

    setInput('');
  };

  return (
    <div className="p-4 h-full bg-black text-green-400 font-mono text-sm">
      <div
        ref={terminalRef}
        className="h-full overflow-y-auto space-y-1 mb-4"
        style={{ maxHeight: 'calc(100vh - 200px)' }}
      >
        {output.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={
              line.type === 'error'
                ? 'text-red-400'
                : line.type === 'user'
                ? 'text-blue-400'
                : 'text-green-400'
            }
          >
            {line.text}
          </motion.div>
        ))}
        {isTyping && (
          <motion.span
            className="inline-block w-2 h-4 bg-green-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <span className="text-green-400">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-green-400 outline-none"
          autoFocus
          disabled={isTyping}
        />
        {isTyping && (
          <motion.span
            className="inline-block w-2 h-4 bg-green-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </form>
    </div>
  );
};

export default TerminalWindow;

