import React from 'react';
import { Mic, Phone, Clock } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const VoiceAgent: React.FC = () => {
  return (
    <div className="bg-white pt-24">
      <section className="py-20 px-4 max-w-7xl mx-auto">
         <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Voice Agents for Clinics</h1>
         <p className="text-xl text-gray-600 max-w-3xl mb-10">
           Operational AI for appointment handling, pre-consultation workflows, and structured data capture. 
           Not just a phone bot—a clinical intake agent.
         </p>
         <Button size="lg">Listen to Samples</Button>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
         <div className="bg-gray-50 p-8 rounded-3xl">
            <Clock className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">24/7 Intake</h3>
            <p className="text-gray-500">Never miss a patient call. Handle booking, rescheduling, and triage around the clock.</p>
         </div>
         <div className="bg-gray-50 p-8 rounded-3xl">
            <Mic className="text-purple-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Natural Conversation</h3>
            <p className="text-gray-500">Human-like latency (&lt;500ms) and interruption handling. No robotic "Press 1".</p>
         </div>
         <div className="bg-gray-50 p-8 rounded-3xl">
            <Phone className="text-green-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">EHR Integration</h3>
            <p className="text-gray-500">Directly writes structured appointments and notes into your system of record.</p>
         </div>
      </section>
    </div>
  );
};