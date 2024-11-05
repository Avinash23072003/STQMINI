from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Initialize the WebDriver
driver = webdriver.Chrome()  # Make sure the ChromeDriver is installed and added to PATH

# Open the app
driver.get("http://localhost:5174")  # Adjust the port if necessary

# Wait until the input fields are visible
origin_input = WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.XPATH, "//input[@placeholder='Origin']"))
)
destination_input = driver.find_element(By.XPATH, "//input[@placeholder='Destination']")

# Enter origin and destination
origin_input.send_keys("Origin City")
destination_input.send_keys("Destination City")

# Click the "Compare Cabs" button
compare_button = driver.find_element(By.XPATH, "//button[text()='Compare Cabs']")
compare_button.click()

# Wait for results to load and check if results are displayed
try:
    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.XPATH, "//table"))
    )
    print("Test Passed: Results displayed successfully.")
except:
    print("Test Failed: No results displayed.")

# Close the browser
time.sleep(5)  # Optional: to view the result before closing
driver.quit()
