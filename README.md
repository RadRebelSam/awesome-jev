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

- **[Finderchangchang/jev-chat-JARVIS](https://github.com/Finderchangchang/jev-chat-JARVIS)** - +6405 stars in 7 days
- **[tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction)** - +2261 stars in 7 days
- **[typesafe-ai/skills](https://github.com/typesafe-ai/skills)** - +1286 stars in 7 days
- **[TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev)** - +1079 stars in 7 days
- **[bespokelabsai/nimble](https://github.com/bespokelabsai/nimble)** - +1048 stars in 7 days

### Official

- **[TypeSafe AI - Introducing System One Models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)** - The launch post from TypeSafe AI: what a System One model is, and what Jev returns instead of text.
- **[typesafe-ai/skills](https://github.com/typesafe-ai/skills)** - Agent skills for building with TypeSafe's System One API  
  <sub>2117 stars · MIT · updated 2026-09-12</sub>
- **[typesafe-ai/typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js)** - The official TypeScript/JavaScript library for the TypeSafe API  
  <sub>235 stars · TypeScript · MIT · updated 2026-09-15</sub>
- **[typesafe-ai/typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python)** - The official Python library for the TypeSafe API  
  <sub>224 stars · Python · MIT · updated 2026-09-21</sub>

### SDKs and clients

- **[razorback16/openjev](https://github.com/razorback16/openjev)** - Open, Jev-compatible System One decision server on DiffusionGemma  
  <sub>411 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[logan-markewich/jeff](https://github.com/logan-markewich/jeff)** - A self-hosted drop-in replacement for TypeSafe's jev, powered by GliFormer.  
  <sub>245 stars · Python · MIT · updated 2026-09-20</sub>
- **[vinilana/jev-gateway](https://github.com/vinilana/jev-gateway)** - An easy way to use jev with your coding agent for tool calling reasoning  
  <sub>220 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[FerryCorleone/crush-monitor](https://github.com/FerryCorleone/crush-monitor)** - Crush 好感监控器：用 Jev 分析微信聊天的情绪、意图和回复表现。本机部署，使用自己的 API Key。  
  <sub>219 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[jexp/neo4jev](https://github.com/jexp/neo4jev)** - Typesafe.ai System One Model Jev navigating a Neo4j graph by using a classifier over neighbouring relationships  
  <sub>134 stars · Jupyter Notebook · MIT · updated 2026-09-18</sub>
- **[arimanyus/warrenduffer](https://github.com/arimanyus/warrenduffer)** - AI-driven intraday trading bot for Indian stocks. Jev ranks the Nifty 50 every 15s; code sizes each trade and places the stop; orders go live through Zerodha Kite or Kotak Neo. Day replay, kill switch, daily loss halt, terminal dashboard.  
  <sub>92 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[f/jev-leftpad](https://github.com/f/jev-leftpad)** - Left-pad strings with TypeSafe AI's Jev. For reasons.  
  <sub>85 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[Bodila51/grok-bot-jev](https://github.com/Bodila51/grok-bot-jev)** - Connect TypeSafe Jev to Grok Bot as a cheap decision layer - usage gates, skill template, examples  
  <sub>81 stars · Python · MIT · updated 2026-09-20</sub>
- **[fazlerocks/jevmail](https://github.com/fazlerocks/jevmail)** - Open-source AI email triage for Gmail. Sorts your inbox into Needs reply, Updates, Promos, Sales and Spam with Jev, TypeSafe AI's decision model, via Vercel AI Gateway. Read-only, runs locally, 1,000 emails in about a minute for 3 cents.  
  <sub>76 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[AboveColin/HA-Jev](https://github.com/AboveColin/HA-Jev)** - Ask your house a question, get a number back. Home Assistant integration for TypeSafe Jev: typed answers as sensors, four actions for automations, and a conversation agent for Assist.  
  <sub>63 stars · Python · MIT · updated 2026-09-25</sub>
- **[alvarobartt/sys1](https://github.com/alvarobartt/sys1)** - System One compatible API for open decision models, written in Rust.  
  <sub>43 stars · Rust · updated 2026-09-25</sub>
- **[hunkim/solar-mini4-jev](https://github.com/hunkim/solar-mini4-jev)** - No description provided.  
  <sub>43 stars · Python · updated 2026-09-24</sub>
- **[Chuf-H/jev-tree](https://github.com/Chuf-H/jev-tree)** - Jev-native probability tree and graph runtime for verifiable multi-step decision making.  
  <sub>42 stars · Python · Apache-2.0 · updated 2026-09-23</sub>
- **[spring-ai-community/spring-ai-typesafe](https://github.com/spring-ai-community/spring-ai-typesafe)** - A Java SDK for the TypeSafe AI JEV API, & Spring AI TypeSafe integrations.  
  <sub>37 stars · Java · Apache-2.0 · updated 2026-09-24</sub>
- **[TypeLLM/pijev](https://github.com/TypeLLM/pijev)** - Permutation Invariant Jev  
  <sub>34 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[bladedevoff/stuntd](https://github.com/bladedevoff/stuntd)** - Local proxy that learns your app's typed LLM decisions and answers them with a Laya head. Jev and OpenAI compatible.  
  <sub>27 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[bhaiG-de/jev-design-test](https://github.com/bhaiG-de/jev-design-test)** - Jev shadcn-block generator  
  <sub>26 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[mattn/go-jev](https://github.com/mattn/go-jev)** - Go SDK and CLI for TypeSafe Jev: typed decisions (yes/no, choice, score) from a model  
  <sub>25 stars · Go · MIT · updated 2026-09-23</sub>
- **[buberlo/dsh-jev](https://github.com/buberlo/dsh-jev)** - Jev-powered decision layer for DeepSeek Harness  
  <sub>23 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[sorrycc/typesafe-snake](https://github.com/sorrycc/typesafe-snake)** - Snake auto-played by TypeSafe's Jev model: one System One choice per tick, legal moves and facts generated in code  
  <sub>23 stars · TypeScript · updated 2026-09-17</sub>
- **[chengyongru/fastjev](https://github.com/chengyongru/fastjev)** - SDK-first, independently maintained SemIf fork for fast, self-hosted semantic decisions.  
  <sub>21 stars · Python · MIT · updated 2026-09-24</sub>
- **[Ray-Hughes/jevalyn](https://github.com/Ray-Hughes/jevalyn)** - The decision layer for your Rails app. A Rails-native wrapper around TypeSafe's Jev System One API: typed, calibrated decisions in your control flow.  
  <sub>20 stars · Ruby · MIT · updated 2026-09-21</sub>
- **[rhighs/jev-code](https://github.com/rhighs/jev-code)** - Interactive TypeScript coding CLI powered by Jev typed decisions and constrained AST generation.  
  <sub>20 stars · TypeScript · updated 2026-09-20</sub>
- **[Bodila51/muse-jev-playbook](https://github.com/Bodila51/muse-jev-playbook)** - Jev decision layer for Muse: a fast, cheap TypeSafe AI gate before expensive agent work — confidence policy, recipes, reference router, honest measurement.  
  <sub>17 stars · Python · MIT · updated 2026-09-22</sub>
- **[romaluev/jev-ego](https://github.com/romaluev/jev-ego)** - Fast browser agent for ego lite. One TypeSafe request per step; an agent or Jev picks the move.  
  <sub>17 stars · TypeScript · updated 2026-09-17</sub>
- **[d-date/swift-jev](https://github.com/d-date/swift-jev)** - A Swift client for TypeSafe AI's Jev — typed judgements, not text  
  <sub>16 stars · Swift · MIT · updated 2026-09-23</sub>
- **[evoke-build/evoke](https://github.com/evoke-build/evoke)** - Software, by reflex. Say it, and the right small program runs: chosen by a calibrated classifier, run only when it is sure enough, and it asks before anything that cannot be undone. A CLI, a package manager and a TypeScript SDK: the first implementation of the idea.  
  <sub>16 stars · Rust · Apache-2.0 · updated 2026-09-25</sub>
- **[syumai/jevyoumean](https://github.com/syumai/jevyoumean)** - Semantic "Did you mean?" for any CLI — wraps commands and uses TypeSafe's Jev to match subcommand typos by intent, not edit distance.  
  <sub>16 stars · Go · MIT · updated 2026-09-23</sub>
- **[TypeSafeAI/jev-harness](https://github.com/TypeSafeAI/jev-harness)** - A custom coding harness for TypeSafe AI's Jev: an LLM proposes, Jev answers narrow questions, code decides, every step leaves a receipt.  
  <sub>14 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[zhulinchng/jevper](https://github.com/zhulinchng/jevper)** - Jev-shaped (TypeSafe System One) classification wrapper over OpenAI-like clients  
  <sub>14 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[arjun988/Kev](https://github.com/arjun988/Kev)** - Open-source System One decision engine. Typed choice / score / noul with calibrated probabilities. Self-host with Ollama or any OpenAI-compatible model. Apache-2.0.  
  <sub>13 stars · TypeScript · Apache-2.0 · updated 2026-09-23</sub>
- **[atharvamhaske/typesafe-sdk-go](https://github.com/atharvamhaske/typesafe-sdk-go)** - unofficial go sdk for typesafe ai. not affiliated with or endorsed by typesafe ai. a side project built to fill the missing go sdk gap, for the community to use.  
  <sub>13 stars · Go · MIT · updated 2026-09-21</sub>
- **[hev/reranker](https://github.com/hev/reranker)** - Use Jev (TypeSafe's System One model) as a calibrated reranker: one call, up to 30 documents, a probability per document. Apache-2.0.  
  <sub>13 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[a3165458/ai-trading](https://github.com/a3165458/ai-trading)** - JEV/this-that decision loop for Lighter.xyz BTC and ETH perps with a BUY/SELL web blotter  
  <sub>12 stars · Python · updated 2026-09-24</sub>
- **[arielweinberger/jev-autopilot](https://github.com/arielweinberger/jev-autopilot)** - This demo uses Jev from TypeSafe AI to autonomously fly a drone in a random city from point A to point B, avoiding obstacles along the way. A trip costs $0.01.  
  <sub>11 stars · TypeScript · updated 2026-09-17</sub>
- **[frostney/clean-code-review](https://github.com/frostney/clean-code-review)** - Every code file in a pull request, judged against Uncle Bob's Clean Code by TypeSafe's Jev, then reviewed by Luna. Built on eve and Next.js.  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[agencyenterprise/jev-recipes](https://github.com/agencyenterprise/jev-recipes)** - 200+ plug-and-play Jev recipes: small, calibrated AI decisions that route, grade, gate, compare, and label text for agents, RAG, support, code review, and music. Import from JavaScript or TypeScript, or call the CLI with JSON from any language.  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[Nisaka520/JevBystander](https://github.com/Nisaka520/JevBystander)** - 安卓无障碍版微信判读：只读屏、只弹 3 条 Toast（意图 / 情绪 / 着急 / 建议），不生成回复文案、不发送 · 零第三方依赖，APK 861 KB  
  <sub>10 stars · Kotlin · MIT · updated 2026-09-23</sub>
- **[saibimajdi/typesafeai-dotnet-sdk](https://github.com/saibimajdi/typesafeai-dotnet-sdk)** - Community .NET SDK for the TypeSafe AI System One API — typed noul, choice, and score questions with structured, confidence-scored answers. Not affiliated with TypeSafe AI.  
  <sub>9 stars · C# · MIT · updated 2026-09-23</sub>
- **[Tangerg/typesafe-sdk-go](https://github.com/Tangerg/typesafe-sdk-go)** - Go SDK for the TypeSafe AI API — typed questions in, probability distributions out.  
  <sub>9 stars · Go · MIT · updated 2026-09-19</sub>
- **[TrustifAI/typed_evals](https://github.com/TrustifAI/typed_evals)** - Fast, typed, calibrated evaluations for LLM and agent outputs, powered by Jev — with simple, framework-agnostic Python APIs  
  <sub>9 stars · Python · MIT · updated 2026-09-24</sub>
- **[amithgc/local-jev](https://github.com/amithgc/local-jev)** - A local, offline System One server compatible with TypeSafe's Jev API. It answers typed yes/no, category and score questions with small open models.  
  <sub>8 stars · Python · MIT · updated 2026-09-21</sub>
- **[joevidev/ui-generator-instinct-jev](https://github.com/joevidev/ui-generator-instinct-jev)** - No description provided.  
  <sub>8 stars · TypeScript · updated 2026-09-18</sub>
- **[joshmn/typesafe-sdk](https://github.com/joshmn/typesafe-sdk)** - Ruby client for typesafe.ai  
  <sub>8 stars · Ruby · MIT · updated 2026-09-24</sub>
- **[NSStudent/JevSwiftSDK](https://github.com/NSStudent/JevSwiftSDK)** - An independent, type-safe Swift SDK for TypeSafe Jev, with async/await, batching, retries, and SPM support.  
  <sub>8 stars · Swift · MIT · updated 2026-09-19</sub>
- **[Skyvern-AI/jevscape](https://github.com/Skyvern-AI/jevscape)** - RuneBench harness for TypeSafe's Jev: bounded action catalog, tick-mode controller and a live dashboard  
  <sub>8 stars · TypeScript · updated 2026-09-18</sub>
- **[tontoko/jev-browser](https://github.com/tontoko/jev-browser)** - One grounded Jev/Playwright core: typed SDK, persistent CLI, and MCP server with native browser operations and deterministic assertions.  
  <sub>8 stars · JavaScript · Apache-2.0 · updated 2026-09-24</sub>
- **[AbdelStark/bicameral](https://github.com/AbdelStark/bicameral)** - Hybrid coding harness: System 2 writes, System 1 (Jev) runs reflexes.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-16</sub>
- **[devbackend/jevgo](https://github.com/devbackend/jevgo)** - Unofficial Go client for the TypeSafe AI System One API (Jev) — typed questions in, calibrated answers out.  
  <sub>7 stars · Go · MIT · updated 2026-09-21</sub>
- **[joshhu/jevtest](https://github.com/joshhu/jevtest)** - 情緒測謊器：嘴上說「好」，心裡真的好嗎？用 TypeSafe Jev（System One 模型）透過 OpenRouter 即時判斷，並與一般 LLM 對照  
  <sub>7 stars · HTML · updated 2026-09-20</sub>
- **[leftspace89/JevBird](https://github.com/leftspace89/JevBird)** - No description provided.  
  <sub>7 stars · Python · MIT · updated 2026-09-17</sub>
- **[Premo-Cloud/typesafe-sdk-java](https://github.com/Premo-Cloud/typesafe-sdk-java)** - Community Java SDK for Jev, TypeSafe's System One model: typed questions in, typed answers with calibrated probabilities out. Java 17+, Spring Boot starter (unofficial)  
  <sub>7 stars · Java · MIT · updated 2026-09-23</sub>
- **[ticofab/scala-jev-sdk](https://github.com/ticofab/scala-jev-sdk)** - Scala SDK for Jev. No effect system bundled.  
  <sub>7 stars · Scala · Apache-2.0 · updated 2026-09-19</sub>
- **[3clyp50/a0-typesafe-ai](https://github.com/3clyp50/a0-typesafe-ai)** - TypeSafe AI Jev judgments for Agent Zero, with typed tools and probability cards.  
  <sub>6 stars · Python · MIT · updated 2026-09-17</sub>
- **[doronp/jevc](https://github.com/doronp/jevc)** - Compile agent policy prose into deterministic verdict programs: narrow evidence questions for the model, the verdict computed in code. Install: npm i -g jev-compiler  
  <sub>6 stars · TypeScript · Apache-2.0 · updated 2026-09-22</sub>
- **[gilljon/typesafe-ai-rs](https://github.com/gilljon/typesafe-ai-rs)** - Independent async and blocking Rust SDK for the TypeSafe AI System One API  
  <sub>6 stars · Rust · MIT · updated 2026-09-17</sub>
- **[HorusJiang/dsh-jev-tools](https://github.com/HorusJiang/dsh-jev-tools)** - Jev judgment, not generation: prune long tool output, screen fetched pages for injected instructions, and gate completion claims inside DeepSeek Harness.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[nshkrdotcom/typesafe_sdk](https://github.com/nshkrdotcom/typesafe_sdk)** - An idiomatic, type-safe Elixir port of the official TypeScript AI SDK (ai / ai-sdk) providing unified LLM integrations, streaming text and structured outputs, tool calling, and agentic workflows. Jev is their current flagship model and is the first System One model.  
  <sub>6 stars · Elixir · MIT · updated 2026-09-20</sub>
- **[smartaces/jev-plays-streetfighter-2](https://github.com/smartaces/jev-plays-streetfighter-2)** - No description provided.  
  <sub>6 stars · Python · updated 2026-09-21</sub>
- **[vercel-labs/jev-ai-sdk-form-router](https://github.com/vercel-labs/jev-ai-sdk-form-router)** - Route form submissions to the right people with Jev and AI SDK.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[xingwudao/OpenJev](https://github.com/xingwudao/OpenJev)** - OpenJev: an independent Jev-inspired System One decision API based on TypeSafe.ai concepts. Choice, score and noul primitives, local mock server, Python and TypeScript SDKs. Real inference planned; not affiliated with TypeSafe AI.  
  <sub>6 stars · Python · updated 2026-09-18</sub>
- **[alterhq/typesafe-sdk-swift](https://github.com/alterhq/typesafe-sdk-swift)** - Unofficial Swift library for the TypeSafe API  
  <sub>5 stars · Swift · MIT · updated 2026-09-15</sub>
- **[cheeaun/jevmoji](https://github.com/cheeaun/jevmoji)** - Type anything. Get related emojis scored 0–3 with Jev.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[dougsong/jev-android](https://github.com/dougsong/jev-android)** - A Kotlin Android SDK for UI automation powered by TypeSafe Jev, with an accessibility runtime and sample app.  
  <sub>5 stars · Kotlin · MIT · updated 2026-09-20</sub>
- **[exfly/laya-jev-compatible-server](https://github.com/exfly/laya-jev-compatible-server)** - A TypeSafe Jev-compatible HTTP server (POST /v1/systemone)  
  <sub>5 stars · Python · updated 2026-09-20</sub>
- **[hoangnb24/paseo-supervision](https://github.com/hoangnb24/paseo-supervision)** - Paseo plugin for supervising Lead–Peer communication protocol drift with Jev  
  <sub>5 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[kisshan13/typesafe-ai-go](https://github.com/kisshan13/typesafe-ai-go)** - Community-maintained Go SDK for the TypeSafe AI System One evaluation API, with typed questions, fluent builders, retries, and examples.  
  <sub>5 stars · Go · MIT · updated 2026-09-20</sub>
- **[Olti1947/jev-java](https://github.com/Olti1947/jev-java)** - Idiomatic Java SDK for TypeSafe AI Jev System One decision engine  
  <sub>5 stars · Java · updated 2026-09-24</sub>
- **[Stumble/jev-go](https://github.com/Stumble/jev-go)** - Community Go SDK for TypeSafe AI Jev / System One  
  <sub>5 stars · Go · MIT · updated 2026-09-18</sub>
- **[tiandee/codex-jev-router](https://github.com/tiandee/codex-jev-router)** - No description provided.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[campusx-official/jev-demo](https://github.com/campusx-official/jev-demo)** - A simple demo using jev  
  <sub>4 stars · Python · updated 2026-09-24</sub>
- **[dtunai/cu-Jev](https://github.com/dtunai/cu-Jev)** - cuda-Jev — a CUDA-native Jev System One decision inference engine. Jev compatible API, examples, and reproducible benchmarks.  
  <sub>4 stars · C · Apache-2.0 · updated 2026-09-23</sub>
- **[Hawxy/TypeSafeAI.Net](https://github.com/Hawxy/TypeSafeAI.Net)** - .NET SDK for the TypeSafe AI platform  
  <sub>4 stars · C# · Apache-2.0 · updated 2026-09-19</sub>
- **[InsaneArts/typesafe-sdk-swift](https://github.com/InsaneArts/typesafe-sdk-swift)** - Swift SDK for TypeSafe AI  
  <sub>4 stars · Swift · MIT · updated 2026-09-17</sub>
- **[JabbaKadabra/JevDotNet](https://github.com/JabbaKadabra/JevDotNet)** - .NET client for TypeSafe System One (Jev) — typed questions in, typed answers with probabilities and confidence out. No prompt engineering, no output parsing.  
  <sub>4 stars · C# · MIT · updated 2026-09-21</sub>
- **[jamilxt/typesafe-ai-java](https://github.com/jamilxt/typesafe-ai-java)** - Community-maintained Java SDK for the TypeSafe AI System One (Jev) API. Not an official TypeSafe product.  
  <sub>4 stars · Java · updated 2026-09-23</sub>
- **[luigivis/jev-sdk-java](https://github.com/luigivis/jev-sdk-java)** - Type-safe Java 21 client for the TypeSafe AI Jev (System One) decision API  
  <sub>4 stars · Java · MIT · updated 2026-09-22</sub>
- **[mateonunez/jod](https://github.com/mateonunez/jod)** - Semantic schemas over TypeSafe's Jev — validate the state locally, then project typed answers.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[paramjeetn/jev-cookbook](https://github.com/paramjeetn/jev-cookbook)** - The complete cookbook for Jev by TypeSafe AI — 120+ use cases, 10 runnable examples, 4 composition patterns, and first-principles theory for the world's first System One AI model.  
  <sub>4 stars · Python · MIT · updated 2026-09-22</sub>
- **[priyankark/jev-state](https://github.com/priyankark/jev-state)** - Build and regression-test conversational state machines powered by Jev. Inspect decisions, capture failing conversations as tests, and export runnable TypeScript for your app.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[TimothyZhang7/open-decisions](https://github.com/TimothyZhang7/open-decisions)** - Typed decisions from local open models. Python SDK, agent routing, and experimental Tetris. MIT.  
  <sub>4 stars · Python · MIT · updated 2026-09-18</sub>
- **[abeldzan/jev-rs](https://github.com/abeldzan/jev-rs)** - Async-first Rust SDK for the TypeSafe AI API  
  <sub>3 stars · Rust · MIT · updated 2026-09-18</sub>
- **[antTing/jev-accounts-hub](https://github.com/antTing/jev-accounts-hub)** - A multi-account manager and API gateway for TypeSafe / Jev. 一个用于 TypeSafe / Jev 的多账户管理器和 API 网关。交流群：1102910606  
  <sub>3 stars · Go · MIT · updated 2026-09-22</sub>
- **[ArmanJR/Jev-Persian-Benchmark](https://github.com/ArmanJR/Jev-Persian-Benchmark)** - A Quick Typesafe's Jev Evaluation on Persian  
  <sub>3 stars · Python · updated 2026-09-22</sub>
- **[binnash/typesafe-sdk](https://github.com/binnash/typesafe-sdk)** - PHP & Laravel SDK for TypeSafe AI's JEV Model series  
  <sub>3 stars · PHP · updated 2026-09-18</sub>
- **[cernst11/graphql-classifier](https://github.com/cernst11/graphql-classifier)** - Scan a GraphQL schema and flag PII, auth gaps, N+1 risk, and naming/doc issues using TypeSafe's Jev model  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[chaitin/Decis](https://github.com/chaitin/Decis)** - Self-hosted, Jev-compatible decision-model API — one /v1/systemone endpoint, open weights (Laya, kev), one Docker image per engine.  
  <sub>3 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[ChristianAlexander/effect-jev-cwe](https://github.com/ChristianAlexander/effect-jev-cwe)** - A demonstration of the Jev System 1 model in Effect, matching vulnerabilities to their underlying CWEs  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[colinmcdermott/emoji-jev](https://github.com/colinmcdermott/emoji-jev)** - Emoji autocomplete at the speed of typing. TypeSafe AI Jev on a Whop-hosted TanStack Start app.  
  <sub>3 stars · TypeScript · updated 2026-09-17</sub>
- **[diorrego/toolgate-experiment](https://github.com/diorrego/toolgate-experiment)** - Benchmarks of MCP tool selection accuracy and latency. V2 evaluates 143 Woku tools with GPT-6 Luna API calls and Jev; includes Go/Rust cores, one TypeScript SDK and reproducible reports.  
  <sub>3 stars · JavaScript · updated 2026-09-24</sub>
- **[elbruno/ElBruno.AI.Jev](https://github.com/elbruno/ElBruno.AI.Jev)** - Community .NET 10 SDK for official TypeSafe AI Jev typed decisions and Microsoft.Extensions.AI integrations.  
  <sub>3 stars · C# · MIT · updated 2026-09-22</sub>
- **[fadhlirahim/simple-agent-collabs](https://github.com/fadhlirahim/simple-agent-collabs)** - A file-based research loop for one human and N LLM subagents. Inspired by HF agent-collabs  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[fgn/jevgo](https://github.com/fgn/jevgo)** - Go client for TypeSafe AI's System One API (Jev), with optional Langfuse instrumentation  
  <sub>3 stars · Go · MIT · updated 2026-09-17</sub>
- **[gudcks0305/jev-java](https://github.com/gudcks0305/jev-java)** - Unofficial Java SDK for TypeSafe Jev and Vercel AI Gateway, with Spring Boot and WebClient support  
  <sub>3 stars · Java · MIT · updated 2026-09-21</sub>
- **[hardkoded/typesafe-sdk-dotnet](https://github.com/hardkoded/typesafe-sdk-dotnet)** - Unofficial .NET port of the TypeSafe AI client SDK (typed questions & answers)  
  <sub>3 stars · C# · MIT · updated 2026-09-22</sub>
- **[joshLong145/jev-cli](https://github.com/joshLong145/jev-cli)** - A CLI wrapper written in python for Jev  
  <sub>3 stars · Python · updated 2026-09-21</sub>
- **[KKloudTarus/taurus-jev-sdk-go](https://github.com/KKloudTarus/taurus-jev-sdk-go)** - Unofficial, dependency-free Go client for the TypeSafe AI System One API and the Jev model. Validated responses, masked credentials, bounded retries.  
  <sub>3 stars · Go · MIT · updated 2026-09-24</sub>
- **[opaielsheikh/typesafe-migration-guard](https://github.com/opaielsheikh/typesafe-migration-guard)** - Automated database migration safety reviewer powered by TypeSafe AI (Jev System One model)  
  <sub>3 stars · TypeScript · updated 2026-09-17</sub>
- **[pewriebontal/typesafe-sdk-cpp](https://github.com/pewriebontal/typesafe-sdk-cpp)** - An unofficial CPP 20 SDK for the TypeSafe API  
  <sub>3 stars · C++ · MIT · updated 2026-09-24</sub>
- **[realZachi/jevtest](https://github.com/realZachi/jevtest)** - Semantic test matchers for Vitest and Jest, powered by TypeSafe's Jev model. Write expectations in plain English, get calibrated probabilities back.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[replynodes/jev-web-analyzer](https://github.com/replynodes/jev-web-analyzer)** - See what Jev thinks about your SaaS website — powered by ReplyNodes web context and Vercel AI Gateway.  
  <sub>3 stars · TypeScript · Apache-2.0 · updated 2026-09-24</sub>
- **[RevocGG/typesafe-jev-bridge](https://github.com/RevocGG/typesafe-jev-bridge)** - Use the TypeSafe Jev decision model (System One) anywhere: zero-dependency OpenAI-compatible bridge for 9Router, Claude Code, Cursor, Cline & any OpenAI SDK. Typed yes/no, choice & score judgments via CLI or HTTP.  
  <sub>3 stars · JavaScript · updated 2026-09-21</sub>
- **[samtay32/jev-system-architect](https://github.com/samtay32/jev-system-architect)** - System-architecture skill for TypeSafe AI Jev/System One — find fuzzy semantic judgment and turn it into small Choice/Score/Noul primitives.  
  <sub>3 stars · MIT · updated 2026-09-17</sub>
- **[santos-sanz/jev-audio-beeper](https://github.com/santos-sanz/jev-audio-beeper)** - Low-latency audio censorship POC using Jev typed decisions and ffmpeg.  
  <sub>3 stars · TypeScript · updated 2026-09-17</sub>
- **[sd109/typesafe-go](https://github.com/sd109/typesafe-go)** - A collection of typesafe.ai API utilities  
  <sub>3 stars · Go · Apache-2.0 · updated 2026-09-20</sub>
- **[simota/tenbin](https://github.com/simota/tenbin)** - MCP server and agent skill for the TypeSafe AI System One API (Jev): decompose a judgment into Choice / Score / Noul questions, lint them, measure on labelled data, and put calibrated thresholds in code  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[ssd1051/hearmemory](https://github.com/ssd1051/hearmemory)** - Shared memory Jev-based plugin for multi-agent coding: subagents and Codex/Claude Code/Cursor hand-offs share one project memory. 一个多agent协同高效记忆统筹插件  
  <sub>3 stars · Python · MIT · updated 2026-09-25</sub>
- **[tycoding/jev-java-sdk](https://github.com/tycoding/jev-java-sdk)** - No description provided.  
  <sub>3 stars · Java · Apache-2.0 · updated 2026-09-23</sub>
- **[YanfLIZi56/jev-starter](https://github.com/YanfLIZi56/jev-starter)** - Visually configure Jev questions, test them live, export ready-to-use code.  
  <sub>3 stars · Vue · MIT · updated 2026-09-24</sub>
- **[zhirschtritt/typesafe-go](https://github.com/zhirschtritt/typesafe-go)** - Idiomatic Go SDK for the TypeSafe AI API  
  <sub>3 stars · Go · MIT · updated 2026-09-17</sub>
- **[0xwhrari/grok-jev-guard](https://github.com/0xwhrari/grok-jev-guard)** - No description provided.  
  <sub>2 stars · Python · MIT · updated 2026-09-23</sub>
- **[1cyberlangke1/rwkv-jev-like](https://github.com/1cyberlangke1/rwkv-jev-like)** - vibe 好玩  
  <sub>2 stars · Python · MIT · updated 2026-09-20</sub>
- **[abhishekmamdapure/jev-information-extraction](https://github.com/abhishekmamdapure/jev-information-extraction)** - Parsing the PDF and extracting the relevant information  
  <sub>2 stars · Python · updated 2026-09-21</sub>
- **[ably-labs/jev-pong](https://github.com/ably-labs/jev-pong)** - Pong where the ball moves one step per model decision. Jev vs LLMs via Vercel AI Gateway, every player and agent on an Ably channel.  
  <sub>2 stars · TypeScript · Apache-2.0 · updated 2026-09-19</sub>
- **[anilsenay/jev](https://github.com/anilsenay/jev)** - Unofficial Go client for TypeSafe's System One API  and its model, Jev.  
  <sub>2 stars · Go · MIT · updated 2026-09-17</sub>
- **[Ashfaqbs/jev-mcp-spring](https://github.com/Ashfaqbs/jev-mcp-spring)** - Java/Spring Boot MCP server for TypeSafe Jev  
  <sub>2 stars · Java · Apache-2.0 · updated 2026-09-21</sub>
- **[Bodila51/Jev-chooses-a-LLM](https://github.com/Bodila51/Jev-chooses-a-LLM)** - Jev Router for Cursor - TypeSafe Jev picks COST/BALANCED/INTELLIGENCE, Cursor executes  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[brightshore/jev-net](https://github.com/brightshore/jev-net)** - A lightweight .NET client for the TypeSafe AI API (System One / Jev). One dependency; a faithful port of the official Python SDK.  
  <sub>2 stars · C# · MIT · updated 2026-09-20</sub>
- **[chez-shanpu/typesafeai-go](https://github.com/chez-shanpu/typesafeai-go)** - Go SDK for TypeSafe AI API https://docs.typesafe.ai/api  
  <sub>2 stars · Go · Apache-2.0 · updated 2026-09-17</sub>
- **[clouatre-labs/decisions-judge-mcp](https://github.com/clouatre-labs/decisions-judge-mcp)** - Typed decisions for AI agents as an MCP tool: yes/no probability (noul), choice, and score in one fast request. Backed by the TypeSafe System One model.  
  <sub>2 stars · JavaScript · Apache-2.0 · updated 2026-09-24</sub>
- **[cole-gillespie/typesafe-go](https://github.com/cole-gillespie/typesafe-go)** - unofficial go SDK for typesafe AI, with typed answers, retries, and context support  
  <sub>2 stars · Go · MIT · updated 2026-09-17</sub>
- **[early-signal-tech/jev-duckdb-analytics-cli](https://github.com/early-signal-tech/jev-duckdb-analytics-cli)** - A CLI tool using Jev's Python SDK to read from DuckDB and answer questions  
  <sub>2 stars · Python · updated 2026-09-22</sub>
- **[guillemus/jev-go](https://github.com/guillemus/jev-go)** - Unofficial Go SDK for TypeSafe AI's Jev API  
  <sub>2 stars · Go · updated 2026-09-17</sub>
- **[hazlema/jev-riffs](https://github.com/hazlema/jev-riffs)** - Music pattern ripper: MIDI → interval tokens → code mines candidate motifs → Jev (TypeSafe System One) grades their significance. Web UI with piano roll, click-to-play, WAV export.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[herakles-dev/typesafe-claude-kit](https://github.com/herakles-dev/typesafe-claude-kit)** - Claude Code kit for TypeSafe (Jev): agents, skill, client, calibration tools  
  <sub>2 stars · Python · MIT · updated 2026-09-24</sub>
- **[iammusham/jev-snake](https://github.com/iammusham/jev-snake)** - An experimental Snake environment where the game engine owns deterministic rules and TypeSafe AI's Jev makes the movement decision from structured state on every tick.  
  <sub>2 stars · Python · updated 2026-09-17</sub>
- **[iikareem/skillfeed](https://github.com/iikareem/skillfeed)** - A tech reading feed ranked to your skills — powered by TypeSafe Jev  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[jacobgoldfarb/Jevlish](https://github.com/jacobgoldfarb/Jevlish)** - A better Javascript SDK for Jev  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[kataras/jev](https://github.com/kataras/jev)** - A Go client for the TypeSafe AI's System One API and its model, Jev.  
  <sub>2 stars · Go · MIT · updated 2026-09-21</sub>
- **[kinfey/jevHarnessAgent](https://github.com/kinfey/jevHarnessAgent)** - Jev and GitHub Copilot harness comparison with a live bilingual ordering dashboard  
  <sub>2 stars · Python · updated 2026-09-21</sub>
- **[mahmut-gundogdu/bes-kelime-jev](https://github.com/mahmut-gundogdu/bes-kelime-jev)** - Ne yazarsanız yazın, beş kelimeden biriyle cevap veren sohbet botu. Kelimeyi TypeSafe AI'ın Jev evaluation modeli seçer.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[micic-mihajlo/jev-tool-runner](https://github.com/micic-mihajlo/jev-tool-runner)** - Jev selects developer tools; Codex handles code. MCP and Jev-first execution with measured benchmarks.  
  <sub>2 stars · JavaScript · updated 2026-09-18</sub>
- **[morinokami/hunk-triage](https://github.com/morinokami/hunk-triage)** - Read the important changes first.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[mzainzulifqar/jev-php-sdk](https://github.com/mzainzulifqar/jev-php-sdk)** - PHP SDK for TypeSafe's Jev: send text and typed questions, get typed answers with calibrated confidence. PHP 8.1+, works with any PSR-18 client, Laravel 8–13.  
  <sub>2 stars · PHP · MIT · updated 2026-09-18</sub>
- **[olivier-motium/jev-doom](https://github.com/olivier-motium/jev-doom)** - Watch Jev play Freedoom in a local dashboard. TypeSafe direct and Vercel AI Gateway, inspectable decisions, and bounded spending.  
  <sub>2 stars · Python · MIT · updated 2026-09-21</sub>
- **[portlandhodl/jev-cli](https://github.com/portlandhodl/jev-cli)** - No description provided.  
  <sub>2 stars · Rust · Apache-2.0 · updated 2026-09-18</sub>
- **[rahulthakore16/n8n-nodes-jev](https://github.com/rahulthakore16/n8n-nodes-jev)** - Jev by TypeSafe AI for n8n: typed decisions, probabilities, and confidence-aware workflows  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[Rajmeet/jev-phone](https://github.com/Rajmeet/jev-phone)** - Drive a phone with a model that never writes a word. TypeSafe's Jev picks each action, phone-use runs it on iOS and Android.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[reiswaffel78/jev-agent-toolkit](https://github.com/reiswaffel78/jev-agent-toolkit)** - Jev-first portable Agent Skill and optional MCP bridge for Claude Code, Codex, Cursor and compatible agents.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[Solido/jev_dart](https://github.com/Solido/jev_dart)** - Typesafe Jev Api  
  <sub>2 stars · Dart · MIT · updated 2026-09-22</sub>
- **[typesafe-sdk-csharp/typesafe-sdk](https://github.com/typesafe-sdk-csharp/typesafe-sdk)** - No description provided.  
  <sub>2 stars · C# · MIT · updated 2026-09-21</sub>
- **[xianggelila177/VideoAdGuard-Jev](https://github.com/xianggelila177/VideoAdGuard-Jev)** - Bilibili sponsored-segment detection powered by TypeSafe Jev  
  <sub>2 stars · TypeScript · GPL-2.0 · updated 2026-09-22</sub>
- **[xuboboo/ashare-trader](https://github.com/xuboboo/ashare-trader)** - 基于 Jev 的 A 股 T+1 决策台：盘前预选 + 交易时段全程决策 + 本地概率模型 + 严格成本回测 + QMT 桥接（默认不下单）。1 万本金影子盘记录中；策略未证实正期望（README 有全部数据）。  
  <sub>2 stars · TypeScript · updated 2026-09-23</sub>
- **[33Audits/jev-auto](https://github.com/33Audits/jev-auto)** - Per-turn model routing for Claude Code. Cheapest tier that can do the job, no API key required, and it calibrates itself from what actually happened.  
  <sub>1 stars · MIT · updated 2026-09-20</sub>
- **[a1393323447/jevapi](https://github.com/a1393323447/jevapi)** - No description provided.  
  <sub>1 stars · Rust · MIT · updated 2026-09-21</sub>
- **[acharyaanusha/magic-jev](https://github.com/acharyaanusha/magic-jev)** - A Magic Jev (8) Ball for pull requests.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[adyoi/jev-system-one-playground](https://github.com/adyoi/jev-system-one-playground)** - Windows Forms playground for Jev System One — visualize and evaluate TypeSafe primitives (Choice, Score, Noul) with a 3-pane editor, preset builders, and simulated API evaluation.  
  <sub>1 stars · C# · updated 2026-09-24</sub>
- **[afurm/typesafe-sdk-ruby](https://github.com/afurm/typesafe-sdk-ruby)** - Unofficial Ruby SDK for the TypeSafe AI API (Jev model) - typed questions, retries, and typed errors. Community port of typesafe-sdk-js.  
  <sub>1 stars · Ruby · MIT · updated 2026-09-21</sub>
- **[ajayk/jev-go-sdk](https://github.com/ajayk/jev-go-sdk)** - Dependency-free Go client for TypeSafe AI's System One API and the Jev model  
  <sub>1 stars · Go · Apache-2.0 · updated 2026-09-21</sub>
- **[ajmeese7/jev-chess](https://github.com/ajmeese7/jev-chess)** - Using Jev as a chess engine  
  <sub>1 stars · TypeScript · BSD-3-Clause · updated 2026-09-22</sub>

<sub>236 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Framework integrations

- **[openlayer-ai/jevals](https://github.com/openlayer-ai/jevals)** - Agent evals and guardrails as Jev decisions: one request per trace, a fraction of a cent, fast enough for the agent loop. Runs locally with Kev or Laya.  
  <sub>85 stars · Python · MIT · updated 2026-09-24</sub>
- **[erendikmenn/jev-rag-benchmark](https://github.com/erendikmenn/jev-rag-benchmark)** - Reproducible benchmark for measuring Jev reranking quality, latency, and cost in RAG  
  <sub>15 stars · Python · MIT · updated 2026-09-20</sub>
- **[sunil-sadasivan/jevernetes](https://github.com/sunil-sadasivan/jevernetes)** - Live Kubernetes log analysis, contextual investigation, and agent handoff powered by Jev.  
  <sub>10 stars · Python · Apache-2.0 · updated 2026-09-23</sub>
- **[WiktorB2004/llama-index-jev](https://github.com/WiktorB2004/llama-index-jev)** - LlamaIndex reranker + router powered by TypeSafe Jev - typed scores/choices, cheaper than LLM-as-judge.  
  <sub>7 stars · Python · MIT · updated 2026-09-25</sub>
- **[EmreKaplaner/rag-jev](https://github.com/EmreKaplaner/rag-jev)** - Make room for useful evidence. Inspectable context selection for RAG, with Jev reranking and open benchmark studies.  
  <sub>5 stars · Python · MIT · updated 2026-09-19</sub>
- **[pdrpinto/jevtrim](https://github.com/pdrpinto/jevtrim)** - Jev as a context judge, benchmarked: selection against retrieval and summarization on LoCoMo, four segmentations, matched token budgets, reproducible reports.  
  <sub>5 stars · Jupyter Notebook · MIT · updated 2026-09-25</sub>
- **[atliq/jev-ai-use-cases](https://github.com/atliq/jev-ai-use-cases)** - Hands-on LangChain examples of Jev, TypeSafe AI's decision model: support ticket triage, model routing, reply guardrails, tool selection and finance-inbox fraud checks. An LLM writes; Jev decides.  
  <sub>4 stars · Jupyter Notebook · MIT · updated 2026-09-24</sub>
- **[deepansh-saxena/jev-guardrails](https://github.com/deepansh-saxena/jev-guardrails)** - Comparing LLM-as-judge vs TypeSafe Jev for agent guardrails: same rules, same agent, measured on cost, latency, calibration and coverage.  
  <sub>3 stars · Python · updated 2026-09-23</sub>
- **[wudilyy999/jev-langgraph](https://github.com/wudilyy999/jev-langgraph)** - JEV-native probabilistic decisions, human review, and auditable execution on LangGraph.  
  <sub>3 stars · Python · MIT · updated 2026-09-20</sub>
- **[HcodeQ/Langchain-Jev](https://github.com/HcodeQ/Langchain-Jev)** - Create a customer support reliable AI Agent  
  <sub>2 stars · Jupyter Notebook · updated 2026-09-22</sub>
- **[jms-dcksn/jev-pii-guardrail](https://github.com/jms-dcksn/jev-pii-guardrail)** - A UiPath coded agent with a custom PII detection guardrail on the LLM boundary, built on the TypeSafe Jev model as a LangChain awrap_model_call middleware.  
  <sub>2 stars · Python · updated 2026-09-18</sub>
- **[leepokai/llm-prompt-techniques-on-jev](https://github.com/leepokai/llm-prompt-techniques-on-jev)** - Chain-of-thought and self-refinement for TypeSafe's Jev: feed its typed answers back as state and ask again. Benchmarks vs TypeSafe's own cookbook numbers.  
  <sub>2 stars · Python · MIT · updated 2026-09-19</sub>
- **[lgy1027/jevshield](https://github.com/lgy1027/jevshield)** - Sub-100ms security gate for AI agent tool calls, powered by TypeSafe's Jev (System-1) decision model. Single-request Choice/Noul/Score evaluation, dual-factor blocking matrix, calibrated-confidence routing, fail-closed parsing, zero-config local fallback. LangChain-ready.  
  <sub>2 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[liuhongrui087-art/jev-routed-agent](https://github.com/liuhongrui087-art/jev-routed-agent)** - Multi-step reasoning agent built on LangChain v1 + Jev + Flask + Ollama, with tool calling and local RAG Q&A.  
  <sub>2 stars · Python · updated 2026-09-22</sub>
- **[lorenzejay/convo-flow-example-jev](https://github.com/lorenzejay/convo-flow-example-jev)** - No description provided.  
  <sub>2 stars · Python · updated 2026-09-22</sub>
- **[3F3Feng/audit-triage-agents](https://github.com/3F3Feng/audit-triage-agents)** - Multi-agent audit-triage prototype: LangChain tools + CrewAI orchestration behind a FastAPI service, driven by a TypeScript CLI. Synthetic data only.  
  <sub>1 stars · Python · MIT · updated 2026-09-21</sub>
- **[edwardyen724-g/jev-compactor](https://github.com/edwardyen724-g/jev-compactor)** - Context compaction and safety gating for AI agents via TypeSafe Jev: keeps messages verbatim, no summarization. OpenAI, Anthropic, LangChain, CLI, MCP.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[himanshu231204/jev_model](https://github.com/himanshu231204/jev_model)** - No description provided.  
  <sub>1 stars · Jupyter Notebook · MIT · updated 2026-09-22</sub>
- **[thejoeejoee/git-judge-commits](https://github.com/thejoeejoee/git-judge-commits)** - ⚖️  Judge git commits with Jev: is it breaking, does it deserve attention, and does its message tell the truth?  
  <sub>1 stars · Python · MIT · updated 2026-09-20</sub>
- **[ThiagaoBR/typesafe_agent_gates](https://github.com/ThiagaoBR/typesafe_agent_gates)** - LangChain / Deep Agents middleware that uses TypeSafe's System One model (Jev) for typed judgments in unattended coding agents: a shell-command gate (database, production, destructive, secrets), issue triage and routing by severity and urgency, merge-request detection, and review of weakened tests. Measured with live probes.  
  <sub>1 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[wojciechwiesner/jit-context-os](https://github.com/wojciechwiesner/jit-context-os)** - JIT-JEV Context OS for Agent Zero — Epistemic runtime, JEV System 1 decision gate, 3-tier memory cascade (L0/L1/L2) & prompt-caching optimization  
  <sub>1 stars · HTML · updated 2026-09-24</sub>
- **[bpmforbusiness/jev-agent-harness](https://github.com/bpmforbusiness/jev-agent-harness)** - Jev (TypeSafe AI System One) agent harness guide + video manual — from the LangChain 'Building a Harness with Jev' post. Learn Jev Noul/Choice/Score questions, Model Router, and AutoMode guardrails with LangChain.  
  <sub>0 stars · updated 2026-09-22</sub>
- **[buildaistack/jev-agent-harness](https://github.com/buildaistack/jev-agent-harness)** - A Java Spring Boot agent harness powered by JEV and LLM intelligence.  
  <sub>0 stars · Java · Apache-2.0 · updated 2026-09-25</sub>
- **[chayan-bit/Jev-Frame](https://github.com/chayan-bit/Jev-Frame)** - Typed, auditable Jev decisions for Python agents, with an optional shared runtime, offline previews, and calibration.  
  <sub>0 stars · Python · MIT · updated 2026-09-25</sub>
- **[davyjones7321/jev-state-engine](https://github.com/davyjones7321/jev-state-engine)** - No description provided.  
  <sub>0 stars · Python · updated 2026-09-25</sub>
- **[dhirajpatra/agent-harness-with-jev-llm](https://github.com/dhirajpatra/agent-harness-with-jev-llm)** - A small multi-agent harness built around the pattern from LangChain's post: use a fast, non-generative "System One" classifier (TypeSafe AI's Jev) for structured in-loop decisions -- routing and risky-tool-call gating -- and reserve a real chat LLM for the genuinely open-ended reasoning.  
  <sub>0 stars · Python · updated 2026-09-22</sub>
- **[gbesse/jev-rerank-server](https://github.com/gbesse/jev-rerank-server)** - Drop-in rerank API served by Jev: speaks the Cohere, Jina and Voyage rerank protocols, so any RAG stack switches by changing a URL.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[henryzhangpku/jevelin](https://github.com/henryzhangpku/jevelin)** - Fast, low-cost real-time agents: take small decisions off the critical path with a System One classifier (Jev). Live demo in your browser.  
  <sub>0 stars · Python · MIT · updated 2026-09-25</sub>
- **[itsatgupta/Jev](https://github.com/itsatgupta/Jev)** - JevDemo to compare which llm can do the job better  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-25</sub>
- **[izam-mohammed/decisionsmith](https://github.com/izam-mohammed/decisionsmith)** - Use and fine-tune System One models (Jev, Laya) on your data, with an LLM as the teacher.  
  <sub>0 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[lim6112j/jev-example](https://github.com/lim6112j/jev-example)** - No description provided.  
  <sub>0 stars · Python · updated 2026-09-22</sub>
- **[NeOMakinG/kev-model-router](https://github.com/NeOMakinG/kev-model-router)** - Jev-style model routing powered by kev — a tiny local System One model classifies every request and picks the right LLM. 100% local, 100% free.  
  <sub>0 stars · Python · MIT · updated 2026-09-21</sub>
- **[panchambanerjee/jev_expts](https://github.com/panchambanerjee/jev_expts)** - Experiments with TypeSafe AI's System One Model Jev  
  <sub>0 stars · Python · updated 2026-09-22</sub>
- **[ringozzt/jev-research](https://github.com/ringozzt/jev-research)** - Jev (TypeSafe AI System One Model) 技术趋势调研：GitHub 生态、工程应用与 Agent Harness 落地建议  
  <sub>0 stars · updated 2026-09-25</sub>
- **[rominap22/strandsharness-langchain-jev](https://github.com/rominap22/strandsharness-langchain-jev)** - Demo for We Are Developers AI Conference with Strands Harness, LangChain, and Jev  
  <sub>0 stars · Python · MIT · updated 2026-09-24</sub>
- **[Sahil-coder-30/jev-langgraph-router](https://github.com/Sahil-coder-30/jev-langgraph-router)** - ⚡ Autonomous Multi-Model Routing Engine powered by TypeSafe Jev System One (<250ms, 97.4% cost savings), LangGraph State Machine, Dual-Tier In-Path Security Firewall, and real-time Mistral Large & Google Gemini execution.  
  <sub>0 stars · TypeScript · updated 2026-09-22</sub>
- **[seanmphelps-ai/jev-ux-eve](https://github.com/seanmphelps-ai/jev-ux-eve)** - JEV-UX decision layer console + Eve agent harness on Vercel  
  <sub>0 stars · TypeScript · updated 2026-09-25</sub>
- **[Yasir-Khan-7/jev-sentinel](https://github.com/Yasir-Khan-7/jev-sentinel)** - Prompt injection protection & tool-call guardrails for LangChain / LangGraph AI agents. Screens tool outputs, gates risky tool calls (allow / human review / block), powered by TypeSafe Jev.  
  <sub>0 stars · Python · MIT · updated 2026-09-22</sub>

### Evaluation and judging

- **[bespokelabsai/nimble](https://github.com/bespokelabsai/nimble)** - Local typed decisions, contrastive data curation, and model evaluation.  
  <sub>1765 stars · Python · updated 2026-09-24</sub>
- **[kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory)** - Biologically-inspired memory for AI agents. Decay, retrieval strengthening, consolidation. Zero runtime deps, SQLite, MCP. Benchmarked retrieval with an opt-in hosted TypeSafe Jev reranker.  
  <sub>757 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[Zefan-Cai/Open-Jev](https://github.com/Zefan-Cai/Open-Jev)** - No description provided.  
  <sub>327 stars · Python · MIT · updated 2026-09-23</sub>
- **[Heman10x-NGU/openJev-verdict-2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0)** - Calibrated 151M Non-Autoregressive Decision Engine beating TypeSafe Jev & Laya on LocalLLaMA/typed-decisions (77.10% acc, 0.0636 Brier, 0.0144 ECE)  
  <sub>285 stars · Python · updated 2026-09-20</sub>
- **[TianyuCodings/JevHarness](https://github.com/TianyuCodings/JevHarness)** - LLM-authored task-specific Jev harnesses with optional full-trajectory reward reflection and GEPA evolution.  
  <sub>243 stars · Python · updated 2026-09-21</sub>
- **[BillionsBobby/JevRouter](https://github.com/BillionsBobby/JevRouter)** - A lightweight Jev-powered router for models, tools, and subagents  
  <sub>222 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review)** - Local-first MCP plugin for continuous software-quality review by AI coding agents, powered by Jev.  
  <sub>222 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[monteduro/killmyidea](https://github.com/monteduro/killmyidea)** - Describe your startup idea. Jev decides: kill it, fix it or ship it.  
  <sub>208 stars · TypeScript · updated 2026-09-24</sub>
- **[y0usaf/pi-jev](https://github.com/y0usaf/pi-jev)** - TypeSafe Jev as a decision layer for the Pi coding agent: a measured tool-call gate plus jev_ask for typed, calibrated answers  
  <sub>146 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[dorkitude/webctl](https://github.com/dorkitude/webctl)** - Smart web search CLI for agents, backed by Jev. Saves a lot of tokens.  
  <sub>143 stars · Go · MIT · updated 2026-09-23</sub>
- **[fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench)** - JevBench v1 - a benchmark for Jev-class typed decision models: smart, cheap, fast, reliable, open.  
  <sub>129 stars · Python · MIT · updated 2026-09-25</sub>
- **[Liuziyu77/Valen](https://github.com/Liuziyu77/Valen)** - Train a Jev-like multimodal model by yourself. System One Model, now with vision.  
  <sub>122 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[daseinlabs/open-jev](https://github.com/daseinlabs/open-jev)** - Open Jev implementation with custom finetuning  
  <sub>112 stars · Python · MIT · updated 2026-09-24</sub>
- **[openqa-cn/jev-browser](https://github.com/openqa-cn/jev-browser)** - Jev Browser — indexed browser automation. Jev chooses the control, Playwright acts. A CodexQA skill.  
  <sub>105 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[Heman10x-NGU/Verdict-open-jev](https://github.com/Heman10x-NGU/Verdict-open-jev)** - Non-autoregressive decision engine on ModernBERT (151M) with calibrated uncertainty (RLCD), TypeSafe AI Jev benchmark audit, and in-browser WebGPU playground  
  <sub>102 stars · Python · updated 2026-09-20</sub>
- **[michaelswissa/jevry](https://github.com/michaelswissa/jevry)** - Your browser. Ready to act. An MIT-licensed desktop browser agent for website tasks, cited research, and supported games.  
  <sub>102 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge)** - Using Jev as an evaluator.  
  <sub>88 stars · Python · updated 2026-09-23</sub>
- **[GhalebDweikat/winnow](https://github.com/GhalebDweikat/winnow)** - A calibrated context sieve for Claude Code: every tool result is judged by a System One model before it enters context.  
  <sub>86 stars · Python · MIT · updated 2026-09-19</sub>
- **[qkal/Canny](https://github.com/qkal/Canny)** - Stops AI coding agents from claiming work is done without evidence. Deterministic hooks decide, TypeSafe's Jev advises. Append-only ledger, zero runtime dependencies.  
  <sub>85 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[ChetasLua/jevmeter](https://github.com/ChetasLua/jevmeter)** - Put a live Jev (TypeSafe) meter on any video: every sentence scored, rendered as a 16:9 edit  
  <sub>84 stars · Python · MIT · updated 2026-09-17</sub>
- **[realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock)** - 🧹 Fun project: a Chrome extension that asks a tiny AI decision model (TypeSafe Jev) "is this DOM element an ad?" and pops it off the page. BYOK, no backend, not a real ad blocker.  
  <sub>75 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[nassim-arifette/jevgrep](https://github.com/nassim-arifette/jevgrep)** - Jev-powered semantic code search for coding agents — find behavior across repositories via CLI or MCP, with exact source excerpts and line numbers.  
  <sub>72 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[AkashPriyadarshii/jev-curate](https://github.com/AkashPriyadarshii/jev-curate)** - High-throughput synthetic and pretraining dataset sifter for TypeSafe Jev. Rust streaming core, Parquet and JSONL I/O, typed Choice/Score/Noul judgments, speculative fan-out, 24.0 rows/sec measured.  
  <sub>70 stars · Rust · MIT · updated 2026-09-25</sub>
- **[RenaGao/jev-dataops](https://github.com/RenaGao/jev-dataops)** - An open-source JEV-powered workbench for streaming data selection, quality evaluation, automatic LoRA training and held-out model evaluation.  
  <sub>59 stars · Python · MIT · updated 2026-09-23</sub>
- **[ikermoel/open-alternative-jev](https://github.com/ikermoel/open-alternative-jev)** - Open-source alternative to TypeSafe's Jev: a System One style model layer that gives typed, calibrated decisions from any open-weights LLM in one forward pass (HF + vLLM), with honest benchmarks  
  <sub>54 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[zwliJay/jev-forge](https://github.com/zwliJay/jev-forge)** - An open training and inference stack for Jev-style decision models.  Train models to score dynamic candidate branches from a shared prefix, with support for high-cardinality choice, calibration, and fast batched inference.  
  <sub>50 stars · Python · updated 2026-09-23</sub>
- **[kbhuw/jev-sift](https://github.com/kbhuw/jev-sift)** - Classify first. Read selectively. A portable agent plugin and MCP tool for batch text classification.  
  <sub>47 stars · JavaScript · updated 2026-09-18</sub>
- **[DevMortimer/pi-typesafe](https://github.com/DevMortimer/pi-typesafe)** - TypeSafe decisions for Pi: batched evaluation tool, terminal playground, and typed API for extension authors  
  <sub>46 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[lykycy123/RoboJEV](https://github.com/lykycy123/RoboJEV)** - Two-stage JEV control of a Franka Panda in MuJoCo  
  <sub>45 stars · Python · Apache-2.0 · updated 2026-09-23</sub>
- **[intikhab49/open-jev-typed-decision-engine](https://github.com/intikhab49/open-jev-typed-decision-engine)** - Open reproduction of TypeSafe Jev: a 150M typed decision engine (noul/choice/score in one non-autoregressive pass, calibrated confidence). 0.697 vs Jev's 0.727, 2.5x better calibrated, 4x faster, free. Trains on a Colab T4 in 30 min.  
  <sub>44 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[YuanKJing/Jev-as-Policy](https://github.com/YuanKJing/Jev-as-Policy)** - The highly anticipated open-source repository for JEV as Policy enables one-click setup of the simulation environment. Evaluations of Astra + JEV on benchmarks such as RoboTwin will also be released soon.  
  <sub>41 stars · Python · MIT · updated 2026-09-21</sub>
- **[JoshuaSP/open-jev](https://github.com/JoshuaSP/open-jev)** - Typed JSON inference with DiffusionGemma, with Every and Jev benchmark results  
  <sub>40 stars · Python · MIT · updated 2026-09-16</sub>
- **[shantanugoel/ask-jev-skill](https://github.com/shantanugoel/ask-jev-skill)** - Skill for Hermes, and other agents, to ask typesafe's jev  
  <sub>40 stars · Python · MIT · updated 2026-09-17</sub>
- **[iammrduncan/typesafe-ai-benchmark](https://github.com/iammrduncan/typesafe-ai-benchmark)** - This is a LLM Gateway that mimics typesafe ai structured output. Like an imposter Jev.  
  <sub>39 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[klauswg/jev-suite](https://github.com/klauswg/jev-suite)** - Four decision-quality tools on Jev (TypeSafe System One): Jev answers structured questions, deterministic code keeps the final say.  
  <sub>37 stars · Java · MIT · updated 2026-09-23</sub>
- **[klauswg/jev-guard](https://github.com/klauswg/jev-guard)** - Real-time risk triage gateway for exchange deposits and withdrawals — Jev (TypeSafe System One) handles triage only; adjudication stays in deterministic code.  
  <sub>36 stars · Java · MIT · updated 2026-09-22</sub>
- **[mithalouni/system-one-open](https://github.com/mithalouni/system-one-open)** - Open replica of TypeSafe's Jev: typed calibrated decisions in one forward pass, on Gemma 4 E2B / Gemma 3 270M (Modal)  
  <sub>36 stars · Python · updated 2026-09-17</sub>
- **[kiwi0719/jev-edge](https://github.com/kiwi0719/jev-edge)** - Typed-judgment admission control at the traffic edge: three-layer prompt-injection and abuse filter for nginx/OpenResty, powered by TypeSafe Jev. Fail-open, cached, hot-reloadable.  
  <sub>35 stars · Lua · Apache-2.0 · updated 2026-09-22</sub>
- **[zhihz/openjev](https://github.com/zhihz/openjev)** - Local bilingual probability decisions from context, questions, and candidate answers. Independent research preview inspired by TypeSafe Jev.  
  <sub>34 stars · Python · updated 2026-09-16</sub>
- **[smkrv/jev-calibrate](https://github.com/smkrv/jev-calibrate)** - Calibrate Jev questions against your own labels: tune criteria on labelled examples, confirm on a held-out set, get a verdict per question. Unofficial.  
  <sub>32 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[karminski/Jev-Quantum](https://github.com/karminski/Jev-Quantum)** - 亚微秒级 System-1 模型，准确率服从高斯分布  
  <sub>31 stars · Rust · MIT · updated 2026-09-21</sub>
- **[PromptEngineer48/laya-vs-jev-arena](https://github.com/PromptEngineer48/laya-vs-jev-arena)** - Laya (open source, local) vs TypeSafe Jev (API): two AI models race in Snake and fight in a Mortal-Kombat-style arena. Every move is a real model decision.  
  <sub>30 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[bodepudimuneendra-netizen/laya-jev-GraphRAG](https://github.com/bodepudimuneendra-netizen/laya-jev-GraphRAG)** - A database-agnostic Agentic GraphRAG framework using swappable System One models (local Laya / cloud Jev). A plug-and-play intelligence layer featuring a complete 4-phase pipeline, continuous evaluation and custom A* traversal for any graph database.  
  <sub>29 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[PyModel/jev-judge-mcp](https://github.com/PyModel/jev-judge-mcp)** - Typed judgment tools for MCP agents. TypeSafe's Jev model as verify, screen, find, classify, rerank, decide, compare, extract, review, gate, and score: the model judges, policy decides auto, review, or escalate.  
  <sub>29 stars · Python · MIT · updated 2026-09-25</sub>
- **[myc0576/SmartMoney-Cub](https://github.com/myc0576/SmartMoney-Cub)** - Read-only trading journal and review harness: Jev typed judgments, agent integration, and a reproducible finance benchmark. No orders, no advice.  
  <sub>27 stars · Python · MIT · updated 2026-09-23</sub>
- **[shaharia-lab/jev-cli](https://github.com/shaharia-lab/jev-cli)** - Command-line tool for TypeSafe AI's Jev model. Ask yes/no, multiple-choice and rubric questions about any text and get calibrated probabilities back. Answers become exit codes for shells and CI, JSON for scripts, and MCP tools for AI agents.  
  <sub>27 stars · Rust · Apache-2.0 · updated 2026-09-25</sub>
- **[Zaious/jev-capability-atlas](https://github.com/Zaious/jev-capability-atlas)** - Independent, evidence-based map of when TypeSafe's Jev actually holds up vs. breaks down — real API-call receipts, not a leaderboard. 中文為主的雙語 repo。  
  <sub>27 stars · Python · MIT · updated 2026-09-24</sub>
- **[compozy/yoshi](https://github.com/compozy/yoshi)** - Context-pruning proxy for Claude Code and Codex: Jev judges which history is still needed, measured not claimed. POC here now, heading soon into https://github.com/compozy/compozy  
  <sub>26 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[phyous/tsai-sc](https://github.com/phyous/tsai-sc)** - TypeSafe Jev controls original StarCraft shareware through keyboard and mouse with recorded action probabilities.  
  <sub>26 stars · Python · MIT · updated 2026-09-16</sub>
- **[rorshopping/jev-on-a-laptop](https://github.com/rorshopping/jev-on-a-laptop)** - Unofficial study: Jev-style parallel typed decisions on stock 1.5B-8B models on an Apple Silicon laptop. Benchmarks, research notes, and a Hugging Face Space demo.  
  <sub>25 stars · Python · updated 2026-09-17</sub>
- **[cclank/jevclip](https://github.com/cclank/jevclip)** - Jev-powered video highlights and cited summaries from subtitles and scripts  
  <sub>24 stars · Python · MIT · updated 2026-09-24</sub>
- **[ItIsCuthNotCup/MetaCog](https://github.com/ItIsCuthNotCup/MetaCog)** - MetaCoginition powered by Reflex 4B  
  <sub>23 stars · Python · MIT · updated 2026-09-24</sub>
- **[jcpsimmons/jev-macos-loop](https://github.com/jcpsimmons/jev-macos-loop)** - Open-source macOS AI computer use and native GUI automation on Apple silicon. Jev + OmniParser CoreML + Apple Vision OCR. Bring your own OpenRouter, Vercel AI Gateway, or TypesafeAI token.  
  <sub>23 stars · JavaScript · AGPL-3.0 · updated 2026-09-18</sub>
- **[NiazMorshed2007/jcr](https://github.com/NiazMorshed2007/jcr)** - A Jev-powered resolver for agent harnesses to find deterministic commands and their context in a nested capability tree.  
  <sub>20 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[unicodeveloper/jevocks](https://github.com/unicodeveloper/jevocks)** - Everyday Stocks Status with Jev  
  <sub>19 stars · TypeScript · updated 2026-09-18</sub>
- **[AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks)** - Probability-aware evaluation for typed decision models: calibration, selective risk, latency, and reproducible benchmarks.  
  <sub>18 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[lyramakesmusic/jevbot](https://github.com/lyramakesmusic/jevbot)** - discord bot for jev that lets it talk  
  <sub>18 stars · Python · updated 2026-09-24</sub>
- **[VGabriel45/polymarket-btc5m-jev-trading](https://github.com/VGabriel45/polymarket-btc5m-jev-trading)** - 5m BTC Up/Down Polymarket trading agent using Typesafe Jev as the decision layer & TUI  
  <sub>18 stars · TypeScript · updated 2026-09-21</sub>
- **[zjunlp/JevLoop](https://github.com/zjunlp/JevLoop)** - The agent loop where decisions don't cost a large language model call. Zero deps, runs offline, no API key needed.  
  <sub>18 stars · TypeScript · Apache-2.0 · updated 2026-09-23</sub>
- **[abhishek085/open-spark-jev](https://github.com/abhishek085/open-spark-jev)** - Open-source, local decision models inspired by TypeSafe’s Jev and System One - built on Qwen3 for NVIDIA DGX Spark.  
  <sub>17 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[QuicqDev/Jev-vs-ML](https://github.com/QuicqDev/Jev-vs-ML)** - Jev-vs-ML  
  <sub>16 stars · Jupyter Notebook · updated 2026-09-22</sub>
- **[weitianxin/JevAny](https://github.com/weitianxin/JevAny)** - Calibration-aware reinforcement learning for adaptive decision systems  
  <sub>16 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[AntonioCoppe/jev-harness](https://github.com/AntonioCoppe/jev-harness)** - Decision harness for TypeSafe Jev — confidence gates, shadow mode, recipes, and evals. Claude CLI 48.9s → Jev 1.3s on the same row-filter job.  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[Micha0827/snapjudge](https://github.com/Micha0827/snapjudge)** - Typed decisions (choice / score / yes-no) from local Qwen models on Apple Silicon. Probabilities come straight from the logits, no text generation. TypeSafe-compatible HTTP API, runs on MLX.  
  <sub>14 stars · Python · MIT · updated 2026-09-21</sub>
- **[madeye/pi-jev](https://github.com/madeye/pi-jev)** - Jev-assisted file retrieval and request caching for faster Pi workflows  
  <sub>13 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[philippdubach/pi-jev-router](https://github.com/philippdubach/pi-jev-router)** - A minimal Pareto-optimal OpenRouter model router for pi, based on Jev  
  <sub>13 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[Twister915/typesafe-ai](https://github.com/Twister915/typesafe-ai)** - Typed TypeSafe AI clients for Rust, with async and blocking backends and observable retries.  
  <sub>13 stars · Rust · Apache-2.0 · updated 2026-09-16</sub>
- **[collapseindex/jev-ultralightspeed](https://github.com/collapseindex/jev-ultralightspeed)** - BRRRRRRRRRRRRRRRRRRRRRR  
  <sub>12 stars · Python · updated 2026-09-22</sub>
- **[S1LV3RJ1NX/openjev](https://github.com/S1LV3RJ1NX/openjev)** - Open System One models: typed decisions with calibrated probabilities, trainable on your own data. No text generation.  
  <sub>12 stars · Python · Apache-2.0 · updated 2026-09-23</sub>
- **[abhixhek/jevcal](https://github.com/abhixhek/jevcal)** - Stop guessing confidence thresholds: calibrate, threshold, and drift-check typed decision models (TypeSafe Jev) against an LLM teacher.  
  <sub>11 stars · Python · MIT · updated 2026-09-18</sub>
- **[yzfly/edgejev](https://github.com/yzfly/edgejev)** - 离线可用的本地类型化决策：4 核 CPU 单题 15.6ms。Local & offline Jev / System One inference on CPU — ONNX + INT8, no torch at runtime. 支持 laya / kev / PlayJev  
  <sub>11 stars · Python · updated 2026-09-21</sub>
- **[24601/Augustus](https://github.com/24601/Augustus)** - Agent skill for finding, building, evaluating, and improving decision-model systems. Compositional decision calculus, eval harnesses, and bounded prompt/program hill climbing for Software 3.0. TypeSafe Jev is the default hosted exemplar. Independent of TypeSafe.  
  <sub>10 stars · Python · MIT · updated 2026-09-25</sub>
- **[filedcom/playjev](https://github.com/filedcom/playjev)** - Fast, typed browser automation powered by Jev and Playwright  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[harshithsunku/learn-jev-end-to-end](https://github.com/harshithsunku/learn-jev-end-to-end)** - Learn Jev end to end: a free hands-on course. Build 13 AI agent use cases with a fast brain (Jev) and a slow brain (LLM). One OpenRouter key.  
  <sub>10 stars · Jupyter Notebook · MIT · updated 2026-09-23</sub>
- **[AbdelStark/lejudge-jev-jepa](https://github.com/AbdelStark/lejudge-jev-jepa)** - Natural-language constraints for JEPA world-model planning, judged by a decision model instead of an LLM.  
  <sub>9 stars · Python · MIT · updated 2026-09-24</sub>
- **[carlaiau/jev-reranking](https://github.com/carlaiau/jev-reranking)** - Search engine experimentation on the TREC collections. Currently focused on zero-shot reranking implementations with typesafe.ai's JEV model  
  <sub>9 stars · Python · MIT · updated 2026-09-25</sub>
- **[doeixd/jev-pref](https://github.com/doeixd/jev-pref)** - Turn your AGENTS.md preferences into a fast, Jev-powered AI linter.  
  <sub>9 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[harshwasan/jev-sentinel](https://github.com/harshwasan/jev-sentinel)** - Pi coding-agent extension: TypeSafe Jev checks for tool calls, tool outputs and replies (prompt injection, approvals, secret scrubbing, task pinning)  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[harshwasan/pi-jev-sentinel](https://github.com/harshwasan/pi-jev-sentinel)** - Pi coding-agent extension: TypeSafe Jev checks for tool calls, tool outputs and replies (prompt injection, approvals, secret scrubbing, task pinning)  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[HexyeDEV/JevPR](https://github.com/HexyeDEV/JevPR)** - PR Risk review, automated by Jev  
  <sub>9 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[imMamdouhaboammar/fable-jev](https://github.com/imMamdouhaboammar/fable-jev)** - ⚡ Sub-100ms cognitive reflexes for autonomous coding agents. Powered by TypeSafe AI's Jev & get-fable.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[zeeshan8281/slo-router](https://github.com/zeeshan8281/slo-router)** - SLO-aware LLM inference router with Jev decisions, live queue metrics, counterfactual evaluation, and reproducible latency/cost benchmarks  
  <sub>9 stars · Python · updated 2026-09-23</sub>
- **[zhuyansen/jev-search-rerank-eval](https://github.com/zhuyansen/jev-search-rerank-eval)** - Does a TypeSafe Jev rerank beat embedding search? Graded relevance eval (9,831 pairs, 164 zh/en queries) over the Agent Skills Hub catalog, with the judge-circularity bias measured.  
  <sub>9 stars · Python · MIT · updated 2026-09-18</sub>
- **[arunav25/jev-mcp](https://github.com/arunav25/jev-mcp)** - Connect JEV to MCP clients and compare its judgments against general-purpose LLMs using shared datasets and measurable accuracy.  
  <sub>8 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[cablehead/jev.nu](https://github.com/cablehead/jev.nu)** - Nushell module for the TypeSafe System One API: typed decisions with calibrated probabilities  
  <sub>8 stars · Nushell · MIT · updated 2026-09-21</sub>
- **[Emlembow/jev-graph-search](https://github.com/Emlembow/jev-graph-search)** - Jev-assisted retrieval and evidence-preserving inspection for local Markdown, Obsidian vaults, and Logseq Markdown graphs.  
  <sub>8 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[green-dalii/pi-shift-router](https://github.com/green-dalii/pi-shift-router)** - Per-turn model routing for the Pi coding agent: a small judge picks the cheap or the strong tier for each message, with multi-model failover, task-level orchestration, and an optional decision-model judge (Jev) that answers with a calibrated probability instead of prose.  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[TholeG/typesafe-chess](https://github.com/TholeG/typesafe-chess)** - Chess where both players are TypeSafe's Jev model: every move is a typed Choice decision  
  <sub>8 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[AIGNLAI/ReflexRoute](https://github.com/AIGNLAI/ReflexRoute)** - Fast zero-shot and few-shot LLM routing powered by Jev.  
  <sub>7 stars · Python · MIT · updated 2026-09-20</sub>
- **[codejunkie99/jev-engineering](https://github.com/codejunkie99/jev-engineering)** - Jev Engineering: Typed Decision Systems for Reliable Agent Workflows. Paper, diagrams, and companion examples by Av1dlive.  
  <sub>7 stars · JavaScript · updated 2026-09-21</sub>
- **[daltonrpj/jev-flow](https://github.com/daltonrpj/jev-flow)** - Standalone open-source studio for typed Jev workflows  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-25</sub>
- **[docxology/daf-jev](https://github.com/docxology/daf-jev)** - daf-jev: composable Python toolkit for TypeSafe's Jev (System One) decision API — question builders, confidence gates, evaluator, calibration, CLI, MCP server, agent skill  
  <sub>7 stars · Python · MIT · updated 2026-09-25</sub>
- **[khimaros/verdict](https://github.com/khimaros/verdict)** - turn any llama-server into a jev system one endpoint  
  <sub>7 stars · Python · GPL-3.0 · updated 2026-09-20</sub>
- **[mahlernim/jev-korean-benchmark](https://github.com/mahlernim/jev-korean-benchmark)** - Reproducible early-access evaluation of Jev on Korean understanding and medical text, with runtime and cost evidence  
  <sub>7 stars · Python · updated 2026-09-17</sub>
- **[miniLV/Jev-Auto-Router](https://github.com/miniLV/Jev-Auto-Router)** - Jev Auto Router (Jev Router): experimental per-call GPT model routing for Codex via TypeSafe Jev and a local Responses proxy, with independent task verification.  
  <sub>7 stars · TypeScript · Apache-2.0 · updated 2026-09-23</sub>
- **[muratcakmak/jev-guard](https://github.com/muratcakmak/jev-guard)** - Probability-scored guardrails for Claude Code: deny rule-breaking edits and unasked-for deploys, route your docs into each prompt, and check the final answer against the turn's own evidence.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[nibzard/decision-model-benchmark](https://github.com/nibzard/decision-model-benchmark)** - Independent, reproducible benchmark: a decision model (jev), eight constrained LLMs, and deterministic baselines on typed decisions - accuracy, calibration, latency, cost, failure modes  
  <sub>7 stars · Python · updated 2026-09-19</sub>
- **[perixtar/jev-e2e](https://github.com/perixtar/jev-e2e)** - Natural-language end-to-end tests for web apps, powered by Jev and Playwright.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[ShivamPansuriya/jev-skill-gate](https://github.com/ShivamPansuriya/jev-skill-gate)** - Cut Claude Code's skill manifest by ~75% with TypeSafe Jev. Scores every installed skill for relevance and hides the rest via skillOverrides — 12,750 → 3,185 tokens on a 217-skill install, for $0.0009 a session.  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-23</sub>
- **[y0usaf/jev-lm](https://github.com/y0usaf/jev-lm)** - A word-level language model whose output layer is Jev: n-gram drafter, Noul chunk verification, bits-per-token eval  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[ZhangYiqun018/jev-dimabsa](https://github.com/ZhangYiqun018/jev-dimabsa)** - TypeSafe Jev baseline for DimABSA (SemEval-2026 Task 3) subtask 1: zero-shot and 3-shot valence-arousal regression  
  <sub>7 stars · Python · updated 2026-09-24</sub>
- **[bradAGI/ruling](https://github.com/bradAGI/ruling)** - Typed, calibrated decisions from a local model. No text generated.  
  <sub>6 stars · Python · MIT · updated 2026-09-23</sub>
- **[buchmark/claude-jev](https://github.com/buchmark/claude-jev)** - Claude Code plugin that scores review findings, debug hypotheses and design options with TypeSafe's Jev — calibrated probabilities instead of one more opinion.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[Emenowicz/jev-sap-commerce](https://github.com/Emenowicz/jev-sap-commerce)** - SAP Commerce extension using TypeSafe's Jev to moderate product reviews and suggest product categories and classification attribute values: dry runs on your own data first, an audit record per decision. Plus a Claude Code skill.  
  <sub>6 stars · Java · Apache-2.0 · updated 2026-09-25</sub>
- **[stas4000/jev-papers](https://github.com/stas4000/jev-papers)** - 1,000 arXiv AI papers classified with one Jev decision each, checked against an LLM judge. Open rebuild, MIT.  
  <sub>6 stars · Python · MIT · updated 2026-09-21</sub>
- **[ARCJ137442/jev-2048](https://github.com/ARCJ137442/jev-2048)** - An instrumented 2048 web lab where every move is a Jev (TypeSafe AI System One) Choice, with no heuristic fallback | 用 Jev 决策模型驱动每一步的 2048 网页实验台，概率、置信度、延迟与成本全部摊开可见，且刻意不做启发式兜底  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[Astro-Han/jev-harness](https://github.com/Astro-Han/jev-harness)** - A coding agent that filters every tool result through Jev before the model sees it, with an A/B harness measuring pass@1 and cost against the unfiltered control  
  <sub>5 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[baronunread/leanest](https://github.com/baronunread/leanest)** - Local-first test selector using Jev judgments to determine which tests are affected by a code change  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[brida-ai/reflexbench](https://github.com/brida-ai/reflexbench)** - ReflexBench — open benchmark and evaluation harness for System One models and typed decision engines  
  <sub>5 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[brnyxx/jev-ra](https://github.com/brnyxx/jev-ra)** - Browser use for coding agents, 3-5x faster than browser-use. MCP server + CLI; TypeSafe Jev decides every step in ~300 ms.  
  <sub>5 stars · Python · MIT · updated 2026-09-25</sub>
- **[caiovicentino/eikos-arena](https://github.com/caiovicentino/eikos-arena)** - Eikos-27B vs Jev: live paper trading on Hyperliquid. Real prices, simulated money, rules hashed before the start.  
  <sub>5 stars · Python · MIT · updated 2026-09-24</sub>
- **[choxos/jevchess](https://github.com/choxos/jevchess)** - Jev, TypeSafe's System One model, plays chess against any OpenRouter LLM, Stockfish and you. One-page web app with live moves, Jev's move probabilities, saved games and win rates.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[codejunkie99/codex-model-routing](https://github.com/codejunkie99/codex-model-routing)** - Installable Codex skill: LLM-first model routing with optional Jev, a shared benchmark registry, and explicit cost and confidence checks.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[David-Lolly/Jev-Compatible](https://github.com/David-Lolly/Jev-Compatible)** - Turn your existing SGLang / vLLM deployment into a Jev-compatible decision service. No training. No model changes. 把你现有的 SGLang / vLLM 部署变成一个兼容 Jev 的决策服务。无需任何修改。无需训练。无需更改模型。  
  <sub>5 stars · Python · updated 2026-09-21</sub>
- **[eminetto/typesafe-poc](https://github.com/eminetto/typesafe-poc)** - Prova de Conceito do Jev, modelo da typesafe.ai  
  <sub>5 stars · Go · updated 2026-09-21</sub>
- **[gemanor/jev-code-review-benchmark](https://github.com/gemanor/jev-code-review-benchmark)** - Comparing Jev, Gemini Flash, and Claude Fable on Python code review rules: cost, speed, accuracy, and consistency. Includes results, charts, and reproducible experiments.  
  <sub>5 stars · Python · MIT · updated 2026-09-17</sub>
- **[h0j5bz0adh0-stack/jev-pilot](https://github.com/h0j5bz0adh0-stack/jev-pilot)** - Fast System-1 Decision, Arbitration & Safety Engine for Autonomous AI Agents (Powered by TypeSafe Jev)  
  <sub>5 stars · Python · MIT · updated 2026-09-23</sub>
- **[hndrr/ComfyUI-Jev](https://github.com/hndrr/ComfyUI-Jev)** - Jev text interpretation and judgments for ComfyUI.  
  <sub>5 stars · Python · MIT · updated 2026-09-20</sub>
- **[kinde-starter-kits/jev-agent-authorization](https://github.com/kinde-starter-kits/jev-agent-authorization)** - Jev agent authorization for MCP tool calls: Kinde identity and permissions plus Jev's typed, calibrated decisions, checked server-side before every call runs  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[markjaquith/typesafe-ai-playground](https://github.com/markjaquith/typesafe-ai-playground)** - A playground for experiments around Jev, TypeSafe's System One model.  
  <sub>5 stars · Rust · MIT · updated 2026-09-22</sub>
- **[Mintzs/jevify](https://github.com/Mintzs/jevify)** - An optimized inference engine to turn LLMs into Jev-like machines: optimized for quick, lightweight, and accurate decision-making, classification, and scoring  
  <sub>5 stars · Python · updated 2026-09-19</sub>
- **[NicolaiLassen/open-bonsai-jev](https://github.com/NicolaiLassen/open-bonsai-jev)** - openjev's mechanism, Bonsai's weights: typed decisions read straight from one forward pass of a 1.75-bit 27B model. Credit to TheoLeeCJ (SemIf/OpenJev) and PrismML.  
  <sub>5 stars · Python · MIT · updated 2026-09-20</sub>
- **[pumpkinredbean/bside](https://github.com/pumpkinredbean/bside)** - No description provided.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[simxnherrera/jevr](https://github.com/simxnherrera/jevr)** - A native R client for Jev System 1 model decisions  
  <sub>5 stars · R · updated 2026-09-20</sub>
- **[thehan-co/jevriel](https://github.com/thehan-co/jevriel)** - Give your AI JEV wings. A skill and plugin to build with TypeSafe Jev, upgrade LLM-only workflows and measure the result.  
  <sub>5 stars · JavaScript · Apache-2.0 · updated 2026-09-21</sub>
- **[wjw66/deepseek-harness-jev-pre-compaction](https://github.com/wjw66/deepseek-harness-jev-pre-compaction)** - A pre-compaction advisor for DeepSeek Harness. Runs before the standard `compaction-basic` backend, using TypeSafe JEV to safely prune low-value tool results from model context. Original session events stay in the append-only log; only the model-visible view is replaced with compact markers or archive pointers to reduce context bloat.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[caiovicentino/jev-align](https://github.com/caiovicentino/jev-align)** - Calibrated alignment verifier for LLM responses and agent plans — powered by Jev  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[Cairn-ink/cairn-jev-lab](https://github.com/Cairn-ink/cairn-jev-lab)** - Test what your AI should remember. An experimental, source-aware memory admission evaluator powered by Jev, with editable cases and inspectable results.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-23</sub>
- **[Code-Forge-AU/jev-llm](https://github.com/Code-Forge-AU/jev-llm)** - No description provided.  
  <sub>4 stars · Python · updated 2026-09-17</sub>
- **[FFatTiger/new-api-plugin-typesafe](https://github.com/FFatTiger/new-api-plugin-typesafe)** - TypeSafe AI System One (Jev) task plugin for QuantumNous/new-api — native /v1/systemone, synchronous evaluation, token billing  
  <sub>4 stars · JavaScript · Apache-2.0 · updated 2026-09-18</sub>
- **[Gaurav-Gosain/jev-sec-bench](https://github.com/Gaurav-Gosain/jev-sec-bench)** - Blind security benchmarks for Jev, TypeSafe's System One model: prompt injection and vulnerable code detection, built on jev-go  
  <sub>4 stars · Go · MIT · updated 2026-09-16</sub>
- **[glud123/jev-assist](https://github.com/glud123/jev-assist)** - Don't burn your model's context on a search flood — pipe it in and read above the cut line: one calibrated number per candidate, ~30 rows whether the pool is 40 or 4,000. It doesn't search; it decides what each hit is.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-24</sub>
- **[harrymunro/jev-laya-benchmark](https://github.com/harrymunro/jev-laya-benchmark)** - Speed and accuracy benchmark: TypeSafe's Jev API vs the local Laya MLX typed-decision model on synthetic tasks  
  <sub>4 stars · Python · MIT · updated 2026-09-21</sub>
- **[instax-dutta/sysone-bench](https://github.com/instax-dutta/sysone-bench)** - First independent head-to-head benchmark of System One decision models (Laya vs Jev) on byte-identical inputs  
  <sub>4 stars · Python · MIT · updated 2026-09-22</sub>
- **[jiangkoumo/ego-jev](https://github.com/jiangkoumo/ego-jev)** - Drive the ego lite browser with Jev (TypeSafe System One): one indexed element table in, one operation + target out, single process. ~2x faster than a per-step LLM loop in our measurements.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[jon-devlapaz/tink-route](https://github.com/jon-devlapaz/tink-route)** - Dynamic, confidence-aware Agent Skill routing with TypeSafe Jev and Tink  
  <sub>4 stars · Python · MIT · updated 2026-09-25</sub>
- **[jtsang4/jev-cli](https://github.com/jtsang4/jev-cli)** - CLI for TypeSafe AI's Jev evaluation model — typed questions in, structured JSON answers out  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[jukkatupamaki/better-call-jev](https://github.com/jukkatupamaki/better-call-jev)** - A skill for integrating Jev model calls to any Claude Code session. Supports Vercel AI Gateway.  
  <sub>4 stars · HTML · MIT · updated 2026-09-22</sub>
- **[Kushwho/jev-codes](https://github.com/Kushwho/jev-codes)** - Audit your git diff against YAML coding-standards packs using TypeSafe's Jev model, from a CLI or your AI agent's command/skill.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[maker-KK/todo-jev](https://github.com/maker-KK/todo-jev)** - ⚡ Ultra-fast, low-cost intelligent task classifier and 3-tier routing engine powered by TypeSafe Jev (System One)  
  <sub>4 stars · Python · MIT · updated 2026-09-18</sub>
- **[minhnghia2k3/jev-k8s-awareness](https://github.com/minhnghia2k3/jev-k8s-awareness)** - k8s awareness with jev  
  <sub>4 stars · TypeScript · updated 2026-09-19</sub>
- **[parkavenue9639/jevloop](https://github.com/parkavenue9639/jevloop)** - A Jev-driven general-purpose agent harness for faster, lower-cost execution, with built-in side-by-side experiments against LLM-only agents.  
  <sub>4 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[Parthkomalwad/jevbrief](https://github.com/Parthkomalwad/jevbrief)** - Clean, traceable state briefings for TypeSafe's Jev model  
  <sub>4 stars · Python · MIT · updated 2026-09-25</sub>
- **[Pinutss/jev-model-router](https://github.com/Pinutss/jev-model-router)** - Route among multiple LLMs and multi-model provider keys without leaking secrets.  
  <sub>4 stars · Python · MIT · updated 2026-09-18</sub>
- **[prasanthj/duckdb-jev](https://github.com/prasanthj/duckdb-jev)** - High-throughput, robust native DuckDB extension for batched and streaming TypeSafe/Jev classification, scoring, and semantic predicates from SQL.  
  <sub>4 stars · C++ · Apache-2.0 · updated 2026-09-21</sub>
- **[RahulBalakavi/claude-code-jev](https://github.com/RahulBalakavi/claude-code-jev)** - Experimental Jev permission gate for Claude Code via OpenRouter, with reproducible latency and cost benchmarks  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[Ramneet-Singh/jevopt](https://github.com/Ramneet-Singh/jevopt)** - Making intelligent compiler optimisation decisions with Jev  
  <sub>4 stars · Python · GPL-3.0 · updated 2026-09-21</sub>
- **[Ravinder82/jev-flash-router](https://github.com/Ravinder82/jev-flash-router)** - open-sourced jev-flash-router: an MCP server for TypeSafe's new Jev model.  AI coding agents waste hundreds of reasoning tokens just deciding which file to edit, which route to pick, or whether a diff breaks tests.  Jev evaluates state and outputs calibrated probabilities.  Works with Cursor, Windsurf, & Claude Code  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[SamuelSacco/jev-exploration](https://github.com/SamuelSacco/jev-exploration)** - Jev (TypeSafe) exploratory thread: claim audit, live demos, and runnable code  
  <sub>4 stars · Python · MIT · updated 2026-09-25</sub>
- **[schacon/jev-tests](https://github.com/schacon/jev-tests)** - macOS demos comparing typed decision models: FluidUse (laya, CUA-S1-FORMS), Jev, Kev and Claude  
  <sub>4 stars · updated 2026-09-22</sub>

<sub>421 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Guardrails and safety

- **[wfzyx/von](https://github.com/wfzyx/von)** - The open-source System One decision model. Sub-15ms, non-autoregressive, local drop-in alternative to TypeSafe Jev.  
  <sub>660 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[hyperspaceai/jevcache](https://github.com/hyperspaceai/jevcache)** - A decision cache for TypeSafe Jev-class models — memoize decisions so repeats are free, deterministic, and shareable. One 2 MB binary.  
  <sub>72 stars · updated 2026-09-19</sub>
- **[wobsoriano/oxlint-plugin-jev](https://github.com/wobsoriano/oxlint-plugin-jev)** - No description provided.  
  <sub>63 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[brainstormity/Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot)** - No description provided.  
  <sub>48 stars · Python · MIT · updated 2026-09-22</sub>
- **[leepokai/jev-guard](https://github.com/leepokai/jev-guard)** - Auto mode for every coding agent, built on Jev: risk-scores every tool call with session context (deny / ask / allow), flags prompt injection in results, checks skills and plugins. Claude Code, Codex, Copilot, Gemini, Cursor, pi, OpenCode, ACP.  
  <sub>34 stars · JavaScript · MIT · updated 2026-09-24</sub>
- **[nexibeo/jev-cookbook](https://github.com/nexibeo/jev-cookbook)** - Practical, tested recipes for TypeSafe's Jev decision model on OpenRouter: support triage, database indexing, file organizing, tagging, taxonomies, dedupe, PII detection, extraction, search re-ranking and a browser agent.  
  <sub>27 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[jomatsu/pi-jev-auto-mode](https://github.com/jomatsu/pi-jev-auto-mode)** - Jev (TypeSafe System One) backed auto mode for the Pi coding agent: semantically auto-approves bash, write, and edit tool calls and fails closed when a decision cannot be made.  
  <sub>26 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[Nasrallah-AL/jev-cli](https://github.com/Nasrallah-AL/jev-cli)** - Command-line tool for TypeSafe's Jev AI model  
  <sub>21 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[shiftynick/jev-axi](https://github.com/shiftynick/jev-axi)** - Agent-ergonomic CLI for TypeSafe's Jev: fast calibrated judgments (pick, rate, check, rank, triage, guard) from the shell  
  <sub>21 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[leesk212/JEV-CPU](https://github.com/leesk212/JEV-CPU)** - Run SemIf (Jev-style semantic-if decisions) on a CPU — no GPU. Reads typed option probabilities straight from an open model in one forward pass, plus a web UI.  
  <sub>19 stars · Python · MIT · updated 2026-09-19</sub>
- **[dark-hxx/jev-safety-gateway](https://github.com/dark-hxx/jev-safety-gateway)** - 位于 nginx 与大模型后端之间的前置过滤反向代理：逐请求提取用户输入交给 JEV 判定，有害拦截、正常透明放行  
  <sub>9 stars · Go · AGPL-3.0 · updated 2026-09-24</sub>
- **[Nyarlathoteppppp/pi-heed](https://github.com/Nyarlathoteppppp/pi-heed)** - Runtime constraints for the pi coding agent: checks every side-effecting tool call against what you said, before it runs. Powered by TypeSafe Jev.  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[AskTheWay/dsh-jev-interceptor](https://github.com/AskTheWay/dsh-jev-interceptor)** - ⚡ Millisecond System-1 judgement for every tool call in DeepSeek Harness — Jev-powered risk classification & evidence-gated auto-approval. Fail-closed by construction. dsh 生态第一个 System-1 决策插件  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[ismaelsoilet/jev-harness](https://github.com/ismaelsoilet/jev-harness)** - Zero-dependency System One decision harness: 5 semantic gates saving frontier AI agent tokens on trivial errors & doom loops. Python + TypeScript + Rust. MCP-compatible.  
  <sub>7 stars · Python · MIT · updated 2026-09-25</sub>
- **[ItisShikhar/gg-friggin-ez](https://github.com/ItisShikhar/gg-friggin-ez)** - Fast, drop-in multilingual profanity and toxicity screener for Node.js, powered by System 1 models like TypeSafe AI Jev and Laya. Catches leetspeak, character spacing, and romanized profanity across languages including Kannada, Telugu, Tamil, Hindi, and Bengali. ~50-500ms latency.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[jackie-cqz/dsh-jev-plugin](https://github.com/jackie-cqz/dsh-jev-plugin)** - DeepSeek Harness plugin for TypeSafe Jev: typed decisions, configurable guardrails, and Web UI result cards.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[Charlyhno-eng/jev-document-classification](https://github.com/Charlyhno-eng/jev-document-classification)** - JEV Document Classification enables the rapid and cost-effective classification of text-based documents using AI, leveraging TypeSafe's "System One" model.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[zhangxaochen/dsh-jev](https://github.com/zhangxaochen/dsh-jev)** - Jev (System One decision model) plugin suite for DeepSeek Harness (dsh)  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[alexj11324/open-jev-approvals](https://github.com/alexj11324/open-jev-approvals)** - Binary approval gate for Codex and Claude Code — every intercepted tool call is reviewed by TypeSafe JEV and composed through a versioned local policy, with scoped authorization.  
  <sub>4 stars · Go · MIT · updated 2026-09-20</sub>
- **[DelvisorLabs/Pyro](https://github.com/DelvisorLabs/Pyro)** - Self-hosted prompt monitoring with System One Models  
  <sub>4 stars · TypeScript · updated 2026-09-23</sub>
- **[JabbaKadabra/SystemOneDotNet](https://github.com/JabbaKadabra/SystemOneDotNet)** - .NET client for TypeSafe System One (Jev) — typed questions in, typed answers with probabilities and confidence out. No prompt engineering, no output parsing.  
  <sub>4 stars · C# · MIT · updated 2026-09-21</sub>
- **[jkrup/jeveryword](https://github.com/jkrup/jeveryword)** - Text extraction with Jev: field extraction, PII detection and exact quotes, built on TypeSafe's Jev.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[Sur-Cai/macos-computer-use-kit](https://github.com/Sur-Cai/macos-computer-use-kit)** - AX-first computer use for AI agents on macOS with optional Jev (TypeSafe System One) semantic guards: calibrated target/input judgments before an irreversible action, decisions kept in code. Accessibility-tree targeting, window-scoped input, clipboard-safe paste, read-back verification. Ships a pip CLI, a pi package and a DeepSeek Harness plugin.  
  <sub>4 stars · Python · MIT · updated 2026-09-23</sub>
- **[AkashPriyadarshii/jev-scout](https://github.com/AkashPriyadarshii/jev-scout)** - Zero-hallucination open-source repo and crate scout powered by TypeSafe AI Jev System One scoring  
  <sub>3 stars · Rust · MIT · updated 2026-09-25</sub>
- **[godspede/construct-auto-classifier](https://github.com/godspede/construct-auto-classifier)** - Effect-based safety gate for AI coding agents' shell commands (OpenCode, Antigravity): fast structural rules, then TypeSafe's Jev or a chat model judges what a command does. Certified with Jev at zero dangerous commands allowed.  
  <sub>3 stars · TypeScript · Apache-2.0 · updated 2026-09-25</sub>
- **[vibe-with-me-tools/n8n-nodes-jev](https://github.com/vibe-with-me-tools/n8n-nodes-jev)** - Helper n8n community node for Jev by TypeSafe. Classify, route, and score text with questions you define, and get a probability for every answer so unsure items can go to review.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[979569650/dsh-typesafe](https://github.com/979569650/dsh-typesafe)** - TypeSafe Jev (System One decision model) as a decision layer for DeepSeek Harness: typed decisions, confidence-gated routing, a cost meter, and an automatic prompt-injection guard over untrusted tool results.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[CogFlux/opencode-jev-guard](https://github.com/CogFlux/opencode-jev-guard)** - OpenCode 2 plugin that sends every shell command (local or via FarHand) to TypeSafe's Jev and asks you first when it leaves files outside the project, installs software globally, changes global settings, is harmful or exposes private data  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[coo-quack/jev-pii-checker](https://github.com/coo-quack/jev-pii-checker)** - CLI that finds PII in text with TypeSafe Jev: presence, sensitivity, and located spans  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[dr-dimitru/claude-jev-plugin](https://github.com/dr-dimitru/claude-jev-plugin)** - TypeSafe Jev semantic guardrails for Claude Code  
  <sub>2 stars · TypeScript · BSD-3-Clause · updated 2026-09-22</sub>
- **[eugeniughelbur/jev-engineering](https://github.com/eugeniughelbur/jev-engineering)** - The decision layer for AI agents. Typed, calibrated decisions in ~400ms for two hundredths of a cent: gate tool calls, route models, rank options. With the 300-call injection test that found what breaks.  
  <sub>2 stars · Python · MIT · updated 2026-09-24</sub>
- **[fazlerocks/jev-adblock](https://github.com/fazlerocks/jev-adblock)** - Open-source AI ad blocker for Chrome. No filter lists: TypeSafe AI's Jev model decides what is an ad. Bring your own key.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[getexcited/stepwarden](https://github.com/getexcited/stepwarden)** - Every tool call your agent makes, checked before it runs. A Claude Code plugin that uses TypeSafe AI's Jev to verify each pending tool call against the session plan, then allows it, asks you, or blocks it. Proof of concept  
  <sub>2 stars · TypeScript · Apache-2.0 · updated 2026-09-18</sub>
- **[Gitmaxd/agent-seek](https://github.com/Gitmaxd/agent-seek)** - Agent Seek — precision web recall for agents. You.com discover + TypeSafe Jev ranking. MCP + REST. Live demo: https://agentseek.dev  
  <sub>2 stars · Python · MIT · updated 2026-09-23</sub>
- **[Jhonnyr97/JevGuard](https://github.com/Jhonnyr97/JevGuard)** - Claude Code + Codex CLI plugin that verifies the agent follows project rules through a System One (Jev) model  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[matthew004-web/heyreach-jev-bot](https://github.com/matthew004-web/heyreach-jev-bot)** - Signal-based LinkedIn outbound scoring for HeyReach, running on Jev (TypeSafe System One).  
  <sub>2 stars · Python · updated 2026-09-23</sub>
- **[omkarghugarkar007/actiongate-jev](https://github.com/omkarghugarkar007/actiongate-jev)** - Open-source Jev tool-calling authorization gateway for AI agents: deterministic policy, exact-action single-use permits, MCP and HTTP enforcement.  
  <sub>2 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[soderlind/jev-comment-triage](https://github.com/soderlind/jev-comment-triage)** - Async Jev-powered WordPress comment triage: background spam, scam/phishing, and toxicity moderation that keeps comment submission fast.  
  <sub>2 stars · PHP · updated 2026-09-18</sub>
- **[codaaiteam/jev-mcp](https://github.com/codaaiteam/jev-mcp)** - MCP server for Jev (TypeSafe AI's System One model) — give any agent typed, calibrated decisions: classify, score, check, gate risky tool calls. Try free: jevtypesafeai.com  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[h1code2/jev-x-blocker](https://github.com/h1code2/jev-x-blocker)** - No description provided.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[jev-ai/jev-api](https://github.com/jev-ai/jev-api)** - Jev AI  
  <sub>1 stars · HTML · updated 2026-09-21</sub>
- **[jiawei686/jev-screen-mcp](https://github.com/jiawei686/jev-screen-mcp)** - Single-purpose MCP server (one tool, one job): a content-moderation gate powered by TypeSafe Jev (System One decision model).  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[navidkashani/jev-guard](https://github.com/navidkashani/jev-guard)** - Spam protection for WordPress comments, reviews and Contact Form 7 using the Jev decision model (independent, unaffiliated)  
  <sub>1 stars · PHP · GPL-2.0 · updated 2026-09-22</sub>
- **[nexibeo/jev-organize](https://github.com/nexibeo/jev-organize)** - Throw in a pile of company files and get them classified and organized by department, type, sensitivity, date, counterparty and PII, with an index for AI agents. Powered by TypeSafe's Jev on OpenRouter (17¢ per 1,000 files). Zero-dependency Node CLI + Claude skill + Codex agent.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[prabhatpankaj/typesafe-POC](https://github.com/prabhatpankaj/typesafe-POC)** - No description provided.  
  <sub>1 stars · Python · updated 2026-09-21</sub>
- **[saembit/jeff-bot](https://github.com/saembit/jeff-bot)** - jeff, a Discord bot that is nothing but Jev decisions from TypeSafe, built with botbox  
  <sub>1 stars · Python · MIT · updated 2026-09-22</sub>
- **[Umbylicus/umby-jev-stack](https://github.com/Umbylicus/umby-jev-stack)** - Portable agent skill: TypeSafe Jev as a cheap code-review classifier (HTTP + optional jev-review MCP)  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[veronalabs/jev-guard](https://github.com/veronalabs/jev-guard)** - Spam protection for WordPress comments, reviews and Contact Form 7 using the Jev decision model (independent, unaffiliated)  
  <sub>1 stars · PHP · GPL-2.0 · updated 2026-09-22</sub>
- **[akras14/jevbro](https://github.com/akras14/jevbro)** - Command-line browser agent: Jev picks every action, a small LLM only writes text.  
  <sub>0 stars · TypeScript · Apache-2.0 · updated 2026-09-21</sub>
- **[aleksvega/jev-skill-router](https://github.com/aleksvega/jev-skill-router)** - Jev-powered skill router & security auditor for any AI agent (Codex, Claude Code, OpenCode, Hermes): ONE cheap decision per request tells the model WHICH skill to load; scans skill libraries for prompt injection & dangerous commands.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-24</sub>
- **[alsoleg89/jev-bouncer](https://github.com/alsoleg89/jev-bouncer)** - Claude Code plugin: a 3-cent bouncer for your agent's shell. Jev typed probabilities auto-allow routine commands, deny destructive ones, and flag prompt injection in tool results.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[andrest04/jev-lab](https://github.com/andrest04/jev-lab)** - A local Node lab for TypeSafe's Jev (System One): typed questions in, probabilities out. The API key never leaves your machine.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[apuravmanhas/chronos](https://github.com/apuravmanhas/chronos)** - A TypeScript decision runtime that wraps Jev's probabilistic AI outputs with strict deterministic guardrails and tamper-evident audit logs  
  <sub>0 stars · TypeScript · Apache-2.0 · updated 2026-09-24</sub>
- **[balewgize/jev-ticket-triage](https://github.com/balewgize/jev-ticket-triage)** - A small demo showing a cheaper way to route support tickets.  
  <sub>0 stars · Python · MIT · updated 2026-09-23</sub>
- **[bismawy/pi-jev-eye](https://github.com/bismawy/pi-jev-eye)** - Ultra-lean supervisor for Pi coding agent using local regex filters, verification state tracking, and TypeSafe Jev semantic gate  
  <sub>0 stars · TypeScript · updated 2026-09-24</sub>
- **[blacksinisterx/jev-guard](https://github.com/blacksinisterx/jev-guard)** - a security decision layer sitting between an AI agent and tool execution  
  <sub>0 stars · TypeScript · updated 2026-09-24</sub>
- **[cedrecs/jev-yarn](https://github.com/cedrecs/jev-yarn)** - An AI assisted storytelling party game.  Everyone submits a line to add to the shared story, the AI bot ("Jev") picks the winner, and the story continues to grow.  Everyone takes turns submitting a theme after each story.  Jev scores every finished story out of 100.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[celolopes/jev-dev-harness](https://github.com/celolopes/jev-dev-harness)** - Open-source developer harness and runtime safety toolkit for AI coding agents powered by TypeSafe AI / Jev  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[codaaiteam/jev-loop-detector](https://github.com/codaaiteam/jev-loop-detector)** - Catch an AI agent stuck in a loop — Jev grades each step progress/repeating/stuck/escalate. Single-file, no build. Use free: jevtypesafeai.com/tools/agent-loop-detector  
  <sub>0 stars · HTML · MIT · updated 2026-09-24</sub>
- **[danmana/jev-paints](https://github.com/danmana/jev-paints)** - Tell Jev what to paint and watch it happen, one gesture at a time. TypeSafe's Jev + p5.brush.  
  <sub>0 stars · TypeScript · updated 2026-09-22</sub>
- **[darrenli6/jev-block-ad](https://github.com/darrenli6/jev-block-ad)** - An open-source AI ad blocker for Chrome, built on TypeSafe AI's Jev model. No filter lists. Jev looks at each suspicious element and decides.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[imbilawork/jev-demo](https://github.com/imbilawork/jev-demo)** - Demonstrator for Jev, the typed-decision model: dashboard, CLI and Cloudflare Worker proxy  
  <sub>0 stars · HTML · updated 2026-09-22</sub>
- **[jason-allen-oneal/openclaw-plugin-typesafe-ai](https://github.com/jason-allen-oneal/openclaw-plugin-typesafe-ai)** - TypeSafe AI (Jev System One) plugin for OpenClaw - sub-100ms group triage, tool safety guardrails, compaction curation, and model routing  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[jev-ai/jev-model](https://github.com/jev-ai/jev-model)** - Jev AI  
  <sub>0 stars · HTML · updated 2026-09-21</sub>
- **[juanlentino/jev-comment-analysis](https://github.com/juanlentino/jev-comment-analysis)** - Backs the WordPress AI plugin's Comment Moderation with TypeSafe Jev, through Connector for TypeSafe Jev  
  <sub>0 stars · PHP · GPL-2.0 · updated 2026-09-20</sub>
- **[JularDepick/Jev-Examiner](https://github.com/JularDepick/Jev-Examiner)** - An AI content moderation workflow powered by the [TypeSafe/Jev model](https://typesafe.ai).  
  <sub>0 stars · JavaScript · Apache-2.0 · updated 2026-09-20</sub>
- **[mooshee/typesafe-jev-keys](https://github.com/mooshee/typesafe-jev-keys)** - Create and manage TypeSafe Jev API keys from your terminal.  
  <sub>0 stars · Python · MIT · updated 2026-09-22</sub>
- **[Muriel-Gasparini/ban4life](https://github.com/Muriel-Gasparini/ban4life)** - Autonomous anti-spam and moderation engine for WhatsApp groups powered by TypeSafe Jev System-1 judgment primitives and zero-latency two-tier defense.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[OmarAlaaeldein/jev-verifier-skill](https://github.com/OmarAlaaeldein/jev-verifier-skill)** - Fast 'System One' reflex for reasoning LLMs: typed probabilistic second opinions from Jev via OpenCode Zen, with PII-minimizing state redaction.  
  <sub>0 stars · MIT · updated 2026-09-21</sub>
- **[randilt/jev-policies](https://github.com/randilt/jev-policies)** - PoC: an AI Gateway guardrail policy for WSO2 API Platform, backed by TypeSafe AI's Jev model  
  <sub>0 stars · Go · updated 2026-09-23</sub>
- **[rashedInt32/jev-gates](https://github.com/rashedInt32/jev-gates)** - Six calibrated gates for Claude Code, judged by TypeSafe Jev: rules, scope, intent, done, claims, and commit honesty. Each one escalates, none ever approves.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-24</sub>
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
- **[vstrofago/jev-chat-moderator](https://github.com/vstrofago/jev-chat-moderator)** - Moderating live-stream chat in real time (ES/EN)  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[vstrofago/vigia](https://github.com/vstrofago/vigia)** - Moderating live-stream chat in real time (ES/EN)  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[WallerChen/jev-measured](https://github.com/WallerChen/jev-measured)** - Measured cost, latency and raw output from the live Jev API (TypeSafe AI System One model) across 8 use cases — reproducible  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[Wany-i/jev-decision-layer](https://github.com/Wany-i/jev-decision-layer)** - 把决策模型（typesafe/jev-1.13，经 OpenRouter 的 decisions 端点调用）封装成业务决策工具：注册表驱动，带置信度门控与硬约束。非官方项目。  
  <sub>0 stars · Python · MIT · updated 2026-09-18</sub>

### Infrastructure and tooling

- **[OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger)** - Open-source AI Trading OS, agent trading, and vibe trading, with Jev System One integration. Research, build Python strategies, backtest, and paper/live trade across crypto, stocks, and forex. Launch your own multi-tenant trading SaaS with built-in user management, billing, payments, and settlement.  
  <sub>12143 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[thruwire/foreman](https://github.com/thruwire/foreman)** - Software factory foreman based on TypeSafe's Jev model  
  <sub>558 stars · Python · MIT · updated 2026-09-24</sub>
- **[wy-coliney/jev-browser-use](https://github.com/wy-coliney/jev-browser-use)** - 5–10x faster browser operations: Jev clicks, Codex thinks and verifies. Built at EZCollegeApp.  
  <sub>503 stars · JavaScript · MIT · updated 2026-09-23</sub>
- **[notque/vexjoy-agent](https://github.com/notque/vexjoy-agent)** - VexJoy AI Agent with Jev Intelligent Routing - /do routes plain-English requests to the right specialist agent and gates the work with reviews, tests, and a learning loop.  
  <sub>425 stars · Python · MIT · updated 2026-09-25</sub>
- **[gargpratyush/jev-router](https://github.com/gargpratyush/jev-router)** - Route to the cheapest model in claude code for your task using jev-router  
  <sub>401 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[droidrun/mobile-jev](https://github.com/droidrun/mobile-jev)** - No description provided.  
  <sub>392 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[jkudish/jev-mcp](https://github.com/jkudish/jev-mcp)** - Fast, cheap, typed judgments from TypeSafe's Jev model, as MCP tools.  
  <sub>338 stars · JavaScript · MIT · updated 2026-09-24</sub>
- **[ekzhang/openjev-sglang](https://github.com/ekzhang/openjev-sglang)** - Jev-compatible API endpoint based on open models (prefill-only)  
  <sub>323 stars · Python · updated 2026-09-25</sub>
- **[itsmostafa/typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp)** - An mcp connector to evaluate anything fast and cheap. Give your AI agent direct access to typesafe ai's jev model and open weight models like laya  
  <sub>304 stars · Go · MIT · updated 2026-09-23</sub>
- **[sutro-sh/jev-align](https://github.com/sutro-sh/jev-align)** - Build calibrated AI Functions from human feedback using Jev and GEPA.  
  <sub>288 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[0xNatoshi/jev-codex-router](https://github.com/0xNatoshi/jev-codex-router)** - Per-turn model & reasoning routing for Codex, driven by Jev (TypeSafe System One): picks the model, thinking depth and speed mode for every turn.  
  <sub>272 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[jkudish/jev-browser](https://github.com/jkudish/jev-browser)** - Browser use using Typesafe's Jev model  
  <sub>266 stars · JavaScript · MIT · updated 2026-09-24</sub>
- **[dbreunig/building-with-jev-skill](https://github.com/dbreunig/building-with-jev-skill)** - A skill for writing and improving programs that call Jev, TypeSafe's System One model  
  <sub>133 stars · updated 2026-09-17</sub>
- **[Dicklesworthstone/skillranker](https://github.com/Dicklesworthstone/skillranker)** - Rust CLI powered by Jev from TypeSafe.ai that ranks agent skills for the next step using live session context. Includes Claude Code hooks, structured JSON, abstention, and local feedback. Requires a TypeSafe API key.  
  <sub>120 stars · Rust · updated 2026-09-25</sub>
- **[keltokhy/jgrep](https://github.com/keltokhy/jgrep)** - grep, but the pattern is a description. Filters lines by meaning with TypeSafe's Jev decision model: ~200 ms and a thousandth of a cent per line.  
  <sub>99 stars · Python · MIT · updated 2026-09-24</sub>
- **[w3cj/jev-chat](https://github.com/w3cj/jev-chat)** - A tool calling chat bot built with Jev and no LLM.  
  <sub>96 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[pithings/advocaat](https://github.com/pithings/advocaat)** - A small, type-safe client for asking AI questions about your data, powered by TypeSafe Jev.  
  <sub>92 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[libingzheren/Jev-Mem](https://github.com/libingzheren/Jev-Mem)** - Jev-Mem: System-One Controlled Agentic Memory  
  <sub>89 stars · Python · MIT · updated 2026-09-22</sub>
- **[Ying-Kai-Liao/jev-browser](https://github.com/Ying-Kai-Liao/jev-browser)** - Browser automation where an LLM plans and Jev (Typesafe System One) decides. Library, CLI and MCP server.  
  <sub>86 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[socai-io/jev-social](https://github.com/socai-io/jev-social)** - Jev × socai turns a social research question into real Instagram, TikTok, and LinkedIn evidence plus a source-linked report.  
  <sub>79 stars · JavaScript · MIT · updated 2026-09-25</sub>
- **[AkashPriyadarshii/jev-seo](https://github.com/AkashPriyadarshii/jev-seo)** - jev-seo: Rust SEO and GEO CLI plus MCP server for coding agents: 50-rule audits, live crawls, GEO scores, rank drift, CI gates. MIT, zero subscription.  
  <sub>70 stars · Rust · MIT · updated 2026-09-25</sub>
- **[sharziki/semdecide](https://github.com/sharziki/semdecide)** - Typed semantic decisions for Unix pipelines and CI, powered by TypeSafe AI Jev.  
  <sub>62 stars · Python · MIT · updated 2026-09-16</sub>
- **[iamaamir/system-one](https://github.com/iamaamir/system-one)** - Provider-neutral System One runtime for TypeScript and Pi  
  <sub>57 stars · TypeScript · updated 2026-09-25</sub>
- **[mizchi/jev-playground](https://github.com/mizchi/jev-playground)** - No description provided.  
  <sub>56 stars · TypeScript · updated 2026-09-24</sub>
- **[andududu/jeview](https://github.com/andududu/jeview)** - An unofficial local visualizer for Jev (TypeSafe): a live view of every call your code makes. Not affiliated with TypeSafe AI.  
  <sub>53 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[burnigtm/jev-mcp](https://github.com/burnigtm/jev-mcp)** - MCP server that puts TypeSafe Jev on the coding loop in Cursor, Codex, and any MCP client  
  <sub>53 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[TheoOliveira/pi-jev](https://github.com/TheoOliveira/pi-jev)** - Semantic tool routing and typed System One decisions for the Pi coding agent using TypeSafe Jev  
  <sub>50 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[yusukebe/hono-jev-router](https://github.com/yusukebe/hono-jev-router)** - Route HTTP requests by meaning. A semantic router for Hono powered by Jev.  
  <sub>50 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[peterfriese/jev-foundation-models](https://github.com/peterfriese/jev-foundation-models)** - A lightweight, native Swift 6 bridge integrating TypeSafe AI's Jev System One decision model into Apple's Foundation Models framework.  
  <sub>45 stars · Swift · Apache-2.0 · updated 2026-09-24</sub>
- **[tacticocc/Jevbridge](https://github.com/tacticocc/Jevbridge)** - ACP and MCP adapter that bridges TypeSafe Jev with any LLM — computer use and typed decisions alongside Codex, Claude, Grok, and OpenCode.  
  <sub>43 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[NevaMind-AI/JevTown](https://github.com/NevaMind-AI/JevTown)** - jev based AI town simulation  
  <sub>36 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[nico-martin/open-jev](https://github.com/nico-martin/open-jev)** - open-jev is a browser-focused TypeScript library for typed decisions: one piece of text (the state) plus any number of typed questions go in, and one forward pass returns a calibrated probability distribution per question. Nothing is generated, so an answer is always one of the options you provided.  
  <sub>35 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[win4r/jev-skill-suggester](https://github.com/win4r/jev-skill-suggester)** - 用 TypeSafe Jev 推荐已安装 Skill / Bounded installed-skill recommendations with TypeSafe Jev. Python CLI, Codex skill, bilingual docs and live examples.  
  <sub>33 stars · Python · MIT · updated 2026-09-19</sub>
- **[davila7/jev-explained](https://github.com/davila7/jev-explained)** - Jev Explained  
  <sub>31 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[kyegomez/open-jev](https://github.com/kyegomez/open-jev)** - an open-source, from-first-principles reconstruction of the ideas behind TypeSafe AI's Jev, written in pytorch  
  <sub>28 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[shitianfang/jev-use](https://github.com/shitianfang/jev-use)** - Claude Code / Codex / pi plugin that hands agent steps needing no text output to Jev (TypeSafe's judgment model) — measured p50 ~230 ms and ~$0.02 per 1,000 judgments, with typed escalation back to the LLM  
  <sub>27 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[AkashPriyadarshii/jev-superpowers](https://github.com/AkashPriyadarshii/jev-superpowers)** - Systematic software development framework for AI coding agents upgraded with TypeSafe Jev System One typed decisions  
  <sub>24 stars · HTML · MIT · updated 2026-09-25</sub>
- **[blakestone-x/jev-mcp](https://github.com/blakestone-x/jev-mcp)** - MCP server for TypeSafe Jev: typed classify, score, check, match and screen for any agent, with confidence on every answer  
  <sub>23 stars · Python · MIT · updated 2026-09-16</sub>
- **[keltokhy/jsort](https://github.com/keltokhy/jsort)** - sort by meaning: order lines along a plain-English dimension, from pairwise comparisons judged by TypeSafe's Jev model  
  <sub>23 stars · Python · MIT · updated 2026-09-24</sub>
- **[6Mikao9/jev-native-agent-with-extended-options](https://github.com/6Mikao9/jev-native-agent-with-extended-options)** - Research design for a Jev-native agent system:enable more options than jev provided with virtulization and paging, tool integration, external helper logits Top-k proposals with Jev-controlled fallback ,decision-aware hierarchical memory, and dependency-aware replanning.  
  <sub>22 stars · Python · updated 2026-09-24</sub>
- **[Brainwires/jevwire](https://github.com/Brainwires/jevwire)** - Jev decision layer for agents: MCP server, embeddable DecisionModel library, and an escalate-only Claude Code plugin (TypeSafe AI's Jev)  
  <sub>20 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[Eriskii/ErisLint](https://github.com/Eriskii/ErisLint)** - Rust linter powered by configurable Jev rules, with a VS Code extension.  
  <sub>20 stars · Rust · AGPL-3.0 · updated 2026-09-18</sub>
- **[FrancoisChastel/jev-code](https://github.com/FrancoisChastel/jev-code)** - Jev, TypeSafe's System One classifier, as a tool inside Claude Code, Codex, Pi, and OpenCode: typed classify, check, score, rank, and ask, plus one-command setup.  
  <sub>20 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[mizchi/jev-test-filter](https://github.com/mizchi/jev-test-filter)** - Score every test against a git diff with Jev, and emit the filter arguments vitest, node:test, Playwright, cargo test and go test already understand  
  <sub>20 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[GodsBoy/jev-agent-skill-router](https://github.com/GodsBoy/jev-agent-skill-router)** - Typed, confidence-aware agent skill routing with TypeSafe Jev.  
  <sub>18 stars · Python · MIT · updated 2026-09-16</sub>
- **[jiawei686/jev-ultrafast-mcp](https://github.com/jiawei686/jev-ultrafast-mcp)** - Hand a whole browser task off in one call: a decision model drives the page server-side, so a flow costs one call, not a turn per click. Ref-based element tables, code-checked assertions, zero-model macro replay, over the Chrome DevTools Protocol.  
  <sub>18 stars · Python · MIT · updated 2026-09-23</sub>
- **[wd041216-bit/zero-api-key-web-search](https://github.com/wd041216-bit/zero-api-key-web-search)** - Jev-powered search infrastructure for AI agents: zero API keys, MCP-ready, LLM-context aware, with local neural evidence verification.  
  <sub>18 stars · Python · MIT · updated 2026-09-21</sub>
- **[csskrtao/jev-to-answer](https://github.com/csskrtao/jev-to-answer)** - 答案之书jev  
  <sub>17 stars · JavaScript · updated 2026-09-23</sub>
- **[utk2103/jev-studio](https://github.com/utk2103/jev-studio)** - if you're experimenting with jev it will be easier from here  
  <sub>16 stars · Python · MIT · updated 2026-09-24</sub>
- **[bgivenb/flick-computer-use](https://github.com/bgivenb/flick-computer-use)** - Fast browser and macOS computer use for MCP agents. Local execution, TypeSafe Jev decisions, verified outcomes.  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[trungdq88/jev-tetris](https://github.com/trungdq88/jev-tetris)** - Jev play Tetris in real-time against other AI models  
  <sub>15 stars · JavaScript · updated 2026-09-21</sub>
- **[DECRUX9812/typesafe-skill-router](https://github.com/DECRUX9812/typesafe-skill-router)** - TypeSafe (Jev) skill routing for Hermes Agent: names the one skill worth loading, before the model call. Opt-in, stdlib only, ~$0.001 per routed turn.  
  <sub>14 stars · Python · MIT · updated 2026-09-21</sub>
- **[Eniip/jev-game-tools](https://github.com/Eniip/jev-game-tools)** - No description provided.  
  <sub>14 stars · Python · updated 2026-09-19</sub>
- **[mejiasd3v/pi-jev-router](https://github.com/mejiasd3v/pi-jev-router)** - Automatic model routing for Pi using TypeSafe's Jev through Vercel AI Gateway  
  <sub>14 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[tumf/jev-cli](https://github.com/tumf/jev-cli)** - Small dependency-free CLI for TypeSafe Jev  
  <sub>14 stars · Python · MIT · updated 2026-09-23</sub>
- **[Ice-Hazymoon/jevlint](https://github.com/Ice-Hazymoon/jevlint)** - Semantic lint rules for the code-review questions a deterministic linter can't express  
  <sub>13 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[kylemclaren/jevql](https://github.com/kylemclaren/jevql)** - Semantic SQL for Postgres, powered by Jev  
  <sub>13 stars · Go · MIT · updated 2026-09-19</sub>
- **[mode-io/vllm-jev](https://github.com/mode-io/vllm-jev)** - Native vLLM serving for Jev decision models  
  <sub>13 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[prismhq/jev-router](https://github.com/prismhq/jev-router)** - Open-source LLM router that uses TypeSafe's Jev to pick a model, on top of LiteLLM  
  <sub>13 stars · Python · MIT · updated 2026-09-17</sub>
- **[huntedman/JevLint](https://github.com/huntedman/JevLint)** - Configurable semantic linting powered by Jev, with file-level NOUL judgments and a magic-strings plugin.  
  <sub>12 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[iamtoomas/JevLint](https://github.com/iamtoomas/JevLint)** - Configurable semantic linting powered by Jev, with file-level NOUL judgments and a magic-strings plugin.  
  <sub>12 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[win4r/pi-jev-router](https://github.com/win4r/pi-jev-router)** - Task-boundary model routing for Pi Coding Agent, powered by TypeSafe Jev. Conservative policies, exact caching, and observable failover.  
  <sub>12 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[anyfilter/anyfilter](https://github.com/anyfilter/anyfilter)** - Hide anything you don't want to see on any site. X for now, more to come.  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[forvela/jev-agent-browser](https://github.com/forvela/jev-agent-browser)** - Fast, bounded browser agents powered by Jev and agent-browser — typed actions, research, classification, and safe orchestration.  
  <sub>11 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[southpolesteve/probably](https://github.com/southpolesteve/probably)** - A small programming language for LLM workflows, powered by Jev.  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[yijunyu/jev-rs](https://github.com/yijunyu/jev-rs)** - System One judgments (noul/choice/score) from any LLM in one prefill — a Rust, Jev-compatible /v1/systemone engine  
  <sub>11 stars · Rust · Apache-2.0 · updated 2026-09-24</sub>
- **[AgriciDaniel/gatekeeper](https://github.com/AgriciDaniel/gatekeeper)** - Routes each request to the right AI agent or skill before your AI picks one. Your rules decide what code can; Jev (TypeSafe) makes the typed call. Installs as Claude Code hooks.  
  <sub>10 stars · Python · MIT · updated 2026-09-23</sub>
- **[okooo5km/jev](https://github.com/okooo5km/jev)** - Typed decisions from the shell: an unofficial stdlib-Python CLI and Agent Skill for TypeSafe's Jev model, via the TypeSafe API (default) or OpenRouter. Yes/no, choice and ordinal scores with calibrated probabilities, semantic grep and batch mode.  
  <sub>10 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[win4r/jev-security-scan](https://github.com/win4r/jev-security-scan)** - 使用 TypeSafe Jev 审查 Skill 与 MCP 可疑行为 | Review Agent Skills and MCP code with Jev, static evidence, and explicit coverage gaps  
  <sub>10 stars · Python · MIT · updated 2026-09-19</sub>
- **[jekhov/jekhov](https://github.com/jekhov/jekhov)** - Policy-bounded Jev target selection for resilient Playwright workflows  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jerryfane/omp-jev-compaction](https://github.com/jerryfane/omp-jev-compaction)** - Verbatim Jev-scored context reduction for omp, over TypeSafe or OpenRouter  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[matthewp/flue-jev-demo](https://github.com/matthewp/flue-jev-demo)** - Flue agent routing with TypeSafe Jev through Cloudflare AI Gateway  
  <sub>9 stars · TypeScript · updated 2026-09-18</sub>
- **[Mushroom-Systems/lichen](https://github.com/Mushroom-Systems/lichen)** - A local, API-compatible replacement for Jev, TypeSafe's System One model  
  <sub>9 stars · Python · MIT · updated 2026-09-24</sub>
- **[rajdhakad9826/jev-router](https://github.com/rajdhakad9826/jev-router)** - LLM router that picks the cheapest model capable of handling a query, using TypeSafe's Jev for fast classification instead of an LLM call.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[reachjalil/jev-tree](https://github.com/reachjalil/jev-tree)** - Recursive Jev choice over a taxonomy. Select from more than 255 options without breaking TypeSafe Jev's choice cap.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[redwolf2019/laya-rs](https://github.com/redwolf2019/laya-rs)** - Pure Rust runtime + HTTP server for Laya System-1 models，Linux / CPU-first / multilingual / ONNX Runtime  
  <sub>9 stars · Rust · MIT · updated 2026-09-24</sub>
- **[cristianoliveira/jeq](https://github.com/cristianoliveira/jeq)** - What happens when jev meets jq? Intelligence you can pipe for quick experimentation and scripts  
  <sub>8 stars · Go · MIT · updated 2026-09-25</sub>
- **[fatelei/jev-compact](https://github.com/fatelei/jev-compact)** - Jev-scored context compaction for OpenAI Codex CLI — scores every tool call before compaction and restores critical tool outputs verbatim after it  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[himomohi/aside-jev](https://github.com/himomohi/aside-jev)** - Aside agents decide with TypeSafe Jev (System One: Choice/Score/Noul). Not a Cua binding — Jev is the model, Aside is the browser runtime.  
  <sub>8 stars · Python · MIT · updated 2026-09-21</sub>
- **[jackbarunz/jev-tool-router](https://github.com/jackbarunz/jev-tool-router)** - Jev-powered MCP tool routing for Codex  
  <sub>8 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[Nyarlathoteppppp/pi-jev-context](https://github.com/Nyarlathoteppppp/pi-jev-context)** - Model performance first. Token savings second. A Pi extension with freshness-aware read dedupe, Jev log filtering, and searchable verbatim recall. Keeps existing message history intact.  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[rashedInt32/jev-mcp](https://github.com/rashedInt32/jev-mcp)** - MCP server exposing TypeSafe Jev as typed, calibrated judgment tools: classify, score, check, batched ask. Ships as a Claude Code plugin.  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[romanmeclazcke/codex-sift](https://github.com/romanmeclazcke/codex-sift)** - Route each Codex turn to the cheapest model that can handle it, judged by TypeSafe Jev.  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[sufianetaouil/every](https://github.com/sufianetaouil/every)** - Ask a yes/no question of every function in a codebase. Ranked answers in seconds, for cents. Grep whose pattern is a question, powered by TypeSafe Jev.  
  <sub>8 stars · Python · MIT · updated 2026-09-17</sub>
- **[karanb192/jev-architect](https://github.com/karanb192/jev-architect)** - Find, design, and evaluate TypeSafe Jev decision loops.  
  <sub>7 stars · HTML · MIT · updated 2026-09-20</sub>
- **[KiritoKing/midscene-jev-runner](https://github.com/KiritoKing/midscene-jev-runner)** - Community-maintained JEV runner integration for Midscene Test  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[rawwerks/one-system](https://github.com/rawwerks/one-system)** - Use local and hosted classifiers aka decision models aka Jev-like models, all through a single TypeSafe API  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[riteshverma/s18](https://github.com/riteshverma/s18)** - Introducing s18 — an open-source agent runtime & orchestration framework for real AI systems.  ⚡ Multi-agent workflows   ⚡ Real-time streaming state   ⚡ Scheduling + automation   ⚡ MCP tool integrations   ⚡ Local-first or cloud models   ⚡ Observability built in  
  <sub>7 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[AIsa-team/worth-replying](https://github.com/AIsa-team/worth-replying)** - Worth Replying by AIsa  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[andrelandgraf/safer-with-jev](https://github.com/andrelandgraf/safer-with-jev)** - Neon Function proxy for the Neon AI Gateway with TypeSafe Jev routing.  
  <sub>6 stars · TypeScript · updated 2026-09-18</sub>
- **[blazejkustra/softlint](https://github.com/blazejkustra/softlint)** - Enforce rules a linter can't. A GitHub Action that reviews PRs against plain-English rules, judged by Jev.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[erkamyaman/jev-enforce](https://github.com/erkamyaman/jev-enforce)** - 📏 Claude Code plugin that makes Claude follow your AGENTS.md: every reply and edit checked by TypeSafe Jev ✅  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[EugeneBoondock/jevsql](https://github.com/EugeneBoondock/jevsql)** - SQL with natural-language predicates, powered by TypeSafe's Jev. Filter, rank, classify and score rows by meaning — batched, cached and cost-guarded.  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[Friedjof/jev-mobile](https://github.com/Friedjof/jev-mobile)** - Fast structured Android control loops with TypeSafe Jev and Mobile MCP  
  <sub>6 stars · Python · MIT · updated 2026-09-18</sub>
- **[jcressler/jev-codex-token-saver](https://github.com/jcressler/jev-codex-token-saver)** - Experimental Jev evidence selection for token-efficient Codex investigations  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[kotoba-lang/typed-decisions](https://github.com/kotoba-lang/typed-decisions)** - Jev-shaped typed-decision model (state + Choice/Score/Noul questions -> calibrated probabilities, one pass) on ModernBERT / DeBERTa / LLaDA-MoE, with measured latency, accuracy, calibration and training cost  
  <sub>6 stars · Python · updated 2026-09-22</sub>
- **[leonaaardob/fast-dev-compaction](https://github.com/leonaaardob/fast-dev-compaction)** - Codex plugin: verbatim Jev-guided context restoration around session compaction. Port of tamaratran/fast-jev-compaction to Codex lifecycle hooks.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[nrdz-labs/fast-jev-opencode](https://github.com/nrdz-labs/fast-jev-opencode)** - Jev-scored context pruning for OpenCode: drops stale tool calls and truncates bulky results on the outgoing request — fail-open, cache-backed, configurable live. Port of fast-jev-compaction to the V2 context hook.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[stilesja/jev-ivr](https://github.com/stilesja/jev-ivr)** - Building an IVR using Jev as classifier.  
  <sub>6 stars · TypeScript · updated 2026-09-25</sub>
- **[acoyfellow/predict](https://github.com/acoyfellow/predict)** - A small browser signal for the next useful step on a website.  
  <sub>5 stars · Svelte · updated 2026-09-20</sub>
- **[ai-suifeng/comment-jev-chrome](https://github.com/ai-suifeng/comment-jev-chrome)** - No description provided.  
  <sub>5 stars · JavaScript · updated 2026-09-18</sub>
- **[da-vinci-noob/pi-jev-model-router](https://github.com/da-vinci-noob/pi-jev-model-router)** - Route pi prompts to task-appropriate model tiers with TypeSafe Jev typed judgments. Budget-aware, with automatic fallback.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[daniel-farina/nitro](https://github.com/daniel-farina/nitro)** - Grok Build with TypeSafe Jev routing tool selection once per turn: 22 to 40% cheaper on the same tasks  
  <sub>5 stars · Rust · updated 2026-09-20</sub>
- **[dereknguyen269/jev-harness](https://github.com/dereknguyen269/jev-harness)** - No description provided.  
  <sub>5 stars · Go · updated 2026-09-24</sub>
- **[HyunjunJeon/jev-judgment](https://github.com/HyunjunJeon/jev-judgment)** - Agent Skill: send closed coding-agent judgments to TypeSafe Jev  
  <sub>5 stars · Python · MIT · updated 2026-09-17</sub>
- **[Peu77/JevFind](https://github.com/Peu77/JevFind)** - Fast semantic code search powered by Jev. Find the relevant files, line ranges, and snippets  
  <sub>5 stars · Rust · MIT · updated 2026-09-20</sub>
- **[spoonnotfound/soupbase](https://github.com/spoonnotfound/soupbase)** - Jev x 海龟汤  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[sumleo/prompt2jev](https://github.com/sumleo/prompt2jev)** - Agent skill and CLI that turn natural language, an LLM prompt, or the code that runs one into a TypeSafe Jev decision: typed state, Choice/Score/Noul questions, and a runnable script  
  <sub>5 stars · Python · MIT · updated 2026-09-21</sub>
- **[TheCoder30ec4/model_router_python](https://github.com/TheCoder30ec4/model_router_python)** - Route every LLM call to the cheapest model that can actually do the job. Filters by context window, output limit and cost budget using live prices, then lets Jev pick the best model across OpenAI, Anthropic, Google and more. Zero dependencies.  
  <sub>5 stars · Python · MIT · updated 2026-09-25</sub>
- **[valentynkit/jev-skip](https://github.com/valentynkit/jev-skip)** - YouTube sponsor skipper that reads the captions and decides at watch time: a probability heatmap on the seek bar, no crowd database  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[win4r/jev-humanize-writing](https://github.com/win4r/jev-humanize-writing)** - Jev 辅助去 AI 味写作：保留事实、归因与作者语气 | Natural prose editing with Jev-assisted fidelity review  
  <sub>5 stars · Python · MIT · updated 2026-09-19</sub>
- **[y0usaf/typesafe-cli](https://github.com/y0usaf/typesafe-cli)** - Ask Jev typed questions from the shell: noul, choice, and score answers as numbers, not prose  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[yatharth1706/inbox-triage](https://github.com/yatharth1706/inbox-triage)** - No description provided.  
  <sub>5 stars · TypeScript · updated 2026-09-20</sub>
- **[ZJU-REAL/CUA-JEV](https://github.com/ZJU-REAL/CUA-JEV)** - Jev for Computer Use  
  <sub>5 stars · Python · updated 2026-09-24</sub>
- **[455-dIAO/windows-save-token-jev-setup](https://github.com/455-dIAO/windows-save-token-jev-setup)** - Windows Codex Skill：通过 npx 或 Git 安装，安全配置 save-token-jev 的 PreCompact/SessionStart Hooks，并提供信任、原生压缩与旧内容隔离验证。  
  <sub>4 stars · PowerShell · updated 2026-09-21</sub>
- **[aaronshaf/opencode-jev-orchestrator](https://github.com/aaronshaf/opencode-jev-orchestrator)** - Keeps OpenCode on a cheap sticky model for warm cache; Jev escalates hard turns to stronger subagents.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[abhishekashokvkumar/jev-mcp-dispatcher](https://github.com/abhishekashokvkumar/jev-mcp-dispatcher)** - Natural-language MCP tool dispatcher powered entirely by TypeSafe's Jev — no general-purpose LLM. Discovers a simple MCP server's tool signatures at runtime and uses Jev's typed primitives (Choice/Noul) to pick the right tool and extract its arguments straight out of the sentence.  
  <sub>4 stars · Python · updated 2026-09-18</sub>
- **[Adkid-Zephyr/work-with-jev](https://github.com/Adkid-Zephyr/work-with-jev)** - 用 Jev 把飞书工作消息分成四类：紧急、待办、值得看、暂时略过。A minimal, local-first message classifier with extensible workspace adapters.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[AkashPriyadarshii/jev-git](https://github.com/AkashPriyadarshii/jev-git)** - Sub-second Git pre-commit & pre-push semantic reflex gate powered by TypeSafe AI Jev  
  <sub>4 stars · Rust · MIT · updated 2026-09-25</sub>
- **[alxcrt/is-odd-jev](https://github.com/alxcrt/is-odd-jev)** - No description provided.  
  <sub>4 stars · JavaScript · updated 2026-09-17</sub>
- **[ansidium/jev-codex-bridge](https://github.com/ansidium/jev-codex-bridge)** - Model and reasoning routing for Codex Desktop and CLI, with a Windows service and validated updates  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-23</sub>
- **[BeLazy167/typesafe-mod](https://github.com/BeLazy167/typesafe-mod)** - Claude Code mod that routes decisions to TypeSafe's Jev model: ranks installed skills per prompt, and answers the agent's own this-or-that questions when confident.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[carlosedm10/agi-jev-containment](https://github.com/carlosedm10/agi-jev-containment)** - AGI JEV Detection — local AI agent monitor: chain-level malicious-agent detection (TypeSafe Jev + Sentinel), escalate-only L1–L5 containment, Neo4j forensics, AngryRobot dashboard. HackSpain 2026.  
  <sub>4 stars · Python · updated 2026-09-21</sub>
- **[fajarhide/askgrep](https://github.com/fajarhide/askgrep)** - grep for the questions you cannot write as a pattern. Reads every function instead of sampling a few. Powered by Jev, TypeSafe AI's System One model.  
  <sub>4 stars · Rust · Apache-2.0 · updated 2026-09-22</sub>
- **[geilt/typesafe-cli](https://github.com/geilt/typesafe-cli)** - CLI and agent skill for TypeSafe System One (Jev): typed Choice, Score, and Noul judgments.  
  <sub>4 stars · Python · updated 2026-09-17</sub>
- **[huangserva/hipporoute-jev-codex](https://github.com/huangserva/hipporoute-jev-codex)** - 面向 OpenAI Codex 的边界模型路由器，由 TypeSafe Jev 决策：只在线程开始、新轮次、压缩和子 agent 派生时选择模型与思考深度，工具循环内绝不切换，因此不会打掉 prompt 缓存。  
  <sub>4 stars · Python · MIT · updated 2026-09-21</sub>
- **[KantaHayashiAI/jev-does-not-play-dice](https://github.com/KantaHayashiAI/jev-does-not-play-dice)** - Experiments on Jev’s probability calibration, uncertainty reporting, and forecast probability preservation.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-25</sub>
- **[lirantal/discoprint](https://github.com/lirantal/discoprint)** - Classify an artist's discography by theme, mood, and lyrical complexity with Jev (TypeSafe AI), and view it as a colorful terminal dashboard  
  <sub>4 stars · JavaScript · Apache-2.0 · updated 2026-09-23</sub>
- **[Mrlyk/jev-browser](https://github.com/Mrlyk/jev-browser)** - Browser automation CLI for AI agents, powered by the Jev model's millisecond decisions and near-zero inference costs  
  <sub>4 stars · Rust · Apache-2.0 · updated 2026-09-21</sub>
- **[nourhelmi/pi-jev-compaction](https://github.com/nourhelmi/pi-jev-compaction)** - Automatic Jev context clearing for Pi. Keep the conversation, prune stale tool output, retrieve originals without rerunning commands.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[rmosleydb/jev-smart-router](https://github.com/rmosleydb/jev-smart-router)** - JEV Smart Router — a Databricks App that uses TypeSafe JEV to pick which model answers each message, then runs inference on the chosen Databricks Foundation Model API endpoint.  
  <sub>4 stars · Python · MIT · updated 2026-09-22</sub>
- **[satviksinha/jev-model-router](https://github.com/satviksinha/jev-model-router)** - Model router for Claude Code using Jev  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[tonyzdev/pijev](https://github.com/tonyzdev/pijev)** - PiJev: a terminal coding agent with Jev in the loop — Jev ranks the repository's files before the first call, picks skills and triages failures; your coding model writes the code. Built on Pi.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[Wang-auspicious/codex-jev-compaction](https://github.com/Wang-auspicious/codex-jev-compaction)** - Jev-powered context curation for Codex. Build compact, traceable handoff context through native plugins and skills.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[Waxmell114514/jev-compaction](https://github.com/Waxmell114514/jev-compaction)** - A context compactor that can only score, never write — so an agent's memory can't hold a fact the transcript never contained. Working demo, runs offline.  
  <sub>4 stars · Python · MIT · updated 2026-09-24</sub>
- **[0x7067/jev-browse](https://github.com/0x7067/jev-browse)** - Browser automation with Jev (TypeSafe) as decision model  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-24</sub>
- **[AlexPEClub/Jev-Model-Router-Claude-Code](https://github.com/AlexPEClub/Jev-Model-Router-Claude-Code)** - No description provided.  
  <sub>3 stars · Shell · updated 2026-09-24</sub>
- **[arczhi/jet](https://github.com/arczhi/jet)** - A TypeSafe-native (Jev) coding agent built on Recursive LLM Context Decomposition (RLCD), with a native macOS client  
  <sub>3 stars · Python · updated 2026-09-22</sub>
- **[ariel-frischer/jevkit](https://github.com/ariel-frischer/jevkit)** - Fast Rust CLI for TypeSafe Jev: typed decisions, offline linting before you pay  
  <sub>3 stars · Rust · MIT · updated 2026-09-25</sub>
- **[Arpit-Khandelwal/jev-linkedin-slop-filter](https://github.com/Arpit-Khandelwal/jev-linkedin-slop-filter)** - Slams a BAIT, CORP or BRAG stamp onto LinkedIn engagement-bait, judged live by Jev (TypeSafe System One).  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[BetterZflyee/dsh-jev-adapter](https://github.com/BetterZflyee/dsh-jev-adapter)** - Use the Jev (System One) decision-model paradigm with any OpenAI-compatible LLM — no TypeSafe key required. A jev_decide tool for DeepSeek Harness (dsh).  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[bojansandhaus/jev-decisions](https://github.com/bojansandhaus/jev-decisions)** - Jev Decisions Plugin for Hermes (and other AI Agents): tool risk reviews, human approval recommendations, evidence checks, a local decision journal, and local decision supervision.  
  <sub>3 stars · Python · MIT · updated 2026-09-22</sub>
- **[boldbug1/jev-triage](https://github.com/boldbug1/jev-triage)** - Message triage CLI in Go, built on the Jev decision model from TypeSafe AI. Categorizes messages, scores urgency, and flags low-confidence ones for human review.  
  <sub>3 stars · Go · MIT · updated 2026-09-20</sub>
- **[Chandler-Sun/chat2jev](https://github.com/Chandler-Sun/chat2jev)** - Convert legacy chat completion API request to Typesafe jev API  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[Charlyhno-eng/jev-codex-pilot](https://github.com/Charlyhno-eng/jev-codex-pilot)** - Smart Codex overlay with JEV model routing, context optimization & Kanban automation. Reduce tokens, keep control  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[davertor/jev-slop-guard](https://github.com/davertor/jev-slop-guard)** - Jev Slop Guard — a Chrome extension that scores and stamps AI slop on your X and LinkedIn feeds as you scroll  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[freepik-company/jev-mcp](https://github.com/freepik-company/jev-mcp)** - MCP server for typed decisions with Jev / System One via OpenRouter or TypeSafe  
  <sub>3 stars · Go · Apache-2.0 · updated 2026-09-21</sub>
- **[HaoxiangXia/fork-cast](https://github.com/HaoxiangXia/fork-cast)** - 零标签随性就餐决策工具，基于 Jev System 1 概率决策模型  
  <sub>3 stars · HTML · updated 2026-09-21</sub>
- **[harrymunro/decision-first](https://github.com/harrymunro/decision-first)** - Agent skill that spots bounded-judgment steps, tries a typed decision model (TypeSafe's Jev) first, and documents every attempt  
  <sub>3 stars · Python · MIT · updated 2026-09-18</sub>
- **[himomohi/jev-skill-router](https://github.com/himomohi/jev-skill-router)** - Keep skill catalogs outside the main LLM context. Jev selects relevant skills through one read-only MCP tool.  
  <sub>3 stars · Python · MIT · updated 2026-09-22</sub>

<sub>316 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Examples and templates

- **[jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader)** - One AI trade decision every Monad block. Jev on Kuru MON-USDC.  
  <sub>2393 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev)** - A nano replica of Jev: parallel decisions, dynamic candidates, and an end-to-end training pipeline.  
  <sub>2231 stars · Python · MIT · updated 2026-09-21</sub>
- **[kerpopule/hermes-jev-skills](https://github.com/kerpopule/hermes-jev-skills)** - Jev-powered model routing, memory, compaction, skill selection, computer and browser use for Hermes agents (also Claude Code and Codex)  
  <sub>805 stars · Python · MIT · updated 2026-09-23</sub>
- **[devagrawal09/jev-review](https://github.com/devagrawal09/jev-review)** - A staged code-review workflow and local dashboard built with TypeSafe Jev.  
  <sub>610 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[featherless-ai/simple-jev](https://github.com/featherless-ai/simple-jev)** - Turn any open model into a classifier/jev endpoint  
  <sub>530 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[Yinsongxu/LLM2Jev](https://github.com/Yinsongxu/LLM2Jev)** - Turn local language models into Jev-style structured decision models. Get results from text and images with prefill alone—no token-by-token decoding required.  
  <sub>328 stars · Python · Apache-2.0 · updated 2026-09-23</sub>
- **[ielab/llm-rankers](https://github.com/ielab/llm-rankers)** - Document Ranking with Large Language Models.  
  <sub>212 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[standardagents/jevpilot](https://github.com/standardagents/jevpilot)** - A playable Three.js driving simulator with Jev-powered autopilot  
  <sub>182 stars · JavaScript · updated 2026-09-17</sub>
- **[SiliconLabAI/OpenJev](https://github.com/SiliconLabAI/OpenJev)** - OpenSource Jev  
  <sub>134 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[sdras/jev-webmcp-extension](https://github.com/sdras/jev-webmcp-extension)** - A small extension that demos the combination of Jev x WebMCP  
  <sub>116 stars · JavaScript · Apache-2.0 · updated 2026-09-20</sub>
- **[mrnugget/jev-shell-history](https://github.com/mrnugget/jev-shell-history)** - Fish-style zsh history autosuggestions ranked by Jev (TypeSafe)  
  <sub>112 stars · TypeScript · updated 2026-09-18</sub>
- **[NanmiCoder/jev-arena](https://github.com/NanmiCoder/jev-arena)** - Jev 模型介绍与实测：通过 Choice / Score / Noul 将自然语言转为带类型的判断与概率，用于分类、评分和路由；支持与 DeepSeek 等模型对比评论打标、速度与结果，含 CSV/Excel 导入、原速回放与离线报告。  
  <sub>103 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[AgriciDaniel/jev-seo](https://github.com/AgriciDaniel/jev-seo)** - Live SEO audit for any website from one homepage URL, judged by Jev. PDF, XLSX and Markdown reports.  
  <sub>101 stars · Python · MIT · updated 2026-09-22</sub>
- **[virajbhartiya/laya-vs-jev](https://github.com/virajbhartiya/laya-vs-jev)** - Laya vs Jev: local MLX and hosted AI decisions playing T-Rex side by side, with live metrics and replay recording  
  <sub>99 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[savka777/jev-use](https://github.com/savka777/jev-use)** - Say it, and your Mac does it. A computer-use harness on Jev that reads the screen through Accessibility. Fast, no vision model  
  <sub>97 stars · Swift · MIT · updated 2026-09-21</sub>
- **[kevinbadi/jev-voice](https://github.com/kevinbadi/jev-voice)** - Talk to your Mac. Local whisper.cpp + one Jev (TypeSafe) call per command + macOS automation.  
  <sub>94 stars · Python · MIT · updated 2026-09-23</sub>
- **[ellipsis-dev/blink](https://github.com/ellipsis-dev/blink)** - Codebase search powered by Jev from @typesafe-ai  
  <sub>79 stars · TypeScript · updated 2026-09-16</sub>
- **[nbt4/rentalcore](https://github.com/nbt4/rentalcore)** - RentalCore — Full event rental management: jobs, devices, OCR invoice processing, M365 sync, DIN-5008 invoicing. Go + React.  
  <sub>70 stars · HTML · updated 2026-09-23</sub>
- **[Dimweaker/jev-libero](https://github.com/Dimweaker/jev-libero)** - Fine-grained robot control with Jev, physics previews, and configurable LIBERO tasks.  
  <sub>66 stars · Python · MIT · updated 2026-09-21</sub>
- **[Nisaka520/JevIntent](https://github.com/Nisaka520/JevIntent)** - 微信（FkWeChat 插件）：长按消息分析意图 / 情绪 / 回复姿态，只在本机弹提示，对方无感知  
  <sub>55 stars · Java · MIT · updated 2026-09-23</sub>
- **[1Panel-dev/laya-server](https://github.com/1Panel-dev/laya-server)** - A self-hosted API and web interface for Laya’s structured decision models, compatible with the TypeSafe Jev API format.  
  <sub>53 stars · TypeScript · Apache-2.0 · updated 2026-09-24</sub>
- **[EliaAlberti/jev-rules](https://github.com/EliaAlberti/jev-rules)** - Jev picks which of your rules apply to each prompt, so Claude only sees the ones that matter.  
  <sub>49 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[skeptrunedev/jev-recruiter](https://github.com/skeptrunedev/jev-recruiter)** - A Jev powered LinkedIn recruiting agent. Watch it browse relevant profiles, save links, and review evidence against your hiring brief.  
  <sub>49 stars · Python · MIT · updated 2026-09-19</sub>
- **[zhengxuyu/litjev](https://github.com/zhengxuyu/litjev)** - Turn any off-the-shelf LLM into a Jev -like decision layer  
  <sub>44 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[frankda/jev-poly-crypto-demo](https://github.com/frankda/jev-poly-crypto-demo)** - No description provided.  
  <sub>38 stars · TypeScript · updated 2026-09-23</sub>
- **[samdotmak/jev-recall](https://github.com/samdotmak/jev-recall)** - Retrieve by relevance, not resemblance: filter an AI assistant's memories with TypeSafe's Jev  
  <sub>37 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[OmniJev/PlayJev](https://github.com/OmniJev/PlayJev)** - 🚀🚀 A 0.8B JEV-like multimodal model playing GUI games directly from raw pixels.  
  <sub>36 stars · JavaScript · Apache-2.0 · updated 2026-09-24</sub>
- **[choxos/jev-reviewer](https://github.com/choxos/jev-reviewer)** - Data extraction for systematic reviews, quoted from the papers. Ask a trial report and its supplements your extraction form or a RoB 2, ROBINS-I, QUADAS-2 or TIDieR template; Jev points at the lines, every answer is a verbatim quote with its page, you check it and export the table. Files stay in your browser.  
  <sub>34 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[kyu1204/jgrep](https://github.com/kyu1204/jgrep)** - grep for what code does, not what it's called. Semantic code search powered by TypeSafe Jev.  
  <sub>34 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[altryne/jevify](https://github.com/altryne/jevify)** - An agent skill to discover TypeSafe Jev opportunities, design typed questions, and learn from recent community experiments.  
  <sub>33 stars · Python · MIT · updated 2026-09-21</sub>
- **[Bewinxed/jevgpt](https://github.com/Bewinxed/jevgpt)** - A chatbot built on a model that cannot generate text (TypeSafe AI's Jev, driven autoregressively)  
  <sub>29 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[chy4pro/jev-for-chrome](https://github.com/chy4pro/jev-for-chrome)** - Jev for Chrome: drives the tab you are looking at with TypeSafe Jev, a sub-second decision model. Community port of browser-use/jev-ultrafast, not affiliated with TypeSafe.  
  <sub>25 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[colliber/duckdb-jev](https://github.com/colliber/duckdb-jev)** - DuckDB extension: typed Jev answers as real SQL types  
  <sub>25 stars · C++ · MIT · updated 2026-09-18</sub>
- **[hotchpotch/jev-reranker](https://github.com/hotchpotch/jev-reranker)** - Jev-powered relevance filtering and reranking for RAG in Python.  
  <sub>24 stars · Python · MIT · updated 2026-09-21</sub>
- **[jlowin/vibecheck](https://github.com/jlowin/vibecheck)** - ✨✅ The easiest decisions your code will ever make.  
  <sub>22 stars · Python · updated 2026-09-24</sub>
- **[TypeSafeAI/typesafe-playground](https://github.com/TypeSafeAI/typesafe-playground)** - Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.  
  <sub>21 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[BorisLeMeec/jev](https://github.com/BorisLeMeec/jev)** - A claude code plugin for jev  
  <sub>18 stars · Go · MIT · updated 2026-09-18</sub>
- **[imohitmayank/jevfill](https://github.com/imohitmayank/jevfill)** - No description provided.  
  <sub>18 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[khordoo/jev-reflex-autonomy-lab](https://github.com/khordoo/jev-reflex-autonomy-lab)** - Real-time drone swarm autonomy simulation using Jev for fast System 1 reflex decisions and collision avoidance, with optional System 2 reasoning for strategic guidance  
  <sub>18 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[parth-kp/jev-mail-classifier](https://github.com/parth-kp/jev-mail-classifier)** - Classify your inbox with Jev (TypeSafe's System One model) — tag, move, flag, and notify, all config-driven.  
  <sub>18 stars · Python · MIT · updated 2026-09-20</sub>
- **[valentynkit/jev-belay](https://github.com/valentynkit/jev-belay)** - Claude Code Stop hook that blocks an unverified done: reads the transcript for evidence, asks Jev once, fails open on everything else  
  <sub>18 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[BoundaryML/feelings](https://github.com/BoundaryML/feelings)** - .feels() on anything — the AI if statement as a real, typed method. Jev + BAML.  
  <sub>17 stars · BAML · updated 2026-09-19</sub>
- **[ankit-aglawe/tinyjev](https://github.com/ankit-aglawe/tinyjev)** - A tiny jev-like model that answers Choice, Score and Noul questions in one forward pass and returns calibrated probabilities. MLX or PyTorch, fully offline, System One compatible.  
  <sub>16 stars · Python · MIT · updated 2026-09-22</sub>
- **[simonw/llm-typesafe](https://github.com/simonw/llm-typesafe)** - LLM plugin for accessing Jev and other TypeSafe AI models  
  <sub>15 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[CommandCodeAI/cmd-mod-jev-nudge](https://github.com/CommandCodeAI/cmd-mod-jev-nudge)** - Command Code mod: nudges the agent to keep going when it stops with work left, judged by Jev  
  <sub>14 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[sosopop/jev_stock](https://github.com/sosopop/jev_stock)** - An experimental JEV-powered framework for forecasting short-term stock price direction from structured market data.  
  <sub>14 stars · Python · updated 2026-09-17</sub>
- **[doeixd/discern](https://github.com/doeixd/discern)** - Craft Type-Safe Uncertainty-aware semantic pattern matching, control flow, and smart procedures for Effect DecisionModel and Jev  
  <sub>13 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[ethanplusai/jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch)** - Filter any live Twitch chat with Jev: a bring-your-own-key Chrome extension  
  <sub>13 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[valentynkit/jev-commit](https://github.com/valentynkit/jev-commit)** - pre-commit hook: one Jev call judges whether your commit message matches the diff, plus debug leftovers, scope creep, and a secret belt  
  <sub>13 stars · Python · MIT · updated 2026-09-19</sub>
- **[virolea/lintus](https://github.com/virolea/lintus)** - A linter whose rules are written in plain language.  
  <sub>13 stars · Rust · MIT · updated 2026-09-23</sub>
- **[Eliot5566/JEV-Paper-Radar](https://github.com/Eliot5566/JEV-Paper-Radar)** - Let Jev read every new arXiv paper each morning and surface the few you should read. Plain-English interests, calibrated probabilities, ~$0.06/day, fork and go.  
  <sub>12 stars · Python · MIT · updated 2026-09-25</sub>
- **[Kevthetech143/super-jev](https://github.com/Kevthetech143/super-jev)** - A small, extensible decision-to-action harness for TypeSafe Jev  
  <sub>12 stars · Python · MIT · updated 2026-09-25</sub>
- **[backmeupplz/jev_antispam_bot](https://github.com/backmeupplz/jev_antispam_bot)** - Minimal grammY Telegram anti-spam bot powered by TypeSafe Jev  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[kzkhykw/jev-auto-ime](https://github.com/kzkhykw/jev-auto-ime)** - 打っている言葉が日本語か英語かをJevに聞いて、Macの入力モードを切り替える道具。個人利用のみ。  
  <sub>11 stars · Python · updated 2026-09-22</sub>
- **[GiesN/typesafe-jev-workflow](https://github.com/GiesN/typesafe-jev-workflow)** - No description provided.  
  <sub>10 stars · Python · updated 2026-09-16</sub>
- **[goodrahstar/pdf-race](https://github.com/goodrahstar/pdf-race)** - Docling → Jev vs Docling → Gemini 3.8 Flash vs Gemini reading the PDF: same documents, one clock, scored against arXiv's own metadata  
  <sub>10 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[parable-work/jev-datafusion](https://github.com/parable-work/jev-datafusion)** - DataFusion SQL functions for typed judgments. TypeSafe is one server.  
  <sub>10 stars · Rust · Apache-2.0 · updated 2026-09-22</sub>
- **[zaidmukaddam/cascade-search](https://github.com/zaidmukaddam/cascade-search)** - A 27K-parameter in-browser query parser that knows when it doesn't know.  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[Mawfyy/jevflow](https://github.com/Mawfyy/jevflow)** - Probabilistic AI decisions as composable backend primitives — typed judgments (noul/score/choice), deterministic thresholds, and explainable workflows. Powered by TypeSafe's Jev, provider-agnostic.  
  <sub>9 stars · TypeScript · updated 2026-09-20</sub>
- **[Nancy-Chauhan/hearth-jev-rental-search](https://github.com/Nancy-Chauhan/hearth-jev-rental-search)** - Autonomous multi-source rental search powered by TypeSafe Jev  
  <sub>9 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[ranjan2829/AskJev](https://github.com/ranjan2829/AskJev)** - AskJev — Jev autopilot for any website + guard on irreversible clicks (TypeSafe System One, not Claude)  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[siliconkernel/vllm-jev-decison](https://github.com/siliconkernel/vllm-jev-decison)** - Classification-only typed decisions for vLLM: finite-schema candidate scoring, probabilities, and abstention. No generative fallback.  
  <sub>9 stars · Python · MIT · updated 2026-09-18</sub>
- **[ZephyrDeng/ego-jev](https://github.com/ZephyrDeng/ego-jev)** - Jev (TypeSafe System One) inner loop for ego-browser — one ~0.4s typed decision per DOM step instead of an LLM turn. Agent skill for ego lite.  
  <sub>9 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[comoc/jev-minesweeper](https://github.com/comoc/jev-minesweeper)** - TypeSafe Jev (System One) にブラウザ上のマインスイーパーを解かせるデモ  
  <sub>8 stars · JavaScript · updated 2026-09-20</sub>
- **[inanna-malick/jev-dsl](https://github.com/inanna-malick/jev-dsl)** - Agent-first Haskell DSL for TypeSafe's Jev judgment model: typed packets, inferred types, answers under the same labels  
  <sub>8 stars · Haskell · MIT · updated 2026-09-18</sub>
- **[limboinf/semantic-live-caption](https://github.com/limboinf/semantic-live-caption)** - 听写纸 · Real-time speech captions with live semantic annotation (key points / emotion / intent) — Confucius4-R2T2 + TypeSafe Jev + DeepSeek  
  <sub>8 stars · HTML · MIT · updated 2026-09-20</sub>
- **[Nuu-maan/undertone](https://github.com/Nuu-maan/undertone)** - A text box that tells you how your message sounds before you send it. Powered by Jev.  
  <sub>8 stars · TypeScript · updated 2026-09-23</sub>
- **[teknium1/hermes-and-jev-play-minecraft](https://github.com/teknium1/hermes-and-jev-play-minecraft)** - Hermes Agent plans, Jev (TypeSafe) picks bounded actions, Mineflayer executes: Minecraft with no screenshots or keypresses from a model. Includes the reproduction of rmalde/minecraft-agent's Ender Dragon run.  
  <sub>8 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[AIAnytime/jev-crash-course](https://github.com/AIAnytime/jev-crash-course)** - All projects for learning Jev, a model that makes decisions instead of writing text. Live API calls, no build tooling, one demo per folder.  
  <sub>7 stars · Python · MIT · updated 2026-09-23</sub>
- **[caijinchun/nanojev-arena](https://github.com/caijinchun/nanojev-arena)** - NanoJev Snake Arena: 1v4 human-vs-AI battleship + 100-agent swarm simulator. Local demo of Jev System-One model (open-source mini replica).  
  <sub>7 stars · HTML · MIT · updated 2026-09-19</sub>
- **[gaborishka/jev-canvas](https://github.com/gaborishka/jev-canvas)** - Draw on a tldraw canvas with your voice and a pointing finger. Jev (TypeSafe System One) decides action, target and place in ~350 ms per spoken word.  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[jeffonelson/jev-bigquery-cloudrun](https://github.com/jeffonelson/jev-bigquery-cloudrun)** - Classify support tickets in BigQuery with Jev and Cloud Run  
  <sub>7 stars · Python · updated 2026-09-21</sub>
- **[joshlarsen/jev-t-rex-runner](https://github.com/joshlarsen/jev-t-rex-runner)** - Chrome dino game played by Typesafe AI Jev model  
  <sub>7 stars · JavaScript · BSD-3-Clause · updated 2026-09-17</sub>
- **[mukiwu/vault-tag-system](https://github.com/mukiwu/vault-tag-system)** - 在瀏覽器選一個 Markdown vault，用 Jev 逐篇判斷該掛哪些標籤。高信心自動採納，其餘人工審核，可回滾  
  <sub>7 stars · TypeScript · updated 2026-09-24</sub>
- **[valentynkit/jev.nvim](https://github.com/valentynkit/jev.nvim)** - Neovim: ask the buffer a question, get a quickfix list. Treesitter splits functions, Jev scores each one, probabilities land as virtual text  
  <sub>7 stars · Lua · MIT · updated 2026-09-19</sub>
- **[dani1005/book-aurora](https://github.com/dani1005/book-aurora)** - Jev reads a whole novel in seconds. Every passage becomes a row of colour.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[jaibhasin/jev-yt-time-saver](https://github.com/jaibhasin/jev-yt-time-saver)** - A Chrome extension that covers distracting YouTube videos with Jev. Show anyway whenever you want.  
  <sub>6 stars · JavaScript · updated 2026-09-23</sub>
- **[kitze/pagegrade](https://github.com/kitze/pagegrade)** - Grade page sections for clarity, writing and on-page SEO. WXT + TypeSafe AI Jev.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[kylemclaren/jevsearch](https://github.com/kylemclaren/jevsearch)** - Site search that understands the question. Ranked by TypeSafe's Jev model.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[stolinski/gpui-agent](https://github.com/stolinski/gpui-agent)** - Jev-driven native GPUI testing: Rust accessibility bridge, bounded goal runners, and one-call pi integration.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[amigos-robot/amigos-jev](https://github.com/amigos-robot/amigos-jev)** - a free multi-modal jev API for everyone  
  <sub>5 stars · updated 2026-09-23</sub>
- **[anxkhn/JevPlaysPokemon](https://github.com/anxkhn/JevPlaysPokemon)** - Jev plays Generation 3 Pokémon via Showdown and a real FireRed ROM.  
  <sub>5 stars · HTML · GPL-3.0 · updated 2026-09-18</sub>
- **[buluoray/JevOnly](https://github.com/buluoray/JevOnly)** - Pure Jev that can "type" and drive towards task completion.  
  <sub>5 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[cachix/jev-action](https://github.com/cachix/jev-action)** - Run Jev judgments in GitHub Actions, including pull request label triage  
  <sub>5 stars · TypeScript · Apache-2.0 · updated 2026-09-23</sub>
- **[danvega/hello-jev-java](https://github.com/danvega/hello-jev-java)** - No description provided.  
  <sub>5 stars · Java · updated 2026-09-18</sub>
- **[datawhalechina/jev-cookbook](https://github.com/datawhalechina/jev-cookbook)** - Jev 模型（TypeSafe AI）官方使用文档的中文翻译 | Unofficial Chinese translation of the official Jev (TypeSafe AI) docs — https://docs.typesafe.ai  
  <sub>5 stars · Python · updated 2026-09-25</sub>
- **[eijiaraki/toxic-filter](https://github.com/eijiaraki/toxic-filter)** - Xの投稿をJevで分類し、選んだ表現を目隠しするChrome拡張機能 / A Chrome extension to filter unwanted expressions on X with Jev  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[hamidfarmani/jev-resume-match](https://github.com/hamidfarmani/jev-resume-match)** - Score how well a resume matches a job description using Jev (TypeSafe AI). Next.js app that returns typed, explainable match scores instead of generated text.  
  <sub>5 stars · TypeScript · updated 2026-09-20</sub>
- **[mkotlikov/jev-grug](https://github.com/mkotlikov/jev-grug)** - Helping JEV speak <3  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[mountainMath/JevR](https://github.com/mountainMath/JevR)** - R client for the TypeSafe Jev System One API  
  <sub>5 stars · R · updated 2026-09-20</sub>
- **[Reindeer-AI/pi-jev-guard](https://github.com/Reindeer-AI/pi-jev-guard)** - Check Pi code edits against repository Markdown rules with TypeSafe Jev  
  <sub>5 stars · TypeScript · updated 2026-09-24</sub>
- **[ShuhanSun/jev-oas-sentinel](https://github.com/ShuhanSun/jev-oas-sentinel)** - Catch breaking API behavior hidden in OpenAPI prose with deterministic checks and TypeSafe JEV System One semantic review.  
  <sub>5 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[vinilana/jev-browser](https://github.com/vinilana/jev-browser)** - No description provided.  
  <sub>5 stars · TypeScript · updated 2026-09-17</sub>
- **[wnzn/semif-go](https://github.com/wnzn/semif-go)** - System One-style decision scoring over llama.cpp with multimodal input  
  <sub>5 stars · Go · MIT · updated 2026-09-23</sub>
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
- **[Foadsf/jev-for-engineers](https://github.com/Foadsf/jev-for-engineers)** - Eight minimal working examples of TypeSafe's Jev (a System One model) applied to mechanical and electrical engineering: CAD/CAE/CAM routing, FEM result triage, DFM screening, BOM alignment, hallucination-proof extraction. Zero dependencies.  
  <sub>4 stars · Python · MIT · updated 2026-09-16</sub>
- **[Ideny42/jev-keyboard](https://github.com/Ideny42/jev-keyboard)** - Jev-powered candidate reranking for Rime on macOS, with Windows support planned.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-23</sub>
- **[liaoyuhua/jev-trip](https://github.com/liaoyuhua/jev-trip)** - Two Minds, One Trip.  https://jev-trip.vercel.app/  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[nickthompson480/typesafe-ai-playground](https://github.com/nickthompson480/typesafe-ai-playground)** - Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-16</sub>
- **[nssmd/jev-bot](https://github.com/nssmd/jev-bot)** - Self-hosted Jev decision workbench and Feishu bot: automatic choices, probabilities, and experimental word/character writing.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[Nuu-maan/pastewise](https://github.com/Nuu-maan/pastewise)** - Paste anything, get the right tool. JSON, JWTs, cron, stack traces and more. Powered by Jev.  
  <sub>4 stars · TypeScript · updated 2026-09-23</sub>
- **[vishxrad/clashroyale-jev](https://github.com/vishxrad/clashroyale-jev)** - Jev plays Clash Royale with Qwen battlefield vision, local OpenCV HUD recognition, and a live decision dashboard.  
  <sub>4 stars · Python · updated 2026-09-22</sub>
- **[xuebai2812/jev-travel-packing](https://github.com/xuebai2812/jev-travel-packing)** - Jev-powered travel packing with emoji physics, backend APIs, tests, and deployment source  
  <sub>4 stars · JavaScript · updated 2026-09-22</sub>
- **[AMMIROSOH/jev-2048-selenium](https://github.com/AMMIROSOH/jev-2048-selenium)** - Selenium 2048 player powered by expectimax search and TypeSafe Jev, with portrait FFmpeg recording.  
  <sub>3 stars · Python · updated 2026-09-25</sub>
- **[bl888m/jev-bot](https://github.com/bl888m/jev-bot)** - JEV-powered market decision bot for stocks, crypto and memes. State in, BUY/SELL/HOLD/AVOID out, paper by default  
  <sub>3 stars · Python · updated 2026-09-23</sub>
- **[EthanAlgoX/jev-trading](https://github.com/EthanAlgoX/jev-trading)** - No description provided.  
  <sub>3 stars · TypeScript · updated 2026-09-20</sub>
- **[hosseintoussi/jev-flappy-bird](https://github.com/hosseintoussi/jev-flappy-bird)** - A live demo of TypeSafe's Jev model playing Flappy Bird, one flap-or-wait decision at a time.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[IAnMove/jev-game-agent](https://github.com/IAnMove/jev-game-agent)** - Experimental Jev game agent: RAM, emulator lookahead, checkpoint search and verified recordings. Bring your own ROM and BizHawk.  
  <sub>3 stars · Python · updated 2026-09-18</sub>
- **[MartinSWDev/gen-ui](https://github.com/MartinSWDev/gen-ui)** - No description provided.  
  <sub>3 stars · TypeScript · updated 2026-09-17</sub>
- **[raihankhan-rk/jevarena](https://github.com/raihankhan-rk/jevarena)** - JevArena — two Jev agents duel in click-only browser games (Browser Use + TypeSafe Jev)  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[rohit9mehta/dwim](https://github.com/rohit9mehta/dwim)** - Do what I mean: type what you want in plain words and it runs the right menu item in any Mac app. Powered by Jev (bring your own key).  
  <sub>3 stars · Swift · MIT · updated 2026-09-21</sub>
- **[selcukusta/jev-mailroom](https://github.com/selcukusta/jev-mailroom)** - Email triage PoC: reads a mailbox over IMAP and classifies each message by what it is and what it's about, using TypeSafe System One (Jev) — 11 questions in a single call, decided in Python.  
  <sub>3 stars · Python · MIT · updated 2026-09-20</sub>
- **[smithclay/dbt_jev](https://github.com/smithclay/dbt_jev)** - use jev in dbt  
  <sub>3 stars · Python · MIT · updated 2026-09-23</sub>
- **[sriganesh/jevibe-check](https://github.com/sriganesh/jevibe-check)** - A live tone labeler for Bluesky posts and drafts, using TypeSafe's Jev API.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[web3w/jev-trader](https://github.com/web3w/jev-trader)** - Multilingual Jev trading dashboard with real-time Kuru and Hyperliquid market data, simulated trading, and model decision guides. Live website: https://jev-trader.com  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[zaferayan/jev-example](https://github.com/zaferayan/jev-example)** - No description provided.  
  <sub>3 stars · TypeScript · updated 2026-09-18</sub>
- **[zurfyx/jev-browser-skill](https://github.com/zurfyx/jev-browser-skill)** - Let Jev, TypeSafe's ~100ms decision model, drive your browser. A plug-and-play skill for Claude Code and Codex.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[zzsong1023/jev-market-reflex](https://github.com/zzsong1023/jev-market-reflex)** - Fast typed AI decisions on live crypto markets using TypeSafe AI Jev.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Agnuxo1/TartanIMU-Cognitive-Stack](https://github.com/Agnuxo1/TartanIMU-Cognitive-Stack)** - Deterministic-first cognitive orchestration with bounded TypeSafe JEV supervision, evidence-aware escalation, and privacy-minimizing telemetry.  
  <sub>2 stars · Python · MIT · updated 2026-09-23</sub>
- **[awoaCrim/pi-smart-subagents](https://github.com/awoaCrim/pi-smart-subagents)** - Pi subagents with Jev model and tool routing, worktree isolation, and background task management.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[charleeagni/JevPiano](https://github.com/charleeagni/JevPiano)** - @typesafeai 's Jev controls the 2 hands and each finger to play the piano in real-time.  Jev only "sees" what we see and plays this from the "note waterfall". It uses  @browser_use 's jev-ultrafast and some decision scheduling to make this happen in real-time.  Sound on 🔈🔉🔊  
  <sub>2 stars · JavaScript · updated 2026-09-18</sub>
- **[darrenli6/jev-recruitment](https://github.com/darrenli6/jev-recruitment)** - Jev-powered resume screening tool built on Next.js. Define job requirements, upload resumes in bulk, and get structured match/no-match judgments — every conclusion traceable back to the original resume text.  
  <sub>2 stars · TypeScript · updated 2026-09-22</sub>
- **[Devonance/DoomSat](https://github.com/Devonance/DoomSat)** - F´ flight software → CCSDS/Yamcs → Open MCT, with jev (System One) and Claude Sonnet 5 (System Two) driving Doom over that real mission stack.  
  <sub>2 stars · Python · updated 2026-09-25</sub>
- **[Devonance/rover-claude-jev-demo](https://github.com/Devonance/rover-claude-jev-demo)** - Just a weekend project with Claude as system two, and Jev as system One.  
  <sub>2 stars · JavaScript · updated 2026-09-21</sub>
- **[dfinke/jev-experiments](https://github.com/dfinke/jev-experiments)** - AI as a PowerShell decision primitive: describe what you need, let Jev rank the right file.  
  <sub>2 stars · PowerShell · updated 2026-09-21</sub>
- **[Dj-Shortcut/rekordbox-jev](https://github.com/Dj-Shortcut/rekordbox-jev)** - Experimental macOS Rekordbox bridge and Jev decision widget  
  <sub>2 stars · Python · updated 2026-09-22</sub>
- **[erhanmeydan/jev2048](https://github.com/erhanmeydan/jev2048)** - TypeSafe'in Jev karar modeli gerçek bir online 2048 sitesinde oynuyor — hamle başına tek API çağrısı, tek anahtar.  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[fbettag/elixir-jev](https://github.com/fbettag/elixir-jev)** - Typed semantic judgments and pattern matching for TypeSafe Jev and local Laya in Elixir  
  <sub>2 stars · Elixir · MIT · updated 2026-09-20</sub>
- **[greghavens/jev-no-bullshit](https://github.com/greghavens/jev-no-bullshit)** - A code harness plugin that uses jev to detect and redirect AI bullshit  
  <sub>2 stars · Python · updated 2026-09-25</sub>
- **[guilhem/jev-ci-selector](https://github.com/guilhem/jev-ci-selector)** - Conservative CI task selection for GitHub Actions with Jev, a pure policy engine, and shadow mode by default.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[HusDev/LinguaTrace](https://github.com/HusDev/LinguaTrace)** - The lesson notebook that writes itself. A live tutoring lesson becomes structured notes and a personalised Lesson Pack: Jev judges every turn, Gemini Live transcribes each speaker, and the tutor stays a person.  
  <sub>2 stars · TypeScript · updated 2026-09-20</sub>
- **[ItBayMax/typesafe-ai-jev-example](https://github.com/ItBayMax/typesafe-ai-jev-example)** - Hands-on demos for TypeSafe's Jev (System One) model: six runnable examples and four field notes. Runs offline with no API key; samples/ holds real measured output from jev-1.13.0.  
  <sub>2 stars · Python · MIT · updated 2026-09-21</sub>
- **[jaibhasin/jev-flappy-bird](https://github.com/jaibhasin/jev-flappy-bird)** - Jev and GPT-6 Luna race through the Flappy Bird Game  
  <sub>2 stars · JavaScript · updated 2026-09-25</sub>
- **[jeremy-clerk/is-a-jemail](https://github.com/jeremy-clerk/is-a-jemail)** - Is it an email? Ask Jev.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[juanlentino/jev-connector](https://github.com/juanlentino/jev-connector)** - WordPress connector for TypeSafe Jev: typed, confidence-scored answers your code can branch on.  
  <sub>2 stars · PHP · GPL-2.0 · updated 2026-09-23</sub>
- **[kxzk/typesafe-jev-drone-demo](https://github.com/kxzk/typesafe-jev-drone-demo)** - Three.js drone simulator with a Python backend and live TypeSafe Jev navigation  
  <sub>2 stars · Python · updated 2026-09-17</sub>
- **[Little-Planet-Labs/jev-playground](https://github.com/Little-Planet-Labs/jev-playground)** - A small Next.js app for experimenting with TypeSafe AI's Jev model (System One)  
  <sub>2 stars · TypeScript · updated 2026-09-17</sub>
- **[lostviolinist/crowdcut-jev-hedra](https://github.com/lostviolinist/crowdcut-jev-hedra)** - Audience-directed live story powered by Jev and Hedra. Watch at crowdcut.lol  
  <sub>2 stars · TypeScript · updated 2026-09-24</sub>
- **[LXBWOW/dsh-context-curator](https://github.com/LXBWOW/dsh-context-curator)** - DSH-native context compaction that keeps text verbatim: scores every tool call and result with Jev, drops only the stale ones, and falls back to DSH native summary when unsure.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-23</sub>
- **[mchamoudadev/jev-home](https://github.com/mchamoudadev/jev-home)** - Voice-controlled 3D smart home demo powered by TypeSafe Jev (Next.js)  
  <sub>2 stars · TypeScript · updated 2026-09-23</sub>
- **[nabendu82/jev-reflex](https://github.com/nabendu82/jev-reflex)** - Multimodal Mac controller using Hand gestures and voice  
  <sub>2 stars · Python · updated 2026-09-20</sub>
- **[nextflow-io/nf-jev](https://github.com/nextflow-io/nf-jev)** - TypeSafe Jev plugin for example  
  <sub>2 stars · Groovy · Apache-2.0 · updated 2026-09-20</sub>
- **[pinecone-io/using-typesafe-and-pinecone](https://github.com/pinecone-io/using-typesafe-and-pinecone)** - Worked out examples of applying TypeSafe AI Decision (Jev) models with Pinecone.  
  <sub>2 stars · JavaScript · updated 2026-09-18</sub>
- **[pulkitxm/jev-chess-agent](https://github.com/pulkitxm/jev-chess-agent)** - A chess bot opponent player with typed move selection and browser controls  
  <sub>2 stars · JavaScript · updated 2026-09-20</sub>
- **[rchandnaWUSTL/auto-guard](https://github.com/rchandnaWUSTL/auto-guard)** - No description provided.  
  <sub>2 stars · Python · MIT · updated 2026-09-25</sub>
- **[RubyBrewsday/jevcumber](https://github.com/RubyBrewsday/jevcumber)** - Write Cucumber tests with just the .feature file. No step definitions — Jev (TypeSafe AI) resolves each Gherkin step and Playwright runs it.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-23</sub>

<sub>245 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Reading and explainers

- **[DataCamp - Jev: TypeSafe's System One model](https://www.datacamp.com/blog/system-one-models-jev)** - Longer explainer on the model class, the typed question format and where it fits.
- **[LangChain - Building a harness with Jev](https://www.langchain.com/blog/building-a-harness-with-jev)** - Walkthrough of wiring Jev into an agent harness, including the jev-as-a-judge experiment.
- **[TechCrunch - A new kind of AI model from a ChatGPT inventor](https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/)** - Launch coverage and context on TypeSafe AI's seed round and early adopters.
- **[The Register - TypeSafe AI debuts model for machines that plays Doom](https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711)** - Coverage of the launch demo, with a sceptical read on the performance claims.
- **[Rizzo-AI-Academy/rizzo-flow](https://github.com/Rizzo-AI-Academy/rizzo-flow)** - The open, local take on Jev: typed decisions from an LLM, without generating a single token  
  <sub>426 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[kshetrajna12/reflex](https://github.com/kshetrajna12/reflex)** - A small open decision model: state + typed questions -> calibrated probabilities. A Jev / System One re-creation on Qwen3.5.  
  <sub>146 stars · Python · MIT · updated 2026-09-23</sub>
- **[glamboyosa/docket](https://github.com/glamboyosa/docket)** - A Go TUI that uses Jev to classify documents, assess sensitivity and urgency, and determine whether action is required.  
  <sub>5 stars · Go · updated 2026-09-20</sub>
- **[GPT-AGI/OpenJev](https://github.com/GPT-AGI/OpenJev)** - Jev-compatible System 开源Jev  
  <sub>5 stars · Python · MIT · updated 2026-09-20</sub>
- **[hgqimo/JevRanker](https://github.com/hgqimo/JevRanker)** - Jev-style decision models as BlitzRank's compare oracle: k passages scored in one parallel forward pass, zero decoded tokens — 22x faster per match than a generative listwise   LLM, at 2.9x its nDCG@10.  
  <sub>5 stars · Python · MIT · updated 2026-09-22</sub>
- **[ponyo877/jev-telop-live](https://github.com/ponyo877/jev-telop-live)** - No description provided.  
  <sub>5 stars · JavaScript · updated 2026-09-19</sub>
- **[chris-wozniczek/jev-voice-control](https://github.com/chris-wozniczek/jev-voice-control)** - Control your Mac by voice. Speech → Jev (TypeSafe AI System One model) typed decisions → macOS actions. Menu-bar Swift app.  
  <sub>4 stars · Swift · MIT · updated 2026-09-21</sub>
- **[Akramovic1/jev-pilot](https://github.com/Akramovic1/jev-pilot)** - Let Jev steer Claude Code: the right reasoning effort, subagent model and skill for every prompt. A Claude Code plugin powered by TypeSafe's Jev (OpenRouter / TypeSafe).  
  <sub>3 stars · TypeScript · updated 2026-09-24</sub>
- **[almcc/slop-linter](https://github.com/almcc/slop-linter)** - Lints AI-generated code for slop using Jev, a System One model that makes fast structured decisions instead of generating text.  
  <sub>3 stars · Python · updated 2026-09-19</sub>
- **[cobusgreyling/Jev](https://github.com/cobusgreyling/Jev)** - Unofficial TypeSafe Jev showcase — System One decisions, not chat.  
  <sub>3 stars · Python · MIT · updated 2026-09-20</sub>
- **[tostechbr/partway](https://github.com/tostechbr/partway)** - Voice control for macOS that acts partway through your sentence, built on Jev (TypeSafe)  
  <sub>3 stars · Swift · MIT · updated 2026-09-24</sub>
- **[makefinks/jev-feed-filter](https://github.com/makefinks/jev-feed-filter)** - Smart, dynamic AI filtering for X and YouTube feeds using Jev  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[mrmt/elevator-three](https://github.com/mrmt/elevator-three)** - Jev に判断を任せる自動生成のエレクトロの楽器  
  <sub>1 stars · HTML · MIT · updated 2026-09-21</sub>
- **[willfish/pi-observational-memory-jev](https://github.com/willfish/pi-observational-memory-jev)** - Jev decides what to keep. Compaction never rewrites the transcript.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[7starsseeker/dsh-jev-guard](https://github.com/7starsseeker/dsh-jev-guard)** - DeepSeek Harness (DSH) 执行前安全阀门:bash/pwsh 真正执行前先经静态规则 + TypeSafe Jev 语义判定,破坏性操作按 允许/修正/拦截/上报人工 四态处置,含额度降级与审计日志。  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-24</sub>
- **[andre-morise/jev-bot](https://github.com/andre-morise/jev-bot)** - JEV-powered market decision bot for stocks, crypto and memes. State in, a typed BUY/SELL/HOLD/AVOID out, paper by default.  
  <sub>0 stars · updated 2026-09-22</sub>
- **[colbyford/jev-binder-classification](https://github.com/colbyford/jev-binder-classification)** - Zero-Shot Classification of Protein Binders with Jev  
  <sub>0 stars · Jupyter Notebook · updated 2026-09-21</sub>
- **[DinithKumudika/ai-email-classifier](https://github.com/DinithKumudika/ai-email-classifier)** - Email Classifier based on System One AI Models  
  <sub>0 stars · TypeScript · updated 2026-09-24</sub>
- **[imteche/localjev](https://github.com/imteche/localjev)** - Self-hosted System One decision engine (TypeSafe Jev's Choice/Score/Noul contract) running locally on LM Studio, with real probabilities from token logprobs.  
  <sub>0 stars · Python · MIT · updated 2026-09-22</sub>
- **[JacobLinCool/jev-ai-detector](https://github.com/JacobLinCool/jev-ai-detector)** - A small AI-text taste detector for Traditional Chinese (zh-TW) and English, built on Jev.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[koki-develop/fizzbuzz-jev](https://github.com/koki-develop/fizzbuzz-jev)** - FizzBuzz powered by Jev, TypeSafe AI's System One model.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[lgraubner/jev-lang](https://github.com/lgraubner/jev-lang)** - A small web app that identifies the predominant language in a text sample via Jev from TypeSafe AI  
  <sub>0 stars · Python · updated 2026-09-20</sub>
- **[MayankBansal12/game-theory-with-jev](https://github.com/MayankBansal12/game-theory-with-jev)** - jev plays into the prisoner’s dilemma: 40 matches against 8 opponents  
  <sub>0 stars · TypeScript · updated 2026-09-24</sub>
- **[mcembalest/sys1](https://github.com/mcembalest/sys1)** - System One compatible API for open decision models in Rust (based on alvarobartt/sys1)  
  <sub>0 stars · Rust · updated 2026-09-23</sub>
- **[nishioka-shinji/jev-edgar](https://github.com/nishioka-shinji/jev-edgar)** - Does Jev, a System One model returning calibrated probabilities, say anything useful about an earnings release before the market prices it?  
  <sub>0 stars · Python · updated 2026-09-18</sub>
- **[OuchengLiu/Jev-Game-Theory-Arena](https://github.com/OuchengLiu/Jev-Game-Theory-Arena)** - Play poker, liar's dice, prisoner's dilemma and more against Jev, TypeSafe's System One model. It reads the situation and returns a probability for each legal move: a live mixed strategy. Bilingual EN/中文, runs in the browser. Educational, no real money.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-25</sub>
- **[szafar-7101/reclaim](https://github.com/szafar-7101/reclaim)** - Confidence-gated disk space recovery for macOS developers. Five-agent pipeline using TypeSafe AI's Jev model to decide what's safe to delete — calibrated probability instead of hardcoded path regex.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[TheWebDevel/jev-fanout](https://github.com/TheWebDevel/jev-fanout)** - Does asking Jev more questions in one call change its answers? 250 calls measuring TypeSafe's speculative fan-out pattern and whether Jev is deterministic.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[ztanruan/JevPlane](https://github.com/ztanruan/JevPlane)** - An audited decision control plane for Gemini agents. Use Jev to route models, preflight prompts and tool evaluate agent runs with Google ADC, structured reports, and hash-chained traces.calls, select bounded context, and  
  <sub>0 stars · Python · updated 2026-09-22</sub>

### Everything else

- **[tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction)** - Claude Code plugin that replaces the compaction summary with Jev decisions: every tool call and result is scored in one fast request, stale ones are dropped or truncated, everything kept stays verbatim.  
  <sub>6783 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[Finderchangchang/jev-chat-JARVIS](https://github.com/Finderchangchang/jev-chat-JARVIS)** - 装在手机上的对话副驾：在 QQ / X / 飞书里读懂对方、给出候选回复、一键填入输入框，发不发由你。非侵入，只读屏幕，不 hook 不改包。  
  <sub>6446 stars · Kotlin · MIT · updated 2026-09-25</sub>
- **[githubnext/localjev](https://github.com/githubnext/localjev)** - No description provided.  
  <sub>771 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[nokia-applied-research/AnyJev](https://github.com/nokia-applied-research/AnyJev)** - Turn any LLM into a Jev-style decision model: typed decisions, real probabilities, no training. (continue updating)  
  <sub>578 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[jev-chat/jev-chat-windows](https://github.com/jev-chat/jev-chat-windows)** - JevChat-Windows：聊天窗口旁挂的回复辅助。窗口截图 + 本地离线 OCR 读对方消息 → Jev 判断意图 → 3 条候选一键填入，发送永远手动  
  <sub>549 stars · Python · updated 2026-09-24</sub>
- **[superagents-lab/jev-search](https://github.com/superagents-lab/jev-search)** - Search the web with TypeSafe's Jev: source selection, query understanding and relevance ranking. Built with Search1API.  
  <sub>455 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier)** - Tax document page classifier built on Jev decisions. 100% strict accuracy across 261 IRS forms, ~$0.001 per page.  
  <sub>449 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[Mapika/decider](https://github.com/Mapika/decider)** - A family of System One-style models fine-tuned from Qwen3.5, designed for one-pass typed decisions with calibrated probabilities.  
  <sub>394 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[mohsen1/llm-debugger-vscode-extension](https://github.com/mohsen1/llm-debugger-vscode-extension)** - VSCode extension that demonstrates the use of large language models (LLMs) for active debugging of programs  
  <sub>360 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[realZachi/pg-jev](https://github.com/realZachi/pg-jev)** - Ask your Postgres tables questions in plain language. A PostgreSQL extension powered by TypeSafe's Jev.  
  <sub>354 stars · Shell · updated 2026-09-18</sub>
- **[moritzkremb/jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser)** - Control a real browser by voice. Jev (TypeSafe System One) decides intent + target in ~300 ms per spoken word; Playwright acts — often before you finish the sentence.  
  <sub>286 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[FBddcz/embodied-jev](https://github.com/FBddcz/embodied-jev)** - EmbodiedJev: MuJoCo robot decision workbench with MiniCPM5-2B, Jev and compatible model APIs  
  <sub>227 stars · Python · MIT · updated 2026-09-22</sub>
- **[RomanSlack/jev-drone](https://github.com/RomanSlack/jev-drone)** - Camera-only autonomous drone in MuJoCo with a small judgment model (TypeSafe Jev) in the loop at 2.5Hz  
  <sub>189 stars · Python · MIT · updated 2026-09-24</sub>
- **[Devin-AXIS/jev-dsh-decision](https://github.com/Devin-AXIS/jev-dsh-decision)** - Jev DSH 决策引擎｜面向 Agent Harness 的结构化决策插件。原生支持 DeepSeek Harness，通过 iPolloWork 支持 OpenCode、Codex Harness。  
  <sub>173 stars · JavaScript · updated 2026-09-20</sub>
- **[brainstormity/Jev-X-Sentiment-Analysis](https://github.com/brainstormity/Jev-X-Sentiment-Analysis)** - No description provided.  
  <sub>170 stars · Python · MIT · updated 2026-09-22</sub>
- **[tamaratran/jev-pruner](https://github.com/tamaratran/jev-pruner)** - Claude Code plugin: trim long Bash output with TypeSafe Jev before the model sees it  
  <sub>146 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[uehaj/jev-semgrep](https://github.com/uehaj/jev-semgrep)** - grep by meaning, across languages. TypeSafe Jev scores every line against a meaning; combine meanings with AND/OR/NOT. 意味で探す grep。日本語で英語を、英語で日本語を検索できる  
  <sub>144 stars · JavaScript · updated 2026-09-25</sub>
- **[aowang-ai/jev-trade](https://github.com/aowang-ai/jev-trade)** - Live Jev trader on Hyperliquid  
  <sub>141 stars · TypeScript · updated 2026-09-21</sub>
- **[wquguru/dasheng](https://github.com/wquguru/dasheng)** - 大声读 — R2T2 流式 ASR 听，Jev 逐词判，英文朗读评分  
  <sub>139 stars · JavaScript · updated 2026-09-20</sub>
- **[Liyucheng1997/332_lab-jev-chat](https://github.com/Liyucheng1997/332_lab-jev-chat)** - Jev Chat Assistant for Windows - 电脑版微信意图判断与 DeepSeek 建议回复  
  <sub>126 stars · Kotlin · MIT · updated 2026-09-21</sub>
- **[devagrawal09/stanley-code](https://github.com/devagrawal09/stanley-code)** - Bounded TypeSafe Jev workflows for coding agents.  
  <sub>115 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[allebee/jevk5](https://github.com/allebee/jevk5)** - JevK5: open-weight alternative to TypeSafe Jev. Typed decisions with probabilities in one forward pass; Apache-2.0 weights and code.  
  <sub>106 stars · Python · Apache-2.0 · updated 2026-09-25</sub>
- **[trungdq88/youtube-sponsor-detection](https://github.com/trungdq88/youtube-sponsor-detection)** - Detect youtube sponsor segment with live audio and transcript powered by Jev  
  <sub>97 stars · JavaScript · updated 2026-09-18</sub>
- **[giuliosmall/pg_typesafe](https://github.com/giuliosmall/pg_typesafe)** - Pre-alpha PostgreSQL extension for TypeSafe AI (Jev) categorical classification  
  <sub>87 stars · C · MIT · updated 2026-09-24</sub>
- **[AustinAWay/Working-Memory-Jev](https://github.com/AustinAWay/Working-Memory-Jev)** - No description provided.  
  <sub>75 stars · Python · updated 2026-09-21</sub>
- **[yikangy873-gif/jev-desktop](https://github.com/yikangy873-gif/jev-desktop)** - TypeSafe Jev action selection inside Codex Computer Use  
  <sub>71 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[achimala/jev-paint](https://github.com/achimala/jev-paint)** - Use Jev to make art!  
  <sub>58 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[SAGAR-TAMANG/sarvam-jev](https://github.com/SAGAR-TAMANG/sarvam-jev)** - Generation-free typed decisions on Indic LLMs. An open Jev-style inference engine on sarvam-1: constrained logit readout instead of autoregressive JSON. Runs client-side in the browser.  
  <sub>58 stars · Python · updated 2026-09-18</sub>
- **[r-ms/mini-jev](https://github.com/r-ms/mini-jev)** - mini-Jev: what a Jev-style typed-decision interface looks like on a frozen Qwen3-4B — read the option letter's logits instead of generating JSON. Preregistered experiment, results, teaching bench.  
  <sub>55 stars · Python · MIT · updated 2026-09-18</sub>
- **[obie/ruby_decision_model](https://github.com/obie/ruby_decision_model)** - Ruby client for decision models such as Typesafe Jev  
  <sub>51 stars · Ruby · MIT · updated 2026-09-18</sub>
- **[RafalWilinski/vibecheck](https://github.com/RafalWilinski/vibecheck)** - Chrome extension: vibe-check your X posts with TypeSafe's Jev before you hit Post  
  <sub>47 stars · JavaScript · updated 2026-09-20</sub>
- **[ronadin2002/jev-cua](https://github.com/ronadin2002/jev-cua)** - Voice and text control for macOS. One floating bar, live UI action selection with Jev, and a continuous observe–act–verify loop.  
  <sub>37 stars · Swift · updated 2026-09-23</sub>
- **[AlbionaHoti/refgarden](https://github.com/AlbionaHoti/refgarden)** - A spatial reference explorer for creators. Local Jev query choices, metadata highlights and source-linked collections.  
  <sub>33 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[bytelabs-oss/clash-jev](https://github.com/bytelabs-oss/clash-jev)** - A Clash Royale bot with no trained policy: Jev (TypeSafe System One) makes every decision from the live game state  
  <sub>33 stars · Python · MIT · updated 2026-09-21</sub>
- **[dannote/jev](https://github.com/dannote/jev)** - TypeSafe Jev for OTP: reply to Jev from a GenServer and pattern match on its answer  
  <sub>33 stars · Elixir · MIT · updated 2026-09-22</sub>
- **[safzanpirani/pi-jev-skill-picker](https://github.com/safzanpirani/pi-jev-skill-picker)** - Rank Pi Agent Skills for the current task with TypeSafe Jev  
  <sub>32 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[zadescoxp/Jev-Trades](https://github.com/zadescoxp/Jev-Trades)** - Trading bot with the all new TypeSafe AI's first system one model named as Jev  
  <sub>32 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[henryklunaris/hey-jev](https://github.com/henryklunaris/hey-jev)** - No description provided.  
  <sub>26 stars · Python · updated 2026-09-22</sub>
- **[goodrahstar/jev-column-race](https://github.com/goodrahstar/jev-column-race)** - Jev vs Gemini 3.8 Flash: labelling 1,000 app reviews, 4.1× faster and 7× cheaper  
  <sub>24 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[keeltrace/hermes-jev](https://github.com/keeltrace/hermes-jev)** - Nerve is a supervisory nervous system for Hermes agents, adding typed System One decisions, ranking, verification, token-aware oversight, and an opt-in tool gate powered by TypeSafe Jev or Open Source Laya  
  <sub>24 stars · Python · MIT · updated 2026-09-25</sub>
- **[ehui1226/hookmeter-jev](https://github.com/ehui1226/hookmeter-jev)** - ⚡ Millisecond-level Viral Hook Telemetry & Co-pilot for Social Media (Chrome Extension + JEV System 1)  
  <sub>22 stars · HTML · MIT · updated 2026-09-21</sub>
- **[stas4000/jev-linkmap](https://github.com/stas4000/jev-linkmap)** - Rebuild a site's internal link map in seconds with Jev, race Claude Opus 5 on the same queue, and let a deep model rewrite the rubric from the disagreements.  
  <sub>22 stars · HTML · updated 2026-09-19</sub>
- **[wuxie888/jev-yaba-wechat](https://github.com/wuxie888/jev-yaba-wechat)** - 微信里的话不知道怎么接？macOS 悬浮聊天助手：识别消息意图与沟通风险，GPT 生成多种话术，Jev 评估候选，一键填入微信。话我帮你想，发送你来定。  
  <sub>22 stars · Python · MIT · updated 2026-09-22</sub>
- **[9pings/notjev](https://github.com/9pings/notjev)** - Super fast Jev like server, model agnostic, working with any OpenAI compatible endpoint  
  <sub>20 stars · JavaScript · Apache-2.0 · updated 2026-09-22</sub>
- **[emnlmn/snap](https://github.com/emnlmn/snap)** - Typed decisions from unstructured state: one forward pass, zero generated text. Local, deterministic, Jev-compatible. Not affiliated with typesafe.ai.  
  <sub>20 stars · Rust · updated 2026-09-25</sub>
- **[ilyamk/jev-gmail-ai-spam-filter-and-labeling](https://github.com/ilyamk/jev-gmail-ai-spam-filter-and-labeling)** - Self-hosted AI email classifier for Gmail powered by Jev. Create custom labels, organize your inbox, and filter spam with confidence and cost controls.  
  <sub>19 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[kieranklaassen/ruby_llm-typesafe](https://github.com/kieranklaassen/ruby_llm-typesafe)** - TypeSafe structured-output provider for RubyLLM 2  
  <sub>19 stars · Ruby · MIT · updated 2026-09-16</sub>
- **[runta-dev/jot](https://github.com/runta-dev/jot)** - The first general-purpose System One agent for Jev  
  <sub>19 stars · TypeScript · updated 2026-09-18</sub>
- **[vinilana/live-jev](https://github.com/vinilana/live-jev)** - 2D autonomous car simulation in the browser, driven by TypeSafe's Jev decision model  
  <sub>19 stars · JavaScript · updated 2026-09-18</sub>
- **[oso95/x-scanner](https://github.com/oso95/x-scanner)** - Chrome extension that labels every post you scroll past on X with typed Jev judgments and a live cost counter  
  <sub>18 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[anpicasso/hermes-jev-approvals](https://github.com/anpicasso/hermes-jev-approvals)** - TypeSafe Jev as the reviewer for Hermes Agent smart command approvals. 8.7x faster, 4.4x fewer prompts, measured on 153 real commands. Approvals only.  
  <sub>16 stars · Python · MIT · updated 2026-09-22</sub>
- **[cocktailpeanut/jevthoven](https://github.com/cocktailpeanut/jevthoven)** - AI Music (MIDI) generator powered by Jev  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[pengchujin/ad-radar](https://github.com/pengchujin/ad-radar)** - 开源浏览器插件：在小红书、微博、X、知乎上按关键词和博主折叠内容；用你自己的 Jev API key 识别广告、AI、军事、政治等话题。  
  <sub>15 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[jon-devlapaz/jev-me](https://github.com/jon-devlapaz/jev-me)** - Grill-me with Jev optional each turn  
  <sub>14 stars · MIT · updated 2026-09-19</sub>
- **[yushen100/wechat-jev-assistant](https://github.com/yushen100/wechat-jev-assistant)** - Windows 微信对话分析助手：本地读取、脱敏、TypeSafe Jev 判断与加密历史  
  <sub>14 stars · Python · updated 2026-09-22</sub>
- **[bohutang/sift](https://github.com/bohutang/sift)** - Chrome extension that labels every post on X (Substance · Humor · Chit-chat · Promo · Junk · AI-written) with TypeSafe Jev, and hides the ones you don't want.  
  <sub>12 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[HyunjunJeon/pi-quiet-ask](https://github.com/HyunjunJeon/pi-quiet-ask)** - TypeSafe Jev as the pi coding agent's quiet decision layer  
  <sub>12 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[joelhooks/pi-fast-jev-compaction](https://github.com/joelhooks/pi-fast-jev-compaction)** - Pi extension: verbatim context compaction with TypeSafe Jev decisions  
  <sub>12 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[manifoldor/xtags](https://github.com/manifoldor/xtags)** - 在 X 的时间线上，给每条帖子标出它想让你干什么。判断来自 Jev，一个只返回概率、不生成文本的模型。  
  <sub>12 stars · JavaScript · MIT · updated 2026-09-23</sub>
- **[Qew7/jev-feels](https://github.com/Qew7/jev-feels)** - Semantic decisions as ordinary Ruby #feels?, #decide, #score, Rails validations and pattern matching powered by Jev  
  <sub>12 stars · Ruby · MIT · updated 2026-09-22</sub>
- **[TarunTomar122/jev-askable-arm](https://github.com/TarunTomar122/jev-askable-arm)** - Zero-shot English goals on a sim Franka. Jev chains hardcoded primitives.  
  <sub>12 stars · Python · MIT · updated 2026-09-17</sub>
- **[aaazzam/jev](https://github.com/aaazzam/jev)** - No description provided.  
  <sub>11 stars · Python · updated 2026-09-18</sub>
- **[Nisaka520/JevGuide](https://github.com/Nisaka520/JevGuide)** - 弦外之音 —— 微信聊天里的关系进展助手：读屏（无障碍树 / 截屏视觉）→ Jev 判读 + 攻略度 → 聊天模型出 3 条候选回复，攻略度常驻挂在屏幕上。不改微信、不发消息、不注入点击。  
  <sub>11 stars · Kotlin · MIT · updated 2026-09-24</sub>
- **[markusbug/jevymarket](https://github.com/markusbug/jevymarket)** - Polymarket trading bot driven by Jev (TypeSafe AI) via OpenRouter  
  <sub>10 stars · Python · MIT · updated 2026-09-20</sub>
- **[mattt/AnyDecisionModel](https://github.com/mattt/AnyDecisionModel)** - A Swift package for typed decisions from language models (probabilities, choices, and scores), with support for local MLX models and the TypeSafe Jev API.  
  <sub>10 stars · Swift · Apache-2.0 · updated 2026-09-22</sub>
- **[chl-5g/QuantLLM](https://github.com/chl-5g/QuantLLM)** - QuantLLM — A股量化多 Agent 交易系统  
  <sub>9 stars · Python · updated 2026-09-21</sub>
- **[composio-community/jev-orchestrator](https://github.com/composio-community/jev-orchestrator)** - No description provided.  
  <sub>9 stars · JavaScript · updated 2026-09-23</sub>
- **[jomatsu/zod-jev](https://github.com/jomatsu/zod-jev)** - No description provided.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[kingdsa/AI-Relationship-Copilot](https://github.com/kingdsa/AI-Relationship-Copilot)** - No description provided.  
  <sub>9 stars · TypeScript · updated 2026-09-21</sub>
- **[lexmount/jev-browser-bridge](https://github.com/lexmount/jev-browser-bridge)** - Plug any CDP browser into Jev — cloud, local or self-hosted, including browsers that never draw a page.  
  <sub>9 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[nozomi-koborinai/jev-spec](https://github.com/nozomi-koborinai/jev-spec)** - ⚡ Catch spec drift on every commit: check your code against your Markdown specs with TypeSafe AI's Jev model.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[poiuyjie/jev_project_context](https://github.com/poiuyjie/jev_project_context)** - Evidence-first long-term experiment memory skill for AI coding agents, with optional Jev decision-model layers  
  <sub>9 stars · Python · MIT · updated 2026-09-22</sub>
- **[qs-lll/twitter-jev-guard](https://github.com/qs-lll/twitter-jev-guard)** - 使用 TypeSafe Jev 在 X/Twitter 时间线上识别低质量、垃圾和广告帖子，并在文字区域显示醒目的半透明水印。  
  <sub>9 stars · JavaScript · updated 2026-09-21</sub>
- **[yibie/laya-jev-lab](https://github.com/yibie/laya-jev-lab)** - Independent measurements of typed-decision models: Jev (TypeSafe API) vs Laya (open weights), and a local-first cascade that matches Jev's accuracy at 1.8x the speed  
  <sub>9 stars · Python · MIT · updated 2026-09-20</sub>
- **[dannote/jev_nx](https://github.com/dannote/jev_nx)** - Open decision models as a Jev backend, running in-process on Nx  
  <sub>8 stars · Elixir · Apache-2.0 · updated 2026-09-23</sub>
- **[metalbear-co/jev-auto-approve](https://github.com/metalbear-co/jev-auto-approve)** - Jev PR auto approver  
  <sub>8 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[Ryu0118/jev-sim-use](https://github.com/Ryu0118/jev-sim-use)** - 📱 Reach any screen with sim-use at Jev speed  
  <sub>8 stars · Swift · MIT · updated 2026-09-25</sub>
- **[YiLight0/paperfocus](https://github.com/YiLight0/paperfocus)** - Question-guided evidence highlighting for research papers, powered by Jev.  
  <sub>8 stars · JavaScript · updated 2026-09-21</sub>
- **[enoyola/jev-grand-prix](https://github.com/enoyola/jev-grand-prix)** - An F1 racing game where TypeSafe's Jev picks the racing line and the pedals, and learns each corner's limit between laps  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[gtaras7/typesafe-jev](https://github.com/gtaras7/typesafe-jev)** - Screen a folder of CVs with the TypeSafe Jev decision model: typed judgments, an editable policy, free re-scoring.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[Kiln-AI/jev_jsonschema](https://github.com/Kiln-AI/jev_jsonschema)** - Run a JSON Schema through TypeSafe's Jev API, and get JSON back.  
  <sub>7 stars · Python · MIT · updated 2026-09-19</sub>
- **[littlewindy123/jev-weekend-shopping-chrome](https://github.com/littlewindy123/jev-weekend-shopping-chrome)** - 把对双休的支持，带进每一次购物。逛淘宝、京东时，JEV 实时猜测商品背后的工作制，疑似非双休直接盖上 PASS。原页生效，边逛边选。  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[Noe1120/jev-advisor](https://github.com/Noe1120/jev-advisor)** - A private, local decision-advice Skill for Codex that ranks tool choices, estimates risks, guides recovery, and checks completion evidence.  
  <sub>7 stars · Python · MIT · updated 2026-09-24</sub>
- **[scale-venture-partners/riff](https://github.com/scale-venture-partners/riff)** - A small, fast prose linter: ruff-style rule codes for writing, backed by TypeSafe's Jev model  
  <sub>7 stars · Python · MIT · updated 2026-09-18</sub>
- **[yohanargentina-oss/Foq](https://github.com/yohanargentina-oss/Foq)** - ⚡ Foq — the FREE, local, open-source alternative to Jev. Typed System 1 decisions in ~25 ms — no waitlist, no cloud, no per-token cost. foq.fr  
  <sub>7 stars · Python · MIT · updated 2026-09-20</sub>
- **[Aimark-dai/jev-chat-windows-deepseek-jev](https://github.com/Aimark-dai/jev-chat-windows-deepseek-jev)** - DeepSeek + TypeSafe JEV 微信回复助手：Windows 正式版、Apple Silicon macOS 预览版；本地 OCR 与人工可控回复  
  <sub>6 stars · Python · updated 2026-09-23</sub>
- **[ajensenwaud/hermes-jev-plugin](https://github.com/ajensenwaud/hermes-jev-plugin)** - TypeSafe Jev (System One) decision tools for Hermes Agent: jev_check / jev_route / jev_score / jev_evaluate  
  <sub>6 stars · Python · MIT · updated 2026-09-19</sub>
- **[Astro-Han/decision-head-rlcd](https://github.com/Astro-Han/decision-head-rlcd)** - Where does a decision model's generalisation come from? RLCD on Qwen3.5-4B, held-out sets grouped by training-data coverage, JevBench and three external suites.  
  <sub>6 stars · Python · updated 2026-09-20</sub>
- **[emirbartu/jev-for-all](https://github.com/emirbartu/jev-for-all)** - Jev for every agentic development workflow — the System One decision model wired into whatever harness an agent codes in: OpenCode today, Claude Code and Hermes adapters next.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[emirbartu/opencode-system-one](https://github.com/emirbartu/opencode-system-one)** - Jev for every agentic development workflow — the System One decision model wired into whatever harness an agent codes in: OpenCode today, Claude Code and Hermes adapters next.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[hotdata-dev/datafusion-jev](https://github.com/hotdata-dev/datafusion-jev)** - Typed Jev decisions in DataFusion SQL  
  <sub>6 stars · Rust · updated 2026-09-24</sub>
- **[lbotinelly/jev-little-airways](https://github.com/lbotinelly/jev-little-airways)** - A show-and-tell capability study for Jev, TypeSafe's System One decision model.  
  <sub>6 stars · HTML · MIT · updated 2026-09-17</sub>
- **[milanboers/jev-plays-pokemon](https://github.com/milanboers/jev-plays-pokemon)** - Playing Pokemon Red using TypeSafe Jev  
  <sub>6 stars · Python · updated 2026-09-18</sub>
- **[pambrose/jev4k](https://github.com/pambrose/jev4k)** - A Kotlin DSL and client for TypeSafe's Jev model  
  <sub>6 stars · Kotlin · Apache-2.0 · updated 2026-09-20</sub>
- **[paulsmith/computer-use-jev](https://github.com/paulsmith/computer-use-jev)** - macOS computer use driven by Jev (TypeSafe System One) as the decision maker  
  <sub>6 stars · Go · MIT · updated 2026-09-17</sub>
- **[adhyaay-karnwal/jev-chat](https://github.com/adhyaay-karnwal/jev-chat)** - A chatbot from typed Jev decisions: hierarchical speculative decoding over System One probabilities.  
  <sub>5 stars · Python · MIT · updated 2026-09-17</sub>
- **[christian-taillon/opencode-jev-compactor](https://github.com/christian-taillon/opencode-jev-compactor)** - Jev powered OpenCode compaction  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[Gaurav-Gosain/jev-go](https://github.com/Gaurav-Gosain/jev-go)** - Go client for TypeSafe's System One API and its model Jev: typed judgments and calibrated probabilities instead of generated text  
  <sub>5 stars · Go · MIT · updated 2026-09-16</sub>
- **[harshil1712/slidepilot](https://github.com/harshil1712/slidepilot)** - Voice-driven semantic auto-advance for Slidev, powered by Cloudflare Agents and TypeSafe AI Jev  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[jamesward/zio-typesafe-ai](https://github.com/jamesward/zio-typesafe-ai)** - No description provided.  
  <sub>5 stars · Scala · Apache-2.0 · updated 2026-09-23</sub>
- **[justhalfbit/dsh-plugin-jev-effort-selector](https://github.com/justhalfbit/dsh-plugin-jev-effort-selector)** - DeepSeek Harness (DSH) 推理等级自动选择插件：由 Jev System One 模型判断每条消息值多少思考量，按模型声明的等级自动推导档位，上下文信封让「继续」这类追问继承话题深度，低置信度向上取，任何失败都静默沿用原等级。 | Jev-driven reasoning effort per message: per-model ladders derived from what each model advertises, a fixed-size context envelope so follow-ups inherit topic depth, ties break upward, silent fallback on every failure path.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-24</sub>
- **[oldmoldycake/jev_vampire_survivors](https://github.com/oldmoldycake/jev_vampire_survivors)** - TypeSafe's Jev model plays Vampire Survivors on Steam: BepInEx plugin + Python brain + live decision dashboard. Native Linux only.  
  <sub>5 stars · Python · MIT · updated 2026-09-19</sub>
- **[ra2web/jev-helper](https://github.com/ra2web/jev-helper)** - A helper which use JEV to play ra2web(WannaFire Version)[王二火大]  
  <sub>5 stars · JavaScript · updated 2026-09-24</sub>
- **[rthomas24/jev-realtime-trading](https://github.com/rthomas24/jev-realtime-trading)** - Paper trading agents on a live tape, decided every second by TypeSafe's Jev (System One). Electron desktop app.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[sametcn99/my-stars-atlas](https://github.com/sametcn99/my-stars-atlas)** - A generated catalog of starred GitHub repositories, grouped into stable categories.  
  <sub>5 stars · TypeScript · updated 2026-09-19</sub>
- **[TheAdaply/jev-apply](https://github.com/TheAdaply/jev-apply)** - Memory-backed job-application skill: Jev selects, an LLM writes only new text, Playwright fills. Greenhouse + Ashby.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-25</sub>
- **[1jehuang/jev-pr-labeler](https://github.com/1jehuang/jev-pr-labeler)** - Semantic GitHub PR labels using Jev's typed decisions, with conceptual scope instead of line counts  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[AiPersonacademy/jev-resume-disqualifier](https://github.com/AiPersonacademy/jev-resume-disqualifier)** - Jev Resume Disqualifier: Sub-25ms automated resume knockout engine powered by TypeSafe Jev System One decision intelligence. Eliminates 80% of unqualified applicants with deterministic date math & EEOC-safe rejection notices.  
  <sub>4 stars · Python · MIT · updated 2026-09-20</sub>
- **[alpha-tales/alphaoptimizer](https://github.com/alpha-tales/alphaoptimizer)** - Jev-powered output optimization for Codex, built to keep large tool results concise and usable.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[amanadhav/traderai](https://github.com/amanadhav/traderai)** - Self-hosted AI trading intelligence platform - scoring engine, two-model AI analyst (Claude + TypeSafe Jev), risk engine, discipline guardian, backtester, React dashboard  
  <sub>4 stars · Python · MIT · updated 2026-09-21</sub>
- **[arthurfiorette/jev-playwright](https://github.com/arthurfiorette/jev-playwright)** - Jev-powered Playwright test selection  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[benjamincanac/tia](https://github.com/benjamincanac/tia)** - Triage Issue Agent for GitHub, built with Eve and Jev.  
  <sub>4 stars · TypeScript · updated 2026-09-24</sub>
- **[deep-diver/mini-jev](https://github.com/deep-diver/mini-jev)** - No description provided.  
  <sub>4 stars · Python · updated 2026-09-18</sub>
- **[duckegg0623-create/jev-wechat-live](https://github.com/duckegg0623-create/jev-wechat-live)** - 用 TypeSafe Jev 实时解读微信消息的桌面浮层 —— 未完成的实验项目，判定准确率不达标，附完整踩坑记录  
  <sub>4 stars · Python · MIT · updated 2026-09-21</sub>
- **[epergaboni/jevseo](https://github.com/epergaboni/jevseo)** - Typed SEO, AEO and GEO judgments powered by Jev, a System One decision model. Code owns the rules, the model owns the meaning.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[etweisberg/jev-ui](https://github.com/etweisberg/jev-ui)** - React components that resolve which component to render, how to order a list, and whether to show an affordance — from calibrated judgments returned by TypeSafe's Jev.  
  <sub>4 stars · TypeScript · updated 2026-09-21</sub>
- **[hellogumbo/should-ai-kill-us-all](https://github.com/hellogumbo/should-ai-kill-us-all)** - We ask Jev, TypeSafe AI's System One model, whether AI should kill us all. Every ten minutes. Using the actual headlines.  
  <sub>4 stars · JavaScript · CC0-1.0 · updated 2026-09-18</sub>
- **[LamplighterPaul/jev-piano](https://github.com/LamplighterPaul/jev-piano)** - Jev cannot generate a single note. Given a piano and the right questions, it improvises anyway.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-24</sub>
- **[liao96312/jev-arena-nanojev](https://github.com/liao96312/jev-arena-nanojev)** - 完全本地的 NanoJev 网格决策游戏实验场，支持中文 Pygame、多关卡与 GTX 1660S 训练  
  <sub>4 stars · Python · updated 2026-09-25</sub>
- **[mgarlabx/Jev-Enem](https://github.com/mgarlabx/Jev-Enem)** - No description provided.  
  <sub>4 stars · Jupyter Notebook · updated 2026-09-20</sub>
- **[MongLong0214/jev-gate](https://github.com/MongLong0214/jev-gate)** - Not every coding task needs your best model. Experimental Jev-powered model routing for Claude Code — V3 prototype runs today, V4 routes at the task boundary.  
  <sub>4 stars · TypeScript · updated 2026-09-25</sub>
- **[mstf-svndk/jev-windows-voice](https://github.com/mstf-svndk/jev-windows-voice)** - Türkçe ve İngilizce doğal konuşmayla Windows 10/11 bilgisayar kontrolü: OpenAI Realtime, local Whisper, Jev, UI Automation ve Playwright.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[muhammedilyasy/jev-mail](https://github.com/muhammedilyasy/jev-mail)** - Chrome extension that triages Gmail with TypeSafe's Jev model: category, priority, spam % and reply % on every email.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[noetion/dsh-jev](https://github.com/noetion/dsh-jev)** - DSH bundle that registers jev_ask for TypeSafe Jev noul, choice, and score answers.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[picaye/jev-compaction](https://github.com/picaye/jev-compaction)** - Context compaction for Hermes sessions that never summarises: every tool call is scored by TypeSafe's Jev model, stale calls are dropped, everything kept stays verbatim.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[QuentinDanblon/pi-fast-jev-compaction](https://github.com/QuentinDanblon/pi-fast-jev-compaction)** - Verbatim context pruning for the pi coding agent, scored by TypeSafe Jev: stale tool calls and results are dropped or truncated, everything kept stays verbatim.  
  <sub>4 stars · TypeScript · updated 2026-09-18</sub>
- **[reycn/smart-switch](https://github.com/reycn/smart-switch)** - Reimagined window switcher for macOS using frontier artificial intelligence. Predicted by TypeSafe's Jev model  
  <sub>4 stars · Swift · AGPL-3.0 · updated 2026-09-18</sub>
- **[sarathi-aiml/jevsql](https://github.com/sarathi-aiml/jevsql)** - Text-to-SQL where the model never writes SQL — typed, calibrated decisions (TypeSafe Jev) + code-assembled queries  
  <sub>4 stars · Python · updated 2026-09-21</sub>
- **[soderlind/ai-provider-for-jev](https://github.com/soderlind/ai-provider-for-jev)** - Connect WordPress to TypeSafe's Jev System One model for structured decisions (choice, score, noul).  
  <sub>4 stars · PHP · updated 2026-09-18</sub>
- **[AboveColin/jevclient](https://github.com/AboveColin/jevclient)** - Async Python client for TypeSafe Jev. Typed questions in, probabilities and choices out, no prose to parse.  
  <sub>3 stars · Python · MIT · updated 2026-09-21</sub>
- **[alanhuangyoo/wev](https://github.com/alanhuangyoo/wev)** - Local System-One decision models: typed questions in, calibrated probabilities out. General decisions and browser-agent steps.  
  <sub>3 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[alexsatch/omp-auto-mode](https://github.com/alexsatch/omp-auto-mode)** - Plugin for oh-my-pi that uses Typesafe Jev API to classify tool calls as safe/unsafe/ask  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[chengyongru/notiq](https://github.com/chengyongru/notiq)** - Native Android notification filtering with natural-language rules, powered by Jev or self-hosted FastJev.  
  <sub>3 stars · Kotlin · updated 2026-09-23</sub>
- **[DragosTana/JEV-FC](https://github.com/DragosTana/JEV-FC)** - No description provided.  
  <sub>3 stars · Python · updated 2026-09-20</sub>
- **[eachann1024/pi-jev-reply](https://github.com/eachann1024/pi-jev-reply)** - Pi extension: clearer replies via Jev review + optional rewrite/visuals  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[eran-broder/jev-skills](https://github.com/eran-broder/jev-skills)** - Skills without the context tax. Claude Code and Codex plugin: TypeSafe's Jev decides on every turn which skills the model sees. Always-on context cost: 0 tokens.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-23</sub>
- **[fatelei/yueli](https://github.com/fatelei/yueli)** - resume judgement use jev model  
  <sub>3 stars · Rust · Apache-2.0 · updated 2026-09-20</sub>
- **[jiayao/ctrl-f](https://github.com/jiayao/ctrl-f)** - ctrl-f that understands your query  
  <sub>3 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[khmuhtadin/n8n-nodes-jev-classification](https://github.com/khmuhtadin/n8n-nodes-jev-classification)** - n8n community node for Jev by TypeSafe AI: classify, score and check text with calibrated probabilities. Parallel requests and multi-item batching.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[kolawong/fast-compaction-dsh](https://github.com/kolawong/fast-compaction-dsh)** - Verdict-based context compaction for DeepSeek Harness — replaces lossy LLM summaries with fast keep/truncate/drop decisions from jev-latest; everything kept stays verbatim. Port of tamaratran/fast-jev-compaction.  
  <sub>3 stars · TypeScript · updated 2026-09-20</sub>
- **[littlewindy123/jev-bili-filter](https://github.com/littlewindy123/jev-bili-filter)** - 弹幕照开，噪音别来。用 JEV 为 B 站评论和弹幕降噪：剧透、反串黑、广告、基本盘一键过滤，想屏蔽什么，再写一句话。Chrome 插件，原页生效，MIT 开源。  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[mansicer/jev-plays](https://github.com/mansicer/jev-plays)** - A System One model (jev) plays Craftax; an LLM sets the goals  
  <sub>3 stars · Python · Apache-2.0 · updated 2026-09-24</sub>
- **[markpyvo/jev-delegate](https://github.com/markpyvo/jev-delegate)** - Claude Code skill that sends each task to the cheapest model that can handle it  
  <sub>3 stars · Python · MIT · updated 2026-09-23</sub>
- **[phureewat29/jev-got](https://github.com/phureewat29/jev-got)** - Jev (TypeSafe AI) PoC through Game of Thrones  
  <sub>3 stars · TypeScript · updated 2026-09-19</sub>
- **[teyhouse/jev-secret-detection](https://github.com/teyhouse/jev-secret-detection)** - Measures how well TypeSafe's RLCD-Jev model spots real secret credentials in file snippets  
  <sub>3 stars · Python · updated 2026-09-18</sub>
- **[vtrivedy/jev-plays-games](https://github.com/vtrivedy/jev-plays-games)** - Chess, Connect Four, and a decision model. Play Jev or watch Jev play itself.  
  <sub>3 stars · JavaScript · updated 2026-09-18</sub>
- **[xz-dev/pi-jev-todo-audit](https://github.com/xz-dev/pi-jev-todo-audit)** - Pi extension that audits rpiv-todo board drift every 10 agent loops using TypeSafe's jev model, injecting corrective nudges when the agent wanders off-task  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-25</sub>
- **[yangyu666/dsh-jev-prune](https://github.com/yangyu666/dsh-jev-prune)** - Jev-judged context compaction for DeepSeek Harness: semantic tool-result pruning + deterministic receipt compaction  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-24</sub>
- **[Aben25/jev-sim](https://github.com/Aben25/jev-sim)** - Fast mobile-simulator computer-use: sim-use + TypeSafe Jev (Cua jev-use pattern for iOS/Android sims)  
  <sub>2 stars · Python · MIT · updated 2026-09-19</sub>
- **[acorn181/semantic-bookmark](https://github.com/acorn181/semantic-bookmark)** - Organize bookmarks with your own semantic rules using Jev.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-19</sub>

<sub>275 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Other lists and directories

- **[awesome-huohaha/jev-mail-feishu](https://github.com/awesome-huohaha/jev-mail-feishu)** - 基于 Jev 的智能邮件提醒工具：自动读取 QQ 邮件、判断重要程度、提取重点原文，写入飞书多维表格并私信提醒，附完整配置教程。  
  <sub>0 stars · Python · updated 2026-09-23</sub>
- **[dakotac1994/awesome-jev](https://github.com/dakotac1994/awesome-jev)** - Awesome list for Jev — TypeSafe AI's decision-only System One model: typed decisions (Choice, Score, Noul) with calibrated probabilities. Guides, recipes, runnable examples, honest benchmarks, community projects.  
  <sub>0 stars · MIT · updated 2026-09-25</sub>

---

<sub>2400 entries · 0 of them in none of the 14 other Jev directories checked on 2026-09-25 · last updated 2026-09-25 · 341 candidates in the [review queue](data/review-queue.md) · generated by [`tools/fetch.js`](tools/fetch.js)</sub>

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
