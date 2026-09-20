# Awesome Jev [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Tools, SDKs, integrations and examples for [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev), the System One model from TypeSafe AI.

Jev is not a chatbot and not a coding model. You send it application state plus a list of
typed questions, and it returns one typed answer per question: a yes/no probability, one
option from a list you defined, or a position on a scale you defined. It does not emit
free text, which is why TypeSafe AI describes it as unable to hallucinate or produce a
type error. The company reports inference 40–200x faster than frontier LLMs on comparable
classification work, at $0.042 per million input tokens with output billed at zero.

Those numbers are the vendor's own. This list exists to collect what people actually build
with the model, so the claims can be checked against working code.

**New here?** Start with the [official launch post](https://typesafe.ai/blog/introducing-system-one-models-and-jev),
then the [LangChain harness walkthrough](https://www.langchain.com/blog/building-a-harness-with-jev).

## Contents

<!-- AUTO:BEGIN -->

### Official

- **[TypeSafe AI — Introducing System One Models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)** — The launch post from TypeSafe AI: what a System One model is, and what Jev returns instead of text.
- **[typesafe-ai/skills](https://github.com/typesafe-ai/skills)** — Agent skills for building with TypeSafe's System One API  
  <sub>791 stars · MIT · updated 2026-09-12</sub>
- **[typesafe-ai/typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python)** — The official Python library for the TypeSafe API  
  <sub>129 stars · Python · MIT · updated 2026-09-18</sub>

### SDKs and clients

- **[reticlehq/reticle](https://github.com/reticlehq/reticle)** — AI agents can generate code, but still struggle to understand what they build. Reticle brings Jev-style machine-native runtime perception to web & desktop applications.  
  <sub>748 stars · TypeScript · updated 2026-09-19</sub>
- **[kitze/skillbox](https://github.com/kitze/skillbox)** — Self-hosted, versioned skills library for AI agents. MCP, scoped clients, and optional Jev recommendations.  
  <sub>200 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jexp/neo4jev](https://github.com/jexp/neo4jev)** — Typesafe.ai System One Model Jev navigating a Neo4j graph by using a classifier over neighbouring relationships  
  <sub>40 stars · Jupyter Notebook · MIT · updated 2026-09-18</sub>
- **[rohanarun/computer-use-cache](https://github.com/rohanarun/computer-use-cache)** — Drop-in OpenAI-compatible cache that replays repeated computer-use and agent workflows at near-zero cost.  
  <sub>40 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[Bodila51/grok-bot-jev](https://github.com/Bodila51/grok-bot-jev)** — Connect TypeSafe Jev to Grok Bot as a cheap decision layer - usage gates, skill template, examples  
  <sub>25 stars · Python · MIT · updated 2026-09-20</sub>
- **[AboveColin/HA-Jev](https://github.com/AboveColin/HA-Jev)** — Ask your house a question, get a number back. Home Assistant integration for TypeSafe Jev: typed answers as sensors, four actions for automations, and a conversation agent for Assist.  
  <sub>24 stars · Python · MIT · updated 2026-09-20</sub>
- **[genai-craft/openvons](https://github.com/genai-craft/openvons)** — openvons (open-Jev): 有限選択肢に確率で答える判断層 — テキスト / 画像 / 日本語音声コマンド  
  <sub>9 stars · Python · updated 2026-09-20</sub>
- **[rhighs/jev-code](https://github.com/rhighs/jev-code)** — Interactive TypeScript coding CLI powered by Jev typed decisions and constrained AST generation.  
  <sub>9 stars · TypeScript · updated 2026-09-19</sub>
- **[Tangerg/typesafe-sdk-go](https://github.com/Tangerg/typesafe-sdk-go)** — Go SDK for the TypeSafe AI API — typed questions in, probability distributions out.  
  <sub>8 stars · Go · MIT · updated 2026-09-19</sub>
- **[fazlerocks/jevmail](https://github.com/fazlerocks/jevmail)** — Open-source AI email triage for Gmail. Sorts your inbox into Needs reply, Updates, Promos, Sales and Spam with Jev, TypeSafe AI's decision model, via Vercel AI Gateway. Read-only, runs locally, 1,000 emails in about a minute for 3 cents.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[romaluev/jev-ego](https://github.com/romaluev/jev-ego)** — Fast browser agent for ego lite. One TypeSafe request per step; an agent or Jev picks the move.  
  <sub>7 stars · TypeScript · updated 2026-09-17</sub>
- **[AbdelStark/heist-one](https://github.com/AbdelStark/heist-one)** — Observable browser stealth game: Jev makes typed guard judgments while deterministic code owns the world.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[hev/reranker](https://github.com/hev/reranker)** — Use Jev (TypeSafe's System One model) as a calibrated reranker: one call, up to 30 documents, a probability per document. Apache-2.0.  
  <sub>6 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[joevidev/ui-generator-instinct-jev](https://github.com/joevidev/ui-generator-instinct-jev)** — No description provided.  
  <sub>6 stars · TypeScript · updated 2026-09-18</sub>
- **[ticofab/scala-jev-sdk](https://github.com/ticofab/scala-jev-sdk)** — Scala SDK for Jev. No effect system bundled.  
  <sub>6 stars · Scala · Apache-2.0 · updated 2026-09-19</sub>
- **[3clyp50/a0-typesafe-ai](https://github.com/3clyp50/a0-typesafe-ai)** — TypeSafe AI Jev judgments for Agent Zero, with typed tools and probability cards.  
  <sub>5 stars · Python · MIT · updated 2026-09-17</sub>
- **[NSStudent/JevSwiftSDK](https://github.com/NSStudent/JevSwiftSDK)** — An independent, type-safe Swift SDK for TypeSafe Jev, with async/await, batching, retries, and SPM support.  
  <sub>5 stars · Swift · MIT · updated 2026-09-19</sub>
- **[saibimajdi/typesafeai-dotnet-sdk](https://github.com/saibimajdi/typesafeai-dotnet-sdk)** — Community .NET SDK for the TypeSafe AI System One API — typed noul, choice, and score questions with structured, confidence-scored answers. Not affiliated with TypeSafe AI.  
  <sub>5 stars · C# · MIT · updated 2026-09-18</sub>
- **[alterhq/typesafe-sdk-swift](https://github.com/alterhq/typesafe-sdk-swift)** — Unofficial Swift library for the TypeSafe API  
  <sub>4 stars · Swift · MIT · updated 2026-09-15</sub>
- **[arielweinberger/jev-autopilot](https://github.com/arielweinberger/jev-autopilot)** — This demo uses Jev from TypeSafe AI to autonomously fly a drone in a random city from point A to point B, avoiding obstacles along the way. A trip costs $0.01.  
  <sub>4 stars · TypeScript · updated 2026-09-17</sub>
- **[joshmn/typesafe-sdk](https://github.com/joshmn/typesafe-sdk)** — Ruby client for typesafe.ai  
  <sub>4 stars · Ruby · MIT · updated 2026-09-19</sub>
- **[buberlo/dsh-jev](https://github.com/buberlo/dsh-jev)** — Jev-powered decision layer for DeepSeek Harness  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[InsaneArts/typesafe-sdk-swift](https://github.com/InsaneArts/typesafe-sdk-swift)** — Swift SDK for TypeSafe AI  
  <sub>3 stars · Swift · MIT · updated 2026-09-17</sub>
- **[mateonunez/jod](https://github.com/mateonunez/jod)** — Semantic schemas over TypeSafe's Jev — validate the state locally, then project typed answers.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[nshkrdotcom/typesafe_sdk](https://github.com/nshkrdotcom/typesafe_sdk)** — An idiomatic, type-safe Elixir port of the official TypeScript AI SDK (ai / ai-sdk) providing unified LLM integrations, streaming text and structured outputs, tool calling, and agentic workflows. Jev is their current flagship model and is the first System One model.  
  <sub>3 stars · Elixir · MIT · updated 2026-09-20</sub>
- **[Olti1947/jev-java](https://github.com/Olti1947/jev-java)** — Idiomatic Java SDK for TypeSafe AI Jev System One decision engine  
  <sub>3 stars · Java · updated 2026-09-19</sub>
- **[realZachi/jevtest](https://github.com/realZachi/jevtest)** — Semantic test matchers for Vitest and Jest, powered by TypeSafe's Jev model. Write expectations in plain English, get calibrated probabilities back.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Stumble/jev-go](https://github.com/Stumble/jev-go)** — Community Go SDK for TypeSafe AI Jev / System One  
  <sub>3 stars · Go · MIT · updated 2026-09-18</sub>
- **[xingwudao/OpenJev](https://github.com/xingwudao/OpenJev)** — OpenJev: an independent Jev-inspired System One decision API based on TypeSafe.ai concepts. Choice, score and noul primitives, local mock server, Python and TypeScript SDKs. Real inference planned; not affiliated with TypeSafe AI.  
  <sub>3 stars · Python · updated 2026-09-18</sub>
- **[Foadsf/jev-for-engineers](https://github.com/Foadsf/jev-for-engineers)** — Eight minimal working examples of TypeSafe's Jev (a System One model) applied to mechanical and electrical engineering: CAD/CAE/CAM routing, FEM result triage, DFM screening, BOM alignment, hallucination-proof extraction. Zero dependencies.  
  <sub>2 stars · Python · MIT · updated 2026-09-16</sub>
- **[Hawxy/TypeSafeAI.Net](https://github.com/Hawxy/TypeSafeAI.Net)** — .NET SDK for the TypeSafe AI platform  
  <sub>2 stars · C# · Apache-2.0 · updated 2026-09-19</sub>
- **[mzainzulifqar/jev-php-sdk](https://github.com/mzainzulifqar/jev-php-sdk)** — PHP SDK for TypeSafe's Jev: send text and typed questions, get typed answers with calibrated confidence. PHP 8.1+, works with any PSR-18 client, Laravel 8–13.  
  <sub>2 stars · PHP · MIT · updated 2026-09-18</sub>
- **[opaielsheikh/typesafe-migration-guard](https://github.com/opaielsheikh/typesafe-migration-guard)** — Automated database migration safety reviewer powered by TypeSafe AI (Jev System One model)  
  <sub>2 stars · TypeScript · updated 2026-09-17</sub>
- **[Premo-Cloud/typesafe-sdk-java](https://github.com/Premo-Cloud/typesafe-sdk-java)** — Community Java client for the TypeSafe System One API (unofficial)  
  <sub>2 stars · Java · MIT · updated 2026-09-19</sub>
- **[simota/tenbin](https://github.com/simota/tenbin)** — MCP server and agent skill for the TypeSafe AI System One API (Jev): decompose a judgment into Choice / Score / Noul questions, lint them, measure on labelled data, and put calibrated thresholds in code  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[AkashPriyadarshii/jev-scout](https://github.com/AkashPriyadarshii/jev-scout)** — Zero-hallucination open-source repo and crate scout powered by TypeSafe AI Jev System One scoring  
  <sub>1 stars · Rust · MIT · updated 2026-09-20</sub>
- **[Alexandre-Borghi/jev-ncr-demo](https://github.com/Alexandre-Borghi/jev-ncr-demo)** — AI defect code suggestions for Non-Conformance Reports, powered by TypeSafe AI's Jev model  
  <sub>1 stars · Rust · updated 2026-09-19</sub>
- **[Barneyjm/decision-circuits](https://github.com/Barneyjm/decision-circuits)** — Decision circuits: typed questions to a System One model, calibrated probabilities back, gates in code. Zero-dependency Python SDK with LangChain, OpenAI Agents, and Claude Agent SDK integrations.  
  <sub>1 stars · Python · MIT · updated 2026-09-20</sub>
- **[binnash/typesafe-sdk](https://github.com/binnash/typesafe-sdk)** — PHP & Laravel SDK for TypeSafe AI's JEV Model series  
  <sub>1 stars · PHP · updated 2026-09-18</sub>
- **[chrishan17/claude-jev-mod](https://github.com/chrishan17/claude-jev-mod)** — Typed decisions in Claude Code: adds $.jev over TypeSafe's Jev, through OpenRouter, Vercel AI Gateway, Cloudflare Workers AI, LiteLLM or the TypeSafe API.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>

<sub>51 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Framework integrations

- **[WiktorB2004/llama-index-jev](https://github.com/WiktorB2004/llama-index-jev)** — LlamaIndex reranker + router powered by TypeSafe Jev — typed scores/choices, cheaper than LLM-as-judge.  
  <sub>3 stars · Python · MIT · updated 2026-09-18</sub>
- **[leepokai/llm-prompt-techniques-on-jev](https://github.com/leepokai/llm-prompt-techniques-on-jev)** — Chain-of-thought and self-refinement for TypeSafe's Jev: feed its typed answers back as state and ask again. Benchmarks vs TypeSafe's own cookbook numbers.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[yousudip/lizard-agent](https://github.com/yousudip/lizard-agent)** — A browser agent with no LLM in the loop — deterministic code plus Jev, a System One model. ~118ms per decision, typed and auditable.  
  <sub>0 stars · Python · MIT · updated 2026-09-18</sub>

### Evaluation and judging

- **[NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review)** — Local-first MCP plugin for continuous software-quality review by AI coding agents, powered by Jev.  
  <sub>171 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[kitze/unclutter](https://github.com/kitze/unclutter)** — WXT browser extension: Jev-powered page clutter removal with reusable template rules.  
  <sub>136 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[y0usaf/pi-jev](https://github.com/y0usaf/pi-jev)** — TypeSafe Jev as a decision layer for the Pi coding agent: a measured tool-call gate plus jev_ask for typed, calibrated answers  
  <sub>94 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Heman10x-NGU/openJev-verdict-2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0)** — Calibrated 151M Non-Autoregressive Decision Engine beating TypeSafe Jev & Laya on LocalLLaMA/typed-decisions (77.10% acc, 0.0636 Brier, 0.0144 ECE)  
  <sub>83 stars · Python · updated 2026-09-19</sub>
- **[realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock)** — 🧹 Fun project: a Chrome extension that asks a tiny AI decision model (TypeSafe Jev) "is this DOM element an ad?" and pops it off the page. BYOK, no backend, not a real ad blocker.  
  <sub>58 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[kbhuw/jev-sift](https://github.com/kbhuw/jev-sift)** — Classify first. Read selectively. A portable agent plugin and MCP tool for batch text classification.  
  <sub>46 stars · JavaScript · updated 2026-09-18</sub>
- **[Heman10x-NGU/Verdict-open-jev](https://github.com/Heman10x-NGU/Verdict-open-jev)** — Non-autoregressive decision engine on ModernBERT (151M) with calibrated uncertainty (RLCD), TypeSafe AI Jev benchmark audit, and in-browser WebGPU playground  
  <sub>28 stars · Python · updated 2026-09-18</sub>
- **[GhalebDweikat/winnow](https://github.com/GhalebDweikat/winnow)** — A calibrated context sieve for Claude Code: every tool result is judged by a System One model before it enters context.  
  <sub>26 stars · Python · MIT · updated 2026-09-19</sub>
- **[Zaious/jev-capability-atlas](https://github.com/Zaious/jev-capability-atlas)** — Independent, evidence-based map of when TypeSafe's Jev actually holds up vs. breaks down — real API-call receipts, not a leaderboard. 中文為主的雙語 repo。  
  <sub>19 stars · Python · updated 2026-09-20</sub>
- **[compozy/yoshi](https://github.com/compozy/yoshi)** — Context-pruning proxy for Claude Code and Codex: Jev judges which history is still needed, measured not claimed. POC here now, heading soon into https://github.com/compozy/compozy  
  <sub>18 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[rorshopping/jev-on-a-laptop](https://github.com/rorshopping/jev-on-a-laptop)** — Unofficial study: Jev-style parallel typed decisions on stock 1.5B-8B models on an Apple Silicon laptop. Benchmarks, research notes, and a Hugging Face Space demo.  
  <sub>18 stars · Python · updated 2026-09-17</sub>
- **[ikermoel/open-alternative-jev](https://github.com/ikermoel/open-alternative-jev)** — Open-source alternative to TypeSafe's Jev: a System One style model layer that gives typed, calibrated decisions from any open-weights LLM in one forward pass (HF + vLLM), with honest benchmarks  
  <sub>16 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge)** — Using Jev as an evaluator.  
  <sub>12 stars · Python · updated 2026-09-19</sub>
- **[AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks)** — Probability-aware evaluation for typed decision models: calibration, selective risk, latency, and reproducible benchmarks.  
  <sub>11 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[imMamdouhaboammar/fable-jev](https://github.com/imMamdouhaboammar/fable-jev)** — ⚡ Sub-100ms cognitive reflexes for autonomous coding agents. Powered by TypeSafe AI's Jev & get-fable.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[abhixhek/jevcal](https://github.com/abhixhek/jevcal)** — Stop guessing confidence thresholds: calibrate, threshold, and drift-check typed decision models (TypeSafe Jev) against an LLM teacher.  
  <sub>8 stars · Python · MIT · updated 2026-09-18</sub>
- **[carlaiau/jev-reranking](https://github.com/carlaiau/jev-reranking)** — Search engine experimentation on the TREC collections. Currently focused on zero-shot reranking implementations with typesafe.ai's JEV model  
  <sub>7 stars · Python · MIT · updated 2026-09-18</sub>
- **[cablehead/jev.nu](https://github.com/cablehead/jev.nu)** — Nushell module for the TypeSafe System One API: typed decisions with calibrated probabilities  
  <sub>6 stars · Nushell · MIT · updated 2026-09-19</sub>
- **[arunav25/jev-mcp](https://github.com/arunav25/jev-mcp)** — Connect JEV to MCP clients and compare its judgments against general-purpose LLMs using shared datasets and measurable accuracy.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench)** — JevBench v1 - a benchmark for Jev-class typed decision models: smart, cheap, fast, reliable, open.  
  <sub>5 stars · Python · MIT · updated 2026-09-19</sub>
- **[Astro-Han/jev-harness](https://github.com/Astro-Han/jev-harness)** — A coding agent that filters every tool result through Jev before the model sees it, with an A/B harness measuring pass@1 and cost against the unfiltered control  
  <sub>4 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[docxology/daf-jev](https://github.com/docxology/daf-jev)** — daf-jev: composable Python toolkit for TypeSafe's Jev (System One) decision API — question builders, confidence gates, evaluator, calibration, CLI, MCP server, agent skill  
  <sub>4 stars · Python · MIT · updated 2026-09-18</sub>
- **[doeixd/jev-pref](https://github.com/doeixd/jev-pref)** — Turn your AGENTS.md preferences into a fast, Jev-powered AI linter.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[gemanor/jev-code-review-benchmark](https://github.com/gemanor/jev-code-review-benchmark)** — Comparing Jev, Gemini Flash, and Claude Fable on Python code review rules: cost, speed, accuracy, and consistency. Includes results, charts, and reproducible experiments.  
  <sub>4 stars · Python · MIT · updated 2026-09-17</sub>
- **[RahulBalakavi/claude-code-jev](https://github.com/RahulBalakavi/claude-code-jev)** — Experimental Jev permission gate for Claude Code via OpenRouter, with reproducible latency and cost benchmarks  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[zhuyansen/jev-search-rerank-eval](https://github.com/zhuyansen/jev-search-rerank-eval)** — Does a TypeSafe Jev rerank beat embedding search? Graded relevance eval (9,831 pairs, 164 zh/en queries) over the Agent Skills Hub catalog, with the judge-circularity bias measured.  
  <sub>4 stars · Python · MIT · updated 2026-09-18</sub>
- **[zoidsh/tenet](https://github.com/zoidsh/tenet)** — The review gate for code that agents write: rules in plain language, judged on every commit  
  <sub>4 stars · Go · MIT · updated 2026-09-18</sub>
- **[AkashPriyadarshii/jev-curate](https://github.com/AkashPriyadarshii/jev-curate)** — High-throughput synthetic & pretraining dataset sifter powered by TypeSafe AI Jev (api.typesafe.ai). Stream, filter, and score Parquet & JSONL datasets at 1,500+ rows/sec using System One typed decisions (Choice, Score, Noul).  
  <sub>3 stars · Rust · MIT · updated 2026-09-18</sub>
- **[AntonioCoppe/jev-harness](https://github.com/AntonioCoppe/jev-harness)** — Decision harness for TypeSafe Jev — confidence gates, shadow mode, recipes, and evals. Claude CLI 48.9s → Jev 1.3s on the same row-filter job.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[buchmark/claude-jev](https://github.com/buchmark/claude-jev)** — Claude Code plugin that scores review findings, debug hypotheses and design options with TypeSafe's Jev — calibrated probabilities instead of one more opinion.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[cyberofficial/dsh-plugin-jev](https://github.com/cyberofficial/dsh-plugin-jev)** — No description provided.  
  <sub>3 stars · JavaScript · updated 2026-09-19</sub>
- **[ishantanu/jevmetrics](https://github.com/ishantanu/jevmetrics)** — No description provided.  
  <sub>3 stars · Go · Apache-2.0 · updated 2026-09-19</sub>
- **[sabeel111/OpenSourceJev](https://github.com/sabeel111/OpenSourceJev)** — Turning an LLM model into a Jev like System.  
  <sub>3 stars · Python · MIT · updated 2026-09-19</sub>
- **[shaharia-lab/jev-cli](https://github.com/shaharia-lab/jev-cli)** — Interact with "Jev" model from TypeSafe AI  
  <sub>3 stars · Rust · Apache-2.0 · updated 2026-09-20</sub>
- **[akash-kamat/system-one-gemma](https://github.com/akash-kamat/system-one-gemma)** — Open-source Jev-style System One decision model. Gemma 3 270M with a scoring head — fast, calibrated decisions in a single forward pass. No text generation. Inspired by TypeSafe.ai's Jev.  
  <sub>2 stars · Python · updated 2026-09-18</sub>
- **[everyinfra/jev-radar](https://github.com/everyinfra/jev-radar)** — 📡 全网最全 · The world's most comprehensive tracker of the Jev (TypeSafe AI System One) ecosystem — 220+ documented cases · 108 confidence-graded entries · verified & rescanned every 3 hours · API access guide included  
  <sub>2 stars · updated 2026-09-20</sub>
- **[Gaurav-Gosain/jev-sec-bench](https://github.com/Gaurav-Gosain/jev-sec-bench)** — Blind security benchmarks for Jev, TypeSafe's System One model: prompt injection and vulnerable code detection, built on jev-go  
  <sub>2 stars · Go · MIT · updated 2026-09-16</sub>
- **[sysadarsh/zerosweep](https://github.com/sysadarsh/zerosweep)** — Autonomous System-One Triage Engine & Benchmark powered by TypeSafe AI (Jev). 75ms inference, $0 output tokens, and RLCD epistemic safety gates.  
  <sub>2 stars · TypeScript · updated 2026-09-18</sub>
- **[TypeSafeAI/clarity-judge](https://github.com/TypeSafeAI/clarity-judge)** — Multi-axis writing quality checker powered by TypeSafe AI's Jev model. Separate named checks, each with its own verdict and confidence.  
  <sub>2 stars · TypeScript · updated 2026-09-20</sub>
- **[aegsrl7/jevmap](https://github.com/aegsrl7/jevmap)** — Map a codebase into units and let Jev (TypeSafe AI) hand an AI coding agent the ten files that matter for a task  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-18</sub>

<sub>44 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Guardrails and safety

- **[DevMortimer/pi-warden](https://github.com/DevMortimer/pi-warden)** — Guardrails for Pi built on pi-typesafe that steer the agent instead of interrupting you: Jev judges irreversible and off-task tool calls, detects stuck loops, checks unverified done claims, flags slop  
  <sub>96 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[shiftynick/jev-axi](https://github.com/shiftynick/jev-axi)** — Agent-ergonomic CLI for TypeSafe's Jev: fast calibrated judgments (pick, rate, check, rank, triage, guard) from the shell  
  <sub>17 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[kyu1204/oh-my-harness](https://github.com/kyu1204/oh-my-harness)** — Tame your AI coding agents with natural language. Generate enforced guardrails (CLAUDE.md, hooks, settings) from a single command.  
  <sub>16 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[leepokai/jev-guard](https://github.com/leepokai/jev-guard)** — Auto mode for every coding agent, built on Jev: risk-scores every tool call with session context (deny / ask / allow), flags prompt injection in results, checks skills and plugins. Claude Code, Codex, Copilot, Gemini, Cursor, pi, OpenCode, ACP.  
  <sub>11 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[Nasrallah-AL/jev-cli](https://github.com/Nasrallah-AL/jev-cli)** — Command-line tool for TypeSafe's Jev AI model  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jevgpt/discord-live-voice-bot](https://github.com/jevgpt/discord-live-voice-bot)** — Discord voice bot with real-time speech: listens to a voice channel, talks back, plays its own music with ducking, and runs 53 server tools behind a voice-based owner gate. Falls back to a fully local pipeline (Whisper + Chatterbox) when the API is down. English and Turkish.  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[nexibeo/jev-cookbook](https://github.com/nexibeo/jev-cookbook)** — Practical, tested recipes for TypeSafe's Jev decision model on OpenRouter: support triage, database indexing, file organizing, tagging, taxonomies, dedupe, PII detection, extraction, search re-ranking and a browser agent.  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[codaaiteam/jev-ai](https://github.com/codaaiteam/jev-ai)** — Jev AI quickstart & FAQ — TypeSafe AI's System One model. Try it free: jevtypesafeai.com  
  <sub>0 stars · updated 2026-09-19</sub>
- **[codaaiteam/jev-typesafe-ai](https://github.com/codaaiteam/jev-typesafe-ai)** — Unofficial developer notes & examples for Jev, TypeSafe AI's System One model. Try it free: jevtypesafeai.com  
  <sub>0 stars · updated 2026-09-19</sub>
- **[JularDepick/Jev-Examiner](https://github.com/JularDepick/Jev-Examiner)** — An AI content moderation workflow powered by the [TypeSafe/Jev model](https://typesafe.ai).  
  <sub>0 stars · Apache-2.0 · updated 2026-09-20</sub>

### Infrastructure and tooling

- **[thruwire/foreman](https://github.com/thruwire/foreman)** — Software factory foreman based on TypeSafe's Jev model  
  <sub>409 stars · Python · MIT · updated 2026-09-19</sub>
- **[gargpratyush/jev-router](https://github.com/gargpratyush/jev-router)** — Route to the cheapest model in claude code for your task using jev-router  
  <sub>218 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[sutro-sh/jev-align](https://github.com/sutro-sh/jev-align)** — Build calibrated AI classifiers from human feedback using Jev and GEPA.  
  <sub>169 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[jkudish/jev-browser](https://github.com/jkudish/jev-browser)** — Browser use using Typesafe's Jev model  
  <sub>156 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jkudish/jev-mcp](https://github.com/jkudish/jev-mcp)** — Fast, cheap, typed judgments from TypeSafe's Jev model, as MCP tools.  
  <sub>122 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[dbreunig/building-with-jev-skill](https://github.com/dbreunig/building-with-jev-skill)** — A skill for writing and improving programs that call Jev, TypeSafe's System One model  
  <sub>120 stars · updated 2026-09-17</sub>
- **[itsmostafa/typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp)** — mcp connector to give your AI agent direct access to typesafe ai's jev model  
  <sub>118 stars · Go · MIT · updated 2026-09-20</sub>
- **[Dicklesworthstone/skillranker](https://github.com/Dicklesworthstone/skillranker)** — Rust CLI powered by Jev from TypeSafe.ai that ranks agent skills for the next step using live session context. Includes Claude Code hooks, structured JSON, abstention, and local feedback. Requires a TypeSafe API key.  
  <sub>70 stars · Rust · updated 2026-09-20</sub>
- **[yusukebe/hono-jev-router](https://github.com/yusukebe/hono-jev-router)** — Route HTTP requests by meaning. A semantic router for Hono powered by Jev.  
  <sub>39 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[burnigtm/jev-mcp](https://github.com/burnigtm/jev-mcp)** — MCP server that puts TypeSafe Jev on the coding loop in Cursor, Codex, and any MCP client  
  <sub>20 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[mizzlelover/jev-hub](https://github.com/mizzlelover/jev-hub)** — JEV HUB · X 上关于 TypeSafe AI「系统一模型」Jev 的长文与演示视频聚合（保留原链与作者）｜ 谁是专家 出品  
  <sub>20 stars · CSS · updated 2026-09-19</sub>
- **[TheoOliveira/pi-jev](https://github.com/TheoOliveira/pi-jev)** — Semantic tool routing and typed System One decisions for the Pi coding agent using TypeSafe Jev  
  <sub>18 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[AkashPriyadarshii/jev-seo](https://github.com/AkashPriyadarshii/jev-seo)** — 100% free ₹0 agent-first SEO & GEO CLI suite and MCP server in Rust replacing Semrush and OpenSEO via DuckDuckGo and TypeSafe Jev System One  
  <sub>11 stars · Rust · MIT · updated 2026-09-20</sub>
- **[Brainwires/jevwire](https://github.com/Brainwires/jevwire)** — Jev decision layer for agents: MCP server, embeddable DecisionModel library, and an escalate-only Claude Code plugin (TypeSafe AI's Jev)  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[shitianfang/jev-use](https://github.com/shitianfang/jev-use)** — Claude Code / Codex / pi plugin that hands agent steps needing no text output to Jev (TypeSafe's judgment model) — measured p50 ~230 ms and ~$0.02 per 1,000 judgments, with typed escalation back to the LLM  
  <sub>9 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[GodsBoy/jev-agent-skill-router](https://github.com/GodsBoy/jev-agent-skill-router)** — Typed, confidence-aware agent skill routing with TypeSafe Jev.  
  <sub>8 stars · Python · MIT · updated 2026-09-16</sub>
- **[kylemclaren/jevql](https://github.com/kylemclaren/jevql)** — Semantic SQL for Postgres, powered by Jev  
  <sub>7 stars · Go · MIT · updated 2026-09-19</sub>
- **[win4r/jev-skill-suggester](https://github.com/win4r/jev-skill-suggester)** — 用 TypeSafe Jev 推荐已安装 Skill / Bounded installed-skill recommendations with TypeSafe Jev. Python CLI, Codex skill, bilingual docs and live examples.  
  <sub>7 stars · Python · MIT · updated 2026-09-19</sub>
- **[sharziki/semdecide](https://github.com/sharziki/semdecide)** — Typed semantic decisions for Unix pipelines and CI, powered by TypeSafe AI Jev.  
  <sub>6 stars · Python · MIT · updated 2026-09-16</sub>
- **[tumf/jev-cli](https://github.com/tumf/jev-cli)** — Small dependency-free CLI for TypeSafe Jev  
  <sub>6 stars · Python · MIT · updated 2026-09-19</sub>
- **[AkashPriyadarshii/jev-superpowers](https://github.com/AkashPriyadarshii/jev-superpowers)** — Systematic software development framework for AI coding agents upgraded with TypeSafe Jev System One typed decisions  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[trungdq88/jev-tetris](https://github.com/trungdq88/jev-tetris)** — Jev play Tetris in real-time against other AI models  
  <sub>5 stars · JavaScript · updated 2026-09-19</sub>
- **[davila7/jev-explained](https://github.com/davila7/jev-explained)** — Jev Explained  
  <sub>4 stars · TypeScript · updated 2026-09-19</sub>
- **[Peu77/JevFind](https://github.com/Peu77/JevFind)** — Fast semantic code search powered by Jev. Find the relevant files, line ranges, and snippets  
  <sub>4 stars · Rust · MIT · updated 2026-09-19</sub>
- **[utk2103/jev-studio](https://github.com/utk2103/jev-studio)** — if you're experimenting with jev it will be easier from here  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[y0usaf/typesafe-cli](https://github.com/y0usaf/typesafe-cli)** — Ask Jev typed questions from the shell: noul, choice, and score answers as numbers, not prose  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[himomohi/aside-jev](https://github.com/himomohi/aside-jev)** — Aside agents decide with TypeSafe Jev (System One: Choice/Score/Noul). Not a Cua binding — Jev is the model, Aside is the browser runtime.  
  <sub>3 stars · Python · MIT · updated 2026-09-18</sub>
- **[HyunjunJeon/jev-judgment](https://github.com/HyunjunJeon/jev-judgment)** — Agent Skill: send closed coding-agent judgments to TypeSafe Jev  
  <sub>3 stars · Python · MIT · updated 2026-09-17</sub>
- **[jmesplana/excel_ai_insight](https://github.com/jmesplana/excel_ai_insight)** — Excel AI Insight is a web application that allows you to upload Excel files and generate insightful analyses using advanced AI models. This tool helps uncover patterns, trends, and actionable insights quickly and efficiently.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[rashedInt32/jev-mcp](https://github.com/rashedInt32/jev-mcp)** — MCP server exposing TypeSafe Jev as typed, calibrated judgment tools: classify, score, check, batched ask. Ships as a Claude Code plugin.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[sufianetaouil/every](https://github.com/sufianetaouil/every)** — Ask a yes/no question of every function in a codebase. Ranked answers in seconds, for cents. Grep whose pattern is a question, powered by TypeSafe Jev.  
  <sub>3 stars · Python · MIT · updated 2026-09-17</sub>
- **[win4r/jev-security-scan](https://github.com/win4r/jev-security-scan)** — 使用 TypeSafe Jev 审查 Skill 与 MCP 可疑行为 | Review Agent Skills and MCP code with Jev, static evidence, and explicit coverage gaps  
  <sub>3 stars · Python · MIT · updated 2026-09-19</sub>
- **[hellogumbo/should-ai-kill-us-all](https://github.com/hellogumbo/should-ai-kill-us-all)** — We ask Jev, TypeSafe AI's System One model, whether AI should kill us all. Every ten minutes. Using the actual headlines.  
  <sub>2 stars · JavaScript · CC0-1.0 · updated 2026-09-18</sub>
- **[AkashPriyadarshii/jev-git](https://github.com/AkashPriyadarshii/jev-git)** — Sub-second Git pre-commit & pre-push semantic reflex gate powered by TypeSafe AI Jev  
  <sub>1 stars · Rust · MIT · updated 2026-09-18</sub>
- **[almcc/slop-linter](https://github.com/almcc/slop-linter)** — Lints AI-generated code for slop using Jev, a System One model that makes fast structured decisions instead of generating text.  
  <sub>1 stars · Python · updated 2026-09-19</sub>
- **[ctaxnagomi/instruct-jev](https://github.com/ctaxnagomi/instruct-jev)** — INSTRUCT_JEV - TypeSafe AI Jev / System One instruction corpus (choice/noul/score), compiled by DeckerGUI. 119 rows. Mirrored on HuggingFace.  
  <sub>1 stars · Python · MIT · updated 2026-09-19</sub>
- **[FrancoisChastel/jev-code](https://github.com/FrancoisChastel/jev-code)** — Jev, TypeSafe's System One classifier, as a tool inside Claude Code, Codex, Pi, and OpenCode: typed classify, check, score, rank, and ask, plus one-command setup.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[okooo5km/jev](https://github.com/okooo5km/jev)** — Typed decisions from the shell: an unofficial stdlib-Python CLI and Agent Skill for TypeSafe's Jev model, via the TypeSafe API (default) or OpenRouter. Yes/no, choice and ordinal scores with calibrated probabilities, semantic grep and batch mode.  
  <sub>1 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[agarwalpranav0711/jev-ai-testing](https://github.com/agarwalpranav0711/jev-ai-testing)** — Real-time message tone analyzer and autonomous maze navigation game powered by TypeSafe AI's Jev System One model & Cloudflare Workers.  
  <sub>0 stars · HTML · updated 2026-09-20</sub>
- **[dirnbauer/typo3-webcon-jev](https://github.com/dirnbauer/typo3-webcon-jev)** — Typed decisions from TypeSafe AI's Jev model inside TYPO3: a decision editor and playground in the backend, powermail_cond operators, and submission routing  
  <sub>0 stars · PHP · updated 2026-09-19</sub>

<sub>13 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Examples and templates

- **[devagrawal09/jev-review](https://github.com/devagrawal09/jev-review)** — A staged code-review workflow and local dashboard built with TypeSafe Jev.  
  <sub>369 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[kevinbadi/jev-voice](https://github.com/kevinbadi/jev-voice)** — Talk to your Mac. Local whisper.cpp + one Jev (TypeSafe) call per command + macOS automation.  
  <sub>24 stars · Python · MIT · updated 2026-09-18</sub>
- **[TypeSafeAI/typesafe-playground](https://github.com/TypeSafeAI/typesafe-playground)** — Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.  
  <sub>14 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[BorisLeMeec/jev](https://github.com/BorisLeMeec/jev)** — A claude code plugin for jev  
  <sub>10 stars · Go · MIT · updated 2026-09-18</sub>
- **[khordoo/jev-reflex-autonomy-lab](https://github.com/khordoo/jev-reflex-autonomy-lab)** — Multi-drone autonomy lab demonstrating TypeSafe Jev reflex decisions with optional System 2 strategy guidance.  
  <sub>10 stars · TypeScript · updated 2026-09-19</sub>
- **[altryne/jevify](https://github.com/altryne/jevify)** — An agent skill to discover TypeSafe Jev opportunities, design typed questions, and learn from recent community experiments.  
  <sub>9 stars · Python · MIT · updated 2026-09-17</sub>
- **[BoundaryML/feelings](https://github.com/BoundaryML/feelings)** — .feels() on anything — the AI if statement as a real, typed method. Jev + BAML.  
  <sub>8 stars · BAML · updated 2026-09-19</sub>
- **[parth-kp/jev-mail-classifier](https://github.com/parth-kp/jev-mail-classifier)** — Classify your inbox with Jev (TypeSafe's System One model) — tag, move, flag, and notify, all config-driven.  
  <sub>8 stars · Python · MIT · updated 2026-09-20</sub>
- **[ethanplusai/jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch)** — Filter any live Twitch chat with Jev: a bring-your-own-key Chrome extension  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[aabolfazl/typesafe-local](https://github.com/aabolfazl/typesafe-local)** — Inspired by TypeSafe Ai, Ask a local LLM typed questions, get calibrated probabilities instead of text. Structured output without generation or parsing. MLX / Apple Silicon.  
  <sub>6 stars · Python · MIT · updated 2026-09-18</sub>
- **[inanna-malick/jev-dsl](https://github.com/inanna-malick/jev-dsl)** — Agent-first Haskell DSL for TypeSafe's Jev judgment model: typed packets, inferred types, answers under the same labels  
  <sub>6 stars · Haskell · MIT · updated 2026-09-18</sub>
- **[ranjan2829/AskJev](https://github.com/ranjan2829/AskJev)** — AskJev — Jev autopilot for any website + guard on irreversible clicks (TypeSafe System One, not Claude)  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[dani1005/book-aurora](https://github.com/dani1005/book-aurora)** — Jev reads a whole novel in seconds. Every passage becomes a row of colour.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[chy4pro/jev-for-chrome](https://github.com/chy4pro/jev-for-chrome)** — Jev for Chrome: drives the tab you are looking at with TypeSafe Jev, a sub-second decision model. Community port of browser-use/jev-ultrafast, not affiliated with TypeSafe.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[mkotlikov/jev-grug](https://github.com/mkotlikov/jev-grug)** — Helping JEV speak <3  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[nickthompson480/typesafe-ai-playground](https://github.com/nickthompson480/typesafe-ai-playground)** — Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-16</sub>
- **[Ashadeepa/typesafe-jev-model-use-cases](https://github.com/Ashadeepa/typesafe-jev-model-use-cases)** — Runnable demos of TypeSafe's System One model (Jev) — parallel Noul judgments and a Choice-based citation/claim checker  
  <sub>1 stars · Python · updated 2026-09-19</sub>
- **[Little-Planet-Labs/jev-playground](https://github.com/Little-Planet-Labs/jev-playground)** — A small Next.js app for experimenting with TypeSafe AI's Jev model (System One)  
  <sub>1 stars · TypeScript · updated 2026-09-17</sub>
- **[DomMonte/n8n-nodes-typesafe-ai](https://github.com/DomMonte/n8n-nodes-typesafe-ai)** — n8n community node for the TypeSafe AI System One API — typed yes/no, choice and score questions with calibrated probabilities  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[enderkus/zammad-jev-dispatcher](https://github.com/enderkus/zammad-jev-dispatcher)** — AI ticket triage for Zammad using Jev (TypeSafe AI) - classifies and routes new tickets into the right service group automatically.  
  <sub>0 stars · Ruby · MIT · updated 2026-09-19</sub>
- **[matura-lol/Jev-categorise](https://github.com/matura-lol/Jev-categorise)** — Jev based exam paper categorisation used on matura.lol  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[mhmdkzr/jev](https://github.com/mhmdkzr/jev)** — An unofficial Go client for TypeSafe's System One Jev model  
  <sub>0 stars · Go · MIT · updated 2026-09-18</sub>
- **[moguone/jev-lab](https://github.com/moguone/jev-lab)** — Small apps for evaluating TypeSafe AI's System One model (Jev). Unofficial.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[nak1b/jev-experiments](https://github.com/nak1b/jev-experiments)** — Small experiments with Jev by TypeSafe  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[tinyhumansai/tinyjevclient](https://github.com/tinyhumansai/tinyjevclient)** — An integration with jev by typesafe.ai in Rust  
  <sub>0 stars · Rust · GPL-3.0 · updated 2026-09-19</sub>
- **[Zogrus/jev-technical-term](https://github.com/Zogrus/jev-technical-term)** — YouTubeの解説動画やZoomのセミナーを聞きながら、出てきた技術用語のひとこと解説をリアルタイム表示するローカルツール(判定AIは TypeSafe AI の Jev)  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>

### Reading and explainers

- **[DataCamp — Jev: TypeSafe's System One model](https://www.datacamp.com/blog/system-one-models-jev)** — Longer explainer on the model class, the typed question format and where it fits.
- **[LangChain — Building a harness with Jev](https://www.langchain.com/blog/building-a-harness-with-jev)** — Walkthrough of wiring Jev into an agent harness, including the jev-as-a-judge experiment.
- **[TechCrunch — A new kind of AI model from a ChatGPT inventor](https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/)** — Launch coverage and context on TypeSafe AI's seed round and early adopters.
- **[The Register — TypeSafe AI debuts model for machines that plays Doom](https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711)** — Coverage of the launch demo, with a sceptical read on the performance claims.
- **[kshetrajna12/reflex](https://github.com/kshetrajna12/reflex)** — A small open decision model: state + typed questions -> calibrated probabilities. A Jev / System One re-creation on Qwen3.5.  
  <sub>80 stars · Python · MIT · updated 2026-09-20</sub>
- **[deepanwadhwa/OpenDecision](https://github.com/deepanwadhwa/OpenDecision)** — OpenDecision is an open-source semantic decision engine like typesafe's jev.  
  <sub>29 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[cobusgreyling/Jev](https://github.com/cobusgreyling/Jev)** — Unofficial TypeSafe Jev showcase — System One decisions, not chat.  
  <sub>2 stars · Python · MIT · updated 2026-09-19</sub>
- **[chris-wozniczek/jev-voice-control](https://github.com/chris-wozniczek/jev-voice-control)** — Control your Mac by voice. Speech → Jev (TypeSafe AI System One model) typed decisions → macOS actions. Menu-bar Swift app.  
  <sub>1 stars · Swift · updated 2026-09-20</sub>
- **[koki-develop/fizzbuzz-jev](https://github.com/koki-develop/fizzbuzz-jev)** — FizzBuzz powered by Jev, TypeSafe AI's System One model.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>

### Everything else

- **[kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier)** — Tax document page classifier built on Jev decisions. 100% strict accuracy across 261 IRS forms, ~$0.001 per page.  
  <sub>273 stars · TypeScript · Apache-2.0 · updated 2026-09-18</sub>
- **[superagents-lab/jev-search](https://github.com/superagents-lab/jev-search)** — Search the web with TypeSafe's Jev: source selection, query understanding and relevance ranking. Built with Search1API.  
  <sub>248 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[realZachi/pg-jev](https://github.com/realZachi/pg-jev)** — Ask your Postgres tables questions in plain language. A PostgreSQL extension powered by TypeSafe's Jev.  
  <sub>225 stars · Shell · updated 2026-09-18</sub>
- **[Mapika/decider](https://github.com/Mapika/decider)** — One-pass typed decisions with calibrated probabilities (System One style model), fine-tuned from Qwen3.5-2B  
  <sub>100 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[uehaj/jev-semgrep](https://github.com/uehaj/jev-semgrep)** — grep by meaning, across languages. TypeSafe Jev scores every line against a meaning; combine meanings with AND/OR/NOT. 意味で探す grep。日本語で英語を、英語で日本語を検索できる  
  <sub>96 stars · JavaScript · updated 2026-09-19</sub>
- **[giuliosmall/pg_typesafe](https://github.com/giuliosmall/pg_typesafe)** — Pre-alpha PostgreSQL extension for TypeSafe AI (Jev) categorical classification  
  <sub>79 stars · C · MIT · updated 2026-09-18</sub>
- **[r-ms/mini-jev](https://github.com/r-ms/mini-jev)** — mini-Jev: what a Jev-style typed-decision interface looks like on a frozen Qwen3-4B — read the option letter's logits instead of generating JSON. Preregistered experiment, results, teaching bench.  
  <sub>25 stars · Python · MIT · updated 2026-09-18</sub>
- **[dannote/jev](https://github.com/dannote/jev)** — TypeSafe Jev for OTP: reply to Jev from a GenServer and pattern match on its answer  
  <sub>17 stars · Elixir · MIT · updated 2026-09-18</sub>
- **[goodrahstar/jev-column-race](https://github.com/goodrahstar/jev-column-race)** — Jev vs Gemini 3.8 Flash: labelling 1,000 app reviews, 4.1× faster and 7× cheaper  
  <sub>16 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[zadescoxp/Jev-Trades](https://github.com/zadescoxp/Jev-Trades)** — Trading bot with the all new TypeSafe AI's first system one model named as Jev  
  <sub>13 stars · Python · Apache-2.0 · updated 2026-09-18</sub>
- **[oso95/x-scanner](https://github.com/oso95/x-scanner)** — Chrome extension that labels every post you scroll past on X with typed Jev judgments and a live cost counter  
  <sub>12 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[aaazzam/jev](https://github.com/aaazzam/jev)** — No description provided.  
  <sub>8 stars · Python · updated 2026-09-18</sub>
- **[stas4000/jev-linkmap](https://github.com/stas4000/jev-linkmap)** — Rebuild a site's internal link map in seconds with Jev, race Claude Opus 5 on the same queue, and let a deep model rewrite the rubric from the disagreements.  
  <sub>7 stars · HTML · updated 2026-09-19</sub>
- **[bohutang/sift](https://github.com/bohutang/sift)** — Chrome extension that labels every post on X (Substance · Humor · Chit-chat · Promo · Junk · AI-written) with TypeSafe Jev, and hides the ones you don't want.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[Kiln-AI/jev_jsonschema](https://github.com/Kiln-AI/jev_jsonschema)** — Run a JSON Schema through TypeSafe's Jev API, and get JSON back.  
  <sub>5 stars · Python · MIT · updated 2026-09-19</sub>
- **[sametcn99/my-stars-atlas](https://github.com/sametcn99/my-stars-atlas)** — A generated catalog of starred GitHub repositories, grouped into stable categories.  
  <sub>5 stars · TypeScript · updated 2026-09-19</sub>
- **[scale-venture-partners/riff](https://github.com/scale-venture-partners/riff)** — A small, fast prose linter: ruff-style rule codes for writing, backed by TypeSafe's Jev model  
  <sub>5 stars · Python · MIT · updated 2026-09-18</sub>
- **[1jehuang/jev-pr-labeler](https://github.com/1jehuang/jev-pr-labeler)** — Semantic GitHub PR labels using Jev's typed decisions, with conceptual scope instead of line counts  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[Devin-AXIS/jev-dsh-decision](https://github.com/Devin-AXIS/jev-dsh-decision)** — Jev DSH 决策引擎｜面向 Agent Harness 的结构化决策插件。原生支持 DeepSeek Harness，通过 iPolloWork 支持 OpenCode、Codex Harness。  
  <sub>4 stars · JavaScript · updated 2026-09-20</sub>
- **[harshil1712/slidepilot](https://github.com/harshil1712/slidepilot)** — Voice-driven semantic auto-advance for Slidev, powered by Cloudflare Agents and TypeSafe AI Jev  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[24601/Augustus](https://github.com/24601/Augustus)** — Agent skill: design judgment-assisted systems with TypeSafe Jev (System One). Maps Choice/Score/Noul onto decision theory, reranking, and routing. Composition algebra, question design, validation gates. MIT.  
  <sub>3 stars · Python · MIT · updated 2026-09-20</sub>
- **[ajensenwaud/hermes-jev-plugin](https://github.com/ajensenwaud/hermes-jev-plugin)** — TypeSafe Jev (System One) decision tools for Hermes Agent: jev_check / jev_route / jev_score / jev_evaluate  
  <sub>3 stars · Python · MIT · updated 2026-09-19</sub>
- **[atarikcaliskan/jevball](https://github.com/atarikcaliskan/jevball)** — 22 Jev models, one ball: a 3D football match where every player is its own Jev (TypeSafe AI System One) decision. Watch, or take over the number 9.  
  <sub>3 stars · JavaScript · updated 2026-09-19</sub>
- **[deep-diver/mini-jev](https://github.com/deep-diver/mini-jev)** — No description provided.  
  <sub>3 stars · Python · updated 2026-09-18</sub>
- **[Gaurav-Gosain/jev-go](https://github.com/Gaurav-Gosain/jev-go)** — Go client for TypeSafe's System One API and its model Jev: typed judgments and calibrated probabilities instead of generated text  
  <sub>3 stars · Go · MIT · updated 2026-09-16</sub>
- **[LamplighterPaul/jev-piano](https://github.com/LamplighterPaul/jev-piano)** — Jev cannot generate a single note. Given a piano and the right questions, it improvises anyway.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[milanboers/jev-plays-pokemon](https://github.com/milanboers/jev-plays-pokemon)** — Playing Pokemon Red using TypeSafe Jev  
  <sub>3 stars · Python · updated 2026-09-18</sub>
- **[oldmoldycake/jev_vampire_survivors](https://github.com/oldmoldycake/jev_vampire_survivors)** — TypeSafe's Jev model plays Vampire Survivors on Steam: BepInEx plugin + Python brain + live decision dashboard. Native Linux only.  
  <sub>3 stars · Python · MIT · updated 2026-09-19</sub>
- **[reycn/smart-switch](https://github.com/reycn/smart-switch)** — Reimagined window switcher for macOS using frontier artificial intelligence. Predicted by TypeSafe's Jev model  
  <sub>3 stars · Swift · AGPL-3.0 · updated 2026-09-18</sub>
- **[SAGAR-TAMANG/sarvam-jev](https://github.com/SAGAR-TAMANG/sarvam-jev)** — Generation-free typed decisions on Indic LLMs. An open Jev-style inference engine on sarvam-1: constrained logit readout instead of autoregressive JSON. Runs client-side in the browser.  
  <sub>3 stars · Python · updated 2026-09-18</sub>
- **[soderlind/ai-provider-for-jev](https://github.com/soderlind/ai-provider-for-jev)** — Connect WordPress to TypeSafe's Jev System One model for structured decisions (choice, score, noul).  
  <sub>3 stars · PHP · updated 2026-09-18</sub>
- **[AboveColin/jevclient](https://github.com/AboveColin/jevclient)** — Async Python client for TypeSafe Jev. Typed questions in, probabilities and choices out, no prose to parse.  
  <sub>1 stars · Python · MIT · updated 2026-09-17</sub>
- **[DDnim/jev-tweet-radar](https://github.com/DDnim/jev-tweet-radar)** — Chrome extension: score every X post with one Jev (System One Model) call — worth engaging, buzz, misread, repost/bookmark-worthy, AI-ish  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[imserhatdemir/jevspace](https://github.com/imserhatdemir/jevspace)** — A DarkOrbit-style space game piloted by Jev — TypeSafe's System One model. Three.js world, deterministic engine, Jev picks the targets.  
  <sub>0 stars · HTML · updated 2026-09-18</sub>

### Other lists and directories

- **[Anil-matcha/awesome-jev-by-typesafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe)** — Evidence-backed use cases, patterns, prompts, and starter code for TypeSafe Jev — a System One model for fast, typed, confidence-aware decisions in software.  
  <sub>644 stars · Python · MIT · updated 2026-09-20</sub>
- **[yibie/awesome-jev](https://github.com/yibie/awesome-jev)** — A curated list of public projects, integrations, and discussions built on Jev — TypeSafe AI's System One model for typed decisions.  
  <sub>426 stars · Python · updated 2026-09-20</sub>
- **[AbdelStark/awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe)** — A curated list of official resources and community projects for TypeSafe, System One models, and Jev.  
  <sub>352 stars · CSS · MIT · updated 2026-09-20</sub>
- **[v-modal/awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools)** — A curated list of tools  built for Jev — TypeSafe AI's System One model for typed decisions.  
  <sub>306 stars · updated 2026-09-19</sub>
- **[cobanov/awesome-jev](https://github.com/cobanov/awesome-jev)** — A curated, source-backed list of projects built with Jev, TypeSafe AI's System One model for typed decisions.  
  <sub>222 stars · CC0-1.0 · updated 2026-09-20</sub>
- **[fatwang2/awesome-jev](https://github.com/fatwang2/awesome-jev)** — A source-backed Jev project directory with a reusable Jev-only GitHub review workflow.  
  <sub>166 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[logicrw/awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects)** — Awesome Jev: source-backed open-source ecosystem radar, plain-language project discovery, and automatic GitHub sync  
  <sub>135 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[AnotiaWang/awesome-jev](https://github.com/AnotiaWang/awesome-jev)** — A curated list of awesome Jev / TypeSafe System One applications, libraries, and resources.  
  <sub>89 stars · CC0-1.0 · updated 2026-09-20</sub>
- **[hellogumbo/awesome-jev](https://github.com/hellogumbo/awesome-jev)** — A community directory of projects built on Jev, TypeSafe AI's System One model.  
  <sub>78 stars · JavaScript · CC0-1.0 · updated 2026-09-19</sub>
- **[OmniJev/awesome-jev](https://github.com/OmniJev/awesome-jev)** — 🔥🔥 Papers, open reproductions and independent evaluations behind System One models and Jev.  
  <sub>71 stars · JavaScript · updated 2026-09-20</sub>

<sub>22 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

---

<sub>345 entries · 201 of them not listed by the other public Jev directories · last updated 2026-09-20 · 665 candidates in the [review queue](data/review-queue.md) · generated by [`tools/fetch.js`](tools/fetch.js)</sub>

<!-- AUTO:END -->

## What belongs here

In scope:

- SDKs, clients and language bindings for the Jev API
- Framework integrations: agent harnesses, routers, eval runners
- Guardrail, moderation and classification pipelines built on typed decisions
- Benchmarks and reproducible cost/latency comparisons against LLM classifiers
- Examples, templates and teardowns that someone can actually run
- Substantial written explainers

Out of scope:

- Empty repositories, unmaintained forks, and "awaiting content" placeholders
- Anything about Japanese encephalitis virus, which unfortunately shares the acronym
- Link farms and paywalled content without a usable free version

## How this list is built

Entries arrive two ways, and both end in a human merge.

**Pull requests** are the primary path. Open one, or file a
[suggestion issue](../../issues/new?template=suggest.yml) and a maintainer adds it.

**A daily crawler** sweeps GitHub search, the npm registry and the other public Jev
directories, scores each candidate
against weighted relevance signals, and opens a pull request with whatever changed.
Candidates that score above the noise floor but below the auto-include threshold land in
[`data/review-queue.md`](data/review-queue.md) for a human to settle. Nothing publishes
itself.

Run it locally:

```bash
GITHUB_TOKEN=$(gh auth token) node tools/fetch.js   # discover and score
node tools/render.js                                # regenerate the list in README.md
```

| Path | What it is |
| --- | --- |
| `topics/jev.json` | Search queries, scoring signals, exclusions, categories |
| `data/registry.json` | Every candidate ever seen, with star history and scores |
| `data/manual.json` | Hand-curated pins, plus permanent approve/reject overrides |
| `data/review-queue.md` | Candidates waiting on a human decision |
| `tools/` | Discovery, scoring and rendering, zero runtime dependencies |

Other directories are used as a candidate source only. Their outbound repository links
are harvested, then every repository is re-fetched from the GitHub API and scored here
from scratch, so no description or ranking is carried over. Credit where it is due:
[awesomejev.com](https://awesomejev.com/) and [jevmade.com](https://jevmade.com/).

The scoring config is deliberately blunt about the name collision: `jev` also means
Japanese encephalitis virus, so anything matching that vocabulary is rejected outright
before it can reach the list.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Short version: one entry per pull request, link to
something that runs, and say in a sentence what it does.

## License

[CC0 1.0](LICENSE) — the list itself is public domain. Linked projects keep their own licenses.
