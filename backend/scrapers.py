from botasaurus_server.server import Server
from src.scrape_heading_task import scrape_heading_task

Server.add_scraper(
    scrape_heading_task,
)
