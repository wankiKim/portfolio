"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GitHubRepo } from "@/types";

interface ProjectCardProps {
  repo: GitHubRepo;
  index: number;
}

const languageColors: Record<string, string> = {
  Java: "#b07219",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Dart: "#00B4AB",
  Vue: "#41b883",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  C: "#555555",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
};

export default function ProjectCard({ repo, index }: ProjectCardProps) {
  const isPrivate = repo.visibility === "private";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex flex-col rounded-2xl border border-card-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
          {repo.name}
        </h3>
        {!isPrivate && (
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
        {repo.description || "설명 없음"}
      </p>

      <div className="flex items-center gap-4 text-xs text-muted">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-full"
              style={{
                backgroundColor:
                  languageColors[repo.language] || "#8b949e",
              }}
            />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className="flex items-center gap-1">
            <Star size={12} />
            {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span className="flex items-center gap-1">
            <GitFork size={12} />
            {repo.forks_count}
          </span>
        )}
        {isPrivate && (
          <span className="ml-auto rounded-full bg-card-border px-2 py-0.5 text-xs text-muted">
            Private
          </span>
        )}
      </div>
    </motion.div>
  );
}
