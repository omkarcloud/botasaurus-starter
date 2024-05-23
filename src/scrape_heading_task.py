from botasaurus.request import request, Request
from botasaurus.soupify import soupify

@request
def scrape_heading_task(request: Request, data):
    # Navigate to the Link
    response = request.get(data["link"])

    # Create a BeautifulSoup object    
    soup = soupify(response)
    
    # Retrieve the heading element's text
    heading = soup.find('h1').get_text()

    # Save the data as a JSON file in output/scrape_heading_task.json
    return {
        "heading": heading
    }
     