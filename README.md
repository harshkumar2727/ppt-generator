Auto PPT GeneratorThis web application allows you to automatically generate a PowerPoint presentation from a block of text. You can provide a .pptx or .potx file as a template, and the application will use its styles and layouts to create a new presentation.FeaturesText to Presentation: Convert long-form text or markdown into a structured PowerPoint presentation.Template-Based Styling: Upload your own PowerPoint template (.pptx or .potx) to maintain a consistent look and feel. The app will infer styles, colors, fonts, and layouts.Image Reuse: Images from your template will be reused in the generated presentation where appropriate.LLM Integration: Utilizes Google's Gemini API to intelligently structure the content into slides.Secure API Key Handling: Your API key is loaded securely from a .env file on the server and is never exposed to the client.
Auto PPT GeneratorThis web application automatically generates a PowerPoint presentation from a block of text using a provided template and the Google Gemini API.Project Structure/
|-- app.py                  # Main Flask application
|-- requirements.txt        # Python dependencies
|-- vercel.json             # Vercel deployment configuration
|-- .env.example            # Example for environment variables
|-- templates/
|   |-- index.html          # Frontend HTML
|-- static/
|   |-- styles.css          # CSS styles
|   |-- script.js           # Frontend JavaScript
Local SetupClone the repository:git clone <your-repo-url>
cd <your-repo-name>
Create a virtual environment:python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
Install dependencies:pip install -r requirements.txt
Set up environment variables:Create a file named .env in the root directory.Copy the contents of .env.example into it.Add your Google Gemini API key to the .env file:GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
Run the application:flask run
Open your browser and go to http://127.0.0.1:5000.Deployment to VercelFollow these steps to deploy your application to Vercel.1. Push to GitHubMake sure your project, including the new vercel.json file, is pushed to a GitHub repository.2. Create a Vercel ProjectSign up or log in to Vercel.From your dashboard, click "Add New..." and select "Project".Import the GitHub repository you just pushed to.3. Configure the ProjectVercel should automatically detect that you are using a Python application.Expand the "Environment Variables" section.Add your Gemini API key:Name: GEMINI_API_KEYValue: YOUR_GEMINI_API_KEY (paste your actual key here)Click the "Deploy" button.4. Enjoy Your Deployed App!Vercel will build and deploy your application. Once it's complete, you will be given a public URL where you can access your Auto PPT Generator.