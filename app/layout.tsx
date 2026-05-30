import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pratik Chavan | AI/ML Engineer & Conversational AI Specialist",
  description:
    "Software Engineer specializing in LLM-powered chatbots, agentic AI workflows, RAG-based solutions, and production-grade Conversational AI systems.",
  keywords: [
    "AI/ML Engineer",
    "Conversational AI",
    "LangChain",
    "LangGraph",
    "RAG",
    "FastAPI",
    "Pratik Chavan",
  ],
  openGraph: {
    title: "Pratik Chavan | AI/ML Engineer",
    description:
      "Software Engineer specializing in LLM-powered chatbots, agentic AI workflows, and RAG-based solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
