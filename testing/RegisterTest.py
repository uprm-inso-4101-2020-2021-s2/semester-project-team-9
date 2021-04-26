import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


driver = webdriver.Chrome()
driver.maximize_window()
driver.get("http://localhost:3000")

time.sleep(10)

signup = driver.find_element_by_xpath("//*[@id='signup']")
signup.click()

time.sleep(3)

firstname = driver.find_element_by_xpath("//*[@id='signUpForm']/div[1]/input")
firstname.send_keys('Agustin')
lastname = driver.find_element_by_xpath('//*[@id="signUpForm"]/div[2]/input')
lastname.send_keys('Rullan')
email = driver.find_element_by_xpath('//*[@id="signUpForm"]/div[3]/input')
email.send_keys('agustin.rullan@upr.edu')
password = driver.find_element_by_xpath('//*[@id="signUpForm"]/div[4]/input')
password.send_keys('password1')
confirmationpass = driver.find_element_by_xpath('//*[@id="signUpForm"]/div[5]/input')
confirmationpass.send_keys('password1')

agreeterms = driver.find_element_by_xpath('//*[@id="terms"]')
agreeterms.click()

time.sleep(20)

driver.close()

