from selenium import webdriver
from selenium.webdriver.common.by import By
import time

navegador = webdriver.Firefox()

navegador.get('http://localhost:5173/')
time.sleep(2)

navegador.find_element(By.XPATH, '/html/body/div/div/main/section[1]/div[1]/div/button').click()
time.sleep(0.5)
navegador.find_element(By.XPATH, '/html/body/div/div/main/section[1]/div[1]/div/button').click()
time.sleep(0.5)
navegador.find_element(By.XPATH, '/html/body/div/div/main/section[1]/div[2]/div/button').click()
time.sleep(0.5)
navegador.find_element(By.XPATH, '/html/body/div/div/main/section[1]/div[2]/div/button').click()
time.sleep(0.5)
navegador.find_element(By.XPATH, '/html/body/div/div/main/section[2]/div[1]/div/button').click()
time.sleep(0.5)
navegador.find_element(By.XPATH, '/html/body/div/div/main/section[2]/div[1]/div/button').click()
time.sleep(0.5)
navegador.find_element(By.XPATH, '/html/body/div/div/main/section[2]/div[1]/div/button').click()
time.sleep(0.5)
navegador.find_element(By.XPATH, '/html/body/div/div/nav/a[3]').click()
time.sleep(1)

botao = navegador.find_element(By.XPATH, '/html/body/div/div/div/div/button[2]')
navegador.execute_script("arguments[0].scrollIntoView(true);", botao)
botao.click()
time.sleep(1)

navegador.find_element(By.XPATH, '/html/body/div/div/header/a').click()
time.sleep(1)

navegador.find_element(By.XPATH, '/html/body/div/div/nav/button').click()
time.sleep(1)

navegador.find_element(By.XPATH, '/html/body/div/div/div[1]/ul/li[6]/a').click()
time.sleep(1)

navegador.find_element(By.XPATH, '/html/body/div/div/div/div/label[1]').click()
time.sleep(1)

navegador.find_element(By.XPATH, '/html/body/div/div/div/div/label[2]').click()
time.sleep(1)

navegador.find_element(By.XPATH, '/html/body/div/div/div/button').click()
time.sleep(1)