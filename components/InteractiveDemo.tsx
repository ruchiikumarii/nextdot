import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, AlertCircle, Activity, Play, Pause } from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  // Simulation steps
  useEffect(() => {
    if (!isPlaying) return;

    const sequence = [
      () => setLogs(prev => [...prev, "Initializing NextComply Agent..."]),
      () => setLogs(prev => [...prev, "Ingesting patient data packet #8921..."]),
      () => setLogs(prev => [...prev, "Analyzing against HIPAA Protocol V4..."]),
      () => setLogs(prev => [...prev, "Checking drug interaction database..."]),
      () => setLogs(prev => [...prev, "Flagging potential contraindication (Risk: Low)..."]),
      () => setLogs(prev => [...prev, "Automated approval routed to Dr. Silva..."]),
      () => {
        setLogs(prev => [...prev, "Process Complete. Audit Log Generated."]);
        setIsPlaying(false);
        setStep(3); // Finished state
      }
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < sequence.length) {
        sequence[current]();
        setStep(prev => prev + 1);
        current++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleStart = () => {
    setLogs([]);
    setStep(0);
    setIsPlaying(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
      {/* Header / Tabs */}
      <div className="flex border-b border-gray-100">
        <button className="px-6 py-4 text-sm font-medium text-gray-900 border-b-2 border-black">
          Compliance Checker
        </button>
        <button className="px-6 py-4 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
          Voice Agent Workflow
        </button>
        <button className="px-6 py-4 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
          Avatar Gen
        </button>
      </div>

      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
        {/* Input Side */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Shield size={16} className="text-gray-700" />
            </div>
            <span className="font-semibold text-gray-900">NextComply AI</span>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-4 min-h-[160px] text-gray-600 text-sm leading-relaxed border border-transparent focus-within:border-gray-300 focus-within:bg-white transition-all">
            <p className="mb-2 text-gray-400 text-xs uppercase tracking-wider font-semibold">Input Context</p>
            <p>
              Verify prescription request for Patient #8921: 
              Prescription: Amoxicillin 500mg, 3x daily. 
              History: Documented penicillin allergy (Mild, 2018).
              Target: Approval Queue.
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
             <div className="text-xs text-gray-400 font-medium">
               Model: Domain-Healthcare-v2.5
             </div>
             <button 
                onClick={handleStart}
                disabled={isPlaying}
                className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-medium text-sm hover:scale-105 transition-transform active:scale-95 disabled:opacity-50 disabled:scale-100"
             >
                {isPlaying ? <Activity size={16} className="animate-spin" /> : <Play size={16} fill="currentColor" />}
                {isPlaying ? 'Running...' : 'Run Audit'}
             </button>
          </div>
        </div>

        {/* Output Side */}
        <div className="flex-1 bg-gray-50 rounded-2xl p-5 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-4 right-4">
             {step === 0 && !isPlaying && <div className="text-xs font-semibold text-gray-400 bg-white px-2 py-1 rounded-md border shadow-sm">Ready</div>}
             {isPlaying && <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md border border-blue-100 animate-pulse">Processing</div>}
             {!isPlaying && step > 0 && <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md border border-green-100 flex items-center gap-1"><CheckCircle size={12}/> Validated</div>}
          </div>

          <p className="mb-4 text-gray-400 text-xs uppercase tracking-wider font-semibold">System Output</p>
          
          <div className="space-y-2 h-[140px] overflow-y-auto custom-scrollbar">
            {logs.length === 0 ? (
               <div className="h-full flex items-center justify-center text-gray-400 text-sm italic">
                  Run audit to generate report...
               </div>
            ) : (
              logs.map((log, i) => (
                <div key={i} className="flex items-start gap-2 text-sm animate-in fade-in slide-in-from-left-2 duration-300">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  <span className={i === logs.length - 1 ? 'text-gray-900 font-medium' : 'text-gray-500'}>
                    {log}
                  </span>
                </div>
              ))
            )}
          </div>
          
          {/* Result Card overlay if finished */}
          {!isPlaying && step > 2 && (
             <div className="mt-4 bg-white border border-yellow-200 rounded-xl p-3 flex items-start gap-3 shadow-sm animate-in zoom-in-95">
                <AlertCircle className="text-yellow-500 shrink-0" size={20} />
                <div>
                   <h5 className="text-sm font-semibold text-gray-900">Manual Review Required</h5>
                   <p className="text-xs text-gray-500 mt-1">Rule #402 Triggered: Potential allergen conflict detected. Human-in-loop task created.</p>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};