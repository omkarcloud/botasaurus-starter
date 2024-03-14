from botasaurus import *

@request
def scrape_heading_task(request: AntiDetectRequests, data):
    link = data["link"]
    # Navigate to the Omkar Cloud website
    soup = request.bs4(link)
    
    # Retrieve the heading element's text
    heading = soup.find('h1').get_text()

    # Save the data as a JSON file in output/scrape_heading_task.json
    return {
        "heading": heading
    }
    