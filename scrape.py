from bs4 import BeautifulSoup
import requests
import json

# Script used to scrape website

url = 'https://www.healiom.com/healiom-terms'
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

content = {"faq": []}
sections = soup.find_all(['h2', 'h3', 'p', 'ul'])

current_section = None
for element in sections:
    if element.name == 'h3' or element.name =='h2':
        current_section = element.get_text()
        content["faq"].append({ 
            "title": current_section,
            "body": []
        })
    elif element.name == 'p' and current_section:
        content["faq"][-1]['body'].append(element.get_text())
    elif element.name == 'ul' and current_section:
        bullets = [li.get_text() for li in element.find_all('li')]
        content["faq"][-1]['body'].append(bullets)

with open('content.js', 'w') as f:
    f.write(f"export default {json.dumps(content, indent=2)}")