import React, { useState } from 'react';
import { Code, Check, Copy, X, Sparkles, ExternalLink } from 'lucide-react';

interface SEOInspectorModalProps {
  currentPath: string;
}

export const SEOInspectorModal: React.FC<SEOInspectorModalProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Retrieve current script text
  const getScriptText = () => {
    const el = document.getElementById('satnam-json-ld');
    return el ? el.textContent || '' : '// No JSON-LD element found';
  };

  const jsonText = getScriptText();

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Small floating inspector trigger in footer */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-3 left-3 z-30 px-2.5 py-1 rounded-full bg-stone-900/85 hover:bg-stone-900 text-stone-200 border border-stone-700 text-[11px] font-mono flex items-center shadow-lg backdrop-blur transition-all"
        title="View live JSON-LD & AEO Structured Data injected in <head>"
      >
        <Code className="w-3 h-3 mr-1.5 text-amber-400" />
        <span className="hidden sm:inline">JSON-LD</span> Schema Live
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="px-5 py-3.5 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold text-white font-mono">
                  Active JSON-LD & AEO Schema ({currentPath})
                </h4>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-xs text-stone-200 flex items-center font-mono"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1 text-emerald-400" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 mr-1 text-amber-400" /> Copy JSON-LD
                    </>
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded text-stone-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 bg-stone-950 text-[12px] font-mono text-stone-400 border-b border-stone-800">
              <p>
                ⚡ <span className="text-stone-200">Googlebot & AI Engine Optimization (AEO / GEO)</span>: Injected into the document <code className="text-amber-400">&lt;head&gt;</code> for voice search, Perplexity, Gemini, ChatGPT, and Google rich snippets.
              </p>
            </div>

            <div className="p-4 overflow-y-auto font-mono text-xs text-emerald-400 bg-stone-950/90 leading-relaxed">
              <pre>{jsonText}</pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
