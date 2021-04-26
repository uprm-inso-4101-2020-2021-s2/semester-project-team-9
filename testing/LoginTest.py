import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


driver = webdriver.Chrome()
driver.maximize_window()
driver.get("http://localhost:3000")

time.sleep(10)

login = driver.find_element_by_xpath("//*[@id='login']/i']")
login.click()

time.sleep(5)

email = driver.find_element_by_xpath("//*[@id='LogInForm']/div[1]/input")
email.send_keys('agustin.rullan@upr.edu')
password = driver.find_element_by_xpath('//*[@id="LogInForm"]/div[2]/input')
password.send_keys('password1')

login.click()

time.sleep(20)

driver.close()
