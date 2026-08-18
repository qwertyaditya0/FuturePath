import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  MessageCircle,
  GraduationCap,
  IndianRupee,
  Search,
  UserRound,
} from "lucide-react";

const quickQuestions = [
  {
    label: "College Admission",
    icon: GraduationCap,
    answer:
      "Sure! I can help you explore college admission options. Tell me your course, percentile/marks and preferred location.",
  },
  {
    label: "Fees & Eligibility",
    icon: IndianRupee,
    answer:
      "I can help you understand fees and basic eligibility. Please tell me the course and college you are interested in.",
  },
  {
    label: "College Predictor",
    icon: Search,
    answer:
      "Our College Predictor can help shortlist Dream, Match and Safe colleges based on your academic profile.",
  },
  {
    label: "Talk to Counselor",
    icon: UserRound,
    answer:
      "Absolutely! You can book free counseling with our admission experts using the counseling section.",
  },
];

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! 👋 I'm Future Path AI. How can I help you with your admission journey?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: trimmedInput,
      },
      {
        type: "bot",
        text: "Thanks for your question! Our admission experts can provide personalized guidance. You can also book a free counseling session with us.",
      },
    ]);

    setInput("");
  };

  const handleQuickQuestion = (question) => {
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: question.label,
      },
      {
        type: "bot",
        text: question.answer,
      },
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 z-50 flex h-[520px] w-[calc(100%-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-blue-950 px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-blue-950">
                  <Bot size={22} />
                </div>

                <div>
                  <h3 className="text-sm font-extrabold">
                    Future Path AI
                  </h3>

                  <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-blue-200">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    Online
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
                className="rounded-lg p-2 transition hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.type === "user"
                        ? "rounded-br-md bg-blue-950 text-white"
                        : "rounded-bl-md bg-white text-slate-700 shadow-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="space-y-2 pt-2">
                  {quickQuestions.map((question) => {
                    const Icon = question.icon;

                    return (
                      <button
                        key={question.label}
                        onClick={() =>
                          handleQuickQuestion(question)
                        }
                        className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 text-left text-xs font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                      >
                        <Icon
                          size={16}
                          className="text-blue-700"
                        />

                        {question.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-slate-200 bg-white p-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask your question..."
                  className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none"
                />

                <button
                  onClick={sendMessage}
                  aria-label="Send message"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white transition hover:bg-red-700"
                >
                  <Send size={16} />
                </button>
              </div>

              <p className="mt-2 text-center text-[10px] text-slate-400">
                AI guidance • Connect with an expert for personalized advice
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
          onClick={() => setIsOpen(true)}
          aria-label="Open AI chatbot"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-950 text-yellow-400 shadow-xl shadow-blue-950/30 transition hover:scale-110 sm:bottom-6 sm:right-24"
        >
          <MessageCircle size={27} />
        </motion.button>
      )}
    </>
  );
}

export default Chatbot;