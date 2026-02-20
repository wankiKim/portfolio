"use client";

import { motion } from "framer-motion";
import { Bot, Zap, Timer, Shield, ArrowRight, Lock, Github } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  workflowStats,
  workflowCases,
  workflowProcess,
} from "@/data/ai-workflow";

export default function AIWorkflowSection() {
  return (
    <SectionWrapper id="ai-workflow">
      <div className="mb-12">
        <div className="mb-2 flex items-center gap-3">
          <h2 className="text-3xl font-bold text-foreground">
            AI-Powered Development
          </h2>
          <span className="flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <Bot size={14} />
            Claude Code
          </span>
        </div>
        <p className="max-w-2xl text-muted">
          18년의 엔터프라이즈 경험 + AI 페어 프로그래밍. 혼자서도 팀 규모의 시스템을
          설계하고, 팀보다 빠르게 배포합니다.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {workflowStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl border border-card-border bg-card p-5 text-center"
          >
            <div className="mb-1 text-3xl font-bold text-accent">
              {stat.value}
            </div>
            <div className="mb-2 text-sm font-medium text-foreground">
              {stat.label}
            </div>
            <p className="text-xs leading-relaxed text-muted">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Process */}
      <div className="mb-16">
        <h3 className="mb-6 text-lg font-semibold text-foreground">
          워크플로우
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {workflowProcess.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative rounded-2xl border border-card-border bg-card p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-bold text-accent">
                  {p.step}
                </span>
                <h4 className="text-sm font-semibold text-foreground">
                  {p.title}
                </h4>
              </div>
              <p className="text-xs leading-relaxed text-muted">
                {p.description}
              </p>
              {i < workflowProcess.length - 1 && (
                <ArrowRight
                  size={16}
                  className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-accent/40 md:block"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cases */}
      <div>
        <h3 className="mb-6 text-lg font-semibold text-foreground">
          실전 사례
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {workflowCases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl border border-card-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-3 flex items-center justify-between">
                <h4 className="text-sm font-semibold text-foreground">
                  {c.title}
                </h4>
                <div className="flex items-center gap-2">
                  {c.solo && (
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                      <Zap size={10} />
                      Solo
                    </span>
                  )}
                  <span className="flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                    <Timer size={10} />
                    {c.duration}
                  </span>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2 text-xs text-muted">
                <Shield size={12} className="text-accent/60" />
                {c.scale}
              </div>

              <p className="mb-4 text-xs leading-relaxed text-muted">
                {c.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {c.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-background px-2 py-0.5 text-[10px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center"
      >
        <p className="mb-1 text-sm font-medium text-foreground">
          &quot;10명이 3개월 걸릴 일을, 1명이 3주 만에 끝낸다&quot;
        </p>
        <p className="text-xs text-muted">
          18년 아키텍처 경험 + Claude Code = 엔터프라이즈급 1인 개발의 새로운 기준
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
