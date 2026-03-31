import Link from 'next/link';

export default function ExamTopicsPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Hero */}
                <div className="text-center space-y-8">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                        AWS Certified AI Practitioner Exam Topics
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
                        Plain-English explanations of every major AI/ML concept and AWS service tested in the AWS Certified AI Practitioner (AIF-C01) exam.
                    </p>
                </div>

                {/* TOC Container */}
                <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-6">
                    <h2 className="tracking-tight text-[18px] font-bold text-slate-900 mb-2">Jump to a Domain</h2>
                    <ul className="space-y-4 text-slate-500 list-none px-0 text-[16px]">
                        <li><a href="#domain1" className="hover:text-slate-900 transition-colors">Domain 1: Fundamentals of AI and ML</a></li>
                        <li><a href="#domain2" className="hover:text-slate-900 transition-colors">Domain 2: Fundamentals of Generative AI</a></li>
                        <li><a href="#domain3" className="hover:text-slate-900 transition-colors">Domain 3: Applications of Foundation Models</a></li>
                        <li><a href="#domain4" className="hover:text-slate-900 transition-colors">Domain 4: Guidelines for Responsible AI</a></li>
                        <li><a href="#domain5" className="hover:text-slate-900 transition-colors">Domain 5: Security, Compliance, and Governance for AI Solutions</a></li>
                        <li><a href="#services" className="hover:text-slate-900 transition-colors">Key AWS AI Services</a></li>
                    </ul>
                </div>

                <div className="space-y-16">
                    {/* DOMAIN 1 */}
                    <div id="domain1" className="scroll-mt-24 space-y-8">
                        <div className="space-y-4">
                            <h2 className="tracking-tight text-[30px] font-bold text-slate-900">Domain 1: Fundamentals of AI and ML</h2>
                            <p className="border-l-2 border-indigo-500 pl-4 text-slate-500 text-[16px] leading-relaxed">
                                This domain tests your understanding of what AI and ML are, how they work, and when they should be used. You need to know the different types of learning, common algorithms, and the overall lifecycle of an ML project.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">Artificial Intelligence (AI) vs. Machine Learning (ML) vs. Deep Learning</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p><strong>Artificial Intelligence</strong> is the broadest category — it refers to any technology that enables machines to perform tasks that would normally require human intelligence, such as reasoning, perception, or decision-making.</p>
                                    <p><strong>Machine Learning</strong> is a subset of AI. Instead of being explicitly programmed with rules, ML models learn patterns from data and improve their performance over time.</p>
                                    <p><strong>Deep Learning</strong> is a subset of ML that uses artificial neural networks with many layers (hence "deep"). Deep learning powers most modern AI breakthroughs, including image recognition, natural language processing, and generative AI.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
                                <div className="absolute top-4 right-4"><span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-medium px-3 py-1 rounded-full">High Frequency</span></div>
                                <h3 className="text-[20px] font-bold text-slate-900 pr-28">Types of Machine Learning</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p><strong>Supervised Learning:</strong> The model is trained on labelled data — inputs paired with correct outputs. The model learns to map inputs to outputs. Examples include email spam classification and house price prediction.</p>
                                    <p><strong>Unsupervised Learning:</strong> The model is given unlabelled data and must discover patterns or groupings on its own. Common use cases include customer segmentation and anomaly detection.</p>
                                    <p><strong>Reinforcement Learning:</strong> The model learns through trial and error by receiving rewards or penalties based on its actions in an environment. Used in robotics, game-playing AI, and autonomous systems.</p>
                                    <p><strong>Semi-supervised Learning:</strong> A combination of labelled and unlabelled data — useful when labelling all data is expensive or time-consuming.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">The ML Lifecycle</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>A machine learning project typically follows these stages: <strong>problem framing</strong> (defining what you want to predict or decide), <strong>data collection and preparation</strong> (gathering, cleaning, and labelling data), <strong>feature engineering</strong> (selecting and transforming input variables), <strong>model training</strong> (fitting the model to data), <strong>model evaluation</strong> (measuring performance with metrics), <strong>deployment</strong> (making the model available for predictions), and <strong>monitoring</strong> (tracking performance in production).</p>
                                    <p>Amazon SageMaker supports all of these stages.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">Key ML Concepts: Bias, Variance, and Overfitting</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p><strong>Overfitting</strong> occurs when a model learns the training data too well — including its noise — and performs poorly on new, unseen data. Think of it as memorising rather than learning.</p>
                                    <p><strong>Underfitting</strong> occurs when a model is too simple to capture the patterns in the data, resulting in poor performance on both training and test data.</p>
                                    <p><strong>Bias</strong> refers to systematic errors in a model's predictions — it consistently misses in one direction.</p>
                                    <p><strong>Variance</strong> refers to how sensitive a model is to small fluctuations in training data. High variance models overfit; high bias models underfit.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
                                <div className="absolute top-4 right-4"><span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-medium px-3 py-1 rounded-full">High Frequency</span></div>
                                <h3 className="text-[20px] font-bold text-slate-900 pr-28">Model Evaluation Metrics</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p><strong>Accuracy:</strong> The percentage of correct predictions. Misleading when the dataset is imbalanced (e.g., 99% of emails are not spam).</p>
                                    <p><strong>Precision:</strong> Of all the items the model flagged as positive, what proportion were actually positive? High precision = fewer false alarms.</p>
                                    <p><strong>Recall (Sensitivity):</strong> Of all the actual positives, what proportion did the model correctly identify? High recall = fewer missed cases.</p>
                                    <p><strong>F1 Score:</strong> The harmonic mean of precision and recall. Useful when you need to balance both.</p>
                                    <p><strong>RMSE (Root Mean Squared Error):</strong> Used for regression tasks — measures how far predictions are from actual values.</p>
                                    <p><strong>AUC-ROC:</strong> Measures a model's ability to discriminate between classes across different classification thresholds.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-200"></div>

                    {/* DOMAIN 2 */}
                    <div id="domain2" className="scroll-mt-24 space-y-8 pt-8">
                        <div className="space-y-4">
                            <h2 className="tracking-tight text-[30px] font-bold text-slate-900">Domain 2: Fundamentals of Generative AI</h2>
                            <p className="border-l-2 border-indigo-500 pl-4 text-slate-500 text-[16px] leading-relaxed">
                                This domain covers the concepts behind generative AI — models that can create new content including text, images, code, and audio. Understanding how these models work at a conceptual level is essential.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">What Is Generative AI?</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>Generative AI refers to AI models that can produce new content — text, images, audio, video, code — rather than simply classifying or predicting from existing data. Unlike traditional ML models that output a label or number, generative models create something novel based on what they have learned from training data.</p>
                                    <p>Common use cases include drafting emails and reports, generating code, answering customer questions, summarising documents, creating images, and building conversational chatbots.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
                                <div className="absolute top-4 right-4"><span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-medium px-3 py-1 rounded-full">High Frequency</span></div>
                                <h3 className="text-[20px] font-bold text-slate-900 pr-28">Large Language Models (LLMs)</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>A Large Language Model is a type of generative AI model trained on vast amounts of text data. LLMs learn statistical patterns in language and can generate coherent, contextually relevant text in response to a prompt.</p>
                                    <p>LLMs are the foundation of tools like chatbots, code assistants, and document summarisers. On AWS, LLMs are accessible through Amazon Bedrock, which allows you to use models from providers like Anthropic, Meta, Mistral, Cohere, and Amazon's own Titan models without managing any infrastructure.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
                                <div className="absolute top-4 right-4"><span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-medium px-3 py-1 rounded-full">High Frequency</span></div>
                                <h3 className="text-[20px] font-bold text-slate-900 pr-28">Transformer Architecture</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>The Transformer is the neural network architecture that underpins virtually all modern LLMs. Introduced in 2017, it uses a mechanism called <strong>self-attention</strong> to weigh the relevance of different words in a sequence to one another — allowing the model to understand context across long passages of text.</p>
                                    <p>Unlike earlier recurrent neural networks (RNNs), transformers can process all words in a sequence simultaneously, making them far more efficient to train at scale. The "T" in ChatGPT and GPT-4 stands for Transformer.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">Tokens and Embeddings</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p><strong>Tokens</strong> are the basic units that LLMs process. A token is roughly equivalent to a word, but common words may be a single token while rare words might be split into multiple tokens. Understanding tokens matters because LLM pricing and context window limits are typically expressed in tokens.</p>
                                    <p><strong>Embeddings</strong> are numerical vector representations of text (or other data). They allow the model to capture semantic similarity — so "cat" and "feline" would have embeddings that are mathematically close to each other. Embeddings are fundamental to search, recommendation systems, and Retrieval Augmented Generation (RAG).</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
                                <div className="absolute top-4 right-4"><span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-medium px-3 py-1 rounded-full">High Frequency</span></div>
                                <h3 className="text-[20px] font-bold text-slate-900 pr-28">Foundation Models</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>A foundation model is a large AI model trained on broad data at scale that can be adapted to a wide variety of tasks. Rather than training a separate model for every use case, organisations can use a single foundation model as a starting point and customise it through fine-tuning or prompt engineering.</p>
                                    <p>On AWS, Amazon Bedrock is the service that provides access to foundation models from multiple providers via a unified API. This removes the need to manage GPUs, training infrastructure, or model hosting.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">Context Window and Hallucinations</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>The <strong>context window</strong> is the maximum amount of text (measured in tokens) that an LLM can consider at once — including both the input prompt and the output it generates. Larger context windows allow for longer conversations and documents but require more compute.</p>
                                    <p><strong>Hallucinations</strong> are a key limitation of LLMs — the model generates confident-sounding but factually incorrect information. This happens because LLMs predict the most statistically likely next token, not necessarily the factually correct one. Mitigation strategies include RAG (grounding the model in verified data) and human review workflows.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-200"></div>

                    {/* DOMAIN 3 */}
                    <div id="domain3" className="scroll-mt-24 space-y-8 pt-8">
                        <div className="space-y-4">
                            <h2 className="tracking-tight text-[30px] font-bold text-slate-900">Domain 3: Applications of Foundation Models</h2>
                            <p className="border-l-2 border-indigo-500 pl-4 text-slate-500 text-[16px] leading-relaxed">
                                This is the most heavily tested domain. It covers how foundation models are actually used in practice — the techniques for improving their outputs and the AWS services that enable these applications.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
                                <div className="absolute top-4 right-4"><span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-medium px-3 py-1 rounded-full">High Frequency</span></div>
                                <h3 className="text-[20px] font-bold text-slate-900 pr-28">Prompt Engineering</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>Prompt engineering is the practice of crafting inputs to a language model to produce better outputs. It is one of the primary ways to improve model responses without retraining.</p>
                                    <p><strong>Zero-shot prompting:</strong> Asking the model to perform a task with no examples provided. Works well for simple, well-understood tasks.</p>
                                    <p><strong>Few-shot prompting:</strong> Providing a small number of examples in the prompt to guide the model's response format and style. Significantly improves performance on specialised tasks.</p>
                                    <p><strong>Chain-of-thought prompting:</strong> Asking the model to reason step-by-step before giving a final answer. Improves accuracy on complex reasoning and maths problems.</p>
                                    <p><strong>System prompts:</strong> Instructions given to the model at the start of a session that define its role, tone, or constraints — for example, "You are a helpful customer support agent for a banking app."</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
                                <div className="absolute top-4 right-4"><span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-medium px-3 py-1 rounded-full">High Frequency</span></div>
                                <h3 className="text-[20px] font-bold text-slate-900 pr-28">Retrieval Augmented Generation (RAG)</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>RAG is a technique that improves LLM accuracy by grounding the model in external, verified knowledge at inference time. Instead of relying solely on what the model learned during training, RAG retrieves relevant documents from a knowledge base and includes them in the prompt context.</p>
                                    <p>The workflow is: (1) convert knowledge base documents into embeddings and store them in a vector database, (2) when a user asks a question, convert it to an embedding and search for similar documents, (3) include the retrieved documents in the LLM prompt, (4) the LLM generates an answer grounded in that retrieved context.</p>
                                    <p>RAG reduces hallucinations, keeps responses up to date without retraining, and allows organisations to use private internal knowledge securely. On AWS, Amazon Bedrock Knowledge Bases automates the RAG pipeline.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">Fine-Tuning vs. RAG</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p><strong>Fine-tuning</strong> involves further training a pre-trained foundation model on a custom dataset so that it learns new knowledge or adopts a specific style or behaviour. It modifies the model's weights permanently. Fine-tuning is best when you need the model to have deep knowledge of a specialised domain (e.g., medical terminology), behave in a consistent tone, or perform a very specific task.</p>
                                    <p><strong>RAG</strong> does not change the model at all — it changes what information is given to the model at inference time. RAG is better when you need up-to-date information, when the knowledge base changes frequently, or when you cannot afford the cost of fine-tuning.</p>
                                    <p>On the exam, if a scenario involves current or frequently updated data, the answer is usually RAG. If the scenario involves learning a new style or specialised vocabulary, fine-tuning may be more appropriate.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
                                <div className="absolute top-4 right-4"><span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-medium px-3 py-1 rounded-full">High Frequency</span></div>
                                <h3 className="text-[20px] font-bold text-slate-900 pr-28">Amazon Bedrock</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>Amazon Bedrock is AWS's fully managed service for accessing and customising foundation models through a single API. It supports models from Anthropic (Claude), Meta (Llama), Cohere, Mistral, Stability AI, and Amazon's own Titan models.</p>
                                    <p>Key features include: model inference (generating responses), fine-tuning (customising models on your data), Bedrock Knowledge Bases (managed RAG), Bedrock Agents (AI agents that can take actions), and Bedrock Guardrails (applying content filters and safety controls).</p>
                                    <p>All data processed through Bedrock stays within your AWS environment and is not used to train the underlying models, which is important for data privacy and compliance.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">AI Agents</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>An AI agent is an LLM-powered system that can take multi-step actions to accomplish a goal — not just generate a single response. Agents can call tools, APIs, or databases, make decisions about what to do next, and loop through reasoning steps until a task is complete.</p>
                                    <p>Amazon Bedrock Agents allows you to build agents that can interact with your systems (e.g., query a database, submit a form, check an order status) in response to natural language instructions from users.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">Generative AI Evaluation Metrics</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p><strong>BLEU (Bilingual Evaluation Understudy):</strong> Measures how similar generated text is to reference text. Commonly used for translation quality.</p>
                                    <p><strong>ROUGE:</strong> Measures recall — how much of the reference content is captured in the generated output. Commonly used for summarisation tasks.</p>
                                    <p><strong>BERTScore:</strong> Uses contextual embeddings to measure semantic similarity between generated and reference text, going beyond word overlap.</p>
                                    <p><strong>Human Evaluation:</strong> For many use cases, especially open-ended generation, human judges remain the gold standard for evaluating quality, relevance, and safety.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-200"></div>

                    {/* DOMAIN 4 */}
                    <div id="domain4" className="scroll-mt-24 space-y-8 pt-8">
                        <div className="space-y-4">
                            <h2 className="tracking-tight text-[30px] font-bold text-slate-900">Domain 4: Guidelines for Responsible AI</h2>
                            <p className="border-l-2 border-indigo-500 pl-4 text-slate-500 text-[16px] leading-relaxed">
                                This domain covers the ethical, social, and legal considerations involved in building and deploying AI systems. It is increasingly important as AI becomes more prevalent in consequential decisions.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
                                <div className="absolute top-4 right-4"><span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-medium px-3 py-1 rounded-full">High Frequency</span></div>
                                <h3 className="text-[20px] font-bold text-slate-900 pr-28">Bias and Fairness in AI</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>AI models can learn and amplify biases present in their training data. For example, if historical hiring data reflects gender bias, a model trained on that data may learn to discriminate against certain groups.</p>
                                    <p>Types of bias include <strong>data bias</strong> (training data that is unrepresentative), <strong>label bias</strong> (human annotators applying inconsistent or biased labels), and <strong>model bias</strong> (the algorithm itself favouring certain patterns). Amazon SageMaker Clarify is the primary AWS tool for detecting and measuring bias in ML models and datasets.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">Explainability and Transparency</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p><strong>Explainability</strong> refers to the ability to understand and explain why an AI model made a particular decision. This is critical in regulated industries like healthcare, finance, and lending where decisions must be justifiable.</p>
                                    <p>Some models (like decision trees) are inherently explainable. Others, like deep neural networks, are "black boxes" — their internal workings are difficult to interpret. Amazon SageMaker Clarify provides explainability features that identify which input features most influenced a prediction.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">Human Oversight and Amazon A2I</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>Human oversight involves keeping humans in the loop for AI decisions, particularly for high-stakes or low-confidence predictions. Amazon Augmented AI (Amazon A2I) is an AWS service that makes it easy to route machine learning predictions to human reviewers when confidence is below a threshold or when compliance requires human review.</p>
                                    <p>On the exam, if a scenario involves ensuring that edge cases are reviewed by humans before an AI decision is actioned, Amazon A2I is likely the correct service.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">Responsible AI Principles</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>AWS's approach to responsible AI includes several key principles: <strong>fairness</strong> (ensuring equitable outcomes across groups), <strong>explainability</strong> (making AI decisions understandable), <strong>privacy and security</strong> (protecting data used in AI systems), <strong>safety</strong> (preventing harm from AI outputs), <strong>controllability</strong> (maintaining human oversight), and <strong>veracity and robustness</strong> (ensuring models perform reliably).</p>
                                    <p>Amazon Bedrock Guardrails allows developers to apply content filters, block harmful topics, and enforce responsible AI policies at the application level.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-200"></div>

                    {/* DOMAIN 5 */}
                    <div id="domain5" className="scroll-mt-24 space-y-8 pt-8">
                        <div className="space-y-4">
                            <h2 className="tracking-tight text-[30px] font-bold text-slate-900">Domain 5: Security, Compliance, and Governance for AI Solutions</h2>
                            <p className="border-l-2 border-indigo-500 pl-4 text-slate-500 text-[16px] leading-relaxed">
                                This domain covers the AWS services and practices needed to secure AI systems, maintain compliance, and implement governance frameworks.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
                                <div className="absolute top-4 right-4"><span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-medium px-3 py-1 rounded-full">High Frequency</span></div>
                                <h3 className="text-[20px] font-bold text-slate-900 pr-28">Data Security for AI</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>Securing data used in AI systems involves controlling who has access to training data and model outputs, encrypting data at rest and in transit, and ensuring sensitive data is not inadvertently exposed in model outputs or logs.</p>
                                    <p>Key AWS tools include <strong>AWS IAM</strong> for access control, <strong>AWS KMS</strong> for encryption key management, <strong>Amazon VPC</strong> and <strong>AWS PrivateLink</strong> for network isolation, and <strong>Amazon S3</strong> with appropriate bucket policies for secure data storage.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">The AWS Shared Responsibility Model</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p>In the context of AI, the shared responsibility model defines what AWS secures versus what the customer must secure. AWS is responsible for securing the underlying infrastructure — hardware, networking, and managed service operations. The customer is responsible for securing their data, configuring access controls, managing model outputs, and ensuring compliance with regulations applicable to their use case.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                                <h3 className="text-[20px] font-bold text-slate-900">AI Governance Services</h3>
                                <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                    <p><strong>AWS Config:</strong> Monitors and records the configuration of AWS resources over time, enabling compliance auditing and change tracking.</p>
                                    <p><strong>AWS CloudTrail:</strong> Logs all API calls made in your AWS account, providing a full audit trail for AI service usage.</p>
                                    <p><strong>AWS Audit Manager:</strong> Automates evidence collection for compliance audits, mapping AWS activity to regulatory frameworks.</p>
                                    <p><strong>Amazon Inspector:</strong> Automated vulnerability scanning for EC2 instances and container images, relevant when AI workloads are deployed on compute resources.</p>
                                    <p><strong>AWS Artifact:</strong> Provides access to AWS compliance documentation and agreements.</p>
                                    <p><strong>SageMaker Model Cards:</strong> Documenting a model's intended purpose, performance characteristics, and lineage — supporting transparency and governance requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-200"></div>

                    {/* KEY AWS SERVICES */}
                    <div id="services" className="scroll-mt-24 space-y-8 pt-8">
                        <div className="space-y-4">
                            <h2 className="tracking-tight text-[30px] font-bold text-slate-900">Key AWS AI Services at a Glance</h2>
                            <p className="border-l-2 border-indigo-500 pl-4 text-slate-500 text-[16px] leading-relaxed mb-6">
                                These are the AWS services most commonly tested in the AIF-C01 exam. You should know what each one does and when to use it.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Amazon Bedrock", desc: "Fully managed access to foundation models from multiple providers. Use for GenAI applications, RAG, agents, and fine-tuning — without managing infrastructure." },
                                { name: "Amazon SageMaker", desc: "End-to-end ML platform for building, training, and deploying custom ML models. Covers the entire ML lifecycle from data labelling to model monitoring." },
                                { name: "Amazon Rekognition", desc: "Pre-built computer vision service. Use for image and video analysis — facial recognition, object detection, content moderation." },
                                { name: "Amazon Comprehend", desc: "Natural language processing service. Extracts entities, sentiment, key phrases, and language from text without building a custom model." },
                                { name: "Amazon Transcribe", desc: "Converts speech to text (audio and video files). Supports multiple languages, custom vocabulary, and speaker diarisation." },
                                { name: "Amazon Polly", desc: "Converts text to lifelike speech. Used for voice interfaces, accessibility features, and automated narration." },
                                { name: "Amazon Translate", desc: "Neural machine translation service. Translates text across dozens of languages in real time or in batch." },
                                { name: "Amazon Lex", desc: "Build conversational chatbots and voice interfaces powered by the same technology as Alexa. Integrates with Lambda for business logic." },
                                { name: "Amazon Kendra", desc: "Intelligent enterprise search powered by ML. Searches across documents, databases, and content repositories using natural language queries." },
                                { name: "Amazon Personalize", desc: "Build real-time personalisation and recommendation systems — product recommendations, content recommendations, or re-ranking search results." },
                                { name: "Amazon SageMaker Clarify", desc: "Detects bias in datasets and ML models. Provides explainability reports showing which features most influence model predictions." },
                                { name: "Amazon Augmented AI (A2I)", desc: "Routes ML predictions to human reviewers when confidence is low or when regulations require human oversight. Integrates with SageMaker and Textract." }
                            ].map((service, idx) => (
                                <div key={idx} className="bg-white border border-slate-200 hover:border-indigo-500/30 transition-colors rounded-2xl p-6 space-y-3">
                                    <div className="font-bold text-slate-900 text-[18px]">{service.name}</div>
                                    <p className="text-slate-500 text-[14px] leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 rounded-2xl bg-orange-50 border border-orange-200 text-orange-800 relative overflow-hidden">
                            <span className="block font-bold mb-2">Exam tip:</span>
                            For questions about choosing the right AWS service, start by identifying the core task: is it text, speech, images, translation, or recommendation? Then match the task to the appropriate pre-built AI service. If the scenario requires a custom model, Amazon SageMaker is almost always involved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
