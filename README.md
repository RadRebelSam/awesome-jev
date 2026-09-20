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
- **[logan-markewich/jeff](https://github.com/logan-markewich/jeff)** — A self-hosted drop-in replacement for TypeSafe's jev, powered by GliFormer.  
  <sub>128 stars · Python · MIT · updated 2026-09-20</sub>
- **[vinilana/jev-gateway](https://github.com/vinilana/jev-gateway)** — No description provided.  
  <sub>59 stars · TypeScript · MIT · updated 2026-09-19</sub>
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
- **[atharvamhaske/typesafe-sdk-go](https://github.com/atharvamhaske/typesafe-sdk-go)** — unofficial  go sdk for typesafe ai  
  <sub>7 stars · Go · MIT · updated 2026-09-18</sub>
- **[fazlerocks/jevmail](https://github.com/fazlerocks/jevmail)** — Open-source AI email triage for Gmail. Sorts your inbox into Needs reply, Updates, Promos, Sales and Spam with Jev, TypeSafe AI's decision model, via Vercel AI Gateway. Read-only, runs locally, 1,000 emails in about a minute for 3 cents.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[romaluev/jev-ego](https://github.com/romaluev/jev-ego)** — Fast browser agent for ego lite. One TypeSafe request per step; an agent or Jev picks the move.  
  <sub>7 stars · TypeScript · updated 2026-09-17</sub>
- **[Skyvern-AI/jevscape](https://github.com/Skyvern-AI/jevscape)** — RuneBench harness for TypeSafe's Jev: bounded action catalog, tick-mode controller and a live dashboard  
  <sub>7 stars · TypeScript · updated 2026-09-18</sub>
- **[frostney/clean-code-review](https://github.com/frostney/clean-code-review)** — Every code file in a pull request, judged against Uncle Bob's Clean Code by TypeSafe's Jev, then reviewed by Luna. Built on eve and Next.js.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[hev/reranker](https://github.com/hev/reranker)** — Use Jev (TypeSafe's System One model) as a calibrated reranker: one call, up to 30 documents, a probability per document. Apache-2.0.  
  <sub>6 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[joevidev/ui-generator-instinct-jev](https://github.com/joevidev/ui-generator-instinct-jev)** — No description provided.  
  <sub>6 stars · TypeScript · updated 2026-09-18</sub>
- **[ticofab/scala-jev-sdk](https://github.com/ticofab/scala-jev-sdk)** — Scala SDK for Jev. No effect system bundled.  
  <sub>6 stars · Scala · Apache-2.0 · updated 2026-09-19</sub>
- **[3clyp50/a0-typesafe-ai](https://github.com/3clyp50/a0-typesafe-ai)** — TypeSafe AI Jev judgments for Agent Zero, with typed tools and probability cards.  
  <sub>5 stars · Python · MIT · updated 2026-09-17</sub>
- **[leftspace89/JevBird](https://github.com/leftspace89/JevBird)** — No description provided.  
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
- **[Ray-Hughes/jevalyn](https://github.com/Ray-Hughes/jevalyn)** — The decision layer for your Rails app. A Rails-native wrapper around TypeSafe's Jev System One API: typed, calibrated decisions in your control flow.  
  <sub>4 stars · Ruby · MIT · updated 2026-09-20</sub>
- **[buberlo/dsh-jev](https://github.com/buberlo/dsh-jev)** — Jev-powered decision layer for DeepSeek Harness  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[gilljon/typesafe-ai-rs](https://github.com/gilljon/typesafe-ai-rs)** — Independent async and blocking Rust SDK for the TypeSafe AI System One API  
  <sub>3 stars · Rust · MIT · updated 2026-09-17</sub>
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
- **[abeldzan/jev-rs](https://github.com/abeldzan/jev-rs)** — Async-first Rust SDK for the TypeSafe AI API  
  <sub>1 stars · Rust · MIT · updated 2026-09-18</sub>
- **[acharyaanusha/magic-jev](https://github.com/acharyaanusha/magic-jev)** — A Magic Jev (8) Ball for pull requests.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[anilsenay/jev](https://github.com/anilsenay/jev)** — Unofficial Go client for TypeSafe's System One API  and its model, Jev.  
  <sub>1 stars · Go · MIT · updated 2026-09-17</sub>
- **[Barneyjm/decision-circuits](https://github.com/Barneyjm/decision-circuits)** — Decision circuits: typed questions to a System One model, calibrated probabilities back, gates in code. Zero-dependency Python SDK with LangChain, OpenAI Agents, and Claude Agent SDK integrations.  
  <sub>1 stars · Python · MIT · updated 2026-09-20</sub>
- **[binnash/typesafe-sdk](https://github.com/binnash/typesafe-sdk)** — PHP & Laravel SDK for TypeSafe AI's JEV Model series  
  <sub>1 stars · PHP · updated 2026-09-18</sub>
- **[chez-shanpu/typesafeai-go](https://github.com/chez-shanpu/typesafeai-go)** — Go SDK for TypeSafe AI API https://docs.typesafe.ai/api  
  <sub>1 stars · Go · Apache-2.0 · updated 2026-09-17</sub>
- **[dwisiswant0/typesafe-sdk-go](https://github.com/dwisiswant0/typesafe-sdk-go)** — Go SDK for TypeSafe AI.  
  <sub>1 stars · Go · Apache-2.0 · updated 2026-09-19</sub>
- **[guillemus/jev-go](https://github.com/guillemus/jev-go)** — Unofficial Go SDK for TypeSafe AI's Jev API  
  <sub>1 stars · Go · updated 2026-09-17</sub>
- **[jaewgwon/jevis](https://github.com/jaewgwon/jevis)** — Run Flutter integration tests using natural language with TypeSafe.ai's Jev  
  <sub>1 stars · Dart · Apache-2.0 · updated 2026-09-19</sub>
- **[replynodes/jev-web-analyzer](https://github.com/replynodes/jev-web-analyzer)** — See what Jev thinks about your SaaS website — powered by ReplyNodes web context and Vercel AI Gateway.  
  <sub>1 stars · TypeScript · updated 2026-09-20</sub>
- **[santos-sanz/jev-audio-beeper](https://github.com/santos-sanz/jev-audio-beeper)** — Low-latency audio censorship POC using Jev typed decisions and ffmpeg.  
  <sub>1 stars · TypeScript · updated 2026-09-17</sub>
- **[SergeAx/typesafe-sdk-go](https://github.com/SergeAx/typesafe-sdk-go)** — TypeSafe.AI Go SDK  
  <sub>1 stars · Go · MIT · updated 2026-09-17</sub>
- **[Solido/jev_dart](https://github.com/Solido/jev_dart)** — Typesafe Jev Api  
  <sub>1 stars · Dart · MIT · updated 2026-09-19</sub>
- **[stoopid-computers/jev-bot](https://github.com/stoopid-computers/jev-bot)** — Computer Use Agent developed with Jev  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[terryds/jevplayground](https://github.com/terryds/jevplayground)** — Browser-only playground for Jev (TypeSafe AI's decision model) via Vercel AI Gateway  
  <sub>1 stars · HTML · updated 2026-09-19</sub>
- **[unimtx/typesafe-sdk-go](https://github.com/unimtx/typesafe-sdk-go)** — A Go SDK for the TypeSafe API, enabling quick integration with Jev.  
  <sub>1 stars · Go · MIT · updated 2026-09-19</sub>
- **[zhirschtritt/typesafe-go](https://github.com/zhirschtritt/typesafe-go)** — Idiomatic Go SDK for the TypeSafe AI API  
  <sub>1 stars · Go · MIT · updated 2026-09-17</sub>
- **[aamanlamba/jev-explore](https://github.com/aamanlamba/jev-explore)** — An example repository for exploring Jev - the System One model  
  <sub>0 stars · Python · updated 2026-09-19</sub>
- **[ably-labs/jev-pong](https://github.com/ably-labs/jev-pong)** — Pong where the ball moves one step per model decision. Jev vs LLMs via Vercel AI Gateway, every player and agent on an Ably channel.  
  <sub>0 stars · TypeScript · Apache-2.0 · updated 2026-09-19</sub>
- **[Adibrill1/jev-factorio](https://github.com/Adibrill1/jev-factorio)** — Jev picks what, code owns how - a System One Factorio agent driven by TypeSafe's Jev on FLE  
  <sub>0 stars · Python · updated 2026-09-20</sub>
- **[ajayk/jev-go-sdk](https://github.com/ajayk/jev-go-sdk)** — Dependency-free Go client for TypeSafe AI's System One API and the Jev model  
  <sub>0 stars · Go · Apache-2.0 · updated 2026-09-20</sub>
- **[akhilsbehl/pie-jev](https://github.com/akhilsbehl/pie-jev)** — Standalone JEV client library and Pi extension exposing askJev and ask_jev  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[angribot/pi-jev](https://github.com/angribot/pi-jev)** — Single-file pi extension for batched TypeSafe Jev judgments  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[Bechi29/jev-dify-tool-plugin](https://github.com/Bechi29/jev-dify-tool-plugin)** — Dify Tool plugin for TypeSafe System One (Jev) typed decisions.  
  <sub>0 stars · Python · updated 2026-09-20</sub>
- **[BILLKISHORE/opensysone](https://github.com/BILLKISHORE/opensysone)** — Open System One model for Apple Silicon: typed decisions with calibrated probabilities from one forward pass.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[blazskufca/typesafe-sdk-go](https://github.com/blazskufca/typesafe-sdk-go)** — Community SDK for Typesafe.ai in Go  
  <sub>0 stars · Go · MIT · updated 2026-09-19</sub>
- **[clankagent/pi-jev](https://github.com/clankagent/pi-jev)** — Jev-powered semantic process conditions and skill suggestions for Pi  
  <sub>0 stars · TypeScript · Unlicense · updated 2026-09-17</sub>
- **[Clueless-Creations/jev-ios-ultrafast](https://github.com/Clueless-Creations/jev-ios-ultrafast)** — Run iOS Simulator goals with Jev, compare decision models, and replay every attempt. Python CLI and Brigade host wrapper.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[codegirl-007/typesafe-lua](https://github.com/codegirl-007/typesafe-lua)** — A port of the Typesafe Jev SDK from typescript to Lua  
  <sub>0 stars · Lua · updated 2026-09-20</sub>
- **[colinmcdermott/emoji-jev](https://github.com/colinmcdermott/emoji-jev)** — Emoji autocomplete at the speed of typing. TypeSafe AI Jev on a Whop-hosted TanStack Start app.  
  <sub>0 stars · TypeScript · updated 2026-09-17</sub>
- **[community-ports/typesafeai-sdk-rust-community](https://github.com/community-ports/typesafeai-sdk-rust-community)** — Community-built Rust SDK for the TypeSafe AI API (System One / Jev). A port of typesafe-sdk-python  
  <sub>0 stars · Rust · MIT · updated 2026-09-19</sub>
- **[Dillettant/jev-test](https://github.com/Dillettant/jev-test)** — Playground for TypeSafe's Jev System One model (Next.js)  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[EthanThatOneKid/zocomputer-jev](https://github.com/EthanThatOneKid/zocomputer-jev)** — A Zo skill for situational script writing and execution using Vercel AI Gateway and TypeSafe AI Jev.  
  <sub>0 stars · updated 2026-09-19</sub>
- **[filippos95/cybercab-jev](https://github.com/filippos95/cybercab-jev)** — Three.js robotaxi game where TypeSafe's Jev model makes the driving decisions  
  <sub>0 stars · JavaScript · updated 2026-09-17</sub>
- **[Fox-Islam/jev-bias-bench](https://github.com/Fox-Islam/jev-bias-bench)** — A benchmark for Jev's biases, built from people who differ in one attribute at a time.  
  <sub>0 stars · PHP · updated 2026-09-20</sub>
- **[GitHub30/OpenJev](https://github.com/GitHub30/OpenJev)** — Open-weight System One model (Jev-compatible): calibrated noul / choice / score decisions in one forward pass, no text generation. Works with TypeSafe's typesafe-sdk unchanged.  
  <sub>0 stars · Jupyter Notebook · MIT · updated 2026-09-20</sub>
- **[iammusham/jev-snake](https://github.com/iammusham/jev-snake)** — An experimental Snake environment where the game engine owns deterministic rules and TypeSafe AI's Jev makes the movement decision from structured state on every tick.  
  <sub>0 stars · Python · updated 2026-09-17</sub>
- **[IslamBaraka90/jev-typesafe-real-financial-use-cases](https://github.com/IslamBaraka90/jev-typesafe-real-financial-use-cases)** — Fifty real-world financial use cases for TypeSafe's Jev model: typed, structured LLM answers over ledgers, fraud, portfolios, trades and filings, each graded against data where the right answer is known.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[JabbaKadabra/JevDotNet](https://github.com/JabbaKadabra/JevDotNet)** — DotNet Wrapper for the Jev Model  
  <sub>0 stars · C# · MIT · updated 2026-09-19</sub>
- **[jkakar/typesafe-sdk-go](https://github.com/jkakar/typesafe-sdk-go)** — Go client for the TypeSafe AI API. Ask typed questions, get calibrated probabilities your code can act on — with a fake server to test against.  
  <sub>0 stars · Go · MIT · updated 2026-09-18</sub>
- **[jonesmelton/verdict](https://github.com/jonesmelton/verdict)** — ocaml sdk for typesafe.ai's jev model  
  <sub>0 stars · OCaml · MIT · updated 2026-09-18</sub>
- **[kaijia323/dsh-plugin-jev](https://github.com/kaijia323/dsh-plugin-jev)** — TypeSafe Jev (System One decision model) as a native jev_decide tool plugin for DeepSeek Harness  
  <sub>0 stars · HTML · MIT · updated 2026-09-18</sub>
- **[kazz187/jev-sdk-go](https://github.com/kazz187/jev-sdk-go)** — Go 1.27 client for TypeSafe AI's Jev (System One) API: typed questions, typed answers  
  <sub>0 stars · Go · MIT · updated 2026-09-17</sub>
- **[kyledickey/jev-go](https://github.com/kyledickey/jev-go)** — TypeSafe.ai Jev Go SDK  
  <sub>0 stars · MIT · updated 2026-09-19</sub>
- **[Menny1337/jev-lab](https://github.com/Menny1337/jev-lab)** — TypeScript experiments, evaluations, and latency benchmarks for TypeSafe's Jev model  
  <sub>0 stars · TypeScript · updated 2026-09-16</sub>
- **[mheers/typesafeai-systemone-jev-go](https://github.com/mheers/typesafeai-systemone-jev-go)** — Typed Go client for the TypeSafe System One API (Jev): structured questions and answers your code can act on. Community SDK, MIT.  
  <sub>0 stars · Go · MIT · updated 2026-09-19</sub>
- **[micic-mihajlo/jev-tool-runner](https://github.com/micic-mihajlo/jev-tool-runner)** — Jev selects developer tools; Codex handles code. MCP and Jev-first execution with measured benchmarks.  
  <sub>0 stars · JavaScript · updated 2026-09-18</sub>
- **[ngallodev-software/agent-workflow-typesafe-ai](https://github.com/ngallodev-software/agent-workflow-typesafe-ai)** — Optional TypeSafe AI/Jev advisory decision evidence for Agent-Workflow, without transferring lifecycle authority from deterministic orchestration.  
  <sub>0 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[Nibir1/typesafe-go](https://github.com/Nibir1/typesafe-go)** — Zero-dependency Go SDK for TypeSafe's System One API (Jev). Typed questions in, calibrated probabilities out with static analyzers that catch bad question design at build time, a decision layer, batching and caching. Not affiliated with TypeSafe AI.  
  <sub>0 stars · Go · Apache-2.0 · updated 2026-09-19</sub>
- **[nikotaronosuke/jev-voice-decision](https://github.com/nikotaronosuke/jev-voice-decision)** — Japanese speech → local STT → Jev typed decisions → deterministic actions.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[nitinnat/jev-gateway](https://github.com/nitinnat/jev-gateway)** — A small local HTTP service for TypeSafe AI's Jev through Vercel  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[RadixILS-Dev/typesafe-sdk-go](https://github.com/RadixILS-Dev/typesafe-sdk-go)** — A typesafe.ai client written in golang  
  <sub>0 stars · Go · MIT · updated 2026-09-18</sub>
- **[realdubb/jev-playground](https://github.com/realdubb/jev-playground)** — Playground for TypeSafe AI's Jev decision model: provider-agnostic AI SDK scripts, jev-filter CLI, GitHub pruner  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[reiswaffel78/jev-agent-toolkit](https://github.com/reiswaffel78/jev-agent-toolkit)** — Jev-first portable Agent Skill and optional MCP bridge for Claude Code, Codex, Cursor and compatible agents.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[sanmai/typesafe-ai-php](https://github.com/sanmai/typesafe-ai-php)** — Jev for PHP, TypeSafe AI PHP SDK  
  <sub>0 stars · PHP · Apache-2.0 · updated 2026-09-20</sub>
- **[Shubham510/typesafe-go](https://github.com/Shubham510/typesafe-go)** — Unofficial Go SDK for TypeSafe AI's System One API (Jev).  
  <sub>0 stars · Go · MIT · updated 2026-09-18</sub>
- **[smasato/jev-jp-address](https://github.com/smasato/jev-jp-address)** — Jev (TypeSafe) 性能評価プロジェクト — 日本郵便 KEN_ALL をマスタに、AI SDK 経由の Jev が住所のあいまい一致にどこまで使えるかを検証  
  <sub>0 stars · TypeScript · updated 2026-09-17</sub>
- **[thisisjorge/jev-control-room](https://github.com/thisisjorge/jev-control-room)** — A visual control room for typed AI evaluations, structured decision-making, and confidence-aware policy gating using Vercel AI SDK and TypeSafe Jev.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[uspraveen/Jev-Reranker](https://github.com/uspraveen/Jev-Reranker)** — A System-1 model based memory retrieval reranked using caliberated decision space instead of embeddings  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[vagmi/jevlite](https://github.com/vagmi/jevlite)** — An attemt to recreate jev model on top of gemma  
  <sub>0 stars · Python · updated 2026-09-20</sub>
- **[valksor/typesafe-sdk-go](https://github.com/valksor/typesafe-sdk-go)** — Unofficial Go SDK for the TypeSafe AI System One API — 1:1 parity with the official JS and Python SDKs. Not affiliated with TypeSafe AI.  
  <sub>0 stars · Go · MIT · updated 2026-09-19</sub>
- **[valksor/typesafe-sdk-php](https://github.com/valksor/typesafe-sdk-php)** — Unofficial PHP SDK for the TypeSafe AI System One API — 1:1 parity with the official JS and Python SDKs. Not affiliated with TypeSafe AI.  
  <sub>0 stars · PHP · MIT · updated 2026-09-19</sub>

### Framework integrations

- **[erendikmenn/jev-rag-benchmark](https://github.com/erendikmenn/jev-rag-benchmark)** — Reproducible benchmark for measuring Jev reranking quality, latency, and cost in RAG  
  <sub>6 stars · Python · MIT · updated 2026-09-19</sub>
- **[WiktorB2004/llama-index-jev](https://github.com/WiktorB2004/llama-index-jev)** — LlamaIndex reranker + router powered by TypeSafe Jev — typed scores/choices, cheaper than LLM-as-judge.  
  <sub>3 stars · Python · MIT · updated 2026-09-18</sub>
- **[EmreKaplaner/rag-jev](https://github.com/EmreKaplaner/rag-jev)** — Make room for useful evidence. Inspectable context selection for RAG, with Jev reranking and open benchmark studies.  
  <sub>2 stars · Python · MIT · updated 2026-09-19</sub>
- **[edwardyen724-g/jev-compactor](https://github.com/edwardyen724-g/jev-compactor)** — Context compaction and safety gating for AI agents via TypeSafe Jev: keeps messages verbatim, no summarization. OpenAI, Anthropic, LangChain, CLI, MCP.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[ThiagaoBR/typesafe_agent_gates](https://github.com/ThiagaoBR/typesafe_agent_gates)** — LangChain / Deep Agents middleware that uses TypeSafe's System One model (Jev) for typed judgments in unattended coding agents: a shell-command gate (database, production, destructive, secrets), issue triage and routing by severity and urgency, merge-request detection, and review of weakened tests. Measured with live probes.  
  <sub>1 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[jms-dcksn/jev-pii-guardrail](https://github.com/jms-dcksn/jev-pii-guardrail)** — A UiPath coded agent with a custom PII detection guardrail on the LLM boundary, built on the TypeSafe Jev model as a LangChain awrap_model_call middleware.  
  <sub>0 stars · Python · updated 2026-09-18</sub>
- **[leepokai/llm-prompt-techniques-on-jev](https://github.com/leepokai/llm-prompt-techniques-on-jev)** — Chain-of-thought and self-refinement for TypeSafe's Jev: feed its typed answers back as state and ask again. Benchmarks vs TypeSafe's own cookbook numbers.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>

### Evaluation and judging

- **[NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review)** — Local-first MCP plugin for continuous software-quality review by AI coding agents, powered by Jev.  
  <sub>172 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[y0usaf/pi-jev](https://github.com/y0usaf/pi-jev)** — TypeSafe Jev as a decision layer for the Pi coding agent: a measured tool-call gate plus jev_ask for typed, calibrated answers  
  <sub>97 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[BillionsBobby/JevRouter](https://github.com/BillionsBobby/JevRouter)** — A lightweight Jev-powered router for models, tools, and subagents  
  <sub>96 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[Heman10x-NGU/openJev-verdict-2.0](https://github.com/Heman10x-NGU/openJev-verdict-2.0)** — Calibrated 151M Non-Autoregressive Decision Engine beating TypeSafe Jev & Laya on LocalLLaMA/typed-decisions (77.10% acc, 0.0636 Brier, 0.0144 ECE)  
  <sub>95 stars · Python · updated 2026-09-19</sub>
- **[ChetasLua/jevmeter](https://github.com/ChetasLua/jevmeter)** — Put a live Jev (TypeSafe) meter on any video: every sentence scored, rendered as a 16:9 edit  
  <sub>70 stars · Python · MIT · updated 2026-09-17</sub>
- **[daseinlabs/open-jev](https://github.com/daseinlabs/open-jev)** — Open Jev implementation with custom finetuning  
  <sub>61 stars · Python · updated 2026-09-19</sub>
- **[realZachi/typesafe-adblock](https://github.com/realZachi/typesafe-adblock)** — 🧹 Fun project: a Chrome extension that asks a tiny AI decision model (TypeSafe Jev) "is this DOM element an ad?" and pops it off the page. BYOK, no backend, not a real ad blocker.  
  <sub>58 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[kbhuw/jev-sift](https://github.com/kbhuw/jev-sift)** — Classify first. Read selectively. A portable agent plugin and MCP tool for batch text classification.  
  <sub>46 stars · JavaScript · updated 2026-09-18</sub>
- **[shantanugoel/ask-jev-skill](https://github.com/shantanugoel/ask-jev-skill)** — Skill for Hermes, and other agents, to ask typesafe's jev  
  <sub>34 stars · Python · MIT · updated 2026-09-17</sub>
- **[Heman10x-NGU/Verdict-open-jev](https://github.com/Heman10x-NGU/Verdict-open-jev)** — Non-autoregressive decision engine on ModernBERT (151M) with calibrated uncertainty (RLCD), TypeSafe AI Jev benchmark audit, and in-browser WebGPU playground  
  <sub>29 stars · Python · updated 2026-09-18</sub>
- **[GhalebDweikat/winnow](https://github.com/GhalebDweikat/winnow)** — A calibrated context sieve for Claude Code: every tool result is judged by a System One model before it enters context.  
  <sub>26 stars · Python · MIT · updated 2026-09-19</sub>
- **[myc0576/SmartMoney-Cub](https://github.com/myc0576/SmartMoney-Cub)** — Read-only trading journal and review harness: Jev typed judgments, agent integration, and a reproducible finance benchmark. No orders, no advice.  
  <sub>24 stars · Python · MIT · updated 2026-09-20</sub>
- **[monteduro/killmyidea](https://github.com/monteduro/killmyidea)** — Describe your startup idea. Jev decides: kill it, fix it or ship it.  
  <sub>21 stars · TypeScript · updated 2026-09-18</sub>
- **[rorshopping/jev-on-a-laptop](https://github.com/rorshopping/jev-on-a-laptop)** — Unofficial study: Jev-style parallel typed decisions on stock 1.5B-8B models on an Apple Silicon laptop. Benchmarks, research notes, and a Hugging Face Space demo.  
  <sub>19 stars · Python · updated 2026-09-17</sub>
- **[Zaious/jev-capability-atlas](https://github.com/Zaious/jev-capability-atlas)** — Independent, evidence-based map of when TypeSafe's Jev actually holds up vs. breaks down — real API-call receipts, not a leaderboard. 中文為主的雙語 repo。  
  <sub>19 stars · Python · updated 2026-09-20</sub>
- **[compozy/yoshi](https://github.com/compozy/yoshi)** — Context-pruning proxy for Claude Code and Codex: Jev judges which history is still needed, measured not claimed. POC here now, heading soon into https://github.com/compozy/compozy  
  <sub>18 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[DevMortimer/pi-typesafe](https://github.com/DevMortimer/pi-typesafe)** — TypeSafe decisions for Pi: batched evaluation tool, terminal playground, and typed API for extension authors  
  <sub>18 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[phyous/tsai-sc](https://github.com/phyous/tsai-sc)** — TypeSafe Jev controls original StarCraft shareware through keyboard and mouse with recorded action probabilities.  
  <sub>17 stars · Python · MIT · updated 2026-09-16</sub>
- **[ikermoel/open-alternative-jev](https://github.com/ikermoel/open-alternative-jev)** — Open-source alternative to TypeSafe's Jev: a System One style model layer that gives typed, calibrated decisions from any open-weights LLM in one forward pass (HF + vLLM), with honest benchmarks  
  <sub>16 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[mithalouni/system-one-open](https://github.com/mithalouni/system-one-open)** — Open replica of TypeSafe's Jev: typed calibrated decisions in one forward pass, on Gemma 4 E2B / Gemma 3 270M (Modal)  
  <sub>14 stars · Python · updated 2026-09-17</sub>
- **[danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge)** — Using Jev as an evaluator.  
  <sub>13 stars · Python · updated 2026-09-19</sub>
- **[jcpsimmons/jev-macos-loop](https://github.com/jcpsimmons/jev-macos-loop)** — Open-source macOS AI computer use and native GUI automation on Apple silicon. Jev + OmniParser CoreML + Apple Vision OCR. Bring your own OpenRouter, Vercel AI Gateway, or TypesafeAI token.  
  <sub>13 stars · JavaScript · AGPL-3.0 · updated 2026-09-18</sub>
- **[AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks)** — Probability-aware evaluation for typed decision models: calibration, selective risk, latency, and reproducible benchmarks.  
  <sub>11 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[madeye/pi-jev](https://github.com/madeye/pi-jev)** — Jev-assisted file retrieval and request caching for faster Pi workflows  
  <sub>10 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[Twister915/typesafe-ai](https://github.com/Twister915/typesafe-ai)** — Typed TypeSafe AI clients for Rust, with async and blocking backends and observable retries.  
  <sub>10 stars · Rust · Apache-2.0 · updated 2026-09-16</sub>
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
- **[y0usaf/jev-lm](https://github.com/y0usaf/jev-lm)** — A word-level language model whose output layer is Jev: n-gram drafter, Noul chunk verification, bits-per-token eval  
  <sub>5 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[AkashPriyadarshii/jev-curate](https://github.com/AkashPriyadarshii/jev-curate)** — High-throughput synthetic & pretraining dataset sifter powered by TypeSafe AI Jev (api.typesafe.ai). Stream, filter, and score Parquet & JSONL datasets at 1,500+ rows/sec using System One typed decisions (Choice, Score, Noul).  
  <sub>4 stars · Rust · MIT · updated 2026-09-18</sub>
- **[Astro-Han/jev-harness](https://github.com/Astro-Han/jev-harness)** — A coding agent that filters every tool result through Jev before the model sees it, with an A/B harness measuring pass@1 and cost against the unfiltered control  
  <sub>4 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[caiovicentino/jev-align](https://github.com/caiovicentino/jev-align)** — Calibrated alignment verifier for LLM responses and agent plans — powered by Jev  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[docxology/daf-jev](https://github.com/docxology/daf-jev)** — daf-jev: composable Python toolkit for TypeSafe's Jev (System One) decision API — question builders, confidence gates, evaluator, calibration, CLI, MCP server, agent skill  
  <sub>4 stars · Python · MIT · updated 2026-09-18</sub>
- **[doeixd/jev-pref](https://github.com/doeixd/jev-pref)** — Turn your AGENTS.md preferences into a fast, Jev-powered AI linter.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[gemanor/jev-code-review-benchmark](https://github.com/gemanor/jev-code-review-benchmark)** — Comparing Jev, Gemini Flash, and Claude Fable on Python code review rules: cost, speed, accuracy, and consistency. Includes results, charts, and reproducible experiments.  
  <sub>4 stars · Python · MIT · updated 2026-09-17</sub>
- **[RahulBalakavi/claude-code-jev](https://github.com/RahulBalakavi/claude-code-jev)** — Experimental Jev permission gate for Claude Code via OpenRouter, with reproducible latency and cost benchmarks  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[zeeshan8281/slo-router](https://github.com/zeeshan8281/slo-router)** — SLO-aware LLM inference router with Jev decisions, live queue metrics, counterfactual evaluation, and reproducible latency/cost benchmarks  
  <sub>4 stars · Python · updated 2026-09-19</sub>
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
- **[pumpkinredbean/bside](https://github.com/pumpkinredbean/bside)** — No description provided.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[shaharia-lab/jev-cli](https://github.com/shaharia-lab/jev-cli)** — Interact with "Jev" model from TypeSafe AI  
  <sub>3 stars · Rust · Apache-2.0 · updated 2026-09-20</sub>
- **[antiyro/jevdroid](https://github.com/antiyro/jevdroid)** — A typed Python framework for controlling Android over ADB with Jev.  
  <sub>2 stars · Python · MIT · updated 2026-09-19</sub>
- **[Code-Forge-AU/jev-llm](https://github.com/Code-Forge-AU/jev-llm)** — No description provided.  
  <sub>2 stars · Python · updated 2026-09-17</sub>
- **[FFatTiger/new-api-plugin-typesafe](https://github.com/FFatTiger/new-api-plugin-typesafe)** — TypeSafe AI System One (Jev) task plugin for QuantumNous/new-api — native /v1/systemone, synchronous evaluation, token billing  
  <sub>2 stars · JavaScript · Apache-2.0 · updated 2026-09-18</sub>
- **[florian-hoenicke/jev-gpt](https://github.com/florian-hoenicke/jev-gpt)** — Text generation with jev: one typed question per word  
  <sub>2 stars · Python · updated 2026-09-19</sub>
- **[Gaurav-Gosain/jev-sec-bench](https://github.com/Gaurav-Gosain/jev-sec-bench)** — Blind security benchmarks for Jev, TypeSafe's System One model: prompt injection and vulnerable code detection, built on jev-go  
  <sub>2 stars · Go · MIT · updated 2026-09-16</sub>
- **[hamakyo/jev-starter](https://github.com/hamakyo/jev-starter)** — Typed, policy-driven decision workflows on top of TypeSafe AI Jev: confidence routing, fallbacks, evaluation, and RAG patterns for TypeScript apps.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[kevinpita/pi-jev-context](https://github.com/kevinpita/pi-jev-context)** — Reversible context pruning for Pi, powered by TypeSafe Jev. Keep useful context without deleting session history.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[Kushwho/jev-codes](https://github.com/Kushwho/jev-codes)** — Audit your git diff against YAML coding-standards packs using TypeSafe's Jev model, from a CLI or your AI agent's command/skill.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[maker-KK/todo-jev](https://github.com/maker-KK/todo-jev)** — ⚡ Ultra-fast, low-cost intelligent task classifier and 3-tier routing engine powered by TypeSafe Jev (System One)  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[miniLV/Jev-Auto-Router](https://github.com/miniLV/Jev-Auto-Router)** — Codex 可恢复委派：Capsule → Jev 选路 → Policy Guard（仅 ALLOW/DENY）→ Root 验收。自动委派默认关闭。Recoverable Codex delegation via Jev + Policy Guard; Root keeps acceptance.  
  <sub>2 stars · TypeScript · Apache-2.0 · updated 2026-09-19</sub>
- **[rongxinzy/LightJev](https://github.com/rongxinzy/LightJev)** — Train lightweight language backbones for typed decisions and candidate probabilities. CE/Brier training, evaluation, and an offline end-to-end demo.  
  <sub>2 stars · Python · Apache-2.0 · updated 2026-09-18</sub>
- **[ShivamPansuriya/jev-skill-gate](https://github.com/ShivamPansuriya/jev-skill-gate)** — Cut Claude Code's skill manifest by ~75% with TypeSafe Jev. Scores every installed skill for relevance and hides the rest via skillOverrides — 12,750 → 3,185 tokens on a 217-skill install, for $0.0009 a session.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[sightmap/jev-turbo](https://github.com/sightmap/jev-turbo)** — Jev-powered semantic browser use  
  <sub>2 stars · Go · MIT · updated 2026-09-20</sub>
- **[sysadarsh/zerosweep](https://github.com/sysadarsh/zerosweep)** — Autonomous System-One Triage Engine & Benchmark powered by TypeSafe AI (Jev). 75ms inference, $0 output tokens, and RLCD epistemic safety gates.  
  <sub>2 stars · TypeScript · updated 2026-09-18</sub>
- **[TypeSafeAI/clarity-judge](https://github.com/TypeSafeAI/clarity-judge)** — Multi-axis writing quality checker powered by TypeSafe AI's Jev model. Separate named checks, each with its own verdict and confidence.  
  <sub>2 stars · TypeScript · updated 2026-09-20</sub>
- **[az9713/jev-model-router](https://github.com/az9713/jev-model-router)** — Jev (TypeSafe) model router on the Vercel AI Gateway  
  <sub>1 stars · JavaScript · updated 2026-09-20</sub>
- **[brnyxx/jev-ra](https://github.com/brnyxx/jev-ra)** — Browser use for coding agents, 3-5x faster than browser-use. MCP server + CLI; TypeSafe Jev decides every step in ~300 ms.  
  <sub>1 stars · Python · MIT · updated 2026-09-18</sub>
- **[BYK/jev-mcp](https://github.com/BYK/jev-mcp)** — An eval-first MCP server for TypeSafe's Jev, a System One model that returns typed judgments (noul, choice, score) with probabilities instead of generated text.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[choxos/jevchess](https://github.com/choxos/jevchess)** — Jev, TypeSafe's System One model, plays chess against any OpenRouter LLM, Stockfish and you. One-page web app with live moves, Jev's move probabilities, saved games and win rates.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[connectedGraph/claude-jev-warden](https://github.com/connectedGraph/claude-jev-warden)** — Real-time quality gate and Art Director Warden for Claude Code powered by TypeSafe Jev 1.13 non-autoregressive decision model  
  <sub>1 stars · HTML · MIT · updated 2026-09-19</sub>
- **[copyleftdev/jev-labs](https://github.com/copyleftdev/jev-labs)** — Never confidently wrong: a TLA+-verified consensus kernel around TypeSafe's Jev, run through 1,680 chaos-tested pharmacy decisions with zero wrong verdicts. Film, code, and every captured call.  
  <sub>1 stars · Python · MIT · updated 2026-09-19</sub>
- **[Dharundp6/jev-carryforward](https://github.com/Dharundp6/jev-carryforward)** — What your last session knew, scored against what this one is doing. MCP server: a per-project ledger written as things happen, recalled per task with TypeSafe's Jev evaluation model via Vercel AI Gateway.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[hemanth/jev-chess](https://github.com/hemanth/jev-chess)** — Chess moves, evaluations, persona opponents, and game classification with TypeSafe AI System One  
  <sub>1 stars · TypeScript · updated 2026-09-19</sub>
- **[Icohen007/jev-play-ping-pong](https://github.com/Icohen007/jev-play-ping-pong)** — Jev plays browser table tennis in real time: structured telemetry, typed decisions, ordinary Chrome inputs, and auditable evidence.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[JayDoubleu/cc-mod-jev](https://github.com/JayDoubleu/cc-mod-jev)** — Claude Code mod: Jev-scored context pruning through OpenRouter. Verbatim compaction, an optional gate on oversized tool outputs, tests and evals.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jiangkoumo/ego-jev](https://github.com/jiangkoumo/ego-jev)** — Drive the ego lite browser with Jev (TypeSafe System One): one indexed element table in, one operation + target out, single process. ~2x faster than a per-step LLM loop in our measurements.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[jtsang4/jev-cli](https://github.com/jtsang4/jev-cli)** — CLI for TypeSafe AI's Jev evaluation model — typed questions in, structured JSON answers out  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[llt22/jev-lab](https://github.com/llt22/jev-lab)** — Hands-on research lab for TypeSafe's Jev (System One model): reproducible benchmarks of Noul/Choice/Score primitives, confidence gating, fan-out latency, agent control — plus a living audit of the Jev ecosystem.  
  <sub>1 stars · Python · updated 2026-09-20</sub>
- **[lmvdz/rpg-jev](https://github.com/lmvdz/rpg-jev)** — A living-world RPG whose NPCs are decided by TypeSafe's Jev judge model; code owns rules, numbers and state.  
  <sub>1 stars · TypeScript · updated 2026-09-20</sub>
- **[lucianfialho/jev-model-router](https://github.com/lucianfialho/jev-model-router)** — Cost-optimized OpenRouter model router using TypeSafe's Jev, with a live full-catalog scorer instead of a hardcoded model list  
  <sub>1 stars · Python · MIT · updated 2026-09-19</sub>
- **[Mandrilsquad1441/jev-model-router](https://github.com/Mandrilsquad1441/jev-model-router)** — Pick the best AI model and reasoning effort for any task in ~1s. Plugin for Claude Code, Claude Desktop and Codex, powered by TypeSafe's Jev decision model and live OpenRouter pricing. Balance intelligence, speed and cost, or choose your priority.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[markjaquith/typesafe-ai-playground](https://github.com/markjaquith/typesafe-ai-playground)** — A playground for experiments around Jev, TypeSafe's System One model.  
  <sub>1 stars · Rust · MIT · updated 2026-09-18</sub>
- **[naveenreddy61/jev-experiments](https://github.com/naveenreddy61/jev-experiments)** — experiments with system one model jev  
  <sub>1 stars · Python · updated 2026-09-19</sub>
- **[omni-/ask-jev](https://github.com/omni-/ask-jev)** — Utilizing Jev, the RLCD-type model provided by TypeSafe AI, to independently and cheaply judge agentic coding sessions.  
  <sub>1 stars · PowerShell · MIT · updated 2026-09-16</sub>
- **[perixtar/jev-e2e](https://github.com/perixtar/jev-e2e)** — Natural-language end-to-end tests for web apps, powered by Jev and Playwright.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[poponline63/hermes-jev-north-star](https://github.com/poponline63/hermes-jev-north-star)** — Hermes Agent skill whose north-star gate is judged by Jev (TypeSafe System One): turn an intention into a checkable finish line, generate the run prompt, and let Jev rank what is still unproven.  
  <sub>1 stars · Python · MIT · updated 2026-09-18</sub>
- **[Ravinder82/jev-flash-router](https://github.com/Ravinder82/jev-flash-router)** — open-sourced jev-flash-router: an MCP server for TypeSafe's new Jev model.  AI coding agents waste hundreds of reasoning tokens just deciding which file to edit, which route to pick, or whether a diff breaks tests.  Jev evaluates state and outputs calibrated probabilities.  Works with Cursor, Windsurf, & Claude Code  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[siddicky/omp-typesafe](https://github.com/siddicky/omp-typesafe)** — TypeSafe AI (Jev) adversarial reviewer and typesafe_ask tool for the omp coding agent  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[simxnherrera/jevr](https://github.com/simxnherrera/jevr)** — A native R client for Jev System 1 model decisions  
  <sub>1 stars · R · updated 2026-09-20</sub>
- **[TokenTrim/jev-agent-failure-benchmark](https://github.com/TokenTrim/jev-agent-failure-benchmark)** — Benchmarking Jev (Typesafe.ai) against a strong LLM on the Who&When Pro agent-failure-attribution benchmark (text subset).  
  <sub>1 stars · Python · Apache-2.0 · updated 2026-09-17</sub>
- **[Wang-auspicious/pi-jev-compaction](https://github.com/Wang-auspicious/pi-jev-compaction)** — Jev-powered context compaction for Pi. Keep critical instructions and tool history, prune the noise, and fall back gracefully.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[zerodegress/jevinf](https://github.com/zerodegress/jevinf)** — Jev-like model inference engine + Jev-compatible API  
  <sub>1 stars · Python · MIT · updated 2026-09-20</sub>
- **[Adilmp/does-jev-confidence-mean-anything](https://github.com/Adilmp/does-jev-confidence-mean-anything)** — A calibration audit of TypeSafe's Jev: does a decision model's stated confidence mean what it claims? 8,000 judgments against human annotations, $0.05.  
  <sub>0 stars · Python · updated 2026-09-19</sub>
- **[adiun/clinical-trial-screener](https://github.com/adiun/clinical-trial-screener)** — Testing out Jev / System One model for a health use case  
  <sub>0 stars · TypeScript · updated 2026-09-18</sub>
- **[AiPersonacademy/apa-agent-harness](https://github.com/AiPersonacademy/apa-agent-harness)** — Production Agent Decision Harness for TypeSafe Jev & System One models — confidence-gated policy routing, shadow mode, and trajectory verification  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[AIPI-mvoronovych/JEVBenchmark-Contradiction-Detection](https://github.com/AIPI-mvoronovych/JEVBenchmark-Contradiction-Detection)** — Checking JEV's Contradiction detection (Model by TypeSafe.AI)  
  <sub>0 stars · Python · updated 2026-09-17</sub>
- **[alviso/jev-precheck](https://github.com/alviso/jev-precheck)** — A second signature on every write an AI agent makes into a system of record. MCP proxy: fetch the records, derive in code, Jev judges. 98.6% recall, 0 false holds on 288 cases.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[andreaserradev-gbj/jev-access-day](https://github.com/andreaserradev-gbj/jev-access-day)** — A learning scaffold for TypeSafe AI's System One models: eval harness plus a measured, plain-language comparison of the Jev decision model vs an LLM stand-in on 24 real operational decisions. All numbers reproducible from committed run files.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[angelgalvisc/snake-arena-jev-vs-llms](https://github.com/angelgalvisc/snake-arena-jev-vs-llms)** — How many decisions can a model make in a minute, and what do they cost? Jev, a System One decision model, raced against six LLMs on the same Snake boards.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[aniruddh-krovvidi/switchboard](https://github.com/aniruddh-krovvidi/switchboard)** — Guardrail + model router for LLM gateways on TypeSafe's Jev (System One model), with an independent accuracy/calibration/latency evaluation. Stdlib Python.  
  <sub>0 stars · Python · updated 2026-09-17</sub>
- **[AStheTECH/mewcp-jev](https://github.com/AStheTECH/mewcp-jev)** — JEV MCP server by MewCP  
  <sub>0 stars · Python · Apache-2.0 · updated 2026-09-18</sub>
- **[az9713/jev-email-triage](https://github.com/az9713/jev-email-triage)** — Email triage with Jev (TypeSafe) over the Vercel AI Gateway  
  <sub>0 stars · JavaScript · updated 2026-09-20</sub>
- **[Barba-Tech-CO/jev-claude-skill](https://github.com/Barba-Tech-CO/jev-claude-skill)** — Claude Code skill for TypeSafe's Jev decision model — typed decisions via TypeSafe, Vercel AI Gateway or OpenRouter  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[Bravim-Ketan-Purohit/jev-city](https://github.com/Bravim-Ketan-Purohit/jev-city)** — A traffic city where every car is driven by TypeSafe's Jev model, benchmarked against a rule-based driver.  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[BUNYOD0987/jev-vs-llm](https://github.com/BUNYOD0987/jev-vs-llm)** — TypeSafe AI's Jev vs GPT-5.6 Luna vs Claude Sonnet 5 on support-ticket triage (Vercel AI Gateway)  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[clduab11/jev-test](https://github.com/clduab11/jev-test)** — Pre-registered benchmark: can a 2B local model (Gemma 4 E2B) answer web questions without making things up when a decision model (TypeSafe Jev) makes every call? SearXNG for search, MemPalace for verbatim memory, seven arms including open local judges. Spec and thresholds fixed before any run.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[cmartinez9/jev-judge-bench](https://github.com/cmartinez9/jev-judge-bench)** — Binary LLM-judge bench — compare Jev (TypeSafe System One) against a frontier LLM judge on speed, cost, and agreement with human labels.  
  <sub>0 stars · updated 2026-09-18</sub>
- **[codebam/jev-guardrails](https://github.com/codebam/jev-guardrails)** — Jev-backed guardrails for agent tool calls: library, native OpenCode/Hermes/DeepSeek Harness hooks, and a hosted eval-credit service.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[dairui1/jev-lab](https://github.com/dairui1/jev-lab)** — Experiments with TypeSafe's Jev: triage benchmark vs LLM, and a source study of jev-ultrafast vs Cline's jev-browser  
  <sub>0 stars · HTML · updated 2026-09-19</sub>
- **[denikuchero/jev-chess-lab](https://github.com/denikuchero/jev-chess-lab)** — Jev chess experiments: independent decisions vs tactical and Stockfish assistance, with full traces and video replays  
  <sub>0 stars · Python · GPL-3.0 · updated 2026-09-18</sub>
- **[Dharundp6/jev-sortwell](https://github.com/Dharundp6/jev-sortwell)** — An inbox with judgment. MCP server that files every note, link and meeting line by itself: TypeSafe's Jev decides the kind, the project, the urgency and the duplicates, and your text is never rewritten.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[eylexlive/jev-drive](https://github.com/eylexlive/jev-drive)** — A 3D driving simulator where Jev, TypeSafe's decision model, chooses what the car does. Code eye or Gemini camera eye, code reflexes, an evaluation harness.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[felixfisher/pi-jev-compaction](https://github.com/felixfisher/pi-jev-compaction)** — Experimental Pi extension using TypeSafe Jev for auditable tool-history compaction  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[hamakyo/jev-mahjong-bench](https://github.com/hamakyo/jev-mahjong-bench)** — Reproducible riichi mahjong benchmark for Jev, GPT, Mortal, and hybrid agents using MJAI and RiichiEnv.  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[hari007sh/jev](https://github.com/hari007sh/jev)** — Local System One model: typed decisions plus a voice computer-use agent.  
  <sub>0 stars · Python · updated 2026-09-19</sub>
- **[hide-G/magi-system-on-jev](https://github.com/hide-G/magi-system-on-jev)** — MAGI system (Neon Genesis Evangelion) recreated with Jev, TypeSafe AI's System One model. 3 sages deliberate your question.  
  <sub>0 stars · JavaScript · updated 2026-09-18</sub>
- **[Hol1kgmg/jev-trpg](https://github.com/Hol1kgmg/jev-trpg)** — jev aiを使ったショートTRPG  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[hugo-alves/jev-router-playground](https://github.com/hugo-alves/jev-router-playground)** — Interactive playground for testing Jev model-routing decisions against OpenRouter models  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[ickas/battleship-vs-jev](https://github.com/ickas/battleship-vs-jev)** — A 60-game benchmark of TypeSafe's Jev evaluation model playing Battleship. The model matches plain code; it does not beat it.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[ickma2311/jev-baselines-eval](https://github.com/ickma2311/jev-baselines-eval)** — Pre-registered independent eval of TypeSafe Jev against a nano-class LLM, a frontier LLM, and a supervised encoder (Banking77 + CLINC150 zero-shot)  
  <sub>0 stars · Python · MIT · updated 2026-09-18</sub>
- **[integralmarketingmx/jev-latam-lead-triage](https://github.com/integralmarketingmx/jev-latam-lead-triage)** — Triage de leads de WhatsApp/CRM con Jev (TypeSafe AI): ruteo por confianza, plantilla n8n y benchmark en español. Sin dependencias. No afiliado.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[intikhab49/open-jev-typed-decision-engine](https://github.com/intikhab49/open-jev-typed-decision-engine)** — Open reproduction of TypeSafe Jev: a 150M typed decision engine (noul/choice/score in one non-autoregressive pass, calibrated confidence). 0.697 vs Jev's 0.727, 2.5x better calibrated, 4x faster, free. Trains on a Colab T4 in 30 min.  
  <sub>0 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[JacobLinCool/jev-paper-judge](https://github.com/JacobLinCool/jev-paper-judge)** — Feedback on your paper in seconds.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[javiergradiche/ruby_llm-providers-typesafe](https://github.com/javiergradiche/ruby_llm-providers-typesafe)** — TypeSafe System One models (Jev) for RubyLLM: typed judgments, evaluations and reranking.  
  <sub>0 stars · Ruby · MIT · updated 2026-09-18</sub>
- **[jeiel85/jevscope](https://github.com/jeiel85/jevscope)** — Local-first visual decision debugger and regression testbench for TypeSafe AI Jev  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[jms-dcksn/uipath-jev-guardrail-connector](https://github.com/jms-dcksn/uipath-jev-guardrail-connector)** — UiPath bring-your-own-guardrail connector backed by the TypeSafe Jev System One model: plain-language agent policies enforced as calibrated probabilities.  
  <sub>0 stars · JavaScript · updated 2026-09-18</sub>
- **[manjunathshiva/jev-frontier-bench](https://github.com/manjunathshiva/jev-frontier-bench)** — TypeSafe Jev 1.13 vs Claude Fable 5.1, GPT-6 Astra, Kimi K3, MiniMax M3 and DeepSeek V4.1 Flash on 200 typed decisions: accuracy, calibration, agreement with 100 human annotators, latency and cost  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[matu79go/jev-hanko](https://github.com/matu79go/jev-hanko)** — 判断特化AI Jev に契約書の41項目チェックをさせ、速くて安いLLMと実測比較 / Measuring TypeSafe's Jev on 41-clause contract review vs fast LLMs  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[misaalya/snbt-jev-bench](https://github.com/misaalya/snbt-jev-bench)** — Jev on Indonesia's SNBT 2025 university entrance test: 159 questions, seven subtests, audited answer keys.  
  <sub>0 stars · Python · updated 2026-09-18</sub>
- **[mjyoke1111/jev-lab](https://github.com/mjyoke1111/jev-lab)** — Real browser-agent safety evaluation: Jev versus a baseline on benign and injected tasks  
  <sub>0 stars · TypeScript · updated 2026-09-20</sub>
- **[momomo-agent/judge-vm-web](https://github.com/momomo-agent/judge-vm-web)** — Judge VM Playground — a probabilistic computing runtime with JASM assembly language, backed by TypeSafe AI Jev  
  <sub>0 stars · JavaScript · updated 2026-09-20</sub>
- **[MoonTory/jev-snake](https://github.com/MoonTory/jev-snake)** — TypeSafe's Jev model plays Snake live in the browser, with a headless eval and a self-improvement loop  
  <sub>0 stars · TypeScript · updated 2026-09-17</sub>
- **[MrDiamondBallz/jev-agent-integration](https://github.com/MrDiamondBallz/jev-agent-integration)** — Provider-neutral Jev decision primitives for AI agents, with a native Hermes plugin and portable Agent Skill.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[ogamircs/jev-demo](https://github.com/ogamircs/jev-demo)** — Independent demo of TypeSafe's Jev model: typed decisions with probabilities, measured side by side with OpenAI on support-ticket triage. Live local app plus a recorded replay page.  
  <sub>0 stars · HTML · updated 2026-09-20</sub>
- **[ordepas/system1-fraud-interceptor-demo](https://github.com/ordepas/system1-fraud-interceptor-demo)** — Demo de un interceptor de fraude simulado que compara en paralelo un modelo Sistema 1 (Jev, TypeSafe AI) con un LLM (Gemini) sobre transacciones sintéticas: velocidad, costo por llamada y decisiones. Proyecto personal de experimentación, no es un benchmark.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[planstack-ai/jev-tetris-benchmark](https://github.com/planstack-ai/jev-tetris-benchmark)** — Reproducible Tetris decision benchmark comparing TypeSafe Jev with Claude Haiku  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[pZacca/askjev](https://github.com/pZacca/askjev)** — Unofficial MCP server for Jev (Typesafe AI)  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[rashedInt32/jev-lens.nvim](https://github.com/rashedInt32/jev-lens.nvim)** — Neovim popup for jev-lens verdicts: do I need to look, which files, strip the debris  
  <sub>0 stars · Lua · MIT · updated 2026-09-20</sub>
- **[rmwahid/jev-cordhub](https://github.com/rmwahid/jev-cordhub)** — Ask a private Discord channel's pile of GitHub bookmarks in plain language. Jev judges what each repository is for, how it is consumed and how ready it is, then ranks the whole catalogue per question with a relevance figure and a separate confidence figure.  
  <sub>0 stars · TypeScript · updated 2026-09-20</sub>
- **[robipop22/Jev-is-odd](https://github.com/robipop22/Jev-is-odd)** — Ask Jev by TypeSafe AI whether a number is odd. TypeScript, real token usage, and latency benchmarks.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[robokrunch/jev-physical-ai](https://github.com/robokrunch/jev-physical-ai)** — Putting TypeSafe's Jev to work on robots, fleets, and edge hardware — real measured numbers, honestly caveated.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[robwent/jev-tic-tac-toe](https://github.com/robwent/jev-tic-tac-toe)** — Noughts and crosses against TypeSafe's Jev model, with every move checked against a perfect solver. Shows how board format and question wording change its decisions.  
  <sub>0 stars · PHP · MIT · updated 2026-09-19</sub>
- **[russfranky/jev-crawlers](https://github.com/russfranky/jev-crawlers)** — Recursive bug-discovery crawlers powered by Jev: Unix-style primitives (seed, expand, judge, verify, report) with per-node typed judgments from typesafe-ai/jev.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[sava-software/typesafe-client](https://github.com/sava-software/typesafe-client)** — Java client for the TypeSafe System One API (Jev): typed questions in, calibrated probabilities out  
  <sub>0 stars · Java · Apache-2.0 · updated 2026-09-18</sub>
- **[seb4ez/jevguard](https://github.com/seb4ez/jevguard)** — Deterministic decision runtime, zero-token caching, and certainty calibrator for TypeSafe AI (Jev).  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[shima78/cv-job-fit-scorer](https://github.com/shima78/cv-job-fit-scorer)** — JEV CV scorer / TypeSafe.ai  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[ShupingR/scam-shield](https://github.com/ShupingR/scam-shield)** — Scam text message filter powered by TypeSafe's Jev model  
  <sub>0 stars · TypeScript · updated 2026-09-13</sub>
- **[skylence-org/claudecode-jev-marketplace](https://github.com/skylence-org/claudecode-jev-marketplace)** — TypeSafe Jev (System One) wired into Claude Code: a decision primitive for hooks, and the Skylence herdr agent-org with Jev measuring tier and review gates.  
  <sub>0 stars · Shell · updated 2026-09-19</sub>
- **[softpudding/jev-frontier-100](https://github.com/softpudding/jev-frontier-100)** — 100 original tasks comparing Jev with Qwen3.5 0.8B, 2B and 4B across three reasoning budgets; reproducible results and token logprobs.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[themsquared/jev-benchmark](https://github.com/themsquared/jev-benchmark)** — Reproducible benchmark for TypeSafe AI's Jev on agent tool-call risk classification: accuracy, latency, and whether the confidence score is worth routing on.  
  <sub>0 stars · Python · Apache-2.0 · updated 2026-09-19</sub>

<sub>14 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

### Guardrails and safety

- **[DevMortimer/pi-warden](https://github.com/DevMortimer/pi-warden)** — Guardrails for Pi built on pi-typesafe that steer the agent instead of interrupting you: Jev judges irreversible and off-task tool calls, detects stuck loops, checks unverified done claims, flags slop  
  <sub>97 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[brainstormity/Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot)** — No description provided.  
  <sub>36 stars · Python · updated 2026-09-18</sub>
- **[hyperspaceai/jevcache](https://github.com/hyperspaceai/jevcache)** — A decision cache for TypeSafe Jev-class models — memoize decisions so repeats are free, deterministic, and shareable. One 2 MB binary.  
  <sub>27 stars · updated 2026-09-19</sub>
- **[jomatsu/pi-jev-auto-mode](https://github.com/jomatsu/pi-jev-auto-mode)** — Jev (TypeSafe System One) backed auto mode for the Pi coding agent: semantically auto-approves bash, write, and edit tool calls and fails closed when a decision cannot be made.  
  <sub>17 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[shiftynick/jev-axi](https://github.com/shiftynick/jev-axi)** — Agent-ergonomic CLI for TypeSafe's Jev: fast calibrated judgments (pick, rate, check, rank, triage, guard) from the shell  
  <sub>17 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[wobsoriano/oxlint-plugin-jev](https://github.com/wobsoriano/oxlint-plugin-jev)** — No description provided.  
  <sub>14 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[leepokai/jev-guard](https://github.com/leepokai/jev-guard)** — Auto mode for every coding agent, built on Jev: risk-scores every tool call with session context (deny / ask / allow), flags prompt injection in results, checks skills and plugins. Claude Code, Codex, Copilot, Gemini, Cursor, pi, OpenCode, ACP.  
  <sub>11 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[Nasrallah-AL/jev-cli](https://github.com/Nasrallah-AL/jev-cli)** — Command-line tool for TypeSafe's Jev AI model  
  <sub>11 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[nexibeo/jev-cookbook](https://github.com/nexibeo/jev-cookbook)** — Practical, tested recipes for TypeSafe's Jev decision model on OpenRouter: support triage, database indexing, file organizing, tagging, taxonomies, dedupe, PII detection, extraction, search re-ranking and a browser agent.  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[Nyarlathoteppppp/pi-heed](https://github.com/Nyarlathoteppppp/pi-heed)** — Runtime constraints for the pi coding agent: checks every side-effecting tool call against what you said, before it runs. Powered by TypeSafe Jev.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Charlyhno-eng/jev-document-classification](https://github.com/Charlyhno-eng/jev-document-classification)** — JEV Document Classification enables the rapid and cost-effective classification of text-based documents using AI, leveraging TypeSafe's "System One" model.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[godspede/construct-auto-classifier](https://github.com/godspede/construct-auto-classifier)** — Effect-based safety gate for AI coding agents' shell commands (OpenCode, Antigravity): fast structural rules, then TypeSafe's Jev or a chat model judges what a command does. Certified with Jev at zero dangerous commands allowed.  
  <sub>2 stars · TypeScript · Apache-2.0 · updated 2026-09-19</sub>
- **[ItisShikhar/gg-friggin-ez](https://github.com/ItisShikhar/gg-friggin-ez)** — Fast, drop-in profanity and toxicity screener for Node.js, powered by TypeSafe AI Jev. Catches leetspeak, character spacing, and romanized profanity across languages including Kannada, Telugu, Tamil, Hindi, and Bengali. ~50-500ms latency.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[leesk212/JEV-CPU](https://github.com/leesk212/JEV-CPU)** — Run SemIf (Jev-style semantic-if decisions) on a CPU — no GPU. Reads typed option probabilities straight from an open model in one forward pass, plus a web UI.  
  <sub>2 stars · Python · MIT · updated 2026-09-19</sub>
- **[omkarghugarkar007/actiongate-jev](https://github.com/omkarghugarkar007/actiongate-jev)** — Runtime authorization and guardrails for AI-agent tool calls with deterministic policy and TypeSafe Jev via OpenRouter.  
  <sub>2 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[AkashPriyadarshii/jev-scout](https://github.com/AkashPriyadarshii/jev-scout)** — Zero-hallucination open-source repo and crate scout powered by TypeSafe AI Jev System One scoring  
  <sub>1 stars · Rust · MIT · updated 2026-09-20</sub>
- **[coo-quack/jev-pii-checker](https://github.com/coo-quack/jev-pii-checker)** — CLI that finds PII in text with TypeSafe Jev: presence, sensitivity, and located spans  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[getexcited/stepwarden](https://github.com/getexcited/stepwarden)** — Every tool call your agent makes, checked before it runs. A Claude Code plugin that uses TypeSafe AI's Jev to verify each pending tool call against the session plan, then allows it, asks you, or blocks it. Proof of concept  
  <sub>1 stars · TypeScript · Apache-2.0 · updated 2026-09-18</sub>
- **[nexibeo/jev-organize](https://github.com/nexibeo/jev-organize)** — Throw in a pile of company files and get them classified and organized by department, type, sensitivity, date, counterparty and PII, with an index for AI agents. Powered by TypeSafe's Jev on OpenRouter (17¢ per 1,000 files). Zero-dependency Node CLI + Claude skill + Codex agent.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[Umbylicus/umby-jev-stack](https://github.com/Umbylicus/umby-jev-stack)** — Portable agent skill: TypeSafe Jev as a cheap code-review classifier (HTTP + optional jev-review MCP)  
  <sub>1 stars · MIT · updated 2026-09-20</sub>
- **[vibe-with-me-tools/n8n-nodes-jev](https://github.com/vibe-with-me-tools/n8n-nodes-jev)** — Helper n8n community node for Jev by TypeSafe. Classify, route, and score text with questions you define, and get a probability for every answer so unsure items can go to review.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[alsoleg89/jev-bouncer](https://github.com/alsoleg89/jev-bouncer)** — Claude Code plugin: a 3-cent bouncer for your agent's shell. Jev typed probabilities auto-allow routine commands, deny destructive ones, and flag prompt injection in tool results.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[codaaiteam/jev-mcp](https://github.com/codaaiteam/jev-mcp)** — MCP server for Jev (TypeSafe AI's System One model) — give any agent typed, calibrated decisions: classify, score, check, gate risky tool calls. Try free: jevtypesafeai.com  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[jason-allen-oneal/openclaw-plugin-typesafe-ai](https://github.com/jason-allen-oneal/openclaw-plugin-typesafe-ai)** — TypeSafe AI (Jev System One) plugin for OpenClaw - sub-100ms group triage, tool safety guardrails, compaction curation, and model routing  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[jkrup/jeveryword](https://github.com/jkrup/jeveryword)** — Text extraction with Jev: field extraction, PII detection and exact quotes, built on TypeSafe's Jev.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[juanlentino/jev-comment-analysis](https://github.com/juanlentino/jev-comment-analysis)** — Backs the WordPress AI plugin's Comment Moderation with TypeSafe Jev, through Connector for TypeSafe Jev  
  <sub>0 stars · PHP · GPL-2.0 · updated 2026-09-19</sub>
- **[JularDepick/Jev-Examiner](https://github.com/JularDepick/Jev-Examiner)** — An AI content moderation workflow powered by the [TypeSafe/Jev model](https://typesafe.ai).  
  <sub>0 stars · Apache-2.0 · updated 2026-09-20</sub>
- **[rashedInt32/jev-gates](https://github.com/rashedInt32/jev-gates)** — Six calibrated gates for Claude Code, judged by TypeSafe Jev: rules, scope, intent, done, claims, and commit honesty. Each one escalates, none ever approves.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[Wany-i/jev-decision-layer](https://github.com/Wany-i/jev-decision-layer)** — 把决策模型（typesafe/jev-1.13，经 OpenRouter 的 decisions 端点调用）封装成业务决策工具：注册表驱动，带置信度门控与硬约束。非官方项目。  
  <sub>0 stars · Python · MIT · updated 2026-09-18</sub>
- **[zhangxaochen/dsh-jev](https://github.com/zhangxaochen/dsh-jev)** — Jev (System One decision model) plugin suite for DeepSeek Harness (dsh)  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>

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
- **[ekzhang/openjev-sglang](https://github.com/ekzhang/openjev-sglang)** — Jev-compatible API endpoint based on open models (prefill-only)  
  <sub>205 stars · Python · updated 2026-09-18</sub>
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
- **[pithings/advocaat](https://github.com/pithings/advocaat)** — A small, type-safe client for asking AI questions about your data, powered by TypeSafe Jev.  
  <sub>85 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[0xNatoshi/jev-codex-router](https://github.com/0xNatoshi/jev-codex-router)** — Per-turn model & reasoning routing for Codex, driven by Jev (TypeSafe System One): picks the model, thinking depth and speed mode for every turn.  
  <sub>75 stars · Python · MIT · updated 2026-09-17</sub>
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
- **[burnigtm/jev-mcp](https://github.com/burnigtm/jev-mcp)** — MCP server that puts TypeSafe Jev on the coding loop in Cursor, Codex, and any MCP client  
  <sub>20 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[TheoOliveira/pi-jev](https://github.com/TheoOliveira/pi-jev)** — Semantic tool routing and typed System One decisions for the Pi coding agent using TypeSafe Jev  
  <sub>18 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[mizchi/jev-playground](https://github.com/mizchi/jev-playground)** — No description provided.  
  <sub>17 stars · TypeScript · updated 2026-09-20</sub>
- **[Eriskii/ErisLint](https://github.com/Eriskii/ErisLint)** — Rust linter powered by configurable Jev rules, with a VS Code extension.  
  <sub>15 stars · Rust · AGPL-3.0 · updated 2026-09-18</sub>
- **[Eniip/jev-game-tools](https://github.com/Eniip/jev-game-tools)** — No description provided.  
  <sub>13 stars · Python · updated 2026-09-19</sub>
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
- **[jerryfane/omp-jev-compaction](https://github.com/jerryfane/omp-jev-compaction)** — Verbatim Jev-scored context reduction for omp, over TypeSafe or OpenRouter  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[kylemclaren/jevql](https://github.com/kylemclaren/jevql)** — Semantic SQL for Postgres, powered by Jev  
  <sub>7 stars · Go · MIT · updated 2026-09-19</sub>
- **[matthewp/flue-jev-demo](https://github.com/matthewp/flue-jev-demo)** — Flue agent routing with TypeSafe Jev through Cloudflare AI Gateway  
  <sub>7 stars · TypeScript · updated 2026-09-18</sub>
- **[mejiasd3v/pi-jev-router](https://github.com/mejiasd3v/pi-jev-router)** — Automatic model routing for Pi using TypeSafe's Jev through Vercel AI Gateway  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[AkashPriyadarshii/jev-superpowers](https://github.com/AkashPriyadarshii/jev-superpowers)** — Systematic software development framework for AI coding agents upgraded with TypeSafe Jev System One typed decisions  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[anyfilter/anyfilter](https://github.com/anyfilter/anyfilter)** — Hide anything you don't want to see on any site. X for now, more to come.  
  <sub>6 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[forvela/jev-agent-browser](https://github.com/forvela/jev-agent-browser)** — Fast, bounded browser agents powered by Jev and agent-browser — typed actions, research, classification, and safe orchestration.  
  <sub>6 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[keltokhy/jsort](https://github.com/keltokhy/jsort)** — sort by meaning: order lines along a plain-English dimension, from pairwise comparisons judged by TypeSafe's Jev model  
  <sub>6 stars · Python · MIT · updated 2026-09-20</sub>
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
- **[andrelandgraf/safer-with-jev](https://github.com/andrelandgraf/safer-with-jev)** — Neon Function proxy for the Neon AI Gateway with TypeSafe Jev routing.  
  <sub>4 stars · TypeScript · updated 2026-09-18</sub>
- **[davila7/jev-explained](https://github.com/davila7/jev-explained)** — Jev Explained  
  <sub>4 stars · TypeScript · updated 2026-09-19</sub>
- **[fatelei/jev-compact](https://github.com/fatelei/jev-compact)** — Jev-scored context compaction for OpenAI Codex CLI — scores every tool call before compaction and restores critical tool outputs verbatim after it  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[himomohi/aside-jev](https://github.com/himomohi/aside-jev)** — Aside agents decide with TypeSafe Jev (System One: Choice/Score/Noul). Not a Cua binding — Jev is the model, Aside is the browser runtime.  
  <sub>4 stars · Python · MIT · updated 2026-09-18</sub>
- **[jiawei686/jev-ultrafast-mcp](https://github.com/jiawei686/jev-ultrafast-mcp)** — Hand the browser work off: an MCP server where a decision model drives the page for your agent, so a flow costs one tool call instead of a turn per click. Ref-based element tables, code-checked assertions, zero-model macro replay. Speaks CDP to your Chrome.  
  <sub>4 stars · Python · MIT · updated 2026-09-20</sub>
- **[Peu77/JevFind](https://github.com/Peu77/JevFind)** — Fast semantic code search powered by Jev. Find the relevant files, line ranges, and snippets  
  <sub>4 stars · Rust · MIT · updated 2026-09-19</sub>
- **[rajdhakad9826/jev-router](https://github.com/rajdhakad9826/jev-router)** — Cost-aware LLM router that picks the cheapest model capable of handling a query, using TypeSafe's Jev for fast classification instead of an LLM call.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[rashedInt32/jev-mcp](https://github.com/rashedInt32/jev-mcp)** — MCP server exposing TypeSafe Jev as typed, calibrated judgment tools: classify, score, check, batched ask. Ships as a Claude Code plugin.  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[utk2103/jev-studio](https://github.com/utk2103/jev-studio)** — if you're experimenting with jev it will be easier from here  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[y0usaf/typesafe-cli](https://github.com/y0usaf/typesafe-cli)** — Ask Jev typed questions from the shell: noul, choice, and score answers as numbers, not prose  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[0x7067/jev-browse](https://github.com/0x7067/jev-browse)** — Browser automation with Jev (TypeSafe) as decision model  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[AIsa-team/worth-replying](https://github.com/AIsa-team/worth-replying)** — Worth Replying by AIsa  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[EugeneBoondock/jevsql](https://github.com/EugeneBoondock/jevsql)** — SQL with natural-language predicates, powered by TypeSafe's Jev. Filter, rank, classify and score rows by meaning — batched, cached and cost-guarded.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[geilt/typesafe-cli](https://github.com/geilt/typesafe-cli)** — CLI and agent skill for TypeSafe System One (Jev): typed Choice, Score, and Noul judgments.  
  <sub>3 stars · Python · updated 2026-09-17</sub>
- **[HyunjunJeon/jev-judgment](https://github.com/HyunjunJeon/jev-judgment)** — Agent Skill: send closed coding-agent judgments to TypeSafe Jev  
  <sub>3 stars · Python · MIT · updated 2026-09-17</sub>
- **[leonaaardob/fast-dev-compaction](https://github.com/leonaaardob/fast-dev-compaction)** — Codex plugin: verbatim Jev-guided context restoration around session compaction. Port of tamaratran/fast-jev-compaction to Codex lifecycle hooks.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[prismhq/jev-router](https://github.com/prismhq/jev-router)** — Open-source LLM router that uses TypeSafe's Jev to pick a model, on top of LiteLLM  
  <sub>3 stars · Python · MIT · updated 2026-09-17</sub>
- **[sufianetaouil/every](https://github.com/sufianetaouil/every)** — Ask a yes/no question of every function in a codebase. Ranked answers in seconds, for cents. Grep whose pattern is a question, powered by TypeSafe Jev.  
  <sub>3 stars · Python · MIT · updated 2026-09-17</sub>
- **[valentynkit/jev-skip](https://github.com/valentynkit/jev-skip)** — YouTube sponsor skipper that reads the captions and decides at watch time: a probability heatmap on the seek bar, no crowd database  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[0xnairb/research_desk](https://github.com/0xnairb/research_desk)** — TypeSafe Jev demonstration for new analyzation — experimenting with Jev for fast analysis of news and tickers  
  <sub>2 stars · Python · updated 2026-09-18</sub>
- **[abhishekashokvkumar/jev-mcp-dispatcher](https://github.com/abhishekashokvkumar/jev-mcp-dispatcher)** — Natural-language MCP tool dispatcher powered entirely by TypeSafe's Jev — no general-purpose LLM. Discovers a simple MCP server's tool signatures at runtime and uses Jev's typed primitives (Choice/Noul) to pick the right tool and extract its arguments straight out of the sentence.  
  <sub>2 stars · Python · updated 2026-09-18</sub>
- **[ariel-frischer/jevkit](https://github.com/ariel-frischer/jevkit)** — Fast Rust CLI for TypeSafe Jev: typed decisions, offline linting before you pay  
  <sub>2 stars · Rust · MIT · updated 2026-09-19</sub>
- **[BeLazy167/typesafe-mod](https://github.com/BeLazy167/typesafe-mod)** — Claude Code mod that routes decisions to TypeSafe's Jev model: ranks installed skills per prompt, and answers the agent's own this-or-that questions when confident.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[bojansandhaus/jev-decisions](https://github.com/bojansandhaus/jev-decisions)** — Jev Decisions Plugin for Hermes (and other AI Agents): tool risk reviews, human approval recommendations, evidence checks, and a local decision journal.  
  <sub>2 stars · Python · MIT · updated 2026-09-19</sub>
- **[ddfeyes/jev-mode](https://github.com/ddfeyes/jev-mode)** — I kept watching coding agents burn context on decisions that aren't hard - triage 400 tickets, tag 600 files, route to one of six teams. jev-mode moves those verdicts to a typed-judgment model. I A/B'd it: 78% fewer tokens, 16x less work-attributable input, accuracy 96.1% vs 93.7%. Python, no deps, MIT.  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[Friedjof/jev-mobile](https://github.com/Friedjof/jev-mobile)** — Fast structured Android control loops with TypeSafe Jev and Mobile MCP  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[jcpsimmons/jev-model-router-demo](https://github.com/jcpsimmons/jev-model-router-demo)** — Throwaway Jev demo: route coding tasks to Grok Build or Codex Astra  
  <sub>2 stars · JavaScript · updated 2026-09-17</sub>
- **[jevbook/jevscan](https://github.com/jevbook/jevscan)** — Typed onchain verdicts for EVM tokens: ape / watch /avoid with calibrated probabilities. CLI + library +MCP server. Robinhood Chain first.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[lomeshdutta/skill-router](https://github.com/lomeshdutta/skill-router)** — Tell Claude Code which installed skill a session needs, using Jev (TypeSafe AI) for the decision and skills.sh for discovery.  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[Mrlyk/jev-browser](https://github.com/Mrlyk/jev-browser)** — Browser automation CLI for AI agents, powered by the Jev model's millisecond decisions and near-zero inference costs  
  <sub>2 stars · Rust · Apache-2.0 · updated 2026-09-19</sub>
- **[reachjalil/jev-tree](https://github.com/reachjalil/jev-tree)** — Recursive Jev choice over a taxonomy. Select from more than 255 options without breaking TypeSafe Jev's choice cap.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[tonyzdev/pijev](https://github.com/tonyzdev/pijev)** — PiJev: a terminal coding agent with Jev in the loop — Jev ranks the repository's files before the first call, picks skills and triages failures; your coding model writes the code. Built on Pi.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[zdenham/jev-lint](https://github.com/zdenham/jev-lint)** — Lint JavaScript and TypeScript against plain-English project conventions with Jev.  
  <sub>2 stars · TypeScript · updated 2026-09-20</sub>
- **[AkashPriyadarshii/jev-git](https://github.com/AkashPriyadarshii/jev-git)** — Sub-second Git pre-commit & pre-push semantic reflex gate powered by TypeSafe AI Jev  
  <sub>1 stars · Rust · MIT · updated 2026-09-18</sub>
- **[chrishan17/claude-jev-mod](https://github.com/chrishan17/claude-jev-mod)** — Typed decisions in Claude Code: adds $.jev over TypeSafe's Jev, through OpenRouter, Vercel AI Gateway, Cloudflare Workers AI, LiteLLM or the TypeSafe API.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[ctaxnagomi/dgui-hypermem](https://github.com/ctaxnagomi/dgui-hypermem)** — DGUI-HyperMem (DeckerGUI HyperMemory) - self-hosted hybrid memory MCP server on Cloudflare Workers with a JEV (Choice/Noul/Score) reasoning layer and a HuggingFace training-brain flywheel.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[de-niji/jev-hermes](https://github.com/de-niji/jev-hermes)** — Jev for Hermes: cheap intent gates + verbatim tool compaction on OpenRouter  
  <sub>1 stars · Python · MIT · updated 2026-09-18</sub>
- **[edgardcham/huncho](https://github.com/edgardcham/huncho)** — Decisions as code on System One models: typed questions, thresholds with hysteresis, nested decisions, journal, calibration  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[fatwang2/jev-review-action](https://github.com/fatwang2/jev-review-action)** — Configurable GitHub submission review and PR classification with TypeSafe Jev. No text-generation model.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[FrancoisChastel/jev-code](https://github.com/FrancoisChastel/jev-code)** — Jev, TypeSafe's System One classifier, as a tool inside Claude Code, Codex, Pi, and OpenCode: typed classify, check, score, rank, and ask, plus one-command setup.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[harrymunro/decision-first](https://github.com/harrymunro/decision-first)** — Agent skill that spots bounded-judgment steps, tries a typed decision model (TypeSafe's Jev) first, and documents every attempt  
  <sub>1 stars · Python · MIT · updated 2026-09-18</sub>
- **[kierandotai/jev-client](https://github.com/kierandotai/jev-client)** — Zero-dependency TypeScript client for TypeSafe Jev (System One decision model) — OpenRouter, TypeSafe direct, and Vercel AI Gateway providers  
  <sub>1 stars · TypeScript · updated 2026-09-19</sub>
- **[manojlds/jev-review](https://github.com/manojlds/jev-review)** — Standalone TypeSafe Jev code-review CLI: typed decisions over a local git diff.  
  <sub>1 stars · TypeScript · updated 2026-09-18</sub>
- **[NemanjaManic/ci-gatekeeper-bot-jev](https://github.com/NemanjaManic/ci-gatekeeper-bot-jev)** — GitHub Action that uses Jev (TypeSafe AI via Vercel AI Gateway) to cheaply triage pull requests before expensive LLM/human review  
  <sub>1 stars · Shell · updated 2026-09-19</sub>
- **[nrdz-labs/fast-jev-opencode](https://github.com/nrdz-labs/fast-jev-opencode)** — Jev-scored context pruning for OpenCode: drops stale tool calls and truncates bulky results on the outgoing request — fail-open, cache-backed, configurable live. Port of fast-jev-compaction to the V2 context hook.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[okooo5km/jev](https://github.com/okooo5km/jev)** — Typed decisions from the shell: an unofficial stdlib-Python CLI and Agent Skill for TypeSafe's Jev model, via the TypeSafe API (default) or OpenRouter. Yes/no, choice and ordinal scores with calibrated probabilities, semantic grep and batch mode.  
  <sub>1 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[thezem/jev-one](https://github.com/thezem/jev-one)** — A vocabulary-driven TypeScript runtime for safe, stateful applications powered by TypeSafe AI Jev.  
  <sub>1 stars · TypeScript · updated 2026-09-19</sub>
- **[Wang-auspicious/codex-jev-compaction](https://github.com/Wang-auspicious/codex-jev-compaction)** — Jev-powered context curation for Codex. Build compact, traceable handoff context through native plugins and skills.  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[wenchenxi/jev-console](https://github.com/wenchenxi/jev-console)** — Local console + CLI for TypeSafe's Jev (System One) model: send a state and typed questions, get calibrated probabilities back.  
  <sub>1 stars · Python · MIT · updated 2026-09-20</sub>
- **[yibie/pi-jev-browser](https://github.com/yibie/pi-jev-browser)** — Isolated Playwright browser for pi, driven by Jev typed decisions through the TypeSafe API or the model pi already has configured.  
  <sub>1 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[404priyanshu/zsh-jev-suggest](https://github.com/404priyanshu/zsh-jev-suggest)** — zsh history autosuggestions ranked by Jev (TypeSafe System One) — instant inline ghost text from a pre-warmed cache, plus a live reranked Ctrl-Space picker  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[agarwalpranav0711/jev-ai-testing](https://github.com/agarwalpranav0711/jev-ai-testing)** — Real-time message tone analyzer and autonomous maze navigation game powered by TypeSafe AI's Jev System One model & Cloudflare Workers.  
  <sub>0 stars · HTML · updated 2026-09-20</sub>
- **[avshalomd/longjev](https://github.com/avshalomd/longjev)** — Long inputs for TypeSafe AI's Jev decision model. An experiment.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[bigdra50/a-tour-of-jev](https://github.com/bigdra50/a-tour-of-jev)** — A hands-on, A Tour of Go-style tutorial for TypeSafe AI's Jev, in Japanese. Runs locally in your browser.  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[da-vinci-noob/pi-jev-model-router](https://github.com/da-vinci-noob/pi-jev-model-router)** — Route pi prompts to task-appropriate model tiers with TypeSafe Jev typed judgments. Budget-aware, with automatic fallback.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[dev-willbird1936/pi-jev-compact](https://github.com/dev-willbird1936/pi-jev-compact)** — Verbatim Jev context compaction for Pi Coding Agent  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[dtduc-git/jev-table](https://github.com/dtduc-git/jev-table)** — AI columns for CSV/JSONL files with TypeSafe's Jev — typed answers, confidence, review queue, resume and cost preview. Local-first, BYO key.  
  <sub>0 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[EtienneLescot/jev-router](https://github.com/EtienneLescot/jev-router)** — Typed judgments in, control flow out: two Jev calls route a support ticket to an agent, then pick its model tier and reasoning depth.  
  <sub>0 stars · HTML · MIT · updated 2026-09-18</sub>
- **[jkalend/jev-cicd](https://github.com/jkalend/jev-cicd)** — CI/CD system with a Jev AI decision layer — Go backend, Go CLI, Next.js frontend. Failure classification, log triage, issue routing, notification filtering as typed decisions  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jonymusky/jev-browser-qa](https://github.com/jonymusky/jev-browser-qa)** — Browser QA where Playwright drives and films, and TypeSafe Jev judges. JSON-flow CLI for agents, run dashboard, agent skill.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jumboly/jev-map-sandbox](https://github.com/jumboly/jev-map-sandbox)** — Jev (TypeSafe AI の System One モデル) を地図に使ってみる実験場。音声指示で地理院地図Vector のレイヤーを重要度分類する。  
  <sub>0 stars · TypeScript · updated 2026-09-20</sub>
- **[jyatesdotdev/jev-logtriage](https://github.com/jyatesdotdev/jev-logtriage)** — Jev decides whether a batch of logs is worth acting on. Typed questions, confidence gates, nothing executed.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[knowlet/jev-agentworld-web-simulator](https://github.com/knowlet/jev-agentworld-web-simulator)** — An entire internet — search, pages & links — hallucinated on the fly by the System One Model.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[krsna-smnt/jev-moral-dilemmas](https://github.com/krsna-smnt/jev-moral-dilemmas)** — Does Jev give the same answer twice? Repeatability and confidence-stability experiments on TypeSafe's Jev model — including a 52-dilemma moral reasoning stress test — via OpenRouter's Decisions API.  
  <sub>0 stars · Python · updated 2026-09-20</sub>
- **[kuldeepsinh19/jev-decision-gateway](https://github.com/kuldeepsinh19/jev-decision-gateway)** — A provider-agnostic AI decision gateway using TypeSafe AI's Jev (System One) model to gate, route, and verify expensive LLM workflows  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[loicrg/jev-spam-lab](https://github.com/loicrg/jev-spam-lab)** — CLI for evaluating Microsoft Outlook email with TypeSafe AI’s Jev model.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[lorensation/llm-cost-optimizer-jev](https://github.com/lorensation/llm-cost-optimizer-jev)** — An intelligent routing layer powered by TypeSafe AI's System One model Jev that sits in front of multiple LLM providers, analyzes each incoming request’s complexity, routes it to the cheapest model capable of handling it at acceptable quality, and continuously validates that routing decisions are correct.  
  <sub>0 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[m0rphtail/triagedy](https://github.com/m0rphtail/triagedy)** — Alert triage as a UNIX filter: JSONL security alerts in, typed decisions out. Runs on TypeSafe Jev or a local model; policy routing stays in code.  
  <sub>0 stars · Rust · MIT · updated 2026-09-18</sub>
- **[maddygoround/typesafeai-cli](https://github.com/maddygoround/typesafeai-cli)** — Give your AI agent a CLI companion who has access to TypeSafe AI's Jev.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[mahavirn/mnjev-cli](https://github.com/mahavirn/mnjev-cli)** — CLI for JEV Model  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[makefunstuff/jev-lsp](https://github.com/makefunstuff/jev-lsp)** — Jev backed lsp server that uses jev inference api to steer code harnesses or detect problems while working in editor.  
  <sub>0 stars · Rust · updated 2026-09-20</sub>
- **[Mentioum/judgement](https://github.com/Mentioum/judgement)** — Agent-friendly Go library and JSON-first CLI for TypeSafe AI's Jev and System One API  
  <sub>0 stars · Go · MIT · updated 2026-09-18</sub>
- **[model-clis/jev](https://github.com/model-clis/jev)** — Typed judgment CLI for the Jev model (TypeSafe System One): state + questions in, calibrated answers and exit codes out  
  <sub>0 stars · Rust · MIT · updated 2026-09-18</sub>
- **[MokiMeow/jev-fabric](https://github.com/MokiMeow/jev-fabric)** — A typed decision control plane for bounded semantic choices with Jev and AI agents.  
  <sub>0 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[MoonTory/pi-jev-harness](https://github.com/MoonTory/pi-jev-harness)** — Pi extension: TypeSafe Jev routes turns, pre-fetches context, trims tool results, catches loops and guards tool calls  
  <sub>0 stars · TypeScript · updated 2026-09-18</sub>
- **[MSalvalaggio/jev-reflex](https://github.com/MSalvalaggio/jev-reflex)** — Claude thinks, Jev reacts: an MCP server that hands browser tasks from Claude to TypeSafe's Jev (~100 ms per decision).  
  <sub>0 stars · Python · MIT · updated 2026-09-18</sub>
- **[n0nuser/vernier](https://github.com/n0nuser/vernier)** — Measure meaning by perturbing text and watching a calibrated probability move. Ablation attribution over TypeSafe's Jev, reported against a measured noise floor.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[nekowasabi/jev-routing](https://github.com/nekowasabi/jev-routing)** — Go Jev harness for Claude Code, Codex, and Grok Build. No npx. Not an MCP server.  
  <sub>0 stars · Go · MIT · updated 2026-09-20</sub>
- **[nexibeo/jev-browser-control](https://github.com/nexibeo/jev-browser-control)** — Let Claude code, chatgpt codex or control your own Chrome. Chrome extension + MCP server: Jev, TypeSafe's decision model, picks each click in ~0.5 s for a fraction of a cent. MIT, bring your own OpenRouter key.  
  <sub>0 stars · JavaScript · updated 2026-09-19</sub>
- **[nickylin/jev-harness](https://github.com/nickylin/jev-harness)** — Typed decision control plane for agents, powered by TypeSafe Jev  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[nourhelmi/pi-jev-compaction](https://github.com/nourhelmi/pi-jev-compaction)** — Automatic Jev context clearing for Pi. Keep the conversation, prune stale tool output, retrieve originals without rerunning commands.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[piyush97/focus-tube](https://github.com/piyush97/focus-tube)** — Distraction-free YouTube learning feed powered by TypeSafe AI's Jev System One model  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[Pk13055/jev-playgroud](https://github.com/Pk13055/jev-playgroud)** — Experiments with Jev (Typesafe AI)  
  <sub>0 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[robzolkos/omarchy-issue-classifier](https://github.com/robzolkos/omarchy-issue-classifier)** — Classify the Omarchy issue backlog with Jev, TypeSafe's System One model. Ten typed questions per issue in one request, for a hundredth of a cent each.  
  <sub>0 stars · Ruby · updated 2026-09-18</sub>
- **[SC0d3r/jev-systemone](https://github.com/SC0d3r/jev-systemone)** — Typed TypeScript client for Jev System One models, Choice, Score & Noul decisions with presets for TypeSafe, Zen & custom gateways  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[sebastianbugal/jev](https://github.com/sebastianbugal/jev)** — TypeSafe's Jev decision model in Claude Code. Ask in plain language, get a typed answer with a calibrated probability.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[sf-stav/mcp_typesafe](https://github.com/sf-stav/mcp_typesafe)** — Use TypeSafe's System One models (Jev) inside any agent  
  <sub>0 stars · Rust · Apache-2.0 · updated 2026-09-19</sub>
- **[sleepy0x13/jevia-harness](https://github.com/sleepy0x13/jevia-harness)** — 把判断和写作分开的本地 agent：Jev 负责所有能用类型表达的判断，语言模型只写该写的。零第三方依赖。A local agent harness that puts a System One model in front of the LLM.  
  <sub>0 stars · Python · updated 2026-09-20</sub>
- **[spoonnotfound/soupbase](https://github.com/spoonnotfound/soupbase)** — Jev x 海龟汤  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Talya1412/jev-harness](https://github.com/Talya1412/jev-harness)** — TypeSafe Jev (System One) integrations for OMP, MCP, Claude Code, and Pi — fail-open decision routing, gating, and verbatim compaction.  
  <sub>0 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[totally-tim/jev-gate](https://github.com/totally-tim/jev-gate)** — Calibrated PR review gates powered by TypeSafe Jev: a GitHub Action, a local CLI, and an OpenCode plugin  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[tpellet/grevi](https://github.com/tpellet/grevi)** — grep for meaning: find the error in a 10,000-line log, a commit by description, the command for a task. A Unix CLI, no key needed. Powered by Jev from TypeSafe AI.  
  <sub>0 stars · Rust · MIT · updated 2026-09-20</sub>
- **[xpressabhi/jev-browser](https://github.com/xpressabhi/jev-browser)** — Jev decides. The harness acts.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Yzywil/jev-windows](https://github.com/Yzywil/jev-windows)** — Supervised Windows UI Automation with TypeSafe Jev: bounded choices, local policy, verified outcomes.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>

### Examples and templates

- **[jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader)** — One AI trade decision every Monad block. Jev on Kuru MON-USDC.  
  <sub>1373 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev)** — A nano replica of Jev: parallel decisions, dynamic candidates, and an end-to-end training pipeline.  
  <sub>1122 stars · Python · MIT · updated 2026-09-17</sub>
- **[devagrawal09/jev-review](https://github.com/devagrawal09/jev-review)** — A staged code-review workflow and local dashboard built with TypeSafe Jev.  
  <sub>372 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[standardagents/jevpilot](https://github.com/standardagents/jevpilot)** — A playable Three.js driving simulator with Jev-powered autopilot  
  <sub>100 stars · JavaScript · updated 2026-09-17</sub>
- **[kerpopule/hermes-jev-skills](https://github.com/kerpopule/hermes-jev-skills)** — Jev-powered model routing, memory, compaction, skill selection, computer and browser use for Hermes agents (also Claude Code and Codex)  
  <sub>88 stars · Python · MIT · updated 2026-09-20</sub>
- **[mrnugget/jev-shell-history](https://github.com/mrnugget/jev-shell-history)** — Fish-style zsh history autosuggestions ranked by Jev (TypeSafe)  
  <sub>68 stars · TypeScript · updated 2026-09-18</sub>
- **[EliaAlberti/jev-rules](https://github.com/EliaAlberti/jev-rules)** — Jev picks which of your rules apply to each prompt, so Claude only sees the ones that matter.  
  <sub>38 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[savka777/jev-use](https://github.com/savka777/jev-use)** — Say it, and your Mac does it. A computer-use harness on Jev that reads the screen through Accessibility. Fast, no vision model  
  <sub>37 stars · Swift · MIT · updated 2026-09-19</sub>
- **[skeptrunedev/jev-recruiter](https://github.com/skeptrunedev/jev-recruiter)** — A Jev powered LinkedIn recruiting agent. Watch it browse relevant profiles, save links, and review evidence against your hiring brief.  
  <sub>32 stars · Python · MIT · updated 2026-09-19</sub>
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
- **[valentynkit/jev-belay](https://github.com/valentynkit/jev-belay)** — Claude Code Stop hook that blocks an unverified done: reads the transcript for evidence, asks Jev once, fails open on everything else  
  <sub>11 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[BorisLeMeec/jev](https://github.com/BorisLeMeec/jev)** — A claude code plugin for jev  
  <sub>10 stars · Go · MIT · updated 2026-09-18</sub>
- **[khordoo/jev-reflex-autonomy-lab](https://github.com/khordoo/jev-reflex-autonomy-lab)** — Multi-drone autonomy lab demonstrating TypeSafe Jev reflex decisions with optional System 2 strategy guidance.  
  <sub>10 stars · TypeScript · updated 2026-09-19</sub>
- **[NanmiCoder/jev-arena](https://github.com/NanmiCoder/jev-arena)** — Jev 模型介绍与实测：通过 Choice / Score / Noul 将自然语言转为带类型的判断与概率，用于分类、评分和路由；支持与 DeepSeek 等模型对比评论打标、速度与结果，含 CSV/Excel 导入、原速回放与离线报告。  
  <sub>10 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[altryne/jevify](https://github.com/altryne/jevify)** — An agent skill to discover TypeSafe Jev opportunities, design typed questions, and learn from recent community experiments.  
  <sub>9 stars · Python · MIT · updated 2026-09-17</sub>
- **[sosopop/jev_stock](https://github.com/sosopop/jev_stock)** — An experimental JEV-powered framework for forecasting short-term stock price direction from structured market data.  
  <sub>9 stars · Python · updated 2026-09-17</sub>
- **[BoundaryML/feelings](https://github.com/BoundaryML/feelings)** — .feels() on anything — the AI if statement as a real, typed method. Jev + BAML.  
  <sub>8 stars · BAML · updated 2026-09-19</sub>
- **[parth-kp/jev-mail-classifier](https://github.com/parth-kp/jev-mail-classifier)** — Classify your inbox with Jev (TypeSafe's System One model) — tag, move, flag, and notify, all config-driven.  
  <sub>8 stars · Python · MIT · updated 2026-09-20</sub>
- **[siliconkernel/vllm-jev-decison](https://github.com/siliconkernel/vllm-jev-decison)** — Classification-only typed decisions for vLLM: finite-schema candidate scoring, probabilities, and abstention. No generative fallback.  
  <sub>8 stars · Python · MIT · updated 2026-09-18</sub>
- **[Yinsongxu/LLM2Jev](https://github.com/Yinsongxu/LLM2Jev)** — Adapt local language models into Jev-compatible structured decision engines with Choice, Score, and Noul outputs   powered by prefill-only binary inference.  
  <sub>8 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[zaidmukaddam/cascade-search](https://github.com/zaidmukaddam/cascade-search)** — A 27K-parameter in-browser query parser that knows when it doesn't know.  
  <sub>8 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[ethanplusai/jev-chat-for-twitch](https://github.com/ethanplusai/jev-chat-for-twitch)** — Filter any live Twitch chat with Jev: a bring-your-own-key Chrome extension  
  <sub>7 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[kyu1204/jgrep](https://github.com/kyu1204/jgrep)** — grep for what code does, not what it's called. Semantic code search powered by TypeSafe Jev.  
  <sub>7 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[OmniJev/PlayJev](https://github.com/OmniJev/PlayJev)** — 🚀🚀 A 0.8B JEV-like multimodal model playing GUI games directly from raw pixels.  
  <sub>7 stars · JavaScript · Apache-2.0 · updated 2026-09-19</sub>
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
- **[valentynkit/jev-commit](https://github.com/valentynkit/jev-commit)** — pre-commit hook: one Jev call judges whether your commit message matches the diff, plus debug leftovers, scope creep, and a secret belt  
  <sub>5 stars · Python · MIT · updated 2026-09-19</sub>
- **[backmeupplz/jev_antispam_bot](https://github.com/backmeupplz/jev_antispam_bot)** — Minimal grammY Telegram anti-spam bot powered by TypeSafe Jev  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[danvega/hello-jev-java](https://github.com/danvega/hello-jev-java)** — No description provided.  
  <sub>4 stars · Java · updated 2026-09-18</sub>
- **[mkotlikov/jev-grug](https://github.com/mkotlikov/jev-grug)** — Helping JEV speak <3  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[vinilana/jev-browser](https://github.com/vinilana/jev-browser)** — No description provided.  
  <sub>4 stars · TypeScript · updated 2026-09-17</sub>
- **[anxkhn/JevPlaysPokemon](https://github.com/anxkhn/JevPlaysPokemon)** — Jev plays Generation 3 Pokémon via Showdown and a real FireRed ROM.  
  <sub>3 stars · HTML · GPL-3.0 · updated 2026-09-18</sub>
- **[hotchpotch/jev-reranker](https://github.com/hotchpotch/jev-reranker)** — Jev-powered relevance filtering and reranking for RAG in Python.  
  <sub>3 stars · Python · MIT · updated 2026-09-19</sub>
- **[MartinSWDev/gen-ui](https://github.com/MartinSWDev/gen-ui)** — No description provided.  
  <sub>3 stars · TypeScript · updated 2026-09-17</sub>
- **[nickthompson480/typesafe-ai-playground](https://github.com/nickthompson480/typesafe-ai-playground)** — Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-16</sub>
- **[zaferayan/jev-example](https://github.com/zaferayan/jev-example)** — No description provided.  
  <sub>3 stars · TypeScript · updated 2026-09-18</sub>
- **[Bewinxed/jevgpt](https://github.com/Bewinxed/jevgpt)** — A chatbot built on a model that cannot generate text (TypeSafe AI's Jev, driven autoregressively)  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[buluoray/JevOnly](https://github.com/buluoray/JevOnly)** — Pure Jev that can "type" and drive towards task completion.  
  <sub>2 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[erhanmeydan/jev2048](https://github.com/erhanmeydan/jev2048)** — TypeSafe'in Jev karar modeli gerçek bir online 2048 sitesinde oynuyor — hamle başına tek API çağrısı, tek anahtar.  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[Foadsf/jev-for-engineers](https://github.com/Foadsf/jev-for-engineers)** — Eight minimal working examples of TypeSafe's Jev (a System One model) applied to mechanical and electrical engineering: CAD/CAE/CAM routing, FEM result triage, DFM screening, BOM alignment, hallucination-proof extraction. Zero dependencies.  
  <sub>2 stars · Python · MIT · updated 2026-09-16</sub>
- **[gaborishka/jev-canvas](https://github.com/gaborishka/jev-canvas)** — Draw on a tldraw canvas with your voice and a pointing finger. Jev (TypeSafe System One) decides action, target and place in ~350 ms per spoken word.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[jaibhasin/jev-yt-time-saver](https://github.com/jaibhasin/jev-yt-time-saver)** — A Chrome extension that covers distracting YouTube videos with Jev. Show anyway whenever you want.  
  <sub>2 stars · JavaScript · updated 2026-09-19</sub>
- **[raihankhan-rk/jevarena](https://github.com/raihankhan-rk/jevarena)** — JevArena — two Jev agents duel in click-only browser games (Browser Use + TypeSafe Jev)  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[ShuhanSun/jev-oas-sentinel](https://github.com/ShuhanSun/jev-oas-sentinel)** — Catch breaking API behavior hidden in OpenAPI prose with deterministic checks and TypeSafe JEV System One semantic review.  
  <sub>2 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[sriganesh/jevibe-check](https://github.com/sriganesh/jevibe-check)** — A live tone labeler for Bluesky posts and drafts, using TypeSafe's Jev API.  
  <sub>2 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[valentynkit/jev.nvim](https://github.com/valentynkit/jev.nvim)** — Neovim: ask the buffer a question, get a quickfix list. Treesitter splits functions, Jev scores each one, probabilities land as virtual text  
  <sub>2 stars · Lua · MIT · updated 2026-09-19</sub>
- **[Alexandre-Borghi/jev-ncr-demo](https://github.com/Alexandre-Borghi/jev-ncr-demo)** — AI defect code suggestions for Non-Conformance Reports, powered by TypeSafe AI's Jev model  
  <sub>1 stars · Rust · updated 2026-09-19</sub>
- **[Ashadeepa/typesafe-jev-model-use-cases](https://github.com/Ashadeepa/typesafe-jev-model-use-cases)** — Runnable demos of TypeSafe's System One model (Jev) — parallel Noul judgments and a Choice-based citation/claim checker  
  <sub>1 stars · Python · updated 2026-09-19</sub>
- **[charleeagni/JevPiano](https://github.com/charleeagni/JevPiano)** — @typesafeai 's Jev controls the 2 hands and each finger to play the piano in real-time.  Jev only "sees" what we see and plays this from the "note waterfall". It uses  @browser_use 's jev-ultrafast and some decision scheduling to make this happen in real-time.  Sound on 🔈🔉🔊  
  <sub>1 stars · JavaScript · updated 2026-09-18</sub>
- **[HisuiKoh/jev-vtuber-ime-core](https://github.com/HisuiKoh/jev-vtuber-ime-core)** — 読み→VTuber表記を Web検索の根拠 + Jev で解決。辞書データなし。  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[jaibhasin/jev-flappy-bird](https://github.com/jaibhasin/jev-flappy-bird)** — Jev learns to play flappy-bird game with physics based context and without it  
  <sub>1 stars · JavaScript · updated 2026-09-19</sub>
- **[kitze/pagegrade](https://github.com/kitze/pagegrade)** — Grade page sections for clarity, writing and on-page SEO. WXT + TypeSafe AI Jev.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[Little-Planet-Labs/jev-playground](https://github.com/Little-Planet-Labs/jev-playground)** — A small Next.js app for experimenting with TypeSafe AI's Jev model (System One)  
  <sub>1 stars · TypeScript · updated 2026-09-17</sub>
- **[RubyBrewsday/jevcumber](https://github.com/RubyBrewsday/jevcumber)** — Write Cucumber tests with just the .feature file. No step definitions — Jev (TypeSafe AI) resolves each Gherkin step and Playwright runs it.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[wotai-dev/typesafe-jev-tools](https://github.com/wotai-dev/typesafe-jev-tools)** — A Claude Code hook that asks whether the decision you are writing needs a model at all. Includes a measured 149-row comparison of TypeSafe Jev against Claude Haiku 4.5.  
  <sub>1 stars · Shell · MIT · updated 2026-09-18</sub>
- **[aarora79/jev-samples](https://github.com/aarora79/jev-samples)** — Runnable samples for Jev, TypeSafe AI's System One model. Send state and questions carrying their own answer options, then branch on the typed value that comes back.  
  <sub>0 stars · updated 2026-09-20</sub>
- **[adilmoujahid/jev-banking77-demo](https://github.com/adilmoujahid/jev-banking77-demo)** — A single-page Next.js app that classifies PolyAI BANKING77 customer support queries with Jev, TypeSafe AI's System One model, and streams the results into the UI one ticket at a time.  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[AnthusAI/Jev-Calibration](https://github.com/AnthusAI/Jev-Calibration)** — Does Jev's confidence mean what it says? Calibrating Jev (TypeSafe System One) with Platt scaling and isotonic regression.  
  <sub>0 stars · Python · updated 2026-09-19</sub>
- **[ayushkushwaha609/Jev-resume-screener](https://github.com/ayushkushwaha609/Jev-resume-screener)** — A resume screener built using Typesafe's new System One Model - Jev  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[BradMyrick/Jev-Rug-Checker](https://github.com/BradMyrick/Jev-Rug-Checker)** — a multi-chain EVM token screener built on Jev by @TypeSafe AI  
  <sub>0 stars · Python · MIT · updated 2026-09-17</sub>
- **[BrendanH18/jev-lab](https://github.com/BrendanH18/jev-lab)** — Six small apps and a workbench that show what TypeSafe's Jev (System One) model can do  
  <sub>0 stars · Python · MIT · updated 2026-09-18</sub>
- **[codaaiteam/jev-typesafe-ai](https://github.com/codaaiteam/jev-typesafe-ai)** — Unofficial developer notes & examples for Jev, TypeSafe AI's System One model. Try it free: jevtypesafeai.com  
  <sub>0 stars · updated 2026-09-19</sub>
- **[dirnbauer/typo3-webcon-jev](https://github.com/dirnbauer/typo3-webcon-jev)** — Typed decisions from TypeSafe AI's Jev model inside TYPO3: a decision editor and playground in the backend, powermail_cond operators, and submission routing  
  <sub>0 stars · PHP · updated 2026-09-19</sub>
- **[DomMonte/n8n-nodes-typesafe-ai](https://github.com/DomMonte/n8n-nodes-typesafe-ai)** — n8n community node for the TypeSafe AI System One API — typed yes/no, choice and score questions with calibrated probabilities  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[DowLucas/browser-jev](https://github.com/DowLucas/browser-jev)** — Adversarial browser testing: personas explore your web app while Jev judges every page state  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[harshpuri84/typed-gate](https://github.com/harshpuri84/typed-gate)** — Read the probability instead of taking the argmax. A gate for System One models like Jev.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[Hexdigest123/typesafe-comment](https://github.com/Hexdigest123/typesafe-comment)** — Small Python package that uses typesafe.ai to evaluate code comments on certain heuristics  
  <sub>0 stars · Python · MIT · updated 2026-09-17</sub>
- **[hfmsio/jev-wiki-watch](https://github.com/hfmsio/jev-wiki-watch)** — Live Wikipedia vandalism watch judged by Jev, TypeSafe AI's typed-decision model. Two files, no packages.  
  <sub>0 stars · HTML · updated 2026-09-20</sub>
- **[hosseintoussi/jev-flappy-bird](https://github.com/hosseintoussi/jev-flappy-bird)** — A live demo of TypeSafe's Jev model playing Flappy Bird, one flap-or-wait decision at a time.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Jason-Doyle/jev-parallel-dispatch](https://github.com/Jason-Doyle/jev-parallel-dispatch)** — Browser simulation for parallel Jev decisions with capacity-constrained assignment and retained evidence  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[joshlarsen/jev-t-rex-runner](https://github.com/joshlarsen/jev-t-rex-runner)** — Chrome dino game played by Typesafe AI Jev model  
  <sub>0 stars · JavaScript · BSD-3-Clause · updated 2026-09-17</sub>
- **[KesavanKing/jev-browser](https://github.com/KesavanKing/jev-browser)** — Local browser automation UI that uses TypeSafe Jev to choose bounded page actions and a text model only for field values.  
  <sub>0 stars · Python · updated 2026-09-17</sub>
- **[khaledsAlshibani/jev-ci-classifier](https://github.com/khaledsAlshibani/jev-ci-classifier)** — CI example using Jev to classify failed PR checks and return structured decisions with probabilities.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[kijung4290/maeum-on-attendance-care](https://github.com/kijung4290/maeum-on-attendance-care)** — 어르신 프로그램 출석 위험 모니터링 대시보드 · TypeSafe AI JEV 연동  
  <sub>0 stars · JavaScript · updated 2026-09-19</sub>
- **[lookfwd/jev-fact-checker](https://github.com/lookfwd/jev-fact-checker)** — Uses Typesafe AI Jev to Provide A Tweet Fact Checker  
  <sub>0 stars · TypeScript · updated 2026-09-18</sub>
- **[marcelomar21/demo-tetris-jev](https://github.com/marcelomar21/demo-tetris-jev)** — Tetris arcade jogado pelo Jev da TypeSafe AI, com decisões em JSON, antecipação de jogadas e custo por partida.  
  <sub>0 stars · JavaScript · updated 2026-09-18</sub>
- **[MayankBansal12/jev-plays-pinball](https://github.com/MayankBansal12/jev-plays-pinball)** — watch jev play real-time pinball  
  <sub>0 stars · TypeScript · updated 2026-09-18</sub>
- **[meetr1912/jev-arena](https://github.com/meetr1912/jev-arena)** — A calibration arena for TypeSafe Jev: reliability, Brier/ECE, and confidence-gated risk-coverage on analytically-known random worlds.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[meetr1912/jev-sonar](https://github.com/meetr1912/jev-sonar)** — TypeSafe Jev plays Battleship: one ~100-question typed fan-out per turn returns a calibrated hit-probability heatmap that is also the move policy.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[meetr1912/jev-vickrey](https://github.com/meetr1912/jev-vickrey)** — TypeSafe Jev bids in sealed-bid auctions: threshold fan-out reconstructs a calibrated value CDF, scored by regret and truthfulness.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[moguone/jev-lab](https://github.com/moguone/jev-lab)** — Small apps for evaluating TypeSafe AI's System One model (Jev). Unofficial.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[nak1b/jev-experiments](https://github.com/nak1b/jev-experiments)** — Small experiments with Jev by TypeSafe  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[namayasai/backstage-jev-operations-support](https://github.com/namayasai/backstage-jev-operations-support)** — Jev-powered operations decision support for Backstage: readiness checks, incident triage, change review, template and team recommendations, and catalog reranking.  
  <sub>0 stars · TypeScript · Apache-2.0 · updated 2026-09-19</sub>
- **[NeetigyaShah/jev-gate-extension](https://github.com/NeetigyaShah/jev-gate-extension)** — Jev-gated browser agent in your side panel. Jev decides, code executes, you approve.  
  <sub>0 stars · JavaScript · updated 2026-09-19</sub>
- **[octanevz/jev-playground-openrouter](https://github.com/octanevz/jev-playground-openrouter)** — Local browser playground for TypeSafe's Jev decision model via OpenRouter. Python stdlib only.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[Para-FR/casse-brique-typesafe](https://github.com/Para-FR/casse-brique-typesafe)** — A Next.js brick breaker whose paddle is controlled in real time by TypeSafe AI's Jev model. Built with Claude Code.  
  <sub>0 stars · TypeScript · updated 2026-09-17</sub>
- **[qiaohaojie/Jev-MongoDB](https://github.com/qiaohaojie/Jev-MongoDB)** — Real-time FMCG customer care triage: MongoDB Change Streams + TypeSafe Jev  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[rnjsxodyd90/jev-relay](https://github.com/rnjsxodyd90/jev-relay)** — A typed Jev decision gate, local-voice interpreter workbench, and reproducible Jev vs Qwen research.  
  <sub>0 stars · JavaScript · updated 2026-09-20</sub>
- **[sandra-arato/icon-matcher-ui](https://github.com/sandra-arato/icon-matcher-ui)** — Browser-only UI for icon-matcher — paste a TypeSafe.ai key, match a UI title to an icon live, no backend.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[swap-mitra/jev-techstack-classifier](https://github.com/swap-mitra/jev-techstack-classifier)** — Describe a software project in plain English and get a probability-ranked tech stack (frontend, backend, database, hosting, mobile) from TypeSafe Jev.  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[tetsuya-dev-jp/jev-pacman](https://github.com/tetsuya-dev-jp/jev-pacman)** — Jev (TypeSafe System One) plays Pac-Man in real time: structured state in, one legal direction out. No screenshots, no fine-tuning.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[thevilledev/typesafe-scheduler-diagnostics](https://github.com/thevilledev/typesafe-scheduler-diagnostics)** — Experimental out-of-tree Kubernetes scheduler plugin that uses TypeSafe's Jev model to produce typed, advisory diagnoses for unschedulable Pods.  
  <sub>0 stars · Go · Apache-2.0 · updated 2026-09-19</sub>
- **[thiago-ss/jev-review](https://github.com/thiago-ss/jev-review)** — Autonomous Jev pull-request review with typed decisions, calibrated approval gates, and trusted-owner escalation  
  <sub>0 stars · Python · updated 2026-09-16</sub>
- **[tinyhumansai/tinyjevclient](https://github.com/tinyhumansai/tinyjevclient)** — An integration with jev by typesafe.ai in Rust  
  <sub>0 stars · Rust · GPL-3.0 · updated 2026-09-19</sub>
- **[tirukovelamanoj/jev-plays-doom](https://github.com/tirukovelamanoj/jev-plays-doom)** — A System One model driving the game through structured state, no pixels.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[typesend/typesafe_ai](https://github.com/typesend/typesafe_ai)** — Typed Elixir client for TypeSafe AI and its Jev System One model, with offline test stubs, concurrent fan-out, and atom-keyed answers.  
  <sub>0 stars · Elixir · MIT · updated 2026-09-17</sub>
- **[ufx7/jev-testbench](https://github.com/ufx7/jev-testbench)** — Black-box Jev test bench + a Claude/LLM-and-Jev collaboration measurement harness  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[vedssharma/jev-drive](https://github.com/vedssharma/jev-drive)** — Browser-based autonomous car simulator powered by Jev: connected roads, traffic signals, pedestrians, weather, and overtaking  
  <sub>0 stars · JavaScript · updated 2026-09-19</sub>
- **[wustep/jev-playground](https://github.com/wustep/jev-playground)** — Can a System One model steer music? Jev picks the plan (enums only); code renders sheet, audio and MIDI.  
  <sub>0 stars · TypeScript · updated 2026-09-20</sub>
- **[wwwyo/jev-playground](https://github.com/wwwyo/jev-playground)** — Playground for TypeSafe AI's Jev: typed judgments (noul / choice / score) with probabilities  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[yousudip/lizard-agent](https://github.com/yousudip/lizard-agent)** — A browser agent with no LLM in the loop — deterministic code plus Jev, a System One model. ~118ms per decision, typed and auditable.  
  <sub>0 stars · Python · MIT · updated 2026-09-18</sub>
- **[Zogrus/jev-technical-term](https://github.com/Zogrus/jev-technical-term)** — YouTubeの解説動画やZoomのセミナーを聞きながら、出てきた技術用語のひとこと解説をリアルタイム表示するローカルツール(判定AIは TypeSafe AI の Jev)  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[zzsong1023/jev-market-reflex](https://github.com/zzsong1023/jev-market-reflex)** — Fast typed AI decisions on live crypto markets using TypeSafe AI Jev.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>

### Reading and explainers

- **[DataCamp — Jev: TypeSafe's System One model](https://www.datacamp.com/blog/system-one-models-jev)** — Longer explainer on the model class, the typed question format and where it fits.
- **[LangChain — Building a harness with Jev](https://www.langchain.com/blog/building-a-harness-with-jev)** — Walkthrough of wiring Jev into an agent harness, including the jev-as-a-judge experiment.
- **[TechCrunch — A new kind of AI model from a ChatGPT inventor](https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/)** — Launch coverage and context on TypeSafe AI's seed round and early adopters.
- **[The Register — TypeSafe AI debuts model for machines that plays Doom](https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711)** — Coverage of the launch demo, with a sceptical read on the performance claims.
- **[kshetrajna12/reflex](https://github.com/kshetrajna12/reflex)** — A small open decision model: state + typed questions -> calibrated probabilities. A Jev / System One re-creation on Qwen3.5.  
  <sub>80 stars · Python · MIT · updated 2026-09-20</sub>
- **[ponyo877/jev-telop-live](https://github.com/ponyo877/jev-telop-live)** — No description provided.  
  <sub>5 stars · JavaScript · updated 2026-09-19</sub>
- **[cobusgreyling/Jev](https://github.com/cobusgreyling/Jev)** — Unofficial TypeSafe Jev showcase — System One decisions, not chat.  
  <sub>3 stars · Python · MIT · updated 2026-09-19</sub>
- **[GPT-AGI/OpenJev](https://github.com/GPT-AGI/OpenJev)** — Jev-compatible System 开源Jev  
  <sub>2 stars · Python · MIT · updated 2026-09-20</sub>
- **[almcc/slop-linter](https://github.com/almcc/slop-linter)** — Lints AI-generated code for slop using Jev, a System One model that makes fast structured decisions instead of generating text.  
  <sub>1 stars · Python · updated 2026-09-19</sub>
- **[chris-wozniczek/jev-voice-control](https://github.com/chris-wozniczek/jev-voice-control)** — Control your Mac by voice. Speech → Jev (TypeSafe AI System One model) typed decisions → macOS actions. Menu-bar Swift app.  
  <sub>1 stars · Swift · updated 2026-09-20</sub>
- **[makefinks/jev-feed-filter](https://github.com/makefinks/jev-feed-filter)** — Smart, dynamic AI filtering for X and YouTube feeds using Jev  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[mrmt/elevator-three](https://github.com/mrmt/elevator-three)** — Jev に判断を任せる自動生成のエレクトロの楽器  
  <sub>1 stars · HTML · MIT · updated 2026-09-19</sub>
- **[willfish/pi-observational-memory-jev](https://github.com/willfish/pi-observational-memory-jev)** — Jev decides what to keep. Compaction never rewrites the transcript.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[koki-develop/fizzbuzz-jev](https://github.com/koki-develop/fizzbuzz-jev)** — FizzBuzz powered by Jev, TypeSafe AI's System One model.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[nishioka-shinji/jev-edgar](https://github.com/nishioka-shinji/jev-edgar)** — Does Jev, a System One model returning calibrated probabilities, say anything useful about an earnings release before the market prices it?  
  <sub>0 stars · Python · updated 2026-09-18</sub>

### Everything else

- **[tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction)** — Claude Code plugin that replaces the compaction summary with Jev decisions: every tool call and result is scored in one fast request, stale ones are dropped or truncated, everything kept stays verbatim.  
  <sub>4491 stars · TypeScript · MIT · updated 2026-09-18</sub>
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
- **[tamaratran/jev-pruner](https://github.com/tamaratran/jev-pruner)** — Claude Code plugin: trim long Bash output with TypeSafe Jev before the model sees it  
  <sub>119 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[Mapika/decider](https://github.com/Mapika/decider)** — One-pass typed decisions with calibrated probabilities (System One style model), fine-tuned from Qwen3.5-2B  
  <sub>102 stars · Python · Apache-2.0 · updated 2026-09-19</sub>
- **[uehaj/jev-semgrep](https://github.com/uehaj/jev-semgrep)** — grep by meaning, across languages. TypeSafe Jev scores every line against a meaning; combine meanings with AND/OR/NOT. 意味で探す grep。日本語で英語を、英語で日本語を検索できる  
  <sub>97 stars · JavaScript · updated 2026-09-19</sub>
- **[RomanSlack/jev-drone](https://github.com/RomanSlack/jev-drone)** — Camera-only autonomous drone in MuJoCo with a small judgment model (TypeSafe Jev) in the loop at 2.5Hz  
  <sub>80 stars · Python · MIT · updated 2026-09-17</sub>
- **[giuliosmall/pg_typesafe](https://github.com/giuliosmall/pg_typesafe)** — Pre-alpha PostgreSQL extension for TypeSafe AI (Jev) categorical classification  
  <sub>79 stars · C · MIT · updated 2026-09-18</sub>
- **[devagrawal09/stanley-code](https://github.com/devagrawal09/stanley-code)** — Bounded TypeSafe Jev workflows for coding agents.  
  <sub>77 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[trungdq88/youtube-sponsor-detection](https://github.com/trungdq88/youtube-sponsor-detection)** — Detect youtube sponsor segment with live audio and transcript powered by Jev  
  <sub>74 stars · JavaScript · updated 2026-09-18</sub>
- **[brainstormity/Jev-X-Sentiment-Analysis](https://github.com/brainstormity/Jev-X-Sentiment-Analysis)** — No description provided.  
  <sub>55 stars · Python · updated 2026-09-19</sub>
- **[obie/ruby_decision_model](https://github.com/obie/ruby_decision_model)** — Ruby client for decision models such as Typesafe Jev  
  <sub>45 stars · Ruby · MIT · updated 2026-09-18</sub>
- **[RafalWilinski/vibecheck](https://github.com/RafalWilinski/vibecheck)** — Chrome extension: vibe-check your X posts with TypeSafe's Jev before you hit Post  
  <sub>42 stars · JavaScript · updated 2026-09-18</sub>
- **[achimala/jev-paint](https://github.com/achimala/jev-paint)** — Use Jev to make art!  
  <sub>39 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[aowang-ai/jev-trade](https://github.com/aowang-ai/jev-trade)** — Live Jev trader on Hyperliquid  
  <sub>29 stars · TypeScript · updated 2026-09-19</sub>
- **[yikangy873-gif/jev-desktop](https://github.com/yikangy873-gif/jev-desktop)** — TypeSafe Jev action selection inside Codex Computer Use  
  <sub>27 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[r-ms/mini-jev](https://github.com/r-ms/mini-jev)** — mini-Jev: what a Jev-style typed-decision interface looks like on a frozen Qwen3-4B — read the option letter's logits instead of generating JSON. Preregistered experiment, results, teaching bench.  
  <sub>25 stars · Python · MIT · updated 2026-09-18</sub>
- **[dannote/jev](https://github.com/dannote/jev)** — TypeSafe Jev for OTP: reply to Jev from a GenServer and pattern match on its answer  
  <sub>17 stars · Elixir · MIT · updated 2026-09-18</sub>
- **[FBddcz/embodied-jev](https://github.com/FBddcz/embodied-jev)** — EmbodiedJev: MuJoCo robot decision workbench with MiniCPM5-2B, Jev and compatible model APIs  
  <sub>16 stars · Python · MIT · updated 2026-09-20</sub>
- **[goodrahstar/jev-column-race](https://github.com/goodrahstar/jev-column-race)** — Jev vs Gemini 3.8 Flash: labelling 1,000 app reviews, 4.1× faster and 7× cheaper  
  <sub>16 stars · JavaScript · MIT · updated 2026-09-17</sub>
- **[kieranklaassen/ruby_llm-typesafe](https://github.com/kieranklaassen/ruby_llm-typesafe)** — TypeSafe structured-output provider for RubyLLM 2  
  <sub>15 stars · Ruby · MIT · updated 2026-09-16</sub>
- **[zadescoxp/Jev-Trades](https://github.com/zadescoxp/Jev-Trades)** — Trading bot with the all new TypeSafe AI's first system one model named as Jev  
  <sub>13 stars · Python · Apache-2.0 · updated 2026-09-18</sub>
- **[jon-devlapaz/jev-me](https://github.com/jon-devlapaz/jev-me)** — Grill-me with Jev optional each turn  
  <sub>12 stars · MIT · updated 2026-09-19</sub>
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
- **[HyunjunJeon/pi-quiet-ask](https://github.com/HyunjunJeon/pi-quiet-ask)** — TypeSafe Jev as the pi coding agent's quiet decision layer  
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
- **[TarunTomar122/jev-askable-arm](https://github.com/TarunTomar122/jev-askable-arm)** — Zero-shot English goals on a sim Franka. Jev chains hardcoded primitives.  
  <sub>5 stars · Python · MIT · updated 2026-09-17</sub>
- **[1jehuang/jev-pr-labeler](https://github.com/1jehuang/jev-pr-labeler)** — Semantic GitHub PR labels using Jev's typed decisions, with conceptual scope instead of line counts  
  <sub>4 stars · Python · MIT · updated 2026-09-19</sub>
- **[24601/Augustus](https://github.com/24601/Augustus)** — Agent skill: design judgment-assisted systems with TypeSafe Jev (System One). Maps Choice/Score/Noul onto decision theory, reranking, and routing. Composition algebra, question design, validation gates. MIT.  
  <sub>4 stars · Python · MIT · updated 2026-09-20</sub>
- **[Devin-AXIS/jev-dsh-decision](https://github.com/Devin-AXIS/jev-dsh-decision)** — Jev DSH 决策引擎｜面向 Agent Harness 的结构化决策插件。原生支持 DeepSeek Harness，通过 iPolloWork 支持 OpenCode、Codex Harness。  
  <sub>4 stars · JavaScript · updated 2026-09-20</sub>
- **[harshil1712/slidepilot](https://github.com/harshil1712/slidepilot)** — Voice-driven semantic auto-advance for Slidev, powered by Cloudflare Agents and TypeSafe AI Jev  
  <sub>4 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[ilyamk/jev-gmail-ai-spam-filter-and-labeling](https://github.com/ilyamk/jev-gmail-ai-spam-filter-and-labeling)** — Self-hosted AI email classifier for Gmail powered by Jev. Create custom labels, organize your inbox, and filter spam with confidence and cost controls.  
  <sub>4 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[SAGAR-TAMANG/sarvam-jev](https://github.com/SAGAR-TAMANG/sarvam-jev)** — Generation-free typed decisions on Indic LLMs. An open Jev-style inference engine on sarvam-1: constrained logit readout instead of autoregressive JSON. Runs client-side in the browser.  
  <sub>4 stars · Python · updated 2026-09-18</sub>
- **[adhyaay-karnwal/jev-chat](https://github.com/adhyaay-karnwal/jev-chat)** — A chatbot from typed Jev decisions: hierarchical speculative decoding over System One probabilities.  
  <sub>3 stars · Python · MIT · updated 2026-09-17</sub>
- **[ajensenwaud/hermes-jev-plugin](https://github.com/ajensenwaud/hermes-jev-plugin)** — TypeSafe Jev (System One) decision tools for Hermes Agent: jev_check / jev_route / jev_score / jev_evaluate  
  <sub>3 stars · Python · MIT · updated 2026-09-19</sub>
- **[atarikcaliskan/jevball](https://github.com/atarikcaliskan/jevball)** — 22 Jev models, one ball: a 3D football match where every player is its own Jev (TypeSafe AI System One) decision. Watch, or take over the number 9.  
  <sub>3 stars · JavaScript · updated 2026-09-19</sub>
- **[deep-diver/mini-jev](https://github.com/deep-diver/mini-jev)** — No description provided.  
  <sub>3 stars · Python · updated 2026-09-18</sub>
- **[Gaurav-Gosain/jev-go](https://github.com/Gaurav-Gosain/jev-go)** — Go client for TypeSafe's System One API and its model Jev: typed judgments and calibrated probabilities instead of generated text  
  <sub>3 stars · Go · MIT · updated 2026-09-16</sub>
- **[jamesward/zio-typesafe-ai](https://github.com/jamesward/zio-typesafe-ai)** — No description provided.  
  <sub>3 stars · Scala · Apache-2.0 · updated 2026-09-18</sub>
- **[jiayao/ctrl-f](https://github.com/jiayao/ctrl-f)** — ctrl-f that understands your query  
  <sub>3 stars · JavaScript · Apache-2.0 · updated 2026-09-20</sub>
- **[LamplighterPaul/jev-piano](https://github.com/LamplighterPaul/jev-piano)** — Jev cannot generate a single note. Given a piano and the right questions, it improvises anyway.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[milanboers/jev-plays-pokemon](https://github.com/milanboers/jev-plays-pokemon)** — Playing Pokemon Red using TypeSafe Jev  
  <sub>3 stars · Python · updated 2026-09-18</sub>
- **[mstf-svndk/jev-windows-voice](https://github.com/mstf-svndk/jev-windows-voice)** — Türkçe ve İngilizce doğal konuşmayla Windows 10/11 bilgisayar kontrolü: OpenAI Realtime, local Whisper, Jev, UI Automation ve Playwright.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[muhammedilyasy/jev-mail](https://github.com/muhammedilyasy/jev-mail)** — Chrome extension that triages Gmail with TypeSafe's Jev model: category, priority, spam % and reply % on every email.  
  <sub>3 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[noetion/dsh-jev](https://github.com/noetion/dsh-jev)** — DSH bundle that registers jev_ask for TypeSafe Jev noul, choice, and score answers.  
  <sub>3 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[oldmoldycake/jev_vampire_survivors](https://github.com/oldmoldycake/jev_vampire_survivors)** — TypeSafe's Jev model plays Vampire Survivors on Steam: BepInEx plugin + Python brain + live decision dashboard. Native Linux only.  
  <sub>3 stars · Python · MIT · updated 2026-09-19</sub>
- **[paulsmith/computer-use-jev](https://github.com/paulsmith/computer-use-jev)** — macOS computer use driven by Jev (TypeSafe System One) as the decision maker  
  <sub>3 stars · Go · MIT · updated 2026-09-17</sub>
- **[reycn/smart-switch](https://github.com/reycn/smart-switch)** — Reimagined window switcher for macOS using frontier artificial intelligence. Predicted by TypeSafe's Jev model  
  <sub>3 stars · Swift · AGPL-3.0 · updated 2026-09-18</sub>
- **[soderlind/ai-provider-for-jev](https://github.com/soderlind/ai-provider-for-jev)** — Connect WordPress to TypeSafe's Jev System One model for structured decisions (choice, score, noul).  
  <sub>3 stars · PHP · updated 2026-09-18</sub>
- **[vtrivedy/jev-plays-games](https://github.com/vtrivedy/jev-plays-games)** — Chess, Connect Four, and a decision model. Play Jev or watch Jev play itself.  
  <sub>3 stars · JavaScript · updated 2026-09-18</sub>
- **[alexsatch/omp-auto-mode](https://github.com/alexsatch/omp-auto-mode)** — Plugin for oh-my-pi that uses Typesafe Jev API to classify tool calls as safe/unsafe/ask  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[christian-taillon/opencode-jev-compactor](https://github.com/christian-taillon/opencode-jev-compactor)** — Jev powered OpenCode compaction  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[CrowdLinker/JevPromptCoach](https://github.com/CrowdLinker/JevPromptCoach)** — Claude Code plugin that scores how well you prompt a coding agent, and shows whether your habits are improving. Runs on TypeSafe's Jev model. Zero added latency.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[Dimesio/typesafe-chess](https://github.com/Dimesio/typesafe-chess)** — FUn little experiment with Typesafe AI Jev Model playing chess against stockfish :)  
  <sub>2 stars · JavaScript · updated 2026-09-19</sub>
- **[gtaras7/typesafe-jev](https://github.com/gtaras7/typesafe-jev)** — Screen a folder of CVs with the TypeSafe Jev decision model: typed judgments, an editable policy, free re-scoring.  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-17</sub>
- **[hellogumbo/should-ai-kill-us-all](https://github.com/hellogumbo/should-ai-kill-us-all)** — We ask Jev, TypeSafe AI's System One model, whether AI should kill us all. Every ten minutes. Using the actual headlines.  
  <sub>2 stars · JavaScript · CC0-1.0 · updated 2026-09-18</sub>
- **[ingebyd/fast-jev-compaction-openrouter](https://github.com/ingebyd/fast-jev-compaction-openrouter)** — Fork of tamaratran/fast-jev-compaction: Jev via OpenRouter with zero data retention (zdr, data_collection: deny)  
  <sub>2 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[MongLong0214/jev-gate](https://github.com/MongLong0214/jev-gate)** — Not every coding task needs your best model. Experimental Jev-powered model routing for Claude Code — V3 prototype runs today, V4 routes at the task boundary.  
  <sub>2 stars · TypeScript · updated 2026-09-20</sub>
- **[QuentinDanblon/pi-fast-jev-compaction](https://github.com/QuentinDanblon/pi-fast-jev-compaction)** — Verbatim context pruning for the pi coding agent, scored by TypeSafe Jev: stale tool calls and results are dropped or truncated, everything kept stays verbatim.  
  <sub>2 stars · TypeScript · updated 2026-09-18</sub>
- **[Red5d/jev-cvss](https://github.com/Red5d/jev-cvss)** — Fast CVSS scoring from vulnerability descriptions using Typesafe Jev  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[shunshunNi/redmine_jev](https://github.com/shunshunNi/redmine_jev)** — Asks Jev whether a Redmine issue's tracker fits, while you fill in the form  
  <sub>2 stars · Ruby · MIT · updated 2026-09-19</sub>
- **[zhuyansen/jev-news-cold-start](https://github.com/zhuyansen/jev-news-cold-start)** — Cross-domain check on MIND news: a zero-shot Jev headline prior is worth ~500 labelled articles, adds +0.069 ρ as features, and lifts a Thompson-sampling cold start by 25%.  
  <sub>2 stars · Python · MIT · updated 2026-09-18</sub>
- **[AboveColin/jevclient](https://github.com/AboveColin/jevclient)** — Async Python client for TypeSafe Jev. Typed questions in, probabilities and choices out, no prose to parse.  
  <sub>1 stars · Python · MIT · updated 2026-09-17</sub>
- **[aegsrl7/jevmap](https://github.com/aegsrl7/jevmap)** — Map a codebase into units and let Jev (TypeSafe AI) hand an AI coding agent the ten files that matter for a task  
  <sub>1 stars · JavaScript · MIT · updated 2026-09-18</sub>
- **[bojansandhaus/jev-home-assistant-sentinel](https://github.com/bojansandhaus/jev-home-assistant-sentinel)** — A safety boundary for AI-assisted Home Assistant decisions, with explicit policy checks and deterministic state verification.  
  <sub>1 stars · Python · MIT · updated 2026-09-19</sub>
- **[emirbartu/opencode-system-one](https://github.com/emirbartu/opencode-system-one)** — Opencode plugin using Jev (system one model) as part of software development process. Not affiliated with Opencode team.  
  <sub>1 stars · TypeScript · updated 2026-09-19</sub>
- **[minorun365/jev-cloud-quiz](https://github.com/minorun365/jev-cloud-quiz)** — 三大クラウドの機能名を、TypeSafe AI の System One モデル Jev が確率つきで判定するデモ  
  <sub>1 stars · TypeScript · Apache-2.0 · updated 2026-09-20</sub>
- **[muse0509/jev-preflight](https://github.com/muse0509/jev-preflight)** — A bounded Jev risk check for Claude Code: eight risk axes, one request, one optional reinspection.  
  <sub>1 stars · Go · MIT · updated 2026-09-19</sub>
- **[phureewat29/jev-got](https://github.com/phureewat29/jev-got)** — Jev (TypeSafe AI) PoC through Game of Thrones  
  <sub>1 stars · TypeScript · updated 2026-09-19</sub>
- **[Programalyst/realtime-vision-decision-agent](https://github.com/Programalyst/realtime-vision-decision-agent)** — Combining YOLO and Jev models to play a mobile game.  
  <sub>1 stars · Jupyter Notebook · MIT · updated 2026-09-20</sub>
- **[yohanargentina-oss/Foq](https://github.com/yohanargentina-oss/Foq)** — ⚡ Foq — the FREE, local, open-source alternative to Jev. Typed System 1 decisions in ~25 ms — no waitlist, no cloud, no per-token cost. foq.fr  
  <sub>1 stars · Python · MIT · updated 2026-09-20</sub>
- **[Z761293629/pi-jev-helm](https://github.com/Z761293629/pi-jev-helm)** — Pi extension that uses Jev task classification (via OpenRouter) to route each run to explicitly configured models with fail-open policy. Public Preview.  
  <sub>1 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[00xmario/Linkedin-Slop-Detector](https://github.com/00xmario/Linkedin-Slop-Detector)** — Chrome extension that detects AI-generated LinkedIn posts with TypeSafe's Jev model and slams a SLOP stamp on them  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[Aben25/jev-sim](https://github.com/Aben25/jev-sim)** — Fast mobile-simulator computer-use: sim-use + TypeSafe Jev (Cua jev-use pattern for iOS/Android sims)  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[adarc8/how-sure-is-jev](https://github.com/adarc8/how-sure-is-jev)** — How sure is Jev? Turn TypeSafe Jev probability outputs into one honest number, with graphs.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[allenporter/home-assistant-typesafe](https://github.com/allenporter/home-assistant-typesafe)** — Home Assistant conversation integration powered by the Jev / TypeSafe AI API for fast, structured intent routing and device control  
  <sub>0 stars · Python · Apache-2.0 · updated 2026-09-20</sub>
- **[aoi-yoneda/haikyuBattleJev](https://github.com/aoi-yoneda/haikyuBattleJev)** — Jev (TypeSafe AI) が打者を判断する配球バトル野球シミュレーション — 9回制・パワプロ風  
  <sub>0 stars · HTML · updated 2026-09-18</sub>
- **[AppitStudio/testimonial-miner](https://github.com/AppitStudio/testimonial-miner)** — Mine quotable user praise from Gmail with TypeSafe's Jev: one typed request per email, verbatim quotes, thresholds in code  
  <sub>0 stars · Python · MIT · updated 2026-09-18</sub>
- **[Ashadeepa/typesafe-showcase](https://github.com/Ashadeepa/typesafe-showcase)** — Next.js UI showing off TypeSafe's System One model (Jev) — parallel Noul judgments and a Choice-based citation checker, deployable to Vercel  
  <sub>0 stars · TypeScript · updated 2026-09-20</sub>
- **[ashafizullah/jev-linkedin](https://github.com/ashafizullah/jev-linkedin)** — Chrome extension that scores how well a LinkedIn job matches your CV — and estimates your odds of passing screening — using the Jev decision model. Bilingual (ID/EN).  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[catorch/jev-domain-auctions](https://github.com/catorch/jev-domain-auctions)** — Find underpriced GoDaddy expiry domains with deterministic market signals and TypeSafe JEV judgments.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[Dakai/omp-jev-web](https://github.com/Dakai/omp-jev-web)** — OMP browser tool that drives any page from one goal using TypeSafe Jev (System One) decisions instead of the main model.  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[DDnim/jev-tweet-radar](https://github.com/DDnim/jev-tweet-radar)** — Chrome extension: score every X post with one Jev (System One Model) call — worth engaging, buzz, misread, repost/bookmark-worthy, AI-ish  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[Deepender25/chess-with-jev-](https://github.com/Deepender25/chess-with-jev-)** — An empirical experiment fusing TypeSafe AI's non-autoregressive Jev model (System 1) with a high-performance 0x88 alpha-beta search engine (System 2). Includes live Chrome extension tracking, trust window fusion, and real-time telemetry, capable of defeating 1825 ELO bots.  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[derinworks/penr-oz-jev-syslog-analyzer](https://github.com/derinworks/penr-oz-jev-syslog-analyzer)** — An asyncio daemon that tails journald or syslog and asks Jev, for each event, which subsystem it belongs to, how severe it is, and whether it's noise. Plain code then ignores the event, alerts on it, or escalates it to a human when confidence is low.  
  <sub>0 stars · MIT · updated 2026-09-18</sub>
- **[digitalfrost84/openclaw-jev-openrouter](https://github.com/digitalfrost84/openclaw-jev-openrouter)** — OpenClaw plugin: TypeSafe AI Jev System One via OpenRouter decisions endpoint (fork of jason-allen-oneal/openclaw-plugin-typesafe-ai)  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[dizk/jev-lens](https://github.com/dizk/jev-lens)** — jev picks what a coding agent gets to see of large tool results: core library, pi extension and Claude Code plugin  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[enderkus/zammad-jev-dispatcher](https://github.com/enderkus/zammad-jev-dispatcher)** — AI ticket triage for Zammad using Jev (TypeSafe AI) - classifies and routes new tickets into the right service group automatically.  
  <sub>0 stars · Ruby · MIT · updated 2026-09-19</sub>
- **[Eric-Zhou-0302/jev-A-share-trader](https://github.com/Eric-Zhou-0302/jev-A-share-trader)** — A Jev-powered technical analysis workspace for China A-shares, supporting AKShare/Tushare, market scans, and Buy/Hold/Sell assessments with time horizons and traceable evidence.  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[ericmartinezr/are-you-smarter-than-jev](https://github.com/ericmartinezr/are-you-smarter-than-jev)** — A small app to test Jev  
  <sub>0 stars · Python · updated 2026-09-19</sub>
- **[frederickrohn/jev-harness](https://github.com/frederickrohn/jev-harness)** — experimenting with Jev  
  <sub>0 stars · updated 2026-09-20</sub>
- **[furuCRM-Inc/flash-agent-stack](https://github.com/furuCRM-Inc/flash-agent-stack)** — Local open-source drop-in for TypeSafe AI Jev + Universal WebMCP Chrome Extension — Noul/Choice/Score at 10-50ms with Transformers.js  
  <sub>0 stars · TypeScript · updated 2026-09-20</sub>
- **[gregjonesio/jev-nfl](https://github.com/gregjonesio/jev-nfl)** — Before every NFL snap, a decision-only AI model (TypeSafe Jev) calls run or pass and go/punt/kick on fourth down, graded live against the coach.  
  <sub>0 stars · JavaScript · updated 2026-09-20</sub>
- **[harshit-d3v/jev_project](https://github.com/harshit-d3v/jev_project)** — pr-scope and jevjudge — TypeSafe Jev CLIs and websites  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[HermeticOrmus/jev-confidence-routing](https://github.com/HermeticOrmus/jev-confidence-routing)** — Jev confidence routing — Ormus Jev suite. Gold Hat.  
  <sub>0 stars · MIT · updated 2026-09-19</sub>
- **[hnegishi/typesafe-ai-ruby](https://github.com/hnegishi/typesafe-ai-ruby)** — Ruby client for the TypeSafe AI(Jev) System One API  
  <sub>0 stars · Ruby · MIT · updated 2026-09-19</sub>
- **[hoshinodis/opencode-context-pruner](https://github.com/hoshinodis/opencode-context-pruner)** — Continuous verbatim context pruning for OpenCode, powered by TypeSafe Jev. Port of fast-jev-compaction adapted to OpenCode's context hook.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[imserhatdemir/jevspace](https://github.com/imserhatdemir/jevspace)** — A DarkOrbit-style space game piloted by Jev — TypeSafe's System One model. Three.js world, deterministic engine, Jev picks the targets.  
  <sub>0 stars · HTML · updated 2026-09-18</sub>
- **[JacquesGariepy/Essentiel-Jev](https://github.com/JacquesGariepy/Essentiel-Jev)** — AI-assisted email, calendar, tasks and documents: TypeSafe Jev gives typed, probability-backed judgments; LLMs draft (OpenAI-compatible APIs, local models via Ollama/LM Studio, Claude Code, Codex); you approve every action.  
  <sub>0 stars · HTML · updated 2026-09-19</sub>
- **[JaelChen/obsidian-jev-archiver](https://github.com/JaelChen/obsidian-jev-archiver)** — Sort Obsidian inbox notes into folders with TypeSafe Jev; LLM steps in only when Jev is unsure  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[jkalend/jev-realms](https://github.com/jkalend/jev-realms)** — Terminal ASCII RPG where every NPC thinks with Jev (TypeSafe AI System One) — design draft  
  <sub>0 stars · MIT · updated 2026-09-19</sub>
- **[jolehuit/jev-downloads-sorter](https://github.com/jolehuit/jev-downloads-sorter)** — A ~/Downloads folder that sorts itself: one Jev decision per file, launchd WatchPaths, no daemon  
  <sub>0 stars · Python · MIT · updated 2026-09-18</sub>
- **[jonatasperaza/jev-voice-windows](https://github.com/jonatasperaza/jev-voice-windows)** — Controle o Windows por voz: transcricao local (faster-whisper GPU) + decisoes tipadas do Jev (TypeSafe AI)  
  <sub>0 stars · JavaScript · updated 2026-09-20</sub>
- **[jujumilk3/jev-calibration-audit](https://github.com/jujumilk3/jev-calibration-audit)** — Independent API-only calibration audit of TypeSafe AI's Jev decision model  
  <sub>0 stars · Python · MIT · updated 2026-09-18</sub>
- **[kevin9327/jev-harness](https://github.com/kevin9327/jev-harness)** — JevHarness: TypeSafe Jev agent tool-call gate. execute / confirm / reject in code.  
  <sub>0 stars · Python · MIT · updated 2026-09-18</sub>
- **[lab-dados/jev-anotacao-sentencas](https://github.com/lab-dados/jev-anotacao-sentencas)** — Jev (TypeSafe) vs. Gemini 3.8 Flash vs. GPT-5.6 Luna na anotação estruturada de sentenças do TJSP: qualidade, tempo e custo  
  <sub>0 stars · Python · updated 2026-09-16</sub>
- **[lldois/dsh-jev](https://github.com/lldois/dsh-jev)** — TypeSafe Jev System One semantic tool routing and typed decisions for DeepSeek Harness (DSH)  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[luizribeiro/jevrs](https://github.com/luizribeiro/jevrs)** — Rust client for TypeSafe AI's Jev (System One) model: sans-IO core, typed questions, WASI transports  
  <sub>0 stars · Rust · Apache-2.0 · updated 2026-09-20</sub>
- **[malDuffin/typesafe-3d-chess](https://github.com/malDuffin/typesafe-3d-chess)** — 3D chess powered by TypeSafe AI (Jev). AI vs AI by default, or play either side. Multiple difficulty levels.  
  <sub>0 stars · TypeScript · updated 2026-09-17</sub>
- **[MANISH007700/tidy](https://github.com/MANISH007700/tidy)** — A self-organizing Downloads folder. Jev (TypeSafe AI) files each download into the folder you described in plain English; unsure files stay put; every move is logged and undoable.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[matura-lol/Jev-categorise](https://github.com/matura-lol/Jev-categorise)** — Jev based exam paper categorisation used on matura.lol  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[meetr1912/jev-bracket](https://github.com/meetr1912/jev-bracket)** — TypeSafe Jev predicts a synthetic 32-team tournament in round fan-out: calibrated Brier vs Elo/seed/oracle plus Monte Carlo champion odds.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[mhmdkzr/jev](https://github.com/mhmdkzr/jev)** — An unofficial Go client for TypeSafe's System One Jev model  
  <sub>0 stars · Go · MIT · updated 2026-09-18</sub>
- **[Mrmimee/hermes-plugin-jev](https://github.com/Mrmimee/hermes-plugin-jev)** — Jev (TypeSafe AI) System One decision engine plugin for Hermes Agent, backed by Agnes AI Flash.  
  <sub>0 stars · Python · updated 2026-09-19</sub>
- **[Olli0103/openclaw-typesafe-ai](https://github.com/Olli0103/openclaw-typesafe-ai)** — Optional typed TypeSafe AI Jev decisions for OpenClaw, with SecretRef credentials and strict API validation.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[ozzy2438/apply-os](https://github.com/ozzy2438/apply-os)** — Apply OS — Personal career decision engine powered by TypeSafe AI (Jev). Ranks job postings, drafts applications, and automates the pipeline with typed, calibrated decisions. Agency-ready build spec included.  
  <sub>0 stars · updated 2026-09-19</sub>
- **[pambrose/jev4k](https://github.com/pambrose/jev4k)** — A Kotlin DSL and client for TypeSafe's Jev model  
  <sub>0 stars · Kotlin · Apache-2.0 · updated 2026-09-20</sub>
- **[parzivale/jev-bot](https://github.com/parzivale/jev-bot)** — Discord bot that scores how likely a statement is to be true, using TypeSafe's jev model  
  <sub>0 stars · Rust · updated 2026-09-19</sub>
- **[PavitarSinghArneja/one-dollar-tahoe](https://github.com/PavitarSinghArneja/one-dollar-tahoe)** — Reproducing the real $1 Chevy Tahoe chatbot exploit and testing 6 AI defenses (incl. TypeSafe's real Jev API) against 36 prompt-injection attacks.  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[rashedInt32/jev-lens](https://github.com/rashedInt32/jev-lens)** — Do I need to look at what Claude Code just did? A calibrated verdict per stop, judged by TypeSafe Jev. Pairs with jev-lens.nvim  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-20</sub>
- **[rbalch/typesafeai-review](https://github.com/rbalch/typesafeai-review)** — Using Typesafe.AI to generate diff reviews.  
  <sub>0 stars · Python · updated 2026-09-18</sub>
- **[rchovatiya88/cyber-breach-jev](https://github.com/rchovatiya88/cyber-breach-jev)** — Cyber-Breach: The Jev Protocol - A tactical cyberpunk arena combat game powered by TypeSafe AI Jev System One decision model  
  <sub>0 stars · JavaScript · updated 2026-09-18</sub>
- **[Reamd7/omp-fast-jev-compaction](https://github.com/Reamd7/omp-fast-jev-compaction)** — Verbatim context compaction for Oh My Pi (omp) using TypeSafe Jev decisions — port of joelhooks/pi-fast-jev-compaction  
  <sub>0 stars · TypeScript · updated 2026-09-19</sub>
- **[rikkooo/jev-trade](https://github.com/rikkooo/jev-trade)** — A market-data trading simulator powered by auditable Jev judgments  
  <sub>0 stars · TypeScript · updated 2026-09-20</sub>
- **[russleyshaw/typesafe-jev-gate](https://github.com/russleyshaw/typesafe-jev-gate)** — Fail-closed Jev policy gate for Hermes Agent tool calls  
  <sub>0 stars · Python · updated 2026-09-20</sub>
- **[sandra-arato/icon-matcher](https://github.com/sandra-arato/icon-matcher)** — Match a UI section title to a Hugeicons icon using TypeSafe.ai's Choice primitive — no lexical/keyword search.  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-18</sub>
- **[scursel/hermes-jev-fastpath](https://github.com/scursel/hermes-jev-fastpath)** — Hermes Agent middleware using TypeSafe Jev for fail-open deterministic fast paths before LLM execution  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[SuryaManavalan/JevNash](https://github.com/SuryaManavalan/JevNash)** — Jev harness for playing or working, agnostic of the game or workstream.  
  <sub>0 stars · Python · updated 2026-09-19</sub>
- **[sushrutb17/linkedin-noslop-extension](https://github.com/sushrutb17/linkedin-noslop-extension)** — Chrome extension that blurs low-value LinkedIn feed posts using TypeSafe's Jev model, with one-click reveal  
  <sub>0 stars · JavaScript · MIT · updated 2026-09-19</sub>
- **[taro1985/dual-process-ai](https://github.com/taro1985/dual-process-ai)** — Dual-Process AI: A design pattern combining System 1 (Jev/TypeSafe AI) with System 2 (Gemini) — inspired by Kahneman's Thinking, Fast and Slow  
  <sub>0 stars · Python · MIT · updated 2026-09-19</sub>
- **[teyhouse/jev-secret-detection](https://github.com/teyhouse/jev-secret-detection)** — Measures how well TypeSafe's RLCD-Jev model spots real secret credentials in file snippets  
  <sub>0 stars · Python · updated 2026-09-18</sub>
- **[thumay9700/jev-plays](https://github.com/thumay9700/jev-plays)** — Autonomous game agent powered by TypeSafe AI's Jev (System One decision engine), starting with Pokémon Red.  
  <sub>0 stars · Python · MIT · updated 2026-09-18</sub>
- **[tincke10/Jevest](https://github.com/tincke10/Jevest)** — Automated PR review pipeline using Jev (TypeSafe AI) as a millisecond decision layer over an LLM reviewer  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-20</sub>
- **[vcjdeboer/jev-voice](https://github.com/vcjdeboer/jev-voice)** — Multi-dimensional writing voice profiler powered by Jev (TypeSafe AI)  
  <sub>0 stars · TypeScript · MIT · updated 2026-09-19</sub>
- **[WallerChen/jev-measured](https://github.com/WallerChen/jev-measured)** — Measured cost, latency and raw output from the live Jev API (TypeSafe AI System One model) across 8 use cases — reproducible  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>
- **[yibie/laya-jev-lab](https://github.com/yibie/laya-jev-lab)** — Independent measurements of typed-decision models: Jev (TypeSafe API) vs Laya (open weights), and a local-first cascade that matches Jev's accuracy at 1.8x the speed  
  <sub>0 stars · Python · MIT · updated 2026-09-20</sub>

<sub>2 more in this category are tracked in [`data/registry.json`](data/registry.json).</sub>

---

<sub>735 entries · 481 of them not listed by the other public Jev directories · last updated 2026-09-20 · 71 candidates in the [review queue](data/review-queue.md) · generated by [`tools/fetch.js`](tools/fetch.js)</sub>

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

Curation is done by Jev itself, on every entry rather than only the borderline ones. Each
repository is sent as state with one typed question — does this repository's own code call, wrap, benchmark or reimplement Jev, or
does it merely mention it — and the returned probability decides: at or above 0.75 it
joins the list, at or below 0.45 it is rejected, and anything between stays in the queue
for a human. The verdicts are kept in `data/triage.json`.

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
