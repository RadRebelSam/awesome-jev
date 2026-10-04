<img src="site/logo.svg" width="64" height="64" alt="">

# Awesome Jev [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Tools, SDKs, integrations and examples for [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev), the System One model from TypeSafe AI.
>
> **Browse it with search and filters: [awesomejev.radrebeldeveloper.com](https://awesomejev.radrebeldeveloper.com/)**
>
> The coverage claim is checked, not inferred: every day, each entry is looked for in the
> other public Jev directories - the two directory sites and the largest list repositories -
> and the count only stands when every source answered. `data/coverage.json` records what was
> checked, how many links each source returned, and when.

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

### Moving fastest this week

- **[dzhng/jevgrep](https://github.com/dzhng/jevgrep)** - +546 stars in 7 days
- **[realZachi/pg-jev](https://github.com/realZachi/pg-jev)** - +380 stars in 7 days
- **[AgriciDaniel/jev-seo](https://github.com/AgriciDaniel/jev-seo)** - +329 stars in 7 days
- **[Finderchangchang/jev-chat-JARVIS](https://github.com/Finderchangchang/jev-chat-JARVIS)** - +239 stars in 7 days
- **[CharlesFeng0314/JEV_sees](https://github.com/CharlesFeng0314/JEV_sees)** - +209 stars in 7 days

### Official

- **[TypeSafe AI - Introducing System One Models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)** - The launch post from TypeSafe AI: what a System One model is, and what Jev returns instead of text.
- **[typesafe-ai/skills](https://github.com/typesafe-ai/skills)** - Agent skills for building with TypeSafe's System One API  
  <sub>2568 stars · MIT · updated 2026-09-12</sub>
- **[typesafe-ai/typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js)** - The official TypeScript/JavaScript library for the TypeSafe API  
  <sub>266 stars · TypeScript · MIT · updated 2026-09-15</sub>
- **[typesafe-ai/typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python)** - The official Python library for the TypeSafe API  
  <sub>265 stars · Python · MIT · updated 2026-09-26</sub>
- **[typesafe-ai/WorkflowEvals](https://github.com/typesafe-ai/WorkflowEvals)** - evals.typesafe.ai workflow code published  
  <sub>14 stars · Python · Apache-2.0 · updated 2026-09-29</sub>
- **[typesafe-ai/n8n-nodes-typesafe-ai](https://github.com/typesafe-ai/n8n-nodes-typesafe-ai)** - No description provided.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-29</sub>

### SDKs and clients

- **[dzhng/jevgrep](https://github.com/dzhng/jevgrep)** - Find code by asking what it does. A CLI for coding agents that uses Jev to discover relevant files and source context.  
  <sub>2224 stars · TypeScript · MIT · updated 2026-10-02</sub>
- **[razorback16/openjev](https://github.com/razorback16/openjev)** - Open, Jev-compatible System One decision server on DiffusionGemma  
  <sub>601 stars · Python · Apache-2.0 · updated 2026-09-29</sub>
- **[vinilana/jev-gateway](https://github.com/vinilana/jev-gateway)** - An easy way to use jev with your coding agent for tool calling reasoning  
  <sub>290 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[logan-markewich/jeff](https://github.com/logan-markewich/jeff)** - A self-hosted drop-in replacement for TypeSafe's jev, powered by GliFormer.  
  <sub>289 stars · Python · MIT · updated 2026-09-20</sub>
- **[FerryCorleone/crush-monitor](https://github.com/FerryCorleone/crush-monitor)** - Crush 好感监控器：用 Jev 分析微信聊天的情绪、意图和回复表现。本机部署，使用自己的 API Key。  
  <sub>268 stars · TypeScript · MIT · updated 2026-10-03</sub>
- **[jexp/neo4jev](https://github.com/jexp/neo4jev)** - Typesafe.ai System One Model Jev navigating a Neo4j graph by using a classifier over neighbouring relationships  
  <sub>161 stars · Jupyter Notebook · MIT · updated 2026-09-18</sub>
- **[YUTA-fywoo/jev-gui-delegate](https://github.com/YUTA-fywoo/jev-gui-delegate)** - AI-assisted Windows and Chrome GUI delegation for Codex: task contracts, local execution, Jev semantic decisions, recovery and outcome verification.  
  <sub>131 stars · Python · updated 2026-09-27</sub>
- **[arimanyus/warrenduffer](https://github.com/arimanyus/warrenduffer)** - AI-driven intraday trading bot for Indian stocks. Jev ranks the Nifty 50 every 15s; code sizes each trade and places the stop; orders go live through Zerodha Kite or Kotak Neo. Day replay, kill switch, daily loss halt, terminal dashboard.  
  <sub>94 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[Bodila51/grok-bot-jev](https://github.com/Bodila51/grok-bot-jev)** - Connect TypeSafe Jev to Grok Bot as a cheap decision layer - usage gates, skill template, examples  
  <sub>92 stars · Python · MIT · updated 2026-09-28</sub>
- **[fazlerocks/jevmail](https://github.com/fazlerocks/jevmail)** - Open-source AI email triage for Gmail. Sorts your inbox into Needs reply, Updates, Promos, Sales and Spam with Jev, TypeSafe AI's decision model, via Vercel AI Gateway. Read-only, runs locally, 1,000 emails in about a minute for 3 cents.  
  <sub>92 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[f/jev-leftpad](https://github.com/f/jev-leftpad)** - Left-pad strings with TypeSafe AI's Jev. For reasons.  
  <sub>84 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[AboveColin/HA-Jev](https://github.com/AboveColin/HA-Jev)** - Ask your house a question, get a number back. Home Assistant integration for TypeSafe Jev: typed answers as sensors, four actions for automations, and a conversation agent for Assist.  
  <sub>69 stars · Python · MIT · updated 2026-09-30</sub>
- **[bladedevoff/stuntd](https://github.com/bladedevoff/stuntd)** - Local proxy that learns your app's typed LLM decisions and answers them with a Laya head. Jev and OpenAI compatible.  
  <sub>65 stars · Python · Apache-2.0 · updated 2026-10-03</sub>
- **[alvarobartt/sys1](https://github.com/alvarobartt/sys1)** - Blazing fast, self-hosted structured decisions for open-weight models with a TypeSafe AI compatible API, written in Rust.  
  <sub>48 stars · Rust · Apache-2.0 · updated 2026-10-02</sub>
- **[spring-ai-community/spring-ai-typesafe](https://github.com/spring-ai-community/spring-ai-typesafe)** - A Java SDK for the TypeSafe AI JEV API, & Spring AI TypeSafe integrations.  
  <sub>47 stars · Java · Apache-2.0 · updated 2026-10-03</sub>
- **[hunkim/solar-mini4-jev](https://github.com/hunkim/solar-mini4-jev)** - No description provided.  
  <sub>45 stars · Python · updated 2026-09-24</sub>
- **[Chuf-H/jev-tree](https://github.com/Chuf-H/jev-tree)** - Jev-native probability tree and graph runtime for verifiable multi-step decision making.  
  <sub>42 stars · Python · Apache-2.0 · updated 2026-09-23</sub>
- **[mattn/go-jev](https://github.com/mattn/go-jev)** - Go SDK and CLI for TypeSafe Jev: typed decisions (yes/no, choice, score) from a model  
  <sub>41 stars · Go · MIT · updated 2026-09-23</sub>
- **[TypeLLM/pijev](https://github.com/TypeLLM/pijev)** - Permutation Invariant Jev  
  <sub>34 stars · Python · Apache-2.0 · updated 2026-09-28</sub>
- **[bhaiG-de/jev-design-test](https://github.com/bhaiG-de/jev-design-test)** - Jev shadcn-block generator  
  <sub>31 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[TypeSafeAI/jev-harness](https://github.com/TypeSafeAI/jev-harness)** - A custom coding harness for TypeSafe AI's Jev: an LLM proposes, Jev answers narrow questions, code decides, every step leaves a receipt.  
  <sub>27 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[Bodila51/muse-jev-playbook](https://github.com/Bodila51/muse-jev-playbook)** - Jev decision layer for Muse: a fast, cheap TypeSafe AI gate before expensive agent work — confidence policy, recipes, reference router, honest measurement.  
  <sub>24 stars · Python · MIT · updated 2026-09-22</sub>
- **[buberlo/dsh-jev](https://github.com/buberlo/dsh-jev)** - Jev-powered decision layer for DeepSeek Harness  
  <sub>24 stars · TypeScript · MIT · updated 2026-10-03</sub>
- **[sorrycc/typesafe-snake](https://github.com/sorrycc/typesafe-snake)** - Snake auto-played by TypeSafe's Jev model: one System One choice per tick, legal moves and facts generated in code  
  <sub>23 stars · TypeScript · updated 2026-09-17</sub>
- **[evoke-build/evoke](https://github.com/evoke-build/evoke)** - Software, by reflex. An open runtime that turns human intent into inspectable plans across small, composable programs, with explicit permissions and human approval before irreversible actions.  
  <sub>22 stars · Rust · Apache-2.0 · updated 2026-10-04</sub>
- **[chengyongru/fastjev](https://github.com/chengyongru/fastjev)** - SDK-first, independently maintained SemIf fork for fast, self-hosted semantic decisions.  
  <sub>21 stars · Python · MIT · updated 2026-09-24</sub>
- **[Protocol-Lattice/harness-router](https://github.com/Protocol-Lattice/harness-router)** - A decision layer embedded into the harness tool-selection loop  
  <sub>21 stars · Python · MIT · updated 2026-09-30</sub>
- **[arjun988/Kev](https://github.com/arjun988/Kev)** - Open-source System One decision engine. Typed choice / score / noul with calibrated probabilities. Self-host with Ollama or any OpenAI-compatible model. Apache-2.0.  
  <sub>20 stars · TypeScript · Apache-2.0 · updated 2026-09-23</sub>
- **[rhighs/jev-code](https://github.com/rhighs/jev-code)** - Interactive TypeScript coding CLI powered by Jev typed decisions and constrained AST generation.  
  <sub>20 stars · TypeScript · updated 2026-09-20</sub>
- **[Ray-Hughes/jevalyn](https://github.com/Ray-Hughes/jevalyn)** - The decision layer for your Rails app. A Rails-native wrapper around TypeSafe's Jev System One API: typed, calibrated decisions in your control flow.  
  <sub>19 stars · Ruby · MIT · updated 2026-09-21</sub>
- **[agencyenterprise/jev-recipes](https://github.com/agencyenterprise/jev-recipes)** - 248 small Jev decisions for JavaScript and TypeScript: route, rerank, gate, grade, compare, and label text for agents, RAG, support, code review, and music. Each returns a typed result with explicit uncertainty. Plug into Vercel AI SDK or LangChain agents, import one recipe, or run the CLI with JSON from any language.  
  <sub>18 stars · TypeScript · MIT · updated 2026-10-04</sub>
- **[campusx-official/jev-demo](https://github.com/campusx-official/jev-demo)** - A simple demo using jev  
  <sub>18 stars · Python · updated 2026-09-24</sub>
- **[grandamenium/jev-anything](https://github.com/grandamenium/jev-anything)** - Agent skill for designing, building, testing, and tuning bounded JEV decision layers  
  <sub>18 stars · Python · MIT · updated 2026-09-24</sub>
- **[zhulinchng/jevper](https://github.com/zhulinchng/jevper)** - Jev-shaped (TypeSafe System One) classification wrapper over OpenAI-like clients  
  <sub>17 stars · Python · Apache-2.0 · updated 2026-09-27</sub>
- **[d-date/swift-jev](https://github.com/d-date/swift-jev)** - A Swift client for TypeSafe AI's Jev — typed judgements, not text  
  <sub>16 stars · Swift · MIT · updated 2026-09-23</sub>
- **[rayanweragala/jev-call-router](https://github.com/rayanweragala/jev-call-router)** - No description provided.  
  <sub>16 stars · HTML · MIT · updated 2026-09-25</sub>
- **[romaluev/jev-ego](https://github.com/romaluev/jev-ego)** - Fast browser agent for ego lite. One TypeSafe request per step; an agent or Jev picks the move.  
  <sub>16 stars · TypeScript · updated 2026-09-17</sub>
- **[syumai/jevyoumean](https://github.com/syumai/jevyoumean)** - Semantic "Did you mean?" for any CLI — wraps commands and uses TypeSafe's Jev to match subcommand typos by intent, not edit distance.  
  <sub>16 stars · Go · MIT · updated 2026-09-23</sub>
- **[Nisaka520/JevBystander](https://github.com/Nisaka520/JevBystander)** - 安卓无障碍版微信判读：只读屏、只弹 3 条 Toast（意图 / 情绪 / 着急 / 建议），不生成回复文案、不发送 · 零第三方依赖，APK 861 KB  
  <sub>15 stars · Kotlin · MIT · updated 2026-09-23</sub>
- **[a3165458/ai-trading](https://github.com/a3165458/ai-trading)** - JEV/this-that decision loop for Lighter.xyz BTC and ETH perps with a BUY/SELL web blotter  
  <sub>14 stars · Python · updated 2026-10-02</sub>
- **[amithgc/local-jev](https://github.com/amithgc/local-jev)** - A local, offline System One server compatible with TypeSafe's Jev API. It answers typed yes/no, category and score questions with small open models.  
  <sub>14 stars · Python · MIT · updated 2026-09-21</sub>
- **[hev/reranker](https://github.com/hev/reranker)** - Use Jev (TypeSafe's System One model) as a calibrated reranker: one call, up to 30 documents, a probability per document. Apache-2.0.  
  <sub>14 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[sanmai/typesafe-ai-php](https://github.com/sanmai/typesafe-ai-php)** - Jev for PHP, TypeSafe AI PHP SDK  
  <sub>14 stars · PHP · Apache-2.0 · updated 2026-10-03</sub>
- **[TrustifAI/typed_evals](https://github.com/TrustifAI/typed_evals)** - Fast, typed, calibrated evaluations for LLM and agent outputs, powered by Jev — with simple, framework-agnostic Python APIs  
  <sub>14 stars · Python · MIT · updated 2026-09-27</sub>
- **[columnar-tech/jevaro](https://github.com/columnar-tech/jevaro)** - Jev + Arrow  
  <sub>13 stars · Python · Apache-2.0 · updated 2026-09-29</sub>
- **[arielweinberger/jev-autopilot](https://github.com/arielweinberger/jev-autopilot)** - This demo uses Jev from TypeSafe AI to autonomously fly a drone in a random city from point A to point B, avoiding obstacles along the way. A trip costs $0.01.  
  <sub>12 stars · TypeScript · updated 2026-09-17</sub>
- **[atharvamhaske/typesafe-sdk-go](https://github.com/atharvamhaske/typesafe-sdk-go)** - unofficial go sdk for typesafe ai. not affiliated with or endorsed by typesafe ai. a side project built to fill the missing go sdk gap, for the community to use.  
  <sub>12 stars · Go · MIT · updated 2026-09-21</sub>
- **[HorusJiang/dsh-jev-tools](https://github.com/HorusJiang/dsh-jev-tools)** - Jev judgment, not generation: prune long tool output, screen fetched pages for injected instructions, and gate completion claims inside DeepSeek Harness.  
  <sub>12 stars · TypeScript · MIT · updated 2026-10-03</sub>
- **[saibimajdi/typesafeai-dotnet-sdk](https://github.com/saibimajdi/typesafeai-dotnet-sdk)** - Community .NET SDK for the TypeSafe AI System One API — typed noul, choice, and score questions with structured, confidence-scored answers. Not affiliated with TypeSafe AI.  
  <sub>12 stars · C# · MIT · updated 2026-09-30</sub>
- **[Skyvern-AI/jevscape](https://github.com/Skyvern-AI/jevscape)** - RuneBench harness for TypeSafe's Jev: bounded action catalog, tick-mode controller and a live dashboard  
  <sub>12 stars · TypeScript · updated 2026-09-18</sub>
- **[frostney/clean-code-review](https://github.com/frostney/clean-code-review)** - Every code file in a pull request, judged against Uncle Bob's Clean Code by TypeSafe's Jev, then reviewed by Luna. Built on eve and Next.js.  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[Premo-Cloud/typesafe-sdk-java](https://github.com/Premo-Cloud/typesafe-sdk-java)** - Community Java SDK for Jev, TypeSafe's System One model: typed questions in, typed answers with calibrated probabilities out. Java 17+, Spring Boot starter (unofficial)  
  <sub>11 stars · Java · MIT · updated 2026-09-25</sub>
- **[tontoko/jev-browser](https://github.com/tontoko/jev-browser)** - One grounded Jev/Playwright core: typed SDK, persistent CLI, and MCP server with native browser operations and deterministic assertions.  
  <sub>10 stars · JavaScript · Apache-2.0 · updated 2026-10-01</sub>
- **[vercel-labs/jev-ai-sdk-form-router](https://github.com/vercel-labs/jev-ai-sdk-form-router)** - Route form submissions to the right people with Jev and AI SDK.  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[chaitin/Decis](https://github.com/chaitin/Decis)** - Self-hosted, Jev-compatible decision-model API — one /v1/systemone endpoint, open weights (Laya, kev), one Docker image per engine.  
  <sub>9 stars · Python · Apache-2.0 · updated 2026-09-30</sub>
- **[Tangerg/typesafe-sdk-go](https://github.com/Tangerg/typesafe-sdk-go)** - Go SDK for the TypeSafe AI API — typed questions in, probability distributions out.  
  <sub>9 stars · Go · MIT · updated 2026-09-19</sub>
- **[AbdelStark/bicameral](https://github.com/AbdelStark/bicameral)** - Hybrid coding harness: System 2 writes, System 1 (Jev) runs reflexes.  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-16</sub>
- **[devbackend/jevgo](https://github.com/devbackend/jevgo)** - Unofficial Go client for the TypeSafe AI System One API (Jev) — typed questions in, calibrated answers out.  
  <sub>8 stars · Go · MIT · updated 2026-09-21</sub>
- **[doronp/jevc](https://github.com/doronp/jevc)** - Compile agent policy prose into deterministic verdict programs: narrow evidence questions for the model, the verdict computed in code. Install: npm i -g jev-compiler  
  <sub>8 stars · TypeScript · Apache-2.0 · updated 2026-10-01</sub>
- **[leftspace89/JevBird](https://github.com/leftspace89/JevBird)** - No description provided.  
  <sub>8 stars · Python · MIT · updated 2026-09-17</sub>
- **[NSStudent/JevSwiftSDK](https://github.com/NSStudent/JevSwiftSDK)** - An independent, type-safe Swift SDK for TypeSafe Jev, with async/await, batching, retries, and SPM support.  
  <sub>8 stars · Swift · MIT · updated 2026-09-19</sub>
- **[paramjeetn/jev-cookbook](https://github.com/paramjeetn/jev-cookbook)** - The complete cookbook for Jev by TypeSafe AI — 120+ use cases, 10 runnable examples, 4 composition patterns, and first-principles theory for the world's first System One AI model.  
  <sub>8 stars · Python · MIT · updated 2026-09-22</sub>
- **[ticofab/scala-jev-sdk](https://github.com/ticofab/scala-jev-sdk)** - Scala SDK for Jev. No effect system bundled.  
  <sub>8 stars · Scala · Apache-2.0 · updated 2026-09-19</sub>
- **[umianta/jev-vllm](https://github.com/umianta/jev-vllm)** - No description provided.  
  <sub>8 stars · Python · Apache-2.0 · updated 2026-09-26</sub>
- **[AsheeHuang/Jevboard](https://github.com/AsheeHuang/Jevboard)** - 透過 Jev 改善注音輸入法選字的概念驗證 | A proof of concept for improving Bopomofo IME character selection with Jev  
  <sub>7 stars · C# · MIT · updated 2026-10-04</sub>
- **[dougsong/jev-android](https://github.com/dougsong/jev-android)** - A Kotlin Android SDK for UI automation powered by TypeSafe Jev, with an accessibility runtime and sample app.  
  <sub>7 stars · Kotlin · MIT · updated 2026-09-20</sub>
- **[gilljon/typesafe-ai-rs](https://github.com/gilljon/typesafe-ai-rs)** - Independent async and blocking Rust SDK for the TypeSafe AI System One API  
  <sub>7 stars · Rust · MIT · updated 2026-09-17</sub>
- **[haileyok/typesafe-client](https://github.com/haileyok/typesafe-client)** - Unofficial Go and Rust clients for the TypeSafe AI System One API (Jev)  
  <sub>7 stars · Rust · MIT · updated 2026-09-26</sub>
- **[joevidev/ui-generator-instinct-jev](https://github.com/joevidev/ui-generator-instinct-jev)** - No description provided.  
  <sub>7 stars · TypeScript · updated 2026-09-18</sub>
- **[joshhu/jevtest](https://github.com/joshhu/jevtest)** - 情緒測謊器：嘴上說「好」，心裡真的好嗎？用 TypeSafe Jev（System One 模型）透過 OpenRouter 即時判斷，並與一般 LLM 對照  
  <sub>7 stars · HTML · updated 2026-09-20</sub>
- **[joshmn/typesafe-sdk](https://github.com/joshmn/typesafe-sdk)** - Ruby client for typesafe.ai  
  <sub>7 stars · Ruby · MIT · updated 2026-10-03</sub>
- **[priyankark/jev-state](https://github.com/priyankark/jev-state)** - Build and regression-test conversational state machines powered by Jev. Inspect decisions, capture failing conversations as tests, and export runnable TypeScript for your app.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[aleskxyz/kev-onnx](https://github.com/aleskxyz/kev-onnx)** - Self-hosted, TypeSafe-compatible /v1/systemone API server for the KEV decision model - CPU-only ONNX inference via FastAPI, no GPU required.  
  <sub>6 stars · Python · Apache-2.0 · updated 2026-09-27</sub>
- **[cheeaun/jevmoji](https://github.com/cheeaun/jevmoji)** - Type anything. Get related emojis scored 0–3 with Jev.  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[exfly/laya-jev-compatible-server](https://github.com/exfly/laya-jev-compatible-server)** - A TypeSafe Jev-compatible HTTP server (POST /v1/systemone)  
  <sub>6 stars · Python · updated 2026-09-20</sub>
- **[gitchw/LCT](https://github.com/gitchw/LCT)** - Jev-LCT: Open System-One Decision Engine with Free Calibrated Confidence from Recurrent Trajectories  
  <sub>6 stars · Python · Apache-2.0 · updated 2026-09-26</sub>
- **[jkudish/jev-agent-tools](https://github.com/jkudish/jev-agent-tools)** - Jev transport/provider layer: multi-provider transport layer that supports fail-closed validation. Used by jkudish/jev-browser and jkudish/jev-mcp.  
  <sub>6 stars · JavaScript · MIT · updated 2026-10-02</sub>
- **[Olti1947/jev-java](https://github.com/Olti1947/jev-java)** - Idiomatic Java SDK for TypeSafe AI Jev System One decision engine  
  <sub>6 stars · Java · updated 2026-09-26</sub>
- **[smartaces/jev-plays-streetfighter-2](https://github.com/smartaces/jev-plays-streetfighter-2)** - No description provided.  
  <sub>6 stars · Python · updated 2026-09-21</sub>
- **[Stumble/jev-go](https://github.com/Stumble/jev-go)** - Community Go SDK for TypeSafe AI Jev / System One  
  <sub>6 stars · Go · MIT · updated 2026-09-18</sub>
- **[3clyp50/a0-typesafe-ai](https://github.com/3clyp50/a0-typesafe-ai)** - TypeSafe AI Jev judgments for Agent Zero, with typed tools and probability cards.  
  <sub>5 stars · Python · MIT · updated 2026-09-17</sub>
- **[clouatre-labs/decisions-judge-mcp](https://github.com/clouatre-labs/decisions-judge-mcp)** - Typed decisions for AI agents as an MCP tool: yes/no probability (noul), choice, and score in one fast request. Backed by the TypeSafe System One model.  
  <sub>5 stars · JavaScript · Apache-2.0 · updated 2026-10-03</sub>
- **[gudcks0305/jev-java](https://github.com/gudcks0305/jev-java)** - Unofficial Java SDK for TypeSafe Jev and Vercel AI Gateway, with Spring Boot and WebClient support  
  <sub>5 stars · Java · MIT · updated 2026-10-03</sub>
- **[Hawxy/TypeSafeAI.Net](https://github.com/Hawxy/TypeSafeAI.Net)** - .NET SDK for the TypeSafe AI platform  
  <sub>5 stars · C# · Apache-2.0 · updated 2026-09-19</sub>
- **[hoangnb24/paseo-supervision](https://github.com/hoangnb24/paseo-supervision)** - Paseo plugin for supervising Lead–Peer communication protocol drift with Jev  
  <sub>5 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[kataras/jev](https://github.com/kataras/jev)** - A Go client for the TypeSafe AI's System One API and its model, Jev.  
  <sub>5 stars · Go · MIT · updated 2026-09-21</sub>
- **[luigivis/jev-sdk-java](https://github.com/luigivis/jev-sdk-java)** - Type-safe Java 21 client for the TypeSafe AI Jev (System One) decision API  
  <sub>5 stars · Java · MIT · updated 2026-09-22</sub>
- **[nshkrdotcom/typesafe_sdk](https://github.com/nshkrdotcom/typesafe_sdk)** - An idiomatic, type-safe Elixir port of the official TypeScript AI SDK (ai / ai-sdk) providing unified LLM integrations, streaming text and structured outputs, tool calling, and agentic workflows. Jev is their current flagship model and is the first System One model.  
  <sub>5 stars · Elixir · MIT · updated 2026-09-20</sub>
- **[replynodes/jev-web-analyzer](https://github.com/replynodes/jev-web-analyzer)** - See what Jev thinks about your SaaS website — powered by ReplyNodes web context and Vercel AI Gateway.  
  <sub>5 stars · TypeScript · Apache-2.0 · updated 2026-10-04</sub>
- **[RevocGG/typesafe-jev-bridge](https://github.com/RevocGG/typesafe-jev-bridge)** - Use the TypeSafe Jev decision model (System One) anywhere: zero-dependency OpenAI-compatible bridge for 9Router, Claude Code, Cursor, Cline & any OpenAI SDK. Typed yes/no, choice & score judgments via CLI or HTTP.  
  <sub>5 stars · JavaScript · updated 2026-09-21</sub>
- **[tiandee/codex-jev-router](https://github.com/tiandee/codex-jev-router)** - No description provided.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[xingwudao/OpenJev](https://github.com/xingwudao/OpenJev)** - OpenJev: an independent Jev-inspired System One decision API based on TypeSafe.ai concepts. Choice, score and noul primitives, local mock server, Python and TypeScript SDKs. Real inference planned; not affiliated with TypeSafe AI.  
  <sub>5 stars · Python · updated 2026-09-18</sub>
- **[alterhq/typesafe-sdk-swift](https://github.com/alterhq/typesafe-sdk-swift)** - Unofficial Swift library for the TypeSafe API  
  <sub>4 stars · Swift · MIT · updated 2026-09-15</sub>
- **[Bodila51/Jev-chooses-a-LLM](https://github.com/Bodila51/Jev-chooses-a-LLM)** - Jev Router for Cursor - TypeSafe Jev picks COST/BALANCED/INTELLIGENCE, Cursor executes  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[dtunai/cu-Jev](https://github.com/dtunai/cu-Jev)** - cuda-Jev — a CUDA-native Jev System One decision inference engine. Jev compatible API, examples, and reproducible benchmarks.  
  <sub>4 stars · C · Apache-2.0 · updated 2026-09-23</sub>
- **[JabbaKadabra/JevDotNet](https://github.com/JabbaKadabra/JevDotNet)** - .NET client for TypeSafe System One (Jev) — typed questions in, typed answers with probabilities and confidence out. No prompt engineering, no output parsing.  
  <sub>4 stars · C# · MIT · updated 2026-09-21</sub>
- **[jacobgoldfarb/Jevlish](https://github.com/jacobgoldfarb/Jevlish)** - A better Javascript SDK for Jev  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[jamilxt/typesafe-ai-java](https://github.com/jamilxt/typesafe-ai-java)** - Community-maintained Java SDK for the TypeSafe AI System One (Jev) API. Not an official TypeSafe product.  
  <sub>4 stars · Java · updated 2026-09-23</sub>
- **[JoacoMarc/jev-harness-router](https://github.com/JoacoMarc/jev-harness-router)** - Per-turn router for agent harnesses: one 350ms Jev call picks the model tier, effort, tools and skill, behind a hard deadline with a regex fallback. Claude Agent SDK adapter included.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[kisshan13/typesafe-ai-go](https://github.com/kisshan13/typesafe-ai-go)** - Community-maintained Go SDK for the TypeSafe AI System One evaluation API, with typed questions, fluent builders, retries, and examples.  
  <sub>4 stars · Go · MIT · updated 2026-09-20</sub>
- **[Rajmeet/jev-phone](https://github.com/Rajmeet/jev-phone)** - Drive a phone with a model that never writes a word. TypeSafe's Jev picks each action, phone-use runs it on iOS and Android.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[simota/tenbin](https://github.com/simota/tenbin)** - MCP server and agent skill for the TypeSafe AI System One API (Jev): decompose a judgment into Choice / Score / Noul questions, lint them, measure on labelled data, and put calibrated thresholds in code  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[stoopid-computers/effective-jev](https://github.com/stoopid-computers/effective-jev)** - The official TypeScript/JavaScript library for the TypeSafe API but built using EffectTS  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[TimothyZhang7/open-decisions](https://github.com/TimothyZhang7/open-decisions)** - Typed decisions from local open models. Python SDK, agent routing, and experimental Tetris. MIT.  
  <sub>4 stars · Python · MIT · updated 2026-09-18</sub>
- **[tycoding/jev-java-sdk](https://github.com/tycoding/jev-java-sdk)** - No description provided.  
  <sub>4 stars · Java · Apache-2.0 · updated 2026-09-23</sub>
- **[ZTRRTUO/Jev-PhoneControl](https://github.com/ZTRRTUO/Jev-PhoneControl)** - Visual Android automation powered by three agents: vision, a text-only supervisor, and TypeSafe JEV. Executes actions through ADB with a local web console.  
  <sub>4 stars · Python · updated 2026-09-26</sub>
- **[1cyberlangke1/rwkv-jev-like](https://github.com/1cyberlangke1/rwkv-jev-like)** - vibe 好玩  
  <sub>3 stars · Python · MIT · updated 2026-09-20</sub>
- **[abeldzan/jev-rs](https://github.com/abeldzan/jev-rs)** - Async-first Rust SDK for the TypeSafe AI API  
  <sub>3 stars · Rust · MIT · updated 2026-10-02</sub>
- **[abhishekmamdapure/jev-information-extraction](https://github.com/abhishekmamdapure/jev-information-extraction)** - Parsing the PDF and extracting the relevant information  
  <sub>3 stars · Python · updated 2026-09-30</sub>
- **[antTing/jev-accounts-hub](https://github.com/antTing/jev-accounts-hub)** - A multi-account manager and API gateway for TypeSafe / Jev. 一个用于 TypeSafe / Jev 的多账户管理器和 API 网关。交流群：1102910606  
  <sub>3 stars · Go · MIT · updated 2026-09-28</sub>
- **[ArmanJR/Jev-Persian-Benchmark](https://github.com/ArmanJR/Jev-Persian-Benchmark)** - A Quick Typesafe's Jev Evaluation on Persian  
  <sub>3 stars · Python · updated 2026-09-28</sub>
- **[blackopsrepl/Tranche](https://github.com/blackopsrepl/Tranche)** - Tranche — input-bound, model-assisted PR discovery and review prioritization  
  <sub>3 stars · Rust · MIT · updated 2026-10-03</sub>
- **[brightshore/jev-net](https://github.com/brightshore/jev-net)** - A lightweight .NET client for the TypeSafe AI API (System One / Jev). One dependency; a faithful port of the official Python SDK.  
  <sub>3 stars · C# · MIT · updated 2026-09-20</sub>
- **[cernst11/graphql-classifier](https://github.com/cernst11/graphql-classifier)** - Scan a GraphQL schema and flag PII, auth gaps, N+1 risk, and naming/doc issues using TypeSafe's Jev model  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[ChristianAlexander/effect-jev-cwe](https://github.com/ChristianAlexander/effect-jev-cwe)** - A demonstration of the Jev System 1 model in Effect, matching vulnerabilities to their underlying CWEs  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[cipherTing/sael](https://github.com/cipherTing/sael)** - Go client for the TypeSafe System One API (Jev) — the first piece of sael, a content-safety classifier for an AI request relay  
  <sub>3 stars · Go · MIT · updated 2026-10-03</sub>
- **[colinmcdermott/emoji-jev](https://github.com/colinmcdermott/emoji-jev)** - Emoji autocomplete at the speed of typing. TypeSafe AI Jev on a Whop-hosted TanStack Start app.  
  <sub>3 stars · TypeScript · updated 2026-09-17</sub>
- **[diorrego/toolgate-experiment](https://github.com/diorrego/toolgate-experiment)** - Benchmarks of MCP tool selection accuracy and latency. V2 evaluates 143 Woku tools with GPT-6 Luna API calls and Jev; includes Go/Rust cores, one TypeScript SDK and reproducible reports.  
  <sub>3 stars · JavaScript · updated 2026-09-25</sub>
- **[elbruno/ElBruno.AI.Jev](https://github.com/elbruno/ElBruno.AI.Jev)** - Community .NET 10 SDK for official TypeSafe AI Jev typed decisions and Microsoft.Extensions.AI integrations.  
  <sub>3 stars · C# · MIT · updated 2026-09-30</sub>
- **[fadhlirahim/simple-agent-collabs](https://github.com/fadhlirahim/simple-agent-collabs)** - A file-based research loop for one human and N LLM subagents. Inspired by HF agent-collabs  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[gauravkhuraana/jev-qa-demos](https://github.com/gauravkhuraana/jev-qa-demos)** - Jev (TypeSafe AI) demos for QA / SDET engineers via Vercel AI Gateway - simple, commented TypeScript for a video walkthrough  
  <sub>3 stars · TypeScript · updated 2026-10-01</sub>
- **[hardkoded/typesafe-sdk-dotnet](https://github.com/hardkoded/typesafe-sdk-dotnet)** - Unofficial .NET port of the TypeSafe AI client SDK (typed questions & answers)  
  <sub>3 stars · C# · MIT · updated 2026-09-22</sub>
- **[hazlema/jev-riffs](https://github.com/hazlema/jev-riffs)** - Music pattern ripper: MIDI → interval tokens → code mines candidate motifs → Jev (TypeSafe System One) grades their significance. Web UI with piano roll, click-to-play, WAV export.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[iamtalha-arshad/ex_typesafe_ai](https://github.com/iamtalha-arshad/ex_typesafe_ai)** - Unofficial Elixir client for the TypeSafe AI API — typed structs, Req-based HTTP with retries, and ergonomic noul/choice/score questions. Not affiliated with TypeSafe AI.  
  <sub>3 stars · Elixir · MIT · updated 2026-09-28</sub>
- **[InsaneArts/typesafe-sdk-swift](https://github.com/InsaneArts/typesafe-sdk-swift)** - Swift SDK for TypeSafe AI  
  <sub>3 stars · Swift · MIT · updated 2026-09-17</sub>
- **[iroy2000/langgraph-jev](https://github.com/iroy2000/langgraph-jev)** - LangGraph/LangChain integration for TypeSafe's Jev decision API  
  <sub>3 stars · Python · MIT · updated 2026-09-30</sub>
- **[joshLong145/jev-cli](https://github.com/joshLong145/jev-cli)** - A CLI wrapper written in python for Jev  
  <sub>3 stars · Python · updated 2026-09-21</sub>
- **[KKloudTarus/taurus-jev-sdk-go](https://github.com/KKloudTarus/taurus-jev-sdk-go)** - Unofficial, dependency-free Go client for the TypeSafe AI System One API and the Jev model. Validated responses, masked credentials, bounded retries.  
  <sub>3 stars · Go · MIT · updated 2026-09-24</sub>
- **[mateonunez/jod](https://github.com/mateonunez/jod)** - Semantic schemas over TypeSafe's Jev — validate the state locally, then project typed answers.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[mity-prodgen/jev-test](https://github.com/mity-prodgen/jev-test)** - Stress-Testing Jev's Confidence  
  <sub>3 stars · Python · updated 2026-10-02</sub>
- **[Oranquelui/astra-jev-harness](https://github.com/Oranquelui/astra-jev-harness)** - Agent Skills for Codex Desktop and Claude Code, plus a Codex CLI harness. Jev-assisted context selection. / Codex Desktop・Claude Code向けAgent SkillsとCodex CLI用ハーネス。Jevでコンテキストを選別。  
  <sub>3 stars · Python · MIT · updated 2026-10-01</sub>
- **[pewriebontal/typesafe-sdk-cpp](https://github.com/pewriebontal/typesafe-sdk-cpp)** - An unofficial CPP 20 SDK for the TypeSafe API  
  <sub>3 stars · C++ · MIT · updated 2026-09-24</sub>
- **[realZachi/jevtest](https://github.com/realZachi/jevtest)** - Semantic test matchers for Vitest and Jest, powered by TypeSafe's Jev model. Write expectations in plain English, get calibrated probabilities back.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[reiswaffel78/jev-agent-toolkit](https://github.com/reiswaffel78/jev-agent-toolkit)** - Jev-first portable Agent Skill and optional MCP bridge for Claude Code, Codex, Cursor and compatible agents.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[sd109/typesafe-go](https://github.com/sd109/typesafe-go)** - A collection of typesafe.ai API utilities  
  <sub>3 stars · Go · Apache-2.0 · updated 2026-09-20</sub>
- **[ssd1051/hearmemory](https://github.com/ssd1051/hearmemory)** - Shared memory Jev-based plugin for multi-agent coding: subagents and Codex/Claude Code/Cursor hand-offs share one project memory. 一个多agent协同高效记忆统筹插件  
  <sub>3 stars · Python · MIT · updated 2026-09-25</sub>
- **[xuboboo/ashare-trader](https://github.com/xuboboo/ashare-trader)** - 基于 Jev 的 A 股 T+1 决策台：盘前预选 + 交易时段全程决策 + 本地概率模型 + 严格成本回测 + QMT 桥接（默认不下单）。1 万本金影子盘记录中；策略未证实正期望（README 有全部数据）。  
  <sub>3 stars · TypeScript · updated 2026-09-28</sub>
- **[YanfLIZi56/jev-starter](https://github.com/YanfLIZi56/jev-starter)** - Visually configure Jev questions, test them live, export ready-to-use code.  
  <sub>3 stars · Vue · MIT · updated 2026-09-28</sub>
- **[zhirschtritt/typesafe-go](https://github.com/zhirschtritt/typesafe-go)** - Idiomatic Go SDK for the TypeSafe AI API  
  <sub>3 stars · Go · MIT · updated 2026-10-01</sub>
- **[0xjba/jev-swap](https://github.com/0xjba/jev-swap)** - Find the LLM calls in your codebase that are really decisions, see what they'd save on TypeSafe Jev, and prove it on live traffic before you swap. TypeScript, JavaScript, Python.  
  <sub>2 stars · HTML · MIT · updated 2026-09-24</sub>
- **[0xwhrari/grok-jev-guard](https://github.com/0xwhrari/grok-jev-guard)** - No description provided.  
  <sub>2 stars · Python · MIT · updated 2026-09-23</sub>
- **[207studio/jev-codex-tools](https://github.com/207studio/jev-codex-tools)** - Experimental opt-in Jev decision tools for bounded Codex session reading and guarded UI workflows.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[abenojardev/laravel-jev-ai](https://github.com/abenojardev/laravel-jev-ai)** - A laravel wrapper for Jev AI  
  <sub>2 stars · PHP · MIT · updated 2026-09-24</sub>
- **[acharyaanusha/magic-jev](https://github.com/acharyaanusha/magic-jev)** - A Magic Jev (8) Ball for pull requests.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Ashfaqbs/jev-mcp-spring](https://github.com/Ashfaqbs/jev-mcp-spring)** - Java/Spring Boot MCP server for TypeSafe Jev  
  <sub>2 stars · Java · Apache-2.0 · updated 2026-09-21</sub>
- **[binnash/typesafe-sdk](https://github.com/binnash/typesafe-sdk)** - PHP & Laravel SDK for TypeSafe AI's JEV Model series  
  <sub>2 stars · PHP · updated 2026-09-18</sub>
- **[Cadman021/jev-terminal-doctor](https://github.com/Cadman021/jev-terminal-doctor)** - A self-healing terminal daemon that watches your build/test output live, detects errors, and suggests a fix patch — apply it with one keypress.  
  <sub>2 stars · Rust · GPL-3.0 · updated 2026-09-25</sub>
- **[Clueless-Creations/jev-ios-ultrafast](https://github.com/Clueless-Creations/jev-ios-ultrafast)** - Run iOS Simulator goals with Jev, compare decision models, and replay every attempt. Python CLI and Brigade host wrapper.  
  <sub>2 stars · Python · MIT · updated 2026-09-21</sub>
- **[E1Byte/wechat-jev-android](https://github.com/E1Byte/wechat-jev-android)** - 安卓版微信一对一聊天实时分析助手 · LSPosed 模块，调 TypeSafe Jev 决策模型分析情绪/意图/潜台词，气泡下方本地卡片显示（只读不发）  
  <sub>2 stars · Kotlin · MIT · updated 2026-09-27</sub>
- **[early-signal-tech/jev-duckdb-analytics-cli](https://github.com/early-signal-tech/jev-duckdb-analytics-cli)** - A CLI tool using Jev's Python SDK to read from DuckDB and answer questions  
  <sub>2 stars · Python · updated 2026-09-22</sub>

<sub>350 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Framework integrations

- **[Oqura-ai/deepdoc](https://github.com/Oqura-ai/deepdoc)** - Deep research tool for local knowledge base.  
  <sub>309 stars · Python · MIT · updated 2026-09-26</sub>
- **[openlayer-ai/jevals](https://github.com/openlayer-ai/jevals)** - Agent evals and guardrails as Jev decisions: one request per trace, a fraction of a cent, fast enough for the agent loop. Runs locally with Kev or Laya.  
  <sub>102 stars · Python · MIT · updated 2026-10-01</sub>
- **[erendikmenn/jev-rag-benchmark](https://github.com/erendikmenn/jev-rag-benchmark)** - Reproducible benchmark for measuring Jev reranking quality, latency, and cost in RAG  
  <sub>15 stars · Python · MIT · updated 2026-09-20</sub>
- **[sunil-sadasivan/jevernetes](https://github.com/sunil-sadasivan/jevernetes)** - Live Kubernetes log analysis, contextual investigation, and agent handoff powered by Jev.  
  <sub>14 stars · Python · MIT · updated 2026-09-28</sub>
- **[WiktorB2004/llama-index-jev](https://github.com/WiktorB2004/llama-index-jev)** - LlamaIndex reranker + router powered by TypeSafe Jev - typed scores/choices, cheaper than LLM-as-judge.  
  <sub>8 stars · Python · MIT · updated 2026-09-25</sub>
- **[EmreKaplaner/rag-jev](https://github.com/EmreKaplaner/rag-jev)** - Make room for useful evidence. Inspectable context selection for RAG, with Jev reranking and open benchmark studies.  
  <sub>6 stars · Python · MIT · updated 2026-09-19</sub>
- **[pdrpinto/jevtrim](https://github.com/pdrpinto/jevtrim)** - Jev as a context judge, benchmarked: selection against retrieval and summarization on LoCoMo, four segmentations, matched token budgets, reproducible reports.  
  <sub>5 stars · Jupyter Notebook · MIT · updated 2026-09-25</sub>
- **[atliq/jev-ai-use-cases](https://github.com/atliq/jev-ai-use-cases)** - Hands-on LangChain examples of Jev, TypeSafe AI's decision model: support ticket triage, model routing, reply guardrails, tool selection and finance-inbox fraud checks. An LLM writes; Jev decides.  
  <sub>4 stars · Jupyter Notebook · MIT · updated 2026-09-24</sub>
- **[CompleteTech-LLC-AI-Research/systemone-compiler](https://github.com/CompleteTech-LLC-AI-Research/systemone-compiler)** - Declare a decision, compile typed Jev questions, measure them, and ship a JSON program.  
  <sub>4 stars · Python · MIT · updated 2026-10-03</sub>
- **[Jev-Engineering/TypeWright](https://github.com/Jev-Engineering/TypeWright)** - Declare a decision, compile typed Jev questions, measure them, and ship a JSON program.  
  <sub>4 stars · Python · MIT · updated 2026-10-03</sub>
- **[lgy1027/jevshield](https://github.com/lgy1027/jevshield)** - Sub-100ms security gate for AI agent tool calls, powered by TypeSafe's Jev (System-1) decision model. Single-request Choice/Noul/Score evaluation, dual-factor blocking matrix, calibrated-confidence routing, fail-closed parsing, zero-config local fallback. LangChain-ready.  
  <sub>4 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[lorenzejay/convo-flow-example-jev](https://github.com/lorenzejay/convo-flow-example-jev)** - No description provided.  
  <sub>4 stars · Python · updated 2026-09-28</sub>
- **[shimo4228/jev-research-pipeline](https://github.com/shimo4228/jev-research-pipeline)** - A research note each morning for the topics you follow: your questions steer the search, TypeSafe Jev judges, an LLM you choose writes it (en/zh/ja). CLI: jrp (pilot)  
  <sub>4 stars · Python · MIT · updated 2026-10-04</sub>
- **[BeyondModels/requirements-deep-agent](https://github.com/BeyondModels/requirements-deep-agent)** - Security requirements analysis with JEV, LangChain Deep Agent review via LLM, and deterministic Python reporting  
  <sub>3 stars · Python · MIT · updated 2026-09-27</sub>
- **[deepansh-saxena/jev-guardrails](https://github.com/deepansh-saxena/jev-guardrails)** - Comparing LLM-as-judge vs TypeSafe Jev for agent guardrails: same rules, same agent, measured on cost, latency, calibration and coverage.  
  <sub>3 stars · Python · updated 2026-09-23</sub>
- **[liuhongrui087-art/jev-routed-agent](https://github.com/liuhongrui087-art/jev-routed-agent)** - Multi-step reasoning agent built on LangChain v1 + Jev + Flask + Ollama, with tool calling and local RAG Q&A.  
  <sub>3 stars · Python · updated 2026-09-22</sub>
- **[saksham-malhotra-27/jev-relevance](https://github.com/saksham-malhotra-27/jev-relevance)** - Drop-in relevance filter for LangChain RAG retrievers powered by TypeSafe Jev.  
  <sub>3 stars · Python · MIT · updated 2026-09-23</sub>
- **[wudilyy999/jev-langgraph](https://github.com/wudilyy999/jev-langgraph)** - JEV-native probabilistic decisions, human review, and auditable execution on LangGraph.  
  <sub>3 stars · Python · MIT · updated 2026-09-20</sub>
- **[buildaistack/jev-agent-harness](https://github.com/buildaistack/jev-agent-harness)** - A Java Spring Boot agent harness powered by JEV and LLM intelligence.  
  <sub>2 stars · Java · Apache-2.0 · updated 2026-09-25</sub>
- **[dfm88/toolhunch](https://github.com/dfm88/toolhunch)** - Your agent has too many tools. Hybrid search + a fast decision model (Jev, Laya) or an LLM pick the right one, or say "none". Pydantic AI integration and a ToolRet benchmark.  
  <sub>2 stars · Python · MIT · updated 2026-10-01</sub>
- **[edwardyen724-g/jev-compactor](https://github.com/edwardyen724-g/jev-compactor)** - Context compaction and safety gating for AI agents via TypeSafe Jev: keeps messages verbatim, no summarization. OpenAI, Anthropic, LangChain, CLI, MCP.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[HcodeQ/Langchain-Jev](https://github.com/HcodeQ/Langchain-Jev)** - Create a customer support reliable AI Agent  
  <sub>2 stars · Jupyter Notebook · updated 2026-09-22</sub>
- **[jms-dcksn/jev-pii-guardrail](https://github.com/jms-dcksn/jev-pii-guardrail)** - A UiPath coded agent with a custom PII detection guardrail on the LLM boundary, built on the TypeSafe Jev model as a LangChain awrap_model_call middleware.  
  <sub>2 stars · Python · updated 2026-09-18</sub>
- **[kashyaprparmar/jev-rankkit](https://github.com/kashyaprparmar/jev-rankkit)** - Universal, type-safe reranking for Python objects, search, RAG, and agents  
  <sub>2 stars · Python · MIT · updated 2026-09-23</sub>
- **[leepokai/llm-prompt-techniques-on-jev](https://github.com/leepokai/llm-prompt-techniques-on-jev)** - Chain-of-thought and self-refinement for TypeSafe's Jev: feed its typed answers back as state and ask again. Benchmarks vs TypeSafe's own cookbook numbers.  
  <sub>2 stars · Python · MIT · updated 2026-09-19</sub>
- **[manojlds/jev-dspy-bench](https://github.com/manojlds/jev-dspy-bench)** - Reproducible comparison of Jev and DSPy-optimized LLM quality evaluators  
  <sub>2 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[3F3Feng/audit-triage-agents](https://github.com/3F3Feng/audit-triage-agents)** - Multi-agent audit-triage prototype: LangChain tools + CrewAI orchestration behind a FastAPI service, driven by a TypeScript CLI. Synthetic data only.  
  <sub>1 stars · Python · MIT · updated 2026-09-21</sub>
- **[amarpetla/jev-harness-poc](https://github.com/amarpetla/jev-harness-poc)** - No description provided.  
  <sub>1 stars · Python · updated 2026-09-28</sub>
- **[chayan-bit/Jev-Frame](https://github.com/chayan-bit/Jev-Frame)** - Typed, auditable Jev decisions for Python agents, with an optional shared runtime, offline previews, and calibration.  
  <sub>1 stars · Python · MIT · updated 2026-10-02</sub>
- **[dhirajpatra/agent-harness-with-jev-llm](https://github.com/dhirajpatra/agent-harness-with-jev-llm)** - A small multi-agent harness built around the pattern from LangChain's post: use a fast, non-generative "System One" classifier (TypeSafe AI's Jev) for structured in-loop decisions -- routing and risky-tool-call gating -- and reserve a real chat LLM for the genuinely open-ended reasoning.  
  <sub>1 stars · Python · updated 2026-09-22</sub>
- **[himanshu231204/jev_model](https://github.com/himanshu231204/jev_model)** - No description provided.  
  <sub>1 stars · Jupyter Notebook · MIT · updated 2026-09-22</sub>
- **[jalpp/OpenRecurSearch](https://github.com/jalpp/OpenRecurSearch)** - A real open AI agent + jev web interface that searches the web and creates research reports  
  <sub>1 stars · TypeScript · AGPL-3.0 · updated 2026-09-27</sub>
- **[NeOMakinG/kev-model-router](https://github.com/NeOMakinG/kev-model-router)** - Jev-style model routing powered by kev — a tiny local System One model classifies every request and picks the right LLM. 100% local, 100% free.  
  <sub>1 stars · Python · MIT · updated 2026-09-21</sub>
- **[rominap22/strandsharness-langchain-jev](https://github.com/rominap22/strandsharness-langchain-jev)** - Demo for We Are Developers AI Conference with Strands Harness, LangChain, and Jev  
  <sub>1 stars · Python · MIT · updated 2026-09-25</sub>
- **[rudra72r/jev-guard](https://github.com/rudra72r/jev-guard)** - Fast, cheap guardrails for LLM apps, powered by TypeSafe's Jev model  
  <sub>1 stars · Python · MIT · updated 2026-09-26</sub>
- **[thejoeejoee/git-judge-commits](https://github.com/thejoeejoee/git-judge-commits)** - ⚖️  Judge git commits with Jev: is it breaking, does it deserve attention, and does its message tell the truth?  
  <sub>1 stars · Python · MIT · updated 2026-09-20</sub>
- **[ThiagaoBR/typesafe_agent_gates](https://github.com/ThiagaoBR/typesafe_agent_gates)** - LangChain / Deep Agents middleware that uses TypeSafe's System One model (Jev) for typed judgments in unattended coding agents: a shell-command gate (database, production, destructive, secrets), issue triage and routing by severity and urgency, merge-request detection, and review of weakened tests. Measured with live probes.  
  <sub>1 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[wojciechwiesner/jit-context-os](https://github.com/wojciechwiesner/jit-context-os)** - JIT-JEV Context OS for Agent Zero — Epistemic runtime, JEV System 1 decision gate, 3-tier memory cascade (L0/L1/L2) & prompt-caching optimization  
  <sub>1 stars · Python · updated 2026-09-30</sub>
- **[aiwithenoch/Jev-Skill](https://github.com/aiwithenoch/Jev-Skill)** - Open-source Jev harness for TypeSafe, OpenJev, LocalJev, Ollama, vLLM, LM Studio, llama.cpp. Typed decisions, calibration, verification, abstention, CI gates.  
  <sub>0 stars · Python · updated 2026-09-22</sub>
- **[akrdixit/jev_support_router](https://github.com/akrdixit/jev_support_router)** - No description provided.  
  <sub>0 stars · Python · updated 2026-09-29</sub>
- **[bpmforbusiness/jev-agent-harness](https://github.com/bpmforbusiness/jev-agent-harness)** - Jev (TypeSafe AI System One) agent harness guide + video manual — from the LangChain 'Building a Harness with Jev' post. Learn Jev Noul/Choice/Score questions, Model Router, and AutoMode guardrails with LangChain.  
  <sub>0 stars · updated 2026-09-22</sub>
- **[CMaintz/jev-rerank](https://github.com/CMaintz/jev-rerank)** - Jev-powered relevance filtering and reranking for RAG. Score, sort, and filter retrieved passages with one batched call. Drop-in reranker at a fraction of hosted-rerank cost.  
  <sub>0 stars · Python · MIT · updated 2026-10-02</sub>
- **[davyjones7321/jev-state-engine](https://github.com/davyjones7321/jev-state-engine)** - No description provided.  
  <sub>0 stars · Python · updated 2026-10-02</sub>
- **[gbesse/jev-rerank-server](https://github.com/gbesse/jev-rerank-server)** - Drop-in rerank API served by Jev: speaks the Cohere, Jina and Voyage rerank protocols, so any RAG stack switches by changing a URL.  
  <sub>0 stars · JavaScript · MIT · updated 2026-10-04</sub>
- **[henryzhangpku/jevelin](https://github.com/henryzhangpku/jevelin)** - Fast, low-cost real-time agents: take small decisions off the critical path with a System One classifier (Jev). Live demo in your browser.  
  <sub>0 stars · Python · MIT · updated 2026-09-25</sub>
- **[itsatgupta/Jev](https://github.com/itsatgupta/Jev)** - JevDemo to compare which llm can do the job better  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-25</sub>
- **[izam-mohammed/decisionsmith](https://github.com/izam-mohammed/decisionsmith)** - Use and fine-tune System One models (Jev, Laya) on your data, with an LLM as the teacher.  
  <sub>0 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[lim6112j/jev-example](https://github.com/lim6112j/jev-example)** - No description provided.  
  <sub>0 stars · Python · updated 2026-09-22</sub>
- **[mkgraiitr/investment-scanner-agent-jev](https://github.com/mkgraiitr/investment-scanner-agent-jev)** - Educational example to learn Jev concepts (TypeSafe.ai) with an AI Agent.  
  <sub>0 stars · Python · MIT · updated 2026-09-27</sub>
- **[panchambanerjee/jev_expts](https://github.com/panchambanerjee/jev_expts)** - Experiments with TypeSafe AI's System One Model Jev  
  <sub>0 stars · Python · updated 2026-09-22</sub>
- **[PromptEngineer48/langchain-jev-tutorial](https://github.com/PromptEngineer48/langchain-jev-tutorial)** - LangChain + Jev (TypeSafe) tutorial: a support-ops agent whose small decisions (triage, model routing, tool guarding, evals) are made by Jev. Real run outputs included.  
  <sub>0 stars · Python · MIT · updated 2026-09-24</sub>
- **[Sahil-coder-30/jev-langgraph-router](https://github.com/Sahil-coder-30/jev-langgraph-router)** - ⚡ Autonomous Multi-Model Routing Engine powered by TypeSafe Jev System One (<250ms, 97.4% cost savings), LangGraph State Machine, Dual-Tier In-Path Security Firewall, and real-time Mistral Large & Google Gemini execution.  
  <sub>0 stars · TypeScript · updated 2026-09-22</sub>
- **[seanmphelps-ai/jev-ux-eve](https://github.com/seanmphelps-ai/jev-ux-eve)** - JEV-UX decision layer console + Eve agent harness on Vercel  
  <sub>0 stars · TypeScript · updated 2026-10-04</sub>
- **[shntnu/jev-claim-check](https://github.com/shntnu/jev-claim-check)** - Check biomedical claims against cited abstracts with DSPy and Jev, as a marimo notebook for molab  
  <sub>0 stars · Python · MIT · updated 2026-09-26</sub>
- **[Yasir-Khan-7/jev-sentinel](https://github.com/Yasir-Khan-7/jev-sentinel)** - Prompt injection protection & tool-call guardrails for LangChain / LangGraph AI agents. Screens tool outputs, gates risky tool calls (allow / human review / block), powered by TypeSafe Jev.  
  <sub>0 stars · Python · MIT · updated 2026-09-22</sub>
- **[zbendhiba/camel-jev-routing](https://github.com/zbendhiba/camel-jev-routing)** - No description provided.  
  <sub>0 stars · Java · updated 2026-10-01</sub>

### Evaluation and judging

- **[bespokelabsai/nimble](https://github.com/bespokelabsai/nimble)** - Local typed decisions, contrastive data curation, and model evaluation.  
  <sub>2045 stars · Python · updated 2026-10-03</sub>
- **[kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory)** - Memory for AI agents that learns what is wrong and stops repeating it. Mark a memory wrong and it stops coming back; newer facts replace old ones. Local SQLite store and MCP server, persistent across sessions; hippo init wires it into Claude Code, Codex, Cursor, OpenClaw, OpenCode and Pi. Zero runtime deps, MIT, opt-in hosted TypeSafe Jev reranker.  
  <sub>770 stars · TypeScript · MIT · updated 2026-10-04</sub>
- **[Liuziyu77/Valen](https://github.com/Liuziyu77/Valen)** - Train a Jev-like multimodal model by yourself. System One Model, now with vision.  
  <sub>597 stars · Python · Apache-2.0 · updated 2026-10-02</sub>
- **[TianyuCodings/JevHarness](https://github.com/TianyuCodings/JevHarness)** - LLM-authored task-specific Jev harnesses with optional full-trajectory reward reflection and GEPA evolution.  
  <sub>524 stars · Python · updated 2026-09-21</sub>
- **[Zefan-Cai/Open-Jev](https://github.com/Zefan-Cai/Open-Jev)** - No description provided.  
  <sub>391 stars · Python · MIT · updated 2026-10-04</sub>
- **[BillionsBobby/JevRouter](https://github.com/BillionsBobby/JevRouter)** - A lightweight Jev-powered router for models, tools, and subagents  
  <sub>371 stars · TypeScript · MIT · updated 2026-10-04</sub>
- **[malevrigns/agent-jev](https://github.com/malevrigns/agent-jev)** - AgentJev-0.6B - a fast 'System One' decision model for AI Agents: feed it any unstructured state (diffs, traces, logs) and structured questions, get calibrated probability distributions back in one ~50ms forward pass. Zero output-token decoding.  
  <sub>338 stars · Python · Apache-2.0 · updated 2026-10-01</sub>
- **[Heman10x-NGU/openJev-verdict-2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0)** - Calibrated 151M Non-Autoregressive Decision Engine beating TypeSafe Jev & Laya on LocalLLaMA/typed-decisions (77.10% acc, 0.0636 Brier, 0.0144 ECE)  
  <sub>293 stars · Python · updated 2026-09-20</sub>
- **[monteduro/killmyidea](https://github.com/monteduro/killmyidea)** - Describe your startup idea. Jev decides: kill it, fix it or ship it.  
  <sub>251 stars · TypeScript · updated 2026-09-24</sub>
- **[NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review)** - Local-first MCP plugin for continuous software-quality review by AI coding agents, powered by Jev.  
  <sub>233 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[CharlesFeng0314/JEV_sees](https://github.com/CharlesFeng0314/JEV_sees)** - Eyes are All JEV Needs - real time visual devisions from RGB, video and RGB-D cameras.  
  <sub>216 stars · Python · MIT · updated 2026-10-02</sub>
- **[fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench)** - JevBench v1 - a benchmark for Jev-class typed decision models: smart, cheap, fast, reliable, open.  
  <sub>212 stars · Python · MIT · updated 2026-09-29</sub>
- **[y0usaf/pi-jev](https://github.com/y0usaf/pi-jev)** - TypeSafe Jev as a decision layer for the Pi coding agent: a measured tool-call gate plus jev_ask for typed, calibrated answers  
  <sub>156 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[dorkitude/webctl](https://github.com/dorkitude/webctl)** - Smart web search CLI for agents, backed by Jev. Saves a lot of tokens.  
  <sub>150 stars · Go · MIT · updated 2026-09-23</sub>
- **[zwliJay/jev-forge](https://github.com/zwliJay/jev-forge)** - An open training and inference stack for Jev-style decision models.  Train models to score dynamic candidate branches from a shared prefix, with support for high-cardinality choice, calibration, and fast batched inference.  
  <sub>131 stars · Python · updated 2026-09-23</sub>
- **[codegirl-007/jevlint](https://github.com/codegirl-007/jevlint)** - A linter to codify code taste using Jev  
  <sub>125 stars · Go · MIT · updated 2026-10-03</sub>
- **[daseinlabs/open-jev](https://github.com/daseinlabs/open-jev)** - Open Jev implementation with custom finetuning  
  <sub>123 stars · Python · MIT · updated 2026-09-30</sub>
- **[michaelswissa/jevry](https://github.com/michaelswissa/jevry)** - Your browser. Ready to act. An MIT-licensed desktop browser agent for website tasks, cited research, and supported games.  
  <sub>121 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[Heman10x-NGU/Verdict-open-jev](https://github.com/Heman10x-NGU/Verdict-open-jev)** - Non-autoregressive decision engine on ModernBERT (151M) with calibrated uncertainty (RLCD), TypeSafe AI Jev benchmark audit, and in-browser WebGPU playground  
  <sub>111 stars · Python · updated 2026-09-28</sub>
- **[qkal/Canny](https://github.com/qkal/Canny)** - Stops AI coding agents from claiming work is done without evidence. Deterministic hooks decide, TypeSafe's Jev advises. Append-only ledger, zero runtime dependencies.  
  <sub>109 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[ChetasLua/jevmeter](https://github.com/ChetasLua/jevmeter)** - Put a live Jev (TypeSafe) meter on any video: every sentence scored, rendered as a 16:9 edit  
  <sub>106 stars · Python · MIT · updated 2026-09-17</sub>
- **[openqa-cn/jev-browser](https://github.com/openqa-cn/jev-browser)** - Jev Browser — indexed browser automation. Jev chooses the control, Playwright acts. A CodexQA skill.  
  <sub>105 stars · TypeScript · MIT · updated 2026-09-28</sub>
- **[GhalebDweikat/winnow](https://github.com/GhalebDweikat/winnow)** - A calibrated context sieve for Claude Code: every tool result is judged by a System One model before it enters context.  
  <sub>101 stars · Python · MIT · updated 2026-09-30</sub>
- **[AkashPriyadarshii/jev-curate](https://github.com/AkashPriyadarshii/jev-curate)** - High-throughput synthetic and pretraining dataset sifter for TypeSafe Jev. Rust streaming core, Parquet and JSONL I/O, typed Choice/Score/Noul judgments, speculative fan-out, 24.0 rows/sec measured.  
  <sub>99 stars · Rust · MIT · updated 2026-10-02</sub>
- **[nassim-arifette/jevgrep](https://github.com/nassim-arifette/jevgrep)** - Jev-powered semantic code search for coding agents — find behavior across repositories via CLI or MCP, with exact source excerpts and line numbers.  
  <sub>99 stars · TypeScript · MIT · updated 2026-09-27</sub>
- **[danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge)** - Using Jev as an evaluator.  
  <sub>98 stars · Python · updated 2026-09-23</sub>
- **[UditAkhourii/quicksilver](https://github.com/UditAkhourii/quicksilver)** - Claude Code skill: hand bulk judgment calls to Jev. 86% fewer Claude tokens on a 12-task benchmark, up to 20x faster. One-line npx install.  
  <sub>98 stars · JavaScript · MIT · updated 2026-09-25</sub>
- **[PyModel/jev-judge-mcp](https://github.com/PyModel/jev-judge-mcp)** - Typed judgment tools for MCP agents. TypeSafe's Jev model as verify, screen, find, classify, rerank, decide, compare, extract, review, gate, and score: the model judges, policy decides auto, review, or escalate.  
  <sub>91 stars · Python · MIT · updated 2026-10-02</sub>
- **[realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock)** - 🧹 Fun project: a Chrome extension that asks a tiny AI decision model (TypeSafe Jev) "is this DOM element an ad?" and pops it off the page. BYOK, no backend, not a real ad blocker.  
  <sub>89 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[ikermoel/open-alternative-jev](https://github.com/ikermoel/open-alternative-jev)** - Open-source alternative to TypeSafe's Jev: a System One style model layer that gives typed, calibrated decisions from any open-weights LLM in one forward pass (HF + vLLM), with honest benchmarks  
  <sub>62 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[RenaGao/jev-dataops](https://github.com/RenaGao/jev-dataops)** - An open-source JEV-powered workbench for streaming data selection, quality evaluation, automatic LoRA training and held-out model evaluation.  
  <sub>61 stars · Python · MIT · updated 2026-09-23</sub>
- **[Shanghua-Gao/RSI-Jev](https://github.com/Shanghua-Gao/RSI-Jev)** - Typed-decision models (noul / choice / score) trained by a self-improving loop of AI agents — checkpoints, the code that produced them, and every version that failed.  
  <sub>61 stars · HTML · MIT · updated 2026-10-03</sub>
- **[SimpleJev/JevAny](https://github.com/SimpleJev/JevAny)** - Open infrastructure for training, evaluating, and deploying System 1 decision models across language and multimodal backbones.  
  <sub>56 stars · Python · Apache-2.0 · updated 2026-10-03</sub>
- **[weitianxin/JevAny](https://github.com/weitianxin/JevAny)** - Open infrastructure for training, evaluating, and deploying System 1 decision models across language and multimodal backbones.  
  <sub>56 stars · Python · Apache-2.0 · updated 2026-10-03</sub>
- **[lykycy123/RoboJEV](https://github.com/lykycy123/RoboJEV)** - Two-stage JEV control of a Franka Panda in MuJoCo  
  <sub>54 stars · Python · Apache-2.0 · updated 2026-09-27</sub>
- **[bodepudimuneendra-netizen/laya-jev-GraphRAG](https://github.com/bodepudimuneendra-netizen/laya-jev-GraphRAG)** - A database-agnostic Agentic GraphRAG framework using swappable System One models (local Laya / cloud Jev). A plug-and-play intelligence layer featuring a complete 4-phase pipeline, continuous evaluation and custom A* traversal for any graph database.  
  <sub>49 stars · Python · Apache-2.0 · updated 2026-09-29</sub>
- **[YuanKJing/Jev-as-Policy](https://github.com/YuanKJing/Jev-as-Policy)** - The highly anticipated open-source repository for JEV as Policy enables one-click setup of the simulation environment. Evaluations of Astra + JEV on benchmarks such as RoboTwin will also be released soon.  
  <sub>47 stars · Python · MIT · updated 2026-09-21</sub>
- **[DevMortimer/pi-typesafe](https://github.com/DevMortimer/pi-typesafe)** - TypeSafe decisions for Pi: batched evaluation tool, terminal playground, and typed API for extension authors  
  <sub>46 stars · TypeScript · MIT · updated 2026-10-04</sub>
- **[kbhuw/jev-sift](https://github.com/kbhuw/jev-sift)** - Classify first. Read selectively. A portable agent plugin and MCP tool for batch text classification.  
  <sub>46 stars · JavaScript · updated 2026-09-18</sub>
- **[intikhab49/open-jev-typed-decision-engine](https://github.com/intikhab49/open-jev-typed-decision-engine)** - Open reproduction of TypeSafe Jev: a 150M typed decision engine (noul/choice/score in one non-autoregressive pass, calibrated confidence). 0.697 vs Jev's 0.727, 2.5x better calibrated, 4x faster, free. Trains on a Colab T4 in 30 min.  
  <sub>44 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[JoshuaSP/open-jev](https://github.com/JoshuaSP/open-jev)** - Typed JSON inference with DiffusionGemma, with Every and Jev benchmark results  
  <sub>41 stars · Python · MIT · updated 2026-09-16</sub>
- **[kiwi0719/jev-edge](https://github.com/kiwi0719/jev-edge)** - Typed-judgment admission control at the traffic edge: three-layer prompt-injection and abuse filter for nginx/OpenResty, powered by TypeSafe Jev. Fail-open, cached, hot-reloadable.  
  <sub>41 stars · Lua · Apache-2.0 · updated 2026-09-30</sub>
- **[shantanugoel/ask-jev-skill](https://github.com/shantanugoel/ask-jev-skill)** - Skill for Hermes, and other agents, to ask typesafe's jev  
  <sub>41 stars · Python · MIT · updated 2026-09-17</sub>
- **[cclank/jevclip](https://github.com/cclank/jevclip)** - Jev-powered video highlights and cited summaries from subtitles and scripts  
  <sub>39 stars · Python · MIT · updated 2026-09-24</sub>
- **[VGabriel45/polymarket-btc5m-jev-trading](https://github.com/VGabriel45/polymarket-btc5m-jev-trading)** - 5m BTC Up/Down Polymarket trading agent using Typesafe Jev as the decision layer & TUI  
  <sub>39 stars · TypeScript · updated 2026-09-21</sub>
- **[iammrduncan/typesafe-ai-benchmark](https://github.com/iammrduncan/typesafe-ai-benchmark)** - This is a LLM Gateway that mimics typesafe ai structured output. Like an imposter Jev.  
  <sub>38 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[mithalouni/system-one-open](https://github.com/mithalouni/system-one-open)** - Open replica of TypeSafe's Jev: typed calibrated decisions in one forward pass, on Gemma 4 E2B / Gemma 3 270M (Modal)  
  <sub>38 stars · Python · updated 2026-09-17</sub>
- **[klauswg/jev-guard](https://github.com/klauswg/jev-guard)** - Real-time risk triage gateway for exchange deposits and withdrawals — Jev (TypeSafe System One) handles triage only; adjudication stays in deterministic code.  
  <sub>36 stars · Java · MIT · updated 2026-09-22</sub>
- **[zhihz/openjev](https://github.com/zhihz/openjev)** - Local bilingual probability decisions from context, questions, and candidate answers. Independent research preview inspired by TypeSafe Jev.  
  <sub>35 stars · Python · updated 2026-09-16</sub>
- **[shaharia-lab/jev-cli](https://github.com/shaharia-lab/jev-cli)** - Command-line tool for TypeSafe AI's Jev model. Ask yes/no, multiple-choice and rubric questions about any text and get calibrated probabilities back. Answers become exit codes for shells and CI, JSON for scripts, and MCP tools for AI agents.  
  <sub>34 stars · Rust · Apache-2.0 · updated 2026-09-29</sub>
- **[klauswg/jev-suite](https://github.com/klauswg/jev-suite)** - Four decision-quality tools on Jev (TypeSafe System One): Jev answers structured questions, deterministic code keeps the final say.  
  <sub>33 stars · Java · MIT · updated 2026-09-23</sub>
- **[karminski/Jev-Quantum](https://github.com/karminski/Jev-Quantum)** - 亚微秒级 System-1 模型，准确率服从高斯分布  
  <sub>32 stars · Rust · MIT · updated 2026-09-21</sub>
- **[smkrv/jev-calibrate](https://github.com/smkrv/jev-calibrate)** - Calibrate Jev questions against your own labels: tune criteria on labelled examples, confirm on a held-out set, get a verdict per question. Unofficial.  
  <sub>31 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[PromptEngineer48/laya-vs-jev-arena](https://github.com/PromptEngineer48/laya-vs-jev-arena)** - Laya (open source, local) vs TypeSafe Jev (API): two AI models race in Snake and fight in a Mortal-Kombat-style arena. Every move is a real model decision.  
  <sub>30 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[compozy/yoshi](https://github.com/compozy/yoshi)** - Context-pruning proxy for Claude Code and Codex: Jev judges which history is still needed, measured not claimed. POC here now, heading soon into https://github.com/compozy/compozy  
  <sub>28 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[phyous/tsai-sc](https://github.com/phyous/tsai-sc)** - TypeSafe Jev controls original StarCraft shareware through keyboard and mouse with recorded action probabilities.  
  <sub>28 stars · Python · MIT · updated 2026-09-16</sub>
- **[myc0576/SmartMoney-Cub](https://github.com/myc0576/SmartMoney-Cub)** - Read-only trading journal and review harness: Jev typed judgments, agent integration, and a reproducible finance benchmark. No orders, no advice.  
  <sub>26 stars · Python · MIT · updated 2026-09-25</sub>
- **[Zaious/jev-capability-atlas](https://github.com/Zaious/jev-capability-atlas)** - Independent, evidence-based map of when TypeSafe's Jev actually holds up vs. breaks down — real API-call receipts, not a leaderboard. 中文為主的雙語 repo。  
  <sub>26 stars · Python · MIT · updated 2026-09-24</sub>
- **[ItIsCuthNotCup/MetaCog](https://github.com/ItIsCuthNotCup/MetaCog)** - Metacognition for any agent. Drastically improves accuracy with almost no increase in cost.  
  <sub>25 stars · Python · MIT · updated 2026-09-30</sub>
- **[jcpsimmons/jev-macos-loop](https://github.com/jcpsimmons/jev-macos-loop)** - Open-source macOS AI computer use and native GUI automation on Apple silicon. Jev + OmniParser CoreML + Apple Vision OCR. Bring your own OpenRouter, Vercel AI Gateway, or TypesafeAI token.  
  <sub>24 stars · JavaScript · AGPL-3.0 · updated 2026-09-18</sub>
- **[kouhxp/gutsy](https://github.com/kouhxp/gutsy)** - Local decision model with calibrated probabilities: send a state and yes/no, choice or score questions, get a probability for every option. 0.8B GGUF on CPU, Jev-style API.  
  <sub>24 stars · Python · Apache-2.0 · updated 2026-10-02</sub>
- **[rorshopping/jev-on-a-laptop](https://github.com/rorshopping/jev-on-a-laptop)** - Unofficial study: Jev-style parallel typed decisions on stock 1.5B-8B models on an Apple Silicon laptop. Benchmarks, research notes, and a Hugging Face Space demo.  
  <sub>24 stars · Python · updated 2026-09-17</sub>
- **[unicodeveloper/jevocks](https://github.com/unicodeveloper/jevocks)** - Everyday Stocks Status with Jev  
  <sub>24 stars · TypeScript · updated 2026-09-18</sub>
- **[AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks)** - Probability-aware evaluation for typed decision models: calibration, selective risk, latency, and reproducible benchmarks.  
  <sub>23 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[madisonrickert/jev-permission-gate](https://github.com/madisonrickert/jev-permission-gate)** - A Claude Code mod that uses TypeSafe's Jev to decide auto mode tool calls. 2x faster than the built-in classifier on the calls it decides.  
  <sub>23 stars · TypeScript · MIT · updated 2026-10-04</sub>
- **[theaiautomators/jev-arena](https://github.com/theaiautomators/jev-arena)** - A local evaluation lab for decision models. Compare accuracy, speed and memory requirements through an interactive dashboard, inspectable test cases, workflow replays and shareable reports.  
  <sub>22 stars · Python · MIT · updated 2026-09-28</sub>
- **[zjunlp/JevLoop](https://github.com/zjunlp/JevLoop)** - Acta: A Decision-Centric Runtime for Agents  
  <sub>22 stars · TypeScript · Apache-2.0 · updated 2026-09-30</sub>
- **[abhishek085/open-spark-jev](https://github.com/abhishek085/open-spark-jev)** - Open-source, local decision models inspired by TypeSafe’s Jev and System One - built on Qwen3 for NVIDIA DGX Spark.  
  <sub>21 stars · Python · Apache-2.0 · updated 2026-10-02</sub>
- **[lyramakesmusic/jevbot](https://github.com/lyramakesmusic/jevbot)** - discord bot for jev that lets it talk  
  <sub>21 stars · Python · updated 2026-09-24</sub>
- **[NiazMorshed2007/jcr](https://github.com/NiazMorshed2007/jcr)** - A Jev-powered resolver for agent harnesses to find deterministic commands and their context in a nested capability tree.  
  <sub>19 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[thusinh1969/BrighTO_Router](https://github.com/thusinh1969/BrighTO_Router)** - BrighTO LLM Router: free open-source, ultra-fast self-hosted Rust LLM gateway for OpenAI/Anthropic APIs, SystemOne/JEV/DJEV decisions, Ollaya/Laya, load balancing, fallback routing, team keys and token budgets.  
  <sub>19 stars · Rust · Apache-2.0 · updated 2026-09-29</sub>
- **[QuicqDev/Jev-vs-ML](https://github.com/QuicqDev/Jev-vs-ML)** - Jev-vs-ML  
  <sub>17 stars · Jupyter Notebook · updated 2026-09-22</sub>
- **[j1s4nn/duomind](https://github.com/j1s4nn/duomind)** - When Jev meets LLM -- Pair a small local LLM (System 2) with Jev model (System 1) to make small model more faster and accurate — OpenAI-compatible, private, and almost free to run in Kilo code and Cline.  
  <sub>16 stars · Python · MIT · updated 2026-09-29</sub>
- **[AgoraIO-Community/convoai-jev-vad](https://github.com/AgoraIO-Community/convoai-jev-vad)** - Jev VAD: client-side turn detection for Agora Conversational AI — manual SoS/EoS and semantic barge-in judged by TypeSafe Jev  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[AntonioCoppe/jev-harness](https://github.com/AntonioCoppe/jev-harness)** - Decision harness for TypeSafe Jev — confidence gates, shadow mode, recipes, and evals. Claude CLI 48.9s → Jev 1.3s on the same row-filter job.  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[madeye/pi-jev](https://github.com/madeye/pi-jev)** - Jev-assisted file retrieval and request caching for faster Pi workflows  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[yzfly/edgejev](https://github.com/yzfly/edgejev)** - 离线可用的本地类型化决策：4 核 CPU 单题 15.6ms。Local & offline Jev / System One inference on CPU — ONNX + INT8, no torch at runtime. 支持 laya / kev / PlayJev  
  <sub>15 stars · Python · updated 2026-09-21</sub>
- **[cth9191/jev-compaction-plus](https://github.com/cth9191/jev-compaction-plus)** - Claude Code compaction in ~0.5 s instead of ~35 s: Jev keeps what's still needed word for word and moves the rest to a drawer file. Fork of fast-jev-compaction.  
  <sub>14 stars · TypeScript · MIT · updated 2026-10-02</sub>
- **[harshithsunku/learn-jev-end-to-end](https://github.com/harshithsunku/learn-jev-end-to-end)** - Learn Jev end to end: a free hands-on course. Build 13 AI agent use cases with a fast brain (Jev) and a slow brain (LLM). One OpenRouter key.  
  <sub>14 stars · Jupyter Notebook · MIT · updated 2026-09-23</sub>
- **[Micha0827/snapjudge](https://github.com/Micha0827/snapjudge)** - Typed decisions (choice / score / yes-no) from local Qwen models on Apple Silicon. Probabilities come straight from the logits, no text generation. TypeSafe-compatible HTTP API, runs on MLX.  
  <sub>14 stars · Python · MIT · updated 2026-09-21</sub>
- **[filedcom/playjev](https://github.com/filedcom/playjev)** - Fast, typed browser automation powered by Jev and Playwright  
  <sub>13 stars · TypeScript · MIT · updated 2026-10-04</sub>
- **[perixtar/jev-e2e](https://github.com/perixtar/jev-e2e)** - Natural-language end-to-end tests for web apps, powered by Jev and Playwright.  
  <sub>13 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[philippdubach/pi-jev-router](https://github.com/philippdubach/pi-jev-router)** - A minimal Pareto-optimal OpenRouter model router for pi, based on Jev  
  <sub>13 stars · TypeScript · MIT · updated 2026-09-28</sub>
- **[S1LV3RJ1NX/openjev](https://github.com/S1LV3RJ1NX/openjev)** - Open System One models: typed decisions with calibrated probabilities, trainable on your own data. No text generation.  
  <sub>13 stars · Python · Apache-2.0 · updated 2026-09-23</sub>
- **[stefafafan/jev](https://github.com/stefafafan/jev)** - An unofficial, provider-neutral Unix client for Jev from TypeSafe AI. Written in Go.  
  <sub>13 stars · Go · MIT · updated 2026-10-03</sub>
- **[Twister915/typesafe-ai](https://github.com/Twister915/typesafe-ai)** - Typed TypeSafe AI clients for Rust, with async and blocking backends and observable retries.  
  <sub>13 stars · Rust · Apache-2.0 · updated 2026-09-16</sub>
- **[collapseindex/jev-ultralightspeed](https://github.com/collapseindex/jev-ultralightspeed)** - BRRRRRRRRRRRRRRRRRRRRRR  
  <sub>12 stars · Python · updated 2026-09-22</sub>
- **[harshwasan/jev-sentinel](https://github.com/harshwasan/jev-sentinel)** - Pi coding-agent extension: TypeSafe Jev checks for tool calls, tool outputs and replies (prompt injection, approvals, secret scrubbing, task pinning)  
  <sub>12 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[harshwasan/pi-jev-sentinel](https://github.com/harshwasan/pi-jev-sentinel)** - Pi coding-agent extension: TypeSafe Jev checks for tool calls, tool outputs and replies (prompt injection, approvals, secret scrubbing, task pinning)  
  <sub>12 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[24601/Augustus](https://github.com/24601/Augustus)** - Agent skills for designing, training, evaluating and improving application-specific decision systems. Primitive/model selection, data assembly, export/reload and bounded hill climbing. TypeSafe Jev is the default hosted exemplar; independent of TypeSafe.  
  <sub>11 stars · Python · MIT · updated 2026-09-28</sub>
- **[Emlembow/jev-graph-search](https://github.com/Emlembow/jev-graph-search)** - Jev-assisted retrieval and evidence-preserving inspection for local Markdown, Obsidian vaults, and Logseq Markdown graphs.  
  <sub>11 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[ethan-ab/xscout-jev](https://github.com/ethan-ab/xscout-jev)** - Watch X for the news that matters to you, judged by Jev, and get alerted in Slack. Set up by an AI agent.  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-28</sub>
- **[nibzard/decision-model-benchmark](https://github.com/nibzard/decision-model-benchmark)** - Independent, reproducible benchmark: a decision model (jev), eight constrained LLMs, and deterministic baselines on typed decisions - accuracy, calibration, latency, cost, failure modes  
  <sub>11 stars · HTML · updated 2026-09-30</sub>
- **[zhuyansen/jev-search-rerank-eval](https://github.com/zhuyansen/jev-search-rerank-eval)** - Does a TypeSafe Jev rerank beat embedding search? Graded relevance eval (9,831 pairs, 164 zh/en queries) over the Agent Skills Hub catalog, with the judge-circularity bias measured.  
  <sub>11 stars · Python · MIT · updated 2026-09-18</sub>
- **[AbdelStark/lejudge-jev-jepa](https://github.com/AbdelStark/lejudge-jev-jepa)** - Natural-language constraints for JEPA world-model planning, judged by a decision model instead of an LLM.  
  <sub>10 stars · Python · MIT · updated 2026-09-24</sub>
- **[abhixhek/jevcal](https://github.com/abhixhek/jevcal)** - Stop guessing confidence thresholds: calibrate, threshold, and drift-check typed decision models (TypeSafe Jev) against an LLM teacher.  
  <sub>10 stars · Python · MIT · updated 2026-09-18</sub>
- **[carlaiau/jev-reranking](https://github.com/carlaiau/jev-reranking)** - Search engine experimentation on the TREC collections. Currently focused on zero-shot reranking implementations with typesafe.ai's JEV model  
  <sub>10 stars · Python · MIT · updated 2026-09-25</sub>
- **[codejunkie99/jev-engineering](https://github.com/codejunkie99/jev-engineering)** - Jev Engineering: Typed Decision Systems for Reliable Agent Workflows. Paper, diagrams, and companion examples by Av1dlive.  
  <sub>10 stars · JavaScript · updated 2026-09-21</sub>
- **[doeixd/jev-pref](https://github.com/doeixd/jev-pref)** - Turn your AGENTS.md preferences into a fast, Jev-powered AI linter.  
  <sub>10 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[HexyeDEV/JevPR](https://github.com/HexyeDEV/JevPR)** - PR Risk review, automated by Jev  
  <sub>10 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[zeeshan8281/slo-router](https://github.com/zeeshan8281/slo-router)** - SLO-aware LLM inference router with Jev decisions, live queue metrics, counterfactual evaluation, and reproducible latency/cost benchmarks  
  <sub>10 stars · Python · updated 2026-09-23</sub>
- **[caiovicentino/jev-risk-check-provider](https://github.com/caiovicentino/jev-risk-check-provider)** - x402 risk-check provider: signed pre-payment verdicts — OFAC, phishing feeds, transaction simulation, drainer-kit code, and our own EIP-7702 kit watch (poisoners, sweepers). $0.001 per check with prepaid credits; per call via x402 from $0.0035.  
  <sub>9 stars · TypeScript · MIT · updated 2026-10-04</sub>
- **[Emenowicz/jev-sap-commerce](https://github.com/Emenowicz/jev-sap-commerce)** - SAP Commerce extension using TypeSafe's Jev to moderate product reviews and suggest product categories and classification attribute values: dry runs on your own data first, an audit record per decision. Plus a Claude Code skill.  
  <sub>9 stars · Java · Apache-2.0 · updated 2026-09-25</sub>
- **[green-dalii/pi-shift-router](https://github.com/green-dalii/pi-shift-router)** - Per-turn model routing for the Pi coding agent: a small judge picks the cheap or the strong tier for each message, with multi-model failover, task-level orchestration, and an optional decision-model judge (Jev) that answers with a calibrated probability instead of prose.  
  <sub>9 stars · TypeScript · MIT · updated 2026-10-03</sub>
- **[imMamdouhaboammar/fable-jev](https://github.com/imMamdouhaboammar/fable-jev)** - ⚡ Sub-100ms cognitive reflexes for autonomous coding agents. Powered by TypeSafe AI's Jev & get-fable.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[johnamcruz/algoTraderBot](https://github.com/johnamcruz/algoTraderBot)** - Live TopstepX bot trading on futures, AI-graded entries (Chronos+XGBoost) with a PPO-learned trailing-stop exit.  
  <sub>9 stars · Python · MIT · updated 2026-10-02</sub>
- **[khimaros/verdict](https://github.com/khimaros/verdict)** - turn any llama-server into a jev system one endpoint  
  <sub>9 stars · Python · GPL-3.0 · updated 2026-10-02</sub>
- **[robertn702/opencode-jev-router](https://github.com/robertn702/opencode-jev-router)** - Adaptive reasoning effort for OpenCode via Jev, with an in-process plugin and Responses API proxy  
  <sub>9 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[TholeG/typesafe-chess](https://github.com/TholeG/typesafe-chess)** - Chess where both players are TypeSafe's Jev model: every move is a typed Choice decision  
  <sub>9 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[aifabrice/jev-rag](https://github.com/aifabrice/jev-rag)** - Jev RAG (Jev-RAG / JevRAG): open-source local knowledge search with BM25 + Jev reranking, agentic and hybrid retrieval, cited answers, and reproducible benchmarks.  
  <sub>8 stars · Python · MIT · updated 2026-10-04</sub>
- **[bradAGI/ruling](https://github.com/bradAGI/ruling)** - Typed, calibrated decisions from a local model. No text generated.  
  <sub>8 stars · Python · MIT · updated 2026-10-03</sub>
- **[cablehead/jev.nu](https://github.com/cablehead/jev.nu)** - Nushell module for the TypeSafe System One API: typed decisions with calibrated probabilities  
  <sub>8 stars · Nushell · MIT · updated 2026-09-21</sub>
- **[danielnc/jev-browse](https://github.com/danielnc/jev-browse)** - Fast, cheap browser sub-tasks for Claude and other agents: TypeSafe Jev decisions on top of browser-harness  
  <sub>8 stars · Python · MIT · updated 2026-09-27</sub>
- **[miniLV/Jev-Auto-Router](https://github.com/miniLV/Jev-Auto-Router)** - Jev Auto Router (Jev Router): experimental per-call GPT model routing for Codex via TypeSafe Jev and a local Responses proxy, with independent task verification.  
  <sub>8 stars · TypeScript · Apache-2.0 · updated 2026-09-23</sub>
- **[prasanthj/duckdb-jev](https://github.com/prasanthj/duckdb-jev)** - High-throughput, robust native DuckDB extension for batched and streaming TypeSafe/Jev classification, scoring, and semantic predicates from SQL.  
  <sub>8 stars · C++ · Apache-2.0 · updated 2026-09-30</sub>
- **[SoundBlaster/SwiftJev](https://github.com/SoundBlaster/SwiftJev)** - Swift framework to access Jev System One model by TypeSafe.ai  
  <sub>8 stars · Swift · MIT · updated 2026-10-02</sub>
- **[xyzzzh/GroundingJev](https://github.com/xyzzzh/GroundingJev)** - Jev-inspired non-autoregressive visual grounding with Qwen3.5-0.8B and continuous box regression.  
  <sub>8 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[AIGNLAI/ReflexRoute](https://github.com/AIGNLAI/ReflexRoute)** - Fast zero-shot and few-shot LLM routing powered by Jev.  
  <sub>7 stars · Python · MIT · updated 2026-09-20</sub>
- **[arunav25/jev-mcp](https://github.com/arunav25/jev-mcp)** - Connect JEV to MCP clients and compare its judgments against general-purpose LLMs using shared datasets and measurable accuracy.  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[buchmark/claude-jev](https://github.com/buchmark/claude-jev)** - Claude Code plugin that scores review findings, debug hypotheses and design options with TypeSafe's Jev — calibrated probabilities instead of one more opinion.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[caiovicentino/eikos-arena](https://github.com/caiovicentino/eikos-arena)** - Eikos-27B vs Jev: live paper trading on Hyperliquid. Real prices, simulated money, rules hashed before the start.  
  <sub>7 stars · Python · MIT · updated 2026-09-27</sub>
- **[Code-Forge-AU/jev-llm](https://github.com/Code-Forge-AU/jev-llm)** - No description provided.  
  <sub>7 stars · Python · updated 2026-09-17</sub>
- **[daltonrpj/jev-flow](https://github.com/daltonrpj/jev-flow)** - Standalone open-source studio for typed Jev workflows  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-25</sub>
- **[eminetto/typesafe-poc](https://github.com/eminetto/typesafe-poc)** - Prova de Conceito do Jev, modelo da typesafe.ai  
  <sub>7 stars · Go · updated 2026-09-21</sub>
- **[hndrr/ComfyUI-Jev](https://github.com/hndrr/ComfyUI-Jev)** - Jev text interpretation and judgments for ComfyUI.  
  <sub>7 stars · Python · MIT · updated 2026-09-20</sub>
- **[muratcakmak/jev-guard](https://github.com/muratcakmak/jev-guard)** - Probability-scored guardrails for Claude Code: deny rule-breaking edits and unasked-for deploys, route your docs into each prompt, and check the final answer against the turn's own evidence.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[NicolaiLassen/open-bonsai-jev](https://github.com/NicolaiLassen/open-bonsai-jev)** - openjev's mechanism, Bonsai's weights: typed decisions read straight from one forward pass of a 1.75-bit 27B model. Credit to TheoLeeCJ (SemIf/OpenJev) and PrismML.  
  <sub>7 stars · Python · MIT · updated 2026-09-20</sub>
- **[parkavenue9639/jevloop](https://github.com/parkavenue9639/jevloop)** - A Jev-driven general-purpose agent harness for faster, lower-cost execution, with built-in side-by-side experiments against LLM-only agents.  
  <sub>7 stars · Python · Apache-2.0 · updated 2026-09-26</sub>
- **[PromtEngineer/jev-harness](https://github.com/PromtEngineer/jev-harness)** - A Pi agent harness built around TypeSafe's Jev (System One model): router, context picker, gate, verifier. Tested on Neon Postgres branches.  
  <sub>7 stars · Python · MIT · updated 2026-09-24</sub>
- **[rawtreedb/jev-pr-quality](https://github.com/rawtreedb/jev-pr-quality)** - Jev-assisted pull request quality reviews and a multi-repository RawTree dashboard  
  <sub>7 stars · TypeScript · Apache-2.0 · updated 2026-10-01</sub>
- **[schacon/jev-tests](https://github.com/schacon/jev-tests)** - macOS demos comparing typed decision models: FluidUse (laya, CUA-S1-FORMS), Jev, Kev and Claude  
  <sub>7 stars · updated 2026-09-22</sub>
- **[shimo4228/jev-skill-router](https://github.com/shimo4228/jev-skill-router)** - Reference implementation for Jev builders: a Claude Code hook that asks TypeSafe's Jev which skill fits each prompt and logs the answer. Run for a week, 28 of 539 suggestions used, then removed; the README keeps what transfers.  
  <sub>7 stars · Python · MIT · updated 2026-09-30</sub>
- **[ShivamPansuriya/jev-skill-gate](https://github.com/ShivamPansuriya/jev-skill-gate)** - Cut Claude Code's skill manifest by ~75% with TypeSafe Jev. Scores every installed skill for relevance and hides the rest via skillOverrides — 12,750 → 3,185 tokens on a 217-skill install, for $0.0009 a session.  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-23</sub>
- **[stas4000/jev-papers](https://github.com/stas4000/jev-papers)** - 1,000 arXiv AI papers classified with one Jev decision each, checked against an LLM judge. Open rebuild, MIT.  
  <sub>7 stars · Python · MIT · updated 2026-09-21</sub>
- **[ZhangYiqun018/jev-dimabsa](https://github.com/ZhangYiqun018/jev-dimabsa)** - TypeSafe Jev (System One) on DimABSA, SemEval-2026 Task 3 Track A, all three subtasks: V/A regression (lowest 10-corpus micro RMSE among full-coverage teams), triplet extraction, quadruplet extraction. Pure-Jev inference with BM25 examples and train-fitted calibration.  
  <sub>7 stars · Python · updated 2026-09-28</sub>
- **[0xmdinc/jev-medical-bench](https://github.com/0xmdinc/jev-medical-bench)** - No description provided.  
  <sub>6 stars · Python · updated 2026-09-28</sub>
- **[brida-ai/reflexbench](https://github.com/brida-ai/reflexbench)** - ReflexBench — open benchmark and evaluation harness for System One models and typed decision engines  
  <sub>6 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[choxos/jevchess](https://github.com/choxos/jevchess)** - Jev, TypeSafe's System One model, plays chess against any OpenRouter LLM, Stockfish and you. One-page web app with live moves, Jev's move probabilities, saved games and win rates.  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[ckorhonen/jev-lint](https://github.com/ckorhonen/jev-lint)** - A fuzzy linter for coding agents. It checks the code your agent writes against your team's best practices while the agent is still working, not at code review.  
  <sub>6 stars · HTML · MIT · updated 2026-10-03</sub>
- **[David-Lolly/Jev-Compatible](https://github.com/David-Lolly/Jev-Compatible)** - Turn your existing SGLang / vLLM deployment into a Jev-compatible decision service. No training. No model changes. 把你现有的 SGLang / vLLM 部署变成一个兼容 Jev 的决策服务。无需任何修改。无需训练。无需更改模型。  
  <sub>6 stars · Python · updated 2026-09-21</sub>
- **[docxology/daf-jev](https://github.com/docxology/daf-jev)** - daf-jev: composable Python toolkit for TypeSafe's Jev (System One) decision API — question builders, confidence gates, evaluator, calibration, CLI, MCP server, agent skill  
  <sub>6 stars · Python · MIT · updated 2026-09-29</sub>
- **[gemanor/jev-code-review-benchmark](https://github.com/gemanor/jev-code-review-benchmark)** - Comparing Jev, Gemini Flash, and Claude Fable on Python code review rules: cost, speed, accuracy, and consistency. Includes results, charts, and reproducible experiments.  
  <sub>6 stars · Python · MIT · updated 2026-09-17</sub>
- **[h0j5bz0adh0-stack/jev-pilot](https://github.com/h0j5bz0adh0-stack/jev-pilot)** - Fast System-1 Decision, Arbitration & Safety Engine for Autonomous AI Agents (Powered by TypeSafe Jev)  
  <sub>6 stars · Python · MIT · updated 2026-09-23</sub>
- **[instax-dutta/sysone-bench](https://github.com/instax-dutta/sysone-bench)** - First independent head-to-head benchmark of System One decision models (Laya vs Jev) on byte-identical inputs  
  <sub>6 stars · Python · MIT · updated 2026-10-04</sub>
- **[keta1930/what-the-jev](https://github.com/keta1930/what-the-jev)** - What can Jev actually do? Reproducible experiments and research reports exploring its capabilities and limits.  
  <sub>6 stars · Python · MIT · updated 2026-10-04</sub>
- **[mahlernim/jev-korean-benchmark](https://github.com/mahlernim/jev-korean-benchmark)** - Reproducible early-access evaluation of Jev on Korean understanding and medical text, with runtime and cost evidence  
  <sub>6 stars · Python · updated 2026-09-17</sub>
- **[RahulBalakavi/claude-code-jev](https://github.com/RahulBalakavi/claude-code-jev)** - Experimental Jev permission gate for Claude Code via OpenRouter, with reproducible latency and cost benchmarks  
  <sub>6 stars · Python · MIT · updated 2026-09-19</sub>
- **[rcarmo/go-system-one](https://github.com/rcarmo/go-system-one)** - when a gopher met Jev  
  <sub>6 stars · Go · MIT · updated 2026-09-29</sub>
- **[thehan-co/jevriel](https://github.com/thehan-co/jevriel)** - Give your AI JEV wings. A skill and plugin to build with TypeSafe Jev, upgrade LLM-only workflows and measure the result.  
  <sub>6 stars · JavaScript · Apache-2.0 · updated 2026-09-28</sub>
- **[vinilana/jev-gateway-bench](https://github.com/vinilana/jev-gateway-bench)** - Benchmark for jev-gateway: real coding agents on chess engine tasks, with Jev routing on and off  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-25</sub>

<sub>644 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Guardrails and safety

- **[wfzyx/von](https://github.com/wfzyx/von)** - The open-source System One decision model. Sub-15ms, non-autoregressive, local drop-in alternative to TypeSafe Jev.  
  <sub>834 stars · Python · Apache-2.0 · updated 2026-10-03</sub>
- **[aaddrick/building-with-typesafe-jev](https://github.com/aaddrick/building-with-typesafe-jev)** - Unofficial skill that teaches coding agents to build with TypeSafe AI's Jev: typed decisions, calibrated confidence, and prior art from 150+ community projects.  
  <sub>130 stars · Python · MIT · updated 2026-10-01</sub>
- **[hyperspaceai/jevcache](https://github.com/hyperspaceai/jevcache)** - A decision cache for TypeSafe Jev-class models — memoize decisions so repeats are free, deterministic, and shareable. One 2 MB binary.  
  <sub>75 stars · updated 2026-09-19</sub>
- **[wobsoriano/oxlint-plugin-jev](https://github.com/wobsoriano/oxlint-plugin-jev)** - No description provided.  
  <sub>66 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[leepokai/jev-guard](https://github.com/leepokai/jev-guard)** - Auto mode for every coding agent, built on Jev: risk-scores every tool call with session context (deny / ask / allow), flags prompt injection in results, checks skills and plugins. Claude Code, Codex, Copilot, Gemini, Cursor, pi, OpenCode, ACP.  
  <sub>58 stars · JavaScript · MIT · updated 2026-10-02</sub>
- **[brainstormity/Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot)** - No description provided.  
  <sub>46 stars · Python · MIT · updated 2026-09-22</sub>
- **[nexibeo/jev-cookbook](https://github.com/nexibeo/jev-cookbook)** - Practical, tested recipes for TypeSafe's Jev decision model on OpenRouter: support triage, database indexing, file organizing, tagging, taxonomies, dedupe, PII detection, extraction, search re-ranking and a browser agent.  
  <sub>36 stars · JavaScript · MIT · updated 2026-09-26</sub>
- **[jomatsu/pi-jev-auto-mode](https://github.com/jomatsu/pi-jev-auto-mode)** - Jev (TypeSafe System One) backed auto mode for the Pi coding agent: semantically auto-approves bash, write, and edit tool calls and fails closed when a decision cannot be made.  
  <sub>30 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[shiftynick/jev-axi](https://github.com/shiftynick/jev-axi)** - Agent-ergonomic CLI for TypeSafe's Jev: fast calibrated judgments (pick, rate, check, rank, triage, guard) from the shell  
  <sub>26 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[AskTheWay/dsh-jev-interceptor](https://github.com/AskTheWay/dsh-jev-interceptor)** - ⚡ Millisecond System-1 judgement for every tool call in DeepSeek Harness — Jev-powered risk classification & evidence-gated auto-approval. Fail-closed by construction. dsh 生态第一个 System-1 决策插件  
  <sub>23 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[Nasrallah-AL/jev-cli](https://github.com/Nasrallah-AL/jev-cli)** - Command-line tool for TypeSafe's Jev AI model  
  <sub>22 stars · TypeScript · MIT · updated 2026-10-02</sub>
- **[leesk212/JEV-CPU](https://github.com/leesk212/JEV-CPU)** - Run SemIf (Jev-style semantic-if decisions) on a CPU — no GPU. Reads typed option probabilities straight from an open model in one forward pass, plus a web UI.  
  <sub>18 stars · Python · MIT · updated 2026-09-19</sub>
- **[dark-hxx/jev-safety-gateway](https://github.com/dark-hxx/jev-safety-gateway)** - 位于 nginx 与大模型后端之间的前置过滤反向代理：逐请求提取用户输入交给 JEV 判定，有害拦截、正常透明放行  
  <sub>15 stars · Go · AGPL-3.0 · updated 2026-09-30</sub>
- **[Nyarlathoteppppp/pi-heed](https://github.com/Nyarlathoteppppp/pi-heed)** - Runtime constraints for the pi coding agent: checks every side-effecting tool call against what you said, before it runs. Powered by TypeSafe Jev.  
  <sub>12 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[caio-moliveira/workshop-jev](https://github.com/caio-moliveira/workshop-jev)** - No description provided.  
  <sub>11 stars · Python · updated 2026-10-03</sub>
- **[gulbaki/jev-llm-guard](https://github.com/gulbaki/jev-llm-guard)** - Contextual OWASP LLM guardrail powered by Jev, with a Turkish interactive demo  
  <sub>11 stars · JavaScript · MIT · updated 2026-10-01</sub>
- **[ismaelsoilet/jev-harness](https://github.com/ismaelsoilet/jev-harness)** - Zero-dependency System One decision harness: 5 semantic gates saving frontier AI agent tokens on trivial errors & doom loops. Python + TypeScript + Rust. MCP-compatible.  
  <sub>10 stars · Python · MIT · updated 2026-09-30</sub>
- **[zhangxaochen/dsh-jev](https://github.com/zhangxaochen/dsh-jev)** - Jev (System One decision model) plugin suite for DeepSeek Harness (dsh)  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[jackie-cqz/dsh-jev-plugin](https://github.com/jackie-cqz/dsh-jev-plugin)** - DeepSeek Harness plugin for TypeSafe Jev: typed decisions, configurable guardrails, and Web UI result cards.  
  <sub>8 stars · TypeScript · MIT · updated 2026-10-02</sub>
- **[fazlerocks/jev-adblock](https://github.com/fazlerocks/jev-adblock)** - Open-source AI ad blocker for Chrome. No filter lists: TypeSafe AI's Jev model decides what is an ad. Bring your own key.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[ItisShikhar/gg-friggin-ez](https://github.com/ItisShikhar/gg-friggin-ez)** - Fast, drop-in multilingual profanity and toxicity screener for Node.js, powered by System 1 models like TypeSafe AI Jev and Laya. Catches leetspeak, character spacing, and romanized profanity across languages including Kannada, Telugu, Tamil, Hindi, and Bengali. ~50-500ms latency.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[Charlyhno-eng/jev-document-classification](https://github.com/Charlyhno-eng/jev-document-classification)** - JEV Document Classification enables the rapid and cost-effective classification of text-based documents using AI, leveraging TypeSafe's "System One" model.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[eugeniughelbur/jev-engineering](https://github.com/eugeniughelbur/jev-engineering)** - Coding-agent tools on TypeSafe's Jev, measured in public. review-router: caught 13 of 13 CVE fixes a filename rule sent to a quick review. jev-gate: a strict second lock, 0 of 12 dangerous test commands ran where Claude Code's auto mode let 8 run.  
  <sub>6 stars · Python · MIT · updated 2026-09-27</sub>
- **[AkashPriyadarshii/jev-scout](https://github.com/AkashPriyadarshii/jev-scout)** - Zero-hallucination open-source repo and crate scout powered by TypeSafe AI Jev System One scoring  
  <sub>5 stars · Rust · MIT · updated 2026-09-30</sub>
- **[jkrup/jeveryword](https://github.com/jkrup/jeveryword)** - Text extraction with Jev: field extraction, PII detection and exact quotes, built on TypeSafe's Jev.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[Sur-Cai/macos-computer-use-kit](https://github.com/Sur-Cai/macos-computer-use-kit)** - AX-first computer use for AI agents on macOS with optional Jev (TypeSafe System One) semantic guards: calibrated target/input judgments before an irreversible action, decisions kept in code. Accessibility-tree targeting, window-scoped input, clipboard-safe paste, read-back verification. Ships a pip CLI, a pi package and a DeepSeek Harness plugin.  
  <sub>5 stars · Python · MIT · updated 2026-10-03</sub>
- **[vibe-with-me-tools/n8n-nodes-jev](https://github.com/vibe-with-me-tools/n8n-nodes-jev)** - Helper n8n community node for Jev by TypeSafe. Classify, route, and score text with questions you define, and get a probability for every answer so unsure items can go to review.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-29</sub>
- **[DataGobes/jev-demos](https://github.com/DataGobes/jev-demos)** - Small, honest demos of TypeSafe's Jev inside tools data engineers already use  
  <sub>4 stars · Python · MIT · updated 2026-10-03</sub>
- **[DelvisorLabs/Pyro](https://github.com/DelvisorLabs/Pyro)** - Self-hosted monitoring harness for System One Models  
  <sub>4 stars · TypeScript · Apache-2.0 · updated 2026-10-02</sub>
- **[godspede/construct-auto-classifier](https://github.com/godspede/construct-auto-classifier)** - Effect-based safety gate for AI coding agents' shell commands (OpenCode, Antigravity): fast structural rules, then TypeSafe's Jev or a chat model judges what a command does. Certified with Jev at zero dangerous commands allowed.  
  <sub>4 stars · TypeScript · Apache-2.0 · updated 2026-09-25</sub>
- **[JabbaKadabra/SystemOneDotNet](https://github.com/JabbaKadabra/SystemOneDotNet)** - .NET client for TypeSafe System One (Jev) — typed questions in, typed answers with probabilities and confidence out. No prompt engineering, no output parsing.  
  <sub>4 stars · C# · MIT · updated 2026-09-21</sub>
- **[matthew004-web/heyreach-jev-bot](https://github.com/matthew004-web/heyreach-jev-bot)** - Signal-based LinkedIn outbound scoring for HeyReach, running on Jev (TypeSafe System One).  
  <sub>4 stars · Python · updated 2026-09-23</sub>
- **[Muriel-Gasparini/ban4life](https://github.com/Muriel-Gasparini/ban4life)** - Autonomous anti-spam and moderation engine for WhatsApp groups powered by TypeSafe Jev System-1 judgment primitives and zero-latency two-tier defense.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[alexj11324/open-jev-approvals](https://github.com/alexj11324/open-jev-approvals)** - Binary approval gate for Codex and Claude Code — every intercepted tool call is reviewed by TypeSafe JEV and composed through a versioned local policy, with scoped authorization.  
  <sub>3 stars · Go · MIT · updated 2026-09-20</sub>
- **[coo-quack/jev-pii-checker](https://github.com/coo-quack/jev-pii-checker)** - CLI that finds PII in text with TypeSafe Jev: presence, sensitivity, and located spans  
  <sub>3 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[jev-ai/jev-api](https://github.com/jev-ai/jev-api)** - Jev AI  
  <sub>3 stars · HTML · updated 2026-09-21</sub>
- **[soderlind/jev-comment-triage](https://github.com/soderlind/jev-comment-triage)** - Async Jev-powered WordPress comment triage: background spam, scam/phishing, and toxicity moderation that keeps comment submission fast.  
  <sub>3 stars · PHP · updated 2026-09-18</sub>
- **[979569650/dsh-typesafe](https://github.com/979569650/dsh-typesafe)** - TypeSafe Jev (System One decision model) as a decision layer for DeepSeek Harness: typed decisions, confidence-gated routing, a cost meter, and an automatic prompt-injection guard over untrusted tool results.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[ashrafumair111-lab/JEV-AI-QUIKSTART](https://github.com/ashrafumair111-lab/JEV-AI-QUIKSTART)** - No description provided.  
  <sub>2 stars · Python · MIT · updated 2026-10-03</sub>
- **[codaaiteam/jev-mcp](https://github.com/codaaiteam/jev-mcp)** - MCP server for Jev (TypeSafe AI's System One model) — give any agent typed, calibrated decisions: classify, score, check, gate risky tool calls. Try free: jevtypesafeai.com  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[CogFlux/opencode-jev-guard](https://github.com/CogFlux/opencode-jev-guard)** - OpenCode 2 plugin that sends every shell command (local or via FarHand) to TypeSafe's Jev and asks you first when it leaves files outside the project, installs software globally, changes global settings, is harmful or exposes private data  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[dr-dimitru/claude-jev-plugin](https://github.com/dr-dimitru/claude-jev-plugin)** - TypeSafe Jev semantic guardrails for Claude Code  
  <sub>2 stars · TypeScript · BSD-3-Clause · updated 2026-09-29</sub>
- **[Gitmaxd/agent-seek](https://github.com/Gitmaxd/agent-seek)** - Agent Seek — precision web recall for agents. You.com discover + TypeSafe Jev ranking. MCP + REST. Live demo: https://agentseek.dev  
  <sub>2 stars · Python · MIT · updated 2026-09-23</sub>
- **[h1code2/jev-x-blocker](https://github.com/h1code2/jev-x-blocker)** - No description provided.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[jyje/pilot-typesafeai-jev](https://github.com/jyje/pilot-typesafeai-jev)** - 👩‍🔬 Pilot of the decision model 'jev' from TypeSafe AI  
  <sub>2 stars · Jupyter Notebook · MIT · updated 2026-09-21</sub>
- **[Kmasterrr/use-jev](https://github.com/Kmasterrr/use-jev)** - Claude Code / Codex skill for bounded semantic decisions via Jev (typesafe/jev-1.13) on OpenRouter  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-29</sub>
- **[nexibeo/jev-organize](https://github.com/nexibeo/jev-organize)** - Throw in a pile of company files and get them classified and organized by department, type, sensitivity, date, counterparty and PII, with an index for AI agents. Powered by TypeSafe's Jev on OpenRouter (17¢ per 1,000 files). Zero-dependency Node CLI + Claude skill + Codex agent.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[omkarghugarkar007/actiongate-jev](https://github.com/omkarghugarkar007/actiongate-jev)** - Open-source Jev tool-calling authorization gateway for AI agents: deterministic policy, exact-action single-use permits, MCP and HTTP enforcement.  
  <sub>2 stars · TypeScript · Apache-2.0 · updated 2026-10-03</sub>
- **[alsoleg89/jev-bouncer](https://github.com/alsoleg89/jev-bouncer)** - Claude Code plugin: a 3-cent bouncer for your agent's shell. Jev typed probabilities auto-allow routine commands, deny destructive ones, and flag prompt injection in tool results.  
  <sub>1 stars · Python · MIT · updated 2026-09-20</sub>
- **[bismawy/pi-jev-eye](https://github.com/bismawy/pi-jev-eye)** - Ultra-lean supervisor for Pi: zero-token regex guardrails, test verification tracking, and TypeSafe Jev semantic slop gate.  
  <sub>1 stars · TypeScript · MIT · updated 2026-10-04</sub>
- **[codaaiteam/jev-loop-detector](https://github.com/codaaiteam/jev-loop-detector)** - Catch an AI agent stuck in a loop — Jev grades each step progress/repeating/stuck/escalate. Single-file, no build. Use free: jevtypesafeai.com/tools/agent-loop-detector  
  <sub>1 stars · HTML · MIT · updated 2026-09-24</sub>
- **[Coding-Dev-Tools/jev-decision](https://github.com/Coding-Dev-Tools/jev-decision)** - Zero-dependency System 1 decision engine, calibrated guardrails, and token optimization client for Jev (TypeSafe AI)  
  <sub>1 stars · Python · MIT · updated 2026-10-03</sub>
- **[getexcited/stepwarden](https://github.com/getexcited/stepwarden)** - Every tool call your agent makes, checked before it runs. A Claude Code plugin that uses TypeSafe AI's Jev to verify each pending tool call against the session plan, then allows it, asks you, or blocks it. Proof of concept  
  <sub>1 stars · TypeScript · Apache-2.0 · updated 2026-09-18</sub>
- **[jev-ai/jev-model](https://github.com/jev-ai/jev-model)** - Jev AI  
  <sub>1 stars · HTML · updated 2026-09-21</sub>
- **[Jhonnyr97/JevGuard](https://github.com/Jhonnyr97/JevGuard)** - Claude Code + Codex CLI plugin that verifies the agent follows project rules through a System One (Jev) model  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[lamhotsiagian/jev-model-labs](https://github.com/lamhotsiagian/jev-model-labs)** - Companion code for Engineering Decision Systems with JEV (AI Engineering Insider). A production-style toolkit (jevkit) plus eleven hands-on labs, one per chapter, for building decision systems on TypeSafe's Jev System One model.  
  <sub>1 stars · Python · updated 2026-09-29</sub>
- **[navidkashani/jev-guard](https://github.com/navidkashani/jev-guard)** - Spam protection for WordPress comments, reviews and Contact Form 7 using the Jev decision model (independent, unaffiliated)  
  <sub>1 stars · PHP · GPL-2.0 · updated 2026-10-01</sub>
- **[prabhatpankaj/typesafe-POC](https://github.com/prabhatpankaj/typesafe-POC)** - No description provided.  
  <sub>1 stars · Python · updated 2026-09-21</sub>
- **[saembit/jeff-bot](https://github.com/saembit/jeff-bot)** - jeff, a Discord bot that is nothing but Jev decisions from TypeSafe, built with botbox  
  <sub>1 stars · Python · MIT · updated 2026-09-22</sub>
- **[Umbylicus/umby-jev-stack](https://github.com/Umbylicus/umby-jev-stack)** - Portable agent skill: TypeSafe Jev as a cheap code-review classifier (HTTP + optional jev-review MCP)  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-26</sub>
- **[veronalabs/jev-guard](https://github.com/veronalabs/jev-guard)** - Spam protection for WordPress comments, reviews and Contact Form 7 using the Jev decision model (independent, unaffiliated)  
  <sub>1 stars · PHP · GPL-2.0 · updated 2026-10-01</sub>
- **[veronalabs/spamlens](https://github.com/veronalabs/spamlens)** - Spam protection for WordPress comments, reviews and Contact Form 7 using the Jev decision model (independent, unaffiliated)  
  <sub>1 stars · PHP · GPL-2.0 · updated 2026-10-01</sub>
- **[AkashNaickar/scamcheck](https://github.com/AkashNaickar/scamcheck)** - ScamCheck - paste a suspicious message and get a scam verdict + risk score, powered by Jev (TypeSafe AI). Web app, HTTP API and MV3 browser extension.  
  <sub>0 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[akras14/jevbro](https://github.com/akras14/jevbro)** - Command-line browser agent: Jev picks every action, a small LLM only writes text.  
  <sub>0 stars · TypeScript · Apache-2.0 · updated 2026-09-21</sub>
- **[aleksvega/jev-skill-router](https://github.com/aleksvega/jev-skill-router)** - Jev-powered skill router & security auditor for any AI agent (Codex, Claude Code, OpenCode, Hermes): ONE cheap decision per request tells the model WHICH skill to load; scans skill libraries for prompt injection & dangerous commands.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-24</sub>
- **[andrest04/jev-lab](https://github.com/andrest04/jev-lab)** - A local Node lab for TypeSafe's Jev (System One): typed questions in, probabilities out. The API key never leaves your machine.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[apuravmanhas/chronos](https://github.com/apuravmanhas/chronos)** - A TypeScript decision runtime that wraps Jev's probabilistic AI outputs with strict deterministic guardrails and tamper-evident audit logs  
  <sub>0 stars · TypeScript · Apache-2.0 · updated 2026-09-24</sub>
- **[backdrop-contrib/ai_provider_typesafeai](https://github.com/backdrop-contrib/ai_provider_typesafeai)** - Provides TypeSafe AI and Jev native decision models for the AI module.  
  <sub>0 stars · PHP · GPL-2.0 · updated 2026-10-01</sub>
- **[balewgize/jev-ticket-triage](https://github.com/balewgize/jev-ticket-triage)** - A small demo showing a cheaper way to route support tickets.  
  <sub>0 stars · Python · MIT · updated 2026-09-23</sub>
- **[blacksinisterx/jev-guard](https://github.com/blacksinisterx/jev-guard)** - a security decision layer sitting between an AI agent and tool execution  
  <sub>0 stars · TypeScript · updated 2026-09-25</sub>
- **[cedrecs/jev-yarn](https://github.com/cedrecs/jev-yarn)** - An AI assisted storytelling party game.  Everyone submits a line to add to the shared story, the AI bot ("Jev") picks the winner, and the story continues to grow.  Everyone takes turns submitting a theme after each story.  Jev scores every finished story out of 100.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-26</sub>
- **[celolopes/jev-dev-harness](https://github.com/celolopes/jev-dev-harness)** - Open-source developer harness and runtime safety toolkit for AI coding agents powered by TypeSafe AI / Jev  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-30</sub>
- **[danmana/jev-paints](https://github.com/danmana/jev-paints)** - Tell Jev what to paint and watch it happen, one gesture at a time. TypeSafe's Jev + p5.brush.  
  <sub>0 stars · TypeScript · updated 2026-09-22</sub>
- **[Danzstorm/radar-anti-estafas](https://github.com/Danzstorm/radar-anti-estafas)** - Live audience demo: Jev (TypeSafe) decides in under a second if a message is a scam. Cloudflare Workers + Durable Objects.  
  <sub>0 stars · TypeScript · updated 2026-09-25</sub>
- **[darrenli6/jev-block-ad](https://github.com/darrenli6/jev-block-ad)** - An open-source AI ad blocker for Chrome, built on TypeSafe AI's Jev model. No filter lists. Jev looks at each suspicious element and decides.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[dgr8akki/slop-radar](https://github.com/dgr8akki/slop-radar)** - AI slop detector for your LinkedIn feed: labels posts Human, Unclear or AI slop as you scroll, with the signals on hover. MV3 Chrome extension, bring your own key.  
  <sub>0 stars · JavaScript · MIT · updated 2026-10-01</sub>
- **[fbadaro/hello-jev](https://github.com/fbadaro/hello-jev)** - Demo do JEV (TypeSafe AI): central de atendimento com guardrail, triagem e roteamento de LLM em uma única chamada, + apresentação animada  
  <sub>0 stars · HTML · updated 2026-10-01</sub>
- **[gbesse/strapi-plugin-jev-review](https://github.com/gbesse/strapi-plugin-jev-review)** - Strapi 5 editorial review and publish guard powered by TypeSafe Jev  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-26</sub>
- **[HiveScaleSystems/jev-guard](https://github.com/HiveScaleSystems/jev-guard)** - AI chat moderation for Minecraft (Paper/Folia) and Hytale servers, powered by TypeSafe's Jev model. Works with the TypeSafe API or Cloudflare AI Gateway.  
  <sub>0 stars · Java · MIT · updated 2026-10-01</sub>
- **[imbilawork/jev-demo](https://github.com/imbilawork/jev-demo)** - Demonstrator for Jev, the typed-decision model: dashboard, CLI and Cloudflare Worker proxy  
  <sub>0 stars · HTML · updated 2026-09-22</sub>
- **[jason-allen-oneal/openclaw-plugin-typesafe-ai](https://github.com/jason-allen-oneal/openclaw-plugin-typesafe-ai)** - TypeSafe AI (Jev System One) plugin for OpenClaw - sub-100ms group triage, tool safety guardrails, compaction curation, and model routing  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[jonathanhecl/jev-chat-agent](https://github.com/jonathanhecl/jev-chat-agent)** - Twitch bot that classifies messages in real time using Jev-Style-2B-Decision-v3 and logs the result.  
  <sub>0 stars · JavaScript · updated 2026-09-29</sub>
- **[juanlentino/jev-comment-analysis](https://github.com/juanlentino/jev-comment-analysis)** - Backs the WordPress AI plugin's Comment Moderation with TypeSafe Jev, through Connector for TypeSafe Jev  
  <sub>0 stars · PHP · GPL-2.0 · updated 2026-09-20</sub>
- **[JularDepick/Jev-Examiner](https://github.com/JularDepick/Jev-Examiner)** - An AI content moderation workflow powered by the [TypeSafe/Jev model](https://typesafe.ai).  
  <sub>0 stars · JavaScript · Apache-2.0 · updated 2026-09-20</sub>
- **[justinramos101/ask-jev](https://github.com/justinramos101/ask-jev)** - An agent skill for structured decisions with Jev: choose options, score candidates, check claims, and rank files.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-30</sub>
- **[mooshee/typesafe-jev-keys](https://github.com/mooshee/typesafe-jev-keys)** - Create and manage TypeSafe Jev API keys from your terminal.  
  <sub>0 stars · Python · MIT · updated 2026-09-22</sub>
- **[OmarAlaaeldein/jev-verifier-skill](https://github.com/OmarAlaaeldein/jev-verifier-skill)** - Fast 'System One' reflex for reasoning LLMs: typed probabilistic second opinions from Jev via OpenCode Zen, with PII-minimizing state redaction.  
  <sub>0 stars · MIT · updated 2026-09-21</sub>
- **[randilt/jev-policies](https://github.com/randilt/jev-policies)** - PoC: an AI Gateway guardrail policy for WSO2 API Platform, backed by TypeSafe AI's Jev model  
  <sub>0 stars · Go · updated 2026-09-23</sub>
- **[rashedInt32/jev-gates](https://github.com/rashedInt32/jev-gates)** - Six calibrated gates for Claude Code, judged by TypeSafe Jev: rules, scope, intent, done, claims, and commit honesty. Each one escalates, none ever approves.  
  <sub>0 stars · JavaScript · MIT · updated 2026-10-01</sub>
- **[RavenRepo/jevengineeringgate](https://github.com/RavenRepo/jevengineeringgate)** - Calibrated decision layer and risk gate for AI coding agents. Routes yes/no, routing and scoring judgments to the Jev System One model at ~$0.0000123 per decision, then enforces the result deterministically through Claude Code PreToolUse hooks. Fitted thresholds, not guessed.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[rdrgio/eslint-plugin-nestjs-pii](https://github.com/rdrgio/eslint-plugin-nestjs-pii)** - No description provided.  
  <sub>0 stars · TypeScript · updated 2026-09-23</sub>
- **[scott-the-programmer/system1-guard](https://github.com/scott-the-programmer/system1-guard)** - Guardrails based on Jev, Typescript.AI's System One model  
  <sub>0 stars · updated 2026-09-19</sub>
- **[TickerDev/jevfanity](https://github.com/TickerDev/jevfanity)** - Monorepo for jevfanity, a profanity detector using Jev by TypeSafe AI  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[TickerDev/jevfanity-api](https://github.com/TickerDev/jevfanity-api)** - Monorepo for jevfanity, a profanity detector using Jev by TypeSafe AI  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[uilhamello/jev-sanitizer](https://github.com/uilhamello/jev-sanitizer)** - No description provided.  
  <sub>0 stars · Python · MIT · updated 2026-10-04</sub>
- **[undeemed/jev-mod](https://github.com/undeemed/jev-mod)** - Jev-powered Discord moderation bot. Configure TypeSafe Jev rules, bring your own API key, and self-host on Cloudflare or Docker.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-30</sub>
- **[vstrofago/jev-chat-moderator](https://github.com/vstrofago/jev-chat-moderator)** - Moderating live-stream chat in real time (ES/EN)  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-29</sub>
- **[vstrofago/vigia](https://github.com/vstrofago/vigia)** - Moderating live-stream chat in real time (ES/EN)  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-29</sub>
- **[WallerChen/jev-measured](https://github.com/WallerChen/jev-measured)** - Measured cost, latency and raw output from the live Jev API (TypeSafe AI System One model) across 8 use cases — reproducible  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[Wany-i/jev-decision-layer](https://github.com/Wany-i/jev-decision-layer)** - 把决策模型（typesafe/jev-1.13，经 OpenRouter 的 decisions 端点调用）封装成业务决策工具：注册表驱动，带置信度门控与硬约束。非官方项目。  
  <sub>0 stars · Python · MIT · updated 2026-09-26</sub>
- **[yousan/openclaw-jev-leakguard](https://github.com/yousan/openclaw-jev-leakguard)** - Jev × OpenClaw: stop your agent from posting client names, credentials and internal details to the wrong channel. Judged by Jev — or by Kev on your own machine.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-30</sub>

### Infrastructure and tooling

- **[OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger)** - Open-source AI Trading OS, agent trading, and vibe trading, with Jev System One integration. Research, build Python strategies, backtest, and paper/live trade across crypto, stocks, and forex. Launch your own multi-tenant trading SaaS with built-in user management, billing, payments, and settlement.  
  <sub>12427 stars · Python · Apache-2.0 · updated 2026-10-02</sub>
- **[wy-coliney/jev-browser-use](https://github.com/wy-coliney/jev-browser-use)** - 5–10x faster browser operations: Jev clicks, Codex thinks and verifies. Built at EZCollegeApp.  
  <sub>860 stars · JavaScript · MIT · updated 2026-09-23</sub>
- **[thruwire/foreman](https://github.com/thruwire/foreman)** - An agent supervisor and software factory foreman powered by TypeSafe’s Jev model  
  <sub>667 stars · Python · MIT · updated 2026-09-28</sub>
- **[gargpratyush/jev-router](https://github.com/gargpratyush/jev-router)** - Route to the cheapest model in claude code for your task using jev-router  
  <sub>530 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[jkudish/jev-mcp](https://github.com/jkudish/jev-mcp)** - Fast, cheap, typed judgments from TypeSafe's Jev model, as MCP tools.  
  <sub>491 stars · JavaScript · MIT · updated 2026-10-02</sub>
- **[droidrun/mobile-jev](https://github.com/droidrun/mobile-jev)** - No description provided.  
  <sub>431 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[notque/vexjoy-agent](https://github.com/notque/vexjoy-agent)** - VexJoy AI Agent with Jev Intelligent Routing - /do routes plain-English requests to the right specialist agent and gates the work with reviews, tests, and a learning loop.  
  <sub>425 stars · Python · MIT · updated 2026-10-03</sub>
- **[itsmostafa/system-one-connector](https://github.com/itsmostafa/system-one-connector)** - System One MCP connector to evaluate anything fast and cheap. Give your AI agent direct access to models like: Jev, D1, CLM and Laya  
  <sub>340 stars · Go · MIT · updated 2026-10-02</sub>
- **[itsmostafa/typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp)** - System One MCP connector to evaluate anything fast and cheap. Give your AI agent direct access to models like: Jev, D1, CLM and Laya  
  <sub>340 stars · Go · MIT · updated 2026-10-02</sub>
- **[ekzhang/openjev-sglang](https://github.com/ekzhang/openjev-sglang)** - Jev-compatible API endpoint based on open models (prefill-only)  
  <sub>337 stars · Python · updated 2026-10-01</sub>
- **[jkudish/jev-browser](https://github.com/jkudish/jev-browser)** - Browser use using Typesafe's Jev model  
  <sub>307 stars · JavaScript · MIT · updated 2026-10-02</sub>
- **[sutro-sh/jev-align](https://github.com/sutro-sh/jev-align)** - Build calibrated AI Functions from human feedback using Jev and GEPA.  
  <sub>303 stars · Python · Apache-2.0 · updated 2026-10-03</sub>
- **[0xNatoshi/jev-codex-router](https://github.com/0xNatoshi/jev-codex-router)** - Per-turn model & reasoning routing for Codex, driven by Jev (TypeSafe System One): picks the model, thinking depth and speed mode for every turn.  
  <sub>273 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[mode-io/vllm-jev](https://github.com/mode-io/vllm-jev)** - Native vLLM serving for Jev decision models  
  <sub>254 stars · Python · Apache-2.0 · updated 2026-10-03</sub>
- **[dbreunig/building-with-jev-skill](https://github.com/dbreunig/building-with-jev-skill)** - A skill for writing and improving programs that call Jev, TypeSafe's System One model  
  <sub>151 stars · updated 2026-09-17</sub>
- **[libingzheren/Jev-Mem](https://github.com/libingzheren/Jev-Mem)** - Jev-Mem: System-One Controlled Agentic Memory  
  <sub>151 stars · Python · MIT · updated 2026-09-28</sub>
- **[socai-io/jev-social](https://github.com/socai-io/jev-social)** - Open-source, local-first social media research agent for Instagram, TikTok, and LinkedIn. Jev routes read-only steps; socai CLI captures cited browser evidence.  
  <sub>145 stars · JavaScript · MIT · updated 2026-10-01</sub>
- **[keltokhy/jgrep](https://github.com/keltokhy/jgrep)** - grep, but the pattern is a description. Filters lines by meaning with TypeSafe's Jev decision model: ~200 ms and a thousandth of a cent per line.  
  <sub>135 stars · Python · MIT · updated 2026-09-28</sub>
- **[Dicklesworthstone/skillranker](https://github.com/Dicklesworthstone/skillranker)** - Rust CLI powered by Jev from TypeSafe.ai that ranks agent skills for the next step using live session context. Includes Claude Code hooks, structured JSON, abstention, and local feedback. Requires a TypeSafe API key.  
  <sub>127 stars · Rust · updated 2026-10-03</sub>
- **[w3cj/jev-chat](https://github.com/w3cj/jev-chat)** - A tool calling chat bot built with Jev and no LLM.  
  <sub>109 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[pithings/advocaat](https://github.com/pithings/advocaat)** - A small, type-safe client for asking AI questions about your data, powered by TypeSafe Jev.  
  <sub>96 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[AkashPriyadarshii/jev-seo](https://github.com/AkashPriyadarshii/jev-seo)** - Free Rust SEO and GEO toolkit powered by TypeSafe Jev: 58-rule audits, site crawls, AI citation checks, rank drift, CI gates, 15-tool MCP. Zero cost.  
  <sub>94 stars · Rust · MIT · updated 2026-10-04</sub>
- **[Ying-Kai-Liao/jev-browser](https://github.com/Ying-Kai-Liao/jev-browser)** - Browser automation where an LLM plans and Jev (Typesafe System One) decides. Library, CLI and MCP server.  
  <sub>94 stars · JavaScript · MIT · updated 2026-10-02</sub>
- **[kyegomez/open-jev](https://github.com/kyegomez/open-jev)** - an open-source, from-first-principles reconstruction of the ideas behind TypeSafe AI's Jev, written in pytorch  
  <sub>76 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[sharziki/semdecide](https://github.com/sharziki/semdecide)** - Typed semantic decisions for Unix pipelines and CI, powered by TypeSafe AI Jev.  
  <sub>76 stars · Python · MIT · updated 2026-09-16</sub>
- **[mizchi/jev-playground](https://github.com/mizchi/jev-playground)** - No description provided.  
  <sub>72 stars · TypeScript · updated 2026-09-26</sub>
- **[iamaamir/system-one](https://github.com/iamaamir/system-one)** - Provider-neutral System One runtime for TypeScript and Pi  
  <sub>69 stars · TypeScript · updated 2026-10-03</sub>
- **[peterfriese/jev-foundation-models](https://github.com/peterfriese/jev-foundation-models)** - A lightweight, native Swift 6 bridge integrating TypeSafe AI's Jev System One decision model into Apple's Foundation Models framework.  
  <sub>64 stars · Swift · Apache-2.0 · updated 2026-10-02</sub>
- **[TheoOliveira/pi-jev](https://github.com/TheoOliveira/pi-jev)** - Semantic tool routing and typed System One decisions for the Pi coding agent using TypeSafe Jev  
  <sub>62 stars · TypeScript · MIT · updated 2026-10-03</sub>
- **[andududu/jeview](https://github.com/andududu/jeview)** - An unofficial local visualizer for Jev (TypeSafe): a live view of every call your code makes. Not affiliated with TypeSafe AI.  
  <sub>61 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[burnigtm/jev-mcp](https://github.com/burnigtm/jev-mcp)** - MCP server that puts TypeSafe Jev on the coding loop in Cursor, Codex, and any MCP client  
  <sub>61 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[Mushroom-Systems/lichen](https://github.com/Mushroom-Systems/lichen)** - A local, API-compatible replacement for Jev, TypeSafe's System One model  
  <sub>58 stars · Python · MIT · updated 2026-09-30</sub>
- **[kieranklaassen/truffler](https://github.com/kieranklaassen/truffler)** - Sniff out the right record: Jev-powered search for Rails with index-time labels, query understanding, and streamed reranking on top of your own keyword and embedding search  
  <sub>51 stars · Ruby · MIT · updated 2026-10-02</sub>
- **[yusukebe/hono-jev-router](https://github.com/yusukebe/hono-jev-router)** - Route HTTP requests by meaning. A semantic router for Hono powered by Jev.  
  <sub>51 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[shitianfang/jev-use](https://github.com/shitianfang/jev-use)** - Claude Code / Codex / pi plugin that hands agent steps needing no text output to Jev (TypeSafe's judgment model) — measured p50 ~230 ms and ~$0.02 per 1,000 judgments, with typed escalation back to the LLM  
  <sub>45 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[tacticocc/Jevbridge](https://github.com/tacticocc/Jevbridge)** - ACP and MCP adapter that bridges TypeSafe Jev with any LLM — computer use and typed decisions alongside Codex, Claude, Grok, and OpenCode.  
  <sub>45 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[NevaMind-AI/JevTown](https://github.com/NevaMind-AI/JevTown)** - jev based AI town simulation  
  <sub>41 stars · TypeScript · MIT · updated 2026-09-30</sub>
- **[nico-martin/open-jev](https://github.com/nico-martin/open-jev)** - open-jev is a browser-focused TypeScript library for typed decisions: one piece of text (the state) plus any number of typed questions go in, and one forward pass returns a calibrated probability distribution per question. Nothing is generated, so an answer is always one of the options you provided.  
  <sub>40 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[FrancoisChastel/jev-code](https://github.com/FrancoisChastel/jev-code)** - Jev, TypeSafe's System One classifier, as a tool inside Claude Code, Codex, Pi, and OpenCode: typed classify, check, score, rank, and ask, plus one-command setup.  
  <sub>39 stars · TypeScript · MIT · updated 2026-10-04</sub>
- **[AkashPriyadarshii/jev-superpowers](https://github.com/AkashPriyadarshii/jev-superpowers)** - Systematic software development framework for AI coding agents upgraded with TypeSafe Jev System One typed decisions  
  <sub>36 stars · HTML · MIT · updated 2026-09-30</sub>
- **[davila7/jev-explained](https://github.com/davila7/jev-explained)** - Jev Explained  
  <sub>34 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[mizchi/jev-test-filter](https://github.com/mizchi/jev-test-filter)** - Score every test against a git diff with Jev, and emit the filter arguments vitest, node:test, Playwright, cargo test and go test already understand  
  <sub>33 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[win4r/jev-skill-suggester](https://github.com/win4r/jev-skill-suggester)** - 用 TypeSafe Jev 推荐已安装 Skill / Bounded installed-skill recommendations with TypeSafe Jev. Python CLI, Codex skill, bilingual docs and live examples.  
  <sub>32 stars · Python · MIT · updated 2026-09-19</sub>
- **[keltokhy/jsort](https://github.com/keltokhy/jsort)** - sort by meaning: order lines along a plain-English dimension, from pairwise comparisons judged by TypeSafe's Jev model  
  <sub>26 stars · Python · MIT · updated 2026-10-02</sub>
- **[blakestone-x/jev-mcp](https://github.com/blakestone-x/jev-mcp)** - MCP server for TypeSafe Jev: typed classify, score, check, match and screen for any agent, with confidence on every answer  
  <sub>25 stars · Python · MIT · updated 2026-09-16</sub>
- **[GodsBoy/jev-agent-skill-router](https://github.com/GodsBoy/jev-agent-skill-router)** - Typed, confidence-aware agent skill routing with TypeSafe Jev.  
  <sub>25 stars · Python · MIT · updated 2026-09-16</sub>
- **[bgivenb/flick-computer-use](https://github.com/bgivenb/flick-computer-use)** - Fast browser and macOS computer use for MCP agents. Local execution, TypeSafe Jev decisions, verified outcomes.  
  <sub>24 stars · TypeScript · MIT · updated 2026-09-27</sub>
- **[6Mikao9/jev-native-agent-with-extended-options](https://github.com/6Mikao9/jev-native-agent-with-extended-options)** - Research design for a Jev-native agent system:enable more options than jev provided with virtulization and paging, tool integration, external helper logits Top-k proposals with Jev-controlled fallback ,decision-aware hierarchical memory, and dependency-aware replanning.  
  <sub>22 stars · Python · updated 2026-09-28</sub>
- **[Brainwires/jevwire](https://github.com/Brainwires/jevwire)** - Jev decision layer for agents: MCP server, embeddable DecisionModel library, and an escalate-only Claude Code plugin (TypeSafe AI's Jev)  
  <sub>21 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[Eriskii/ErisLint](https://github.com/Eriskii/ErisLint)** - Rust linter powered by configurable Jev rules, with a VS Code extension.  
  <sub>21 stars · Rust · AGPL-3.0 · updated 2026-09-18</sub>
- **[csskrtao/jev-to-answer](https://github.com/csskrtao/jev-to-answer)** - 答案之书jev  
  <sub>20 stars · JavaScript · updated 2026-09-23</sub>
- **[AgriciDaniel/gatekeeper](https://github.com/AgriciDaniel/gatekeeper)** - Routes each request to the right AI agent or skill before your AI picks one. Your rules decide what code can; Jev (TypeSafe) makes the typed call. Installs as Claude Code hooks.  
  <sub>19 stars · Python · MIT · updated 2026-09-23</sub>
- **[jiawei686/jev-ultrafast-mcp](https://github.com/jiawei686/jev-ultrafast-mcp)** - Hand a whole browser task off in one call: a decision model drives the page server-side, so a flow costs one call, not a turn per click. Ref-based element tables, code-checked assertions, zero-model macro replay, over the Chrome DevTools Protocol.  
  <sub>19 stars · Python · MIT · updated 2026-09-23</sub>
- **[trungdq88/jev-tetris](https://github.com/trungdq88/jev-tetris)** - Jev play Tetris in real-time against other AI models  
  <sub>18 stars · JavaScript · updated 2026-09-21</sub>
- **[wd041216-bit/zero-api-key-web-search](https://github.com/wd041216-bit/zero-api-key-web-search)** - Jev-powered search infrastructure for AI agents: zero API keys, MCP-ready, LLM-context aware, with local neural evidence verification.  
  <sub>18 stars · Python · MIT · updated 2026-09-21</sub>
- **[yijunyu/jev-rs](https://github.com/yijunyu/jev-rs)** - System One judgments (noul/choice/score) from any LLM in one prefill — a Rust, Jev-compatible /v1/systemone engine  
  <sub>18 stars · Rust · Apache-2.0 · updated 2026-09-28</sub>
- **[mgtf/atoma](https://github.com/mgtf/atoma)** - Watch a request turn into finished work. AI agents produce and check it; TypeSafe's Jev decides.  
  <sub>17 stars · TypeScript · AGPL-3.0 · updated 2026-10-04</sub>
- **[mejiasd3v/pi-jev-router](https://github.com/mejiasd3v/pi-jev-router)** - Automatic model routing for Pi using TypeSafe's Jev through Vercel AI Gateway  
  <sub>16 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[utk2103/jev-studio](https://github.com/utk2103/jev-studio)** - if you're experimenting with jev it will be easier from here  
  <sub>16 stars · Python · MIT · updated 2026-10-04</sub>
- **[Ice-Hazymoon/jevlint](https://github.com/Ice-Hazymoon/jevlint)** - Semantic lint rules for the code-review questions a deterministic linter can't express  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[DECRUX9812/typesafe-skill-router](https://github.com/DECRUX9812/typesafe-skill-router)** - TypeSafe (Jev) skill routing for Hermes Agent: names the one skill worth loading, before the model call. Opt-in, stdlib only, ~$0.001 per routed turn.  
  <sub>14 stars · Python · MIT · updated 2026-09-21</sub>
- **[Eniip/jev-game-tools](https://github.com/Eniip/jev-game-tools)** - No description provided.  
  <sub>14 stars · Python · updated 2026-09-19</sub>
- **[kylemclaren/jevql](https://github.com/kylemclaren/jevql)** - Semantic SQL for Postgres, powered by Jev  
  <sub>14 stars · Go · MIT · updated 2026-09-19</sub>
- **[prismhq/jev-router](https://github.com/prismhq/jev-router)** - Open-source LLM router that uses TypeSafe's Jev to pick a model, on top of LiteLLM  
  <sub>14 stars · Python · MIT · updated 2026-09-17</sub>
- **[forvela/jev-agent-browser](https://github.com/forvela/jev-agent-browser)** - Fast, bounded browser agents powered by Jev and agent-browser — typed actions, research, classification, and safe orchestration.  
  <sub>13 stars · JavaScript · MIT · updated 2026-10-03</sub>
- **[tumf/jev-cli](https://github.com/tumf/jev-cli)** - Small dependency-free CLI for TypeSafe Jev  
  <sub>13 stars · Python · MIT · updated 2026-09-30</sub>
- **[redwolf2019/laya-rs](https://github.com/redwolf2019/laya-rs)** - Pure Rust runtime + HTTP server for Laya System-1 models，Linux / CPU-first / multilingual / ONNX Runtime  
  <sub>12 stars · Rust · MIT · updated 2026-09-24</sub>
- **[southpolesteve/probably](https://github.com/southpolesteve/probably)** - A small programming language for LLM workflows, powered by Jev.  
  <sub>12 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[win4r/jev-security-scan](https://github.com/win4r/jev-security-scan)** - 使用 TypeSafe Jev 审查 Skill 与 MCP 可疑行为 | Review Agent Skills and MCP code with Jev, static evidence, and explicit coverage gaps  
  <sub>12 stars · Python · MIT · updated 2026-09-19</sub>
- **[anyfilter/anyfilter](https://github.com/anyfilter/anyfilter)** - Hide anything you don't want to see on any site. X for now, more to come.  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[cmungall/jevotron](https://github.com/cmungall/jevotron)** - CLI-first field-level anomaly detection for structured files and text, powered by Jev  
  <sub>11 stars · Python · BSD-3-Clause · updated 2026-09-27</sub>
- **[da-vinci-noob/pi-jev-model-router](https://github.com/da-vinci-noob/pi-jev-model-router)** - Route pi prompts to task-appropriate model tiers with TypeSafe Jev typed judgments. Budget-aware, with automatic fallback.  
  <sub>11 stars · TypeScript · MIT · updated 2026-10-03</sub>
- **[huntedman/JevLint](https://github.com/huntedman/JevLint)** - Configurable semantic linting powered by Jev, with file-level NOUL judgments and a magic-strings plugin.  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[iamtoomas/JevLint](https://github.com/iamtoomas/JevLint)** - Configurable semantic linting powered by Jev, with file-level NOUL judgments and a magic-strings plugin.  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[jerryfane/omp-jev-compaction](https://github.com/jerryfane/omp-jev-compaction)** - Verbatim Jev-scored context reduction for omp, over TypeSafe or OpenRouter  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-29</sub>
- **[KiritoKing/midscene-jev-runner](https://github.com/KiritoKing/midscene-jev-runner)** - Community-maintained JEV runner integration for Midscene Test  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[matthewp/flue-jev-demo](https://github.com/matthewp/flue-jev-demo)** - Flue agent routing with TypeSafe Jev through Cloudflare AI Gateway  
  <sub>11 stars · TypeScript · updated 2026-09-18</sub>
- **[okooo5km/jev](https://github.com/okooo5km/jev)** - Typed decisions from the shell: an unofficial stdlib-Python CLI and Agent Skill for TypeSafe's Jev model, via the TypeSafe API (default) or OpenRouter. Yes/no, choice and ordinal scores with calibrated probabilities, semantic grep and batch mode.  
  <sub>11 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[win4r/pi-jev-router](https://github.com/win4r/pi-jev-router)** - Task-boundary model routing for Pi Coding Agent, powered by TypeSafe Jev. Conservative policies, exact caching, and observable failover.  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[ZJU-REAL/CUA-JEV](https://github.com/ZJU-REAL/CUA-JEV)** - Jev for Computer Use  
  <sub>11 stars · Python · updated 2026-09-28</sub>
- **[assistant-ui/jevia](https://github.com/assistant-ui/jevia)** - outcome-aware & adaptive model routing for coding agents with deterministic cache powered by Jev  
  <sub>10 stars · Rust · MIT · updated 2026-10-04</sub>
- **[cristianoliveira/jeq](https://github.com/cristianoliveira/jeq)** - What happens when jev meets jq? Intelligence you can pipe for quick experimentation and scripts  
  <sub>10 stars · Go · MIT · updated 2026-09-27</sub>
- **[erkamyaman/jev-enforce](https://github.com/erkamyaman/jev-enforce)** - 📏 Claude Code plugin that makes Claude follow your AGENTS.md: every reply and edit checked by TypeSafe Jev ✅  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-27</sub>
- **[rajdhakad9826/jev-router](https://github.com/rajdhakad9826/jev-router)** - LLM router that picks the cheapest model capable of handling a query, using TypeSafe's Jev for fast classification instead of an LLM call.  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[dirien/jev-router](https://github.com/dirien/jev-router)** - Pass-through model router for Claude Code and Codex CLI that picks a model tier per human turn with Jev, TypeSafe AI's decision model  
  <sub>9 stars · JavaScript · Apache-2.0 · updated 2026-10-01</sub>
- **[fatelei/jev-compact](https://github.com/fatelei/jev-compact)** - Jev-scored context compaction for OpenAI Codex CLI — scores every tool call before compaction and restores critical tool outputs verbatim after it  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[IzumiSatoshi/vox-arcana](https://github.com/IzumiSatoshi/vox-arcana)** - Voice-cast magic arena game. Speak or type incantations, powered by Jev, with local interpretation options.  
  <sub>9 stars · JavaScript · MIT · updated 2026-09-27</sub>
- **[jekhov/jekhov](https://github.com/jekhov/jekhov)** - Policy-bounded Jev target selection for resilient Playwright workflows  
  <sub>9 stars · TypeScript · MIT · updated 2026-10-02</sub>
- **[leonaaardob/fast-dev-compaction](https://github.com/leonaaardob/fast-dev-compaction)** - Codex plugin: verbatim Jev-guided context restoration around session compaction. Port of tamaratran/fast-jev-compaction to Codex lifecycle hooks.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[reachjalil/jev-tree](https://github.com/reachjalil/jev-tree)** - Recursive Jev choice over a taxonomy. Select from more than 255 options without breaking TypeSafe Jev's choice cap.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[AlexPEClub/Jev-Model-Router-Claude-Code](https://github.com/AlexPEClub/Jev-Model-Router-Claude-Code)** - No description provided.  
  <sub>8 stars · Shell · updated 2026-09-24</sub>
- **[Friedjof/jev-mobile](https://github.com/Friedjof/jev-mobile)** - Fast structured Android control loops with TypeSafe Jev and Mobile MCP  
  <sub>8 stars · Python · MIT · updated 2026-09-18</sub>
- **[himomohi/aside-jev](https://github.com/himomohi/aside-jev)** - Aside agents decide with TypeSafe Jev (System One: Choice/Score/Noul). Not a Cua binding — Jev is the model, Aside is the browser runtime.  
  <sub>8 stars · Python · MIT · updated 2026-09-21</sub>
- **[jackbarunz/jev-tool-router](https://github.com/jackbarunz/jev-tool-router)** - Jev-powered MCP tool routing for Codex  
  <sub>8 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[kotoba-lang/typed-decisions](https://github.com/kotoba-lang/typed-decisions)** - Jev-shaped typed-decision model (state + Choice/Score/Noul questions -> calibrated probabilities, one pass) on ModernBERT / DeBERTa / LLaDA-MoE, with measured latency, accuracy, calibration and training cost  
  <sub>8 stars · Python · updated 2026-09-29</sub>
- **[kraayenjon/jev-linkedin-saved-classifier](https://github.com/kraayenjon/jev-linkedin-saved-classifier)** - Read your LinkedIn saved posts into a filterable board, classified by Jev.  
  <sub>8 stars · Python · MIT · updated 2026-09-30</sub>
- **[rawwerks/one-system](https://github.com/rawwerks/one-system)** - Use local and hosted classifiers aka decision models aka Jev-like models, all through a single TypeSafe API  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[romanmeclazcke/codex-sift](https://github.com/romanmeclazcke/codex-sift)** - Route each Codex turn to the cheapest model that can handle it, judged by TypeSafe Jev.  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[stas4000/claude-subagent-router](https://github.com/stas4000/claude-subagent-router)** - Claude Code sub-agents: an Opus 5.5 lead, Sonnet 5.5 or Opus 5.5 builders picked per sub-task by a Jev classifier, and a guard so Sonnet never runs at max effort.  
  <sub>8 stars · Python · MIT · updated 2026-09-29</sub>
- **[AIsa-team/worth-replying](https://github.com/AIsa-team/worth-replying)** - Worth Replying by AIsa  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[ansidium/jev-codex-bridge](https://github.com/ansidium/jev-codex-bridge)** - Jev model and reasoning-effort routing for Codex Desktop and CLI  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-29</sub>
- **[blazejkustra/softlint](https://github.com/blazejkustra/softlint)** - Enforce rules a linter can't. A GitHub Action that reviews PRs against plain-English rules, judged by Jev.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[jcressler/jev-codex-token-saver](https://github.com/jcressler/jev-codex-token-saver)** - Experimental Jev evidence selection for token-efficient Codex investigations  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[karanb192/jev-architect](https://github.com/karanb192/jev-architect)** - Find, design, and evaluate TypeSafe Jev decision loops.  
  <sub>7 stars · HTML · MIT · updated 2026-10-02</sub>
- **[nrdz-labs/fast-jev-opencode](https://github.com/nrdz-labs/fast-jev-opencode)** - Jev-scored context pruning for OpenCode: drops stale tool calls and truncates bulky results on the outgoing request — fail-open, cache-backed, configurable live. Port of fast-jev-compaction to the V2 context hook.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Nyarlathoteppppp/pi-jev-context](https://github.com/Nyarlathoteppppp/pi-jev-context)** - Model performance first. Token savings second. A Pi extension with freshness-aware read dedupe, Jev log filtering, and searchable verbatim recall. Keeps existing message history intact.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[rashedInt32/jev-mcp](https://github.com/rashedInt32/jev-mcp)** - MCP server exposing TypeSafe Jev as typed, calibrated judgment tools: classify, score, check, batched ask. Ships as a Claude Code plugin.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-28</sub>
- **[riteshverma/s18](https://github.com/riteshverma/s18)** - Introducing s18 — an open-source agent runtime & orchestration framework for real AI systems.  ⚡ Multi-agent workflows   ⚡ Real-time streaming state   ⚡ Scheduling + automation   ⚡ MCP tool integrations   ⚡ Local-first or cloud models   ⚡ Observability built in  
  <sub>7 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[spoonnotfound/soupbase](https://github.com/spoonnotfound/soupbase)** - Jev x 海龟汤  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[sufianetaouil/every](https://github.com/sufianetaouil/every)** - Ask a yes/no question of every function in a codebase. Ranked answers in seconds, for cents. Grep whose pattern is a question, powered by TypeSafe Jev.  
  <sub>7 stars · Python · MIT · updated 2026-09-17</sub>
- **[tic-top/llm2jev](https://github.com/tic-top/llm2jev)** - Any chat model, any engine (SGLang, vLLM, transformers) as a Jev-compatible probability decision service: one prefill, one label token  
  <sub>7 stars · Python · MIT · updated 2026-09-24</sub>
- **[valentynkit/jev-skip](https://github.com/valentynkit/jev-skip)** - YouTube sponsor skipper that reads the captions and decides at watch time: a probability heatmap on the seek bar, no crowd database  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[yatharth1706/inbox-triage](https://github.com/yatharth1706/inbox-triage)** - No description provided.  
  <sub>7 stars · TypeScript · updated 2026-09-20</sub>
- **[47vigen/catherd](https://github.com/47vigen/catherd)** - Herds coding agents: autopilot builds from your own Claude Code session — Claude plans and verifies, Codex and opencode write the code, Jev picks the model.  
  <sub>6 stars · TypeScript · MIT · updated 2026-10-02</sub>
- **[acoyfellow/predict](https://github.com/acoyfellow/predict)** - A small browser signal for the next useful step on a website.  
  <sub>6 stars · Svelte · updated 2026-09-20</sub>
- **[dereknguyen269/jev-harness](https://github.com/dereknguyen269/jev-harness)** - No description provided.  
  <sub>6 stars · Go · updated 2026-10-01</sub>
- **[fabianboth/jevpipe](https://github.com/fabianboth/jevpipe)** - Pipe anything into Jev, get typed decisions out. A Unix filter that lets agents offload bulk judgments to a System One model.  
  <sub>6 stars · Rust · Apache-2.0 · updated 2026-09-28</sub>
- **[fatelei/semble-jev](https://github.com/fatelei/semble-jev)** - A code search CLI for coding agents. Semble retrieves source snippets locally, Jev evaluates their relevance, and the CLI returns selected original source with locations for further reading.  
  <sub>6 stars · Python · Apache-2.0 · updated 2026-09-28</sub>
- **[GeekLinkDev/jev-subtitle-translator](https://github.com/GeekLinkDev/jev-subtitle-translator)** - Translate SRT subtitles with structured LLM output and check every translation with Jev.  
  <sub>6 stars · Python · GPL-3.0 · updated 2026-09-29</sub>
- **[HyunjunJeon/jev-judgment](https://github.com/HyunjunJeon/jev-judgment)** - Agent Skill: send closed coding-agent judgments to TypeSafe Jev  
  <sub>6 stars · Python · MIT · updated 2026-09-17</sub>
- **[Kungie/gut](https://github.com/Kungie/gut)** - Judgment calls as one line of Python, built for TypeSafe AI's Jev and running on any small model: likely / classify / rate → YES, NO or UNSURE. Also local NLI, local LLMs, Ollama, vLLM, OpenAI.  
  <sub>6 stars · Python · Apache-2.0 · updated 2026-09-29</sub>
- **[kylemclaren/jevpdf](https://github.com/kylemclaren/jevpdf)** - Ask a PDF in your own words and watch the matching lines light up. React + pdf.js + TypeSafe Jev.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[mukiwu/jev-search-mcp](https://github.com/mukiwu/jev-search-mcp)** - Jev Search as an MCP server, Claude Code plugin and CLI. Plain-language web search, sources and time window chosen by Jev, results ranked by relevance. Zero runtime dependencies.  
  <sub>6 stars · JavaScript · MIT · updated 2026-10-02</sub>
- **[stilesja/jev-ivr](https://github.com/stilesja/jev-ivr)** - Building an IVR using Jev as classifier.  
  <sub>6 stars · TypeScript · updated 2026-10-02</sub>
- **[sumleo/prompt2jev](https://github.com/sumleo/prompt2jev)** - Agent skill and CLI that turn natural language, an LLM prompt, or the code that runs one into a TypeSafe Jev decision: typed state, Choice/Score/Noul questions, and a runnable script  
  <sub>6 stars · Python · MIT · updated 2026-09-21</sub>
- **[the-sof/home-assistant-typesafe-conversation-agent](https://github.com/the-sof/home-assistant-typesafe-conversation-agent)** - A Home Assistant voice agent that decides with typed, calibrated judgements instead of an LLM. One ~300 ms call per command, and it asks when it isn't sure.  
  <sub>6 stars · Python · MIT · updated 2026-10-03</sub>
- **[vij-sameerb5/JevX](https://github.com/vij-sameerb5/JevX)** - When and Where Actually to use Jev in your code base.  
  <sub>6 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[WXK-AI/jev-opus](https://github.com/WXK-AI/jev-opus)** - Claude Opus 5.5 with the effort level re-decided every step by the TypeSafe Jev reflex — without breaking the prompt cache. CLI + Claude Code plugin.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-30</sub>
- **[zurk/hekajev](https://github.com/zurk/hekajev)** - A hundred hands through Git history — reproducible commit analytics powered by Jev.  
  <sub>6 stars · Python · MIT · updated 2026-09-24</sub>
- **[ai-suifeng/comment-jev-chrome](https://github.com/ai-suifeng/comment-jev-chrome)** - No description provided.  
  <sub>5 stars · JavaScript · updated 2026-09-18</sub>
- **[andrelandgraf/safer-with-jev](https://github.com/andrelandgraf/safer-with-jev)** - Neon Function proxy for the Neon AI Gateway with TypeSafe Jev routing.  
  <sub>5 stars · TypeScript · updated 2026-09-18</sub>
- **[arczhi/jet](https://github.com/arczhi/jet)** - A TypeSafe-native (Jev) coding agent built on Recursive LLM Context Decomposition (RLCD), with a native macOS client  
  <sub>5 stars · Python · updated 2026-09-22</sub>
- **[Arpit-Khandelwal/jev-linkedin-slop-filter](https://github.com/Arpit-Khandelwal/jev-linkedin-slop-filter)** - Slams a BAIT, CORP or BRAG stamp onto LinkedIn engagement-bait, judged live by Jev (TypeSafe System One).  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[cosmin-novac/memry](https://github.com/cosmin-novac/memry)** - European memory system for AI agents with focus on compression and weighted information  
  <sub>5 stars · Python · Apache-2.0 · updated 2026-10-04</sub>
- **[daniel-farina/nitro](https://github.com/daniel-farina/nitro)** - Grok Build with TypeSafe Jev routing tool selection once per turn: 22 to 40% cheaper on the same tasks  
  <sub>5 stars · Rust · updated 2026-09-20</sub>
- **[EugeneBoondock/jevsql](https://github.com/EugeneBoondock/jevsql)** - SQL with natural-language predicates, powered by TypeSafe's Jev. Filter, rank, classify and score rows by meaning — batched, cached and cost-guarded.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[jiayylu/jev-as-quant](https://github.com/jiayylu/jev-as-quant)** - Typed System-1 decisions (Laya/Jev) as the judgment layer of a quant research stack, with Claude as System 2. Requirements → design → code → experiments.  
  <sub>5 stars · Python · Apache-2.0 · updated 2026-09-23</sub>
- **[moritzkremb/jev-sales-copilot](https://github.com/moritzkremb/jev-sales-copilot)** - Live sales-call copilot on TypeSafe Jev: per-utterance closing probability, signals and next-best-move; syncs to a real recorded call; tailored phrasing via Claude Haiku 4.5, verified by Jev  
  <sub>5 stars · Python · updated 2026-09-23</sub>
- **[Mrlyk/jev-browser](https://github.com/Mrlyk/jev-browser)** - Browser automation CLI for AI agents, powered by the Jev model's millisecond decisions and near-zero inference costs  
  <sub>5 stars · Rust · Apache-2.0 · updated 2026-09-21</sub>
- **[n23eos/jev-skills](https://github.com/n23eos/jev-skills)** - Jev-powered decision skills for Claude Code and Codex. Opt-in, advisory, fail-open.  
  <sub>5 stars · Python · MIT · updated 2026-10-02</sub>
- **[nexibeo/jev-browser-control](https://github.com/nexibeo/jev-browser-control)** - Let Claude code, chatgpt codex or control your own Chrome. Chrome extension + MCP server: Jev, TypeSafe's decision model, picks each click in ~0.5 s for a fraction of a cent. MIT, bring your own OpenRouter key.  
  <sub>5 stars · JavaScript · updated 2026-09-26</sub>
- **[Peu77/JevFind](https://github.com/Peu77/JevFind)** - Fast semantic code search powered by Jev. Find the relevant files, line ranges, and snippets  
  <sub>5 stars · Rust · MIT · updated 2026-09-20</sub>
- **[rmosleydb/jev-smart-router](https://github.com/rmosleydb/jev-smart-router)** - JEV Smart Router — a Databricks App that uses TypeSafe JEV to pick which model answers each message, then runs inference on the chosen Databricks Foundation Model API endpoint.  
  <sub>5 stars · Python · MIT · updated 2026-09-22</sub>
- **[TheCoder30ec4/model_router_python](https://github.com/TheCoder30ec4/model_router_python)** - Route every LLM call to the cheapest model that can actually do the job. Filters by context window, output limit and cost budget using live prices, then lets Jev pick the best model across OpenAI, Anthropic, Google and more. Zero dependencies.  
  <sub>5 stars · Python · MIT · updated 2026-10-01</sub>
- **[tonyzdev/pijev](https://github.com/tonyzdev/pijev)** - PiJev: a terminal coding agent with Jev in the loop — Jev ranks the repository's files before the first call, picks skills and triages failures; your coding model writes the code. Built on Pi.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[win4r/jev-humanize-writing](https://github.com/win4r/jev-humanize-writing)** - Jev 辅助去 AI 味写作：保留事实、归因与作者语气 | Natural prose editing with Jev-assisted fidelity review  
  <sub>5 stars · Python · MIT · updated 2026-09-19</sub>
- **[xafold/jev-router](https://github.com/xafold/jev-router)** - jev-router: automatic model and effort switching for Claude Code  
  <sub>5 stars · Rust · updated 2026-09-29</sub>
- **[0x7067/jev-browse](https://github.com/0x7067/jev-browse)** - Browser automation with Jev (TypeSafe) as decision model  
  <sub>4 stars · JavaScript · MIT · updated 2026-10-02</sub>
- **[455-dIAO/windows-save-token-jev-setup](https://github.com/455-dIAO/windows-save-token-jev-setup)** - Windows Codex Skill：通过 npx 或 Git 安装，安全配置 save-token-jev 的 PreCompact/SessionStart Hooks，并提供信任、原生压缩与旧内容隔离验证。  
  <sub>4 stars · PowerShell · updated 2026-09-21</sub>
- **[aaronshaf/opencode-jev-orchestrator](https://github.com/aaronshaf/opencode-jev-orchestrator)** - Keeps OpenCode on a cheap sticky model for warm cache; Jev escalates hard turns to stronger subagents.  
  <sub>4 stars · TypeScript · MIT · updated 2026-10-02</sub>

<sub>493 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Examples and templates

- **[jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader)** - One AI trade decision every Monad block. Jev on Kuru MON-USDC.  
  <sub>2776 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev)** - A nano replica of Jev: parallel decisions, dynamic candidates, and an end-to-end training pipeline.  
  <sub>2489 stars · Python · MIT · updated 2026-09-21</sub>
- **[kerpopule/hermes-jev-skills](https://github.com/kerpopule/hermes-jev-skills)** - Jev-powered model routing, memory, compaction, skill selection, computer and browser use for Hermes agents (also Claude Code and Codex)  
  <sub>1012 stars · Python · MIT · updated 2026-10-02</sub>
- **[devagrawal09/jev-review](https://github.com/devagrawal09/jev-review)** - A staged code-review workflow and local dashboard built with TypeSafe Jev.  
  <sub>664 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[featherless-ai/simple-jev](https://github.com/featherless-ai/simple-jev)** - Turn any open model into a classifier/jev endpoint  
  <sub>586 stars · Python · Apache-2.0 · updated 2026-10-03</sub>
- **[AgriciDaniel/jev-seo](https://github.com/AgriciDaniel/jev-seo)** - Live SEO audit for any website from one homepage URL, judged by Jev. PDF, XLSX and Markdown reports.  
  <sub>498 stars · Python · MIT · updated 2026-09-22</sub>
- **[Yinsongxu/LLM2Jev](https://github.com/Yinsongxu/LLM2Jev)** - Turn local language models into Jev-style structured decision models. Get results from text and images with prefill alone—no token-by-token decoding required.  
  <sub>392 stars · Python · Apache-2.0 · updated 2026-09-26</sub>
- **[ielab/llm-rankers](https://github.com/ielab/llm-rankers)** - Document Ranking with Large Language Models.  
  <sub>213 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[standardagents/jevpilot](https://github.com/standardagents/jevpilot)** - A playable Three.js driving simulator with Jev-powered autopilot  
  <sub>208 stars · JavaScript · updated 2026-09-17</sub>
- **[SiliconLabAI/OpenJev](https://github.com/SiliconLabAI/OpenJev)** - OpenSource Jev  
  <sub>164 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[uehaj/sys1grep](https://github.com/uehaj/sys1grep)** - grep by meaning, across languages. TypeSafe Jev scores every line against a meaning; combine meanings with AND/OR/NOT. 意味で探す grep。日本語で英語を、英語で日本語を検索できる  
  <sub>144 stars · JavaScript · updated 2026-10-04</sub>
- **[sdras/jev-webmcp-extension](https://github.com/sdras/jev-webmcp-extension)** - A small extension that demos the combination of Jev x WebMCP  
  <sub>125 stars · JavaScript · Apache-2.0 · updated 2026-09-20</sub>
- **[christianmat/jev-pokemon](https://github.com/christianmat/jev-pokemon)** - Jev, an AI decision model, plays Pokémon Red. It beat the game in 37h 40m.  
  <sub>119 stars · TypeScript · GPL-2.0 · updated 2026-09-28</sub>
- **[mrnugget/jev-shell-history](https://github.com/mrnugget/jev-shell-history)** - Fish-style zsh history autosuggestions ranked by Jev (TypeSafe)  
  <sub>118 stars · TypeScript · updated 2026-09-18</sub>
- **[NanmiCoder/jev-arena](https://github.com/NanmiCoder/jev-arena)** - Jev 模型介绍与实测：通过 Choice / Score / Noul 将自然语言转为带类型的判断与概率，用于分类、评分和路由；支持与 DeepSeek 等模型对比评论打标、速度与结果，含 CSV/Excel 导入、原速回放与离线报告。  
  <sub>116 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[savka777/jev-use](https://github.com/savka777/jev-use)** - Say it, and your Mac does it. A computer-use harness on Jev that reads the screen through Accessibility. Fast, no vision model  
  <sub>115 stars · Swift · MIT · updated 2026-09-21</sub>
- **[virajbhartiya/laya-vs-jev](https://github.com/virajbhartiya/laya-vs-jev)** - Laya vs Jev: local MLX and hosted AI decisions playing T-Rex side by side, with live metrics and replay recording  
  <sub>111 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[kevinbadi/jev-voice](https://github.com/kevinbadi/jev-voice)** - Talk to your Mac. Local whisper.cpp + one Jev (TypeSafe) call per command + macOS automation.  
  <sub>108 stars · Python · MIT · updated 2026-09-23</sub>
- **[ellipsis-dev/blink](https://github.com/ellipsis-dev/blink)** - Codebase search powered by Jev from @typesafe-ai  
  <sub>94 stars · TypeScript · updated 2026-09-16</sub>
- **[1Panel-dev/laya-server](https://github.com/1Panel-dev/laya-server)** - A self-hosted API and web interface for Laya’s structured decision models, compatible with the TypeSafe Jev API format.  
  <sub>92 stars · TypeScript · Apache-2.0 · updated 2026-09-30</sub>
- **[Sheltercosmo/jev4pg](https://github.com/Sheltercosmo/jev4pg)** - jev4pg brings JEV semantic operators and natural language to SQL to PostgreSQL (PG). Open-source text filtering, extraction, ranking, probability embeddings and reusable evidence.  
  <sub>92 stars · Python · Apache-2.0 · updated 2026-10-04</sub>
- **[lyuyiqi/open-jev-fast](https://github.com/lyuyiqi/open-jev-fast)** - Faster inference backend for Open-Jev-27B: fused CUDA kernels, prefix tree, CUDA Graphs (B300, bf16)  
  <sub>90 stars · Cuda · MIT · updated 2026-09-28</sub>
- **[Dimweaker/jev-libero](https://github.com/Dimweaker/jev-libero)** - Fine-grained robot control with Jev, physics previews, and configurable LIBERO tasks.  
  <sub>80 stars · Python · MIT · updated 2026-09-21</sub>
- **[nbt4/rentalcore](https://github.com/nbt4/rentalcore)** - RentalCore — Full event rental management: jobs, devices, OCR invoice processing, M365 sync, DIN-5008 invoicing. Go + React.  
  <sub>70 stars · HTML · updated 2026-10-02</sub>
- **[EliaAlberti/jev-rules](https://github.com/EliaAlberti/jev-rules)** - Jev picks which of your rules apply to each prompt, so Claude only sees the ones that matter.  
  <sub>64 stars · JavaScript · MIT · updated 2026-09-27</sub>
- **[Nisaka520/JevIntent](https://github.com/Nisaka520/JevIntent)** - 微信（FkWeChat 插件）：长按消息分析意图 / 情绪 / 回复姿态，只在本机弹提示，对方无感知  
  <sub>63 stars · Java · MIT · updated 2026-09-23</sub>
- **[kyu1204/jgrep](https://github.com/kyu1204/jgrep)** - grep for what code does, not what it's called. Semantic code search powered by TypeSafe Jev.  
  <sub>59 stars · TypeScript · MIT · updated 2026-09-30</sub>
- **[aurorainfra/grev](https://github.com/aurorainfra/grev)** - Thinking coreutils  
  <sub>55 stars · Go · Apache-2.0 · updated 2026-10-02</sub>
- **[skeptrunedev/jev-recruiter](https://github.com/skeptrunedev/jev-recruiter)** - A Jev powered LinkedIn recruiting agent. Watch it browse relevant profiles, save links, and review evidence against your hiring brief.  
  <sub>52 stars · Python · MIT · updated 2026-09-19</sub>
- **[OmniJev/PlayJev](https://github.com/OmniJev/PlayJev)** - 🚀🚀 A 0.8B JEV-like multimodal model playing GUI games directly from raw pixels.  
  <sub>47 stars · JavaScript · Apache-2.0 · updated 2026-09-24</sub>
- **[zhengxuyu/litjev](https://github.com/zhengxuyu/litjev)** - Turn any off-the-shelf LLM into a Jev -like decision layer  
  <sub>46 stars · Python · Apache-2.0 · updated 2026-10-01</sub>
- **[choxos/jev-reviewer](https://github.com/choxos/jev-reviewer)** - Data extraction for systematic reviews, quoted from the papers. Ask a trial report and its supplements your extraction form or a RoB 2, ROBINS-I, QUADAS-2 or TIDieR template; Jev points at the lines, every answer is a verbatim quote with its page, you check it and export the table. Files stay in your browser.  
  <sub>41 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[jlowin/vibecheck](https://github.com/jlowin/vibecheck)** - ✨✅ The easiest decisions your code will ever make.  
  <sub>40 stars · Python · updated 2026-09-24</sub>
- **[hotchpotch/jev-reranker](https://github.com/hotchpotch/jev-reranker)** - Jev-powered relevance filtering and reranking for RAG in Python.  
  <sub>39 stars · Python · MIT · updated 2026-09-21</sub>
- **[altryne/jevify](https://github.com/altryne/jevify)** - An agent skill to discover TypeSafe Jev opportunities, design typed questions, and learn from recent community experiments.  
  <sub>38 stars · Python · MIT · updated 2026-09-26</sub>
- **[frankda/jev-poly-crypto-demo](https://github.com/frankda/jev-poly-crypto-demo)** - No description provided.  
  <sub>38 stars · TypeScript · updated 2026-09-23</sub>
- **[buer2233/jev-ui-test](https://github.com/buer2233/jev-ui-test)** - Jev 决策模型驱动的 UI 自动化测试框架：不生成「下一步做什么」的文字，而是在候选元素里直接打分；一句话写用例，pytest 执行，Allure 出报告，每个操作决策中位 458 ms（UI test automation driven by the Jev decision model — scored decisions, not generated prose; ~458 ms per decision）  
  <sub>37 stars · Python · MIT · updated 2026-09-30</sub>
- **[samdotmak/jev-recall](https://github.com/samdotmak/jev-recall)** - Retrieve by relevance, not resemblance: filter an AI assistant's memories with TypeSafe's Jev  
  <sub>37 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[chy4pro/jev-for-chrome](https://github.com/chy4pro/jev-for-chrome)** - Jev for Chrome: drives the tab you are looking at with TypeSafe Jev, a sub-second decision model. Community port of browser-use/jev-ultrafast, not affiliated with TypeSafe.  
  <sub>36 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[BorisLeMeec/jev](https://github.com/BorisLeMeec/jev)** - A claude code plugin for jev  
  <sub>35 stars · Go · MIT · updated 2026-09-18</sub>
- **[Bewinxed/jevgpt](https://github.com/Bewinxed/jevgpt)** - A chatbot built on a model that cannot generate text (TypeSafe AI's Jev, driven autoregressively)  
  <sub>30 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[colliber/duckdb-jev](https://github.com/colliber/duckdb-jev)** - DuckDB extension: typed Jev answers as real SQL types  
  <sub>28 stars · C++ · MIT · updated 2026-09-18</sub>
- **[Eliot5566/JEV-Paper-Radar](https://github.com/Eliot5566/JEV-Paper-Radar)** - Let Jev read every new arXiv paper each morning and surface the few you should read. Plain-English interests, calibrated probabilities, ~$0.06/day, fork and go.  
  <sub>28 stars · Python · MIT · updated 2026-10-02</sub>
- **[ankit-aglawe/tinyjev](https://github.com/ankit-aglawe/tinyjev)** - A tiny jev-like model that answers Choice, Score and Noul questions in one forward pass and returns calibrated probabilities. MLX or PyTorch, fully offline, System One compatible.  
  <sub>27 stars · Python · MIT · updated 2026-10-01</sub>
- **[liaoyuhua/jev-trip](https://github.com/liaoyuhua/jev-trip)** - Two Minds, One Trip.  
  <sub>26 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[zisshh/computer-use](https://github.com/zisshh/computer-use)** - A blazing fast computer-use powered by JEV  
  <sub>23 stars · Python · MIT · updated 2026-09-30</sub>
- **[BoundaryML/feelings](https://github.com/BoundaryML/feelings)** - .feels() on anything — the AI if statement as a real, typed method. Jev + BAML.  
  <sub>22 stars · BAML · updated 2026-09-19</sub>
- **[GPTchatly/Forma](https://github.com/GPTchatly/Forma)** - No description provided.  
  <sub>22 stars · JavaScript · MIT · updated 2026-09-29</sub>
- **[TypeSafeAI/typesafe-playground](https://github.com/TypeSafeAI/typesafe-playground)** - Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.  
  <sub>21 stars · TypeScript · MIT · updated 2026-10-04</sub>
- **[imohitmayank/jevfill](https://github.com/imohitmayank/jevfill)** - No description provided.  
  <sub>20 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[parth-kp/jev-mail-classifier](https://github.com/parth-kp/jev-mail-classifier)** - Classify your inbox with Jev (TypeSafe's System One model) — tag, move, flag, and notify, all config-driven.  
  <sub>20 stars · Python · MIT · updated 2026-09-20</sub>
- **[valentynkit/jev-belay](https://github.com/valentynkit/jev-belay)** - Claude Code Stop hook that blocks an unverified done: reads the transcript for evidence, asks Jev once, fails open on everything else  
  <sub>20 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[khordoo/jev-reflex-autonomy-lab](https://github.com/khordoo/jev-reflex-autonomy-lab)** - Real-time drone swarm autonomy simulation using Jev for fast System 1 reflex decisions and collision avoidance, with optional System 2 reasoning for strategic guidance  
  <sub>19 stars · TypeScript · MIT · updated 2026-09-26</sub>
- **[simonw/llm-typesafe](https://github.com/simonw/llm-typesafe)** - LLM plugin for accessing Jev and other TypeSafe AI models  
  <sub>19 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[statelyai/jevspresso](https://github.com/statelyai/jevspresso)** - Jev + espresso machine + state machine (XState)  
  <sub>19 stars · TypeScript · updated 2026-10-03</sub>
- **[CommandCodeAI/cmd-mod-jev-nudge](https://github.com/CommandCodeAI/cmd-mod-jev-nudge)** - Command Code mod: nudges the agent to keep going when it stops with work left, judged by Jev  
  <sub>16 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[backmeupplz/jev_antispam_bot](https://github.com/backmeupplz/jev_antispam_bot)** - Minimal grammY Telegram anti-spam bot powered by TypeSafe Jev  
  <sub>15 stars · TypeScript · MIT · updated 2026-10-03</sub>
- **[doeixd/discern](https://github.com/doeixd/discern)** - Craft Type-Safe Uncertainty-aware semantic pattern matching, control flow, and smart procedures for Effect DecisionModel and Jev  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[stolinski/gpui-agent](https://github.com/stolinski/gpui-agent)** - Jev-driven native GPUI testing: Rust accessibility bridge, bounded goal runners, and one-call pi integration.  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[Kevthetech143/super-jev](https://github.com/Kevthetech143/super-jev)** - A small, extensible decision-to-action harness for TypeSafe Jev  
  <sub>14 stars · Python · MIT · updated 2026-10-04</sub>
- **[sosopop/jev_stock](https://github.com/sosopop/jev_stock)** - An experimental JEV-powered framework for forecasting short-term stock price direction from structured market data.  
  <sub>14 stars · Python · updated 2026-09-17</sub>
- **[AIAnytime/jev-crash-course](https://github.com/AIAnytime/jev-crash-course)** - All projects for learning Jev and other Decision (System-1) Models, a model that makes decisions instead of writing text.  
  <sub>13 stars · Python · updated 2026-09-26</sub>
- **[ethanplusai/jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch)** - Filter any live Twitch chat with Jev: a bring-your-own-key Chrome extension  
  <sub>13 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[gaborishka/jev-canvas](https://github.com/gaborishka/jev-canvas)** - Draw on a tldraw canvas with your voice and a pointing finger. Jev (TypeSafe System One) decides action, target and place in ~350 ms per spoken word.  
  <sub>13 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[goodrahstar/pdf-race](https://github.com/goodrahstar/pdf-race)** - Docling → Jev vs Docling → Gemini 3.8 Flash vs Gemini reading the PDF: same documents, one clock, scored against arXiv's own metadata  
  <sub>13 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[bl888m/jev-bot](https://github.com/bl888m/jev-bot)** - JEV-powered market decision bot for stocks, crypto and memes. State in, BUY/SELL/HOLD/AVOID out, paper by default  
  <sub>12 stars · Python · updated 2026-10-04</sub>
- **[parable-work/jev-datafusion](https://github.com/parable-work/jev-datafusion)** - DataFusion SQL functions for typed judgments. TypeSafe is one server.  
  <sub>12 stars · Rust · Apache-2.0 · updated 2026-09-22</sub>
- **[valentynkit/jev-commit](https://github.com/valentynkit/jev-commit)** - pre-commit hook: one Jev call judges whether your commit message matches the diff, plus debug leftovers, scope creep, and a secret belt  
  <sub>12 stars · Python · MIT · updated 2026-09-19</sub>
- **[virolea/lintus](https://github.com/virolea/lintus)** - A linter whose rules are written in plain language.  
  <sub>12 stars · Rust · MIT · updated 2026-09-23</sub>
- **[GiesN/typesafe-jev-workflow](https://github.com/GiesN/typesafe-jev-workflow)** - No description provided.  
  <sub>11 stars · Python · updated 2026-09-16</sub>
- **[kzkhykw/jev-auto-ime](https://github.com/kzkhykw/jev-auto-ime)** - 打っている言葉が日本語か英語かをJevに聞いて、Macの入力モードを切り替える道具。個人利用のみ。  
  <sub>11 stars · Python · updated 2026-09-22</sub>
- **[Mawfyy/jevflow](https://github.com/Mawfyy/jevflow)** - Probabilistic AI decisions as composable backend primitives — typed judgments (noul/score/choice), deterministic thresholds, and explainable workflows. Powered by TypeSafe's Jev, provider-agnostic.  
  <sub>11 stars · TypeScript · updated 2026-09-20</sub>
- **[ZephyrDeng/ego-jev](https://github.com/ZephyrDeng/ego-jev)** - ego lite skill — each DOM step decided in ~0.4s, no LLM turn  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-30</sub>
- **[limboinf/semantic-live-caption](https://github.com/limboinf/semantic-live-caption)** - 听写纸 · Real-time speech captions with live semantic annotation (key points / emotion / intent) — Confucius4-R2T2 + TypeSafe Jev + DeepSeek  
  <sub>10 stars · HTML · MIT · updated 2026-09-20</sub>
- **[mukiwu/vault-tag-system](https://github.com/mukiwu/vault-tag-system)** - 在瀏覽器選一個 Markdown vault，用 Jev 逐篇判斷該掛哪些標籤。高信心自動採納，其餘人工審核，可回滾  
  <sub>10 stars · TypeScript · updated 2026-09-24</sub>
- **[siliconkernel/vllm-jev-decison](https://github.com/siliconkernel/vllm-jev-decison)** - Classification-only typed decisions for vLLM: finite-schema candidate scoring, probabilities, and abstention. No generative fallback.  
  <sub>10 stars · Python · MIT · updated 2026-09-18</sub>
- **[teknium1/hermes-and-jev-play-minecraft](https://github.com/teknium1/hermes-and-jev-play-minecraft)** - Hermes Agent plans, Jev (TypeSafe) picks bounded actions, Mineflayer executes: Minecraft with no screenshots or keypresses from a model. Includes the reproduction of rmalde/minecraft-agent's Ender Dragon run.  
  <sub>10 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[zaidmukaddam/cascade-search](https://github.com/zaidmukaddam/cascade-search)** - A 27K-parameter in-browser query parser that knows when it doesn't know.  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[jeffonelson/jev-bigquery-cloudrun](https://github.com/jeffonelson/jev-bigquery-cloudrun)** - Classify support tickets in BigQuery with Jev and Cloud Run  
  <sub>9 stars · Python · updated 2026-09-21</sub>
- **[comoc/jev-minesweeper](https://github.com/comoc/jev-minesweeper)** - TypeSafe Jev (System One) にブラウザ上のマインスイーパーを解かせるデモ  
  <sub>8 stars · JavaScript · updated 2026-09-20</sub>
- **[dfinke/Jev](https://github.com/dfinke/Jev)** - PowerShell decisions with TypeSafe AI's Jev model: https://typesafe.ai/blog/introducing-system-one-models-and-jev  
  <sub>8 stars · PowerShell · MIT · updated 2026-10-03</sub>
- **[kylemclaren/jevsearch](https://github.com/kylemclaren/jevsearch)** - Site search that understands the question. Ranked by TypeSafe's Jev model.  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[Nancy-Chauhan/hearth-jev-rental-search](https://github.com/Nancy-Chauhan/hearth-jev-rental-search)** - Autonomous multi-source rental search powered by TypeSafe Jev  
  <sub>8 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[Nuu-maan/undertone](https://github.com/Nuu-maan/undertone)** - A text box that tells you how your message sounds before you send it. Powered by Jev.  
  <sub>8 stars · TypeScript · updated 2026-09-23</sub>
- **[ranjan2829/AskJev](https://github.com/ranjan2829/AskJev)** - AskJev — Jev autopilot for any website + guard on irreversible clicks (TypeSafe System One, not Claude)  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[valentynkit/jev.nvim](https://github.com/valentynkit/jev.nvim)** - Neovim: ask the buffer a question, get a quickfix list. Treesitter splits functions, Jev scores each one, probabilities land as virtual text  
  <sub>8 stars · Lua · MIT · updated 2026-09-19</sub>
- **[anxkhn/JevPlaysPokemon](https://github.com/anxkhn/JevPlaysPokemon)** - Jev plays Generation 3 Pokémon via Showdown and a real FireRed ROM.  
  <sub>7 stars · HTML · GPL-3.0 · updated 2026-09-18</sub>
- **[bcharleson/jev-gtm-cookbook](https://github.com/bcharleson/jev-gtm-cookbook)** - 15 open-source outbound recipes on TypeSafe Jev. Score your LinkedIn network or any lead list against your ICP, catch job changes, triage replies. Local, zero dependencies. 16,711 connections scored for $0.73.  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[caijinchun/nanojev-arena](https://github.com/caijinchun/nanojev-arena)** - NanoJev Snake Arena: 1v4 human-vs-AI battleship + 100-agent swarm simulator. Local demo of Jev System-One model (open-source mini replica).  
  <sub>7 stars · HTML · MIT · updated 2026-09-19</sub>
- **[inanna-malick/jev-dsl](https://github.com/inanna-malick/jev-dsl)** - Agent-first Haskell DSL for TypeSafe's Jev judgment model: typed packets, inferred types, answers under the same labels  
  <sub>7 stars · Haskell · MIT · updated 2026-09-18</sub>
- **[jaibhasin/jev-yt-time-saver](https://github.com/jaibhasin/jev-yt-time-saver)** - A Chrome extension that covers distracting YouTube videos with Jev. Show anyway whenever you want.  
  <sub>7 stars · JavaScript · updated 2026-09-23</sub>
- **[joshlarsen/jev-t-rex-runner](https://github.com/joshlarsen/jev-t-rex-runner)** - Chrome dino game played by Typesafe AI Jev model  
  <sub>7 stars · JavaScript · BSD-3-Clause · updated 2026-09-17</sub>
- **[kitze/pagegrade](https://github.com/kitze/pagegrade)** - Grade page sections for clarity, writing and on-page SEO. WXT + TypeSafe AI Jev.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[mani-aiml/jev-demos](https://github.com/mani-aiml/jev-demos)** - Demos with Jev, TypeSafe's System One model, one folder per demo. Code behind the videos on The Agentic Enterprise.  
  <sub>7 stars · Python · MIT · updated 2026-10-02</sub>
- **[wnzn/semif-go](https://github.com/wnzn/semif-go)** - System One-style decision scoring over llama.cpp with multimodal input  
  <sub>7 stars · Go · MIT · updated 2026-09-23</sub>
- **[amigos-robot/amigos-jev](https://github.com/amigos-robot/amigos-jev)** - a free multi-modal jev API for everyone  
  <sub>6 stars · updated 2026-09-23</sub>
- **[cachix/jev-action](https://github.com/cachix/jev-action)** - Run Jev judgments in GitHub Actions, including pull request label triage  
  <sub>6 stars · TypeScript · Apache-2.0 · updated 2026-09-23</sub>
- **[dani1005/book-aurora](https://github.com/dani1005/book-aurora)** - Jev reads a whole novel in seconds. Every passage becomes a row of colour.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[darkmatter/adhere](https://github.com/darkmatter/adhere)** - A linter for rules a normal linter can't check. (powered by Typesafe)  
  <sub>6 stars · TypeScript · MIT · updated 2026-10-02</sub>
- **[Foadsf/jev-for-engineers](https://github.com/Foadsf/jev-for-engineers)** - Eight minimal working examples of TypeSafe's Jev (a System One model) applied to mechanical and electrical engineering: CAD/CAE/CAM routing, FEM result triage, DFM screening, BOM alignment, hallucination-proof extraction. Zero dependencies.  
  <sub>6 stars · Python · MIT · updated 2026-09-16</sub>
- **[nssmd/jev-bot](https://github.com/nssmd/jev-bot)** - Self-hosted Jev decision workbench and Feishu bot: automatic choices, probabilities, and experimental word/character writing.  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[pasangimhana/fly-x-jev](https://github.com/pasangimhana/fly-x-jev)** - Pavlovian conditioning on the MaleCNS fruit fly connectome, with TypeSafe's Jev picking which descending neuron fires  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-29</sub>
- **[web3w/jev-trader](https://github.com/web3w/jev-trader)** - Multilingual Jev trading dashboard with real-time Kuru and Hyperliquid market data, simulated trading, and model decision guides. Live website: https://jev-trader.com  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-30</sub>
- **[Bring-AI/jev-numeric](https://github.com/Bring-AI/jev-numeric)** - JevNext · More than Choice — A simple algorithm that equips any Jev-like model with numerical control.  
  <sub>5 stars · Python · updated 2026-09-25</sub>
- **[Bring-AI/JevNext](https://github.com/Bring-AI/JevNext)** - JevNext · More than Choice — A simple algorithm that equips any Jev-like model with numerical control.  
  <sub>5 stars · Python · updated 2026-09-25</sub>
- **[buluoray/JevOnly](https://github.com/buluoray/JevOnly)** - Pure Jev that can "type" and drive towards task completion.  
  <sub>5 stars · Python · Apache-2.0 · updated 2026-10-02</sub>
- **[danvega/hello-jev-java](https://github.com/danvega/hello-jev-java)** - No description provided.  
  <sub>5 stars · Java · updated 2026-09-18</sub>
- **[darrenli6/jev-recruitment](https://github.com/darrenli6/jev-recruitment)** - Jev-powered resume screening tool built on Next.js. Define job requirements, upload resumes in bulk, and get structured match/no-match judgments — every conclusion traceable back to the original resume text.  
  <sub>5 stars · TypeScript · updated 2026-09-22</sub>
- **[eijiaraki/toxic-filter](https://github.com/eijiaraki/toxic-filter)** - Xの投稿をJevで分類し、選んだ表現を目隠しするChrome拡張機能 / A Chrome extension to filter unwanted expressions on X with Jev  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[hamidfarmani/jev-resume-match](https://github.com/hamidfarmani/jev-resume-match)** - Score how well a resume matches a job description using Jev (TypeSafe AI). Next.js app that returns typed, explainable match scores instead of generated text.  
  <sub>5 stars · TypeScript · updated 2026-09-20</sub>
- **[mountainMath/JevR](https://github.com/mountainMath/JevR)** - R client for the TypeSafe Jev System One API  
  <sub>5 stars · R · updated 2026-09-20</sub>
- **[Nuu-maan/pastewise](https://github.com/Nuu-maan/pastewise)** - Paste anything, get the right tool. JSON, JWTs, cron, stack traces and more. Powered by Jev.  
  <sub>5 stars · TypeScript · updated 2026-09-23</sub>
- **[pulkitxm/jev-chess-agent](https://github.com/pulkitxm/jev-chess-agent)** - A chess bot opponent player with typed move selection and browser controls  
  <sub>5 stars · JavaScript · updated 2026-09-20</sub>
- **[Reindeer-AI/pi-jev-guard](https://github.com/Reindeer-AI/pi-jev-guard)** - Check Pi code edits against repository Markdown rules with TypeSafe Jev  
  <sub>5 stars · TypeScript · updated 2026-09-24</sub>
- **[reinhard-z/vision-jev](https://github.com/reinhard-z/vision-jev)** - Browser driving game that captions dropped road images locally, then uses Jev Choice answers to drive the car while code owns physics and timing.  
  <sub>5 stars · TypeScript · MIT · updated 2026-10-03</sub>
- **[ShuhanSun/jev-oas-sentinel](https://github.com/ShuhanSun/jev-oas-sentinel)** - Catch breaking API behavior hidden in OpenAPI prose with deterministic checks and TypeSafe JEV System One semantic review.  
  <sub>5 stars · Python · Apache-2.0 · updated 2026-09-29</sub>
- **[VBS2004/jev-windows-agent](https://github.com/VBS2004/jev-windows-agent)** - Windows UI Automation extension of arc-cua: a fast, JEV-powered decision loop for desktop computer-use agents  
  <sub>5 stars · Python · MIT · updated 2026-09-27</sub>
- **[xhongc/jev-music-tag](https://github.com/xhongc/jev-music-tag)** - 利用 jev 刮削音乐元数据,风格,语言  
  <sub>5 stars · Python · updated 2026-09-23</sub>
- **[1104480426-hash/jev-wingman](https://github.com/1104480426-hash/jev-wingman)** - 基于 Jev 的聊天决策辅助：读当前聊天窗口，只返回类型化判定与置信度，不生成回复。QQ / 飞书 / 抖音实测可用。· An on-device chat co-pilot built on Jev — typed verdicts instead of prose, no package allowlist.  
  <sub>4 stars · Java · MIT · updated 2026-09-23</sub>
- **[adigulalkari/Jev_GC](https://github.com/adigulalkari/Jev_GC)** - Real-time context garbage collection for LLM agents. Watches the OpenTelemetry spans your agent already emits and decides, mid-run, what stays in the next prompt — and can give back what it evicted.  
  <sub>4 stars · Python · MIT · updated 2026-09-25</sub>
- **[blingdivinity/jevseek](https://github.com/blingdivinity/jevseek)** - DeepSeek proposes the next token, TypeSafe's Jev chooses it: a decision model used as a sampler  
  <sub>4 stars · Python · MIT · updated 2026-09-22</sub>
- **[Embodied-AI-System/Qwen3.5-OneForward](https://github.com/Embodied-AI-System/Qwen3.5-OneForward)** - Jev-style typed decisions from Qwen3.5-2B logits — one forward pass, zero decoding, zero fine-tuning.  
  <sub>4 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[hosseintoussi/jev-flappy-bird](https://github.com/hosseintoussi/jev-flappy-bird)** - A live demo of TypeSafe's Jev model playing Flappy Bird, one flap-or-wait decision at a time.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[IAnMove/jev-game-agent](https://github.com/IAnMove/jev-game-agent)** - Experimental Jev game agent: RAM, emulator lookahead, checkpoint search and verified recordings. Bring your own ROM and BizHawk.  
  <sub>4 stars · Python · updated 2026-09-18</sub>
- **[Ideny42/jev-keyboard](https://github.com/Ideny42/jev-keyboard)** - Jev-powered candidate reranking for Rime on macOS, with Windows support planned.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-23</sub>
- **[jev-ai/jev-agent-skill](https://github.com/jev-ai/jev-agent-skill)** - Jev AI agent skill for typed decisions  
  <sub>4 stars · updated 2026-09-21</sub>
- **[kiler398/jev-demo](https://github.com/kiler398/jev-demo)** - 电商客服质检领域jev demo  
  <sub>4 stars · TypeScript · updated 2026-09-26</sub>
- **[lostviolinist/crowdcut-jev-hedra](https://github.com/lostviolinist/crowdcut-jev-hedra)** - Audience-directed live story powered by Jev and Hedra. Watch at crowdcut.lol  
  <sub>4 stars · TypeScript · updated 2026-09-25</sub>
- **[mkotlikov/jev-grug](https://github.com/mkotlikov/jev-grug)** - Helping JEV speak <3  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[namazso/windows-privacy-by-jev](https://github.com/namazso/windows-privacy-by-jev)** - Windows 11 privacy and security settings as graded by Jev.  
  <sub>4 stars · HTML · 0BSD · updated 2026-09-27</sub>
- **[pulkitxm/jev-reader](https://github.com/pulkitxm/jev-reader)** - Browser extension that explains difficult words with simple meanings and examples, powered by Jev.  
  <sub>4 stars · JavaScript · updated 2026-09-20</sub>
- **[RileyCarney/JevTools](https://github.com/RileyCarney/JevTools)** - A lightweight collection of developer utilities and scripts designed to streamline Jev development process.  
  <sub>4 stars · HTML · GPL-3.0 · updated 2026-09-27</sub>
- **[selcukusta/jev-mailroom](https://github.com/selcukusta/jev-mailroom)** - Email triage PoC: reads a mailbox over IMAP and classifies each message by what it is and what it's about, using TypeSafe System One (Jev) — 11 questions in a single call, decided in Python.  
  <sub>4 stars · Python · MIT · updated 2026-09-20</sub>
- **[svmanth/jmarket](https://github.com/svmanth/jmarket)** - Polymarket tells you what the crowd thinks. This tells you what Jev thinks.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[tiffygk/jev-mode](https://github.com/tiffygk/jev-mode)** - Claude Code/Codex skills and learning resources that make it easy to build with Jev, TypeSafe's System One model. All materials pull directly from their canonical cookbooks and documentation.  
  <sub>4 stars · HTML · updated 2026-10-04</sub>
- **[vinilana/jev-browser](https://github.com/vinilana/jev-browser)** - No description provided.  
  <sub>4 stars · TypeScript · updated 2026-09-17</sub>
- **[vishxrad/clashroyale-jev](https://github.com/vishxrad/clashroyale-jev)** - Jev plays Clash Royale with Qwen battlefield vision, local OpenCV HUD recognition, and a live decision dashboard.  
  <sub>4 stars · Python · updated 2026-09-22</sub>
- **[wangzhezbz/jev-pilot](https://github.com/wangzhezbz/jev-pilot)** - An all-in-one Jev plugin for Codex. Bringing automatic reasoning-effort routing, context filtering, and workflow assistance to macOS, Windows, and Linux. Under active development.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-27</sub>
- **[xinwang-nwpu/jev-mobile](https://github.com/xinwang-nwpu/jev-mobile)** - One TypeSafe Jev decision per step over the A11Y tree, executed via ADB. No screenshots and ultra fast!  
  <sub>4 stars · Python · MIT · updated 2026-09-21</sub>
- **[xuebai2812/jev-travel-packing](https://github.com/xuebai2812/jev-travel-packing)** - Jev-powered travel packing with emoji physics, backend APIs, tests, and deployment source  
  <sub>4 stars · JavaScript · updated 2026-09-22</sub>
- **[zzsong1023/jev-market-reflex](https://github.com/zzsong1023/jev-market-reflex)** - Fast typed AI decisions on live crypto markets using TypeSafe AI Jev.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[AMMIROSOH/jev-2048-selenium](https://github.com/AMMIROSOH/jev-2048-selenium)** - Selenium 2048 player powered by expectimax search and TypeSafe Jev, with portrait FFmpeg recording.  
  <sub>3 stars · Python · updated 2026-09-25</sub>
- **[AnthusAI/Jev-Calibration](https://github.com/AnthusAI/Jev-Calibration)** - Does Jev's confidence mean what it says? Calibrating Jev (TypeSafe System One) with Platt scaling and isotonic regression.  
  <sub>3 stars · Python · updated 2026-10-04</sub>
- **[AnthusAI/Jev-Flywheel](https://github.com/AnthusAI/Jev-Flywheel)** - Jev plus a decision head that learns from feedback: can a loop name a bias we planted in our own dataset?  
  <sub>3 stars · Python · MIT · updated 2026-10-04</sub>
- **[artemnovitckii/apollo-jev-lead-classifier](https://github.com/artemnovitckii/apollo-jev-lead-classifier)** - Connect saved Apollo contacts or CSVs to JEV, qualify leads and prepare company-specific outreach drafts with message checks and call invitations. Includes AI setup and offline tests.  
  <sub>3 stars · Python · updated 2026-09-26</sub>
- **[Dj-Shortcut/rekordbox-jev](https://github.com/Dj-Shortcut/rekordbox-jev)** - Experimental macOS Rekordbox bridge and Jev decision widget  
  <sub>3 stars · Python · updated 2026-09-28</sub>
- **[EthanAlgoX/jev-trading](https://github.com/EthanAlgoX/jev-trading)** - No description provided.  
  <sub>3 stars · TypeScript · updated 2026-09-20</sub>
- **[fbettag/elixir-jev](https://github.com/fbettag/elixir-jev)** - Typed semantic judgments and pattern matching for TypeSafe Jev and local Laya in Elixir  
  <sub>3 stars · Elixir · MIT · updated 2026-09-20</sub>
- **[gaborishka/jev-wrapped](https://github.com/gaborishka/jev-wrapped)** - Telegram channel X-ray: Jev judges a year of posts, you get a card. One Cloudflare Worker.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[greghavens/jev-no-bullshit](https://github.com/greghavens/jev-no-bullshit)** - A code harness plugin that uses jev to detect and redirect AI bullshit  
  <sub>3 stars · Python · Apache-2.0 · updated 2026-10-03</sub>

<sub>445 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Reading and explainers

- **[DataCamp - Jev: TypeSafe's System One model](https://www.datacamp.com/blog/system-one-models-jev)** - Longer explainer on the model class, the typed question format and where it fits.
- **[LangChain - Building a harness with Jev](https://www.langchain.com/blog/building-a-harness-with-jev)** - Walkthrough of wiring Jev into an agent harness, including the jev-as-a-judge experiment.
- **[TechCrunch - A new kind of AI model from a ChatGPT inventor](https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/)** - Launch coverage and context on TypeSafe AI's seed round and early adopters.
- **[The Register - TypeSafe AI debuts model for machines that plays Doom](https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711)** - Coverage of the launch demo, with a sceptical read on the performance claims.
- **[Rizzo-AI-Academy/rizzo-flow](https://github.com/Rizzo-AI-Academy/rizzo-flow)** - The open, local take on Jev: typed decisions from an LLM, without generating a single token  
  <sub>810 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[kshetrajna12/reflex](https://github.com/kshetrajna12/reflex)** - A small open decision model: state + typed questions -> calibrated probabilities. A Jev / System One re-creation on Qwen3.5.  
  <sub>161 stars · Python · MIT · updated 2026-09-27</sub>
- **[cobusgreyling/Jev](https://github.com/cobusgreyling/Jev)** - Unofficial TypeSafe Jev showcase — System One decisions, not chat.  
  <sub>132 stars · Python · MIT · updated 2026-09-20</sub>
- **[tostechbr/partway](https://github.com/tostechbr/partway)** - Voice control for macOS that acts partway through your sentence, built on Jev (TypeSafe)  
  <sub>26 stars · Swift · MIT · updated 2026-09-24</sub>
- **[GPT-AGI/OpenJev](https://github.com/GPT-AGI/OpenJev)** - Opensource Jev  
  <sub>17 stars · Python · MIT · updated 2026-09-20</sub>
- **[Akramovic1/jev-pilot](https://github.com/Akramovic1/jev-pilot)** - Let Jev steer Claude Code: the right reasoning effort, subagent model and skill for every prompt. A Claude Code plugin powered by TypeSafe's Jev (OpenRouter / TypeSafe).  
  <sub>8 stars · TypeScript · updated 2026-09-30</sub>
- **[glamboyosa/docket](https://github.com/glamboyosa/docket)** - A Go TUI that uses Jev to classify documents, assess sensitivity and urgency, and determine whether action is required.  
  <sub>6 stars · Go · updated 2026-10-02</sub>
- **[chris-wozniczek/jev-voice-control](https://github.com/chris-wozniczek/jev-voice-control)** - Control your Mac by voice. Speech → Jev (TypeSafe AI System One model) typed decisions → macOS actions. Menu-bar Swift app.  
  <sub>5 stars · Swift · MIT · updated 2026-09-21</sub>
- **[hgqimo/JevRanker](https://github.com/hgqimo/JevRanker)** - Jev decision models as a fast reranker for RAG: one forward pass scores k candidates, zero decoded tokens. Plugged into BlitzRank's tournament graph and Reranker-Guided Search - 22x faster per match than a generative istwise LLM at 2.9x its nDCG@10 (Qwen3-0.6B, T2Ranking).  
  <sub>5 stars · Python · MIT · updated 2026-09-29</sub>
- **[ponyo877/jev-telop-live](https://github.com/ponyo877/jev-telop-live)** - No description provided.  
  <sub>5 stars · JavaScript · updated 2026-09-19</sub>
- **[RoderickQiu/qualm](https://github.com/RoderickQiu/qualm)** - The first screen-time app built on Kev and Jev. Local-first on Apple silicon for free & privacy. Blocks the mechanism (Shorts, feeds, livestreams), not the site or app.  
  <sub>4 stars · Python · GPL-3.0 · updated 2026-09-25</sub>
- **[almcc/slop-linter](https://github.com/almcc/slop-linter)** - Lints AI-generated code for slop using Jev, a System One model that makes fast structured decisions instead of generating text.  
  <sub>3 stars · Python · updated 2026-09-19</sub>
- **[imteche/localjev](https://github.com/imteche/localjev)** - Self-hosted System One decision engine (TypeSafe Jev's Choice/Score/Noul contract) running locally on LM Studio, with real probabilities from token logprobs.  
  <sub>1 stars · Python · MIT · updated 2026-09-22</sub>
- **[makefinks/jev-feed-filter](https://github.com/makefinks/jev-feed-filter)** - Smart, dynamic AI filtering for X and YouTube feeds using Jev  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[mrmt/elevator-three](https://github.com/mrmt/elevator-three)** - Jev に判断を任せる自動生成のエレクトロの楽器  
  <sub>1 stars · HTML · MIT · updated 2026-10-03</sub>
- **[willfish/pi-observational-memory-jev](https://github.com/willfish/pi-observational-memory-jev)** - Jev decides what to keep. Compaction never rewrites the transcript.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-29</sub>
- **[7starsseeker/dsh-jev-guard](https://github.com/7starsseeker/dsh-jev-guard)** - DeepSeek Harness (DSH) 执行前安全阀门:bash/pwsh 真正执行前先经静态规则 + TypeSafe Jev 语义判定,破坏性操作按 允许/修正/拦截/上报人工 四态处置,含额度降级与审计日志。  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-29</sub>
- **[aktersnurra/jev.ex](https://github.com/aktersnurra/jev.ex)** - No description provided.  
  <sub>0 stars · Elixir · updated 2026-09-26</sub>
- **[andre-morise/jev-bot](https://github.com/andre-morise/jev-bot)** - JEV-powered market decision bot for stocks, crypto and memes. State in, a typed BUY/SELL/HOLD/AVOID out, paper by default.  
  <sub>0 stars · updated 2026-09-22</sub>
- **[colbyford/jev-binder-classification](https://github.com/colbyford/jev-binder-classification)** - Zero-Shot Classification of Protein Binders with Jev  
  <sub>0 stars · Jupyter Notebook · updated 2026-09-21</sub>
- **[DinithKumudika/ai-email-classifier](https://github.com/DinithKumudika/ai-email-classifier)** - M@iLi - An Intelligent email management for businesses in AI era  
  <sub>0 stars · TypeScript · updated 2026-10-01</sub>
- **[JacobLinCool/jev-ai-detector](https://github.com/JacobLinCool/jev-ai-detector)** - A small AI-text taste detector for Traditional Chinese (zh-TW) and English, built on Jev.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[koki-develop/fizzbuzz-jev](https://github.com/koki-develop/fizzbuzz-jev)** - FizzBuzz powered by Jev, TypeSafe AI's System One model.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[lgraubner/jev-lang](https://github.com/lgraubner/jev-lang)** - A small web app that identifies the predominant language in a text sample via Jev from TypeSafe AI  
  <sub>0 stars · Python · updated 2026-09-20</sub>
- **[longspeed/Jev](https://github.com/longspeed/Jev)** - No description provided.  
  <sub>0 stars · JavaScript · updated 2026-10-03</sub>
- **[markus-tobler/jev-custom-connector](https://github.com/markus-tobler/jev-custom-connector)** - A Power Platform custom connector for TypeSafe's Jev System One model.  
  <sub>0 stars · C# · MIT · updated 2026-10-04</sub>
- **[MayankBansal12/game-theory-with-jev](https://github.com/MayankBansal12/game-theory-with-jev)** - jev plays into the prisoner’s dilemma: 40 matches against 8 opponents  
  <sub>0 stars · TypeScript · updated 2026-09-24</sub>
- **[mcembalest/sys1](https://github.com/mcembalest/sys1)** - System One compatible API for open decision models in Rust (based on alvarobartt/sys1)  
  <sub>0 stars · Rust · updated 2026-09-23</sub>
- **[nishioka-shinji/jev-edgar](https://github.com/nishioka-shinji/jev-edgar)** - Does Jev, a System One model returning calibrated probabilities, say anything useful about an earnings release before the market prices it?  
  <sub>0 stars · Python · updated 2026-09-18</sub>
- **[OuchengLiu/Jev-Game-Theory-Arena](https://github.com/OuchengLiu/Jev-Game-Theory-Arena)** - Play poker, liar's dice, prisoner's dilemma and more against Jev, TypeSafe's System One model. It reads the situation and returns a probability for each legal move: a live mixed strategy. Bilingual EN/中文, runs in the browser. Educational, no real money.  
  <sub>0 stars · JavaScript · updated 2026-10-03</sub>
- **[szafar-7101/reclaim](https://github.com/szafar-7101/reclaim)** - Confidence-gated disk space recovery for macOS developers. Five-agent pipeline using TypeSafe AI's Jev model to decide what's safe to delete — calibrated probability instead of hardcoded path regex.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[TheWebDevel/jev-fanout](https://github.com/TheWebDevel/jev-fanout)** - Does asking Jev more questions in one call change its answers? 250 calls measuring TypeSafe's speculative fan-out pattern and whether Jev is deterministic.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[ztanruan/JevPlane](https://github.com/ztanruan/JevPlane)** - An audited decision control plane for Gemini agents. Use Jev to route models, preflight prompts and tool evaluate agent runs with Google ADC, structured reports, and hash-chained traces.calls, select bounded context, and  
  <sub>0 stars · Python · updated 2026-09-22</sub>

### Everything else

- **[tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction)** - Claude Code plugin that replaces the compaction summary with Jev decisions: every tool call and result is scored in one fast request, stale ones are dropped or truncated, everything kept stays verbatim.  
  <sub>7369 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[Finderchangchang/jev-chat-JARVIS](https://github.com/Finderchangchang/jev-chat-JARVIS)** - 装在手机上的对话副驾：在 QQ / X / 飞书里读懂对方、给出候选回复、一键填入输入框，发不发由你。非侵入，只读屏幕，不 hook 不改包。  
  <sub>7321 stars · Kotlin · MIT · updated 2026-10-03</sub>
- **[Mapika/decider](https://github.com/Mapika/decider)** - A family of System One-style models fine-tuned from Qwen3.5, designed for one-pass typed decisions with calibrated probabilities.  
  <sub>1055 stars · Python · Apache-2.0 · updated 2026-10-02</sub>
- **[nokia-applied-research/AnyJev](https://github.com/nokia-applied-research/AnyJev)** - Turn any LLM into a Jev-style decision model: typed decisions, real probabilities, no training. (continue updating, welcome any issue and PR request)  
  <sub>1030 stars · Python · Apache-2.0 · updated 2026-10-02</sub>
- **[githubnext/localjev](https://github.com/githubnext/localjev)** - No description provided.  
  <sub>813 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[realZachi/pg-jev](https://github.com/realZachi/pg-jev)** - Ask your Postgres tables questions in plain language. A PostgreSQL extension powered by TypeSafe's Jev.  
  <sub>757 stars · Shell · updated 2026-10-03</sub>
- **[jev-chat/jev-chat-windows](https://github.com/jev-chat/jev-chat-windows)** - JevChat-Windows：聊天窗口旁挂的回复辅助。窗口截图 + 本地离线 OCR 读对方消息 → Jev 判断意图 → 3 条候选一键填入，发送永远手动  
  <sub>733 stars · Python · updated 2026-09-28</sub>
- **[superagents-lab/jev-search](https://github.com/superagents-lab/jev-search)** - Search the web with TypeSafe's Jev: source selection, query understanding and relevance ranking. Built with Search1API.  
  <sub>508 stars · TypeScript · MIT · updated 2026-10-02</sub>
- **[kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier)** - Tax document page classifier built on Jev decisions. 100% strict accuracy across 261 IRS forms, ~$0.001 per page.  
  <sub>494 stars · TypeScript · Apache-2.0 · updated 2026-09-29</sub>
- **[moritzkremb/jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser)** - Control a real browser by voice. Jev (TypeSafe System One) decides intent + target in ~300 ms per spoken word; Playwright acts — often before you finish the sentence.  
  <sub>383 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[mohsen1/llm-debugger-vscode-extension](https://github.com/mohsen1/llm-debugger-vscode-extension)** - VSCode extension that demonstrates the use of large language models (LLMs) for active debugging of programs  
  <sub>361 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[FBddcz/embodied-jev](https://github.com/FBddcz/embodied-jev)** - EmbodiedJev: MuJoCo robot decision workbench with MiniCPM5-2B, Jev and compatible model APIs  
  <sub>255 stars · Python · MIT · updated 2026-09-22</sub>
- **[Devin-AXIS/jev-dsh-decision](https://github.com/Devin-AXIS/jev-dsh-decision)** - Jev DSH 决策引擎｜面向 Agent Harness 的结构化决策插件。原生支持 DeepSeek Harness，通过 iPolloWork 支持 OpenCode、Codex Harness。  
  <sub>253 stars · JavaScript · updated 2026-09-20</sub>
- **[RomanSlack/jev-drone](https://github.com/RomanSlack/jev-drone)** - Camera-only autonomous drone in MuJoCo with a small judgment model (TypeSafe Jev) in the loop at 2.5Hz  
  <sub>240 stars · Python · MIT · updated 2026-09-24</sub>
- **[imikerussell/beebots](https://github.com/imikerussell/beebots)** - Three AI trading bees on OKX, every decision by Jev. Paper trading by default. Not financial advice.  
  <sub>232 stars · TypeScript · MIT · updated 2026-10-02</sub>
- **[brainstormity/Jev-X-Sentiment-Analysis](https://github.com/brainstormity/Jev-X-Sentiment-Analysis)** - No description provided.  
  <sub>187 stars · Python · MIT · updated 2026-09-29</sub>
- **[aowang-ai/jev-trade](https://github.com/aowang-ai/jev-trade)** - Live Jev trader on Hyperliquid  
  <sub>184 stars · TypeScript · updated 2026-09-21</sub>
- **[disler/ten-levels-of-jev](https://github.com/disler/ten-levels-of-jev)** - Ten levels of Jev, from one smart if statement to a coding agent that reaches for Jev on its own  
  <sub>172 stars · TypeScript · MIT · updated 2026-09-27</sub>
- **[Liyucheng1997/332_lab-jev-chat](https://github.com/Liyucheng1997/332_lab-jev-chat)** - Jev Chat Assistant for Windows - 电脑版微信意图判断与 DeepSeek 建议回复  
  <sub>165 stars · Kotlin · MIT · updated 2026-09-21</sub>
- **[tamaratran/jev-pruner](https://github.com/tamaratran/jev-pruner)** - Claude Code plugin: trim long Bash output with TypeSafe Jev before the model sees it  
  <sub>159 stars · TypeScript · MIT · updated 2026-09-30</sub>
- **[uehaj/jev-semgrep](https://github.com/uehaj/jev-semgrep)** - grep by meaning, across languages. TypeSafe Jev scores every line against a meaning; combine meanings with AND/OR/NOT. 意味で探す grep。日本語で英語を、英語で日本語を検索できる  
  <sub>144 stars · JavaScript · updated 2026-10-04</sub>
- **[wquguru/dasheng](https://github.com/wquguru/dasheng)** - 大声读 — R2T2 流式 ASR 听，Jev 逐词判，英文朗读评分  
  <sub>143 stars · JavaScript · updated 2026-09-20</sub>
- **[allebee/jevk5](https://github.com/allebee/jevk5)** - JevK5: open-weight alternative to TypeSafe Jev. Typed decisions with probabilities in one forward pass; Apache-2.0 weights and code.  
  <sub>134 stars · Python · Apache-2.0 · updated 2026-09-28</sub>
- **[devagrawal09/stanley-code](https://github.com/devagrawal09/stanley-code)** - Bounded TypeSafe Jev workflows for coding agents.  
  <sub>118 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[trungdq88/youtube-sponsor-detection](https://github.com/trungdq88/youtube-sponsor-detection)** - Detect youtube sponsor segment with live audio and transcript powered by Jev  
  <sub>109 stars · JavaScript · updated 2026-09-18</sub>
- **[luobosibing2/dsh-jev-plugin](https://github.com/luobosibing2/dsh-jev-plugin)** - Native DeepSeek Harness (DSH) plugin integrating TypeSafe Jev as a System One decision layer for agent selection, supervision, corrections, and approvals.  
  <sub>102 stars · JavaScript · MIT · updated 2026-10-03</sub>
- **[VectifyAI/jev-doc-search](https://github.com/VectifyAI/jev-doc-search)** - Long-document search with Jev and PageIndex  
  <sub>92 stars · Python · Apache-2.0 · updated 2026-10-03</sub>
- **[giuliosmall/pg_typesafe](https://github.com/giuliosmall/pg_typesafe)** - Pre-alpha PostgreSQL extension for TypeSafe AI (Jev) categorical classification  
  <sub>87 stars · C · MIT · updated 2026-09-24</sub>
- **[AustinAWay/Working-Memory-Jev](https://github.com/AustinAWay/Working-Memory-Jev)** - No description provided.  
  <sub>76 stars · Python · updated 2026-09-21</sub>
- **[yikangy873-gif/jev-desktop](https://github.com/yikangy873-gif/jev-desktop)** - TypeSafe Jev action selection inside Codex Computer Use  
  <sub>75 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[henryklunaris/hey-jev](https://github.com/henryklunaris/hey-jev)** - No description provided.  
  <sub>68 stars · Python · updated 2026-09-29</sub>
- **[peterfriese/system-one-foundation-models](https://github.com/peterfriese/system-one-foundation-models)** - A lightweight, native Swift 6 bridge integrating TypeSafe AI's Jev System One decision model into Apple's Foundation Models framework.  
  <sub>64 stars · Swift · Apache-2.0 · updated 2026-10-02</sub>
- **[achimala/jev-paint](https://github.com/achimala/jev-paint)** - Use Jev to make art!  
  <sub>63 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[r-ms/mini-jev](https://github.com/r-ms/mini-jev)** - mini-Jev: what a Jev-style typed-decision interface looks like on a frozen Qwen3-4B — read the option letter's logits instead of generating JSON. Preregistered experiment, results, teaching bench.  
  <sub>58 stars · Python · MIT · updated 2026-09-18</sub>
- **[SAGAR-TAMANG/sarvam-jev](https://github.com/SAGAR-TAMANG/sarvam-jev)** - Generation-free typed decisions on Indic LLMs. An open Jev-style inference engine on sarvam-1: constrained logit readout instead of autoregressive JSON. Runs client-side in the browser.  
  <sub>58 stars · Python · updated 2026-09-18</sub>
- **[alanhuangyoo/wev](https://github.com/alanhuangyoo/wev)** - Local System-One decision models: typed questions in, calibrated probabilities out. General decisions and browser-agent steps.  
  <sub>56 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[obie/ruby_decision_model](https://github.com/obie/ruby_decision_model)** - Ruby client for decision models such as Typesafe Jev  
  <sub>52 stars · Ruby · MIT · updated 2026-09-18</sub>
- **[RafalWilinski/vibecheck](https://github.com/RafalWilinski/vibecheck)** - Chrome extension: vibe-check your X posts with TypeSafe's Jev before you hit Post  
  <sub>49 stars · JavaScript · updated 2026-09-20</sub>
- **[soloiaros/archies-appstore-lookup](https://github.com/soloiaros/archies-appstore-lookup)** - Natural language Jev-powered AppStore indexing tool: describe an ambiguous feature of an app, get and research matching apps from the US top-charts. Ideal for solo developers doing market research.  
  <sub>46 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[zadescoxp/Jev-Trades](https://github.com/zadescoxp/Jev-Trades)** - Trading bot with the all new TypeSafe AI's first system one model named as Jev  
  <sub>43 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[ronadin2002/jev-cua](https://github.com/ronadin2002/jev-cua)** - Voice and text control for macOS. One floating bar, live UI action selection with Jev, and a continuous observe–act–verify loop.  
  <sub>38 stars · Swift · updated 2026-09-23</sub>
- **[bytelabs-oss/clash-jev](https://github.com/bytelabs-oss/clash-jev)** - A Clash Royale bot with no trained policy: Jev (TypeSafe System One) makes every decision from the live game state  
  <sub>36 stars · Python · MIT · updated 2026-09-21</sub>
- **[dannote/jev](https://github.com/dannote/jev)** - TypeSafe Jev for OTP: reply to Jev from a GenServer and pattern match on its answer  
  <sub>36 stars · Elixir · MIT · updated 2026-09-26</sub>
- **[safzanpirani/pi-jev-skill-picker](https://github.com/safzanpirani/pi-jev-skill-picker)** - Rank Pi Agent Skills for the current task with TypeSafe Jev  
  <sub>36 stars · TypeScript · MIT · updated 2026-09-26</sub>
- **[charlesdove977/claude-x-jev](https://github.com/charlesdove977/claude-x-jev)** - Fast, cheap, typed decisions for Claude Code. Jev (TypeSafe's decision model on OpenRouter) sorts, checks, scores, gates and verifies at 0.3s and a fraction of a cent per item. Claude keeps the reading, writing and judgment.  
  <sub>35 stars · Python · MIT · updated 2026-09-25</sub>
- **[keeltrace/hermes-jev](https://github.com/keeltrace/hermes-jev)** - Nerve is a supervisory nervous system for Hermes agents, adding typed System One decisions, ranking, verification, token-aware oversight, and an opt-in tool gate powered by TypeSafe Jev or Open Source Laya  
  <sub>34 stars · Python · MIT · updated 2026-10-02</sub>
- **[AlbionaHoti/refgarden](https://github.com/AlbionaHoti/refgarden)** - A spatial reference explorer for creators. Local Jev query choices, metadata highlights and source-linked collections.  
  <sub>33 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Nisaka520/JevGuide](https://github.com/Nisaka520/JevGuide)** - 弦外之音 —— 微信聊天里的关系进展助手：读屏（无障碍树 / 截屏视觉）→ Jev 判读 + 攻略度 → 聊天模型出 3 条候选回复，攻略度常驻挂在屏幕上。不改微信、不发消息、不注入点击。  
  <sub>31 stars · Kotlin · MIT · updated 2026-09-24</sub>
- **[brianhong-dev/omo-jev-plugin](https://github.com/brianhong-dev/omo-jev-plugin)** - Jev-powered decision support for OmO and senpi agents  
  <sub>24 stars · TypeScript · MIT · updated 2026-09-29</sub>
- **[pengchujin/ad-radar](https://github.com/pengchujin/ad-radar)** - 开源浏览器插件：在小红书、微博、X、知乎上按关键词和博主折叠内容；用你自己的 Jev API key 识别广告、AI、军事、政治等话题。  
  <sub>24 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[wuxie888/jev-yaba-wechat](https://github.com/wuxie888/jev-yaba-wechat)** - 微信里的话不知道怎么接？macOS 悬浮聊天助手：识别消息意图与沟通风险，GPT 生成多种话术，Jev 评估候选，一键填入微信。话我帮你想，发送你来定。  
  <sub>24 stars · Python · MIT · updated 2026-09-22</sub>
- **[goodrahstar/jev-column-race](https://github.com/goodrahstar/jev-column-race)** - Jev vs Gemini 3.8 Flash: labelling 1,000 app reviews, 4.1× faster and 7× cheaper  
  <sub>23 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[ehui1226/hookmeter-jev](https://github.com/ehui1226/hookmeter-jev)** - ⚡ Millisecond-level Viral Hook Telemetry & Co-pilot for Social Media (Chrome Extension + JEV System 1)  
  <sub>22 stars · HTML · MIT · updated 2026-09-21</sub>
- **[emnlmn/snap](https://github.com/emnlmn/snap)** - Typed decisions from unstructured state: one forward pass, zero generated text. Local, deterministic, Jev-compatible. Not affiliated with typesafe.ai.  
  <sub>22 stars · Rust · MIT · updated 2026-10-02</sub>
- **[ilyamk/jev-gmail-ai-spam-filter-and-labeling](https://github.com/ilyamk/jev-gmail-ai-spam-filter-and-labeling)** - JevMail - Self-hosted AI email classifier for Gmail powered by Jev. Create custom labels, organize your inbox, and filter spam with confidence and cost controls.  
  <sub>22 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[oso95/x-scanner](https://github.com/oso95/x-scanner)** - Chrome extension that labels every post you scroll past on X with typed Jev judgments and a live cost counter  
  <sub>22 stars · TypeScript · MIT · updated 2026-09-27</sub>
- **[stas4000/jev-linkmap](https://github.com/stas4000/jev-linkmap)** - Rebuild a site's internal link map in seconds with Jev, race Claude Opus 5 on the same queue, and let a deep model rewrite the rubric from the disagreements.  
  <sub>22 stars · HTML · updated 2026-09-19</sub>
- **[vinilana/live-jev](https://github.com/vinilana/live-jev)** - 2D autonomous car simulation in the browser, driven by TypeSafe's Jev decision model  
  <sub>21 stars · JavaScript · updated 2026-09-18</sub>
- **[9pings/notjev](https://github.com/9pings/notjev)** - Super fast Jev like server, model agnostic, working with any OpenAI compatible endpoint  
  <sub>20 stars · JavaScript · Apache-2.0 · updated 2026-09-30</sub>
- **[runta-dev/jot](https://github.com/runta-dev/jot)** - The first general-purpose System One agent for Jev  
  <sub>20 stars · TypeScript · updated 2026-09-18</sub>
- **[anpicasso/hermes-jev-approvals](https://github.com/anpicasso/hermes-jev-approvals)** - TypeSafe Jev as the reviewer for Hermes Agent smart command approvals. 8.7x faster, 4.4x fewer prompts, measured on 153 real commands. Approvals only.  
  <sub>19 stars · Python · MIT · updated 2026-09-22</sub>
- **[Qew7/jev-feels](https://github.com/Qew7/jev-feels)** - Semantic decisions as ordinary Ruby #feels?, #decide, #score, Rails validations and pattern matching powered by Jev  
  <sub>19 stars · Ruby · MIT · updated 2026-09-22</sub>
- **[kieranklaassen/ruby_llm-typesafe](https://github.com/kieranklaassen/ruby_llm-typesafe)** - TypeSafe structured-output provider for RubyLLM 2  
  <sub>18 stars · Ruby · MIT · updated 2026-09-29</sub>
- **[yushen100/wechat-jev-assistant](https://github.com/yushen100/wechat-jev-assistant)** - Windows 微信对话分析助手：本地读取、脱敏、TypeSafe Jev 判断与加密历史  
  <sub>18 stars · Python · updated 2026-09-22</sub>
- **[yinhong-zhou/jevdo](https://github.com/yinhong-zhou/jevdo)** - Just Jev it. A Jev-first agent loop with reusable actions for DeepSeek Harness.  
  <sub>17 stars · TypeScript · MIT · updated 2026-10-03</sub>
- **[cocktailpeanut/jevthoven](https://github.com/cocktailpeanut/jevthoven)** - AI Music (MIDI) generator powered by Jev  
  <sub>16 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[mattt/AnyDecisionModel](https://github.com/mattt/AnyDecisionModel)** - A Swift package for typed decisions from language models (probabilities, choices, and scores), with support for local MLX models and the TypeSafe Jev API.  
  <sub>14 stars · Swift · Apache-2.0 · updated 2026-10-02</sub>
- **[joelhooks/pi-fast-jev-compaction](https://github.com/joelhooks/pi-fast-jev-compaction)** - Pi extension: verbatim context compaction with TypeSafe Jev decisions  
  <sub>13 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[jon-devlapaz/jev-me](https://github.com/jon-devlapaz/jev-me)** - Grill-me with Jev optional each turn  
  <sub>13 stars · MIT · updated 2026-09-19</sub>
- **[bohutang/sift](https://github.com/bohutang/sift)** - Chrome extension that labels every post on X (Substance · Humor · Chit-chat · Promo · Junk · AI-written) with TypeSafe Jev, and hides the ones you don't want.  
  <sub>12 stars · JavaScript · MIT · updated 2026-09-26</sub>
- **[emirbartu/jev-for-all](https://github.com/emirbartu/jev-for-all)** - Jev for every agentic development workflow — the System One decision model wired into whatever harness an agent codes in: OpenCode today, Claude Code and Hermes adapters next.  
  <sub>12 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[emirbartu/opencode-system-one](https://github.com/emirbartu/opencode-system-one)** - Jev for every agentic development workflow — the System One decision model wired into whatever harness an agent codes in: OpenCode today, Claude Code and Hermes adapters next.  
  <sub>12 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[hybridgroup/jeyzma](https://github.com/hybridgroup/jeyzma)** - Jev in your browser written in Go using yzma and compiled to WebAssembly with TinyGo. Supports WebGPU.  
  <sub>12 stars · HTML · updated 2026-09-27</sub>
- **[HyunjunJeon/pi-quiet-ask](https://github.com/HyunjunJeon/pi-quiet-ask)** - TypeSafe Jev as the pi coding agent's quiet decision layer  
  <sub>12 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[markusbug/jevymarket](https://github.com/markusbug/jevymarket)** - Polymarket trading bot driven by Jev (TypeSafe AI) via OpenRouter  
  <sub>12 stars · Python · MIT · updated 2026-09-20</sub>
- **[pambrose/jev4k](https://github.com/pambrose/jev4k)** - A Kotlin Multiplatform DSL and client for TypeSafe's Jev model  
  <sub>12 stars · Kotlin · Apache-2.0 · updated 2026-09-28</sub>
- **[aaazzam/jev](https://github.com/aaazzam/jev)** - No description provided.  
  <sub>11 stars · Python · updated 2026-09-18</sub>
- **[manifoldor/xtags](https://github.com/manifoldor/xtags)** - 在 X 的时间线上，给每条帖子标出它想让你干什么。判断来自 Jev，一个只返回概率、不生成文本的模型。  
  <sub>11 stars · JavaScript · MIT · updated 2026-09-27</sub>
- **[TarunTomar122/jev-askable-arm](https://github.com/TarunTomar122/jev-askable-arm)** - Zero-shot English goals on a sim Franka. Jev chains hardcoded primitives.  
  <sub>11 stars · Python · MIT · updated 2026-09-17</sub>
- **[yibie/laya-jev-lab](https://github.com/yibie/laya-jev-lab)** - Independent measurements of typed-decision models: Jev (TypeSafe API) vs Laya (open weights), and a local-first cascade that matches Jev's accuracy at 1.8x the speed  
  <sub>11 stars · Python · MIT · updated 2026-09-20</sub>
- **[Aimark-dai/jev-chat-windows-deepseek-jev](https://github.com/Aimark-dai/jev-chat-windows-deepseek-jev)** - DeepSeek + TypeSafe JEV 微信回复助手：Windows 正式版、Apple Silicon macOS 预览版；本地 OCR 与人工可控回复  
  <sub>10 stars · Python · updated 2026-09-23</sub>
- **[gtaras7/typesafe-jev](https://github.com/gtaras7/typesafe-jev)** - Screen a folder of CVs with the TypeSafe Jev decision model: typed judgments, an editable policy, free re-scoring.  
  <sub>10 stars · TypeScript · MIT · updated 2026-10-02</sub>
- **[nozomi-koborinai/jev-spec](https://github.com/nozomi-koborinai/jev-spec)** - ⚡ Catch spec drift on every commit: check your code against your Markdown specs with TypeSafe AI's Jev model.  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-29</sub>
- **[Ryu0118/jev-sim-use](https://github.com/Ryu0118/jev-sim-use)** - 📱 Reach any screen with sim-use at Jev speed  
  <sub>10 stars · Swift · MIT · updated 2026-09-30</sub>
- **[TheAdaply/jev-apply](https://github.com/TheAdaply/jev-apply)** - Fill job applications from your saved answers, without inventing personal details.  
  <sub>10 stars · JavaScript · MIT · updated 2026-09-28</sub>
- **[yohanargentina-oss/Foq](https://github.com/yohanargentina-oss/Foq)** - ⚡ Foq — the FREE, local, open-source alternative to Jev. Typed System 1 decisions in ~25 ms — no waitlist, no cloud, no per-token cost. foq.fr  
  <sub>10 stars · Python · MIT · updated 2026-09-20</sub>
- **[chl-5g/QuantLLM](https://github.com/chl-5g/QuantLLM)** - QuantLLM — A股量化多 Agent 交易系统  
  <sub>9 stars · Python · updated 2026-09-21</sub>
- **[composio-community/jev-orchestrator](https://github.com/composio-community/jev-orchestrator)** - No description provided.  
  <sub>9 stars · JavaScript · updated 2026-09-23</sub>
- **[dannote/jev_nx](https://github.com/dannote/jev_nx)** - Open decision models as a Jev backend, running in-process on Nx  
  <sub>9 stars · Elixir · Apache-2.0 · updated 2026-09-23</sub>
- **[darwintechlab/openjev](https://github.com/darwintechlab/openjev)** - OpenJev: An Opencode plugin that replaces text-generation decisions with Jev (TypeSafe System One).  
  <sub>9 stars · JavaScript · MIT · updated 2026-09-25</sub>
- **[kingdsa/AI-Relationship-Copilot](https://github.com/kingdsa/AI-Relationship-Copilot)** - No description provided.  
  <sub>9 stars · TypeScript · updated 2026-09-21</sub>
- **[lexmount/jev-browser-bridge](https://github.com/lexmount/jev-browser-bridge)** - Plug any CDP browser into Jev — cloud, local or self-hosted, including browsers that never draw a page.  
  <sub>9 stars · Python · Apache-2.0 · updated 2026-09-29</sub>
- **[metalbear-co/jev-auto-approve](https://github.com/metalbear-co/jev-auto-approve)** - Jev PR auto approver  
  <sub>9 stars · JavaScript · MIT · updated 2026-09-27</sub>
- **[Noe1120/jev-advisor](https://github.com/Noe1120/jev-advisor)** - A private, local decision-advice Skill for Codex that ranks tool choices, estimates risks, guides recovery, and checks completion evidence.  
  <sub>9 stars · Python · MIT · updated 2026-09-24</sub>
- **[poiuyjie/jev_project_context](https://github.com/poiuyjie/jev_project_context)** - Evidence-first long-term experiment memory skill for AI coding agents, with optional Jev decision-model layers  
  <sub>9 stars · Python · MIT · updated 2026-09-22</sub>
- **[qs-lll/twitter-jev-guard](https://github.com/qs-lll/twitter-jev-guard)** - 使用 TypeSafe Jev 在 X/Twitter 时间线上识别低质量、垃圾和广告帖子，并在文字区域显示醒目的半透明水印。  
  <sub>9 stars · JavaScript · updated 2026-09-21</sub>
- **[ajensenwaud/hermes-jev-plugin](https://github.com/ajensenwaud/hermes-jev-plugin)** - TypeSafe Jev (System One) decision tools for Hermes Agent: jev_check / jev_route / jev_score / jev_evaluate  
  <sub>8 stars · Python · MIT · updated 2026-09-19</sub>
- **[benjamincanac/tia](https://github.com/benjamincanac/tia)** - Triage Issue Agent for GitHub, built with Eve and Jev.  
  <sub>8 stars · TypeScript · updated 2026-10-04</sub>
- **[harshil1712/slidepilot](https://github.com/harshil1712/slidepilot)** - Voice-driven semantic auto-advance for Slidev, powered by Cloudflare Agents and TypeSafe AI Jev  
  <sub>8 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[jomatsu/zod-jev](https://github.com/jomatsu/zod-jev)** - No description provided.  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[littlewindy123/jev-weekend-shopping-chrome](https://github.com/littlewindy123/jev-weekend-shopping-chrome)** - 把对双休的支持，带进每一次购物。逛淘宝、京东时，JEV 实时猜测商品背后的工作制，疑似非双休直接盖上 PASS。原页生效，边逛边选。  
  <sub>8 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[QCJLchina/Jev-chat-assistant](https://github.com/QCJLchina/Jev-chat-assistant)** - Jev辅助判断的对话聊天助手  
  <sub>8 stars · Python · MIT · updated 2026-10-03</sub>
- **[robertogallea/laravel-judgment](https://github.com/robertogallea/laravel-judgment)** - Judgment as a first-class Laravel primitive: probabilistic assessments with deterministic decisions, powered by Jev.  
  <sub>8 stars · PHP · updated 2026-09-26</sub>
- **[YiLight0/paperfocus](https://github.com/YiLight0/paperfocus)** - Question-guided evidence highlighting for research papers, powered by Jev.  
  <sub>8 stars · JavaScript · updated 2026-09-21</sub>
- **[christian-taillon/opencode-jev-compactor](https://github.com/christian-taillon/opencode-jev-compactor)** - Jev powered OpenCode compaction  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-30</sub>
- **[cooper667/jev-browse](https://github.com/cooper667/jev-browse)** - Plain-English browser QA for Claude Code, judged by TypeSafe's Jev on Cloudflare Workers AI  
  <sub>7 stars · TypeScript · MIT · updated 2026-10-03</sub>
- **[cooper667/jev-playwright](https://github.com/cooper667/jev-playwright)** - Plain-English browser QA for Claude Code, judged by TypeSafe's Jev on Cloudflare Workers AI  
  <sub>7 stars · TypeScript · MIT · updated 2026-10-03</sub>
- **[enoyola/jev-grand-prix](https://github.com/enoyola/jev-grand-prix)** - An F1 racing game where TypeSafe's Jev picks the racing line and the pedals, and learns each corner's limit between laps  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[epergaboni/jevseo](https://github.com/epergaboni/jevseo)** - Typed SEO, AEO and GEO judgments powered by Jev, a System One decision model. Code owns the rules, the model owns the meaning.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[hotdata-dev/datafusion-jev](https://github.com/hotdata-dev/datafusion-jev)** - Typed Jev decisions in DataFusion SQL  
  <sub>7 stars · Rust · updated 2026-09-24</sub>
- **[judoaseeta/duckdb-jev](https://github.com/judoaseeta/duckdb-jev)** - Ask your DuckDB tables questions in plain language. A DuckDB port of pg-jev, powered by TypeSafe's Jev.  
  <sub>7 stars · C++ · MIT · updated 2026-09-21</sub>
- **[justhalfbit/dsh-plugin-jev-effort-selector](https://github.com/justhalfbit/dsh-plugin-jev-effort-selector)** - DeepSeek Harness (DSH) 推理等级自动选择插件：由 Jev System One 模型判断每条消息值多少思考量，按模型声明的等级自动推导档位，上下文信封让「继续」这类追问继承话题深度，低置信度向上取，任何失败都静默沿用原等级。 | Jev-driven reasoning effort per message: per-model ladders derived from what each model advertises, a fixed-size context envelope so follow-ups inherit topic depth, ties break upward, silent fallback on every failure path.  
  <sub>7 stars · JavaScript · MIT · updated 2026-10-01</sub>
- **[Kiln-AI/jev_jsonschema](https://github.com/Kiln-AI/jev_jsonschema)** - Run a JSON Schema through TypeSafe's Jev API, and get JSON back.  
  <sub>7 stars · Python · MIT · updated 2026-10-01</sub>
- **[scale-venture-partners/riff](https://github.com/scale-venture-partners/riff)** - A small, fast prose linter: ruff-style rule codes for writing, backed by TypeSafe's Jev model  
  <sub>7 stars · Python · MIT · updated 2026-10-02</sub>
- **[arthurfiorette/jev-playwright](https://github.com/arthurfiorette/jev-playwright)** - Jev-powered Playwright test selection  
  <sub>6 stars · TypeScript · MIT · updated 2026-10-01</sub>
- **[Astro-Han/decision-head-rlcd](https://github.com/Astro-Han/decision-head-rlcd)** - Where does a decision model's generalisation come from? RLCD on Qwen3.5-4B, held-out sets grouped by training-data coverage, JevBench and three external suites.  
  <sub>6 stars · Python · updated 2026-09-20</sub>
- **[eran-broder/jev-skills](https://github.com/eran-broder/jev-skills)** - Skills without the context tax. Claude Code and Codex plugin: TypeSafe's Jev decides on every turn which skills the model sees. Always-on context cost: 0 tokens.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[HyunjunJeon/jev-context](https://github.com/HyunjunJeon/jev-context)** - Jev로 컨텍스트를 가볍게 유지해 압축을 늦추고, 압축 때 필요한 원문을 지킨다  
  <sub>6 stars · JavaScript · updated 2026-09-29</sub>
- **[illumi-ai/sentimento-em-tempo-real](https://github.com/illumi-ai/sentimento-em-tempo-real)** - Emoção da fala em tempo real: transcrição ao vivo com Gemini 3.5 Transcribe Live e seis emoções avaliadas pelo Jev (TypeSafe) a cada 0,5 s. Projeto aberto da illumi.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[khmuhtadin/n8n-nodes-jev-classification](https://github.com/khmuhtadin/n8n-nodes-jev-classification)** - n8n community node for Jev by TypeSafe AI: classify, score and check text with calibrated probabilities. Parallel requests and multi-item batching.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-26</sub>
- **[LamplighterPaul/jev-piano](https://github.com/LamplighterPaul/jev-piano)** - Jev cannot generate a single note. Given a piano and the right questions, it improvises anyway.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-29</sub>
- **[lbotinelly/jev-little-airways](https://github.com/lbotinelly/jev-little-airways)** - A show-and-tell capability study for Jev, TypeSafe's System One decision model.  
  <sub>6 stars · HTML · MIT · updated 2026-09-17</sub>
- **[milanboers/jev-plays-pokemon](https://github.com/milanboers/jev-plays-pokemon)** - Playing Pokemon Red using TypeSafe Jev  
  <sub>6 stars · Python · updated 2026-09-18</sub>
- **[paulsmith/computer-use-jev](https://github.com/paulsmith/computer-use-jev)** - macOS computer use driven by Jev (TypeSafe System One) as the decision maker  
  <sub>6 stars · Go · MIT · updated 2026-09-17</sub>
- **[qbeka/jev-job-search](https://github.com/qbeka/jev-job-search)** - Find software internships and new-grad jobs, fill the application forms, check every answer on the page, and send the ones you approve. JEV decides, code acts, Claude writes. Runs on your machine with Claude Code.  
  <sub>6 stars · TypeScript · MIT · updated 2026-10-04</sub>
- **[rthomas24/jev-realtime-trading](https://github.com/rthomas24/jev-realtime-trading)** - Desktop app for paper-trading stocks and crypto on live prices, with TypeSafe's Jev making the calls and your stops, targets and limits enforced in code. Windows and macOS; never touches real money.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-27</sub>
- **[Yaxin9Luo/spending-effort-with-jev](https://github.com/Yaxin9Luo/spending-effort-with-jev)** - Jev-powered /effort advisor for Claude Code: tells you when to switch effort, per prompt  
  <sub>6 stars · Python · MIT · updated 2026-10-04</sub>
- **[duckegg0623-create/jev-wechat-live](https://github.com/duckegg0623-create/jev-wechat-live)** - 用 TypeSafe Jev 实时解读微信消息的桌面浮层 —— 未完成的实验项目，判定准确率不达标，附完整踩坑记录  
  <sub>5 stars · Python · MIT · updated 2026-09-21</sub>
- **[Gaurav-Gosain/jev-go](https://github.com/Gaurav-Gosain/jev-go)** - Go client for TypeSafe's System One API and its model Jev: typed judgments and calibrated probabilities instead of generated text  
  <sub>5 stars · Go · MIT · updated 2026-09-16</sub>
- **[jamesward/zio-typesafe-ai](https://github.com/jamesward/zio-typesafe-ai)** - No description provided.  
  <sub>5 stars · Scala · Apache-2.0 · updated 2026-10-02</sub>
- **[jiangkoumo/ego-decision-layer](https://github.com/jiangkoumo/ego-decision-layer)** - Pluggable decision layer for the ego lite browser: one System One (Jev) call per step replaces the per-step LLM turn, and the backend can be swapped for a local OpenAI-compatible model. Fail-closed execution guards. The measured one — raw bench data, 16 suites, changelog with corrections.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-27</sub>
- **[mgarlabx/Jev-Enem](https://github.com/mgarlabx/Jev-Enem)** - No description provided.  
  <sub>5 stars · Jupyter Notebook · updated 2026-09-20</sub>
- **[NodarDavituri/fast-compact](https://github.com/NodarDavituri/fast-compact)** - /fc for Claude Code: shrink old tool output in about a second — Jev keeps what's still needed, every cut saved to a file. Your /compact stays untouched.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-26</sub>
- **[NomenAK/jev-tools](https://github.com/NomenAK/jev-tools)** - Six evidence-oriented tools for pi and omp coding agents, compatible with the Jev API format.  
  <sub>5 stars · TypeScript · MIT · updated 2026-10-03</sub>
- **[oldmoldycake/jev_vampire_survivors](https://github.com/oldmoldycake/jev_vampire_survivors)** - TypeSafe's Jev model plays Vampire Survivors on Steam: BepInEx plugin + Python brain + live decision dashboard. Native Linux only.  
  <sub>5 stars · Python · MIT · updated 2026-09-29</sub>
- **[org2AI/wald-4b](https://github.com/org2AI/wald-4b)** - Wald-Q4B: open-weight 4B decision model. Calibrated probability for every option, Jev-compatible /v1/systemone API, self-hosted. Weights on Hugging Face.  
  <sub>5 stars · Python · Apache-2.0 · updated 2026-10-01</sub>
- **[ra2web/jev-helper](https://github.com/ra2web/jev-helper)** - A helper which use JEV to play ra2web(WannaFire Version)[王二火大]  
  <sub>5 stars · JavaScript · updated 2026-09-27</sub>
- **[sametcn99/my-stars-atlas](https://github.com/sametcn99/my-stars-atlas)** - A generated catalog of starred GitHub repositories, grouped into stable categories.  
  <sub>5 stars · TypeScript · updated 2026-09-19</sub>
- **[soderlind/ai-provider-for-jev](https://github.com/soderlind/ai-provider-for-jev)** - Connect WordPress to TypeSafe's Jev System One model for structured decisions (choice, score, noul).  
  <sub>5 stars · PHP · updated 2026-09-18</sub>
- **[ziyacivan/jev-mail-filter](https://github.com/ziyacivan/jev-mail-filter)** - Gmail filters written in plain English, judged by Jev (TypeSafe)  
  <sub>5 stars · JavaScript · updated 2026-09-27</sub>
- **[1jehuang/jev-pr-labeler](https://github.com/1jehuang/jev-pr-labeler)** - Semantic GitHub PR labels using Jev's typed decisions, with conceptual scope instead of line counts  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[adhyaay-karnwal/jev-chat](https://github.com/adhyaay-karnwal/jev-chat)** - A chatbot from typed Jev decisions: hierarchical speculative decoding over System One probabilities.  
  <sub>4 stars · Python · MIT · updated 2026-09-17</sub>
- **[alpha-tales/alphaoptimizer](https://github.com/alpha-tales/alphaoptimizer)** - Jev-powered output optimization for Codex, built to keep large tool results concise and usable.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[amanadhav/traderai](https://github.com/amanadhav/traderai)** - Self-hosted AI trading intelligence platform - scoring engine, two-model AI analyst (Claude + TypeSafe Jev), risk engine, discipline guardian, backtester, React dashboard  
  <sub>4 stars · Python · MIT · updated 2026-09-21</sub>
- **[chengyongru/notiq](https://github.com/chengyongru/notiq)** - Native Android notification filtering with natural-language rules, powered by Jev or self-hosted FastJev.  
  <sub>4 stars · Kotlin · updated 2026-09-23</sub>
- **[deep-diver/mini-jev](https://github.com/deep-diver/mini-jev)** - No description provided.  
  <sub>4 stars · Python · updated 2026-09-18</sub>
- **[DragosTana/JEV-FC](https://github.com/DragosTana/JEV-FC)** - No description provided.  
  <sub>4 stars · Python · updated 2026-09-20</sub>
- **[etweisberg/jev-ui](https://github.com/etweisberg/jev-ui)** - React components that resolve which component to render, how to order a list, and whether to show an affordance — from calibrated judgments returned by TypeSafe's Jev.  
  <sub>4 stars · TypeScript · updated 2026-09-21</sub>
- **[hoshinodis/opencode-context-pruner](https://github.com/hoshinodis/opencode-context-pruner)** - Continuous verbatim context pruning for OpenCode, powered by TypeSafe Jev. Port of fast-jev-compaction adapted to OpenCode's context hook.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[jorgefspereira/opencode-auto-jev](https://github.com/jorgefspereira/opencode-auto-jev)** - OpenCode plugin that adds an Auto (Jev) virtual model which routes each prompt to a configured real model using TypeSafe AI (Jev).  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-26</sub>

<sub>406 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Other lists and directories

- **[AnotiaWang/awesome-decision-models](https://github.com/AnotiaWang/awesome-decision-models)** - A curated list of decision models (System One / typed decision models): hosted APIs, open-weight models, runtimes, SDKs, applications, benchmarks, and papers.  
  <sub>606 stars · Python · CC0-1.0 · updated 2026-10-02</sub>
- **[arish096/awesome-jev-use-cases](https://github.com/arish096/awesome-jev-use-cases)** - "A curated collection of public projects, demos, and practical examples built around Jev, TypeSafe AI's model for typed decisions."  
  <sub>2 stars · CC0-1.0 · updated 2026-10-02</sub>
- **[awesome-huohaha/jev-mail-feishu](https://github.com/awesome-huohaha/jev-mail-feishu)** - 基于 Jev 的智能邮件提醒工具：自动读取 QQ 邮件、判断重要程度、提取重点原文，写入飞书多维表格并私信提醒，附完整配置教程。  
  <sub>0 stars · Python · updated 2026-09-23</sub>
- **[Awesome-llms-labs/awesome-jev](https://github.com/Awesome-llms-labs/awesome-jev)** - Awesome list for Jev — TypeSafe AI's decision-only System One model: typed decisions (Choice, Score, Noul) with calibrated probabilities. Guides, recipes, runnable examples, honest benchmarks, community projects.  
  <sub>0 stars · MIT · updated 2026-09-30</sub>
- **[hdjekuue/awesome-jev](https://github.com/hdjekuue/awesome-jev)** - The self-updating, trilingual directory of everything built on Jev (TypeSafe AI System One) — typed decisions, calibrated probabilities. AI-curated on free models.  
  <sub>0 stars · JavaScript · CC0-1.0 · updated 2026-10-04</sub>

---

<sub>3293 entries · 0 of them in none of the 14 other Jev directories checked on 2026-10-04 · last updated 2026-10-04 · 476 candidates in the [review queue](data/review-queue.md) · generated by [`tools/fetch.js`](tools/fetch.js)</sub>

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

Curation is done by Jev itself - the model this list catalogues - on every entry rather than
only the borderline ones. Each repository is sent as state with one typed question - does this repository's own code call, wrap, benchmark or reimplement Jev, or
does it merely mention it - and the returned probability decides: at or above 0.75 it
joins the list, at or below 0.45 it is rejected, and anything between stays in the queue
for a human. The verdicts are kept in `data/triage.json`, and the site prints each one as a "Jev match"
figure on the entry.

That figure is a **membership check, not a quality rating**. A widely used SDK and a weekend
experiment both score around 0.95, because both plainly call the API; a lower number means
the evidence was thinner, not that the project is worse.

Triage reads its key from `AI_GATEWAY_API_KEY`, for Vercel's AI Gateway, or `TYPESAFE_API_KEY`
for the API directly, taken from the environment or from `.env.local`. The gateway serves
Jev at `https://ai-gateway.vercel.sh/typesafe/v1/systemone` using TypeSafe's own request
shapes, and refuses every request until the Vercel team has a card on file, so a run with a
gateway key falls back to the direct API rather than stopping.

Run it locally:

```bash
GITHUB_TOKEN=$(gh auth token) node tools/fetch.js     # discover and score
node tools/triage.js                                  # let Jev judge the new candidates
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
| `data/coverage.json` | Which rival directories were checked, what each returned, and when |
| `site/` | The directory site, rebuilt from the registry on every run |
| `brand/` | Logo renders: PNG sizes for uploads that reject SVG |
| `site/og.png` | The link preview card, referenced by the Open Graph tags |
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

[CC0 1.0](LICENSE) - the list itself is public domain. Linked projects keep their own licenses.
