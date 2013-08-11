### Application 1 - Color Analyzation

1. Take picture
	* raspstill -t 250 -o ~/Desktop/image.jpg -e jpg -w 400 -h 300 -q 75 -n
* Perform color quantization on image
* Retrieve color histogram of image
* Analyze histogram
* Output colors to server

### Application 2 - Face Detection Analytics

1. Take picture
	* raspstill -t 250 -o ~/Desktop/image.jpg -e jpg -w 400 -h 300 -q 75 -n
* Create opencv image and analyze for faces
* Record face to server 
* Create vis web page to view analytics

### Application 3 - Face Detection Wake

* Take picture
	* raspstill -t 250 -o ~/Desktop/image.jpg -e jpg -w 400 -h 300 -q 75 -n
* Analyze image for face
* Perform functionality because there is a face
* Go to sleep after 30 seconds or so