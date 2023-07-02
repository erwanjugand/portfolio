echo -n "Background Desktop : 0/4\r"
convert assets/images/background-original.jpg -gravity south -resize 1920x1080^ -extent 1920x1080 -quality 85 public/images/background-desktop-x1.webp
echo -n 'Background Desktop : 1/4\r'
convert assets/images/background-original.jpg -gravity south -resize 1920x1080^ -extent 1920x1080 -quality 80 public/images/background-desktop-x1.avif
echo -n 'Background Desktop : 2/4\r'
convert assets/images/background-original.jpg -gravity south -resize 3840x2160^ -extent 3840x2160 -quality 80 public/images/background-desktop-x2.webp
echo -n 'Background Desktop : 3/4\r'
convert assets/images/background-original.jpg -gravity south -resize 3840x2160^ -extent 3840x2160 -quality 70 public/images/background-desktop-x2.avif
echo -n 'Background Desktop : 4/4\n'

echo -n "Background Mobile : 0/4\r"
convert assets/images/background-original.jpg -gravity center -resize 768x1024^ -extent 768x1024 -quality 85 public/images/background-mobile-x1.webp
echo -n "Background Mobile : 1/4\r"
convert assets/images/background-original.jpg -gravity center -resize 768x1024^ -extent 768x1024 -quality 80 public/images/background-mobile-x1.avif
echo -n "Background Mobile : 2/4\r"
convert assets/images/background-original.jpg -gravity center -resize 1536x2048^ -extent 1536x2048 -quality 80 public/images/background-mobile-x2.webp
echo -n "Background Mobile : 3/4\r"
convert assets/images/background-original.jpg -gravity center -resize 1536x2048^ -extent 1536x2048 -quality 70 public/images/background-mobile-x2.avif
echo -n "Background Mobile : 4/4\n"

echo -n "Profile : 0/6\r"
convert assets/images/erwan-jugand-original.jpg -gravity center -resize 300x300^ -extent 300x300 -quality 90 public/images/erwan-jugand-x1.webp
echo -n "Profile : 1/6\r"
convert assets/images/erwan-jugand-original.jpg -gravity center -resize 300x300^ -extent 300x300 -quality 85 public/images/erwan-jugand-x1.avif
echo -n "Profile : 2/6\r"
convert assets/images/erwan-jugand-original.jpg -gravity center -resize 600x600^ -extent 600x600 -quality 90 public/images/erwan-jugand-x2.webp
echo -n "Profile : 3/6\r"
convert assets/images/erwan-jugand-original.jpg -gravity center -resize 600x600^ -extent 600x600 -quality 85 public/images/erwan-jugand-x2.avif
echo -n "Profile : 4/6\r"
convert assets/images/erwan-jugand-original.jpg -gravity center -resize 1200x1200^ -extent 1200x1200 -quality 85 public/images/erwan-jugand-x3.webp
echo -n "Profile : 5/6\r"
convert assets/images/erwan-jugand-original.jpg -gravity center -resize 1200x1200^ -extent 1200x1200 -quality 80 public/images/erwan-jugand-x3.avif
echo -n "Profile : 6/6\n"
