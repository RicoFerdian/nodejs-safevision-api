import cv2
# import matplotlib.pyplot as plt

# username:root
# pass: it52016

# alamat rtsp
# "rtsp://root:it52016@"+ipaddress+"/axis-media/media.amp"
# rtsp://root:it52016@10.126.75.11/axis-media/media.amp

# gerbang pos 1
# 10.235.75.20
# 10.235.75.21

# SI
# 10.126.75.11
# 10.126.75.12
# 10.126.75.13

# D3 FTI
# 10.170.75.11
# 10.170.75.12
# 10.170.75.13

# rektorat
# 10.101.75.11
# 10.101.75.12
# 10.101.75.13

# masjid
# 10.101.75.15
# 10.101.75.16
# 10.101.75.17

# despro
# 10.134.75.11
# 10.134.75.12
# 10.134.75.13

# FTK
# 10.143.75.11
# 10.143.75.12
# 10.143.75.13

# rektorat parkir
# 10.101.75.14

# biologi
# 10.233.75.11
# 10.233.75.12

# arsitektur
# 10.132.75.11

# rtsp://root:it52016@10.235.75.21/axis-media/media.amp

def getCam(ipaddress):
    return "rtsp://root:it52016@"+ipaddress+"/axis-media/media.amp"

def getVid(ipaddress):
    return cv2.VideoCapture(getCam(ipaddress))

def showFrame(cap):
    ret, frame = cap.read()
    frame = cv2.resize(frame,(480,320))
    return frame

import numpy as np
import time
import cv2

# cap = getVid("10.235.75.20")
cap = cv2.VideoCapture(0)

while(True):
    
    frame = showFrame(cap)

    cv2.imshow('frame',frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()