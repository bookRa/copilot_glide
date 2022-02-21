# GLIDE App with Copilot

So, I read a [cool article about a new text2image model released by OpenAI](https://www.marktechpost.com/2021/12/29/openai-introduces-glide-model-for-photorealistic-image-generation/).

I decided to implement a simple webapp that would allow me to talk to a personal AIrtist.

**\* Also took the opportunity to test-drive [GitHub's Copilot AI Code completion](https://copilot.github.com/)... Spoiler Alert: It didn't take long to impress me.** 

On the data engineering side of things, I want to store my prompt, the model's suggestions, and the piece I actually select.

## Ideas for further improvement
* Rather than host the model locally, incorporate a serverless function which would call the model that is hosted on its own GPU-optimized container
* Develop pipeline to collect more data for [active learning](https://en.wikipedia.org/wiki/Active_learning_(machine_learning)): User Prompt, Model Options, and final User Selection(s)