# Auto PPT Generator

A web application that automatically converts raw text into a fully formatted PowerPoint presentation using a user-provided template and the power of the Google Gemini API.

---

## Features

- **Intelligent Content Structuring**: Leverages the Gemini API to analyze and intelligently break down large blocks of text into slide titles and bullet points.  
- **Template-Based Styling**: Uses a `.pptx` file uploaded by the user as a template, automatically adopting its fonts, colors, and layouts.  
- **Custom Guidance**: Allows users to provide a one-line prompt to guide the tone and structure of the presentation (e.g., *"make this an investor pitch deck"*).  
- **Secure API Key Handling**: API keys are handled securely on the backend and are never stored or logged. The app uses environment variables for configuration.  
- **Downloadable Output**: Generates and provides a downloadable `.pptx` file directly in the browser.  

---

## How It Works

This application seamlessly bridges the gap between unstructured text and a professional presentation through a two-step process:

### 1. Content Generation (via Gemini API)  
When a user submits their text and an optional guidance prompt, the backend sends a carefully crafted request to the Google Gemini API. The prompt instructs the model to act as a presentation expert and restructure the text into a JSON array of slides. Each slide object in the array contains a title and an array of content bullet points. This method ensures a logical and well-organized slide structure that goes beyond simple paragraph splitting.

### 2. Presentation Styling (via python-pptx)  
The application takes the user's uploaded `.pptx` file and uses it as a base template. For each slide object returned by the Gemini API, it adds a new slide to the presentation using one of the template's master layouts. It then populates the title and content placeholders with the generated text. This ensures that every new slide automatically inherits the design, fonts, colors, and branding of the original template.  

---

## Tech Stack

- **Backend**: Python with Flask  
- **LLM**: Google Gemini API (`gemini-1.5-flash`)  
- **Presentation Generation**: python-pptx  
- **Deployment**: Vercel  
- **Frontend**: HTML, CSS, JavaScript (no frameworks)  

---

## Setup and Usage

You can run this project locally for development or deploy it directly to Vercel.

### Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/auto-ppt-generator.git
   cd auto-ppt-generator
