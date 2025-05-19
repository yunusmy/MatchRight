"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gray-50 py-20" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About MatchRight
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our mission is to help job seekers optimize their resumes and get
            hired faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 mb-4">
              MatchRight was founded with a simple idea: use AI to help job
              seekers tailor their resumes to specific job descriptions. We
              understand the frustration of applying to numerous positions
              without getting callbacks — often due to ineffective resume
              screening.
            </p>
            <p className="text-gray-600 mb-4">
              Many qualified candidates are overlooked because their resumes
              don’t contain the right keywords or highlight the most relevant
              experiences. MatchRight solves this by analyzing job descriptions,
              comparing them to your resume, and offering actionable suggestions
              to improve your match score.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              How We Help
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Provide match scores to show how well your resume aligns with
                job descriptions
              </li>
              <li>Offer AI-powered suggestions to improve your resume</li>
              <li>Identify missing keywords and skills employers want</li>
              <li>Save resumes and job descriptions for easy tracking</li>
              <li>Track your progress over time</li>
            </ul>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center">
            <Image
              src="/OIF.jpg"
              alt="Team working together"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Technology
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            MatchRight uses advanced AI to analyze resumes and job descriptions.
            Our platform is built with <strong>Next.js</strong>, uses{" "}
            <strong>Clerk</strong> for authentication, and integrates{" "}
            <strong>Google's Gemini AI</strong> for intelligent matching and
            suggestions. We're continuously refining our algorithms to ensure
            the most accurate and useful recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}
