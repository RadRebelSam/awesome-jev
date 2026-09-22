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

- **[Finderchangchang/jev-chat-JARVIS](https://github.com/Finderchangchang/jev-chat-JARVIS)** - +2887 stars in 7 days
- **[tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction)** - +1661 stars in 7 days
- **[typesafe-ai/skills](https://github.com/typesafe-ai/skills)** - +878 stars in 7 days
- **[bespokelabsai/nimble](https://github.com/bespokelabsai/nimble)** - +851 stars in 7 days
- **[TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev)** - +779 stars in 7 days

### Official

- **[TypeSafe AI - Introducing System One Models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)** - The launch post from TypeSafe AI: what a System One model is, and what Jev returns instead of text.
- **[typesafe-ai/skills](https://github.com/typesafe-ai/skills)** - Agent skills for building with TypeSafe's System One API  
  <sub>1709 stars · MIT · updated 2026-09-12</sub>
- **[typesafe-ai/typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js)** - The official TypeScript/JavaScript library for the TypeSafe API  
  <sub>221 stars · TypeScript · MIT · updated 2026-09-15</sub>
- **[typesafe-ai/typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python)** - The official Python library for the TypeSafe API  
  <sub>198 stars · Python · MIT · updated 2026-09-21</sub>

### SDKs and clients

- **[razorback16/openjev](https://github.com/razorback16/openjev)** - Open, Jev-compatible System One decision server on DiffusionGemma  
  <sub>299 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[logan-markewich/jeff](https://github.com/logan-markewich/jeff)** - A self-hosted drop-in replacement for TypeSafe's jev, powered by GliFormer.  
  <sub>208 stars · Python · MIT · updated 2026-09-20</sub>
- **[FerryCorleone/crush-monitor](https://github.com/FerryCorleone/crush-monitor)** - Crush 好感监控器：用 Jev 分析微信聊天的情绪、意图和回复表现。本机部署，使用自己的 API Key。  
  <sub>151 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[vinilana/jev-gateway](https://github.com/vinilana/jev-gateway)** - An easy way to use jev with your coding agent for tool calling reasoning  
  <sub>137 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[jexp/neo4jev](https://github.com/jexp/neo4jev)** - Typesafe.ai System One Model Jev navigating a Neo4j graph by using a classifier over neighbouring relationships  
  <sub>85 stars · Jupyter Notebook · MIT · updated 2026-09-18</sub>
- **[f/jev-leftpad](https://github.com/f/jev-leftpad)** - Left-pad strings with TypeSafe AI's Jev. For reasons.  
  <sub>77 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[Bodila51/grok-bot-jev](https://github.com/Bodila51/grok-bot-jev)** - Connect TypeSafe Jev to Grok Bot as a cheap decision layer - usage gates, skill template, examples  
  <sub>74 stars · Python · MIT · updated 2026-09-20</sub>
- **[fazlerocks/jevmail](https://github.com/fazlerocks/jevmail)** - Open-source AI email triage for Gmail. Sorts your inbox into Needs reply, Updates, Promos, Sales and Spam with Jev, TypeSafe AI's decision model, via Vercel AI Gateway. Read-only, runs locally, 1,000 emails in about a minute for 3 cents.  
  <sub>62 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[AboveColin/HA-Jev](https://github.com/AboveColin/HA-Jev)** - Ask your house a question, get a number back. Home Assistant integration for TypeSafe Jev: typed answers as sensors, four actions for automations, and a conversation agent for Assist.  
  <sub>46 stars · Python · MIT · updated 2026-09-21</sub>
- **[hunkim/solar-mini4-jev](https://github.com/hunkim/solar-mini4-jev)** - No description provided.  
  <sub>24 stars · Python · updated 2026-09-21</sub>
- **[spring-ai-community/spring-ai-typesafe](https://github.com/spring-ai-community/spring-ai-typesafe)** - A Java SDK for the TypeSafe AI JEV API, & Spring AI TypeSafe integrations.  
  <sub>24 stars · Java · Apache-2.0 · updated 2026-09-22</sub>
- **[sorrycc/typesafe-snake](https://github.com/sorrycc/typesafe-snake)** - Snake auto-played by TypeSafe's Jev model: one System One choice per tick, legal moves and facts generated in code  
  <sub>21 stars · TypeScript · updated 2026-09-17</sub>
- **[rhighs/jev-code](https://github.com/rhighs/jev-code)** - Interactive TypeScript coding CLI powered by Jev typed decisions and constrained AST generation.  
  <sub>20 stars · TypeScript · updated 2026-09-20</sub>
- **[Ray-Hughes/jevalyn](https://github.com/Ray-Hughes/jevalyn)** - The decision layer for your Rails app. A Rails-native wrapper around TypeSafe's Jev System One API: typed, calibrated decisions in your control flow.  
  <sub>18 stars · Ruby · MIT · updated 2026-09-21</sub>
- **[bhaiG-de/jev-design-test](https://github.com/bhaiG-de/jev-design-test)** - Jev shadcn-block generator  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[romaluev/jev-ego](https://github.com/romaluev/jev-ego)** - Fast browser agent for ego lite. One TypeSafe request per step; an agent or Jev picks the move.  
  <sub>15 stars · TypeScript · updated 2026-09-17</sub>
- **[buberlo/dsh-jev](https://github.com/buberlo/dsh-jev)** - Jev-powered decision layer for DeepSeek Harness  
  <sub>13 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[atharvamhaske/typesafe-sdk-go](https://github.com/atharvamhaske/typesafe-sdk-go)** - unofficial go sdk for typesafe ai. not affiliated with or endorsed by typesafe ai. a side project built to fill the missing go sdk gap, for the community to use.  
  <sub>12 stars · Go · MIT · updated 2026-09-21</sub>
- **[chengyongru/fastjev](https://github.com/chengyongru/fastjev)** - SDK-first, independently maintained SemIf fork for fast, self-hosted semantic decisions.  
  <sub>10 stars · Python · MIT · updated 2026-09-22</sub>
- **[evoke-build/evoke](https://github.com/evoke-build/evoke)** - Software, by reflex. A sentence becomes a call of a small program, chosen by Jev, TypeSafe AI's classifier, and run only when it is sure enough. Reflexes are recipes anyone can write, share and improve. A CLI you talk to, a package manager for reflexes from git, and a TypeScript SDK.  
  <sub>10 stars · Rust · Apache-2.0 · updated 2026-09-22</sub>
- **[frostney/clean-code-review](https://github.com/frostney/clean-code-review)** - Every code file in a pull request, judged against Uncle Bob's Clean Code by TypeSafe's Jev, then reviewed by Luna. Built on eve and Next.js.  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[syumai/jevyoumean](https://github.com/syumai/jevyoumean)** - Semantic "Did you mean?" for any CLI — wraps commands and uses TypeSafe's Jev to match subcommand typos by intent, not edit distance.  
  <sub>10 stars · Go · MIT · updated 2026-09-22</sub>
- **[arielweinberger/jev-autopilot](https://github.com/arielweinberger/jev-autopilot)** - This demo uses Jev from TypeSafe AI to autonomously fly a drone in a random city from point A to point B, avoiding obstacles along the way. A trip costs $0.01.  
  <sub>9 stars · TypeScript · updated 2026-09-17</sub>
- **[hev/reranker](https://github.com/hev/reranker)** - Use Jev (TypeSafe's System One model) as a calibrated reranker: one call, up to 30 documents, a probability per document. Apache-2.0.  
  <sub>9 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[Tangerg/typesafe-sdk-go](https://github.com/Tangerg/typesafe-sdk-go)** - Go SDK for the TypeSafe AI API — typed questions in, probability distributions out.  
  <sub>9 stars · Go · MIT · updated 2026-09-19</sub>
- **[NSStudent/JevSwiftSDK](https://github.com/NSStudent/JevSwiftSDK)** - An independent, type-safe Swift SDK for TypeSafe Jev, with async/await, batching, retries, and SPM support.  
  <sub>8 stars · Swift · MIT · updated 2026-09-19</sub>
- **[Skyvern-AI/jevscape](https://github.com/Skyvern-AI/jevscape)** - RuneBench harness for TypeSafe's Jev: bounded action catalog, tick-mode controller and a live dashboard  
  <sub>8 stars · TypeScript · updated 2026-09-18</sub>
- **[devbackend/jevgo](https://github.com/devbackend/jevgo)** - Unofficial Go client for the TypeSafe AI System One API (Jev) — typed questions in, calibrated answers out.  
  <sub>7 stars · Go · MIT · updated 2026-09-21</sub>
- **[joevidev/ui-generator-instinct-jev](https://github.com/joevidev/ui-generator-instinct-jev)** - No description provided.  
  <sub>7 stars · TypeScript · updated 2026-09-18</sub>
- **[doronp/jevc](https://github.com/doronp/jevc)** - Compile agent policy prose into deterministic verdict programs: narrow evidence questions for the model, the verdict computed in code. Install: npm i -g jev-compiler  
  <sub>6 stars · TypeScript · Apache-2.0 · updated 2026-09-22</sub>
- **[joshhu/jevtest](https://github.com/joshhu/jevtest)** - 情緒測謊器：嘴上說「好」，心裡真的好嗎？用 TypeSafe Jev（System One 模型）透過 OpenRouter 即時判斷，並與一般 LLM 對照  
  <sub>6 stars · HTML · updated 2026-09-20</sub>
- **[joshmn/typesafe-sdk](https://github.com/joshmn/typesafe-sdk)** - Ruby client for typesafe.ai  
  <sub>6 stars · Ruby · MIT · updated 2026-09-19</sub>
- **[leftspace89/JevBird](https://github.com/leftspace89/JevBird)** - No description provided.  
  <sub>6 stars · Python · MIT · updated 2026-09-17</sub>
- **[saibimajdi/typesafeai-dotnet-sdk](https://github.com/saibimajdi/typesafeai-dotnet-sdk)** - Community .NET SDK for the TypeSafe AI System One API — typed noul, choice, and score questions with structured, confidence-scored answers. Not affiliated with TypeSafe AI.  
  <sub>6 stars · C# · MIT · updated 2026-09-18</sub>
- **[smartaces/jev-plays-streetfighter-2](https://github.com/smartaces/jev-plays-streetfighter-2)** - No description provided.  
  <sub>6 stars · Python · updated 2026-09-21</sub>
- **[ticofab/scala-jev-sdk](https://github.com/ticofab/scala-jev-sdk)** - Scala SDK for Jev. No effect system bundled.  
  <sub>6 stars · Scala · Apache-2.0 · updated 2026-09-19</sub>
- **[tontoko/jev-browser](https://github.com/tontoko/jev-browser)** - One grounded Jev/Playwright core: typed SDK, persistent CLI, and MCP server with native browser operations and deterministic assertions.  
  <sub>6 stars · JavaScript · Apache-2.0 · updated 2026-09-22</sub>
- **[TrustifAI/typed_evals](https://github.com/TrustifAI/typed_evals)** - Fast, typed, calibrated evaluations for LLM and agent outputs, powered by Jev — with simple, framework-agnostic Python APIs  
  <sub>6 stars · Python · MIT · updated 2026-09-20</sub>
- **[3clyp50/a0-typesafe-ai](https://github.com/3clyp50/a0-typesafe-ai)** - TypeSafe AI Jev judgments for Agent Zero, with typed tools and probability cards.  
  <sub>5 stars · Python · MIT · updated 2026-09-17</sub>
- **[AbdelStark/bicameral](https://github.com/AbdelStark/bicameral)** - Hybrid coding harness: System 2 writes, System 1 (Jev) runs reflexes.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-16</sub>
- **[exfly/laya-jev-compatible-server](https://github.com/exfly/laya-jev-compatible-server)** - A TypeSafe Jev-compatible HTTP server (POST /v1/systemone)  
  <sub>5 stars · Python · updated 2026-09-20</sub>
- **[nshkrdotcom/typesafe_sdk](https://github.com/nshkrdotcom/typesafe_sdk)** - An idiomatic, type-safe Elixir port of the official TypeScript AI SDK (ai / ai-sdk) providing unified LLM integrations, streaming text and structured outputs, tool calling, and agentic workflows. Jev is their current flagship model and is the first System One model.  
  <sub>5 stars · Elixir · MIT · updated 2026-09-20</sub>
- **[tiandee/codex-jev-router](https://github.com/tiandee/codex-jev-router)** - No description provided.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[xingwudao/OpenJev](https://github.com/xingwudao/OpenJev)** - OpenJev: an independent Jev-inspired System One decision API based on TypeSafe.ai concepts. Choice, score and noul primitives, local mock server, Python and TypeScript SDKs. Real inference planned; not affiliated with TypeSafe AI.  
  <sub>5 stars · Python · updated 2026-09-18</sub>
- **[alterhq/typesafe-sdk-swift](https://github.com/alterhq/typesafe-sdk-swift)** - Unofficial Swift library for the TypeSafe API  
  <sub>4 stars · Swift · MIT · updated 2026-09-15</sub>
- **[gilljon/typesafe-ai-rs](https://github.com/gilljon/typesafe-ai-rs)** - Independent async and blocking Rust SDK for the TypeSafe AI System One API  
  <sub>4 stars · Rust · MIT · updated 2026-09-17</sub>
- **[hoangnb24/paseo-supervision](https://github.com/hoangnb24/paseo-supervision)** - Paseo plugin for supervising Lead–Peer communication protocol drift with Jev  
  <sub>4 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[kisshan13/typesafe-ai-go](https://github.com/kisshan13/typesafe-ai-go)** - Community-maintained Go SDK for the TypeSafe AI System One evaluation API, with typed questions, fluent builders, retries, and examples.  
  <sub>4 stars · Go · MIT · updated 2026-09-20</sub>
- **[Stumble/jev-go](https://github.com/Stumble/jev-go)** - Community Go SDK for TypeSafe AI Jev / System One  
  <sub>4 stars · Go · MIT · updated 2026-09-18</sub>
- **[amithgc/local-jev](https://github.com/amithgc/local-jev)** - A local, offline System One server compatible with TypeSafe's Jev API. It answers typed yes/no, category and score questions with small open models.  
  <sub>3 stars · Python · MIT · updated 2026-09-21</sub>
- **[antTing/jev-accounts-hub](https://github.com/antTing/jev-accounts-hub)** - A multi-account manager and API gateway for TypeSafe / Jev. 一个用于 TypeSafe / Jev 的多账户管理器和 API 网关。交流群：1102910606  
  <sub>3 stars · Go · MIT · updated 2026-09-22</sub>
- **[cernst11/graphql-classifier](https://github.com/cernst11/graphql-classifier)** - Scan a GraphQL schema and flag PII, auth gaps, N+1 risk, and naming/doc issues using TypeSafe's Jev model  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[cheeaun/jevmoji](https://github.com/cheeaun/jevmoji)** - Type anything. Get related emojis scored 0–3 with Jev.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[ChristianAlexander/effect-jev-cwe](https://github.com/ChristianAlexander/effect-jev-cwe)** - A demonstration of the Jev System 1 model in Effect, matching vulnerabilities to their underlying CWEs  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[gudcks0305/jev-java](https://github.com/gudcks0305/jev-java)** - Unofficial Java SDK for TypeSafe Jev and Vercel AI Gateway, with Spring Boot and WebClient support  
  <sub>3 stars · Java · MIT · updated 2026-09-21</sub>
- **[hardkoded/typesafe-sdk-dotnet](https://github.com/hardkoded/typesafe-sdk-dotnet)** - Unofficial .NET port of the TypeSafe AI client SDK (typed questions & answers)  
  <sub>3 stars · C# · MIT · updated 2026-09-22</sub>
- **[InsaneArts/typesafe-sdk-swift](https://github.com/InsaneArts/typesafe-sdk-swift)** - Swift SDK for TypeSafe AI  
  <sub>3 stars · Swift · MIT · updated 2026-09-17</sub>
- **[joshLong145/jev-cli](https://github.com/joshLong145/jev-cli)** - A CLI wrapper written in python for Jev  
  <sub>3 stars · Python · updated 2026-09-21</sub>
- **[mateonunez/jod](https://github.com/mateonunez/jod)** - Semantic schemas over TypeSafe's Jev — validate the state locally, then project typed answers.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[Olti1947/jev-java](https://github.com/Olti1947/jev-java)** - Idiomatic Java SDK for TypeSafe AI Jev System One decision engine  
  <sub>3 stars · Java · updated 2026-09-21</sub>
- **[Premo-Cloud/typesafe-sdk-java](https://github.com/Premo-Cloud/typesafe-sdk-java)** - Community Java client for the TypeSafe System One API (unofficial)  
  <sub>3 stars · Java · MIT · updated 2026-09-21</sub>
- **[realZachi/jevtest](https://github.com/realZachi/jevtest)** - Semantic test matchers for Vitest and Jest, powered by TypeSafe's Jev model. Write expectations in plain English, get calibrated probabilities back.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[replynodes/jev-web-analyzer](https://github.com/replynodes/jev-web-analyzer)** - See what Jev thinks about your SaaS website — powered by ReplyNodes web context and Vercel AI Gateway.  
  <sub>3 stars · TypeScript · Apache-2.0 · updated 2026-09-21</sub>
- **[sd109/typesafe-go](https://github.com/sd109/typesafe-go)** - A collection of typesafe.ai API utilities  
  <sub>3 stars · Go · Apache-2.0 · updated 2026-09-20</sub>
- **[TimothyZhang7/open-decisions](https://github.com/TimothyZhang7/open-decisions)** - Typed decisions from local open models. Python SDK, agent routing, and experimental Tetris. MIT.  
  <sub>3 stars · Python · MIT · updated 2026-09-18</sub>
- **[abhishekmamdapure/jev-information-extraction](https://github.com/abhishekmamdapure/jev-information-extraction)** - Parsing the PDF and extracting the relevant information  
  <sub>2 stars · Python · updated 2026-09-21</sub>
- **[Ashfaqbs/jev-mcp-spring](https://github.com/Ashfaqbs/jev-mcp-spring)** - Java/Spring Boot MCP server for TypeSafe Jev  
  <sub>2 stars · Java · Apache-2.0 · updated 2026-09-21</sub>
- **[Bodila51/Jev-chooses-a-LLM](https://github.com/Bodila51/Jev-chooses-a-LLM)** - Jev Router for Cursor - TypeSafe Jev picks COST/BALANCED/INTELLIGENCE, Cursor executes  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[colinmcdermott/emoji-jev](https://github.com/colinmcdermott/emoji-jev)** - Emoji autocomplete at the speed of typing. TypeSafe AI Jev on a Whop-hosted TanStack Start app.  
  <sub>2 stars · TypeScript · updated 2026-09-17</sub>
- **[dougsong/jev-android](https://github.com/dougsong/jev-android)** - A Kotlin Android SDK for UI automation powered by TypeSafe Jev, with an accessibility runtime and sample app.  
  <sub>2 stars · Kotlin · MIT · updated 2026-09-20</sub>
- **[dtunai/cu-Jev](https://github.com/dtunai/cu-Jev)** - cuda-Jev — a CUDA-native Jev System One decision inference engine. Jev compatible API, examples, and reproducible benchmarks.  
  <sub>2 stars · C · Apache-2.0 · updated 2026-09-20</sub>
- **[fgn/jevgo](https://github.com/fgn/jevgo)** - Go client for TypeSafe AI's System One API (Jev), with optional Langfuse instrumentation  
  <sub>2 stars · Go · MIT · updated 2026-09-17</sub>
- **[Hawxy/TypeSafeAI.Net](https://github.com/Hawxy/TypeSafeAI.Net)** - .NET SDK for the TypeSafe AI platform  
  <sub>2 stars · C# · Apache-2.0 · updated 2026-09-19</sub>
- **[JabbaKadabra/JevDotNet](https://github.com/JabbaKadabra/JevDotNet)** - .NET client for TypeSafe System One (Jev) — typed questions in, typed answers with probabilities and confidence out. No prompt engineering, no output parsing.  
  <sub>2 stars · C# · MIT · updated 2026-09-21</sub>
- **[micic-mihajlo/jev-tool-runner](https://github.com/micic-mihajlo/jev-tool-runner)** - Jev selects developer tools; Codex handles code. MCP and Jev-first execution with measured benchmarks.  
  <sub>2 stars · JavaScript · updated 2026-09-18</sub>
- **[morinokami/hunk-triage](https://github.com/morinokami/hunk-triage)** - Read the important changes first.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[mzainzulifqar/jev-php-sdk](https://github.com/mzainzulifqar/jev-php-sdk)** - PHP SDK for TypeSafe's Jev: send text and typed questions, get typed answers with calibrated confidence. PHP 8.1+, works with any PSR-18 client, Laravel 8–13.  
  <sub>2 stars · PHP · MIT · updated 2026-09-18</sub>
- **[opaielsheikh/typesafe-migration-guard](https://github.com/opaielsheikh/typesafe-migration-guard)** - Automated database migration safety reviewer powered by TypeSafe AI (Jev System One model)  
  <sub>2 stars · TypeScript · updated 2026-09-17</sub>
- **[portlandhodl/jev-cli](https://github.com/portlandhodl/jev-cli)** - No description provided.  
  <sub>2 stars · Rust · Apache-2.0 · updated 2026-09-18</sub>
- **[RevocGG/typesafe-jev-bridge](https://github.com/RevocGG/typesafe-jev-bridge)** - Use the TypeSafe Jev decision model (System One) anywhere: zero-dependency OpenAI-compatible bridge for 9Router, Claude Code, Cursor, Cline & any OpenAI SDK. Typed yes/no, choice & score judgments via CLI or HTTP.  
  <sub>2 stars · JavaScript · updated 2026-09-21</sub>
- **[samtay32/jev-system-architect](https://github.com/samtay32/jev-system-architect)** - System-architecture skill for TypeSafe AI Jev/System One — find fuzzy semantic judgment and turn it into small Choice/Score/Noul primitives.  
  <sub>2 stars · MIT · updated 2026-09-17</sub>
- **[santos-sanz/jev-audio-beeper](https://github.com/santos-sanz/jev-audio-beeper)** - Low-latency audio censorship POC using Jev typed decisions and ffmpeg.  
  <sub>2 stars · TypeScript · updated 2026-09-17</sub>
- **[simota/tenbin](https://github.com/simota/tenbin)** - MCP server and agent skill for the TypeSafe AI System One API (Jev): decompose a judgment into Choice / Score / Noul questions, lint them, measure on labelled data, and put calibrated thresholds in code  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[typesafe-sdk-csharp/typesafe-sdk](https://github.com/typesafe-sdk-csharp/typesafe-sdk)** - No description provided.  
  <sub>2 stars · C# · MIT · updated 2026-09-21</sub>
- **[vercel-labs/jev-ai-sdk-form-router](https://github.com/vercel-labs/jev-ai-sdk-form-router)** - Route form submissions to the right people with Jev and AI SDK.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[a1393323447/jevapi](https://github.com/a1393323447/jevapi)** - No description provided.  
  <sub>1 stars · Rust · MIT · updated 2026-09-21</sub>
- **[a3165458/ai-trading](https://github.com/a3165458/ai-trading)** - JEV/this-that decision loop for Lighter.xyz BTC and ETH perps with a BUY/SELL web blotter  
  <sub>1 stars · Python · updated 2026-09-21</sub>
- **[abeldzan/jev-rs](https://github.com/abeldzan/jev-rs)** - Async-first Rust SDK for the TypeSafe AI API  
  <sub>1 stars · Rust · MIT · updated 2026-09-18</sub>
- **[acharyaanusha/magic-jev](https://github.com/acharyaanusha/magic-jev)** - A Magic Jev (8) Ball for pull requests.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[afurm/typesafe-sdk-ruby](https://github.com/afurm/typesafe-sdk-ruby)** - Unofficial Ruby SDK for the TypeSafe AI API (Jev model) - typed questions, retries, and typed errors. Community port of typesafe-sdk-js.  
  <sub>1 stars · Ruby · MIT · updated 2026-09-21</sub>
- **[ajayk/jev-go-sdk](https://github.com/ajayk/jev-go-sdk)** - Dependency-free Go client for TypeSafe AI's System One API and the Jev model  
  <sub>1 stars · Go · Apache-2.0 · updated 2026-09-21</sub>
- **[ajmeese7/jev-chess](https://github.com/ajmeese7/jev-chess)** - Using Jev as a chess engine  
  <sub>1 stars · TypeScript · BSD-3-Clause · updated 2026-09-21</sub>
- **[andrueandersoncs/jev-cli](https://github.com/andrueandersoncs/jev-cli)** - Ask TypeSafe AI typed questions about JSON state from the command line  
  <sub>1 stars · HTML · MIT · updated 2026-09-21</sub>
- **[anilsenay/jev](https://github.com/anilsenay/jev)** - Unofficial Go client for TypeSafe's System One API  and its model, Jev.  
  <sub>1 stars · Go · MIT · updated 2026-09-17</sub>
- **[antlobach/clojev](https://github.com/antlobach/clojev)** - Unofficial portable Clojure SDK for TypeSafe System One  
  <sub>1 stars · Clojure · Apache-2.0 · updated 2026-09-20</sub>
- **[Barneyjm/decision-circuits](https://github.com/Barneyjm/decision-circuits)** - Decision circuits: typed questions to a System One model, calibrated probabilities back, gates in code. Zero-dependency Python SDK with LangChain, OpenAI Agents, and Claude Agent SDK integrations.  
  <sub>1 stars · Python · MIT · updated 2026-09-21</sub>
- **[binnash/typesafe-sdk](https://github.com/binnash/typesafe-sdk)** - PHP & Laravel SDK for TypeSafe AI's JEV Model series  
  <sub>1 stars · PHP · updated 2026-09-18</sub>
- **[cephalization/jev-oxlint](https://github.com/cephalization/jev-oxlint)** - Digest your skills into oxlint rules powered by jev  
  <sub>1 stars · TypeScript · updated 2026-09-19</sub>
- **[chez-shanpu/typesafeai-go](https://github.com/chez-shanpu/typesafeai-go)** - Go SDK for TypeSafe AI API https://docs.typesafe.ai/api  
  <sub>1 stars · Go · Apache-2.0 · updated 2026-09-17</sub>
- **[chy4pro/jev-dev-kit](https://github.com/chy4pro/jev-dev-kit)** - Framework for agents on TypeSafe Jev: turns candidates into valid Jev questions and answers into validated choices; loop, cross-checks, fallbacks and traces built in. No network code.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[clouatre-labs/decisions-judge-mcp](https://github.com/clouatre-labs/decisions-judge-mcp)** - Typed decisions for AI agents as an MCP tool: yes/no probability (noul), choice, and score in one fast request. Backed by the TypeSafe System One model.  
  <sub>1 stars · JavaScript · Apache-2.0 · updated 2026-09-22</sub>
- **[cole-gillespie/typesafe-go](https://github.com/cole-gillespie/typesafe-go)** - unofficial go SDK for typesafe AI, with typed answers, retries, and context support  
  <sub>1 stars · Go · MIT · updated 2026-09-17</sub>
- **[dwisiswant0/typesafe-sdk-go](https://github.com/dwisiswant0/typesafe-sdk-go)** - Go SDK for TypeSafe AI.  
  <sub>1 stars · Go · Apache-2.0 · updated 2026-09-19</sub>
- **[Fuwn/typesafe-mcp](https://github.com/Fuwn/typesafe-mcp)** - 🧠 MCP server for TypeSafe's Jev model  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[galitianu/jev4j](https://github.com/galitianu/jev4j)** - Java SDK for the TypeSafe AI API. Typed questions, typed answers, Java 21.  
  <sub>1 stars · Java · MIT · updated 2026-09-21</sub>
- **[guillemus/jev-go](https://github.com/guillemus/jev-go)** - Unofficial Go SDK for TypeSafe AI's Jev API  
  <sub>1 stars · Go · updated 2026-09-17</sub>
- **[herakles-dev/typesafe-claude-kit](https://github.com/herakles-dev/typesafe-claude-kit)** - Claude Code kit for TypeSafe (Jev): agents, skill, client, calibration tools  
  <sub>1 stars · Python · MIT · updated 2026-09-22</sub>
- **[HorusJiang/dsh-jev-tools](https://github.com/HorusJiang/dsh-jev-tools)** - Jev judgment, not generation: prune long tool output, screen fetched pages for injected instructions, and gate completion claims inside DeepSeek Harness.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[Hugo-DDT/JevTape](https://github.com/Hugo-DDT/JevTape)** - Jev 决策的 Record / Replay 工具：CLI + 本地代理 + JSON 磁带，回放彻底离线。  
  <sub>1 stars · Java · Apache-2.0 · updated 2026-09-21</sub>
- **[iammusham/jev-snake](https://github.com/iammusham/jev-snake)** - An experimental Snake environment where the game engine owns deterministic rules and TypeSafe AI's Jev makes the movement decision from structured state on every tick.  
  <sub>1 stars · Python · updated 2026-09-17</sub>
- **[jaewgwon/jevis](https://github.com/jaewgwon/jevis)** - Run Flutter integration tests using natural language with TypeSafe.ai's Jev  
  <sub>1 stars · Dart · Apache-2.0 · updated 2026-09-19</sub>
- **[JoacoMarc/jev-harness-router](https://github.com/JoacoMarc/jev-harness-router)** - Per-turn router for agent harnesses: one 350ms Jev call picks the model tier, effort, tools and skill, behind a hard deadline with a regex fallback. Claude Agent SDK adapter included.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[joaovaleri/jevkenpo](https://github.com/joaovaleri/jevkenpo)** - Rock, paper, scissors. And literally anything else. An open-source game judged by Jev.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[kataras/jev](https://github.com/kataras/jev)** - A Go client for the TypeSafe AI's System One API and its model, Jev.  
  <sub>1 stars · Go · MIT · updated 2026-09-21</sub>
- **[kinfey/jevHarnessAgent](https://github.com/kinfey/jevHarnessAgent)** - Jev and GitHub Copilot harness comparison with a live bilingual ordering dashboard  
  <sub>1 stars · Python · updated 2026-09-21</sub>
- **[kyledickey/jev-go](https://github.com/kyledickey/jev-go)** - TypeSafe.ai Jev Go SDK  
  <sub>1 stars · Go · MIT · updated 2026-09-22</sub>
- **[kylehovance-ai/jev-the-janitor](https://github.com/kylehovance-ai/jev-the-janitor)** - A janitor for markdown vaults powered by TypeSafe Jev: Jev votes on each note, your code files it, you review the low-confidence pile.  
  <sub>1 stars · Python · MIT · updated 2026-09-21</sub>
- **[leojacinto/my-name-jev](https://github.com/leojacinto/my-name-jev)** - No description provided.  
  <sub>1 stars · TypeScript · updated 2026-09-21</sub>
- **[lhviet/jev-bridge](https://github.com/lhviet/jev-bridge)** - A zero-dependency MCP server for TypeSafe's Jev — calibrated, typed judgments for Claude Code, with a local answer cache and cost tracking.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[lib-x/typesafe-go](https://github.com/lib-x/typesafe-go)** - Go SDK for the TypeSafe AI API: typed questions in, structured answers out. Zero dependencies.  
  <sub>1 stars · Go · MIT · updated 2026-09-21</sub>
- **[luigivis/jev-sdk-java](https://github.com/luigivis/jev-sdk-java)** - Type-safe Java 21 client for the TypeSafe AI Jev (System One) decision API  
  <sub>1 stars · Java · MIT · updated 2026-09-22</sub>
- **[mahmut-gundogdu/bes-kelime-jev](https://github.com/mahmut-gundogdu/bes-kelime-jev)** - Ne yazarsanız yazın, beş kelimeden biriyle cevap veren sohbet botu. Kelimeyi TypeSafe AI'ın Jev evaluation modeli seçer.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[marszhongx/pi-jev-score](https://github.com/marszhongx/pi-jev-score)** - No description provided.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[microchipgnu/jev-hooks](https://github.com/microchipgnu/jev-hooks)** - Compose typed Jev judgments as reactive semantic state in React and backend programs  
  <sub>1 stars · TypeScript · updated 2026-09-22</sub>
- **[paramjeetn/jev-cookbook](https://github.com/paramjeetn/jev-cookbook)** - The complete cookbook for Jev by TypeSafe AI — 120+ use cases, 10 runnable examples, 4 composition patterns, and first-principles theory for the world's first System One AI model.  
  <sub>1 stars · Python · MIT · updated 2026-09-22</sub>
- **[rahulthakore16/n8n-nodes-jev](https://github.com/rahulthakore16/n8n-nodes-jev)** - Jev by TypeSafe AI for n8n: typed decisions, probabilities, and confidence-aware workflows  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[RavenValentin/TypeSafe.Jev](https://github.com/RavenValentin/TypeSafe.Jev)** - Typed AI decisions for .NET: ask Jev (TypeSafe AI System One) yes/no, choice and score questions and get a C# enum with calibrated probabilities back.  
  <sub>1 stars · C# · MIT · updated 2026-09-21</sub>
- **[reiswaffel78/jev-agent-toolkit](https://github.com/reiswaffel78/jev-agent-toolkit)** - Jev-first portable Agent Skill and optional MCP bridge for Claude Code, Codex, Cursor and compatible agents.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[royalpinto007/jev-msw](https://github.com/royalpinto007/jev-msw)** - Mock Jev API decisions with MSW for deterministic tests without real API calls or credits.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[sathariels/jevtriage](https://github.com/sathariels/jevtriage)** - GitHub Action + CLI: triage PRs with TypeSafe Jev (ready / needs review / risky) with confidence gates and jevcheck-friendly contracts.  
  <sub>1 stars · Python · MIT · updated 2026-09-21</sub>
- **[SergeAx/typesafe-sdk-go](https://github.com/SergeAx/typesafe-sdk-go)** - TypeSafe.AI Go SDK  
  <sub>1 stars · Go · MIT · updated 2026-09-17</sub>
- **[Solido/jev_dart](https://github.com/Solido/jev_dart)** - Typesafe Jev Api  
  <sub>1 stars · Dart · MIT · updated 2026-09-21</sub>
- **[stoopid-computers/jev-bot](https://github.com/stoopid-computers/jev-bot)** - Computer Use Agent developed with Jev  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[terryds/jevplayground](https://github.com/terryds/jevplayground)** - Browser-only playground for Jev (TypeSafe AI's decision model) via Vercel AI Gateway  
  <sub>1 stars · HTML · updated 2026-09-19</sub>
- **[tinystruct/tinystruct-typesafe-sdk](https://github.com/tinystruct/tinystruct-typesafe-sdk)** - A tinystruct-based TypeSafe SDK with JEV model.  
  <sub>1 stars · Java · Apache-2.0 · updated 2026-09-21</sub>
- **[tryAGI/TypeSafeAI](https://github.com/tryAGI/TypeSafeAI)** - First-class, NativeAOT-ready .NET SDK for TypeSafe AI System One, generated with AutoSDK.  
  <sub>1 stars · C# · MIT · updated 2026-09-21</sub>
- **[Tsagaanbayr1/jev-tetris](https://github.com/Tsagaanbayr1/jev-tetris)** - Real-time Tetris versus Jev, a TypeSafe decision model — spins, garbage, B2B chains, and decisions prefetched a piece ahead  
  <sub>1 stars · JavaScript · updated 2026-09-21</sub>
- **[TypeSafeAI/jev-harness](https://github.com/TypeSafeAI/jev-harness)** - A custom coding harness for TypeSafe AI's Jev: an LLM proposes, Jev answers narrow questions, code decides, every step leaves a receipt.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[unimtx/typesafe-sdk-go](https://github.com/unimtx/typesafe-sdk-go)** - A Go SDK for the TypeSafe API, enabling quick integration with Jev.  
  <sub>1 stars · Go · MIT · updated 2026-09-19</sub>
- **[vagmi/jevlite](https://github.com/vagmi/jevlite)** - An attemt to recreate jev model on top of gemma  
  <sub>1 stars · Python · updated 2026-09-20</sub>
- **[xianggelila177/VideoAdGuard-Jev](https://github.com/xianggelila177/VideoAdGuard-Jev)** - Bilibili sponsored-segment detection powered by TypeSafe Jev  
  <sub>1 stars · TypeScript · GPL-2.0 · updated 2026-09-22</sub>
- **[zhirschtritt/typesafe-go](https://github.com/zhirschtritt/typesafe-go)** - Idiomatic Go SDK for the TypeSafe AI API  
  <sub>1 stars · Go · MIT · updated 2026-09-17</sub>
- **[33Audits/jev-auto](https://github.com/33Audits/jev-auto)** - Per-turn model routing for Claude Code. Cheapest tier that can do the job, no API key required, and it calibrates itself from what actually happened.  
  <sub>0 stars · MIT · updated 2026-09-20</sub>
- **[aamanlamba/jev-explore](https://github.com/aamanlamba/jev-explore)** - An example repository for exploring Jev - the System One model  
  <sub>0 stars · Python · updated 2026-09-19</sub>
- **[ably-labs/jev-pong](https://github.com/ably-labs/jev-pong)** - Pong where the ball moves one step per model decision. Jev vs LLMs via Vercel AI Gateway, every player and agent on an Ably channel.  
  <sub>0 stars · TypeScript · Apache-2.0 · updated 2026-09-19</sub>
- **[aboisvert/jevvy](https://github.com/aboisvert/jevvy)** - Use jev model to augment csv files with inferred classification, scoring, or probability scores  
  <sub>0 stars · Scala · Apache-2.0 · updated 2026-09-21</sub>
- **[adelaserna82/jev-model-net-sdk](https://github.com/adelaserna82/jev-model-net-sdk)** - Unofficial community Jev SDK for .NET 10. Typed decisions, examples, tests and NuGet packages.  
  <sub>0 stars · C# · MIT · updated 2026-09-21</sub>
- **[Adibrill1/jev-factorio](https://github.com/Adibrill1/jev-factorio)** - Jev picks what, code owns how - a System One Factorio agent driven by TypeSafe's Jev on FLE  
  <sub>0 stars · Python · updated 2026-09-20</sub>
- **[ak--47/ak-jev](https://github.com/ak--47/ak-jev)** - Node.js bindings for TypeSafe's Jev — the System One model. Typed decisions, probabilities and confidence, with no text generation and no parsing.  
  <sub>0 stars · JavaScript · ISC · updated 2026-09-21</sub>
- **[akhilsbehl/pie-jev](https://github.com/akhilsbehl/pie-jev)** - Standalone JEV client library and Pi extension exposing askJev and ask_jev  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>

<sub>98 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Framework integrations

- **[openlayer-ai/jevals](https://github.com/openlayer-ai/jevals)** - Agent evals and guardrails as Jev decisions: one request per trace, a fraction of a cent, fast enough for the agent loop. Runs locally with Kev or Laya.  
  <sub>57 stars · Python · MIT · updated 2026-09-22</sub>
- **[erendikmenn/jev-rag-benchmark](https://github.com/erendikmenn/jev-rag-benchmark)** - Reproducible benchmark for measuring Jev reranking quality, latency, and cost in RAG  
  <sub>14 stars · Python · MIT · updated 2026-09-20</sub>
- **[sunil-sadasivan/jevernetes](https://github.com/sunil-sadasivan/jevernetes)** - Live Kubernetes log analysis, contextual investigation, and agent handoff powered by Jev.  
  <sub>10 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[EmreKaplaner/rag-jev](https://github.com/EmreKaplaner/rag-jev)** - Make room for useful evidence. Inspectable context selection for RAG, with Jev reranking and open benchmark studies.  
  <sub>3 stars · Python · MIT · updated 2026-09-19</sub>
- **[WiktorB2004/llama-index-jev](https://github.com/WiktorB2004/llama-index-jev)** - LlamaIndex reranker + router powered by TypeSafe Jev — typed scores/choices, cheaper than LLM-as-judge.  
  <sub>3 stars · Python · MIT · updated 2026-09-18</sub>
- **[wudilyy999/jev-langgraph](https://github.com/wudilyy999/jev-langgraph)** - JEV-native probabilistic decisions, human review, and auditable execution on LangGraph.  
  <sub>3 stars · Python · MIT · updated 2026-09-20</sub>
- **[HcodeQ/Langchain-Jev](https://github.com/HcodeQ/Langchain-Jev)** - Create a customer support reliable AI Agent  
  <sub>2 stars · Jupyter Notebook · updated 2026-09-22</sub>
- **[jms-dcksn/jev-pii-guardrail](https://github.com/jms-dcksn/jev-pii-guardrail)** - A UiPath coded agent with a custom PII detection guardrail on the LLM boundary, built on the TypeSafe Jev model as a LangChain awrap_model_call middleware.  
  <sub>2 stars · Python · updated 2026-09-18</sub>
- **[lgy1027/jevshield](https://github.com/lgy1027/jevshield)** - Sub-100ms security gate for AI agent tool calls, powered by TypeSafe's Jev (System-1) decision model. Single-request Choice/Noul/Score evaluation, dual-factor blocking matrix, calibrated-confidence routing, fail-closed parsing, zero-config local fallback. LangChain-ready.  
  <sub>2 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[3F3Feng/audit-triage-agents](https://github.com/3F3Feng/audit-triage-agents)** - Multi-agent audit-triage prototype: LangChain tools + CrewAI orchestration behind a FastAPI service, driven by a TypeScript CLI. Synthetic data only.  
  <sub>1 stars · Python · MIT · updated 2026-09-21</sub>
- **[edwardyen724-g/jev-compactor](https://github.com/edwardyen724-g/jev-compactor)** - Context compaction and safety gating for AI agents via TypeSafe Jev: keeps messages verbatim, no summarization. OpenAI, Anthropic, LangChain, CLI, MCP.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[thejoeejoee/git-judge-commits](https://github.com/thejoeejoee/git-judge-commits)** - ⚖️  Judge git commits with Jev: is it breaking, does it deserve attention, and does its message tell the truth?  
  <sub>1 stars · Python · MIT · updated 2026-09-20</sub>
- **[ThiagaoBR/typesafe_agent_gates](https://github.com/ThiagaoBR/typesafe_agent_gates)** - LangChain / Deep Agents middleware that uses TypeSafe's System One model (Jev) for typed judgments in unattended coding agents: a shell-command gate (database, production, destructive, secrets), issue triage and routing by severity and urgency, merge-request detection, and review of weakened tests. Measured with live probes.  
  <sub>1 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[dhirajpatra/agent-harness-with-jev-llm](https://github.com/dhirajpatra/agent-harness-with-jev-llm)** - A small multi-agent harness built around the pattern from LangChain's post: use a fast, non-generative "System One" classifier (TypeSafe AI's Jev) for structured in-loop decisions -- routing and risky-tool-call gating -- and reserve a real chat LLM for the genuinely open-ended reasoning.  
  <sub>0 stars · Python · updated 2026-09-22</sub>
- **[leepokai/llm-prompt-techniques-on-jev](https://github.com/leepokai/llm-prompt-techniques-on-jev)** - Chain-of-thought and self-refinement for TypeSafe's Jev: feed its typed answers back as state and ask again. Benchmarks vs TypeSafe's own cookbook numbers.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[lim6112j/jev-example](https://github.com/lim6112j/jev-example)** - No description provided.  
  <sub>0 stars · Python · updated 2026-09-22</sub>
- **[NeOMakinG/kev-model-router](https://github.com/NeOMakinG/kev-model-router)** - Jev-style model routing powered by kev — a tiny local System One model classifies every request and picks the right LLM. 100% local, 100% free.  
  <sub>0 stars · Python · MIT · updated 2026-09-21</sub>
- **[panchambanerjee/jev_expts](https://github.com/panchambanerjee/jev_expts)** - Experiments with TypeSafe AI's System One Model Jev  
  <sub>0 stars · Python · updated 2026-09-22</sub>

### Evaluation and judging

- **[bespokelabsai/nimble](https://github.com/bespokelabsai/nimble)** - Local typed decisions, contrastive data curation, and model evaluation.  
  <sub>1568 stars · Python · updated 2026-09-20</sub>
- **[kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory)** - Biologically-inspired memory for AI agents. Decay, retrieval strengthening, consolidation. Zero runtime deps, SQLite, MCP. Benchmarked retrieval with an opt-in TypeSafe Jev reranker.  
  <sub>753 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[Heman10x-NGU/openJev-verdict-2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0)** - Calibrated 151M Non-Autoregressive Decision Engine beating TypeSafe Jev & Laya on LocalLLaMA/typed-decisions (77.10% acc, 0.0636 Brier, 0.0144 ECE)  
  <sub>256 stars · Python · updated 2026-09-20</sub>
- **[NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review)** - Local-first MCP plugin for continuous software-quality review by AI coding agents, powered by Jev.  
  <sub>201 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[BillionsBobby/JevRouter](https://github.com/BillionsBobby/JevRouter)** - A lightweight Jev-powered router for models, tools, and subagents  
  <sub>160 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[Zefan-Cai/Open-Jev](https://github.com/Zefan-Cai/Open-Jev)** - No description provided.  
  <sub>155 stars · Python · MIT · updated 2026-09-21</sub>
- **[y0usaf/pi-jev](https://github.com/y0usaf/pi-jev)** - TypeSafe Jev as a decision layer for the Pi coding agent: a measured tool-call gate plus jev_ask for typed, calibrated answers  
  <sub>136 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[TianyuCodings/JevHarness](https://github.com/TianyuCodings/JevHarness)** - LLM-authored task-specific Jev harnesses with optional full-trajectory reward reflection and GEPA evolution.  
  <sub>126 stars · Python · updated 2026-09-21</sub>
- **[daseinlabs/open-jev](https://github.com/daseinlabs/open-jev)** - Open Jev implementation with custom finetuning  
  <sub>97 stars · Python · updated 2026-09-19</sub>
- **[monteduro/killmyidea](https://github.com/monteduro/killmyidea)** - Describe your startup idea. Jev decides: kill it, fix it or ship it.  
  <sub>83 stars · TypeScript · updated 2026-09-18</sub>
- **[ChetasLua/jevmeter](https://github.com/ChetasLua/jevmeter)** - Put a live Jev (TypeSafe) meter on any video: every sentence scored, rendered as a 16:9 edit  
  <sub>81 stars · Python · MIT · updated 2026-09-17</sub>
- **[fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench)** - JevBench v1 - a benchmark for Jev-class typed decision models: smart, cheap, fast, reliable, open.  
  <sub>73 stars · Python · MIT · updated 2026-09-21</sub>
- **[dorkitude/webctl](https://github.com/dorkitude/webctl)** - Smart web search CLI for agents, backed by Jev. Saves a lot of tokens.  
  <sub>72 stars · Go · MIT · updated 2026-09-22</sub>
- **[realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock)** - 🧹 Fun project: a Chrome extension that asks a tiny AI decision model (TypeSafe Jev) "is this DOM element an ad?" and pops it off the page. BYOK, no backend, not a real ad blocker.  
  <sub>69 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[Heman10x-NGU/Verdict-open-jev](https://github.com/Heman10x-NGU/Verdict-open-jev)** - Non-autoregressive decision engine on ModernBERT (151M) with calibrated uncertainty (RLCD), TypeSafe AI Jev benchmark audit, and in-browser WebGPU playground  
  <sub>68 stars · Python · updated 2026-09-20</sub>
- **[danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge)** - Using Jev as an evaluator.  
  <sub>67 stars · Python · updated 2026-09-19</sub>
- **[GhalebDweikat/winnow](https://github.com/GhalebDweikat/winnow)** - A calibrated context sieve for Claude Code: every tool result is judged by a System One model before it enters context.  
  <sub>65 stars · Python · MIT · updated 2026-09-19</sub>
- **[ikermoel/open-alternative-jev](https://github.com/ikermoel/open-alternative-jev)** - Open-source alternative to TypeSafe's Jev: a System One style model layer that gives typed, calibrated decisions from any open-weights LLM in one forward pass (HF + vLLM), with honest benchmarks  
  <sub>49 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[nassim-arifette/jevgrep](https://github.com/nassim-arifette/jevgrep)** - Jev-powered semantic code search for coding agents — find behavior across repositories via CLI or MCP, with exact source excerpts and line numbers.  
  <sub>47 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[kbhuw/jev-sift](https://github.com/kbhuw/jev-sift)** - Classify first. Read selectively. A portable agent plugin and MCP tool for batch text classification.  
  <sub>45 stars · JavaScript · updated 2026-09-18</sub>
- **[RenaGao/jev-dataops](https://github.com/RenaGao/jev-dataops)** - An open-source JEV-powered workbench for streaming data selection, quality evaluation, automatic LoRA training and held-out model evaluation.  
  <sub>41 stars · Python · MIT · updated 2026-09-21</sub>
- **[DevMortimer/pi-typesafe](https://github.com/DevMortimer/pi-typesafe)** - TypeSafe decisions for Pi: batched evaluation tool, terminal playground, and typed API for extension authors  
  <sub>40 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[intikhab49/open-jev-typed-decision-engine](https://github.com/intikhab49/open-jev-typed-decision-engine)** - Open reproduction of TypeSafe Jev: a 150M typed decision engine (noul/choice/score in one non-autoregressive pass, calibrated confidence). 0.697 vs Jev's 0.727, 2.5x better calibrated, 4x faster, free. Trains on a Colab T4 in 30 min.  
  <sub>40 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[iammrduncan/typesafe-ai-benchmark](https://github.com/iammrduncan/typesafe-ai-benchmark)** - This is a LLM Gateway that mimics typesafe ai structured output. Like an imposter Jev.  
  <sub>38 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[shantanugoel/ask-jev-skill](https://github.com/shantanugoel/ask-jev-skill)** - Skill for Hermes, and other agents, to ask typesafe's jev  
  <sub>37 stars · Python · MIT · updated 2026-09-17</sub>
- **[YuanKJing/Jev-as-Policy](https://github.com/YuanKJing/Jev-as-Policy)** - The highly anticipated open-source repository for JEV as Policy enables one-click setup of the simulation environment. Evaluations of Astra + JEV on benchmarks such as RoboTwin will also be released soon.  
  <sub>33 stars · Python · MIT · updated 2026-09-21</sub>
- **[qkal/Canny](https://github.com/qkal/Canny)** - Stops AI coding agents from claiming work is done without evidence. Deterministic hooks decide, TypeSafe's Jev advises. Append-only ledger, zero runtime dependencies.  
  <sub>32 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[smkrv/jev-calibrate](https://github.com/smkrv/jev-calibrate)** - Calibrate Jev questions against your own labels: tune criteria on labelled examples, confirm on a held-out set, get a verdict per question. Unofficial.  
  <sub>31 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[lykycy123/RoboJEV](https://github.com/lykycy123/RoboJEV)** - Two-stage JEV control of a Franka Panda in MuJoCo  
  <sub>30 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[mithalouni/system-one-open](https://github.com/mithalouni/system-one-open)** - Open replica of TypeSafe's Jev: typed calibrated decisions in one forward pass, on Gemma 4 E2B / Gemma 3 270M (Modal)  
  <sub>30 stars · Python · updated 2026-09-17</sub>
- **[zhihz/openjev](https://github.com/zhihz/openjev)** - Local bilingual probability decisions from context, questions, and candidate answers. Independent research preview inspired by TypeSafe Jev.  
  <sub>30 stars · Python · updated 2026-09-16</sub>
- **[myc0576/SmartMoney-Cub](https://github.com/myc0576/SmartMoney-Cub)** - Read-only trading journal and review harness: Jev typed judgments, agent integration, and a reproducible finance benchmark. No orders, no advice.  
  <sub>26 stars · Python · MIT · updated 2026-09-21</sub>
- **[Zaious/jev-capability-atlas](https://github.com/Zaious/jev-capability-atlas)** - Independent, evidence-based map of when TypeSafe's Jev actually holds up vs. breaks down — real API-call receipts, not a leaderboard. 中文為主的雙語 repo。  
  <sub>24 stars · Python · MIT · updated 2026-09-22</sub>
- **[AkashPriyadarshii/jev-curate](https://github.com/AkashPriyadarshii/jev-curate)** - High-throughput synthetic and pretraining dataset sifter for TypeSafe Jev. Rust streaming core, Parquet and JSONL I/O, typed Choice/Score/Noul judgments, speculative fan-out, 24.0 rows/sec measured.  
  <sub>23 stars · Rust · MIT · updated 2026-09-22</sub>
- **[JoshuaSP/open-jev](https://github.com/JoshuaSP/open-jev)** - Typed JSON inference with DiffusionGemma, with Every and Jev benchmark results  
  <sub>23 stars · Python · MIT · updated 2026-09-16</sub>
- **[rorshopping/jev-on-a-laptop](https://github.com/rorshopping/jev-on-a-laptop)** - Unofficial study: Jev-style parallel typed decisions on stock 1.5B-8B models on an Apple Silicon laptop. Benchmarks, research notes, and a Hugging Face Space demo.  
  <sub>23 stars · Python · updated 2026-09-17</sub>
- **[compozy/yoshi](https://github.com/compozy/yoshi)** - Context-pruning proxy for Claude Code and Codex: Jev judges which history is still needed, measured not claimed. POC here now, heading soon into https://github.com/compozy/compozy  
  <sub>22 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[karminski/Jev-Quantum](https://github.com/karminski/Jev-Quantum)** - 亚微秒级 System-1 模型，准确率服从高斯分布  
  <sub>22 stars · Rust · MIT · updated 2026-09-21</sub>
- **[phyous/tsai-sc](https://github.com/phyous/tsai-sc)** - TypeSafe Jev controls original StarCraft shareware through keyboard and mouse with recorded action probabilities.  
  <sub>22 stars · Python · MIT · updated 2026-09-16</sub>
- **[PromptEngineer48/laya-vs-jev-arena](https://github.com/PromptEngineer48/laya-vs-jev-arena)** - Laya (open source, local) vs TypeSafe Jev (API): two AI models race in Snake and fight in a Mortal-Kombat-style arena. Every move is a real model decision.  
  <sub>20 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[jcpsimmons/jev-macos-loop](https://github.com/jcpsimmons/jev-macos-loop)** - Open-source macOS AI computer use and native GUI automation on Apple silicon. Jev + OmniParser CoreML + Apple Vision OCR. Bring your own OpenRouter, Vercel AI Gateway, or TypesafeAI token.  
  <sub>19 stars · JavaScript · AGPL-3.0 · updated 2026-09-18</sub>
- **[AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks)** - Probability-aware evaluation for typed decision models: calibration, selective risk, latency, and reproducible benchmarks.  
  <sub>17 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[NiazMorshed2007/jcr](https://github.com/NiazMorshed2007/jcr)** - A Jev-powered resolver for agent harnesses to find deterministic commands and their context in a nested capability tree.  
  <sub>16 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[unicodeveloper/jevocks](https://github.com/unicodeveloper/jevocks)** - Everyday Stocks Status with Jev  
  <sub>16 stars · TypeScript · updated 2026-09-18</sub>
- **[abhishek085/open-spark-jev](https://github.com/abhishek085/open-spark-jev)** - Open-source, local decision models inspired by TypeSafe’s Jev and System One - built on Qwen3 for NVIDIA DGX Spark.  
  <sub>14 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[philippdubach/pi-jev-router](https://github.com/philippdubach/pi-jev-router)** - A minimal Pareto-optimal OpenRouter model router for pi, based on Jev  
  <sub>14 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[QuicqDev/Jev-vs-ML](https://github.com/QuicqDev/Jev-vs-ML)** - Jev-vs-ML  
  <sub>13 stars · Jupyter Notebook · updated 2026-09-22</sub>
- **[zjunlp/JevLoop](https://github.com/zjunlp/JevLoop)** - The agent loop where decisions don't cost a large language model call. Zero deps, runs offline, no API key needed.  
  <sub>13 stars · TypeScript · Apache-2.0 · updated 2026-09-22</sub>
- **[collapseindex/jev-ultralightspeed](https://github.com/collapseindex/jev-ultralightspeed)** - BRRRRRRRRRRRRRRRRRRRRRR  
  <sub>12 stars · Python · updated 2026-09-22</sub>
- **[zwliJay/jev-forge](https://github.com/zwliJay/jev-forge)** - An open training and inference stack for Jev-style decision models.  Train models to score dynamic candidate branches from a shared prefix, with support for high-cardinality choice, calibration, and fast batched inference.  
  <sub>12 stars · Python · updated 2026-09-19</sub>
- **[madeye/pi-jev](https://github.com/madeye/pi-jev)** - Jev-assisted file retrieval and request caching for faster Pi workflows  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[shaharia-lab/jev-cli](https://github.com/shaharia-lab/jev-cli)** - Command-line tool for TypeSafe AI's Jev model. Ask yes/no, multiple-choice and rubric questions about any text and get calibrated probabilities back. Answers become exit codes for shells and CI, JSON for scripts, and MCP tools for AI agents.  
  <sub>11 stars · Rust · Apache-2.0 · updated 2026-09-21</sub>
- **[Twister915/typesafe-ai](https://github.com/Twister915/typesafe-ai)** - Typed TypeSafe AI clients for Rust, with async and blocking backends and observable retries.  
  <sub>11 stars · Rust · Apache-2.0 · updated 2026-09-16</sub>
- **[abhixhek/jevcal](https://github.com/abhixhek/jevcal)** - Stop guessing confidence thresholds: calibrate, threshold, and drift-check typed decision models (TypeSafe Jev) against an LLM teacher.  
  <sub>10 stars · Python · MIT · updated 2026-09-18</sub>
- **[ItIsCuthNotCup/MetaCog](https://github.com/ItIsCuthNotCup/MetaCog)** - MetaCoginition powered by Reflex 4B  
  <sub>10 stars · Python · MIT · updated 2026-09-22</sub>
- **[Micha0827/snapjudge](https://github.com/Micha0827/snapjudge)** - Typed decisions (choice / score / yes-no) from local Qwen models on Apple Silicon. Probabilities come straight from the logits, no text generation. TypeSafe-compatible HTTP API, runs on MLX.  
  <sub>10 stars · Python · MIT · updated 2026-09-21</sub>
- **[AntonioCoppe/jev-harness](https://github.com/AntonioCoppe/jev-harness)** - Decision harness for TypeSafe Jev — confidence gates, shadow mode, recipes, and evals. Claude CLI 48.9s → Jev 1.3s on the same row-filter job.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[imMamdouhaboammar/fable-jev](https://github.com/imMamdouhaboammar/fable-jev)** - ⚡ Sub-100ms cognitive reflexes for autonomous coding agents. Powered by TypeSafe AI's Jev & get-fable.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[cablehead/jev.nu](https://github.com/cablehead/jev.nu)** - Nushell module for the TypeSafe System One API: typed decisions with calibrated probabilities  
  <sub>8 stars · Nushell · MIT · updated 2026-09-21</sub>
- **[harshwasan/jev-sentinel](https://github.com/harshwasan/jev-sentinel)** - Pi coding-agent extension: TypeSafe Jev checks for tool calls, tool outputs and replies (prompt injection, approvals, secret scrubbing, task pinning)  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[harshwasan/pi-jev-sentinel](https://github.com/harshwasan/pi-jev-sentinel)** - Pi coding-agent extension: TypeSafe Jev checks for tool calls, tool outputs and replies (prompt injection, approvals, secret scrubbing, task pinning)  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[HexyeDEV/JevPR](https://github.com/HexyeDEV/JevPR)** - PR Risk review, automated by Jev  
  <sub>8 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[zeeshan8281/slo-router](https://github.com/zeeshan8281/slo-router)** - SLO-aware LLM inference router with Jev decisions, live queue metrics, counterfactual evaluation, and reproducible latency/cost benchmarks  
  <sub>8 stars · Python · updated 2026-09-19</sub>
- **[arunav25/jev-mcp](https://github.com/arunav25/jev-mcp)** - Connect JEV to MCP clients and compare its judgments against general-purpose LLMs using shared datasets and measurable accuracy.  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[carlaiau/jev-reranking](https://github.com/carlaiau/jev-reranking)** - Search engine experimentation on the TREC collections. Currently focused on zero-shot reranking implementations with typesafe.ai's JEV model  
  <sub>7 stars · Python · MIT · updated 2026-09-18</sub>
- **[muratcakmak/jev-guard](https://github.com/muratcakmak/jev-guard)** - Probability-scored guardrails for Claude Code: deny rule-breaking edits and unasked-for deploys, route your docs into each prompt, and check the final answer against the turn's own evidence.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[AIGNLAI/ReflexRoute](https://github.com/AIGNLAI/ReflexRoute)** - Fast zero-shot and few-shot LLM routing powered by Jev.  
  <sub>6 stars · Python · MIT · updated 2026-09-20</sub>
- **[filedcom/playjev](https://github.com/filedcom/playjev)** - Fast, typed browser automation powered by Jev and Playwright  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[mahlernim/jev-korean-benchmark](https://github.com/mahlernim/jev-korean-benchmark)** - Reproducible early-access evaluation of Jev on Korean understanding and medical text, with runtime and cost evidence  
  <sub>6 stars · Python · updated 2026-09-17</sub>
- **[yzfly/edgejev](https://github.com/yzfly/edgejev)** - 离线可用的本地类型化决策：4 核 CPU 单题 15.6ms。Local & offline Jev / System One inference on CPU — ONNX + INT8, no torch at runtime. 支持 laya / kev / PlayJev  
  <sub>6 stars · Python · updated 2026-09-21</sub>
- **[zhuyansen/jev-search-rerank-eval](https://github.com/zhuyansen/jev-search-rerank-eval)** - Does a TypeSafe Jev rerank beat embedding search? Graded relevance eval (9,831 pairs, 164 zh/en queries) over the Agent Skills Hub catalog, with the judge-circularity bias measured.  
  <sub>6 stars · Python · MIT · updated 2026-09-18</sub>
- **[bradAGI/ruling](https://github.com/bradAGI/ruling)** - Typed, calibrated decisions from a local model. No text generated.  
  <sub>5 stars · Python · MIT · updated 2026-09-18</sub>
- **[buchmark/claude-jev](https://github.com/buchmark/claude-jev)** - Claude Code plugin that scores review findings, debug hypotheses and design options with TypeSafe's Jev — calibrated probabilities instead of one more opinion.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[choxos/jevchess](https://github.com/choxos/jevchess)** - Jev, TypeSafe's System One model, plays chess against any OpenRouter LLM, Stockfish and you. One-page web app with live moves, Jev's move probabilities, saved games and win rates.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[docxology/daf-jev](https://github.com/docxology/daf-jev)** - daf-jev: composable Python toolkit for TypeSafe's Jev (System One) decision API — question builders, confidence gates, evaluator, calibration, CLI, MCP server, agent skill  
  <sub>5 stars · Python · MIT · updated 2026-09-21</sub>
- **[gemanor/jev-code-review-benchmark](https://github.com/gemanor/jev-code-review-benchmark)** - Comparing Jev, Gemini Flash, and Claude Fable on Python code review rules: cost, speed, accuracy, and consistency. Includes results, charts, and reproducible experiments.  
  <sub>5 stars · Python · MIT · updated 2026-09-17</sub>
- **[hndrr/ComfyUI-Jev](https://github.com/hndrr/ComfyUI-Jev)** - Jev text interpretation and judgments for ComfyUI.  
  <sub>5 stars · Python · MIT · updated 2026-09-20</sub>
- **[khimaros/verdict](https://github.com/khimaros/verdict)** - turn any llama-server into a jev system one endpoint  
  <sub>5 stars · Python · GPL-3.0 · updated 2026-09-20</sub>
- **[nibzard/decision-model-benchmark](https://github.com/nibzard/decision-model-benchmark)** - Independent, reproducible benchmark: a decision model (jev), eight constrained LLMs, and deterministic baselines on typed decisions - accuracy, calibration, latency, cost, failure modes  
  <sub>5 stars · Python · updated 2026-09-19</sub>
- **[NicolaiLassen/open-bonsai-jev](https://github.com/NicolaiLassen/open-bonsai-jev)** - openjev's mechanism, Bonsai's weights: typed decisions read straight from one forward pass of a 1.75-bit 27B model. Credit to TheoLeeCJ (SemIf/OpenJev) and PrismML.  
  <sub>5 stars · Python · MIT · updated 2026-09-20</sub>
- **[pumpkinredbean/bside](https://github.com/pumpkinredbean/bside)** - No description provided.  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[thehan-co/jevriel](https://github.com/thehan-co/jevriel)** - Give your AI JEV wings. A skill and plugin to build with TypeSafe Jev, upgrade LLM-only workflows and measure the result.  
  <sub>5 stars · JavaScript · Apache-2.0 · updated 2026-09-21</sub>
- **[y0usaf/jev-lm](https://github.com/y0usaf/jev-lm)** - A word-level language model whose output layer is Jev: n-gram drafter, Noul chunk verification, bits-per-token eval  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Astro-Han/jev-harness](https://github.com/Astro-Han/jev-harness)** - A coding agent that filters every tool result through Jev before the model sees it, with an A/B harness measuring pass@1 and cost against the unfiltered control  
  <sub>4 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[caiovicentino/jev-align](https://github.com/caiovicentino/jev-align)** - Calibrated alignment verifier for LLM responses and agent plans — powered by Jev  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[David-Lolly/Jev-Compatible](https://github.com/David-Lolly/Jev-Compatible)** - Turn your existing SGLang / vLLM deployment into a Jev-compatible decision service. No training. No model changes. 把你现有的 SGLang / vLLM 部署变成一个兼容 Jev 的决策服务。无需任何修改。无需训练。无需更改模型。  
  <sub>4 stars · Python · updated 2026-09-21</sub>
- **[doeixd/jev-pref](https://github.com/doeixd/jev-pref)** - Turn your AGENTS.md preferences into a fast, Jev-powered AI linter.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[jon-devlapaz/tink-route](https://github.com/jon-devlapaz/tink-route)** - Dynamic, confidence-aware Agent Skill routing with TypeSafe Jev and Tink  
  <sub>4 stars · Python · MIT · updated 2026-09-22</sub>
- **[kiwi0719/jev-edge](https://github.com/kiwi0719/jev-edge)** - Typed-judgment admission control at the traffic edge: three-layer prompt-injection and abuse filter for nginx/OpenResty, powered by TypeSafe Jev. Fail-open, cached, hot-reloadable.  
  <sub>4 stars · Lua · Apache-2.0 · updated 2026-09-22</sub>
- **[Kushwho/jev-codes](https://github.com/Kushwho/jev-codes)** - Audit your git diff against YAML coding-standards packs using TypeSafe's Jev model, from a CLI or your AI agent's command/skill.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[minhnghia2k3/jev-k8s-awareness](https://github.com/minhnghia2k3/jev-k8s-awareness)** - k8s awareness with jev  
  <sub>4 stars · TypeScript · updated 2026-09-19</sub>
- **[miniLV/Jev-Auto-Router](https://github.com/miniLV/Jev-Auto-Router)** - Jev Auto Router (Jev Router): experimental per-call GPT model routing for Codex via TypeSafe Jev and a local Responses proxy, with independent task verification.  
  <sub>4 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[perixtar/jev-e2e](https://github.com/perixtar/jev-e2e)** - Natural-language end-to-end tests for web apps, powered by Jev and Playwright.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Pinutss/jev-model-router](https://github.com/Pinutss/jev-model-router)** - Route among multiple LLMs and multi-model provider keys without leaking secrets.  
  <sub>4 stars · Python · MIT · updated 2026-09-18</sub>
- **[RahulBalakavi/claude-code-jev](https://github.com/RahulBalakavi/claude-code-jev)** - Experimental Jev permission gate for Claude Code via OpenRouter, with reproducible latency and cost benchmarks  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[stas4000/jev-papers](https://github.com/stas4000/jev-papers)** - 1,000 arXiv AI papers classified with one Jev decision each, checked against an LLM judge. Open rebuild, MIT.  
  <sub>4 stars · Python · MIT · updated 2026-09-21</sub>
- **[wjw66/deepseek-harness-jev-pre-compaction](https://github.com/wjw66/deepseek-harness-jev-pre-compaction)** - A pre-compaction advisor for DeepSeek Harness. Runs before the standard `compaction-basic` backend, using TypeSafe JEV to safely prune low-value tool results from model context. Original session events stay in the append-only log; only the model-visible view is replaced with compact markers or archive pointers to reduce context bloat.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[YehuiTang0316/jev-nlgrep](https://github.com/YehuiTang0316/jev-nlgrep)** - Search code and text by meaning with natural-language grep, powered by Jev.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[abhishekswe/agent-fastpath](https://github.com/abhishekswe/agent-fastpath)** - Jev MCP server: a decision layer for coding agents, built on TypeSafe Jev (System One model). Ship gates, risk checks, file triage that keeps files out of context, and a safe headless browser, with calibrated confidence. For Claude Code, Codex, Cursor.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[antiyro/jevdroid](https://github.com/antiyro/jevdroid)** - A typed Python framework for controlling Android over ADB with Jev.  
  <sub>3 stars · Python · MIT · updated 2026-09-19</sub>
- **[baronunread/leanest](https://github.com/baronunread/leanest)** - Local-first test selector using Jev judgments to determine which tests are affected by a code change  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[Code-Forge-AU/jev-llm](https://github.com/Code-Forge-AU/jev-llm)** - No description provided.  
  <sub>3 stars · Python · updated 2026-09-17</sub>
- **[codejunkie99/jev-engineering](https://github.com/codejunkie99/jev-engineering)** - Jev Engineering: Typed Decision Systems for Reliable Agent Workflows. Paper, diagrams, and companion examples by Av1dlive.  
  <sub>3 stars · JavaScript · updated 2026-09-21</sub>
- **[collapseindex/jev-builder](https://github.com/collapseindex/jev-builder)** - A browser form for building requests to TypeSafe's Jev: pick a template, fill in the blanks, copy the request. No JSON, no install, runs locally.  
  <sub>3 stars · JavaScript · updated 2026-09-20</sub>
- **[FFatTiger/new-api-plugin-typesafe](https://github.com/FFatTiger/new-api-plugin-typesafe)** - TypeSafe AI System One (Jev) task plugin for QuantumNous/new-api — native /v1/systemone, synchronous evaluation, token billing  
  <sub>3 stars · JavaScript · Apache-2.0 · updated 2026-09-18</sub>
- **[glud123/jev-assist](https://github.com/glud123/jev-assist)** - Don't burn your expensive main model on grep-and-guess grunt work — let jev rank the whole repo, and save the main model for reading the right files and writing the right code.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[hemanth/xkcd-search](https://github.com/hemanth/xkcd-search)** - Reverse lookup XKCD comics using Gemini multimodal embeddings (gemini-embedding-2-preview)  
  <sub>3 stars · HTML · updated 2026-09-20</sub>
- **[jiangkoumo/ego-jev](https://github.com/jiangkoumo/ego-jev)** - Drive the ego lite browser with Jev (TypeSafe System One): one indexed element table in, one operation + target out, single process. ~2x faster than a per-step LLM loop in our measurements.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[jukkatupamaki/better-call-jev](https://github.com/jukkatupamaki/better-call-jev)** - A skill for integrating Jev model calls to any Claude Code session. Supports Vercel AI Gateway.  
  <sub>3 stars · HTML · MIT · updated 2026-09-20</sub>
- **[maker-KK/todo-jev](https://github.com/maker-KK/todo-jev)** - ⚡ Ultra-fast, low-cost intelligent task classifier and 3-tier routing engine powered by TypeSafe Jev (System One)  
  <sub>3 stars · Python · MIT · updated 2026-09-18</sub>
- **[Mintzs/jevify](https://github.com/Mintzs/jevify)** - An optimized inference engine to turn LLMs into Jev-like machines: optimized for quick, lightweight, and accurate decision-making, classification, and scoring  
  <sub>3 stars · Python · updated 2026-09-19</sub>
- **[mizchi/jev-lexer](https://github.com/mizchi/jev-lexer)** - Language-agnostic syntax highlighter: split like gpu-lexer, classify every part with Jev, render Shiki-compatible tokens, HTML and ANSI  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[prasanthj/duckdb-jev](https://github.com/prasanthj/duckdb-jev)** - High-throughput, robust native DuckDB extension for batched and streaming TypeSafe/Jev classification, scoring, and semantic predicates from SQL.  
  <sub>3 stars · C++ · Apache-2.0 · updated 2026-09-21</sub>
- **[Ravinder82/jev-flash-router](https://github.com/Ravinder82/jev-flash-router)** - open-sourced jev-flash-router: an MCP server for TypeSafe's new Jev model.  AI coding agents waste hundreds of reasoning tokens just deciding which file to edit, which route to pick, or whether a diff breaks tests.  Jev evaluates state and outputs calibrated probabilities.  Works with Cursor, Windsurf, & Claude Code  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[SamuelSacco/jev-exploration](https://github.com/SamuelSacco/jev-exploration)** - Jev (TypeSafe) exploratory thread: claim audit, live demos, and runnable code  
  <sub>3 stars · Python · updated 2026-09-21</sub>
- **[ShivamPansuriya/jev-skill-gate](https://github.com/ShivamPansuriya/jev-skill-gate)** - Cut Claude Code's skill manifest by ~75% with TypeSafe Jev. Scores every installed skill for relevance and hides the rest via skillOverrides — 12,750 → 3,185 tokens on a 217-skill install, for $0.0009 a session.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[uhhfeef/jev-lm](https://github.com/uhhfeef/jev-lm)** - A character-level language model built on Jev, a System One classifier  
  <sub>3 stars · Python · updated 2026-09-20</sub>
- **[allebee/pytest-jev](https://github.com/allebee/pytest-jev)** - Semantic assertions for pytest: test what your LLM app's output means, judged by TypeSafe's Jev.  
  <sub>2 stars · Python · MIT · updated 2026-09-21</sub>
- **[andrueandersoncs/visual-jev](https://github.com/andrueandersoncs/visual-jev)** - Image-native typed decisions with shared visual encoding and Qwen3-VL  
  <sub>2 stars · Python · updated 2026-09-20</sub>
- **[anpicasso/hermes-jev-curator](https://github.com/anpicasso/hermes-jev-curator)** - Typed Jev relation governance and safe archive plans for Hermes Curator  
  <sub>2 stars · Python · MIT · updated 2026-09-21</sub>
- **[ARCJ137442/jev-2048](https://github.com/ARCJ137442/jev-2048)** - An instrumented 2048 web lab where every move is a Jev (TypeSafe AI System One) Choice, with no heuristic fallback | 用 Jev 决策模型驱动每一步的 2048 网页实验台，概率、置信度、延迟与成本全部摊开可见，且刻意不做启发式兜底  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[aryanchauhanoffical/no-hallucination](https://github.com/aryanchauhanoffical/no-hallucination)** - Three measured experiments on RAG hallucination: quote-checking, TypeSafe's Jev, and IBM's STAIR. 850+ graded questions, raw responses included.  
  <sub>2 stars · Python · MIT · updated 2026-09-20</sub>
- **[Bring-AI/jev-rl](https://github.com/Bring-AI/jev-rl)** - JEV Reinforcement Learning: four classic games trained with JEV-powered rewards, reproducible experiments and checkpoint replays.  
  <sub>2 stars · Python · MIT · updated 2026-09-21</sub>
- **[brnyxx/jev-ra](https://github.com/brnyxx/jev-ra)** - Browser use for coding agents, 3-5x faster than browser-use. MCP server + CLI; TypeSafe Jev decides every step in ~300 ms.  
  <sub>2 stars · Python · MIT · updated 2026-09-22</sub>
- **[BYK/jev-mcp](https://github.com/BYK/jev-mcp)** - An eval-first MCP server for TypeSafe's Jev, a System One model that returns typed judgments (noul, choice, score) with probabilities instead of generated text.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[E-FL/typesafe-as-a-judge](https://github.com/E-FL/typesafe-as-a-judge)** - Unofficial community MCP plugin for Codex and Claude Code using TypeSafe Jev for bounded routing, ranking, extraction, verification, and escalation  
  <sub>2 stars · JavaScript · Apache-2.0 · updated 2026-09-21</sub>
- **[florian-hoenicke/jev-gpt](https://github.com/florian-hoenicke/jev-gpt)** - Text generation with jev: one typed question per word  
  <sub>2 stars · Python · updated 2026-09-19</sub>
- **[Gaurav-Gosain/jev-sec-bench](https://github.com/Gaurav-Gosain/jev-sec-bench)** - Blind security benchmarks for Jev, TypeSafe's System One model: prompt injection and vulnerable code detection, built on jev-go  
  <sub>2 stars · Go · MIT · updated 2026-09-16</sub>
- **[hamakyo/jev-starter](https://github.com/hamakyo/jev-starter)** - Typed, policy-driven decision workflows on top of TypeSafe AI Jev: confidence routing, fallbacks, evaluation, and RAG patterns for TypeScript apps.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[hemanth/jev-chess](https://github.com/hemanth/jev-chess)** - Chess moves, evaluations, persona opponents, and game classification with TypeSafe AI System One  
  <sub>2 stars · TypeScript · updated 2026-09-21</sub>
- **[hugo-alves/jev-router-playground](https://github.com/hugo-alves/jev-router-playground)** - Interactive playground for testing Jev model-routing decisions against OpenRouter models  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[Icohen007/jev-play-ping-pong](https://github.com/Icohen007/jev-play-ping-pong)** - Jev plays browser table tennis in real time: structured telemetry, typed decisions, ordinary Chrome inputs, and auditable evidence.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[instax-dutta/sysone-bench](https://github.com/instax-dutta/sysone-bench)** - First independent head-to-head benchmark of System One decision models (Laya vs Jev) on byte-identical inputs  
  <sub>2 stars · Python · updated 2026-09-21</sub>
- **[javiergradiche/ruby_llm-providers-typesafe](https://github.com/javiergradiche/ruby_llm-providers-typesafe)** - TypeSafe System One models (Jev) for RubyLLM: typed judgments, evaluations and reranking.  
  <sub>2 stars · Ruby · MIT · updated 2026-09-18</sub>
- **[jev-ids/jev-ids](https://github.com/jev-ids/jev-ids)** - Blazing-Fast Token-Efficient Intrusion Detection System (IDS) based on TypeSafe's Jev  
  <sub>2 stars · Python · MIT · updated 2026-09-22</sub>
- **[jtsang4/jev-cli](https://github.com/jtsang4/jev-cli)** - CLI for TypeSafe AI's Jev evaluation model — typed questions in, structured JSON answers out  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[kevinpita/pi-jev-context](https://github.com/kevinpita/pi-jev-context)** - Reversible context pruning for Pi, powered by TypeSafe Jev. Keep useful context without deleting session history.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[lmvdz/rpg-jev](https://github.com/lmvdz/rpg-jev)** - A living-world RPG whose NPCs are decided by TypeSafe's Jev judge model; code owns rules, numbers and state.  
  <sub>2 stars · TypeScript · updated 2026-09-21</sub>
- **[lucianfialho/jev-model-router](https://github.com/lucianfialho/jev-model-router)** - Cost-optimized OpenRouter model router using TypeSafe's Jev, with a live full-catalog scorer instead of a hardcoded model list  
  <sub>2 stars · Python · MIT · updated 2026-09-19</sub>
- **[markjaquith/typesafe-ai-playground](https://github.com/markjaquith/typesafe-ai-playground)** - A playground for experiments around Jev, TypeSafe's System One model.  
  <sub>2 stars · Rust · MIT · updated 2026-09-18</sub>
- **[MobAI-Inc/Cynosure](https://github.com/MobAI-Inc/Cynosure)** - Jev-based adaptive model routing with structured decisions, persistent feedback, and hybrid retrieval  
  <sub>2 stars · TypeScript · Apache-2.0 · updated 2026-09-19</sub>
- **[parkavenue9639/jevloop](https://github.com/parkavenue9639/jevloop)** - A Python agent runtime powered by TypeSafe Jev: guarded tool execution, isolated Docker sandboxes, and side-by-side LLM comparisons.  
  <sub>2 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[rajasekharponakala/jev-mcp](https://github.com/rajasekharponakala/jev-mcp)** - MCP server wrapping TypeSafe's Jev System One models — typed noul/choice/score judgments for AI agents  
  <sub>2 stars · Python · AGPL-3.0 · updated 2026-09-21</sub>
- **[Ramneet-Singh/jevopt](https://github.com/Ramneet-Singh/jevopt)** - Making intelligent compiler optimisation decisions with Jev  
  <sub>2 stars · Python · GPL-3.0 · updated 2026-09-21</sub>
- **[rongxinzy/LightJev](https://github.com/rongxinzy/LightJev)** - Train lightweight language backbones for typed decisions and candidate probabilities. CE/Brier training, evaluation, and an offline end-to-end demo.  
  <sub>2 stars · Python · Apache-2.0 · updated 2026-09-18</sub>
- **[rorshopping/jev-browser-local](https://github.com/rorshopping/jev-browser-local)** - Run jev-browser on a fully local JEV-style decision engine (no cloud API). Warm-browser fork, VRAM guard, measured benchmarks, run traces.  
  <sub>2 stars · Python · updated 2026-09-19</sub>
- **[shikaizhong-design/ego-jev-ultrafast](https://github.com/shikaizhong-design/ego-jev-ultrafast)** - Jev drives your Ego Lite browser: one typed-choice request per step. Single-file, zero-dependency port of browser-use/jev-ultrafast with multi-model benchmarks and extra guardrails. Unofficial.  
  <sub>2 stars · JavaScript · updated 2026-09-22</sub>
- **[sightmap/jev-turbo](https://github.com/sightmap/jev-turbo)** - Jev-powered semantic browser use  
  <sub>2 stars · Go · MIT · updated 2026-09-20</sub>
- **[simxnherrera/jevr](https://github.com/simxnherrera/jevr)** - A native R client for Jev System 1 model decisions  
  <sub>2 stars · R · updated 2026-09-20</sub>
- **[stas4000/jev-geo-audit](https://github.com/stas4000/jev-geo-audit)** - 300 public pages audited for AI citability with Jev decisions, checked against an LLM judge: agreement, cost and latency, measured  
  <sub>2 stars · Python · MIT · updated 2026-09-21</sub>

<sub>234 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Guardrails and safety

- **[wfzyx/von](https://github.com/wfzyx/von)** - The open-source System One decision model. Sub-15ms, non-autoregressive, local drop-in alternative to TypeSafe Jev.  
  <sub>418 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[DevMortimer/pi-warden](https://github.com/DevMortimer/pi-warden)** - Guardrails for Pi that steer instead of interrupt: enforces your project rules on every write, holds only hard-to-undo actions (3 per 1,000 calls, measured on real sessions), catches unverified "done" claims and stuck loops, and trims tool output. Built on pi-typesafe.  
  <sub>132 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[hyperspaceai/jevcache](https://github.com/hyperspaceai/jevcache)** - A decision cache for TypeSafe Jev-class models — memoize decisions so repeats are free, deterministic, and shareable. One 2 MB binary.  
  <sub>70 stars · updated 2026-09-19</sub>
- **[wobsoriano/oxlint-plugin-jev](https://github.com/wobsoriano/oxlint-plugin-jev)** - No description provided.  
  <sub>56 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[brainstormity/Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot)** - No description provided.  
  <sub>41 stars · Python · MIT · updated 2026-09-22</sub>
- **[jomatsu/pi-jev-auto-mode](https://github.com/jomatsu/pi-jev-auto-mode)** - Jev (TypeSafe System One) backed auto mode for the Pi coding agent: semantically auto-approves bash, write, and edit tool calls and fails closed when a decision cannot be made.  
  <sub>23 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[leepokai/jev-guard](https://github.com/leepokai/jev-guard)** - Auto mode for every coding agent, built on Jev: risk-scores every tool call with session context (deny / ask / allow), flags prompt injection in results, checks skills and plugins. Claude Code, Codex, Copilot, Gemini, Cursor, pi, OpenCode, ACP.  
  <sub>22 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[Nasrallah-AL/jev-cli](https://github.com/Nasrallah-AL/jev-cli)** - Command-line tool for TypeSafe's Jev AI model  
  <sub>20 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[nexibeo/jev-cookbook](https://github.com/nexibeo/jev-cookbook)** - Practical, tested recipes for TypeSafe's Jev decision model on OpenRouter: support triage, database indexing, file organizing, tagging, taxonomies, dedupe, PII detection, extraction, search re-ranking and a browser agent.  
  <sub>17 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[shiftynick/jev-axi](https://github.com/shiftynick/jev-axi)** - Agent-ergonomic CLI for TypeSafe's Jev: fast calibrated judgments (pick, rate, check, rank, triage, guard) from the shell  
  <sub>17 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[leesk212/JEV-CPU](https://github.com/leesk212/JEV-CPU)** - Run SemIf (Jev-style semantic-if decisions) on a CPU — no GPU. Reads typed option probabilities straight from an open model in one forward pass, plus a web UI.  
  <sub>14 stars · Python · MIT · updated 2026-09-19</sub>
- **[Nyarlathoteppppp/pi-heed](https://github.com/Nyarlathoteppppp/pi-heed)** - Runtime constraints for the pi coding agent: checks every side-effecting tool call against what you said, before it runs. Powered by TypeSafe Jev.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[zhangxaochen/dsh-jev](https://github.com/zhangxaochen/dsh-jev)** - Jev (System One decision model) plugin suite for DeepSeek Harness (dsh)  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[Charlyhno-eng/jev-document-classification](https://github.com/Charlyhno-eng/jev-document-classification)** - JEV Document Classification enables the rapid and cost-effective classification of text-based documents using AI, leveraging TypeSafe's "System One" model.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jkrup/jeveryword](https://github.com/jkrup/jeveryword)** - Text extraction with Jev: field extraction, PII detection and exact quotes, built on TypeSafe's Jev.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[alexj11324/open-jev-approvals](https://github.com/alexj11324/open-jev-approvals)** - Binary approval gate for Codex and Claude Code — every intercepted tool call is reviewed by TypeSafe JEV and composed through a versioned local policy, with scoped authorization.  
  <sub>3 stars · Go · MIT · updated 2026-09-20</sub>
- **[godspede/construct-auto-classifier](https://github.com/godspede/construct-auto-classifier)** - Effect-based safety gate for AI coding agents' shell commands (OpenCode, Antigravity): fast structural rules, then TypeSafe's Jev or a chat model judges what a command does. Certified with Jev at zero dangerous commands allowed.  
  <sub>3 stars · TypeScript · Apache-2.0 · updated 2026-09-19</sub>
- **[ismaelsoilet/jev-harness](https://github.com/ismaelsoilet/jev-harness)** - Zero-dependency System One decision harness: 5 semantic gates saving frontier AI agent tokens on trivial errors & doom loops. Python + TypeScript + Rust. MCP-compatible.  
  <sub>3 stars · Python · MIT · updated 2026-09-22</sub>
- **[ItisShikhar/gg-friggin-ez](https://github.com/ItisShikhar/gg-friggin-ez)** - Fast, drop-in multilingual profanity and toxicity screener for Node.js, powered by System 1 models like TypeSafe AI Jev and Laya. Catches leetspeak, character spacing, and romanized profanity across languages including Kannada, Telugu, Tamil, Hindi, and Bengali. ~50-500ms latency.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[AkashPriyadarshii/jev-scout](https://github.com/AkashPriyadarshii/jev-scout)** - Zero-hallucination open-source repo and crate scout powered by TypeSafe AI Jev System One scoring  
  <sub>2 stars · Rust · MIT · updated 2026-09-21</sub>
- **[coo-quack/jev-pii-checker](https://github.com/coo-quack/jev-pii-checker)** - CLI that finds PII in text with TypeSafe Jev: presence, sensitivity, and located spans  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[dr-dimitru/claude-jev-plugin](https://github.com/dr-dimitru/claude-jev-plugin)** - TypeSafe Jev semantic guardrails for Claude Code  
  <sub>2 stars · TypeScript · BSD-3-Clause · updated 2026-09-22</sub>
- **[JabbaKadabra/SystemOneDotNet](https://github.com/JabbaKadabra/SystemOneDotNet)** - .NET client for TypeSafe System One (Jev) — typed questions in, typed answers with probabilities and confidence out. No prompt engineering, no output parsing.  
  <sub>2 stars · C# · MIT · updated 2026-09-21</sub>
- **[omkarghugarkar007/actiongate-jev](https://github.com/omkarghugarkar007/actiongate-jev)** - Open-source Jev tool-calling authorization gateway for AI agents: deterministic policy, exact-action single-use permits, MCP and HTTP enforcement.  
  <sub>2 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[soderlind/jev-comment-triage](https://github.com/soderlind/jev-comment-triage)** - Async Jev-powered WordPress comment triage: background spam, scam/phishing, and toxicity moderation that keeps comment submission fast.  
  <sub>2 stars · PHP · updated 2026-09-18</sub>
- **[vibe-with-me-tools/n8n-nodes-jev](https://github.com/vibe-with-me-tools/n8n-nodes-jev)** - Helper n8n community node for Jev by TypeSafe. Classify, route, and score text with questions you define, and get a probability for every answer so unsure items can go to review.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[eugeniughelbur/jev-engineering](https://github.com/eugeniughelbur/jev-engineering)** - The decision layer for AI agents. Typed, calibrated decisions in ~400ms for two hundredths of a cent: gate tool calls, route models, rank options. With the 300-call injection test that found what breaks.  
  <sub>1 stars · Python · MIT · updated 2026-09-20</sub>
- **[getexcited/stepwarden](https://github.com/getexcited/stepwarden)** - Every tool call your agent makes, checked before it runs. A Claude Code plugin that uses TypeSafe AI's Jev to verify each pending tool call against the session plan, then allows it, asks you, or blocks it. Proof of concept  
  <sub>1 stars · TypeScript · Apache-2.0 · updated 2026-09-18</sub>
- **[jiawei686/jev-screen-mcp](https://github.com/jiawei686/jev-screen-mcp)** - Single-purpose MCP server (one tool, one job): a content-moderation gate powered by TypeSafe Jev (System One decision model).  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[navidkashani/jev-guard](https://github.com/navidkashani/jev-guard)** - Spam protection for WordPress comments, reviews and Contact Form 7 using the Jev decision model (independent, unaffiliated)  
  <sub>1 stars · PHP · GPL-2.0 · updated 2026-09-22</sub>
- **[nexibeo/jev-organize](https://github.com/nexibeo/jev-organize)** - Throw in a pile of company files and get them classified and organized by department, type, sensitivity, date, counterparty and PII, with an index for AI agents. Powered by TypeSafe's Jev on OpenRouter (17¢ per 1,000 files). Zero-dependency Node CLI + Claude skill + Codex agent.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[prabhatpankaj/typesafe-POC](https://github.com/prabhatpankaj/typesafe-POC)** - No description provided.  
  <sub>1 stars · Python · updated 2026-09-21</sub>
- **[Umbylicus/umby-jev-stack](https://github.com/Umbylicus/umby-jev-stack)** - Portable agent skill: TypeSafe Jev as a cheap code-review classifier (HTTP + optional jev-review MCP)  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[akras14/jevbro](https://github.com/akras14/jevbro)** - Command-line browser agent: Jev picks every action, a small LLM only writes text.  
  <sub>0 stars · TypeScript · Apache-2.0 · updated 2026-09-21</sub>
- **[aleksvega/jev-skill-router](https://github.com/aleksvega/jev-skill-router)** - Jev-powered skill router & security auditor for any AI agent (Codex, Claude Code, OpenCode, Hermes): ONE cheap decision per request tells the model WHICH skill to load; scans skill libraries for prompt injection & dangerous commands.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[alsoleg89/jev-bouncer](https://github.com/alsoleg89/jev-bouncer)** - Claude Code plugin: a 3-cent bouncer for your agent's shell. Jev typed probabilities auto-allow routine commands, deny destructive ones, and flag prompt injection in tool results.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[bismawy/pi-jev-eye](https://github.com/bismawy/pi-jev-eye)** - Ultra-lean supervisor for Pi coding agent using local regex filters, verification state tracking, and TypeSafe Jev semantic gate  
  <sub>0 stars · TypeScript · updated 2026-09-22</sub>
- **[cedrecs/jev-yarn](https://github.com/cedrecs/jev-yarn)** - Y.A.R.N. inspired party game - everyone writes the next line in the story!  TypeSafe's Jev (AI) judges your submission and chooses a winner.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[CMaintz/jev-guard](https://github.com/CMaintz/jev-guard)** - Vets an LLM agent's tool calls through TypeSafe AI's Jev before they run — allow, block, or hold, failing safe on uncertainty.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[codaaiteam/jev-mcp](https://github.com/codaaiteam/jev-mcp)** - MCP server for Jev (TypeSafe AI's System One model) — give any agent typed, calibrated decisions: classify, score, check, gate risky tool calls. Try free: jevtypesafeai.com  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[h1code2/jev-x-blocker](https://github.com/h1code2/jev-x-blocker)** - No description provided.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[jason-allen-oneal/openclaw-plugin-typesafe-ai](https://github.com/jason-allen-oneal/openclaw-plugin-typesafe-ai)** - TypeSafe AI (Jev System One) plugin for OpenClaw - sub-100ms group triage, tool safety guardrails, compaction curation, and model routing  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[jev-ai/jev-api](https://github.com/jev-ai/jev-api)** - Jev AI  
  <sub>0 stars · HTML · updated 2026-09-21</sub>
- **[jev-ai/jev-model](https://github.com/jev-ai/jev-model)** - Jev AI  
  <sub>0 stars · HTML · updated 2026-09-21</sub>
- **[jijaraba/LogiPulseAI_JEV](https://github.com/jijaraba/LogiPulseAI_JEV)** - Real-time last-mile delivery exception triage: Jev (TypeSafe AI System One) evaluates each event, deterministic guardrails decide. FastAPI + Streamlit.  
  <sub>0 stars · Python · updated 2026-09-21</sub>
- **[juanlentino/jev-comment-analysis](https://github.com/juanlentino/jev-comment-analysis)** - Backs the WordPress AI plugin's Comment Moderation with TypeSafe Jev, through Connector for TypeSafe Jev  
  <sub>0 stars · PHP · GPL-2.0 · updated 2026-09-20</sub>
- **[JularDepick/Jev-Examiner](https://github.com/JularDepick/Jev-Examiner)** - An AI content moderation workflow powered by the [TypeSafe/Jev model](https://typesafe.ai).  
  <sub>0 stars · JavaScript · Apache-2.0 · updated 2026-09-20</sub>
- **[OmarAlaaeldein/jev-verifier-skill](https://github.com/OmarAlaaeldein/jev-verifier-skill)** - Fast 'System One' reflex for reasoning LLMs: typed probabilistic second opinions from Jev via OpenCode Zen, with PII-minimizing state redaction.  
  <sub>0 stars · MIT · updated 2026-09-21</sub>
- **[randilt/jev-policies](https://github.com/randilt/jev-policies)** - PoC: an AI Gateway guardrail policy for WSO2 API Platform, backed by TypeSafe AI's Jev model  
  <sub>0 stars · Go · updated 2026-09-22</sub>
- **[rashedInt32/jev-gates](https://github.com/rashedInt32/jev-gates)** - Six calibrated gates for Claude Code, judged by TypeSafe Jev: rules, scope, intent, done, claims, and commit honesty. Each one escalates, none ever approves.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[RavenRepo/jevengineeringgate](https://github.com/RavenRepo/jevengineeringgate)** - Calibrated decision layer and risk gate for AI coding agents. Routes yes/no, routing and scoring judgments to the Jev System One model at ~$0.0000123 per decision, then enforces the result deterministically through Claude Code PreToolUse hooks. Fitted thresholds, not guessed.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[scott-the-programmer/system1-guard](https://github.com/scott-the-programmer/system1-guard)** - Guardrails based on Jev, Typescript.AI's System One model  
  <sub>0 stars · updated 2026-09-19</sub>
- **[TickerDev/jevfanity](https://github.com/TickerDev/jevfanity)** - Monorepo for jevfanity, a profanity detector using Jev by TypeSafe AI  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[TickerDev/jevfanity-api](https://github.com/TickerDev/jevfanity-api)** - Monorepo for jevfanity, a profanity detector using Jev by TypeSafe AI  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[WallerChen/jev-measured](https://github.com/WallerChen/jev-measured)** - Measured cost, latency and raw output from the live Jev API (TypeSafe AI System One model) across 8 use cases — reproducible  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[Wany-i/jev-decision-layer](https://github.com/Wany-i/jev-decision-layer)** - 把决策模型（typesafe/jev-1.13，经 OpenRouter 的 decisions 端点调用）封装成业务决策工具：注册表驱动，带置信度门控与硬约束。非官方项目。  
  <sub>0 stars · Python · MIT · updated 2026-09-18</sub>

### Infrastructure and tooling

- **[OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger)** - Open-source AI Trading OS, agent trading, and vibe trading, with Jev System One integration. Research, build Python strategies, backtest, and paper/live trade across crypto, stocks, and forex. Launch your own multi-tenant trading SaaS with built-in user management, billing, payments, and settlement.  
  <sub>11979 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[thruwire/foreman](https://github.com/thruwire/foreman)** - Software factory foreman based on TypeSafe's Jev model  
  <sub>493 stars · Python · MIT · updated 2026-09-20</sub>
- **[notque/vexjoy-agent](https://github.com/notque/vexjoy-agent)** - VexJoy AI Agent with Jev Intelligent Routing - /do routes plain-English requests to the right specialist agent and gates the work with reviews, tests, and a learning loop.  
  <sub>423 stars · Python · MIT · updated 2026-09-22</sub>
- **[wy-coliney/jev-browser-use](https://github.com/wy-coliney/jev-browser-use)** - 5–10x faster browser operations: Jev clicks, Codex thinks and verifies. Built at EZCollegeApp.  
  <sub>352 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[droidrun/mobile-jev](https://github.com/droidrun/mobile-jev)** - No description provided.  
  <sub>339 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[gargpratyush/jev-router](https://github.com/gargpratyush/jev-router)** - Route to the cheapest model in claude code for your task using jev-router  
  <sub>326 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[sutro-sh/jev-align](https://github.com/sutro-sh/jev-align)** - Build calibrated AI Functions from human feedback using Jev and GEPA.  
  <sub>272 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[jkudish/jev-mcp](https://github.com/jkudish/jev-mcp)** - Fast, cheap, typed judgments from TypeSafe's Jev model, as MCP tools.  
  <sub>267 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[ekzhang/openjev-sglang](https://github.com/ekzhang/openjev-sglang)** - Jev-compatible API endpoint based on open models (prefill-only)  
  <sub>262 stars · Python · updated 2026-09-21</sub>
- **[itsmostafa/typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp)** - mcp connector to give your AI agent direct access to typesafe ai's jev model  
  <sub>249 stars · Go · MIT · updated 2026-09-21</sub>
- **[jkudish/jev-browser](https://github.com/jkudish/jev-browser)** - Browser use using Typesafe's Jev model  
  <sub>236 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[0xNatoshi/jev-codex-router](https://github.com/0xNatoshi/jev-codex-router)** - Per-turn model & reasoning routing for Codex, driven by Jev (TypeSafe System One): picks the model, thinking depth and speed mode for every turn.  
  <sub>205 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[dbreunig/building-with-jev-skill](https://github.com/dbreunig/building-with-jev-skill)** - A skill for writing and improving programs that call Jev, TypeSafe's System One model  
  <sub>128 stars · updated 2026-09-17</sub>
- **[Dicklesworthstone/skillranker](https://github.com/Dicklesworthstone/skillranker)** - Rust CLI powered by Jev from TypeSafe.ai that ranks agent skills for the next step using live session context. Includes Claude Code hooks, structured JSON, abstention, and local feedback. Requires a TypeSafe API key.  
  <sub>112 stars · Rust · updated 2026-09-22</sub>
- **[pithings/advocaat](https://github.com/pithings/advocaat)** - A small, type-safe client for asking AI questions about your data, powered by TypeSafe Jev.  
  <sub>89 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[w3cj/jev-chat](https://github.com/w3cj/jev-chat)** - A tool calling chat bot built with Jev and no LLM.  
  <sub>88 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[Ying-Kai-Liao/jev-browser](https://github.com/Ying-Kai-Liao/jev-browser)** - Browser automation where an LLM plans and Jev (Typesafe System One) decides. Library, CLI and MCP server.  
  <sub>71 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[socai-io/jev-social](https://github.com/socai-io/jev-social)** - Jev-powered Instagram, TikTok, and LinkedIn research: typed routing, real browser evidence, streamed post cards, video capture, and cited socai reports.  
  <sub>46 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[yusukebe/hono-jev-router](https://github.com/yusukebe/hono-jev-router)** - Route HTTP requests by meaning. A semantic router for Hono powered by Jev.  
  <sub>45 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[tacticocc/Jevbridge](https://github.com/tacticocc/Jevbridge)** - ACP and MCP adapter that bridges TypeSafe Jev with any LLM — computer use and typed decisions alongside Codex, Claude, Grok, and OpenCode.  
  <sub>37 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[burnigtm/jev-mcp](https://github.com/burnigtm/jev-mcp)** - MCP server that puts TypeSafe Jev on the coding loop in Cursor, Codex, and any MCP client  
  <sub>36 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[TheoOliveira/pi-jev](https://github.com/TheoOliveira/pi-jev)** - Semantic tool routing and typed System One decisions for the Pi coding agent using TypeSafe Jev  
  <sub>36 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[sharziki/semdecide](https://github.com/sharziki/semdecide)** - Typed semantic decisions for Unix pipelines and CI, powered by TypeSafe AI Jev.  
  <sub>34 stars · Python · MIT · updated 2026-09-16</sub>
- **[AkashPriyadarshii/jev-seo](https://github.com/AkashPriyadarshii/jev-seo)** - 100% free ₹0 agent-first SEO & GEO CLI suite and MCP server in Rust replacing Semrush and OpenSEO via DuckDuckGo and TypeSafe Jev System One https://akashpriyadarshii.github.io/jev-seo/  
  <sub>32 stars · Rust · MIT · updated 2026-09-22</sub>
- **[win4r/jev-skill-suggester](https://github.com/win4r/jev-skill-suggester)** - 用 TypeSafe Jev 推荐已安装 Skill / Bounded installed-skill recommendations with TypeSafe Jev. Python CLI, Codex skill, bilingual docs and live examples.  
  <sub>32 stars · Python · MIT · updated 2026-09-19</sub>
- **[andududu/jeview](https://github.com/andududu/jeview)** - An unofficial local visualizer for Jev (TypeSafe): a live view of every call your code makes. Not affiliated with TypeSafe AI.  
  <sub>25 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[davila7/jev-explained](https://github.com/davila7/jev-explained)** - Jev Explained  
  <sub>25 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[libingzheren/Jev-Mem](https://github.com/libingzheren/Jev-Mem)** - Jev-Mem: System-One Controlled Agentic Memory  
  <sub>21 stars · Python · MIT · updated 2026-09-22</sub>
- **[mizchi/jev-playground](https://github.com/mizchi/jev-playground)** - No description provided.  
  <sub>19 stars · TypeScript · updated 2026-09-22</sub>
- **[nico-martin/open-jev](https://github.com/nico-martin/open-jev)** - open-jev is a browser-focused TypeScript library for typed decisions: one piece of text (the state) plus any number of typed questions go in, and one forward pass returns a calibrated probability distribution per question. Nothing is generated, so an answer is always one of the options you provided.  
  <sub>19 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[blakestone-x/jev-mcp](https://github.com/blakestone-x/jev-mcp)** - MCP server for TypeSafe Jev: typed classify, score, check, match and screen for any agent, with confidence on every answer  
  <sub>18 stars · Python · MIT · updated 2026-09-16</sub>
- **[Eriskii/ErisLint](https://github.com/Eriskii/ErisLint)** - Rust linter powered by configurable Jev rules, with a VS Code extension.  
  <sub>18 stars · Rust · AGPL-3.0 · updated 2026-09-18</sub>
- **[keltokhy/jgrep](https://github.com/keltokhy/jgrep)** - grep, but the pattern is a description. Filters lines by meaning with TypeSafe's Jev decision model: ~200 ms and a thousandth of a cent per line.  
  <sub>18 stars · Python · MIT · updated 2026-09-22</sub>
- **[keltokhy/jsort](https://github.com/keltokhy/jsort)** - sort by meaning: order lines along a plain-English dimension, from pairwise comparisons judged by TypeSafe's Jev model  
  <sub>18 stars · Python · MIT · updated 2026-09-22</sub>
- **[peterfriese/jev-foundation-models](https://github.com/peterfriese/jev-foundation-models)** - A lightweight, native Swift 6 bridge integrating TypeSafe AI's Jev System One decision model into Apple's Foundation Models framework.  
  <sub>17 stars · Swift · Apache-2.0 · updated 2026-09-21</sub>
- **[shitianfang/jev-use](https://github.com/shitianfang/jev-use)** - Claude Code / Codex / pi plugin that hands agent steps needing no text output to Jev (TypeSafe's judgment model) — measured p50 ~230 ms and ~$0.02 per 1,000 judgments, with typed escalation back to the LLM  
  <sub>17 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[wd041216-bit/zero-api-key-web-search](https://github.com/wd041216-bit/zero-api-key-web-search)** - Jev-powered search infrastructure for AI agents: zero API keys, MCP-ready, LLM-context aware, with local neural evidence verification.  
  <sub>17 stars · Python · MIT · updated 2026-09-21</sub>
- **[GodsBoy/jev-agent-skill-router](https://github.com/GodsBoy/jev-agent-skill-router)** - Typed, confidence-aware agent skill routing with TypeSafe Jev.  
  <sub>16 stars · Python · MIT · updated 2026-09-16</sub>
- **[Brainwires/jevwire](https://github.com/Brainwires/jevwire)** - Jev decision layer for agents: MCP server, embeddable DecisionModel library, and an escalate-only Claude Code plugin (TypeSafe AI's Jev)  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[mizchi/jev-test-filter](https://github.com/mizchi/jev-test-filter)** - Score every test against a git diff with Jev, and emit the filter arguments vitest, node:test, Playwright, cargo test and go test already understand  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[utk2103/jev-studio](https://github.com/utk2103/jev-studio)** - if you're experimenting with jev it will be easier from here  
  <sub>15 stars · Python · MIT · updated 2026-09-22</sub>
- **[AkashPriyadarshii/jev-superpowers](https://github.com/AkashPriyadarshii/jev-superpowers)** - Systematic software development framework for AI coding agents upgraded with TypeSafe Jev System One typed decisions  
  <sub>14 stars · HTML · MIT · updated 2026-09-22</sub>
- **[Eniip/jev-game-tools](https://github.com/Eniip/jev-game-tools)** - No description provided.  
  <sub>14 stars · Python · updated 2026-09-19</sub>
- **[csskrtao/jev-to-answer](https://github.com/csskrtao/jev-to-answer)** - 答案之书jev  
  <sub>13 stars · JavaScript · updated 2026-09-22</sub>
- **[DECRUX9812/typesafe-skill-router](https://github.com/DECRUX9812/typesafe-skill-router)** - TypeSafe (Jev) skill routing for Hermes Agent: names the one skill worth loading, before the model call. Opt-in, stdlib only, ~$0.001 per routed turn.  
  <sub>13 stars · Python · MIT · updated 2026-09-21</sub>
- **[trungdq88/jev-tetris](https://github.com/trungdq88/jev-tetris)** - Jev play Tetris in real-time against other AI models  
  <sub>13 stars · JavaScript · updated 2026-09-21</sub>
- **[mejiasd3v/pi-jev-router](https://github.com/mejiasd3v/pi-jev-router)** - Automatic model routing for Pi using TypeSafe's Jev through Vercel AI Gateway  
  <sub>12 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[tumf/jev-cli](https://github.com/tumf/jev-cli)** - Small dependency-free CLI for TypeSafe Jev  
  <sub>12 stars · Python · MIT · updated 2026-09-19</sub>
- **[huntedman/JevLint](https://github.com/huntedman/JevLint)** - Configurable semantic linting powered by Jev, with file-level NOUL judgments and a magic-strings plugin.  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[iamtoomas/JevLint](https://github.com/iamtoomas/JevLint)** - Configurable semantic linting powered by Jev, with file-level NOUL judgments and a magic-strings plugin.  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[kylemclaren/jevql](https://github.com/kylemclaren/jevql)** - Semantic SQL for Postgres, powered by Jev  
  <sub>11 stars · Go · MIT · updated 2026-09-19</sub>
- **[anyfilter/anyfilter](https://github.com/anyfilter/anyfilter)** - Hide anything you don't want to see on any site. X for now, more to come.  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jiawei686/jev-ultrafast-mcp](https://github.com/jiawei686/jev-ultrafast-mcp)** - Hand the browser work off: an MCP server where a decision model drives the page for your agent, so a flow costs one tool call instead of a turn per click. Ref-based element tables, code-checked assertions, zero-model macro replay. Speaks CDP to your Chrome.  
  <sub>10 stars · Python · MIT · updated 2026-09-21</sub>
- **[win4r/jev-security-scan](https://github.com/win4r/jev-security-scan)** - 使用 TypeSafe Jev 审查 Skill 与 MCP 可疑行为 | Review Agent Skills and MCP code with Jev, static evidence, and explicit coverage gaps  
  <sub>10 stars · Python · MIT · updated 2026-09-19</sub>
- **[win4r/pi-jev-router](https://github.com/win4r/pi-jev-router)** - Task-boundary model routing for Pi Coding Agent, powered by TypeSafe Jev. Conservative policies, exact caching, and observable failover.  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[matthewp/flue-jev-demo](https://github.com/matthewp/flue-jev-demo)** - Flue agent routing with TypeSafe Jev through Cloudflare AI Gateway  
  <sub>9 stars · TypeScript · updated 2026-09-18</sub>
- **[southpolesteve/probably](https://github.com/southpolesteve/probably)** - A small programming language for LLM workflows, powered by Jev.  
  <sub>9 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[cristianoliveira/jeq](https://github.com/cristianoliveira/jeq)** - What happens when jev meets jq? Intelligence you can pipe  
  <sub>8 stars · Go · MIT · updated 2026-09-22</sub>
- **[jekhov/jekhov](https://github.com/jekhov/jekhov)** - Policy-bounded Jev target selection for resilient Playwright workflows  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jerryfane/omp-jev-compaction](https://github.com/jerryfane/omp-jev-compaction)** - Verbatim Jev-scored context reduction for omp, over TypeSafe or OpenRouter  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[prismhq/jev-router](https://github.com/prismhq/jev-router)** - Open-source LLM router that uses TypeSafe's Jev to pick a model, on top of LiteLLM  
  <sub>8 stars · Python · MIT · updated 2026-09-17</sub>
- **[rajdhakad9826/jev-router](https://github.com/rajdhakad9826/jev-router)** - LLM router that picks the cheapest model capable of handling a query, using TypeSafe's Jev for fast classification instead of an LLM call.  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[forvela/jev-agent-browser](https://github.com/forvela/jev-agent-browser)** - Fast, bounded browser agents powered by Jev and agent-browser — typed actions, research, classification, and safe orchestration.  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[kyegomez/open-jev](https://github.com/kyegomez/open-jev)** - an open-source, from-first-principles reconstruction of the ideas behind TypeSafe AI's Jev, written in pytorch  
  <sub>7 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[okooo5km/jev](https://github.com/okooo5km/jev)** - Typed decisions from the shell: an unofficial stdlib-Python CLI and Agent Skill for TypeSafe's Jev model, via the TypeSafe API (default) or OpenRouter. Yes/no, choice and ordinal scores with calibrated probabilities, semantic grep and batch mode.  
  <sub>7 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[riteshverma/s18](https://github.com/riteshverma/s18)** - Introducing s18 — an open-source agent runtime & orchestration framework for real AI systems.  ⚡ Multi-agent workflows   ⚡ Real-time streaming state   ⚡ Scheduling + automation   ⚡ MCP tool integrations   ⚡ Local-first or cloud models   ⚡ Observability built in  
  <sub>7 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[blazejkustra/softlint](https://github.com/blazejkustra/softlint)** - Enforce rules a linter can't. A GitHub Action that reviews PRs against plain-English rules, judged by Jev.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[fatelei/jev-compact](https://github.com/fatelei/jev-compact)** - Jev-scored context compaction for OpenAI Codex CLI — scores every tool call before compaction and restores critical tool outputs verbatim after it  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[himomohi/aside-jev](https://github.com/himomohi/aside-jev)** - Aside agents decide with TypeSafe Jev (System One: Choice/Score/Noul). Not a Cua binding — Jev is the model, Aside is the browser runtime.  
  <sub>6 stars · Python · MIT · updated 2026-09-21</sub>
- **[jackbarunz/jev-tool-router](https://github.com/jackbarunz/jev-tool-router)** - Jev-powered MCP tool routing for Codex  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[karanb192/jev-architect](https://github.com/karanb192/jev-architect)** - Find, design, and evaluate TypeSafe Jev decision loops.  
  <sub>6 stars · HTML · MIT · updated 2026-09-20</sub>
- **[Nyarlathoteppppp/pi-jev-context](https://github.com/Nyarlathoteppppp/pi-jev-context)** - Model performance first. Token savings second. A Pi extension with freshness-aware read dedupe, Jev log filtering, and searchable verbatim recall. Keeps existing message history intact.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[rashedInt32/jev-mcp](https://github.com/rashedInt32/jev-mcp)** - MCP server exposing TypeSafe Jev as typed, calibrated judgment tools: classify, score, check, batched ask. Ships as a Claude Code plugin.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[acoyfellow/predict](https://github.com/acoyfellow/predict)** - A small browser signal for the next useful step on a website.  
  <sub>5 stars · Svelte · updated 2026-09-20</sub>
- **[ai-suifeng/comment-jev-chrome](https://github.com/ai-suifeng/comment-jev-chrome)** - No description provided.  
  <sub>5 stars · JavaScript · updated 2026-09-18</sub>
- **[Peu77/JevFind](https://github.com/Peu77/JevFind)** - Fast semantic code search powered by Jev. Find the relevant files, line ranges, and snippets  
  <sub>5 stars · Rust · MIT · updated 2026-09-20</sub>
- **[reachjalil/jev-tree](https://github.com/reachjalil/jev-tree)** - Recursive Jev choice over a taxonomy. Select from more than 255 options without breaking TypeSafe Jev's choice cap.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[sufianetaouil/every](https://github.com/sufianetaouil/every)** - Ask a yes/no question of every function in a codebase. Ranked answers in seconds, for cents. Grep whose pattern is a question, powered by TypeSafe Jev.  
  <sub>5 stars · Python · MIT · updated 2026-09-17</sub>
- **[yijunyu/jev-rs](https://github.com/yijunyu/jev-rs)** - System One judgments (noul/choice/score) from any LLM in one prefill — a Rust, Jev-compatible /v1/systemone engine  
  <sub>5 stars · Rust · Apache-2.0 · updated 2026-09-22</sub>
- **[alxcrt/is-odd-jev](https://github.com/alxcrt/is-odd-jev)** - No description provided.  
  <sub>4 stars · JavaScript · updated 2026-09-17</sub>
- **[andrelandgraf/safer-with-jev](https://github.com/andrelandgraf/safer-with-jev)** - Neon Function proxy for the Neon AI Gateway with TypeSafe Jev routing.  
  <sub>4 stars · TypeScript · updated 2026-09-18</sub>
- **[carlosedm10/agi-jev-containment](https://github.com/carlosedm10/agi-jev-containment)** - AGI JEV Detection — local AI agent monitor: chain-level malicious-agent detection (TypeSafe Jev + Sentinel), escalate-only L1–L5 containment, Neo4j forensics, AngryRobot dashboard. HackSpain 2026.  
  <sub>4 stars · Python · updated 2026-09-21</sub>
- **[daniel-farina/nitro](https://github.com/daniel-farina/nitro)** - Grok Build with TypeSafe Jev routing tool selection once per turn: 22 to 40% cheaper on the same tasks  
  <sub>4 stars · Rust · updated 2026-09-20</sub>
- **[EugeneBoondock/jevsql](https://github.com/EugeneBoondock/jevsql)** - SQL with natural-language predicates, powered by TypeSafe's Jev. Filter, rank, classify and score rows by meaning — batched, cached and cost-guarded.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[FrancoisChastel/jev-code](https://github.com/FrancoisChastel/jev-code)** - Jev, TypeSafe's System One classifier, as a tool inside Claude Code, Codex, Pi, and OpenCode: typed classify, check, score, rank, and ask, plus one-command setup.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[nrdz-labs/fast-jev-opencode](https://github.com/nrdz-labs/fast-jev-opencode)** - Jev-scored context pruning for OpenCode: drops stale tool calls and truncates bulky results on the outgoing request — fail-open, cache-backed, configurable live. Port of fast-jev-compaction to the V2 context hook.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[tonyzdev/pijev](https://github.com/tonyzdev/pijev)** - PiJev: a terminal coding agent with Jev in the loop — Jev ranks the repository's files before the first call, picks skills and triages failures; your coding model writes the code. Built on Pi.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[win4r/jev-humanize-writing](https://github.com/win4r/jev-humanize-writing)** - Jev 辅助去 AI 味写作：保留事实、归因与作者语气 | Natural prose editing with Jev-assisted fidelity review  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[y0usaf/typesafe-cli](https://github.com/y0usaf/typesafe-cli)** - Ask Jev typed questions from the shell: noul, choice, and score answers as numbers, not prose  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[0x7067/jev-browse](https://github.com/0x7067/jev-browse)** - Browser automation with Jev (TypeSafe) as decision model  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[455-dIAO/windows-save-token-jev-setup](https://github.com/455-dIAO/windows-save-token-jev-setup)** - Windows Codex Skill：通过 npx 或 Git 安装，安全配置 save-token-jev 的 PreCompact/SessionStart Hooks，并提供信任、原生压缩与旧内容隔离验证。  
  <sub>3 stars · PowerShell · updated 2026-09-21</sub>
- **[aaronshaf/opencode-jev-orchestrator](https://github.com/aaronshaf/opencode-jev-orchestrator)** - Keeps OpenCode on a cheap sticky model for warm cache; Jev escalates hard turns to stronger subagents.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[abhishekashokvkumar/jev-mcp-dispatcher](https://github.com/abhishekashokvkumar/jev-mcp-dispatcher)** - Natural-language MCP tool dispatcher powered entirely by TypeSafe's Jev — no general-purpose LLM. Discovers a simple MCP server's tool signatures at runtime and uses Jev's typed primitives (Choice/Noul) to pick the right tool and extract its arguments straight out of the sentence.  
  <sub>3 stars · Python · updated 2026-09-18</sub>
- **[Adkid-Zephyr/work-with-jev](https://github.com/Adkid-Zephyr/work-with-jev)** - 用 Jev 把飞书工作消息分成四类：紧急、待办、值得看、暂时略过。A minimal, local-first message classifier with extensible workspace adapters.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[AIsa-team/worth-replying](https://github.com/AIsa-team/worth-replying)** - Worth Replying by AIsa  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[ariel-frischer/jevkit](https://github.com/ariel-frischer/jevkit)** - Fast Rust CLI for TypeSafe Jev: typed decisions, offline linting before you pay  
  <sub>3 stars · Rust · MIT · updated 2026-09-19</sub>
- **[Friedjof/jev-mobile](https://github.com/Friedjof/jev-mobile)** - Fast structured Android control loops with TypeSafe Jev and Mobile MCP  
  <sub>3 stars · Python · MIT · updated 2026-09-18</sub>
- **[geilt/typesafe-cli](https://github.com/geilt/typesafe-cli)** - CLI and agent skill for TypeSafe System One (Jev): typed Choice, Score, and Noul judgments.  
  <sub>3 stars · Python · updated 2026-09-17</sub>
- **[HaoxiangXia/fork-cast](https://github.com/HaoxiangXia/fork-cast)** - 零标签随性就餐决策工具，基于 Jev System 1 概率决策模型  
  <sub>3 stars · HTML · updated 2026-09-21</sub>
- **[HyunjunJeon/jev-judgment](https://github.com/HyunjunJeon/jev-judgment)** - Agent Skill: send closed coding-agent judgments to TypeSafe Jev  
  <sub>3 stars · Python · MIT · updated 2026-09-17</sub>
- **[jcressler/jev-codex-token-saver](https://github.com/jcressler/jev-codex-token-saver)** - Experimental Jev evidence selection for token-efficient Codex investigations  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[jevbook/jevscan](https://github.com/jevbook/jevscan)** - Typed onchain verdicts for EVM tokens: ape / watch /avoid with calibrated probabilities. CLI + library +MCP server. Robinhood Chain first.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[jiayylu/jev-as-quant](https://github.com/jiayylu/jev-as-quant)** - Typed System-1 decisions (Laya/Jev) as the judgment layer of a quant research stack, with Claude as System 2. Requirements → design → code → experiments.  
  <sub>3 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[kotoba-lang/typed-decisions](https://github.com/kotoba-lang/typed-decisions)** - Jev-shaped typed-decision model (state + Choice/Score/Noul questions -> calibrated probabilities, one pass) on ModernBERT / DeBERTa / LLaDA-MoE, with measured latency, accuracy, calibration and training cost  
  <sub>3 stars · Python · updated 2026-09-22</sub>
- **[leonaaardob/fast-dev-compaction](https://github.com/leonaaardob/fast-dev-compaction)** - Codex plugin: verbatim Jev-guided context restoration around session compaction. Port of tamaratran/fast-jev-compaction to Codex lifecycle hooks.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[rawwerks/one-system](https://github.com/rawwerks/one-system)** - Use local and hosted classifiers aka decision models aka Jev-like models, all through a single TypeSafe API  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[rsdkrasen/hermes-jev-router](https://github.com/rsdkrasen/hermes-jev-router)** - TypeSafe/Jev router plugin for Hermes Agent — compact tool results, suppress duplicate tools, skip unnecessary main-model calls  
  <sub>3 stars · Python · updated 2026-09-19</sub>
- **[satviksinha/jev-model-router](https://github.com/satviksinha/jev-model-router)** - Model router for Claude Code using Jev  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[spoonnotfound/soupbase](https://github.com/spoonnotfound/soupbase)** - Jev x 海龟汤  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[sumleo/prompt2jev](https://github.com/sumleo/prompt2jev)** - Agent skill and CLI that turn natural language, an LLM prompt, or the code that runs one into a TypeSafe Jev decision: typed state, Choice/Score/Noul questions, and a runnable script  
  <sub>3 stars · Python · MIT · updated 2026-09-21</sub>
- **[valentynkit/jev-skip](https://github.com/valentynkit/jev-skip)** - YouTube sponsor skipper that reads the captions and decides at watch time: a probability heatmap on the seek bar, no crowd database  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[yatharth1706/inbox-triage](https://github.com/yatharth1706/inbox-triage)** - No description provided.  
  <sub>3 stars · TypeScript · updated 2026-09-20</sub>
- **[0xnairb/research_desk](https://github.com/0xnairb/research_desk)** - TypeSafe Jev demonstration for new analyzation — experimenting with Jev for fast analysis of news and tickers  
  <sub>2 stars · Python · updated 2026-09-18</sub>
- **[202wh/loving-artist-practice](https://github.com/202wh/loving-artist-practice)** - WeChat x Jev HUD - real-time relationship analysis overlay for desktop WeChat  
  <sub>2 stars · C# · MIT · updated 2026-09-22</sub>
- **[455-dIAO/jev-codex-router-skill](https://github.com/455-dIAO/jev-codex-router-skill)** - Portable Codex Skill for Jev model and reasoning-effort routing, with safe installation and Chinese usage guides  
  <sub>2 stars · Python · updated 2026-09-22</sub>
- **[AkashPriyadarshii/jev-git](https://github.com/AkashPriyadarshii/jev-git)** - Sub-second Git pre-commit & pre-push semantic reflex gate powered by TypeSafe AI Jev  
  <sub>2 stars · Rust · MIT · updated 2026-09-21</sub>
- **[anasbekheit/typesafe-jev-mcp](https://github.com/anasbekheit/typesafe-jev-mcp)** - MCP server exposing TypeSafe's Jev model as a typed evaluate tool.  
  <sub>2 stars · Rust · MIT · updated 2026-09-20</sub>
- **[ansidium/jev-codex-bridge](https://github.com/ansidium/jev-codex-bridge)** - Model and reasoning routing for Codex Desktop and CLI, with a Windows service and validated updates  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[antstanley/decide](https://github.com/antstanley/decide)** - No description provided.  
  <sub>2 stars · Rust · MIT · updated 2026-09-20</sub>
- **[BeLazy167/typesafe-mod](https://github.com/BeLazy167/typesafe-mod)** - Claude Code mod that routes decisions to TypeSafe's Jev model: ranks installed skills per prompt, and answers the agent's own this-or-that questions when confident.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[bojansandhaus/jev-decisions](https://github.com/bojansandhaus/jev-decisions)** - Jev Decisions Plugin for Hermes (and other AI Agents): tool risk reviews, human approval recommendations, evidence checks, and a local decision journal.  
  <sub>2 stars · Python · MIT · updated 2026-09-20</sub>
- **[Charlyhno-eng/jev-codex-pilot](https://github.com/Charlyhno-eng/jev-codex-pilot)** - A Codex overlay incorporating JEV to make the best decisions regarding model selection and depth of reasoning. All while automating the process via an automated Kanban system.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[da-vinci-noob/pi-jev-model-router](https://github.com/da-vinci-noob/pi-jev-model-router)** - Route pi prompts to task-appropriate model tiers with TypeSafe Jev typed judgments. Budget-aware, with automatic fallback.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[ddfeyes/jev-mode](https://github.com/ddfeyes/jev-mode)** - I kept watching coding agents burn context on decisions that aren't hard - triage 400 tickets, tag 600 files, route to one of six teams. jev-mode moves those verdicts to a typed-judgment model. I A/B'd it: 78% fewer tokens, 16x less work-attributable input, accuracy 96.1% vs 93.7%. Python, no deps, MIT.  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[fajarhide/askgrep](https://github.com/fajarhide/askgrep)** - grep for the questions you cannot write as a pattern. Reads every function instead of sampling a few. Powered by Jev, TypeSafe AI's System One model.  
  <sub>2 stars · Rust · Apache-2.0 · updated 2026-09-22</sub>
- **[freepik-company/jev-mcp](https://github.com/freepik-company/jev-mcp)** - MCP server for typed decisions with Jev / System One via OpenRouter or TypeSafe  
  <sub>2 stars · Go · Apache-2.0 · updated 2026-09-21</sub>
- **[harrymunro/decision-first](https://github.com/harrymunro/decision-first)** - Agent skill that spots bounded-judgment steps, tries a typed decision model (TypeSafe's Jev) first, and documents every attempt  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[ibrahemid/jevprune](https://github.com/ibrahemid/jevprune)** - Filter command output for coding agents using a task description.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[jamescazzetta/five-lines](https://github.com/jamescazzetta/five-lines)** - Use Jev to review a PR diff against the ten rules of Five Lines of Code  
  <sub>2 stars · Rust · MIT · updated 2026-09-20</sub>
- **[jcpsimmons/jev-model-router-demo](https://github.com/jcpsimmons/jev-model-router-demo)** - Throwaway Jev demo: route coding tasks to Grok Build or Codex Astra  
  <sub>2 stars · JavaScript · updated 2026-09-17</sub>
- **[jexp/watfile](https://github.com/jexp/watfile)** - Text/PDF - File categorization and sorting with Typesafe AI Jev or local calibrated decision model  
  <sub>2 stars · Python · updated 2026-09-21</sub>
- **[jonymusky/jev-browser-qa](https://github.com/jonymusky/jev-browser-qa)** - Browser QA where Playwright drives and films, and TypeSafe Jev judges. JSON-flow CLI for agents, run dashboard, agent skill.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Kadihx/jev-x-kit](https://github.com/Kadihx/jev-x-kit)** - Offline $0 decision layer for coding agents: Choice/Score/Noul primitives, BELKI confidence gatekeeper, ultra-planning, red-teaming, research and RLVR self-improvement -- as an MCP server + CLI + Claude Code skill.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[KantaHayashiAI/jev-does-not-play-dice](https://github.com/KantaHayashiAI/jev-does-not-play-dice)** - Experiments on Jev’s probability calibration, uncertainty reporting, and forecast probability preservation.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[KiritoKing/midscene-jev-runner](https://github.com/KiritoKing/midscene-jev-runner)** - Community-maintained JEV runner integration for Midscene Test  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[lomeshdutta/skill-router](https://github.com/lomeshdutta/skill-router)** - Tell Claude Code which installed skill a session needs, using Jev (TypeSafe AI) for the decision and skills.sh for discovery.  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[Mawfyy/jev-router.nvim](https://github.com/Mawfyy/jev-router.nvim)** - An intent router for Neovim that classifies AI commands with Jev (TypeSafe's System One model) via the OpenRouter Decisions API, then routes execution to the matching handler.  
  <sub>2 stars · Lua · updated 2026-09-20</sub>
- **[Mrlyk/jev-browser](https://github.com/Mrlyk/jev-browser)** - Browser automation CLI for AI agents, powered by the Jev model's millisecond decisions and near-zero inference costs  
  <sub>2 stars · Rust · Apache-2.0 · updated 2026-09-21</sub>
- **[nexibeo/jev-browser-control](https://github.com/nexibeo/jev-browser-control)** - Let Claude code, chatgpt codex or control your own Chrome. Chrome extension + MCP server: Jev, TypeSafe's decision model, picks each click in ~0.5 s for a fraction of a cent. MIT, bring your own OpenRouter key.  
  <sub>2 stars · JavaScript · updated 2026-09-22</sub>
- **[nourhelmi/pi-jev-compaction](https://github.com/nourhelmi/pi-jev-compaction)** - Automatic Jev context clearing for Pi. Keep the conversation, prune stale tool output, retrieve originals without rerunning commands.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[obetomuniz/auto-jev-codex-for-paseo](https://github.com/obetomuniz/auto-jev-codex-for-paseo)** - A Paseo provider that uses TypeSafe Jev to route each Codex turn.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[obetomuniz/auto-mode-for-paseo](https://github.com/obetomuniz/auto-mode-for-paseo)** - A Paseo provider that uses TypeSafe Jev to route each Codex turn.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[religa/jfind](https://github.com/religa/jfind)** - Find files by describing them in plain English: find(1) with a semantic --like predicate, answered by TypeSafe.ai's jev model  
  <sub>2 stars · Python · MIT · updated 2026-09-21</sub>
- **[revsmoke/promptrejectormcp](https://github.com/revsmoke/promptrejectormcp)** - Open-source MCP and HTTPS screening for prompts, skills, and tool descriptions using TypeSafe AI Jev, deterministic checks, and configurable reasoning.  
  <sub>2 stars · TypeScript · ISC · updated 2026-09-21</sub>
- **[Songokou1983/jev-mcp](https://github.com/Songokou1983/jev-mcp)** - Local MCP server exposing TypeSafe Jev (System One decision model) as native Claude Code / Codex tools  
  <sub>2 stars · Python · updated 2026-09-22</sub>
- **[stilesja/jev-ivr](https://github.com/stilesja/jev-ivr)** - Building an IVR using Jev as classifier.  
  <sub>2 stars · TypeScript · updated 2026-09-22</sub>
- **[Wang-auspicious/codex-jev-compaction](https://github.com/Wang-auspicious/codex-jev-compaction)** - Jev-powered context curation for Codex. Build compact, traceable handoff context through native plugins and skills.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[wangkuangkuang/jev-mcp-server](https://github.com/wangkuangkuang/jev-mcp-server)** - MCP server for Jev (TypeSafe System One): the three official question types — choice, score, noul — plus batch classify. Calibrated probabilities, ~0.5s, <$0.001/call.  
  <sub>2 stars · Python · MIT · updated 2026-09-22</sub>
- **[Waxmell114514/jev-compaction](https://github.com/Waxmell114514/jev-compaction)** - A context compactor that can only score, never write — so an agent's memory can't hold a fact the transcript never contained. Working demo, runs offline.  
  <sub>2 stars · Python · MIT · updated 2026-09-22</sub>
- **[zdenham/jev-lint](https://github.com/zdenham/jev-lint)** - Lint JavaScript and TypeScript against plain-English project conventions with Jev.  
  <sub>2 stars · TypeScript · updated 2026-09-20</sub>

<sub>168 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Examples and templates

- **[jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader)** - One AI trade decision every Monad block. Jev on Kuru MON-USDC.  
  <sub>1962 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev)** - A nano replica of Jev: parallel decisions, dynamic candidates, and an end-to-end training pipeline.  
  <sub>1931 stars · Python · MIT · updated 2026-09-21</sub>
- **[devagrawal09/jev-review](https://github.com/devagrawal09/jev-review)** - A staged code-review workflow and local dashboard built with TypeSafe Jev.  
  <sub>527 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[featherless-ai/simple-jev](https://github.com/featherless-ai/simple-jev)** - Turn any open model into a classifier/jev endpoint  
  <sub>471 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[kerpopule/hermes-jev-skills](https://github.com/kerpopule/hermes-jev-skills)** - Jev-powered model routing, memory, compaction, skill selection, computer and browser use for Hermes agents (also Claude Code and Codex)  
  <sub>420 stars · Python · MIT · updated 2026-09-22</sub>
- **[ielab/llm-rankers](https://github.com/ielab/llm-rankers)** - Document Ranking with Large Language Models.  
  <sub>212 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[standardagents/jevpilot](https://github.com/standardagents/jevpilot)** - A playable Three.js driving simulator with Jev-powered autopilot  
  <sub>166 stars · JavaScript · updated 2026-09-17</sub>
- **[Yinsongxu/LLM2Jev](https://github.com/Yinsongxu/LLM2Jev)** - Adapt local language models into Jev-compatible structured decision engines with Choice, Score, and Noul outputs   powered by prefill-only binary inference.  
  <sub>132 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[mrnugget/jev-shell-history](https://github.com/mrnugget/jev-shell-history)** - Fish-style zsh history autosuggestions ranked by Jev (TypeSafe)  
  <sub>100 stars · TypeScript · updated 2026-09-18</sub>
- **[sdras/jev-webmcp-extension](https://github.com/sdras/jev-webmcp-extension)** - No description provided.  
  <sub>94 stars · JavaScript · Apache-2.0 · updated 2026-09-20</sub>
- **[NanmiCoder/jev-arena](https://github.com/NanmiCoder/jev-arena)** - Jev 模型介绍与实测：通过 Choice / Score / Noul 将自然语言转为带类型的判断与概率，用于分类、评分和路由；支持与 DeepSeek 等模型对比评论打标、速度与结果，含 CSV/Excel 导入、原速回放与离线报告。  
  <sub>88 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[savka777/jev-use](https://github.com/savka777/jev-use)** - Say it, and your Mac does it. A computer-use harness on Jev that reads the screen through Accessibility. Fast, no vision model  
  <sub>87 stars · Swift · MIT · updated 2026-09-21</sub>
- **[SiliconLabAI/OpenJev](https://github.com/SiliconLabAI/OpenJev)** - OpenSource Jev  
  <sub>78 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[kevinbadi/jev-voice](https://github.com/kevinbadi/jev-voice)** - Talk to your Mac. Local whisper.cpp + one Jev (TypeSafe) call per command + macOS automation.  
  <sub>72 stars · Python · MIT · updated 2026-09-22</sub>
- **[nbt4/rentalcore](https://github.com/nbt4/rentalcore)** - RentalCore — Full event rental management: jobs, devices, OCR invoice processing, M365 sync, DIN-5008 invoicing. Go + React.  
  <sub>70 stars · HTML · updated 2026-09-21</sub>
- **[virajbhartiya/laya-vs-jev](https://github.com/virajbhartiya/laya-vs-jev)** - Laya vs Jev: local MLX and hosted AI decisions playing T-Rex side by side, with live metrics and replay recording  
  <sub>67 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[ellipsis-dev/blink](https://github.com/ellipsis-dev/blink)** - Codebase search powered by Jev from @typesafe-ai  
  <sub>57 stars · TypeScript · updated 2026-09-16</sub>
- **[Dimweaker/jev-libero](https://github.com/Dimweaker/jev-libero)** - Fine-grained robot control with Jev, physics previews, and configurable LIBERO tasks.  
  <sub>54 stars · Python · MIT · updated 2026-09-21</sub>
- **[EliaAlberti/jev-rules](https://github.com/EliaAlberti/jev-rules)** - Jev picks which of your rules apply to each prompt, so Claude only sees the ones that matter.  
  <sub>48 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[skeptrunedev/jev-recruiter](https://github.com/skeptrunedev/jev-recruiter)** - A Jev powered LinkedIn recruiting agent. Watch it browse relevant profiles, save links, and review evidence against your hiring brief.  
  <sub>45 stars · Python · MIT · updated 2026-09-19</sub>
- **[zhengxuyu/litjev](https://github.com/zhengxuyu/litjev)** - Turn any off-the-shelf LLM into a Jev -like decision layer  
  <sub>39 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[choxos/jev-reviewer](https://github.com/choxos/jev-reviewer)** - Data extraction for systematic reviews, quoted from the papers. Ask a trial report and its supplements your extraction form or a RoB 2, ROBINS-I, QUADAS-2 or TIDieR template; Jev points at the lines, every answer is a verbatim quote with its page, you check it and export the table. Files stay in your browser.  
  <sub>32 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[samdotmak/jev-recall](https://github.com/samdotmak/jev-recall)** - Retrieve by relevance, not resemblance: filter an AI assistant's memories with TypeSafe's Jev  
  <sub>31 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[frankda/jev-poly-crypto-demo](https://github.com/frankda/jev-poly-crypto-demo)** - No description provided.  
  <sub>28 stars · TypeScript · updated 2026-09-22</sub>
- **[colliber/duckdb-jev](https://github.com/colliber/duckdb-jev)** - DuckDB extension: typed Jev answers as real SQL types  
  <sub>22 stars · C++ · MIT · updated 2026-09-18</sub>
- **[OmniJev/PlayJev](https://github.com/OmniJev/PlayJev)** - 🚀🚀 A 0.8B JEV-like multimodal model playing GUI games directly from raw pixels.  
  <sub>22 stars · JavaScript · Apache-2.0 · updated 2026-09-21</sub>
- **[altryne/jevify](https://github.com/altryne/jevify)** - An agent skill to discover TypeSafe Jev opportunities, design typed questions, and learn from recent community experiments.  
  <sub>21 stars · Python · MIT · updated 2026-09-21</sub>
- **[TypeSafeAI/typesafe-playground](https://github.com/TypeSafeAI/typesafe-playground)** - Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.  
  <sub>19 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[chy4pro/jev-for-chrome](https://github.com/chy4pro/jev-for-chrome)** - Jev for Chrome: drives the tab you are looking at with TypeSafe Jev, a sub-second decision model. Community port of browser-use/jev-ultrafast, not affiliated with TypeSafe.  
  <sub>18 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[imohitmayank/jevfill](https://github.com/imohitmayank/jevfill)** - No description provided.  
  <sub>17 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[valentynkit/jev-belay](https://github.com/valentynkit/jev-belay)** - Claude Code Stop hook that blocks an unverified done: reads the transcript for evidence, asks Jev once, fails open on everything else  
  <sub>17 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[khordoo/jev-reflex-autonomy-lab](https://github.com/khordoo/jev-reflex-autonomy-lab)** - Multi-drone autonomy lab demonstrating TypeSafe Jev reflex decisions with optional System 2 strategy guidance.  
  <sub>16 stars · TypeScript · updated 2026-09-21</sub>
- **[kyu1204/jgrep](https://github.com/kyu1204/jgrep)** - grep for what code does, not what it's called. Semantic code search powered by TypeSafe Jev.  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[parth-kp/jev-mail-classifier](https://github.com/parth-kp/jev-mail-classifier)** - Classify your inbox with Jev (TypeSafe's System One model) — tag, move, flag, and notify, all config-driven.  
  <sub>14 stars · Python · MIT · updated 2026-09-20</sub>
- **[BorisLeMeec/jev](https://github.com/BorisLeMeec/jev)** - A claude code plugin for jev  
  <sub>13 stars · Go · MIT · updated 2026-09-18</sub>
- **[BoundaryML/feelings](https://github.com/BoundaryML/feelings)** - .feels() on anything — the AI if statement as a real, typed method. Jev + BAML.  
  <sub>13 stars · BAML · updated 2026-09-19</sub>
- **[Bewinxed/jevgpt](https://github.com/Bewinxed/jevgpt)** - A chatbot built on a model that cannot generate text (TypeSafe AI's Jev, driven autoregressively)  
  <sub>12 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[sosopop/jev_stock](https://github.com/sosopop/jev_stock)** - An experimental JEV-powered framework for forecasting short-term stock price direction from structured market data.  
  <sub>12 stars · Python · updated 2026-09-17</sub>
- **[hotchpotch/jev-reranker](https://github.com/hotchpotch/jev-reranker)** - Jev-powered relevance filtering and reranking for RAG in Python.  
  <sub>11 stars · Python · MIT · updated 2026-09-21</sub>
- **[doeixd/discern](https://github.com/doeixd/discern)** - Craft Type-Safe Uncertainty-aware semantic pattern matching, control flow, and smart procedures for Effect DecisionModel and Jev  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[ethanplusai/jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch)** - Filter any live Twitch chat with Jev: a bring-your-own-key Chrome extension  
  <sub>10 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[valentynkit/jev-commit](https://github.com/valentynkit/jev-commit)** - pre-commit hook: one Jev call judges whether your commit message matches the diff, plus debug leftovers, scope creep, and a secret belt  
  <sub>10 stars · Python · MIT · updated 2026-09-19</sub>
- **[virolea/lintus](https://github.com/virolea/lintus)** - A linter whose rules are written in plain language.  
  <sub>10 stars · Ruby · MIT · updated 2026-09-21</sub>
- **[Kevthetech143/super-jev](https://github.com/Kevthetech143/super-jev)** - A small, extensible decision-to-action harness for TypeSafe Jev  
  <sub>9 stars · Python · MIT · updated 2026-09-21</sub>
- **[Nancy-Chauhan/hearth-jev-rental-search](https://github.com/Nancy-Chauhan/hearth-jev-rental-search)** - Autonomous multi-source rental search powered by TypeSafe Jev  
  <sub>9 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[comoc/jev-minesweeper](https://github.com/comoc/jev-minesweeper)** - TypeSafe Jev (System One) にブラウザ上のマインスイーパーを解かせるデモ  
  <sub>8 stars · JavaScript · updated 2026-09-20</sub>
- **[ranjan2829/AskJev](https://github.com/ranjan2829/AskJev)** - AskJev — Jev autopilot for any website + guard on irreversible clicks (TypeSafe System One, not Claude)  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[siliconkernel/vllm-jev-decison](https://github.com/siliconkernel/vllm-jev-decison)** - Classification-only typed decisions for vLLM: finite-schema candidate scoring, probabilities, and abstention. No generative fallback.  
  <sub>8 stars · Python · MIT · updated 2026-09-18</sub>
- **[teknium1/hermes-and-jev-play-minecraft](https://github.com/teknium1/hermes-and-jev-play-minecraft)** - Hermes Agent plans, Jev (TypeSafe) picks bounded actions, Mineflayer executes: Minecraft with no screenshots or keypresses from a model. Includes the reproduction of rmalde/minecraft-agent's Ender Dragon run.  
  <sub>8 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[zaidmukaddam/cascade-search](https://github.com/zaidmukaddam/cascade-search)** - A 27K-parameter in-browser query parser that knows when it doesn't know.  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[backmeupplz/jev_antispam_bot](https://github.com/backmeupplz/jev_antispam_bot)** - Minimal grammY Telegram anti-spam bot powered by TypeSafe Jev  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[caijinchun/nanojev-arena](https://github.com/caijinchun/nanojev-arena)** - NanoJev Snake Arena: 1v4 human-vs-AI battleship + 100-agent swarm simulator. Local demo of Jev System-One model (open-source mini replica).  
  <sub>7 stars · HTML · MIT · updated 2026-09-19</sub>
- **[GiesN/typesafe-jev-workflow](https://github.com/GiesN/typesafe-jev-workflow)** - No description provided.  
  <sub>7 stars · Python · updated 2026-09-16</sub>
- **[goodrahstar/pdf-race](https://github.com/goodrahstar/pdf-race)** - Docling → Jev vs Docling → Gemini 3.8 Flash vs Gemini reading the PDF: same documents, one clock, scored against arXiv's own metadata  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[inanna-malick/jev-dsl](https://github.com/inanna-malick/jev-dsl)** - Agent-first Haskell DSL for TypeSafe's Jev judgment model: typed packets, inferred types, answers under the same labels  
  <sub>7 stars · Haskell · MIT · updated 2026-09-18</sub>
- **[limboinf/semantic-live-caption](https://github.com/limboinf/semantic-live-caption)** - 听写纸 · Real-time speech captions with live semantic annotation (key points / emotion / intent) — Confucius4-R2T2 + TypeSafe Jev + DeepSeek  
  <sub>7 stars · HTML · MIT · updated 2026-09-20</sub>
- **[jaibhasin/jev-yt-time-saver](https://github.com/jaibhasin/jev-yt-time-saver)** - A Chrome extension that covers distracting YouTube videos with Jev. Show anyway whenever you want.  
  <sub>6 stars · JavaScript · updated 2026-09-20</sub>
- **[kzkhykw/jev-auto-ime](https://github.com/kzkhykw/jev-auto-ime)** - 打っている言葉が日本語か英語かをJevに聞いて、Macの入力モードを切り替える道具。個人利用のみ。  
  <sub>6 stars · Python · updated 2026-09-22</sub>
- **[AgriciDaniel/jev-seo](https://github.com/AgriciDaniel/jev-seo)** - Live SEO audit for any website from one homepage URL, judged by Jev. PDF, XLSX and Markdown reports.  
  <sub>5 stars · Python · MIT · updated 2026-09-22</sub>
- **[anxkhn/JevPlaysPokemon](https://github.com/anxkhn/JevPlaysPokemon)** - Jev plays Generation 3 Pokémon via Showdown and a real FireRed ROM.  
  <sub>5 stars · HTML · GPL-3.0 · updated 2026-09-18</sub>
- **[buluoray/JevOnly](https://github.com/buluoray/JevOnly)** - Pure Jev that can "type" and drive towards task completion.  
  <sub>5 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[dani1005/book-aurora](https://github.com/dani1005/book-aurora)** - Jev reads a whole novel in seconds. Every passage becomes a row of colour.  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[danvega/hello-jev-java](https://github.com/danvega/hello-jev-java)** - No description provided.  
  <sub>5 stars · Java · updated 2026-09-18</sub>
- **[eijiaraki/toxic-filter](https://github.com/eijiaraki/toxic-filter)** - Xの投稿をJevで分類し、選んだ表現を目隠しするChrome拡張機能 / A Chrome extension to filter unwanted expressions on X with Jev  
  <sub>5 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[Mawfyy/jevflow](https://github.com/Mawfyy/jevflow)** - Probabilistic AI decisions as composable backend primitives — typed judgments (noul/score/choice), deterministic thresholds, and explainable workflows. Powered by TypeSafe's Jev, provider-agnostic.  
  <sub>5 stars · TypeScript · updated 2026-09-20</sub>
- **[Reindeer-AI/pi-jev-guard](https://github.com/Reindeer-AI/pi-jev-guard)** - Check Pi code edits against repository Markdown rules with TypeSafe Jev  
  <sub>5 stars · TypeScript · updated 2026-09-19</sub>
- **[mkotlikov/jev-grug](https://github.com/mkotlikov/jev-grug)** - Helping JEV speak <3  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[mountainMath/JevR](https://github.com/mountainMath/JevR)** - R client for the TypeSafe Jev System One API  
  <sub>4 stars · R · updated 2026-09-20</sub>
- **[nssmd/jev-bot](https://github.com/nssmd/jev-bot)** - Self-hosted Jev decision workbench and Feishu bot: automatic choices, probabilities, and experimental word/character writing.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[ShuhanSun/jev-oas-sentinel](https://github.com/ShuhanSun/jev-oas-sentinel)** - Catch breaking API behavior hidden in OpenAPI prose with deterministic checks and TypeSafe JEV System One semantic review.  
  <sub>4 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[vinilana/jev-browser](https://github.com/vinilana/jev-browser)** - No description provided.  
  <sub>4 stars · TypeScript · updated 2026-09-17</sub>
- **[ZephyrDeng/ego-jev](https://github.com/ZephyrDeng/ego-jev)** - Jev (TypeSafe System One) inner loop for ego-browser — one ~0.4s typed decision per DOM step instead of an LLM turn. Agent skill for ego lite.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[Foadsf/jev-for-engineers](https://github.com/Foadsf/jev-for-engineers)** - Eight minimal working examples of TypeSafe's Jev (a System One model) applied to mechanical and electrical engineering: CAD/CAE/CAM routing, FEM result triage, DFM screening, BOM alignment, hallucination-proof extraction. Zero dependencies.  
  <sub>3 stars · Python · MIT · updated 2026-09-16</sub>
- **[gaborishka/jev-canvas](https://github.com/gaborishka/jev-canvas)** - Draw on a tldraw canvas with your voice and a pointing finger. Jev (TypeSafe System One) decides action, target and place in ~350 ms per spoken word.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[kitze/pagegrade](https://github.com/kitze/pagegrade)** - Grade page sections for clarity, writing and on-page SEO. WXT + TypeSafe AI Jev.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[MartinSWDev/gen-ui](https://github.com/MartinSWDev/gen-ui)** - No description provided.  
  <sub>3 stars · TypeScript · updated 2026-09-17</sub>
- **[nickthompson480/typesafe-ai-playground](https://github.com/nickthompson480/typesafe-ai-playground)** - Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-16</sub>
- **[smithclay/dbt_jev](https://github.com/smithclay/dbt_jev)** - use jev in dbt  
  <sub>3 stars · Python · MIT · updated 2026-09-22</sub>
- **[valentynkit/jev.nvim](https://github.com/valentynkit/jev.nvim)** - Neovim: ask the buffer a question, get a quickfix list. Treesitter splits functions, Jev scores each one, probabilities land as virtual text  
  <sub>3 stars · Lua · MIT · updated 2026-09-19</sub>
- **[vishxrad/clashroyale-jev](https://github.com/vishxrad/clashroyale-jev)** - Jev plays Clash Royale with Qwen battlefield vision, local OpenCV HUD recognition, and a live decision dashboard.  
  <sub>3 stars · Python · updated 2026-09-22</sub>
- **[xuebai2812/jev-travel-packing](https://github.com/xuebai2812/jev-travel-packing)** - Jev-powered travel packing with emoji physics, backend APIs, tests, and deployment source  
  <sub>3 stars · JavaScript · updated 2026-09-22</sub>
- **[zaferayan/jev-example](https://github.com/zaferayan/jev-example)** - No description provided.  
  <sub>3 stars · TypeScript · updated 2026-09-18</sub>
- **[1104480426-hash/jev-wingman](https://github.com/1104480426-hash/jev-wingman)** - 基于 Jev 的聊天决策辅助，不挑 App（QQ / 微信 / 飞书皆可）· An on-device chat co-pilot that returns typed verdicts instead of prose, built on Jev  
  <sub>2 stars · Java · MIT · updated 2026-09-22</sub>
- **[awoaCrim/pi-smart-subagents](https://github.com/awoaCrim/pi-smart-subagents)** - Pi subagents with Jev model and tool routing, worktree isolation, and background task management.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[Devonance/rover-claude-jev-demo](https://github.com/Devonance/rover-claude-jev-demo)** - Just a weekend project with Claude as system two, and Jev as system One.  
  <sub>2 stars · JavaScript · updated 2026-09-21</sub>
- **[dfinke/jev-experiments](https://github.com/dfinke/jev-experiments)** - AI as a PowerShell decision primitive: describe what you need, let Jev rank the right file.  
  <sub>2 stars · PowerShell · updated 2026-09-21</sub>
- **[erhanmeydan/jev2048](https://github.com/erhanmeydan/jev2048)** - TypeSafe'in Jev karar modeli gerçek bir online 2048 sitesinde oynuyor — hamle başına tek API çağrısı, tek anahtar.  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[EthanAlgoX/jev-trading](https://github.com/EthanAlgoX/jev-trading)** - No description provided.  
  <sub>2 stars · TypeScript · updated 2026-09-20</sub>
- **[fbettag/elixir-jev](https://github.com/fbettag/elixir-jev)** - Typed semantic judgments and pattern matching for TypeSafe Jev and local Laya in Elixir  
  <sub>2 stars · Elixir · MIT · updated 2026-09-20</sub>
- **[guilhem/jev-ci-selector](https://github.com/guilhem/jev-ci-selector)** - Conservative CI task selection for GitHub Actions with Jev, a pure policy engine, and shadow mode by default.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[hamidfarmani/jev-resume-match](https://github.com/hamidfarmani/jev-resume-match)** - Score how well a resume matches a job description using Jev (TypeSafe AI). Next.js app that returns typed, explainable match scores instead of generated text.  
  <sub>2 stars · TypeScript · updated 2026-09-20</sub>
- **[hosseintoussi/jev-flappy-bird](https://github.com/hosseintoussi/jev-flappy-bird)** - A live demo of TypeSafe's Jev model playing Flappy Bird, one flap-or-wait decision at a time.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[HusDev/LinguaTrace](https://github.com/HusDev/LinguaTrace)** - The lesson notebook that writes itself. A live tutoring lesson becomes structured notes and a personalised Lesson Pack: Jev judges every turn, Gemini Live transcribes each speaker, and the tutor stays a person.  
  <sub>2 stars · TypeScript · updated 2026-09-20</sub>
- **[IAnMove/jev-game-agent](https://github.com/IAnMove/jev-game-agent)** - Experimental Jev game agent: RAM, emulator lookahead, checkpoint search and verified recordings. Bring your own ROM and BizHawk.  
  <sub>2 stars · Python · updated 2026-09-18</sub>
- **[ItBayMax/typesafe-ai-jev-example](https://github.com/ItBayMax/typesafe-ai-jev-example)** - Hands-on demos for TypeSafe's Jev (System One) model: six runnable examples and four field notes. Runs offline with no API key; samples/ holds real measured output from jev-1.13.0.  
  <sub>2 stars · Python · MIT · updated 2026-09-21</sub>
- **[juanlentino/jev-connector](https://github.com/juanlentino/jev-connector)** - WordPress connector for the TypeSafe System One API (Jev): typed questions, confidence-scored answers, core Connectors API key management  
  <sub>2 stars · PHP · GPL-2.0 · updated 2026-09-20</sub>
- **[nabendu82/jev-reflex](https://github.com/nabendu82/jev-reflex)** - Multimodal Mac controller using Hand gestures and voice  
  <sub>2 stars · Python · updated 2026-09-20</sub>
- **[pulkitxm/jev-chess-agent](https://github.com/pulkitxm/jev-chess-agent)** - A chess bot opponent player with typed move selection and browser controls  
  <sub>2 stars · JavaScript · updated 2026-09-20</sub>
- **[raihankhan-rk/jevarena](https://github.com/raihankhan-rk/jevarena)** - JevArena — two Jev agents duel in click-only browser games (Browser Use + TypeSafe Jev)  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[rchandnaWUSTL/auto-guard](https://github.com/rchandnaWUSTL/auto-guard)** - No description provided.  
  <sub>2 stars · Python · MIT · updated 2026-09-20</sub>
- **[rohit9mehta/dwim](https://github.com/rohit9mehta/dwim)** - Do what I mean: type what you want in plain words and it runs the right menu item in any Mac app. Powered by Jev (bring your own key).  
  <sub>2 stars · Swift · MIT · updated 2026-09-21</sub>
- **[selcukusta/jev-mailroom](https://github.com/selcukusta/jev-mailroom)** - Email triage PoC: reads a mailbox over IMAP and classifies each message by what it is and what it's about, using TypeSafe System One (Jev) — 11 questions in a single call, decided in Python.  
  <sub>2 stars · Python · MIT · updated 2026-09-20</sub>
- **[SharmaTushar1/jev-search](https://github.com/SharmaTushar1/jev-search)** - search words with similar meaning on a web page  
  <sub>2 stars · JavaScript · updated 2026-09-20</sub>
- **[sriganesh/jevibe-check](https://github.com/sriganesh/jevibe-check)** - A live tone labeler for Bluesky posts and drafts, using TypeSafe's Jev API.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[tanayvasishtha/Slither-Me-Jev](https://github.com/tanayvasishtha/Slither-Me-Jev)** - 8 AI snakes, 1 human, 1 arena. Every snake is driven live by TypeSafe's Jev, making all decisions in real time  
  <sub>2 stars · JavaScript · updated 2026-09-20</sub>
- **[web3w/jev-trader](https://github.com/web3w/jev-trader)** - Multilingual Jev trading dashboard with real-time Kuru and Hyperliquid market data, simulated trading, and model decision guides. Live website: https://jev-trader.com  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[xinwang-nwpu/jev-mobile](https://github.com/xinwang-nwpu/jev-mobile)** - One TypeSafe Jev decision per step over the A11Y tree, executed via ADB. No screenshots and ultra fast!  
  <sub>2 stars · Python · MIT · updated 2026-09-21</sub>
- **[yoanbernabeu/demo-symfony-typesafe](https://github.com/yoanbernabeu/demo-symfony-typesafe)** - Démo : trier des demandes de support avec Jev (TypeSafe) et Symfony AI. Messenger, Live Components, Turbo, kit shadcn de UX Toolkit.  
  <sub>2 stars · PHP · MIT · updated 2026-09-19</sub>
- **[AbsoluteGeist/code-geist](https://github.com/AbsoluteGeist/code-geist)** - An experimental local coding-agent workbench using Jev for model routing, with tool execution and verification in Git worktrees.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[akarsh-k/jev-form-filler-extension](https://github.com/akarsh-k/jev-form-filler-extension)** - Educational chrome extension built to experiment with jev for form field matching and autofill  
  <sub>1 stars · TypeScript · updated 2026-09-20</sub>
- **[Alexandre-Borghi/jev-ncr-demo](https://github.com/Alexandre-Borghi/jev-ncr-demo)** - AI defect code suggestions for Non-Conformance Reports, powered by TypeSafe AI's Jev model  
  <sub>1 stars · Rust · updated 2026-09-19</sub>
- **[andyhorn/jev](https://github.com/andyhorn/jev)** - No description provided.  
  <sub>1 stars · Dart · updated 2026-09-21</sub>
- **[Ashadeepa/typesafe-jev-model-use-cases](https://github.com/Ashadeepa/typesafe-jev-model-use-cases)** - Runnable demos of TypeSafe's System One model (Jev) — parallel Noul judgments and a Choice-based citation/claim checker  
  <sub>1 stars · Python · updated 2026-09-19</sub>
- **[charleeagni/JevPiano](https://github.com/charleeagni/JevPiano)** - @typesafeai 's Jev controls the 2 hands and each finger to play the piano in real-time.  Jev only "sees" what we see and plays this from the "note waterfall". It uses  @browser_use 's jev-ultrafast and some decision scheduling to make this happen in real-time.  Sound on 🔈🔉🔊  
  <sub>1 stars · JavaScript · updated 2026-09-18</sub>
- **[codaaiteam/jev-typesafe-ai](https://github.com/codaaiteam/jev-typesafe-ai)** - Unofficial developer notes & examples for Jev, TypeSafe AI's System One model. Try it free: jevtypesafeai.com  
  <sub>1 stars · updated 2026-09-19</sub>
- **[Cyvid7-Darus10/docfriction](https://github.com/Cyvid7-Darus10/docfriction)** - Automated friction logs for online documentation, scored section by section with TypeSafe Jev  
  <sub>1 stars · Python · MIT · updated 2026-09-20</sub>
- **[gaborishka/jev-wrapped](https://github.com/gaborishka/jev-wrapped)** - Telegram channel X-ray: Jev judges a year of posts, you get a card. One Cloudflare Worker.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[Hatuw/jev-chat-feishu](https://github.com/Hatuw/jev-chat-feishu)** - 飞书 Jev 回复助手：点一条消息，看懂对方、给出可直接复制的回复。发不发由你。  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[hazlema/jev-connect4](https://github.com/hazlema/jev-connect4)** - Connect 4, Jev vs. Human or Jev vs. Jev  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[HisuiKoh/jev-vtuber-ime-core](https://github.com/HisuiKoh/jev-vtuber-ime-core)** - 読み→VTuber表記を Web検索の根拠 + Jev で解決。辞書データなし。  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[Hldwsd/minesweeper-jev](https://github.com/Hldwsd/minesweeper-jev)** - Minesweeper where deterministic logic does the provable work and TypeSafe Jev is consulted only when the board forces a guess.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[igloomatics/jev-ai-detector](https://github.com/igloomatics/jev-ai-detector)** - fast & ultra-light AI detector chrome extension. use JEV for super-fast AIGC detection.  
  <sub>1 stars · JavaScript · updated 2026-09-21</sub>
- **[jaibhasin/jev-flappy-bird](https://github.com/jaibhasin/jev-flappy-bird)** - Jev learns to play flappy-bird game with physics based context and without it  
  <sub>1 stars · JavaScript · updated 2026-09-19</sub>
- **[Jason-Doyle/jev-parallel-dispatch](https://github.com/Jason-Doyle/jev-parallel-dispatch)** - Browser simulation for parallel Jev decisions with capacity-constrained assignment and retained evidence  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[khaledsAlshibani/jev-ci-classifier](https://github.com/khaledsAlshibani/jev-ci-classifier)** - CI example using Jev to classify failed PR checks and return structured decisions with probabilities.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[kxzk/typesafe-jev-drone-demo](https://github.com/kxzk/typesafe-jev-drone-demo)** - Three.js drone simulator with a Python backend and live TypeSafe Jev navigation  
  <sub>1 stars · Python · updated 2026-09-17</sub>
- **[kylemclaren/jevsearch](https://github.com/kylemclaren/jevsearch)** - Site search that understands the question. Ranked by TypeSafe's Jev model.  
  <sub>1 stars · TypeScript · updated 2026-09-21</sub>
- **[Little-Planet-Labs/jev-playground](https://github.com/Little-Planet-Labs/jev-playground)** - A small Next.js app for experimenting with TypeSafe AI's Jev model (System One)  
  <sub>1 stars · TypeScript · updated 2026-09-17</sub>
- **[matthewman/jev-snake](https://github.com/matthewman/jev-snake)** - Jev plays Snake, with recorded games, replay, and experiments.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[nikhil1raghav/jev-playground](https://github.com/nikhil1raghav/jev-playground)** - Toy projects testing Jev (TypeSafe System One): snake autopilot, Todoist sorter, HN re-ranker, Dangerous Dave autopilot  
  <sub>1 stars · C · updated 2026-09-22</sub>
- **[osrim/readwise-jev-classifier](https://github.com/osrim/readwise-jev-classifier)** - Proof of concept: auto-tagging and triage of Readwise Reader articles using TypeSafe AI's Jev  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[osuki-dev/opencode-osuki-agent](https://github.com/osuki-dev/opencode-osuki-agent)** - Effect-native OpenCode coordinator with Jev routing and persistent goals  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[Patrick-SCH03/jev-issue-radar](https://github.com/Patrick-SCH03/jev-issue-radar)** - GitHub issue triage with side-by-side evidence. Try the public sample without setup, or run the local app with TypeSafe Jev via OpenRouter.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[q93304989-bit/jev-lab](https://github.com/q93304989-bit/jev-lab)** - 最简 Jev 调用演示器：单页分类器，把请求 JSON、概率分布、confidence、耗时与 token 都摊开给你看  
  <sub>1 stars · HTML · MIT · updated 2026-09-20</sub>
- **[RubyBrewsday/jevcumber](https://github.com/RubyBrewsday/jevcumber)** - Write Cucumber tests with just the .feature file. No step definitions — Jev (TypeSafe AI) resolves each Gherkin step and Playwright runs it.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[silky-x0/Postmark](https://github.com/silky-x0/Postmark)** - A working Demo that acts as classifier to classify linkedin post which inside uses jev by Typesafe.ai  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[sliday/jev-chess-algo](https://github.com/sliday/jev-chess-algo)** - How jevchess.com asks JEV for a chess move: every legal move as the options of one typed Choice question, plus the hanging-piece check that describes them.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[suidouble/let-jev-speak](https://github.com/suidouble/let-jev-speak)** - Experiment to trick Typesafe’s Jev, aka “the language model that won’t talk” into actually talking.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[taiki510/JevPaste](https://github.com/taiki510/JevPaste)** - Smart Paste with Jev  
  <sub>1 stars · Swift · MIT · updated 2026-09-22</sub>
- **[TomRichner/can-jev-bayes](https://github.com/TomRichner/can-jev-bayes)** - Can Jev Bayes? No. Testing TypeSafe AI's Jev model against Bayesian-optimal strategies.  
  <sub>1 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[tubone24/jev-practice-speed](https://github.com/tubone24/jev-practice-speed)** - A WebGL demo where you play the card game Speed against a CPU whose brain is TypeSafe AI's Jev. The whole point of the app is to measure and show Jev's decision speed and decision accuracy in real time.  
  <sub>1 stars · JavaScript · updated 2026-09-21</sub>
- **[wanghai673/jev-browser-skill](https://github.com/wanghai673/jev-browser-skill)** - ⚡ 快速浏览器 Skill：Jev 驱动，Codex 即用。连续执行、预置输入，一句话启动浏览器任务。  
  <sub>1 stars · Python · MIT · updated 2026-09-22</sub>
- **[wellkilo/codex-jev-preflight](https://github.com/wellkilo/codex-jev-preflight)** - Fail-open Codex UserPromptSubmit hook that injects TypeSafe Jev pre-task routing metadata.  
  <sub>1 stars · Python · MIT · updated 2026-09-22</sub>
- **[wotai-dev/typesafe-jev-tools](https://github.com/wotai-dev/typesafe-jev-tools)** - A Claude Code hook that asks whether the decision you are writing needs a model at all. Includes a measured 149-row comparison of TypeSafe Jev against Claude Haiku 4.5.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[wustep/jev-playground](https://github.com/wustep/jev-playground)** - Can a System One model steer music? Jev picks the plan (enums only); code renders sheet, audio and MIDI.  
  <sub>1 stars · TypeScript · updated 2026-09-22</sub>
- **[ZIJIAN004/jev-switchboard](https://github.com/ZIJIAN004/jev-switchboard)** - A JEV-gated semantic communication layer for parallel coding agents.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[zurfyx/jev-browser-skill](https://github.com/zurfyx/jev-browser-skill)** - Let Jev, TypeSafe's ~100ms decision model, drive your browser. A plug-and-play skill for Claude Code and Codex.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[zzsong1023/jev-market-reflex](https://github.com/zzsong1023/jev-market-reflex)** - Fast typed AI decisions on live crypto markets using TypeSafe AI Jev.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[zzz1YAO/DataJev](https://github.com/zzz1YAO/DataJev)** - ⚡ DataJev  LLM → Analyze Jev → Continue / Switch / Verify / Stop  System-1 control for System-2 data agents  
  <sub>1 stars · Python · MIT · updated 2026-09-21</sub>
- **[aarora79/jev-samples](https://github.com/aarora79/jev-samples)** - Runnable samples for Jev, TypeSafe AI's System One model. Send state and questions carrying their own answer options, then branch on the typed value that comes back.  
  <sub>0 stars · updated 2026-09-20</sub>

<sub>106 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Reading and explainers

- **[DataCamp - Jev: TypeSafe's System One model](https://www.datacamp.com/blog/system-one-models-jev)** - Longer explainer on the model class, the typed question format and where it fits.
- **[LangChain - Building a harness with Jev](https://www.langchain.com/blog/building-a-harness-with-jev)** - Walkthrough of wiring Jev into an agent harness, including the jev-as-a-judge experiment.
- **[TechCrunch - A new kind of AI model from a ChatGPT inventor](https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/)** - Launch coverage and context on TypeSafe AI's seed round and early adopters.
- **[The Register - TypeSafe AI debuts model for machines that plays Doom](https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711)** - Coverage of the launch demo, with a sceptical read on the performance claims.
- **[Rizzo-AI-Academy/rizzo-flow](https://github.com/Rizzo-AI-Academy/rizzo-flow)** - The open, local take on Jev: typed decisions from an LLM, without generating a single token  
  <sub>304 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[kshetrajna12/reflex](https://github.com/kshetrajna12/reflex)** - A small open decision model: state + typed questions -> calibrated probabilities. A Jev / System One re-creation on Qwen3.5.  
  <sub>114 stars · Python · MIT · updated 2026-09-21</sub>
- **[ponyo877/jev-telop-live](https://github.com/ponyo877/jev-telop-live)** - No description provided.  
  <sub>5 stars · JavaScript · updated 2026-09-19</sub>
- **[hgqimo/JevRanker](https://github.com/hgqimo/JevRanker)** - Jev-style decision models as BlitzRank's compare oracle: k passages scored in one parallel forward pass, zero decoded tokens — 22x faster per match than a generative listwise   LLM, at 2.9x its nDCG@10.  
  <sub>4 stars · Python · MIT · updated 2026-09-22</sub>
- **[chris-wozniczek/jev-voice-control](https://github.com/chris-wozniczek/jev-voice-control)** - Control your Mac by voice. Speech → Jev (TypeSafe AI System One model) typed decisions → macOS actions. Menu-bar Swift app.  
  <sub>3 stars · Swift · MIT · updated 2026-09-21</sub>
- **[cobusgreyling/Jev](https://github.com/cobusgreyling/Jev)** - Unofficial TypeSafe Jev showcase — System One decisions, not chat.  
  <sub>3 stars · Python · MIT · updated 2026-09-20</sub>
- **[almcc/slop-linter](https://github.com/almcc/slop-linter)** - Lints AI-generated code for slop using Jev, a System One model that makes fast structured decisions instead of generating text.  
  <sub>2 stars · Python · updated 2026-09-19</sub>
- **[glamboyosa/docket](https://github.com/glamboyosa/docket)** - A Go TUI that uses Jev to classify documents, assess sensitivity and urgency, and determine whether action is required.  
  <sub>2 stars · Go · updated 2026-09-20</sub>
- **[GPT-AGI/OpenJev](https://github.com/GPT-AGI/OpenJev)** - Jev-compatible System 开源Jev  
  <sub>2 stars · Python · MIT · updated 2026-09-20</sub>
- **[makefinks/jev-feed-filter](https://github.com/makefinks/jev-feed-filter)** - Smart, dynamic AI filtering for X and YouTube feeds using Jev  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[mrmt/elevator-three](https://github.com/mrmt/elevator-three)** - Jev に判断を任せる自動生成のエレクトロの楽器  
  <sub>1 stars · HTML · MIT · updated 2026-09-21</sub>
- **[willfish/pi-observational-memory-jev](https://github.com/willfish/pi-observational-memory-jev)** - Jev decides what to keep. Compaction never rewrites the transcript.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[7starsseeker/dsh-jev-guard](https://github.com/7starsseeker/dsh-jev-guard)** - DeepSeek Harness (DSH) 执行前安全阀门:bash/pwsh 真正执行前先经静态规则 + TypeSafe Jev 语义判定,破坏性操作按 允许/修正/拦截/上报人工 四态处置,含额度降级与审计日志。  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[imteche/localjev](https://github.com/imteche/localjev)** - Self-hosted System One decision engine (TypeSafe Jev's Choice/Score/Noul contract) running locally on LM Studio, with real probabilities from token logprobs.  
  <sub>0 stars · Python · MIT · updated 2026-09-22</sub>
- **[koki-develop/fizzbuzz-jev](https://github.com/koki-develop/fizzbuzz-jev)** - FizzBuzz powered by Jev, TypeSafe AI's System One model.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[lgraubner/jev-lang](https://github.com/lgraubner/jev-lang)** - A small web app that identifies the predominant language in a text sample via Jev from TypeSafe AI  
  <sub>0 stars · Python · updated 2026-09-20</sub>
- **[MayankBansal12/game-theory-with-jev](https://github.com/MayankBansal12/game-theory-with-jev)** - jev plays into the prisoner’s dilemma: 40 matches against 8 opponents  
  <sub>0 stars · TypeScript · updated 2026-09-18</sub>
- **[nishioka-shinji/jev-edgar](https://github.com/nishioka-shinji/jev-edgar)** - Does Jev, a System One model returning calibrated probabilities, say anything useful about an earnings release before the market prices it?  
  <sub>0 stars · Python · updated 2026-09-18</sub>
- **[TheWebDevel/jev-fanout](https://github.com/TheWebDevel/jev-fanout)** - Does asking Jev more questions in one call change its answers? 250 calls measuring TypeSafe's speculative fan-out pattern and whether Jev is deterministic.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>

### Everything else

- **[tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction)** - Claude Code plugin that replaces the compaction summary with Jev decisions: every tool call and result is scored in one fast request, stale ones are dropped or truncated, everything kept stays verbatim.  
  <sub>6183 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[Finderchangchang/jev-chat-JARVIS](https://github.com/Finderchangchang/jev-chat-JARVIS)** - 装在手机上的对话副驾：在微信 / QQ / X / 飞书里读懂对方、给出候选回复、一键填入输入框，发不发由你。非侵入，只读屏幕，不 hook 不改包。  
  <sub>2928 stars · Kotlin · MIT · updated 2026-09-22</sub>
- **[githubnext/localjev](https://github.com/githubnext/localjev)** - No description provided.  
  <sub>714 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[superagents-lab/jev-search](https://github.com/superagents-lab/jev-search)** - Search the web with TypeSafe's Jev: source selection, query understanding and relevance ranking. Built with Search1API.  
  <sub>398 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier)** - Tax document page classifier built on Jev decisions. 100% strict accuracy across 261 IRS forms, ~$0.001 per page.  
  <sub>374 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[mohsen1/llm-debugger-vscode-extension](https://github.com/mohsen1/llm-debugger-vscode-extension)** - VSCode extension that demonstrates the use of large language models (LLMs) for active debugging of programs  
  <sub>359 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[realZachi/pg-jev](https://github.com/realZachi/pg-jev)** - Ask your Postgres tables questions in plain language. A PostgreSQL extension powered by TypeSafe's Jev.  
  <sub>297 stars · Shell · updated 2026-09-18</sub>
- **[Mapika/decider](https://github.com/Mapika/decider)** - A family of System One-style models fine-tuned from Qwen3.5, designed for one-pass typed decisions with calibrated probabilities.  
  <sub>296 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[moritzkremb/jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser)** - Control a real browser by voice. Jev (TypeSafe System One) decides intent + target in ~300 ms per spoken word; Playwright acts — often before you finish the sentence.  
  <sub>232 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[jev-chat/jev-chat-windows](https://github.com/jev-chat/jev-chat-windows)** - 微信（Windows 4.x）旁挂的回复辅助：窗口截图 + 本地离线 OCR 读对方消息 → Jev 判断意图 → 3 条候选一键填入，发送永远手动  
  <sub>198 stars · Python · MIT · updated 2026-09-22</sub>
- **[FBddcz/embodied-jev](https://github.com/FBddcz/embodied-jev)** - EmbodiedJev: MuJoCo robot decision workbench with MiniCPM5-2B, Jev and compatible model APIs  
  <sub>181 stars · Python · MIT · updated 2026-09-22</sub>
- **[brainstormity/Jev-X-Sentiment-Analysis](https://github.com/brainstormity/Jev-X-Sentiment-Analysis)** - No description provided.  
  <sub>156 stars · Python · MIT · updated 2026-09-22</sub>
- **[tamaratran/jev-pruner](https://github.com/tamaratran/jev-pruner)** - Claude Code plugin: trim long Bash output with TypeSafe Jev before the model sees it  
  <sub>139 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[uehaj/jev-semgrep](https://github.com/uehaj/jev-semgrep)** - grep by meaning, across languages. TypeSafe Jev scores every line against a meaning; combine meanings with AND/OR/NOT. 意味で探す grep。日本語で英語を、英語で日本語を検索できる  
  <sub>129 stars · JavaScript · updated 2026-09-21</sub>
- **[wquguru/dasheng](https://github.com/wquguru/dasheng)** - 大声读 — R2T2 流式 ASR 听，Jev 逐词判，英文朗读评分  
  <sub>128 stars · JavaScript · updated 2026-09-20</sub>
- **[RomanSlack/jev-drone](https://github.com/RomanSlack/jev-drone)** - Camera-only autonomous drone in MuJoCo with a small judgment model (TypeSafe Jev) in the loop at 2.5Hz  
  <sub>125 stars · Python · MIT · updated 2026-09-21</sub>
- **[devagrawal09/stanley-code](https://github.com/devagrawal09/stanley-code)** - Bounded TypeSafe Jev workflows for coding agents.  
  <sub>112 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[aowang-ai/jev-trade](https://github.com/aowang-ai/jev-trade)** - Live Jev trader on Hyperliquid  
  <sub>102 stars · TypeScript · updated 2026-09-21</sub>
- **[Devin-AXIS/jev-dsh-decision](https://github.com/Devin-AXIS/jev-dsh-decision)** - Jev DSH 决策引擎｜面向 Agent Harness 的结构化决策插件。原生支持 DeepSeek Harness，通过 iPolloWork 支持 OpenCode、Codex Harness。  
  <sub>92 stars · JavaScript · updated 2026-09-20</sub>
- **[trungdq88/youtube-sponsor-detection](https://github.com/trungdq88/youtube-sponsor-detection)** - Detect youtube sponsor segment with live audio and transcript powered by Jev  
  <sub>84 stars · JavaScript · updated 2026-09-18</sub>
- **[giuliosmall/pg_typesafe](https://github.com/giuliosmall/pg_typesafe)** - Pre-alpha PostgreSQL extension for TypeSafe AI (Jev) categorical classification  
  <sub>82 stars · C · MIT · updated 2026-09-20</sub>
- **[yikangy873-gif/jev-desktop](https://github.com/yikangy873-gif/jev-desktop)** - TypeSafe Jev action selection inside Codex Computer Use  
  <sub>60 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[AustinAWay/Working-Memory-Jev](https://github.com/AustinAWay/Working-Memory-Jev)** - No description provided.  
  <sub>55 stars · Python · updated 2026-09-21</sub>
- **[obie/ruby_decision_model](https://github.com/obie/ruby_decision_model)** - Ruby client for decision models such as Typesafe Jev  
  <sub>50 stars · Ruby · MIT · updated 2026-09-18</sub>
- **[achimala/jev-paint](https://github.com/achimala/jev-paint)** - Use Jev to make art!  
  <sub>49 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[SAGAR-TAMANG/sarvam-jev](https://github.com/SAGAR-TAMANG/sarvam-jev)** - Generation-free typed decisions on Indic LLMs. An open Jev-style inference engine on sarvam-1: constrained logit readout instead of autoregressive JSON. Runs client-side in the browser.  
  <sub>48 stars · Python · updated 2026-09-18</sub>
- **[RafalWilinski/vibecheck](https://github.com/RafalWilinski/vibecheck)** - Chrome extension: vibe-check your X posts with TypeSafe's Jev before you hit Post  
  <sub>47 stars · JavaScript · updated 2026-09-20</sub>
- **[r-ms/mini-jev](https://github.com/r-ms/mini-jev)** - mini-Jev: what a Jev-style typed-decision interface looks like on a frozen Qwen3-4B — read the option letter's logits instead of generating JSON. Preregistered experiment, results, teaching bench.  
  <sub>43 stars · Python · MIT · updated 2026-09-18</sub>
- **[Liyucheng1997/332_lab-jev-chat](https://github.com/Liyucheng1997/332_lab-jev-chat)** - Jev Chat Assistant for Windows - 电脑版微信意图判断与 DeepSeek 建议回复  
  <sub>39 stars · Kotlin · MIT · updated 2026-09-21</sub>
- **[dannote/jev](https://github.com/dannote/jev)** - TypeSafe Jev for OTP: reply to Jev from a GenServer and pattern match on its answer  
  <sub>29 stars · Elixir · MIT · updated 2026-09-21</sub>
- **[AlbionaHoti/refgarden](https://github.com/AlbionaHoti/refgarden)** - A spatial reference explorer for creators. Local Jev query choices, metadata highlights and source-linked collections.  
  <sub>27 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[safzanpirani/pi-jev-skill-picker](https://github.com/safzanpirani/pi-jev-skill-picker)** - Rank Pi Agent Skills for the current task with TypeSafe Jev  
  <sub>25 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[zadescoxp/Jev-Trades](https://github.com/zadescoxp/Jev-Trades)** - Trading bot with the all new TypeSafe AI's first system one model named as Jev  
  <sub>25 stars · Python · Apache-2.0 · updated 2026-09-18</sub>
- **[goodrahstar/jev-column-race](https://github.com/goodrahstar/jev-column-race)** - Jev vs Gemini 3.8 Flash: labelling 1,000 app reviews, 4.1× faster and 7× cheaper  
  <sub>22 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[ehui1226/hookmeter-jev](https://github.com/ehui1226/hookmeter-jev)** - ⚡ Millisecond-level Viral Hook Telemetry & Co-pilot for Social Media (Chrome Extension + JEV System 1)  
  <sub>21 stars · HTML · MIT · updated 2026-09-21</sub>
- **[brudarko/jev-mac-voice](https://github.com/brudarko/jev-mac-voice)** - English full-duplex voice control for macOS with OpenAI Realtime, native Accessibility, and Jev.  
  <sub>20 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[stas4000/jev-linkmap](https://github.com/stas4000/jev-linkmap)** - Rebuild a site's internal link map in seconds with Jev, race Claude Opus 5 on the same queue, and let a deep model rewrite the rubric from the disagreements.  
  <sub>20 stars · HTML · updated 2026-09-19</sub>
- **[runta-dev/jot](https://github.com/runta-dev/jot)** - The first general-purpose System One agent for Jev  
  <sub>19 stars · TypeScript · updated 2026-09-18</sub>
- **[kieranklaassen/ruby_llm-typesafe](https://github.com/kieranklaassen/ruby_llm-typesafe)** - TypeSafe structured-output provider for RubyLLM 2  
  <sub>18 stars · Ruby · MIT · updated 2026-09-16</sub>
- **[ilyamk/jev-gmail-ai-spam-filter-and-labeling](https://github.com/ilyamk/jev-gmail-ai-spam-filter-and-labeling)** - Self-hosted AI email classifier for Gmail powered by Jev. Create custom labels, organize your inbox, and filter spam with confidence and cost controls.  
  <sub>16 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[vinilana/live-jev](https://github.com/vinilana/live-jev)** - 2D autonomous car simulation in the browser, driven by TypeSafe's Jev decision model  
  <sub>16 stars · JavaScript · updated 2026-09-18</sub>
- **[oso95/x-scanner](https://github.com/oso95/x-scanner)** - Chrome extension that labels every post you scroll past on X with typed Jev judgments and a live cost counter  
  <sub>15 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jon-devlapaz/jev-me](https://github.com/jon-devlapaz/jev-me)** - Grill-me with Jev optional each turn  
  <sub>13 stars · MIT · updated 2026-09-19</sub>
- **[anpicasso/hermes-jev-approvals](https://github.com/anpicasso/hermes-jev-approvals)** - TypeSafe Jev as the reviewer for Hermes Agent smart command approvals. 8.7x faster, 4.4x fewer prompts, measured on 153 real commands. Approvals only.  
  <sub>12 stars · Python · MIT · updated 2026-09-22</sub>
- **[bytelabs-oss/clash-jev](https://github.com/bytelabs-oss/clash-jev)** - A Clash Royale bot with no trained policy: Jev (TypeSafe System One) makes every decision from the live game state  
  <sub>12 stars · Python · MIT · updated 2026-09-21</sub>
- **[cocktailpeanut/jevthoven](https://github.com/cocktailpeanut/jevthoven)** - AI Music (MIDI) generator powered by Jev  
  <sub>12 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[keeltrace/hermes-jev](https://github.com/keeltrace/hermes-jev)** - Nerve is a supervisory nervous system for Hermes agents, adding typed System One decisions, ranking, verification, token-aware oversight, and an opt-in tool gate powered by TypeSafe Jev or Open Source Laya  
  <sub>12 stars · Python · MIT · updated 2026-09-22</sub>
- **[nokia-applied-research/AnyJev](https://github.com/nokia-applied-research/AnyJev)** - Turn any LLM into a Jev-style decision model: typed decisions, real probabilities, no training.  
  <sub>12 stars · Python · Apache-2.0 · updated 2026-09-22</sub>
- **[HyunjunJeon/pi-quiet-ask](https://github.com/HyunjunJeon/pi-quiet-ask)** - TypeSafe Jev as the pi coding agent's quiet decision layer  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[joelhooks/pi-fast-jev-compaction](https://github.com/joelhooks/pi-fast-jev-compaction)** - Pi extension: verbatim context compaction with TypeSafe Jev decisions  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[manifoldor/xtags](https://github.com/manifoldor/xtags)** - 在 X 的时间线上，给每条帖子标出它想让你干什么。判断来自 Jev，一个只返回概率、不生成文本的模型。  
  <sub>10 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[qs-lll/twitter-jev-guard](https://github.com/qs-lll/twitter-jev-guard)** - 使用 TypeSafe Jev 在 X/Twitter 时间线上识别低质量、垃圾和广告帖子，并在文字区域显示醒目的半透明水印。  
  <sub>10 stars · JavaScript · updated 2026-09-21</sub>
- **[TarunTomar122/jev-askable-arm](https://github.com/TarunTomar122/jev-askable-arm)** - Zero-shot English goals on a sim Franka. Jev chains hardcoded primitives.  
  <sub>10 stars · Python · MIT · updated 2026-09-17</sub>
- **[aaazzam/jev](https://github.com/aaazzam/jev)** - No description provided.  
  <sub>9 stars · Python · updated 2026-09-18</sub>
- **[bohutang/sift](https://github.com/bohutang/sift)** - Chrome extension that labels every post on X (Substance · Humor · Chit-chat · Promo · Junk · AI-written) with TypeSafe Jev, and hides the ones you don't want.  
  <sub>9 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[chl-5g/QuantLLM](https://github.com/chl-5g/QuantLLM)** - QuantLLM — A股量化多 Agent 交易系统  
  <sub>9 stars · Python · updated 2026-09-21</sub>
- **[kingdsa/AI-Relationship-Copilot](https://github.com/kingdsa/AI-Relationship-Copilot)** - No description provided.  
  <sub>9 stars · TypeScript · updated 2026-09-21</sub>
- **[poiuyjie/jev_project_context](https://github.com/poiuyjie/jev_project_context)** - Evidence-first long-term experiment memory skill for AI coding agents, with optional Jev decision-model layers  
  <sub>9 stars · Python · MIT · updated 2026-09-22</sub>
- **[jomatsu/zod-jev](https://github.com/jomatsu/zod-jev)** - No description provided.  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[metalbear-co/jev-auto-approve](https://github.com/metalbear-co/jev-auto-approve)** - Jev PR auto approver  
  <sub>8 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[Qew7/jev-feels](https://github.com/Qew7/jev-feels)** - Semantic decisions as ordinary Ruby — feels?, decide, score, Rails validations and pattern matching powered by Jev  
  <sub>8 stars · Ruby · MIT · updated 2026-09-21</sub>
- **[Kiln-AI/jev_jsonschema](https://github.com/Kiln-AI/jev_jsonschema)** - Run a JSON Schema through TypeSafe's Jev API, and get JSON back.  
  <sub>7 stars · Python · MIT · updated 2026-09-19</sub>
- **[mattt/AnyDecisionModel](https://github.com/mattt/AnyDecisionModel)** - A Swift package for typed decisions from language models (probabilities, choices, and scores), with support for local MLX models and the TypeSafe Jev API.  
  <sub>7 stars · Swift · Apache-2.0 · updated 2026-09-22</sub>
- **[24601/Augustus](https://github.com/24601/Augustus)** - Agent skill for the decision-model class (classifiers, encoders/decoders, specialized AR heads, System One). TypeSafe Jev is the dominant exemplar. Composition algebra, question design, validation gates. MIT.  
  <sub>6 stars · Python · MIT · updated 2026-09-22</sub>
- **[Astro-Han/decision-head-rlcd](https://github.com/Astro-Han/decision-head-rlcd)** - Where does a decision model's generalisation come from? RLCD on Qwen3.5-4B, held-out sets grouped by training-data coverage, JevBench and three external suites.  
  <sub>6 stars · Python · updated 2026-09-20</sub>
- **[enoyola/jev-grand-prix](https://github.com/enoyola/jev-grand-prix)** - An F1 racing game where TypeSafe's Jev picks the racing line and the pedals, and learns each corner's limit between laps  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[littlewindy123/jev-weekend-shopping-chrome](https://github.com/littlewindy123/jev-weekend-shopping-chrome)** - 把对双休的支持，带进每一次购物。逛淘宝、京东时，JEV 实时猜测商品背后的工作制，疑似非双休直接盖上 PASS。原页生效，边逛边选。  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[scale-venture-partners/riff](https://github.com/scale-venture-partners/riff)** - A small, fast prose linter: ruff-style rule codes for writing, backed by TypeSafe's Jev model  
  <sub>6 stars · Python · MIT · updated 2026-09-18</sub>
- **[wuxie888/jev-yaba-wechat](https://github.com/wuxie888/jev-yaba-wechat)** - 微信里的话不知道怎么接？macOS 悬浮聊天助手：识别消息意图与沟通风险，GPT 生成多种话术，Jev 评估候选，一键填入微信。话我帮你想，发送你来定。  
  <sub>6 stars · Python · MIT · updated 2026-09-22</sub>
- **[yushen100/wechat-jev-assistant](https://github.com/yushen100/wechat-jev-assistant)** - Windows 微信对话分析助手：本地读取、脱敏、TypeSafe Jev 判断与加密历史  
  <sub>6 stars · Python · updated 2026-09-22</sub>
- **[lbotinelly/jev-little-airways](https://github.com/lbotinelly/jev-little-airways)** - A show-and-tell capability study for Jev, TypeSafe's System One decision model.  
  <sub>5 stars · HTML · MIT · updated 2026-09-17</sub>
- **[oldmoldycake/jev_vampire_survivors](https://github.com/oldmoldycake/jev_vampire_survivors)** - TypeSafe's Jev model plays Vampire Survivors on Steam: BepInEx plugin + Python brain + live decision dashboard. Native Linux only.  
  <sub>5 stars · Python · MIT · updated 2026-09-19</sub>
- **[ronadin2002/jev-cua](https://github.com/ronadin2002/jev-cua)** - Voice and text control for macOS. One floating bar, live UI action selection with Jev, and a continuous observe–act–verify loop.  
  <sub>5 stars · Swift · updated 2026-09-22</sub>
- **[sametcn99/my-stars-atlas](https://github.com/sametcn99/my-stars-atlas)** - A generated catalog of starred GitHub repositories, grouped into stable categories.  
  <sub>5 stars · TypeScript · updated 2026-09-19</sub>
- **[yohanargentina-oss/Foq](https://github.com/yohanargentina-oss/Foq)** - ⚡ Foq — the FREE, local, open-source alternative to Jev. Typed System 1 decisions in ~25 ms — no waitlist, no cloud, no per-token cost. foq.fr  
  <sub>5 stars · Python · MIT · updated 2026-09-20</sub>
- **[1jehuang/jev-pr-labeler](https://github.com/1jehuang/jev-pr-labeler)** - Semantic GitHub PR labels using Jev's typed decisions, with conceptual scope instead of line counts  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[christian-taillon/opencode-jev-compactor](https://github.com/christian-taillon/opencode-jev-compactor)** - Jev powered OpenCode compaction  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[deep-diver/mini-jev](https://github.com/deep-diver/mini-jev)** - No description provided.  
  <sub>4 stars · Python · updated 2026-09-18</sub>
- **[duckegg0623-create/jev-wechat-live](https://github.com/duckegg0623-create/jev-wechat-live)** - 用 TypeSafe Jev 实时解读微信消息的桌面浮层 —— 未完成的实验项目，判定准确率不达标，附完整踩坑记录  
  <sub>4 stars · Python · MIT · updated 2026-09-21</sub>
- **[gtaras7/typesafe-jev](https://github.com/gtaras7/typesafe-jev)** - Screen a folder of CVs with the TypeSafe Jev decision model: typed judgments, an editable policy, free re-scoring.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[harshil1712/slidepilot](https://github.com/harshil1712/slidepilot)** - Voice-driven semantic auto-advance for Slidev, powered by Cloudflare Agents and TypeSafe AI Jev  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[markusbug/jevymarket](https://github.com/markusbug/jevymarket)** - Polymarket trading bot driven by Jev (TypeSafe AI) via OpenRouter  
  <sub>4 stars · Python · MIT · updated 2026-09-20</sub>
- **[milanboers/jev-plays-pokemon](https://github.com/milanboers/jev-plays-pokemon)** - Playing Pokemon Red using TypeSafe Jev  
  <sub>4 stars · Python · updated 2026-09-18</sub>
- **[muhammedilyasy/jev-mail](https://github.com/muhammedilyasy/jev-mail)** - Chrome extension that triages Gmail with TypeSafe's Jev model: category, priority, spam % and reply % on every email.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[nozomi-koborinai/jev-spec](https://github.com/nozomi-koborinai/jev-spec)** - ⚡ Catch spec drift on every commit: check your code against your Markdown specs with TypeSafe AI's Jev model.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[pambrose/jev4k](https://github.com/pambrose/jev4k)** - A Kotlin DSL and client for TypeSafe's Jev model  
  <sub>4 stars · Kotlin · Apache-2.0 · updated 2026-09-20</sub>
- **[rthomas24/jev-realtime-trading](https://github.com/rthomas24/jev-realtime-trading)** - Paper trading agents on a live tape, decided every second by TypeSafe's Jev (System One). Electron desktop app.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[soderlind/ai-provider-for-jev](https://github.com/soderlind/ai-provider-for-jev)** - Connect WordPress to TypeSafe's Jev System One model for structured decisions (choice, score, noul).  
  <sub>4 stars · PHP · updated 2026-09-18</sub>
- **[yibie/laya-jev-lab](https://github.com/yibie/laya-jev-lab)** - Independent measurements of typed-decision models: Jev (TypeSafe API) vs Laya (open weights), and a local-first cascade that matches Jev's accuracy at 1.8x the speed  
  <sub>4 stars · Python · MIT · updated 2026-09-20</sub>
- **[adhyaay-karnwal/jev-chat](https://github.com/adhyaay-karnwal/jev-chat)** - A chatbot from typed Jev decisions: hierarchical speculative decoding over System One probabilities.  
  <sub>3 stars · Python · MIT · updated 2026-09-17</sub>
- **[Aimark-dai/jev-chat-windows-deepseek-jev](https://github.com/Aimark-dai/jev-chat-windows-deepseek-jev)** - Windows 微信回复助手：DeepSeek 官方生成话术，TypeSafe JEV 官方判断排序，支持可取消的 3 秒自动发送。  
  <sub>3 stars · Python · updated 2026-09-22</sub>
- **[AiPersonacademy/jev-resume-disqualifier](https://github.com/AiPersonacademy/jev-resume-disqualifier)** - Jev Resume Disqualifier: Sub-25ms automated resume knockout engine powered by TypeSafe Jev System One decision intelligence. Eliminates 80% of unqualified applicants with deterministic date math & EEOC-safe rejection notices.  
  <sub>3 stars · Python · MIT · updated 2026-09-20</sub>
- **[ajensenwaud/hermes-jev-plugin](https://github.com/ajensenwaud/hermes-jev-plugin)** - TypeSafe Jev (System One) decision tools for Hermes Agent: jev_check / jev_route / jev_score / jev_evaluate  
  <sub>3 stars · Python · MIT · updated 2026-09-19</sub>
- **[alexsatch/omp-auto-mode](https://github.com/alexsatch/omp-auto-mode)** - Plugin for oh-my-pi that uses Typesafe Jev API to classify tool calls as safe/unsafe/ask  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[alpha-tales/alphaoptimizer](https://github.com/alpha-tales/alphaoptimizer)** - Jev-powered output optimization for Codex, built to keep large tool results concise and usable.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[benjamincanac/tia](https://github.com/benjamincanac/tia)** - Triage Issue Agent for GitHub, built with Eve and Jev.  
  <sub>3 stars · TypeScript · updated 2026-09-22</sub>
- **[eachann1024/pi-jev-reply](https://github.com/eachann1024/pi-jev-reply)** - Pi extension: clearer replies via Jev review + optional rewrite/visuals  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[epergaboni/jevseo](https://github.com/epergaboni/jevseo)** - Typed SEO, AEO and GEO judgments powered by Jev, a System One decision model. Code owns the rules, the model owns the meaning.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-21</sub>
- **[fatelei/yueli](https://github.com/fatelei/yueli)** - resume judgement use jev model  
  <sub>3 stars · Rust · Apache-2.0 · updated 2026-09-20</sub>
- **[Gaurav-Gosain/jev-go](https://github.com/Gaurav-Gosain/jev-go)** - Go client for TypeSafe's System One API and its model Jev: typed judgments and calibrated probabilities instead of generated text  
  <sub>3 stars · Go · MIT · updated 2026-09-16</sub>
- **[jamesward/zio-typesafe-ai](https://github.com/jamesward/zio-typesafe-ai)** - No description provided.  
  <sub>3 stars · Scala · Apache-2.0 · updated 2026-09-18</sub>
- **[jiayao/ctrl-f](https://github.com/jiayao/ctrl-f)** - ctrl-f that understands your query  
  <sub>3 stars · JavaScript · Apache-2.0 · updated 2026-09-20</sub>
- **[kolawong/fast-compaction-dsh](https://github.com/kolawong/fast-compaction-dsh)** - Verdict-based context compaction for DeepSeek Harness — replaces lossy LLM summaries with fast keep/truncate/drop decisions from jev-latest; everything kept stays verbatim. Port of tamaratran/fast-jev-compaction.  
  <sub>3 stars · TypeScript · updated 2026-09-20</sub>
- **[LamplighterPaul/jev-piano](https://github.com/LamplighterPaul/jev-piano)** - Jev cannot generate a single note. Given a piano and the right questions, it improvises anyway.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[mgarlabx/Jev-Enem](https://github.com/mgarlabx/Jev-Enem)** - No description provided.  
  <sub>3 stars · Jupyter Notebook · updated 2026-09-20</sub>
- **[MongLong0214/jev-gate](https://github.com/MongLong0214/jev-gate)** - Not every coding task needs your best model. Experimental Jev-powered model routing for Claude Code — V3 prototype runs today, V4 routes at the task boundary.  
  <sub>3 stars · TypeScript · updated 2026-09-21</sub>
- **[mstf-svndk/jev-windows-voice](https://github.com/mstf-svndk/jev-windows-voice)** - Türkçe ve İngilizce doğal konuşmayla Windows 10/11 bilgisayar kontrolü: OpenAI Realtime, local Whisper, Jev, UI Automation ve Playwright.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[noetion/dsh-jev](https://github.com/noetion/dsh-jev)** - DSH bundle that registers jev_ask for TypeSafe Jev noul, choice, and score answers.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[paulsmith/computer-use-jev](https://github.com/paulsmith/computer-use-jev)** - macOS computer use driven by Jev (TypeSafe System One) as the decision maker  
  <sub>3 stars · Go · MIT · updated 2026-09-17</sub>
- **[reycn/smart-switch](https://github.com/reycn/smart-switch)** - Reimagined window switcher for macOS using frontier artificial intelligence. Predicted by TypeSafe's Jev model  
  <sub>3 stars · Swift · AGPL-3.0 · updated 2026-09-18</sub>
- **[vtrivedy/jev-plays-games](https://github.com/vtrivedy/jev-plays-games)** - Chess, Connect Four, and a decision model. Play Jev or watch Jev play itself.  
  <sub>3 stars · JavaScript · updated 2026-09-18</sub>
- **[yangyu666/dsh-jev-prune](https://github.com/yangyu666/dsh-jev-prune)** - Jev-judged context compaction for DeepSeek Harness: semantic tool-result pruning + deterministic receipt compaction  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-22</sub>
- **[AboveColin/jevclient](https://github.com/AboveColin/jevclient)** - Async Python client for TypeSafe Jev. Typed questions in, probabilities and choices out, no prose to parse.  
  <sub>2 stars · Python · MIT · updated 2026-09-21</sub>
- **[acorn181/semantic-bookmark](https://github.com/acorn181/semantic-bookmark)** - Organize bookmarks with your own semantic rules using Jev.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[atarikcaliskan/jevball](https://github.com/atarikcaliskan/jevball)** - 22 Jev models, one ball: a 3D football match where every player is its own Jev (TypeSafe AI System One) decision. Watch, or take over the number 9.  
  <sub>2 stars · JavaScript · updated 2026-09-19</sub>
- **[CrowdLinker/JevPromptCoach](https://github.com/CrowdLinker/JevPromptCoach)** - Claude Code plugin that scores how well you prompt a coding agent, and shows whether your habits are improving. Runs on TypeSafe's Jev model. Zero added latency.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[Dimesio/typesafe-chess](https://github.com/Dimesio/typesafe-chess)** - FUn little experiment with Typesafe AI Jev Model playing chess against stockfish :)  
  <sub>2 stars · JavaScript · updated 2026-09-20</sub>
- **[DragosTana/JEV-FC](https://github.com/DragosTana/JEV-FC)** - No description provided.  
  <sub>2 stars · Python · updated 2026-09-20</sub>
- **[emirbartu/opencode-system-one](https://github.com/emirbartu/opencode-system-one)** - Opencode plugin using Jev (system one model) as part of software development process. Not affiliated with Opencode team.  
  <sub>2 stars · TypeScript · updated 2026-09-19</sub>
- **[etweisberg/jev-ui](https://github.com/etweisberg/jev-ui)** - React components that resolve which component to render, how to order a list, and whether to show an affordance — from calibrated judgments returned by TypeSafe's Jev.  
  <sub>2 stars · TypeScript · updated 2026-09-21</sub>
- **[HamsterPark/Jev-Xiangqi](https://github.com/HamsterPark/Jev-Xiangqi)** - Play Chinese chess against Jev AI in the browser  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[hdkiller/jev-panerelay](https://github.com/hdkiller/jev-panerelay)** - Ultra-fast browser automation using TypeSafe Jev via Panerelay and OpenRouter.  
  <sub>2 stars · Python · MIT · updated 2026-09-19</sub>
- **[hellogumbo/should-ai-kill-us-all](https://github.com/hellogumbo/should-ai-kill-us-all)** - We ask Jev, TypeSafe AI's System One model, whether AI should kill us all. Every ten minutes. Using the actual headlines.  
  <sub>2 stars · JavaScript · CC0-1.0 · updated 2026-09-18</sub>
- **[hoangngochuong24947-gif/jev-patent-disclosure](https://github.com/hoangngochuong24947-gif/jev-patent-disclosure)** - Patent disclosure and application drafting skill powered by TypeSafe Jev / Jeb System-1  
  <sub>2 stars · Python · MIT · updated 2026-09-20</sub>
- **[ingebyd/fast-jev-compaction-openrouter](https://github.com/ingebyd/fast-jev-compaction-openrouter)** - Fork of tamaratran/fast-jev-compaction: Jev via OpenRouter with zero data retention (zdr, data_collection: deny)  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[liao96312/jev-arena-nanojev](https://github.com/liao96312/jev-arena-nanojev)** - 完全本地的 NanoJev 网格决策游戏实验场，支持中文 Pygame、多关卡与 GTX 1660S 训练  
  <sub>2 stars · Python · updated 2026-09-22</sub>
- **[littlewindy123/jev-bili-filter](https://github.com/littlewindy123/jev-bili-filter)** - 弹幕照开，噪音别来。用 JEV 为 B 站评论和弹幕降噪：剧透、反串黑、广告、基本盘一键过滤，想屏蔽什么，再写一句话。Chrome 插件，原页生效，MIT 开源。  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-21</sub>
- **[mansicer/jev-plays](https://github.com/mansicer/jev-plays)** - No description provided.  
  <sub>2 stars · Python · Apache-2.0 · updated 2026-09-21</sub>
- **[minorun365/jev-cloud-quiz](https://github.com/minorun365/jev-cloud-quiz)** - 三大クラウドの機能名を、TypeSafe AI の System One モデル Jev が確率つきで判定するデモ  
  <sub>2 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[phureewat29/jev-got](https://github.com/phureewat29/jev-got)** - Jev (TypeSafe AI) PoC through Game of Thrones  
  <sub>2 stars · TypeScript · updated 2026-09-19</sub>
- **[pjt3591oo/laya-server](https://github.com/pjt3591oo/laya-server)** - typesafe ai > systemone > jev  
  <sub>2 stars · Python · updated 2026-09-21</sub>
- **[Programalyst/realtime-vision-decision-agent](https://github.com/Programalyst/realtime-vision-decision-agent)** - Combining YOLO and Jev models to play a mobile game.  
  <sub>2 stars · Jupyter Notebook · MIT · updated 2026-09-21</sub>
- **[QuentinDanblon/pi-fast-jev-compaction](https://github.com/QuentinDanblon/pi-fast-jev-compaction)** - Verbatim context pruning for the pi coding agent, scored by TypeSafe Jev: stale tool calls and results are dropped or truncated, everything kept stays verbatim.  
  <sub>2 stars · TypeScript · updated 2026-09-18</sub>
- **[Red5d/jev-cvss](https://github.com/Red5d/jev-cvss)** - Fast CVSS scoring from vulnerability descriptions using Typesafe Jev  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[rikkooo/jev-trade](https://github.com/rikkooo/jev-trade)** - A market-data trading simulator powered by auditable Jev judgments  
  <sub>2 stars · TypeScript · updated 2026-09-20</sub>
- **[shunshunNi/redmine_jev](https://github.com/shunshunNi/redmine_jev)** - Asks Jev whether a Redmine issue's tracker fits, while you fill in the form  
  <sub>2 stars · Ruby · MIT · updated 2026-09-19</sub>
- **[strombolini/Armada](https://github.com/strombolini/Armada)** - Spotlight-style ⌘Space file search for macOS whose ranking is done by Codiv's OpenJev model. Describe the file; Jev finds it. Also ranks Finder and Open-panel searches.  
  <sub>2 stars · Swift · updated 2026-09-21</sub>
- **[YiLight0/paperfocus](https://github.com/YiLight0/paperfocus)** - Question-guided evidence highlighting for research papers, powered by Jev.  
  <sub>2 stars · JavaScript · updated 2026-09-21</sub>
- **[zhuyansen/jev-news-cold-start](https://github.com/zhuyansen/jev-news-cold-start)** - Cross-domain check on MIND news: a zero-shot Jev headline prior is worth ~500 labelled articles, adds +0.069 ρ as features, and lifts a Thompson-sampling cold start by 25%.  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[019ec6e2/pi-jev-compact](https://github.com/019ec6e2/pi-jev-compact)** - No description provided.  
  <sub>1 stars · TypeScript · updated 2026-09-18</sub>
- **[1105623876/qwenpaw-jev-memory-gate](https://github.com/1105623876/qwenpaw-jev-memory-gate)** - 为QwenPaw制作的Jev门控自动记忆搜索插件（兼容ReMe Light）  
  <sub>1 stars · Python · updated 2026-09-21</sub>
- **[Aben25/jev-sim](https://github.com/Aben25/jev-sim)** - Fast mobile-simulator computer-use: sim-use + TypeSafe Jev (Cua jev-use pattern for iOS/Android sims)  
  <sub>1 stars · Python · MIT · updated 2026-09-19</sub>
- **[Adrian-lzr/jev-spire-brain](https://github.com/Adrian-lzr/jev-spire-brain)** - No description provided.  
  <sub>1 stars · Python · MIT · updated 2026-09-22</sub>
- **[aegsrl7/jevmap](https://github.com/aegsrl7/jevmap)** - Map a codebase into units and let Jev (TypeSafe AI) hand an AI coding agent the ten files that matter for a task  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[apidance/JEVX](https://github.com/apidance/JEVX)** - 基于 JEV 决策器的 Twitter/X 实时垃圾推文识别与净化扩展程序  
  <sub>1 stars · JavaScript · updated 2026-09-20</sub>
- **[AppChainAI/Jevatar](https://github.com/AppChainAI/Jevatar)** - An AI companion that replies only with facial expressions. Jev (TypeSafe System One) judges your message and picks 1 of 14 moods; blobatar morphs its face. React + Vite + Bun.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[Ashadeepa/typesafe-showcase](https://github.com/Ashadeepa/typesafe-showcase)** - Next.js UI showing off TypeSafe's System One model (Jev) — parallel Noul judgments and a Choice-based citation checker, deployable to Vercel  
  <sub>1 stars · TypeScript · updated 2026-09-22</sub>
- **[bojansandhaus/jev-home-assistant-sentinel](https://github.com/bojansandhaus/jev-home-assistant-sentinel)** - A safety boundary for AI-assisted Home Assistant decisions, with explicit policy checks and deterministic state verification.  
  <sub>1 stars · Python · MIT · updated 2026-09-19</sub>
- **[Cab14bacc/jev-sheets](https://github.com/Cab14bacc/jev-sheets)** - No description provided.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-22</sub>
- **[cnwelee/cev](https://github.com/cnwelee/cev)** - Typed decision engine in C — Jev-compatible, 85us p50, zero dependencies  
  <sub>1 stars · C · updated 2026-09-21</sub>

<sub>242 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

---

<sub>1699 entries · 955 of them in none of the 14 other Jev directories checked on 2026-09-22 · last updated 2026-09-22 · 173 candidates in the [review queue](data/review-queue.md) · generated by [`tools/fetch.js`](tools/fetch.js)</sub>

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
