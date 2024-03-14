from botasaurus_server.scraper import Scraper
from src.scrape_heading_task import scrape_heading_task

Scraper.add_scraper(
    scrape_heading_task,
)
