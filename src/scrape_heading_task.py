from botasaurus.request import request, Request
from botasaurus.make_soup import make_soup

@request
def scrape_heading_task(request: Request, data):
    link = data["link"]
    # Navigate to the Omkar Cloud website
    soup = make_soup(link)
    
    # Retrieve the heading element's text
    heading = soup.find('h1').get_text()

    # Save the data as a JSON file in output/scrape_heading_task.json
    return {
        "heading": heading
    }
    