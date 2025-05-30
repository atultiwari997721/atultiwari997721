<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atul Tiwari - Portfolio</title>
    
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #010409; /* Very dark background - almost black */
            color: #e6edf3; /* Lighter text for better contrast */
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            min-height: 100vh;
            box-sizing: border-box;
        }

        .container {
            width: 100%;
            max-width: 960px; /* Adjust as needed */
            margin: auto;
        }

        header h1 {
            font-size: 2em;
            color: #79c0ff; /* Slightly brighter blue for the greeting */
            margin-bottom: 20px;
        }

        /* GitHub Stats and Most Used Languages Section */
        .github-stats-section {
            display: flex;
            flex-wrap: wrap; /* Allows cards to wrap on smaller screens */
            gap: 20px;
            margin-bottom: 40px;
        }

        .github-stats-card,
        .most-used-languages-card {
            background-color: #0d1117; /* Darker card background */
            border-radius: 6px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* More pronounced shadow */
            flex: 1; /* Allows cards to grow and shrink */
            min-width: 300px; /* Minimum width before wrapping */
            border: 1px solid #30363d; /* Subtle border */
        }

        .github-stats-card h2,
        .most-used-languages-card h2 {
            color: #e6edf3; /* Lighter heading color */
            margin-top: 0;
            font-size: 1.2em;
            border-bottom: 1px solid #30363d;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }

        .github-stats-card ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .github-stats-card ul li {
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .github-stats-card ul li span {
            font-weight: bold;
            color: #79c0ff; /* Blue for numbers */
        }

        .github-grade {
            text-align: center;
            margin-top: 20px;
        }

        .github-grade .grade-text {
            font-size: 3em;
            font-weight: bold;
            color: #2ea043; /* Slightly deeper green for grade */
            border: 3px solid #2ea043;
            border-radius: 50%;
            padding: 10px 20px;
            display: inline-block;
        }

        /* Most Used Languages Styling */
        .language-bar-container {
            background-color: #30363d;
            border-radius: 5px;
            overflow: hidden;
            height: 10px;
            margin-bottom: 15px;
        }

        .language-bar {
            display: flex;
            height: 100%;
        }

        /* Updated language colors and percentages */
        .lang-python { background-color: #3572A5; } /* Python blue */
        .lang-html { background-color: #e34c26; } /* HTML orange */
        .lang-css { background-color: #563d7c; } /* CSS purple */
        .lang-javascript { background-color: #f7df1e; } /* JavaScript yellow */

        .language-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .language-list li {
            margin-bottom: 5px;
            display: flex;
            align-items: center;
        }

        .color-box {
            width: 12px;
            height: 12px;
            border-radius: 3px;
            margin-right: 8px;
        }

        /* Updated color box classes */
        .color-box.python { background-color: #3572A5; }
        .color-box.html { background-color: #e34c26; }
        .color-box.css { background-color: #563d7c; }
        .color-box.javascript { background-color: #f7df1e; }

        /* Tech Stack Section */
        .tech-stack-section {
            background-color: #0d1117; /* Darker background for this section too */
            border-radius: 6px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
            margin-bottom: 40px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            border: 1px solid #30363d; /* Subtle border */
        }

        .tech-icons {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            flex: 2; /* Allow tech icons to take more space */
        }

        .tech-icons img {
            height: 30px; /* Adjust size of tech icons */
            vertical-align: middle;
        }

        .right-aligned-content {
            flex: 1;
            display: flex;
            justify-content: flex-end; /* Align image to the right */
        }

        .right-aligned-content img {
            max-width: 100%;
            border-radius: 6px;
            border: 1px solid #30363d; /* Border for the image */
        }


        /* Portfolio Section */
        .portfolio-section {
            background-color: #0d1117; /* Darker background */
            border-radius: 6px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
            margin-bottom: 20px;
            border: 1px solid #30363d; /* Subtle border */
        }

        .portfolio-section h2 {
            color: #e6edf3; /* Lighter heading color */
            margin-top: 0;
            border-bottom: 1px solid #30363d;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }

        .portfolio-section p a {
            color: #79c0ff; /* Blue for links */
            text-decoration: none;
            font-weight: bold;
        }

        .portfolio-section p a:hover {
            text-decoration: underline;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .github-stats-section {
                flex-direction: column;
            }

            .tech-stack-section {
                flex-direction: column;
                align-items: center;
            }

            .right-aligned-content {
                justify-content: center; /* Center image on smaller screens */
                margin-top: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Hi 👋 ! My name is Atul and I'm a coding enthusiast, from India</h1>
        </header>

        <section class="github-stats-section">
            <div class="github-stats-card">
                <h2>Atul Tiwari's GitHub Stats</h2>
                <ul>
                    <li>Total Stars Earned: <span>40</span></li>
                    <li>Total Commits: <span>178</span></li>
                    <li>Total PRs: <span>0</span></li>
                    <li>Total Issues: <span>0</span></li>
                    <li>Contributed to (last year): <span>0</span></li>
                </ul>
                </div>

            <div class="most-used-languages-card">
                <h2>Most Used Languages</h2>
                <div class="language-bar-container">
                    <div class="language-bar">
                        <div class="lang-python" style="width: 60%;"></div>
                        <div class="lang-html" style="width: 20%;"></div>
                        <div class="lang-css" style="width: 10%;"></div>
                        <div class="lang-javascript" style="width: 10%;"></div>
                    </div>
                </div>
                <ul class="language-list">
                    <li><span class="color-box python"></span> Python 60%</li>
                    <li><span class="color-box html"></span> HTML 20%</li>
                    <li><span class="color-box css"></span> CSS 10%</li>
                    <li><span class="color-box javascript"></span> JavaScript 10%</li>
                </ul>
            </div>
        </section>

        <section class="tech-stack-section">
            <h2></h2> <div class="tech-icons">
                <img src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python">
                <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
                <img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
                <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white" alt="JavaScript">
                <img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js">
                <img src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=white" alt="React">
                <img src="https://img.shields.io/badge/-Next.js-000000?style=flat&logo=next.js&logoColor=white" alt="Next.js">
                <img src="https://img.shields.io/badge/-Express.js-000000?style=flat&logo=express&logoColor=white" alt="Express.js">
                <img src="https://img.shields.io/badge/-AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white" alt="AWS">
                <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB">
                <img src="https://img.shields.io/badge/-Canva-00C4CC?style=flat&logo=canva&logoColor=white" alt="Canva">
                 <img src="https://img.shields.io/badge/-Figma-F24E1E?style=flat&logo=figma&logoColor=white" alt="Figma">
                <img src="https://img.shields.io/badge/-Discord-5865F2?style=flat&logo=discord&logoColor=white" alt="Discord">
                <img src="https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=white" alt="Git">
                </div>
            <div class="right-aligned-content">
                <img src="https://via.placeholder.com/300x200?text=Your+Workspace" alt="Your Workspace">
            </div>
        </section>

        <section class="portfolio-section">
            <h2>MY PORTFOLIO</h2>
            <p><a href="https://github.com/atultiwari997721" target="_blank">Atul Tiwari's Space</a></p>
        </section>
    </div>
</body>
</html>
