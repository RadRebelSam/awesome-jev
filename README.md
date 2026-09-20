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
  <sub>770 stars · MIT · updated 2026-09-12</sub>
- **[typesafe-ai/typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python)** — The official Python library for the TypeSafe API  
  <sub>128 stars · Python · MIT · updated 2026-09-18</sub>

### SDKs and clients

- **[jexp/neo4jev](https://github.com/jexp/neo4jev)** — Typesafe.ai System One Model Jev navigating a Neo4j graph by using a classifier over neighbouring relationships  
  <sub>40 stars · Jupyter Notebook · MIT · updated 2026-09-18</sub>
- **[AboveColin/HA-Jev](https://github.com/AboveColin/HA-Jev)** — Ask your house a question, get a number back. Home Assistant integration for TypeSafe Jev: typed answers as sensors, four actions for automations, and a conversation agent for Assist.  
  <sub>24 stars · Python · MIT · updated 2026-09-20</sub>
- **[Bodila51/grok-bot-jev](https://github.com/Bodila51/grok-bot-jev)** — Connect TypeSafe Jev to Grok Bot as a cheap decision layer - usage gates, skill template, examples  
  <sub>23 stars · Python · MIT · updated 2026-09-20</sub>
- **[rhighs/jev-code](https://github.com/rhighs/jev-code)** — Interactive TypeScript coding CLI powered by Jev typed decisions and constrained AST generation.  
  <sub>9 stars · TypeScript · updated 2026-09-19</sub>
- **[Tangerg/typesafe-sdk-go](https://github.com/Tangerg/typesafe-sdk-go)** — Go SDK for the TypeSafe AI API — typed questions in, probability distributions out.  
  <sub>8 stars · Go · MIT · updated 2026-09-19</sub>
- **[fazlerocks/jevmail](https://github.com/fazlerocks/jevmail)** — Open-source AI email triage for Gmail. Sorts your inbox into Needs reply, Updates, Promos, Sales and Spam with Jev, TypeSafe AI's decision model, via Vercel AI Gateway. Read-only, runs locally, 1,000 emails in about a minute for 3 cents.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[romaluev/jev-ego](https://github.com/romaluev/jev-ego)** — Fast browser agent for ego lite. One TypeSafe request per step; an agent or Jev picks the move.  
  <sub>7 stars · TypeScript · updated 2026-09-17</sub>
- **[hev/reranker](https://github.com/hev/reranker)** — Use Jev (TypeSafe's System One model) as a calibrated reranker: one call, up to 30 documents, a probability per document. Apache-2.0.  
  <sub>6 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[joevidev/ui-generator-instinct-jev](https://github.com/joevidev/ui-generator-instinct-jev)** — No description provided.  
  <sub>6 stars · TypeScript · updated 2026-09-18</sub>
- **[3clyp50/a0-typesafe-ai](https://github.com/3clyp50/a0-typesafe-ai)** — TypeSafe AI Jev judgments for Agent Zero, with typed tools and probability cards.  
  <sub>5 stars · Python · MIT · updated 2026-09-17</sub>
- **[NSStudent/JevSwiftSDK](https://github.com/NSStudent/JevSwiftSDK)** — An independent, type-safe Swift SDK for TypeSafe Jev, with async/await, batching, retries, and SPM support.  
  <sub>5 stars · Swift · MIT · updated 2026-09-19</sub>
- **[saibimajdi/typesafeai-dotnet-sdk](https://github.com/saibimajdi/typesafeai-dotnet-sdk)** — Community .NET SDK for the TypeSafe AI System One API — typed noul, choice, and score questions with structured, confidence-scored answers. Not affiliated with TypeSafe AI.  
  <sub>5 stars · C# · MIT · updated 2026-09-18</sub>
- **[ticofab/scala-jev-sdk](https://github.com/ticofab/scala-jev-sdk)** — Scala SDK for Jev. No effect system bundled.  
  <sub>5 stars · Scala · Apache-2.0 · updated 2026-09-19</sub>
- **[arielweinberger/jev-autopilot](https://github.com/arielweinberger/jev-autopilot)** — This demo uses Jev from TypeSafe AI to autonomously fly a drone in a random city from point A to point B, avoiding obstacles along the way. A trip costs $0.01.  
  <sub>4 stars · TypeScript · updated 2026-09-17</sub>
- **[xingwudao/OpenJev](https://github.com/xingwudao/OpenJev)** — OpenJev: an independent Jev-inspired System One decision API based on TypeSafe.ai concepts. Choice, score and noul primitives, local mock server, Python and TypeScript SDKs. Real inference planned; not affiliated with TypeSafe AI.  
  <sub>3 stars · Python · updated 2026-09-18</sub>
- **[ajayk/jev-go-sdk](https://github.com/ajayk/jev-go-sdk)** — Dependency-free Go client for TypeSafe AI's System One API and the Jev model  
  <sub>0 stars · Go · Apache-2.0 · updated 2026-09-20</sub>
- **[kazz187/jev-sdk-go](https://github.com/kazz187/jev-sdk-go)** — Go 1.27 client for TypeSafe AI's Jev (System One) API: typed questions, typed answers  
  <sub>0 stars · Go · MIT · updated 2026-09-17</sub>

### Evaluation and judging

- **[NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review)** — Local-first MCP plugin for continuous software-quality review by AI coding agents, powered by Jev.  
  <sub>171 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[y0usaf/pi-jev](https://github.com/y0usaf/pi-jev)** — TypeSafe Jev as a decision layer for the Pi coding agent: a measured tool-call gate plus jev_ask for typed, calibrated answers  
  <sub>92 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Heman10x-NGU/openJev-verdict-2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0)** — Calibrated 151M Non-Autoregressive Decision Engine beating TypeSafe Jev & Laya on LocalLLaMA/typed-decisions (77.10% acc, 0.0636 Brier, 0.0144 ECE)  
  <sub>73 stars · Python · updated 2026-09-19</sub>
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
- **[AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks)** — Probability-aware evaluation for typed decision models: calibration, selective risk, latency, and reproducible benchmarks.  
  <sub>11 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge)** — Using Jev as an evaluator.  
  <sub>11 stars · Python · updated 2026-09-19</sub>
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
- **[Astro-Han/jev-harness](https://github.com/Astro-Han/jev-harness)** — A coding agent that filters every tool result through Jev before the model sees it, with an A/B harness measuring pass@1 and cost against the unfiltered control  
  <sub>4 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[docxology/daf-jev](https://github.com/docxology/daf-jev)** — daf-jev: composable Python toolkit for TypeSafe's Jev (System One) decision API — question builders, confidence gates, evaluator, calibration, CLI, MCP server, agent skill  
  <sub>4 stars · Python · MIT · updated 2026-09-18</sub>
- **[doeixd/jev-pref](https://github.com/doeixd/jev-pref)** — Turn your AGENTS.md preferences into a fast, Jev-powered AI linter.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench)** — JevBench v1 - a benchmark for Jev-class typed decision models: smart, cheap, fast, reliable, open.  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[RahulBalakavi/claude-code-jev](https://github.com/RahulBalakavi/claude-code-jev)** — Experimental Jev permission gate for Claude Code via OpenRouter, with reproducible latency and cost benchmarks  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[AkashPriyadarshii/jev-curate](https://github.com/AkashPriyadarshii/jev-curate)** — High-throughput synthetic & pretraining dataset sifter powered by TypeSafe AI Jev (api.typesafe.ai). Stream, filter, and score Parquet & JSONL datasets at 1,500+ rows/sec using System One typed decisions (Choice, Score, Noul).  
  <sub>3 stars · Rust · MIT · updated 2026-09-18</sub>
- **[AntonioCoppe/jev-harness](https://github.com/AntonioCoppe/jev-harness)** — Decision harness for TypeSafe Jev — confidence gates, shadow mode, recipes, and evals. Claude CLI 48.9s → Jev 1.3s on the same row-filter job.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[realZachi/jevtest](https://github.com/realZachi/jevtest)** — Semantic test matchers for Vitest and Jest, powered by TypeSafe's Jev model. Write expectations in plain English, get calibrated probabilities back.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>

### Guardrails and safety

- **[DevMortimer/pi-warden](https://github.com/DevMortimer/pi-warden)** — Guardrails for Pi built on pi-typesafe that steer the agent instead of interrupting you: Jev judges irreversible and off-task tool calls, detects stuck loops, checks unverified done claims, flags slop  
  <sub>96 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[shiftynick/jev-axi](https://github.com/shiftynick/jev-axi)** — Agent-ergonomic CLI for TypeSafe's Jev: fast calibrated judgments (pick, rate, check, rank, triage, guard) from the shell  
  <sub>17 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Nasrallah-AL/jev-cli](https://github.com/Nasrallah-AL/jev-cli)** — Command-line tool for TypeSafe's Jev AI model  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[leepokai/jev-guard](https://github.com/leepokai/jev-guard)** — Auto mode for every coding agent, built on Jev: risk-scores every tool call with session context (deny / ask / allow), flags prompt injection in results, checks skills and plugins. Claude Code, Codex, Copilot, Gemini, Cursor, pi, OpenCode, ACP.  
  <sub>10 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[nexibeo/jev-cookbook](https://github.com/nexibeo/jev-cookbook)** — Practical, tested recipes for TypeSafe's Jev decision model on OpenRouter: support triage, database indexing, file organizing, tagging, taxonomies, dedupe, PII detection, extraction, search re-ranking and a browser agent.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[JularDepick/Jev-Examiner](https://github.com/JularDepick/Jev-Examiner)** — An AI content moderation workflow powered by the [TypeSafe/Jev model](https://typesafe.ai).  
  <sub>0 stars · Apache-2.0 · updated 2026-09-20</sub>

### Infrastructure and tooling

- **[thruwire/foreman](https://github.com/thruwire/foreman)** — Software factory foreman based on TypeSafe's Jev model  
  <sub>408 stars · Python · MIT · updated 2026-09-19</sub>
- **[gargpratyush/jev-router](https://github.com/gargpratyush/jev-router)** — Route to the cheapest model in claude code for your task using jev-router  
  <sub>214 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[sutro-sh/jev-align](https://github.com/sutro-sh/jev-align)** — Build calibrated AI classifiers from human feedback using Jev and GEPA.  
  <sub>161 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[jkudish/jev-browser](https://github.com/jkudish/jev-browser)** — Browser use using Typesafe's Jev model  
  <sub>156 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jkudish/jev-mcp](https://github.com/jkudish/jev-mcp)** — Fast, cheap, typed judgments from TypeSafe's Jev model, as MCP tools.  
  <sub>121 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[dbreunig/building-with-jev-skill](https://github.com/dbreunig/building-with-jev-skill)** — A skill for writing and improving programs that call Jev, TypeSafe's System One model  
  <sub>119 stars · updated 2026-09-17</sub>
- **[itsmostafa/typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp)** — mcp connector to give your AI agent direct access to typesafe ai's jev model  
  <sub>118 stars · Go · MIT · updated 2026-09-20</sub>
- **[Dicklesworthstone/skillranker](https://github.com/Dicklesworthstone/skillranker)** — Rust CLI powered by Jev from TypeSafe.ai that ranks agent skills for the next step using live session context. Includes Claude Code hooks, structured JSON, abstention, and local feedback. Requires a TypeSafe API key.  
  <sub>69 stars · Rust · updated 2026-09-20</sub>
- **[yusukebe/hono-jev-router](https://github.com/yusukebe/hono-jev-router)** — Route HTTP requests by meaning. A semantic router for Hono powered by Jev.  
  <sub>39 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[mizzlelover/jev-hub](https://github.com/mizzlelover/jev-hub)** — JEV HUB · X 上关于 TypeSafe AI「系统一模型」Jev 的长文与演示视频聚合（保留原链与作者）｜ 谁是专家 出品  
  <sub>20 stars · CSS · updated 2026-09-19</sub>
- **[burnigtm/jev-mcp](https://github.com/burnigtm/jev-mcp)** — MCP server that puts TypeSafe Jev on the coding loop in Cursor, Codex, and any MCP client  
  <sub>19 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[TheoOliveira/pi-jev](https://github.com/TheoOliveira/pi-jev)** — Semantic tool routing and typed System One decisions for the Pi coding agent using TypeSafe Jev  
  <sub>18 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[AkashPriyadarshii/jev-seo](https://github.com/AkashPriyadarshii/jev-seo)** — 100% free ₹0 agent-first SEO & GEO CLI suite and MCP server in Rust replacing Semrush and OpenSEO via DuckDuckGo and TypeSafe Jev System One  
  <sub>11 stars · Rust · MIT · updated 2026-09-20</sub>
- **[Brainwires/jevwire](https://github.com/Brainwires/jevwire)** — Jev decision layer for agents: MCP server, embeddable DecisionModel library, and an escalate-only Claude Code plugin (TypeSafe AI's Jev)  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[GodsBoy/jev-agent-skill-router](https://github.com/GodsBoy/jev-agent-skill-router)** — Typed, confidence-aware agent skill routing with TypeSafe Jev.  
  <sub>8 stars · Python · MIT · updated 2026-09-16</sub>
- **[shitianfang/jev-use](https://github.com/shitianfang/jev-use)** — Claude Code / Codex / pi plugin that hands agent steps needing no text output to Jev (TypeSafe's judgment model) — measured p50 ~230 ms and ~$0.02 per 1,000 judgments, with typed escalation back to the LLM  
  <sub>8 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[kylemclaren/jevql](https://github.com/kylemclaren/jevql)** — Semantic SQL for Postgres, powered by Jev  
  <sub>7 stars · Go · MIT · updated 2026-09-19</sub>
- **[win4r/jev-skill-suggester](https://github.com/win4r/jev-skill-suggester)** — 用 TypeSafe Jev 推荐已安装 Skill / Bounded installed-skill recommendations with TypeSafe Jev. Python CLI, Codex skill, bilingual docs and live examples.  
  <sub>7 stars · Python · MIT · updated 2026-09-19</sub>
- **[sharziki/semdecide](https://github.com/sharziki/semdecide)** — Typed semantic decisions for Unix pipelines and CI, powered by TypeSafe AI Jev.  
  <sub>6 stars · Python · MIT · updated 2026-09-16</sub>
- **[tumf/jev-cli](https://github.com/tumf/jev-cli)** — Small dependency-free CLI for TypeSafe Jev  
  <sub>6 stars · Python · MIT · updated 2026-09-19</sub>
- **[trungdq88/jev-tetris](https://github.com/trungdq88/jev-tetris)** — Jev play Tetris in real-time against other AI models  
  <sub>5 stars · JavaScript · updated 2026-09-19</sub>
- **[AkashPriyadarshii/jev-superpowers](https://github.com/AkashPriyadarshii/jev-superpowers)** — Systematic software development framework for AI coding agents upgraded with TypeSafe Jev System One typed decisions  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[davila7/jev-explained](https://github.com/davila7/jev-explained)** — Jev Explained  
  <sub>4 stars · TypeScript · updated 2026-09-19</sub>
- **[Peu77/JevFind](https://github.com/Peu77/JevFind)** — Fast semantic code search powered by Jev. Find the relevant files, line ranges, and snippets  
  <sub>4 stars · Rust · MIT · updated 2026-09-19</sub>
- **[utk2103/jev-studio](https://github.com/utk2103/jev-studio)** — if you're experimenting with jev it will be easier from here  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[shaharia-lab/jev-cli](https://github.com/shaharia-lab/jev-cli)** — Interact with "Jev" model from TypeSafe AI  
  <sub>3 stars · Rust · Apache-2.0 · updated 2026-09-20</sub>
- **[gorock007/jev-atlas](https://github.com/gorock007/jev-atlas)** — An independent, evidence-first field guide to Jev (TypeSafe AI's System One model) — for people and for coding agents. Not affiliated with TypeSafe AI.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>

### Examples and templates

- **[devagrawal09/jev-review](https://github.com/devagrawal09/jev-review)** — A staged code-review workflow and local dashboard built with TypeSafe Jev.  
  <sub>366 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[kevinbadi/jev-voice](https://github.com/kevinbadi/jev-voice)** — Talk to your Mac. Local whisper.cpp + one Jev (TypeSafe) call per command + macOS automation.  
  <sub>23 stars · Python · MIT · updated 2026-09-18</sub>
- **[TypeSafeAI/typesafe-playground](https://github.com/TypeSafeAI/typesafe-playground)** — Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.  
  <sub>14 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[BorisLeMeec/jev](https://github.com/BorisLeMeec/jev)** — A claude code plugin for jev  
  <sub>10 stars · Go · MIT · updated 2026-09-18</sub>
- **[altryne/jevify](https://github.com/altryne/jevify)** — An agent skill to discover TypeSafe Jev opportunities, design typed questions, and learn from recent community experiments.  
  <sub>9 stars · Python · MIT · updated 2026-09-17</sub>
- **[BoundaryML/feelings](https://github.com/BoundaryML/feelings)** — .feels() on anything — the AI if statement as a real, typed method. Jev + BAML.  
  <sub>8 stars · BAML · updated 2026-09-19</sub>
- **[khordoo/jev-reflex-autonomy-lab](https://github.com/khordoo/jev-reflex-autonomy-lab)** — Multi-drone autonomy lab demonstrating TypeSafe Jev reflex decisions with optional System 2 strategy guidance.  
  <sub>8 stars · TypeScript · updated 2026-09-19</sub>
- **[parth-kp/jev-mail-classifier](https://github.com/parth-kp/jev-mail-classifier)** — Classify your inbox with Jev (TypeSafe's System One model) — tag, move, flag, and notify, all config-driven.  
  <sub>8 stars · Python · MIT · updated 2026-09-19</sub>
- **[ethanplusai/jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch)** — Filter any live Twitch chat with Jev: a bring-your-own-key Chrome extension  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-19</sub>
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
- **[codaaiteam/jev-typesafe-ai](https://github.com/codaaiteam/jev-typesafe-ai)** — Unofficial developer notes & examples for Jev, TypeSafe AI's System One model. Try it free: jevtypesafeai.com  
  <sub>0 stars · updated 2026-09-19</sub>

### Reading and explainers

- **[DataCamp — Jev: TypeSafe's System One model](https://www.datacamp.com/blog/system-one-models-jev)** — Longer explainer on the model class, the typed question format and where it fits.
- **[LangChain — Building a harness with Jev](https://www.langchain.com/blog/building-a-harness-with-jev)** — Walkthrough of wiring Jev into an agent harness, including the jev-as-a-judge experiment.
- **[TechCrunch — A new kind of AI model from a ChatGPT inventor](https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/)** — Launch coverage and context on TypeSafe AI's seed round and early adopters.
- **[The Register — TypeSafe AI debuts model for machines that plays Doom](https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711)** — Coverage of the launch demo, with a sceptical read on the performance claims.
- **[kshetrajna12/reflex](https://github.com/kshetrajna12/reflex)** — A small open decision model: state + typed questions -> calibrated probabilities. A Jev / System One re-creation on Qwen3.5.  
  <sub>79 stars · Python · MIT · updated 2026-09-20</sub>
- **[deepanwadhwa/OpenDecision](https://github.com/deepanwadhwa/OpenDecision)** — OpenDecision is an open-source semantic decision engine like typesafe's jev.  
  <sub>29 stars · Python · Apache-2.0 · updated 2026-09-19</sub>

### Everything else

- **[kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier)** — Tax document page classifier built on Jev decisions. 100% strict accuracy across 261 IRS forms, ~$0.001 per page.  
  <sub>271 stars · TypeScript · Apache-2.0 · updated 2026-09-18</sub>
- **[superagents-lab/jev-search](https://github.com/superagents-lab/jev-search)** — Search the web with TypeSafe's Jev: source selection, query understanding and relevance ranking. Built with Search1API.  
  <sub>244 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[realZachi/pg-jev](https://github.com/realZachi/pg-jev)** — Ask your Postgres tables questions in plain language. A PostgreSQL extension powered by TypeSafe's Jev.  
  <sub>225 stars · Shell · updated 2026-09-18</sub>
- **[Mapika/decider](https://github.com/Mapika/decider)** — One-pass typed decisions with calibrated probabilities (System One style model), fine-tuned from Qwen3.5-2B  
  <sub>99 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[uehaj/jev-semgrep](https://github.com/uehaj/jev-semgrep)** — grep by meaning, across languages. TypeSafe Jev scores every line against a meaning; combine meanings with AND/OR/NOT. 意味で探す grep。日本語で英語を、英語で日本語を検索できる  
  <sub>96 stars · JavaScript · updated 2026-09-19</sub>
- **[giuliosmall/pg_typesafe](https://github.com/giuliosmall/pg_typesafe)** — Pre-alpha PostgreSQL extension for TypeSafe AI (Jev) categorical classification  
  <sub>79 stars · C · MIT · updated 2026-09-18</sub>
- **[r-ms/mini-jev](https://github.com/r-ms/mini-jev)** — mini-Jev: what a Jev-style typed-decision interface looks like on a frozen Qwen3-4B — read the option letter's logits instead of generating JSON. Preregistered experiment, results, teaching bench.  
  <sub>24 stars · Python · MIT · updated 2026-09-18</sub>
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
- **[atarikcaliskan/jevball](https://github.com/atarikcaliskan/jevball)** — 22 Jev models, one ball: a 3D football match where every player is its own Jev (TypeSafe AI System One) decision. Watch, or take over the number 9.  
  <sub>3 stars · JavaScript · updated 2026-09-19</sub>
- **[AboveColin/jevclient](https://github.com/AboveColin/jevclient)** — Async Python client for TypeSafe Jev. Typed questions in, probabilities and choices out, no prose to parse.  
  <sub>1 stars · Python · MIT · updated 2026-09-17</sub>
- **[WallerChen/jev-measured](https://github.com/WallerChen/jev-measured)** — Measured cost, latency and raw output from the live Jev API (TypeSafe AI System One model) across 8 use cases — reproducible  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>

### Other lists and directories

- **[Anil-matcha/awesome-jev-by-typesafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe)** — Evidence-backed use cases, patterns, prompts, and starter code for TypeSafe Jev — a System One model for fast, typed, confidence-aware decisions in software.  
  <sub>641 stars · Python · MIT · updated 2026-09-20</sub>
- **[yibie/awesome-jev](https://github.com/yibie/awesome-jev)** — A curated list of public projects, integrations, and discussions built on Jev — TypeSafe AI's System One model for typed decisions.  
  <sub>412 stars · Python · updated 2026-09-20</sub>
- **[AbdelStark/awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe)** — A curated list of official resources and community projects for TypeSafe, System One models, and Jev.  
  <sub>352 stars · CSS · MIT · updated 2026-09-19</sub>
- **[v-modal/awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools)** — A curated list of tools  built for Jev — TypeSafe AI's System One model for typed decisions.  
  <sub>276 stars · updated 2026-09-19</sub>
- **[cobanov/awesome-jev](https://github.com/cobanov/awesome-jev)** — A curated, source-backed list of projects built with Jev, TypeSafe AI's System One model for typed decisions.  
  <sub>218 stars · CC0-1.0 · updated 2026-09-20</sub>
- **[fatwang2/awesome-jev](https://github.com/fatwang2/awesome-jev)** — A source-backed Jev project directory with a reusable Jev-only GitHub review workflow.  
  <sub>166 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[logicrw/awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects)** — Awesome Jev: source-backed open-source ecosystem radar, plain-language project discovery, and automatic GitHub sync  
  <sub>132 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[AnotiaWang/awesome-jev](https://github.com/AnotiaWang/awesome-jev)** — A curated list of awesome Jev / TypeSafe System One applications, libraries, and resources.  
  <sub>87 stars · CC0-1.0 · updated 2026-09-20</sub>
- **[hellogumbo/awesome-jev](https://github.com/hellogumbo/awesome-jev)** — A community directory of projects built on Jev, TypeSafe AI's System One model.  
  <sub>77 stars · JavaScript · CC0-1.0 · updated 2026-09-19</sub>
- **[OmniJev/awesome-jev](https://github.com/OmniJev/awesome-jev)** — 🔥🔥 Papers, open reproductions and independent evaluations behind System One models and Jev.  
  <sub>71 stars · JavaScript · updated 2026-09-20</sub>

<sub>10 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

---

<sub>141 entries · last updated 2026-09-20 · 666 candidates in the [review queue](data/review-queue.md) · generated by [`tools/fetch.js`](tools/fetch.js)</sub>

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

**A daily crawler** sweeps GitHub search and the npm registry, scores each candidate
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

The scoring config is deliberately blunt about the name collision: `jev` also means
Japanese encephalitis virus, so anything matching that vocabulary is rejected outright
before it can reach the list.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Short version: one entry per pull request, link to
something that runs, and say in a sentence what it does.

## License

[CC0 1.0](LICENSE) — the list itself is public domain. Linked projects keep their own licenses.
