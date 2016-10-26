#!/usr/bin/python3
# C. Pitts
# October 25, 2016

from selenium import webdriver

driver = webdriver.Firefox()
driver.get("http://aws.thezachcave.com")

cats = driver.find_elements_by_class_name("cat")

while (True):
    try:
        for cat in cats:
            if cat.is_displayed() is True:
                cat.click()
    except:
        pass
