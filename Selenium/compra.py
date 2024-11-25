from selenium import webdriver
from selenium.webdriver.common.by import By
import time

navegador = webdriver.Firefox()

navegador.get('http://localhost:5173/')
time.sleep(2)

navegador.find_element(By.XPATH, '/html/body/div/div/main/section[1]/div[1]/div/button').click()
time.sleep(1)
navegador.find_element(By.XPATH, '/html/body/div/div/main/section[1]/div[2]/div/button').click()
time.sleep(1)
navegador.find_element(By.XPATH, '/html/body/div/div/main/section[2]/div[1]/div/button').click()
time.sleep(1)
navegador.find_element(By.XPATH, '/html/body/div/div/nav/a[3]').click()
time.sleep(1)

navegador.find_element(By.XPATH, '/html/body/div/div/div/ul/li[2]/div[2]/button[1]').click()
time.sleep(1)
navegador.find_element(By.XPATH, '/html/body/div/div/div[2]/div/textarea').click()
time.sleep(1)
navegador.find_element(By.XPATH, '/html/body/div/div/div[2]/div/textarea').send_keys('Tirar a calabresa')
time.sleep(0.5)
navegador.find_element(By.XPATH, '/html/body/div/div/div[2]/div/div/button[1]').click()
time.sleep(0.5)

navegador.find_element(By.XPATH, '/html/body/div/div/div/ul/li[1]/div[2]/button[2]').click()
time.sleep(1)

navegador.find_element(By.XPATH, '/html/body/div/div/div/div/button[2]').click()
time.sleep(1)

navegador.find_element(By.XPATH, '/html/body/div/div/header/a').click()
time.sleep(1)

navegador.find_element(By.XPATH, '/html/body/div/div/nav/a[2]').click()
time.sleep(1)

navegador.find_element(By.XPATH, '/html/body/div/div/button').click()
time.sleep(1)

