import React from 'react';
import SectionContainer from './SectionContainer';
import { Terminal, Cpu, Layout } from 'lucide-react';

const About: React.FC = () => {
  return (
    <SectionContainer id="about" title="About Me" subtitle="A brief introduction to my professional journey and current focus.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="order-2 lg:order-1 space-y-6">
          <p className="text-lg text-slate-400 leading-relaxed">
            I am a <strong className="text-white">Senior Software Engineer</strong> with <strong className="text-white">15+ years</strong> of experience building modern, scalable, and intuitive web applications. My primary expertise is in frontend engineering, with deep experience in <strong className="text-white">React, Vue, and Angular</strong>—focusing on maintainable architecture, reusable components, and high-performance UI solutions.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Recently, I have been contributing to cloud-migration initiatives and enhancing my skills in <strong className="text-white">AWS</strong>, serverless architectures, and CI/CD pipelines.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            I’m also investing in the future of <strong className="text-white">applied AI</strong>, learning Python, LangChain, agentic frameworks, RAG patterns, and experimenting with AWS Bedrock and OpenAI APIs. These explorations help me blend traditional engineering with emerging intelligent workflows.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            My background includes experience across enterprise environments, collaborating with cross-functional teams, and delivering solutions that are reliable, maintainable, and aligned with business goals.
          </p>
        </div>

        <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 border border-blue-900/50">
              <Layout className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Modern UI</h3>
            <p className="text-slate-400 text-sm">Architecting scalable frontends with React, Vue, and Angular.</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 border border-purple-900/50">
              <Cpu className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-bold text-white mb-2">AI Agents</h3>
            <p className="text-slate-400 text-sm">Building RAG pipelines and agentic POCs using Python, LangChain, CrewAI, OpenAI, and AWS Bedrock.</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800 hover:border-slate-700 transition-all sm:col-span-2">
            <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 border border-emerald-900/50">
              <Terminal className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-bold text-white mb-2">Enterprise Engineering</h3>
            <p className="text-slate-400 text-sm">Delivering end-to-end solutions across frontend, backend, DevOps, and cloud platforms.</p>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
};

export default About;