from bs4 import BeautifulSoup
import requests
import json

# Script used to scrape website

url = 'https://www.healiom.com/healiom-privacy'
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

content = {"healiom-privacy": []}
sections = soup.find_all(['h2', 'p', 'ul'])

current_section = None
for element in sections:
    if element.name == 'h2':
        current_section = element.get_text()
        content["healiom-privacy"].append({ 
            "title": current_section,
            "body": []
        })
    elif element.name == 'p' and current_section:
        content["healiom-privacy"][-1]['body'].append(element.get_text())
    elif element.name == 'ul' and current_section:
        bullets = [li.get_text() for li in element.find_all('li')]
        content["healiom-privacy"][-1]['body'].append(bullets)

with open('content.js', 'w') as f:
    f.write(f"export default {json.dumps(content, indent=2)}")