"use client";

import { Briefcase, FileText, Sparkles } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          MatchRight uses AI to analyze your resume against job descriptions and
          provides actionable suggestions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-2xl border hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <FileText className="text-blue-600 w-8 h-8" />
              <h3 className="text-xl font-semibold text-gray-800">
                Input Your Resume
              </h3>
            </div>
            <p className="text-gray-600">
              Paste your resume into our platform to get started.
            </p>
          </div>

          <div className="p-6 rounded-2xl border hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="text-blue-600 w-8 h-8" />
              <h3 className="text-xl font-semibold text-gray-800">
                Add Job Description
              </h3>
            </div>
            <p className="text-gray-600">
              Enter the job description you&apos;re applying for.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl border hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="text-blue-600 w-8 h-8" />
              <h3 className="text-xl font-semibold text-gray-800">
                Get AI Suggestions
              </h3>
            </div>
            <p className="text-gray-600">
              Receive a match score and tailored suggestions to improve your
              resume.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
