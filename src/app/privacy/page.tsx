import React from 'react';
import { legalContent } from '@/lib/data';

export default function PrivacyPage() {
  const { title, lastUpdated, intro, sections } = legalContent.privacy;

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">{title}</h1>
        <p className="text-gray-400 mb-12">Last Updated: {lastUpdated}</p>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          <p>{intro}</p>

          {sections.map((section, index) => (
            <div key={index}>
               <h2 className="text-white text-2xl font-bold mt-12 mb-6">{section.title}</h2>
               {section.content.map((paragraph, pIndex) => (
                 <ul key={pIndex}>
                    {/* Heuristic: If paragraph starts with a list item indicator, render as list, else p */}
                    {/* For simplicity in this quick refactor, we rendered standard p with HTML support which covers list tags if embedded or just text paragraphs */}
                    <div dangerouslySetInnerHTML={{ __html: paragraph }} className={paragraph.startsWith('<li>') ? "list-item ml-6" : "mb-4"} />
                 </ul>
               ))}
            </div>
          ))}
          
          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="text-white font-bold mb-2">Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="text-[--brand-green] mt-2">contact@deltaflowlab.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
