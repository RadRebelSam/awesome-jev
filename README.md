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
  <sub>810 stars · MIT · updated 2026-09-12</sub>
- **[typesafe-ai/typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js)** — The official TypeScript/JavaScript library for the TypeSafe API  
  <sub>168 stars · TypeScript · MIT · updated 2026-09-15</sub>
- **[typesafe-ai/typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python)** — The official Python library for the TypeSafe API  
  <sub>131 stars · Python · MIT · updated 2026-09-18</sub>

### SDKs and clients

- **[razorback16/openjev](https://github.com/razorback16/openjev)** — Open, Jev-compatible System One decision server on DiffusionGemma  
  <sub>148 stars · Python · Apache-2.0 · updated 2026-09-18</sub>
- **[jexp/neo4jev](https://github.com/jexp/neo4jev)** — Typesafe.ai System One Model Jev navigating a Neo4j graph by using a classifier over neighbouring relationships  
  <sub>41 stars · Jupyter Notebook · MIT · updated 2026-09-18</sub>
- **[Bodila51/grok-bot-jev](https://github.com/Bodila51/grok-bot-jev)** — Connect TypeSafe Jev to Grok Bot as a cheap decision layer - usage gates, skill template, examples  
  <sub>26 stars · Python · MIT · updated 2026-09-20</sub>
- **[AboveColin/HA-Jev](https://github.com/AboveColin/HA-Jev)** — Ask your house a question, get a number back. Home Assistant integration for TypeSafe Jev: typed answers as sensors, four actions for automations, and a conversation agent for Assist.  
  <sub>24 stars · Python · MIT · updated 2026-09-20</sub>
- **[sorrycc/typesafe-snake](https://github.com/sorrycc/typesafe-snake)** — Snake auto-played by TypeSafe's Jev model: one System One choice per tick, legal moves and facts generated in code  
  <sub>18 stars · TypeScript · updated 2026-09-17</sub>
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
- **[TimothyZhang7/open-decisions](https://github.com/TimothyZhang7/open-decisions)** — Typed decisions from local open models. Python SDK, agent routing, and experimental Tetris. MIT.  
  <sub>3 stars · Python · MIT · updated 2026-09-18</sub>
- **[xingwudao/OpenJev](https://github.com/xingwudao/OpenJev)** — OpenJev: an independent Jev-inspired System One decision API based on TypeSafe.ai concepts. Choice, score and noul primitives, local mock server, Python and TypeScript SDKs. Real inference planned; not affiliated with TypeSafe AI.  
  <sub>3 stars · Python · updated 2026-09-18</sub>
- **[cole-gillespie/typesafe-go](https://github.com/cole-gillespie/typesafe-go)** — unofficial go SDK for typesafe AI, with typed answers, retries, and context support  
  <sub>2 stars · Go · MIT · updated 2026-09-17</sub>
- **[fgn/jevgo](https://github.com/fgn/jevgo)** — Go client for TypeSafe AI's System One API (Jev), with optional Langfuse instrumentation  
  <sub>2 stars · Go · MIT · updated 2026-09-17</sub>
- **[gudcks0305/jev-java](https://github.com/gudcks0305/jev-java)** — Unofficial Java SDK for TypeSafe Jev and Vercel AI Gateway, with Spring Boot and WebClient support  
  <sub>2 stars · Java · MIT · updated 2026-09-20</sub>
- **[Hawxy/TypeSafeAI.Net](https://github.com/Hawxy/TypeSafeAI.Net)** — .NET SDK for the TypeSafe AI platform  
  <sub>2 stars · C# · Apache-2.0 · updated 2026-09-19</sub>
- **[mzainzulifqar/jev-php-sdk](https://github.com/mzainzulifqar/jev-php-sdk)** — PHP SDK for TypeSafe's Jev: send text and typed questions, get typed answers with calibrated confidence. PHP 8.1+, works with any PSR-18 client, Laravel 8–13.  
  <sub>2 stars · PHP · MIT · updated 2026-09-18</sub>
- **[opaielsheikh/typesafe-migration-guard](https://github.com/opaielsheikh/typesafe-migration-guard)** — Automated database migration safety reviewer powered by TypeSafe AI (Jev System One model)  
  <sub>2 stars · TypeScript · updated 2026-09-17</sub>
- **[portlandhodl/jev-cli](https://github.com/portlandhodl/jev-cli)** — No description provided.  
  <sub>2 stars · Rust · Apache-2.0 · updated 2026-09-18</sub>
- **[Premo-Cloud/typesafe-sdk-java](https://github.com/Premo-Cloud/typesafe-sdk-java)** — Community Java client for the TypeSafe System One API (unofficial)  
  <sub>2 stars · Java · MIT · updated 2026-09-19</sub>
- **[simota/tenbin](https://github.com/simota/tenbin)** — MCP server and agent skill for the TypeSafe AI System One API (Jev): decompose a judgment into Choice / Score / Noul questions, lint them, measure on labelled data, and put calibrated thresholds in code  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[tontoko/jev-browser](https://github.com/tontoko/jev-browser)** — One grounded Jev/Playwright core: typed SDK, persistent CLI, and MCP server with native browser operations and deterministic assertions.  
  <sub>2 stars · JavaScript · Apache-2.0 · updated 2026-09-19</sub>
- **[Barneyjm/decision-circuits](https://github.com/Barneyjm/decision-circuits)** — Decision circuits: typed questions to a System One model, calibrated probabilities back, gates in code. Zero-dependency Python SDK with LangChain, OpenAI Agents, and Claude Agent SDK integrations.  
  <sub>1 stars · Python · MIT · updated 2026-09-20</sub>
- **[binnash/typesafe-sdk](https://github.com/binnash/typesafe-sdk)** — PHP & Laravel SDK for TypeSafe AI's JEV Model series  
  <sub>1 stars · PHP · updated 2026-09-18</sub>
- **[guillemus/jev-go](https://github.com/guillemus/jev-go)** — Unofficial Go SDK for TypeSafe AI's Jev API  
  <sub>1 stars · Go · updated 2026-09-17</sub>

<sub>31 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Framework integrations

- **[erendikmenn/jev-rag-benchmark](https://github.com/erendikmenn/jev-rag-benchmark)** — Reproducible benchmark for measuring Jev reranking quality, latency, and cost in RAG  
  <sub>6 stars · Python · MIT · updated 2026-09-19</sub>
- **[WiktorB2004/llama-index-jev](https://github.com/WiktorB2004/llama-index-jev)** — LlamaIndex reranker + router powered by TypeSafe Jev — typed scores/choices, cheaper than LLM-as-judge.  
  <sub>3 stars · Python · MIT · updated 2026-09-18</sub>
- **[EmreKaplaner/rag-jev](https://github.com/EmreKaplaner/rag-jev)** — Make room for useful evidence. Inspectable context selection for RAG, with Jev reranking and open benchmark studies.  
  <sub>2 stars · Python · MIT · updated 2026-09-19</sub>
- **[jms-dcksn/jev-pii-guardrail](https://github.com/jms-dcksn/jev-pii-guardrail)** — A UiPath coded agent with a custom PII detection guardrail on the LLM boundary, built on the TypeSafe Jev model as a LangChain awrap_model_call middleware.  
  <sub>0 stars · Python · updated 2026-09-18</sub>

### Evaluation and judging

- **[NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review)** — Local-first MCP plugin for continuous software-quality review by AI coding agents, powered by Jev.  
  <sub>172 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[y0usaf/pi-jev](https://github.com/y0usaf/pi-jev)** — TypeSafe Jev as a decision layer for the Pi coding agent: a measured tool-call gate plus jev_ask for typed, calibrated answers  
  <sub>97 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Heman10x-NGU/openJev-verdict-2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0)** — Calibrated 151M Non-Autoregressive Decision Engine beating TypeSafe Jev & Laya on LocalLLaMA/typed-decisions (77.10% acc, 0.0636 Brier, 0.0144 ECE)  
  <sub>95 stars · Python · updated 2026-09-19</sub>
- **[ChetasLua/jevmeter](https://github.com/ChetasLua/jevmeter)** — Put a live Jev (TypeSafe) meter on any video: every sentence scored, rendered as a 16:9 edit  
  <sub>70 stars · Python · MIT · updated 2026-09-17</sub>
- **[realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock)** — 🧹 Fun project: a Chrome extension that asks a tiny AI decision model (TypeSafe Jev) "is this DOM element an ad?" and pops it off the page. BYOK, no backend, not a real ad blocker.  
  <sub>58 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[kbhuw/jev-sift](https://github.com/kbhuw/jev-sift)** — Classify first. Read selectively. A portable agent plugin and MCP tool for batch text classification.  
  <sub>46 stars · JavaScript · updated 2026-09-18</sub>
- **[Heman10x-NGU/Verdict-open-jev](https://github.com/Heman10x-NGU/Verdict-open-jev)** — Non-autoregressive decision engine on ModernBERT (151M) with calibrated uncertainty (RLCD), TypeSafe AI Jev benchmark audit, and in-browser WebGPU playground  
  <sub>29 stars · Python · updated 2026-09-18</sub>
- **[GhalebDweikat/winnow](https://github.com/GhalebDweikat/winnow)** — A calibrated context sieve for Claude Code: every tool result is judged by a System One model before it enters context.  
  <sub>26 stars · Python · MIT · updated 2026-09-19</sub>
- **[myc0576/SmartMoney-Cub](https://github.com/myc0576/SmartMoney-Cub)** — Read-only trading journal and review harness: Jev typed judgments, agent integration, and a reproducible finance benchmark. No orders, no advice.  
  <sub>24 stars · Python · MIT · updated 2026-09-20</sub>
- **[rorshopping/jev-on-a-laptop](https://github.com/rorshopping/jev-on-a-laptop)** — Unofficial study: Jev-style parallel typed decisions on stock 1.5B-8B models on an Apple Silicon laptop. Benchmarks, research notes, and a Hugging Face Space demo.  
  <sub>19 stars · Python · updated 2026-09-17</sub>
- **[Zaious/jev-capability-atlas](https://github.com/Zaious/jev-capability-atlas)** — Independent, evidence-based map of when TypeSafe's Jev actually holds up vs. breaks down — real API-call receipts, not a leaderboard. 中文為主的雙語 repo。  
  <sub>19 stars · Python · updated 2026-09-20</sub>
- **[compozy/yoshi](https://github.com/compozy/yoshi)** — Context-pruning proxy for Claude Code and Codex: Jev judges which history is still needed, measured not claimed. POC here now, heading soon into https://github.com/compozy/compozy  
  <sub>18 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[DevMortimer/pi-typesafe](https://github.com/DevMortimer/pi-typesafe)** — TypeSafe decisions for Pi: batched evaluation tool, terminal playground, and typed API for extension authors  
  <sub>18 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[ikermoel/open-alternative-jev](https://github.com/ikermoel/open-alternative-jev)** — Open-source alternative to TypeSafe's Jev: a System One style model layer that gives typed, calibrated decisions from any open-weights LLM in one forward pass (HF + vLLM), with honest benchmarks  
  <sub>16 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge)** — Using Jev as an evaluator.  
  <sub>13 stars · Python · updated 2026-09-19</sub>
- **[jcpsimmons/jev-macos-loop](https://github.com/jcpsimmons/jev-macos-loop)** — Open-source macOS AI computer use and native GUI automation on Apple silicon. Jev + OmniParser CoreML + Apple Vision OCR. Bring your own OpenRouter, Vercel AI Gateway, or TypesafeAI token.  
  <sub>13 stars · JavaScript · AGPL-3.0 · updated 2026-09-18</sub>
- **[AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks)** — Probability-aware evaluation for typed decision models: calibration, selective risk, latency, and reproducible benchmarks.  
  <sub>11 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[madeye/pi-jev](https://github.com/madeye/pi-jev)** — Jev-assisted file retrieval and request caching for faster Pi workflows  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[unicodeveloper/jevocks](https://github.com/unicodeveloper/jevocks)** — Everyday Stocks Status with Jev  
  <sub>10 stars · TypeScript · updated 2026-09-18</sub>
- **[imMamdouhaboammar/fable-jev](https://github.com/imMamdouhaboammar/fable-jev)** — ⚡ Sub-100ms cognitive reflexes for autonomous coding agents. Powered by TypeSafe AI's Jev & get-fable.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[abhixhek/jevcal](https://github.com/abhixhek/jevcal)** — Stop guessing confidence thresholds: calibrate, threshold, and drift-check typed decision models (TypeSafe Jev) against an LLM teacher.  
  <sub>8 stars · Python · MIT · updated 2026-09-18</sub>
- **[carlaiau/jev-reranking](https://github.com/carlaiau/jev-reranking)** — Search engine experimentation on the TREC collections. Currently focused on zero-shot reranking implementations with typesafe.ai's JEV model  
  <sub>7 stars · Python · MIT · updated 2026-09-18</sub>
- **[cablehead/jev.nu](https://github.com/cablehead/jev.nu)** — Nushell module for the TypeSafe System One API: typed decisions with calibrated probabilities  
  <sub>6 stars · Nushell · MIT · updated 2026-09-19</sub>
- **[harshwasan/pi-jev-sentinel](https://github.com/harshwasan/pi-jev-sentinel)** — Pi coding-agent extension: TypeSafe Jev checks for tool calls, tool outputs and replies (prompt injection, approvals, secret scrubbing, task pinning)  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[arunav25/jev-mcp](https://github.com/arunav25/jev-mcp)** — Connect JEV to MCP clients and compare its judgments against general-purpose LLMs using shared datasets and measurable accuracy.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench)** — JevBench v1 - a benchmark for Jev-class typed decision models: smart, cheap, fast, reliable, open.  
  <sub>5 stars · Python · MIT · updated 2026-09-20</sub>
- **[mahlernim/jev-korean-benchmark](https://github.com/mahlernim/jev-korean-benchmark)** — Reproducible early-access evaluation of Jev on Korean understanding and medical text, with runtime and cost evidence  
  <sub>5 stars · Python · updated 2026-09-17</sub>
- **[AkashPriyadarshii/jev-curate](https://github.com/AkashPriyadarshii/jev-curate)** — High-throughput synthetic & pretraining dataset sifter powered by TypeSafe AI Jev (api.typesafe.ai). Stream, filter, and score Parquet & JSONL datasets at 1,500+ rows/sec using System One typed decisions (Choice, Score, Noul).  
  <sub>4 stars · Rust · MIT · updated 2026-09-18</sub>
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
- **[AntonioCoppe/jev-harness](https://github.com/AntonioCoppe/jev-harness)** — Decision harness for TypeSafe Jev — confidence gates, shadow mode, recipes, and evals. Claude CLI 48.9s → Jev 1.3s on the same row-filter job.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[buchmark/claude-jev](https://github.com/buchmark/claude-jev)** — Claude Code plugin that scores review findings, debug hypotheses and design options with TypeSafe's Jev — calibrated probabilities instead of one more opinion.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[Mintzs/jevify](https://github.com/Mintzs/jevify)** — An optimized inference engine to turn LLMs into Jev-like machines: optimized for quick, lightweight, and accurate decision-making, classification, and scoring  
  <sub>3 stars · Python · updated 2026-09-19</sub>
- **[Nyarlathoteppppp/pi-jev-context](https://github.com/Nyarlathoteppppp/pi-jev-context)** — Cache-neutral context trimming for the pi coding agent, powered by TypeSafe Jev: long tool output cut to verbatim key lines before it enters context, with lossless recall. Measured, with pre-registered benchmarks.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[shaharia-lab/jev-cli](https://github.com/shaharia-lab/jev-cli)** — Interact with "Jev" model from TypeSafe AI  
  <sub>3 stars · Rust · Apache-2.0 · updated 2026-09-20</sub>
- **[antiyro/jevdroid](https://github.com/antiyro/jevdroid)** — A typed Python framework for controlling Android over ADB with Jev.  
  <sub>2 stars · Python · MIT · updated 2026-09-19</sub>

<sub>48 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Guardrails and safety

- **[DevMortimer/pi-warden](https://github.com/DevMortimer/pi-warden)** — Guardrails for Pi built on pi-typesafe that steer the agent instead of interrupting you: Jev judges irreversible and off-task tool calls, detects stuck loops, checks unverified done claims, flags slop  
  <sub>97 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[brainstormity/Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot)** — No description provided.  
  <sub>36 stars · Python · updated 2026-09-18</sub>
- **[jomatsu/pi-jev-auto-mode](https://github.com/jomatsu/pi-jev-auto-mode)** — Jev (TypeSafe System One) backed auto mode for the Pi coding agent: semantically auto-approves bash, write, and edit tool calls and fails closed when a decision cannot be made.  
  <sub>17 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[shiftynick/jev-axi](https://github.com/shiftynick/jev-axi)** — Agent-ergonomic CLI for TypeSafe's Jev: fast calibrated judgments (pick, rate, check, rank, triage, guard) from the shell  
  <sub>17 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[leepokai/jev-guard](https://github.com/leepokai/jev-guard)** — Auto mode for every coding agent, built on Jev: risk-scores every tool call with session context (deny / ask / allow), flags prompt injection in results, checks skills and plugins. Claude Code, Codex, Copilot, Gemini, Cursor, pi, OpenCode, ACP.  
  <sub>11 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[Nasrallah-AL/jev-cli](https://github.com/Nasrallah-AL/jev-cli)** — Command-line tool for TypeSafe's Jev AI model  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[nexibeo/jev-cookbook](https://github.com/nexibeo/jev-cookbook)** — Practical, tested recipes for TypeSafe's Jev decision model on OpenRouter: support triage, database indexing, file organizing, tagging, taxonomies, dedupe, PII detection, extraction, search re-ranking and a browser agent.  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[ItisShikhar/gg-friggin-ez](https://github.com/ItisShikhar/gg-friggin-ez)** — Fast, drop-in profanity and toxicity screener for Node.js, powered by TypeSafe AI Jev. Catches leetspeak, character spacing, and romanized profanity across languages including Kannada, Telugu, Tamil, Hindi, and Bengali. ~50-500ms latency.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[leesk212/JEV-CPU](https://github.com/leesk212/JEV-CPU)** — Run SemIf (Jev-style semantic-if decisions) on a CPU — no GPU. Reads typed option probabilities straight from an open model in one forward pass, plus a web UI.  
  <sub>2 stars · Python · MIT · updated 2026-09-19</sub>
- **[omkarghugarkar007/actiongate-jev](https://github.com/omkarghugarkar007/actiongate-jev)** — Runtime authorization and guardrails for AI-agent tool calls with deterministic policy and TypeSafe Jev via OpenRouter.  
  <sub>2 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[AkashPriyadarshii/jev-scout](https://github.com/AkashPriyadarshii/jev-scout)** — Zero-hallucination open-source repo and crate scout powered by TypeSafe AI Jev System One scoring  
  <sub>1 stars · Rust · MIT · updated 2026-09-20</sub>
- **[getexcited/stepwarden](https://github.com/getexcited/stepwarden)** — Every tool call your agent makes, checked before it runs. A Claude Code plugin that uses TypeSafe AI's Jev to verify each pending tool call against the session plan, then allows it, asks you, or blocks it. Proof of concept  
  <sub>1 stars · TypeScript · Apache-2.0 · updated 2026-09-18</sub>
- **[codaaiteam/jev-mcp](https://github.com/codaaiteam/jev-mcp)** — MCP server for Jev (TypeSafe AI's System One model) — give any agent typed, calibrated decisions: classify, score, check, gate risky tool calls. Try free: jevtypesafeai.com  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[JularDepick/Jev-Examiner](https://github.com/JularDepick/Jev-Examiner)** — An AI content moderation workflow powered by the [TypeSafe/Jev model](https://typesafe.ai).  
  <sub>0 stars · Apache-2.0 · updated 2026-09-20</sub>

### Infrastructure and tooling

- **[OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger)** — Open-source AI Trading OS, agent trading, and vibe trading, with Jev System One integration. Research, build Python strategies, backtest, and paper/live trade across crypto, stocks, and forex. Launch your own multi-tenant trading SaaS with built-in user management, billing, payments, and settlement.  
  <sub>11768 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[notque/vexjoy-agent](https://github.com/notque/vexjoy-agent)** — VexJoy AI Agent with Jev Intelligent Routing - /do routes plain-English requests to the right specialist agent and gates the work with reviews, tests, and a learning loop.  
  <sub>421 stars · Python · MIT · updated 2026-09-20</sub>
- **[thruwire/foreman](https://github.com/thruwire/foreman)** — Software factory foreman based on TypeSafe's Jev model  
  <sub>411 stars · Python · MIT · updated 2026-09-19</sub>
- **[gargpratyush/jev-router](https://github.com/gargpratyush/jev-router)** — Route to the cheapest model in claude code for your task using jev-router  
  <sub>223 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[wy-coliney/jev-browser-use](https://github.com/wy-coliney/jev-browser-use)** — 5–10x faster browser operations: Jev clicks, Codex thinks and verifies. Built at EZCollegeApp.  
  <sub>213 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[sutro-sh/jev-align](https://github.com/sutro-sh/jev-align)** — Build calibrated AI classifiers from human feedback using Jev and GEPA.  
  <sub>176 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[jkudish/jev-browser](https://github.com/jkudish/jev-browser)** — Browser use using Typesafe's Jev model  
  <sub>159 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jkudish/jev-mcp](https://github.com/jkudish/jev-mcp)** — Fast, cheap, typed judgments from TypeSafe's Jev model, as MCP tools.  
  <sub>124 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[dbreunig/building-with-jev-skill](https://github.com/dbreunig/building-with-jev-skill)** — A skill for writing and improving programs that call Jev, TypeSafe's System One model  
  <sub>120 stars · updated 2026-09-17</sub>
- **[itsmostafa/typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp)** — mcp connector to give your AI agent direct access to typesafe ai's jev model  
  <sub>119 stars · Go · MIT · updated 2026-09-20</sub>
- **[Dicklesworthstone/skillranker](https://github.com/Dicklesworthstone/skillranker)** — Rust CLI powered by Jev from TypeSafe.ai that ranks agent skills for the next step using live session context. Includes Claude Code hooks, structured JSON, abstention, and local feedback. Requires a TypeSafe API key.  
  <sub>73 stars · Rust · updated 2026-09-20</sub>
- **[w3cj/jev-chat](https://github.com/w3cj/jev-chat)** — A tool calling chat bot built with Jev and no LLM.  
  <sub>48 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[yusukebe/hono-jev-router](https://github.com/yusukebe/hono-jev-router)** — Route HTTP requests by meaning. A semantic router for Hono powered by Jev.  
  <sub>39 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[Ying-Kai-Liao/jev-browser](https://github.com/Ying-Kai-Liao/jev-browser)** — Browser automation where an LLM plans and Jev (Typesafe System One) decides. Library, CLI and MCP server.  
  <sub>26 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[tacticocc/Jevbridge](https://github.com/tacticocc/Jevbridge)** — ACP and MCP adapter that bridges TypeSafe Jev with any LLM — computer use and typed decisions alongside Codex, Claude, Grok, and OpenCode.  
  <sub>25 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[mizzlelover/jev-hub](https://github.com/mizzlelover/jev-hub)** — JEV HUB · X 上关于 TypeSafe AI「系统一模型」Jev 的长文与演示视频聚合（保留原链与作者）｜ 谁是专家 出品  
  <sub>21 stars · CSS · updated 2026-09-19</sub>
- **[burnigtm/jev-mcp](https://github.com/burnigtm/jev-mcp)** — MCP server that puts TypeSafe Jev on the coding loop in Cursor, Codex, and any MCP client  
  <sub>20 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[TheoOliveira/pi-jev](https://github.com/TheoOliveira/pi-jev)** — Semantic tool routing and typed System One decisions for the Pi coding agent using TypeSafe Jev  
  <sub>18 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[mizchi/jev-playground](https://github.com/mizchi/jev-playground)** — No description provided.  
  <sub>17 stars · TypeScript · updated 2026-09-20</sub>
- **[Eriskii/ErisLint](https://github.com/Eriskii/ErisLint)** — Rust linter powered by configurable Jev rules, with a VS Code extension.  
  <sub>15 stars · Rust · AGPL-3.0 · updated 2026-09-18</sub>
- **[AkashPriyadarshii/jev-seo](https://github.com/AkashPriyadarshii/jev-seo)** — 100% free ₹0 agent-first SEO & GEO CLI suite and MCP server in Rust replacing Semrush and OpenSEO via DuckDuckGo and TypeSafe Jev System One  
  <sub>12 stars · Rust · MIT · updated 2026-09-20</sub>
- **[keltokhy/jgrep](https://github.com/keltokhy/jgrep)** — grep, but the pattern is a description. Filters lines by meaning with TypeSafe's Jev decision model: ~200 ms and a thousandth of a cent per line.  
  <sub>12 stars · Python · MIT · updated 2026-09-19</sub>
- **[blakestone-x/jev-mcp](https://github.com/blakestone-x/jev-mcp)** — MCP server for TypeSafe Jev: typed classify, score, check, match and screen for any agent, with confidence on every answer  
  <sub>11 stars · Python · MIT · updated 2026-09-16</sub>
- **[Brainwires/jevwire](https://github.com/Brainwires/jevwire)** — Jev decision layer for agents: MCP server, embeddable DecisionModel library, and an escalate-only Claude Code plugin (TypeSafe AI's Jev)  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[huntedman/JevLint](https://github.com/huntedman/JevLint)** — Configurable semantic linting powered by Jev, with file-level NOUL judgments and a magic-strings plugin.  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[socai-io/jev-social](https://github.com/socai-io/jev-social)** — Jev-powered Instagram, TikTok, and LinkedIn research: typed routing, real browser evidence, streamed post cards, video capture, and cited socai reports.  
  <sub>10 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[win4r/jev-skill-suggester](https://github.com/win4r/jev-skill-suggester)** — 用 TypeSafe Jev 推荐已安装 Skill / Bounded installed-skill recommendations with TypeSafe Jev. Python CLI, Codex skill, bilingual docs and live examples.  
  <sub>10 stars · Python · MIT · updated 2026-09-19</sub>
- **[shitianfang/jev-use](https://github.com/shitianfang/jev-use)** — Claude Code / Codex / pi plugin that hands agent steps needing no text output to Jev (TypeSafe's judgment model) — measured p50 ~230 ms and ~$0.02 per 1,000 judgments, with typed escalation back to the LLM  
  <sub>9 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[DECRUX9812/typesafe-skill-router](https://github.com/DECRUX9812/typesafe-skill-router)** — TypeSafe (Jev) skill routing for Hermes Agent: names the one skill worth loading, before the model call. Opt-in, stdlib only, ~$0.001 per routed turn.  
  <sub>8 stars · Python · MIT · updated 2026-09-20</sub>
- **[GodsBoy/jev-agent-skill-router](https://github.com/GodsBoy/jev-agent-skill-router)** — Typed, confidence-aware agent skill routing with TypeSafe Jev.  
  <sub>8 stars · Python · MIT · updated 2026-09-16</sub>
- **[jekhov/jekhov](https://github.com/jekhov/jekhov)** — Policy-bounded Jev target selection for resilient Playwright workflows  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[kylemclaren/jevql](https://github.com/kylemclaren/jevql)** — Semantic SQL for Postgres, powered by Jev  
  <sub>7 stars · Go · MIT · updated 2026-09-19</sub>
- **[AkashPriyadarshii/jev-superpowers](https://github.com/AkashPriyadarshii/jev-superpowers)** — Systematic software development framework for AI coding agents upgraded with TypeSafe Jev System One typed decisions  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[forvela/jev-agent-browser](https://github.com/forvela/jev-agent-browser)** — Fast, bounded browser agents powered by Jev and agent-browser — typed actions, research, classification, and safe orchestration.  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[sharziki/semdecide](https://github.com/sharziki/semdecide)** — Typed semantic decisions for Unix pipelines and CI, powered by TypeSafe AI Jev.  
  <sub>6 stars · Python · MIT · updated 2026-09-16</sub>
- **[tumf/jev-cli](https://github.com/tumf/jev-cli)** — Small dependency-free CLI for TypeSafe Jev  
  <sub>6 stars · Python · MIT · updated 2026-09-19</sub>
- **[trungdq88/jev-tetris](https://github.com/trungdq88/jev-tetris)** — Jev play Tetris in real-time against other AI models  
  <sub>5 stars · JavaScript · updated 2026-09-19</sub>
- **[win4r/jev-security-scan](https://github.com/win4r/jev-security-scan)** — 使用 TypeSafe Jev 审查 Skill 与 MCP 可疑行为 | Review Agent Skills and MCP code with Jev, static evidence, and explicit coverage gaps  
  <sub>5 stars · Python · MIT · updated 2026-09-19</sub>
- **[alxcrt/is-odd-jev](https://github.com/alxcrt/is-odd-jev)** — No description provided.  
  <sub>4 stars · JavaScript · updated 2026-09-17</sub>
- **[davila7/jev-explained](https://github.com/davila7/jev-explained)** — Jev Explained  
  <sub>4 stars · TypeScript · updated 2026-09-19</sub>

<sub>52 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Examples and templates

- **[devagrawal09/jev-review](https://github.com/devagrawal09/jev-review)** — A staged code-review workflow and local dashboard built with TypeSafe Jev.  
  <sub>372 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[standardagents/jevpilot](https://github.com/standardagents/jevpilot)** — A playable Three.js driving simulator with Jev-powered autopilot  
  <sub>100 stars · JavaScript · updated 2026-09-17</sub>
- **[kerpopule/hermes-jev-skills](https://github.com/kerpopule/hermes-jev-skills)** — Jev-powered model routing, memory, compaction, skill selection, computer and browser use for Hermes agents (also Claude Code and Codex)  
  <sub>88 stars · Python · MIT · updated 2026-09-20</sub>
- **[mrnugget/jev-shell-history](https://github.com/mrnugget/jev-shell-history)** — Fish-style zsh history autosuggestions ranked by Jev (TypeSafe)  
  <sub>68 stars · TypeScript · updated 2026-09-18</sub>
- **[savka777/jev-use](https://github.com/savka777/jev-use)** — Say it, and your Mac does it. A computer-use harness on Jev that reads the screen through Accessibility. Fast, no vision model  
  <sub>37 stars · Swift · MIT · updated 2026-09-19</sub>
- **[kevinbadi/jev-voice](https://github.com/kevinbadi/jev-voice)** — Talk to your Mac. Local whisper.cpp + one Jev (TypeSafe) call per command + macOS automation.  
  <sub>26 stars · Python · MIT · updated 2026-09-18</sub>
- **[ellipsis-dev/blink](https://github.com/ellipsis-dev/blink)** — Codebase search powered by Jev from @typesafe-ai  
  <sub>24 stars · TypeScript · updated 2026-09-16</sub>
- **[zhengxuyu/litjev](https://github.com/zhengxuyu/litjev)** — Turn any off-the-shelf LLM into a Jev -like decision layer  
  <sub>22 stars · Python · Apache-2.0 · updated 2026-09-18</sub>
- **[choxos/jev-reviewer](https://github.com/choxos/jev-reviewer)** — Data extraction for systematic reviews, quoted from the papers. Ask a trial report and its supplements your extraction form or a RoB 2, ROBINS-I, QUADAS-2 or TIDieR template; Jev points at the lines, every answer is a verbatim quote with its page, you check it and export the table. Files stay in your browser.  
  <sub>19 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[Dimweaker/jev-libero](https://github.com/Dimweaker/jev-libero)** — Fine-grained robot control with Jev, physics previews, and configurable LIBERO tasks.  
  <sub>14 stars · Python · MIT · updated 2026-09-20</sub>
- **[TypeSafeAI/typesafe-playground](https://github.com/TypeSafeAI/typesafe-playground)** — Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.  
  <sub>14 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[colliber/duckdb-jev](https://github.com/colliber/duckdb-jev)** — DuckDB extension: typed Jev answers as real SQL types  
  <sub>13 stars · C++ · MIT · updated 2026-09-18</sub>
- **[samdotmak/jev-recall](https://github.com/samdotmak/jev-recall)** — Retrieve by relevance, not resemblance: filter an AI assistant's memories with TypeSafe's Jev  
  <sub>13 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[BorisLeMeec/jev](https://github.com/BorisLeMeec/jev)** — A claude code plugin for jev  
  <sub>10 stars · Go · MIT · updated 2026-09-18</sub>
- **[khordoo/jev-reflex-autonomy-lab](https://github.com/khordoo/jev-reflex-autonomy-lab)** — Multi-drone autonomy lab demonstrating TypeSafe Jev reflex decisions with optional System 2 strategy guidance.  
  <sub>10 stars · TypeScript · updated 2026-09-19</sub>
- **[NanmiCoder/jev-arena](https://github.com/NanmiCoder/jev-arena)** — Jev 模型介绍与实测：通过 Choice / Score / Noul 将自然语言转为带类型的判断与概率，用于分类、评分和路由；支持与 DeepSeek 等模型对比评论打标、速度与结果，含 CSV/Excel 导入、原速回放与离线报告。  
  <sub>10 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[altryne/jevify](https://github.com/altryne/jevify)** — An agent skill to discover TypeSafe Jev opportunities, design typed questions, and learn from recent community experiments.  
  <sub>9 stars · Python · MIT · updated 2026-09-17</sub>
- **[BoundaryML/feelings](https://github.com/BoundaryML/feelings)** — .feels() on anything — the AI if statement as a real, typed method. Jev + BAML.  
  <sub>8 stars · BAML · updated 2026-09-19</sub>
- **[parth-kp/jev-mail-classifier](https://github.com/parth-kp/jev-mail-classifier)** — Classify your inbox with Jev (TypeSafe's System One model) — tag, move, flag, and notify, all config-driven.  
  <sub>8 stars · Python · MIT · updated 2026-09-20</sub>
- **[siliconkernel/vllm-jev-decison](https://github.com/siliconkernel/vllm-jev-decison)** — Classification-only typed decisions for vLLM: finite-schema candidate scoring, probabilities, and abstention. No generative fallback.  
  <sub>8 stars · Python · MIT · updated 2026-09-18</sub>
- **[Yinsongxu/LLM2Jev](https://github.com/Yinsongxu/LLM2Jev)** — Adapt local language models into Jev-compatible structured decision engines with Choice, Score, and Noul outputs   powered by prefill-only binary inference.  
  <sub>8 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[ethanplusai/jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch)** — Filter any live Twitch chat with Jev: a bring-your-own-key Chrome extension  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[kyu1204/jgrep](https://github.com/kyu1204/jgrep)** — grep for what code does, not what it's called. Semantic code search powered by TypeSafe Jev.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[OmniJev/PlayJev](https://github.com/OmniJev/PlayJev)** — 🚀🚀 A 0.8B JEV-like multimodal model playing GUI games directly from raw pixels.  
  <sub>7 stars · JavaScript · Apache-2.0 · updated 2026-09-19</sub>
- **[aabolfazl/typesafe-local](https://github.com/aabolfazl/typesafe-local)** — Inspired by TypeSafe Ai, Ask a local LLM typed questions, get calibrated probabilities instead of text. Structured output without generation or parsing. MLX / Apple Silicon.  
  <sub>6 stars · Python · MIT · updated 2026-09-18</sub>
- **[GiesN/typesafe-jev-workflow](https://github.com/GiesN/typesafe-jev-workflow)** — No description provided.  
  <sub>6 stars · Python · updated 2026-09-16</sub>
- **[inanna-malick/jev-dsl](https://github.com/inanna-malick/jev-dsl)** — Agent-first Haskell DSL for TypeSafe's Jev judgment model: typed packets, inferred types, answers under the same labels  
  <sub>6 stars · Haskell · MIT · updated 2026-09-18</sub>
- **[ranjan2829/AskJev](https://github.com/ranjan2829/AskJev)** — AskJev — Jev autopilot for any website + guard on irreversible clicks (TypeSafe System One, not Claude)  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[chy4pro/jev-for-chrome](https://github.com/chy4pro/jev-for-chrome)** — Jev for Chrome: drives the tab you are looking at with TypeSafe Jev, a sub-second decision model. Community port of browser-use/jev-ultrafast, not affiliated with TypeSafe.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[dani1005/book-aurora](https://github.com/dani1005/book-aurora)** — Jev reads a whole novel in seconds. Every passage becomes a row of colour.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[Kevthetech143/super-jev](https://github.com/Kevthetech143/super-jev)** — A small, extensible decision-to-action harness for TypeSafe Jev  
  <sub>5 stars · Python · MIT · updated 2026-09-20</sub>
- **[Reindeer-AI/pi-jev-guard](https://github.com/Reindeer-AI/pi-jev-guard)** — Check Pi code edits against repository Markdown rules with TypeSafe Jev  
  <sub>5 stars · TypeScript · updated 2026-09-19</sub>
- **[backmeupplz/jev_antispam_bot](https://github.com/backmeupplz/jev_antispam_bot)** — Minimal grammY Telegram anti-spam bot powered by TypeSafe Jev  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[mkotlikov/jev-grug](https://github.com/mkotlikov/jev-grug)** — Helping JEV speak <3  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[anxkhn/JevPlaysPokemon](https://github.com/anxkhn/JevPlaysPokemon)** — Jev plays Generation 3 Pokémon via Showdown and a real FireRed ROM.  
  <sub>3 stars · HTML · GPL-3.0 · updated 2026-09-18</sub>
- **[MartinSWDev/gen-ui](https://github.com/MartinSWDev/gen-ui)** — No description provided.  
  <sub>3 stars · TypeScript · updated 2026-09-17</sub>
- **[nickthompson480/typesafe-ai-playground](https://github.com/nickthompson480/typesafe-ai-playground)** — Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-16</sub>
- **[Bewinxed/jevgpt](https://github.com/Bewinxed/jevgpt)** — A chatbot built on a model that cannot generate text (TypeSafe AI's Jev, driven autoregressively)  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[erhanmeydan/jev2048](https://github.com/erhanmeydan/jev2048)** — TypeSafe'in Jev karar modeli gerçek bir online 2048 sitesinde oynuyor — hamle başına tek API çağrısı, tek anahtar.  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[Foadsf/jev-for-engineers](https://github.com/Foadsf/jev-for-engineers)** — Eight minimal working examples of TypeSafe's Jev (a System One model) applied to mechanical and electrical engineering: CAD/CAE/CAM routing, FEM result triage, DFM screening, BOM alignment, hallucination-proof extraction. Zero dependencies.  
  <sub>2 stars · Python · MIT · updated 2026-09-16</sub>

<sub>32 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Reading and explainers

- **[DataCamp — Jev: TypeSafe's System One model](https://www.datacamp.com/blog/system-one-models-jev)** — Longer explainer on the model class, the typed question format and where it fits.
- **[LangChain — Building a harness with Jev](https://www.langchain.com/blog/building-a-harness-with-jev)** — Walkthrough of wiring Jev into an agent harness, including the jev-as-a-judge experiment.
- **[TechCrunch — A new kind of AI model from a ChatGPT inventor](https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/)** — Launch coverage and context on TypeSafe AI's seed round and early adopters.
- **[The Register — TypeSafe AI debuts model for machines that plays Doom](https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711)** — Coverage of the launch demo, with a sceptical read on the performance claims.
- **[kshetrajna12/reflex](https://github.com/kshetrajna12/reflex)** — A small open decision model: state + typed questions -> calibrated probabilities. A Jev / System One re-creation on Qwen3.5.  
  <sub>80 stars · Python · MIT · updated 2026-09-20</sub>
- **[deepanwadhwa/OpenDecision](https://github.com/deepanwadhwa/OpenDecision)** — OpenDecision is an open-source semantic decision engine like typesafe's jev.  
  <sub>30 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[ponyo877/jev-telop-live](https://github.com/ponyo877/jev-telop-live)** — No description provided.  
  <sub>5 stars · JavaScript · updated 2026-09-19</sub>
- **[cobusgreyling/Jev](https://github.com/cobusgreyling/Jev)** — Unofficial TypeSafe Jev showcase — System One decisions, not chat.  
  <sub>3 stars · Python · MIT · updated 2026-09-19</sub>
- **[GPT-AGI/OpenJev](https://github.com/GPT-AGI/OpenJev)** — Jev-compatible System 开源Jev  
  <sub>2 stars · Python · MIT · updated 2026-09-20</sub>
- **[chris-wozniczek/jev-voice-control](https://github.com/chris-wozniczek/jev-voice-control)** — Control your Mac by voice. Speech → Jev (TypeSafe AI System One model) typed decisions → macOS actions. Menu-bar Swift app.  
  <sub>1 stars · Swift · updated 2026-09-20</sub>
- **[koki-develop/fizzbuzz-jev](https://github.com/koki-develop/fizzbuzz-jev)** — FizzBuzz powered by Jev, TypeSafe AI's System One model.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[nishioka-shinji/jev-edgar](https://github.com/nishioka-shinji/jev-edgar)** — Does Jev, a System One model returning calibrated probabilities, say anything useful about an earnings release before the market prices it?  
  <sub>0 stars · Python · updated 2026-09-18</sub>

### Everything else

- **[githubnext/localjev](https://github.com/githubnext/localjev)** — No description provided.  
  <sub>510 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier)** — Tax document page classifier built on Jev decisions. 100% strict accuracy across 261 IRS forms, ~$0.001 per page.  
  <sub>280 stars · TypeScript · Apache-2.0 · updated 2026-09-18</sub>
- **[superagents-lab/jev-search](https://github.com/superagents-lab/jev-search)** — Search the web with TypeSafe's Jev: source selection, query understanding and relevance ranking. Built with Search1API.  
  <sub>252 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[realZachi/pg-jev](https://github.com/realZachi/pg-jev)** — Ask your Postgres tables questions in plain language. A PostgreSQL extension powered by TypeSafe's Jev.  
  <sub>225 stars · Shell · updated 2026-09-18</sub>
- **[moritzkremb/jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser)** — Control a real browser by voice. Jev (TypeSafe System One) decides intent + target in ~300 ms per spoken word; Playwright acts — often before you finish the sentence.  
  <sub>127 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[Mapika/decider](https://github.com/Mapika/decider)** — One-pass typed decisions with calibrated probabilities (System One style model), fine-tuned from Qwen3.5-2B  
  <sub>102 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[uehaj/jev-semgrep](https://github.com/uehaj/jev-semgrep)** — grep by meaning, across languages. TypeSafe Jev scores every line against a meaning; combine meanings with AND/OR/NOT. 意味で探す grep。日本語で英語を、英語で日本語を検索できる  
  <sub>97 stars · JavaScript · updated 2026-09-19</sub>
- **[RomanSlack/jev-drone](https://github.com/RomanSlack/jev-drone)** — Camera-only autonomous drone in MuJoCo with a small judgment model (TypeSafe Jev) in the loop at 2.5Hz  
  <sub>80 stars · Python · MIT · updated 2026-09-17</sub>
- **[giuliosmall/pg_typesafe](https://github.com/giuliosmall/pg_typesafe)** — Pre-alpha PostgreSQL extension for TypeSafe AI (Jev) categorical classification  
  <sub>79 stars · C · MIT · updated 2026-09-18</sub>
- **[trungdq88/youtube-sponsor-detection](https://github.com/trungdq88/youtube-sponsor-detection)** — Detect youtube sponsor segment with live audio and transcript powered by Jev  
  <sub>74 stars · JavaScript · updated 2026-09-18</sub>
- **[obie/ruby_decision_model](https://github.com/obie/ruby_decision_model)** — Ruby client for decision models such as Typesafe Jev  
  <sub>45 stars · Ruby · MIT · updated 2026-09-18</sub>
- **[aowang-ai/jev-trade](https://github.com/aowang-ai/jev-trade)** — Live Jev trader on Hyperliquid  
  <sub>29 stars · TypeScript · updated 2026-09-19</sub>
- **[yikangy873-gif/jev-desktop](https://github.com/yikangy873-gif/jev-desktop)** — TypeSafe Jev action selection inside Codex Computer Use  
  <sub>27 stars · JavaScript · MIT · updated 2026-09-19</sub>
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
- **[vinilana/live-jev](https://github.com/vinilana/live-jev)** — 2D autonomous car simulation in the browser, driven by TypeSafe's Jev decision model  
  <sub>10 stars · JavaScript · updated 2026-09-18</sub>
- **[aaazzam/jev](https://github.com/aaazzam/jev)** — No description provided.  
  <sub>8 stars · Python · updated 2026-09-18</sub>
- **[anpicasso/hermes-jev-approvals](https://github.com/anpicasso/hermes-jev-approvals)** — PoC: TypeSafe Jev as the reviewer for Hermes Agent smart command approvals. 8.7x faster, 4.4x fewer prompts, measured on 153 real commands. Approvals only.  
  <sub>8 stars · Python · MIT · updated 2026-09-20</sub>
- **[cocktailpeanut/jevthoven](https://github.com/cocktailpeanut/jevthoven)** — AI Music (MIDI) generator powered by Jev  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[keeltrace/hermes-jev](https://github.com/keeltrace/hermes-jev)** — Typed System One decisions, ranking, verification, and an opt-in Hermes tool gate using TypeSafe Jev.  
  <sub>8 stars · Python · MIT · updated 2026-09-19</sub>
- **[manifoldor/xtags](https://github.com/manifoldor/xtags)** — 在 X 的时间线上，给每条帖子标出它想让你干什么。判断来自 Jev，一个只返回概率、不生成文本的模型。  
  <sub>8 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[stas4000/jev-linkmap](https://github.com/stas4000/jev-linkmap)** — Rebuild a site's internal link map in seconds with Jev, race Claude Opus 5 on the same queue, and let a deep model rewrite the rubric from the disagreements.  
  <sub>7 stars · HTML · updated 2026-09-19</sub>
- **[bohutang/sift](https://github.com/bohutang/sift)** — Chrome extension that labels every post on X (Substance · Humor · Chit-chat · Promo · Junk · AI-written) with TypeSafe Jev, and hides the ones you don't want.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[joelhooks/pi-fast-jev-compaction](https://github.com/joelhooks/pi-fast-jev-compaction)** — Pi extension: verbatim context compaction with TypeSafe Jev decisions  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[Kiln-AI/jev_jsonschema](https://github.com/Kiln-AI/jev_jsonschema)** — Run a JSON Schema through TypeSafe's Jev API, and get JSON back.  
  <sub>5 stars · Python · MIT · updated 2026-09-19</sub>
- **[sametcn99/my-stars-atlas](https://github.com/sametcn99/my-stars-atlas)** — A generated catalog of starred GitHub repositories, grouped into stable categories.  
  <sub>5 stars · TypeScript · updated 2026-09-19</sub>
- **[scale-venture-partners/riff](https://github.com/scale-venture-partners/riff)** — A small, fast prose linter: ruff-style rule codes for writing, backed by TypeSafe's Jev model  
  <sub>5 stars · Python · MIT · updated 2026-09-18</sub>
- **[1jehuang/jev-pr-labeler](https://github.com/1jehuang/jev-pr-labeler)** — Semantic GitHub PR labels using Jev's typed decisions, with conceptual scope instead of line counts  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[24601/Augustus](https://github.com/24601/Augustus)** — Agent skill: design judgment-assisted systems with TypeSafe Jev (System One). Maps Choice/Score/Noul onto decision theory, reranking, and routing. Composition algebra, question design, validation gates. MIT.  
  <sub>4 stars · Python · MIT · updated 2026-09-20</sub>
- **[Devin-AXIS/jev-dsh-decision](https://github.com/Devin-AXIS/jev-dsh-decision)** — Jev DSH 决策引擎｜面向 Agent Harness 的结构化决策插件。原生支持 DeepSeek Harness，通过 iPolloWork 支持 OpenCode、Codex Harness。  
  <sub>4 stars · JavaScript · updated 2026-09-20</sub>
- **[harshil1712/slidepilot](https://github.com/harshil1712/slidepilot)** — Voice-driven semantic auto-advance for Slidev, powered by Cloudflare Agents and TypeSafe AI Jev  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[SAGAR-TAMANG/sarvam-jev](https://github.com/SAGAR-TAMANG/sarvam-jev)** — Generation-free typed decisions on Indic LLMs. An open Jev-style inference engine on sarvam-1: constrained logit readout instead of autoregressive JSON. Runs client-side in the browser.  
  <sub>4 stars · Python · updated 2026-09-18</sub>
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

<sub>43 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Other lists and directories

- **[Anil-matcha/awesome-jev-by-typesafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe)** — Evidence-backed use cases, patterns, prompts, and starter code for TypeSafe Jev — a System One model for fast, typed, confidence-aware decisions in software.  
  <sub>656 stars · Python · MIT · updated 2026-09-20</sub>
- **[yibie/awesome-jev](https://github.com/yibie/awesome-jev)** — A curated list of public projects, integrations, and discussions built on Jev — TypeSafe AI's System One model for typed decisions.  
  <sub>443 stars · Python · updated 2026-09-20</sub>
- **[AbdelStark/awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe)** — A curated list of official resources and community projects for TypeSafe, System One models, and Jev.  
  <sub>357 stars · CSS · MIT · updated 2026-09-20</sub>
- **[v-modal/awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools)** — A curated list of tools  built for Jev — TypeSafe AI's System One model for typed decisions.  
  <sub>331 stars · updated 2026-09-19</sub>
- **[cobanov/awesome-jev](https://github.com/cobanov/awesome-jev)** — A curated, source-backed list of projects built with Jev, TypeSafe AI's System One model for typed decisions.  
  <sub>227 stars · CC0-1.0 · updated 2026-09-20</sub>
- **[fatwang2/awesome-jev](https://github.com/fatwang2/awesome-jev)** — A source-backed Jev project directory with a reusable Jev-only GitHub review workflow.  
  <sub>168 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[logicrw/awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects)** — Awesome Jev: source-backed open-source ecosystem radar, plain-language project discovery, and automatic GitHub sync  
  <sub>141 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[AnotiaWang/awesome-jev](https://github.com/AnotiaWang/awesome-jev)** — A curated list of awesome Jev / TypeSafe System One applications, libraries, and resources.  
  <sub>92 stars · CC0-1.0 · updated 2026-09-20</sub>
- **[hellogumbo/awesome-jev](https://github.com/hellogumbo/awesome-jev)** — A community directory of projects built on Jev, TypeSafe AI's System One model.  
  <sub>78 stars · JavaScript · CC0-1.0 · updated 2026-09-19</sub>
- **[OmniJev/awesome-jev](https://github.com/OmniJev/awesome-jev)** — 🔥🔥 Papers, open reproductions and independent evaluations behind System One models and Jev.  
  <sub>72 stars · JavaScript · updated 2026-09-20</sub>

<sub>15 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

---

<sub>465 entries · 271 of them not listed by the other public Jev directories · last updated 2026-09-20 · 399 candidates in the [review queue](data/review-queue.md) · generated by [`tools/fetch.js`](tools/fetch.js)</sub>

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

Every listed entry has its star count, push date, licence and archive state refreshed on
the same daily run, so the numbers under an entry are never more than a day old. An entry
whose repository is deleted, renamed or made private is dropped on the next run.

The review queue is triaged by Jev itself. Each candidate is sent as state with one typed
question — does this repository's own code call, wrap, benchmark or reimplement Jev, or
does it merely mention it — and the returned probability decides: at or above 0.75 it
joins the list, at or below 0.45 it is rejected, and anything between stays in the queue
for a human. The verdicts are kept in `data/triage.json`.

Run it locally:

```bash
GITHUB_TOKEN=$(gh auth token) node tools/fetch.js     # discover and score
GITHUB_TOKEN=$(gh auth token) node tools/refresh.js   # refresh stars and push dates
node tools/render.js                                  # regenerate the list in README.md
```

| Path | What it is |
| --- | --- |
| `topics/jev.json` | Search queries, scoring signals, exclusions, categories |
| `data/registry.json` | Every candidate ever seen, with star history and scores |
| `data/manual.json` | Hand-curated pins, plus permanent approve/reject overrides |
| `data/review-queue.md` | Candidates waiting on a human decision |
| `data/triage.json` | Jev's own verdict on each candidate, with the probability it returned |
| `tools/` | Discovery, scoring, refresh and rendering, zero runtime dependencies |

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
