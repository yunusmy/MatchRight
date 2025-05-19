"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Get Hired Faster with{" "}
            <span className="text-blue-600">Smart Resume Matching</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            MatchRight helps you optimize your resume for job applications using
            AI-powered suggestions. Increase your chances of getting interviews
            and landing your dream job.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="/get-started"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              href="/sign-in"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="md:w-1/2">
          <Image
            src="/OIP.jpg"
            alt="Resume Matching Illustration"
            width={600}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
