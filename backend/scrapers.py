from botasaurus_server.server import Server
from src.scrape_heading_task import scrape_heading_task

# Add the scraper to the server
Server.add_scraper(scrape_heading_task)